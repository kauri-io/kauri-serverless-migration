import React from 'react'
import { searchTags } from '../../queries/Tag'
import { Subject, Subscription } from 'rxjs'
import { debounceTime, flatMap, map } from 'rxjs/operators'
import { withApollo } from 'react-apollo'
import { flowRight as compose } from 'lodash'
import { connect } from 'react-redux'
import ApolloClient from 'apollo-client'
import { TagSelector } from '../../components/Tags'
import { ITag } from '../../components/Tags/types'

const handleSearch$: Subject<string> = new Subject()

interface IState {
    tags: string[]
    availableTags: ITag[]
    sub?: Subscription
}

interface IProps {
    client: ApolloClient<{}>
    setFieldsValue: any
    getFieldDecorator: any
    tags: string[]
    updateTags?: (tags: string[]) => void
}

class TagSelectorContainer extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = {
            availableTags: [],
            tags: props.tags,
        }
        this.updateTags = this.updateTags.bind(this)
    }

    componentDidMount() {
        // Set the field with existing data
        if (this.props.setFieldsValue) {
            this.props.setFieldsValue({ tags: this.state.tags })
        }

        const sub = handleSearch$
            .pipe(
                debounceTime(100),
                flatMap((text: string) =>
                    this.props.client.query<{
                        searchTags: { content: ITag[] }
                    }>({
                        fetchPolicy: 'no-cache',
                        query: searchTags,
                        variables: { query: text, page: 0, size: 10 },
                    })
                ),
                map(
                    ({
                        data: {
                            searchTags: { content },
                        },
                    }) => content
                )
            )
            .subscribe((availableTags: ITag[]) => {
                if (availableTags.length === 0) {
                    availableTags = []
                }
                this.setState({ ...this.state, availableTags })
            })
        this.setState({ ...this.state, sub })
        handleSearch$.next('')
    }

    componentWillUnmount() {
        if (this.state.sub) {
            this.state.sub.unsubscribe()
        }
    }

    updateTags(tags: string[]) {
        this.setState(
            { tags, availableTags: [] },
            () => this.props.updateTags && this.props.updateTags(tags)
        )
    }

    fetchMatches(text?: string) {
        handleSearch$.next(text)
    }

    handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
        e.preventDefault()
    }

    render() {
        return (
            <TagSelector
                tags={this.state.tags}
                fetchMatches={this.fetchMatches}
                onChange={this.updateTags}
                availableTags={this.state.availableTags}
                maxTags={7}
            />
        )
    }
}

const mapStateToProps = () => {
    return {}
}

export default compose(
    withApollo,
    connect(mapStateToProps, {})
)(TagSelectorContainer)
