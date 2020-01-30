import { findDOMNode } from 'react-dom'
import Loading from '../components/Loading'
import { DataValue } from 'react-apollo'
import { Component } from 'react'

interface IState {
    showLoading: boolean
    page: number
}

export type PaginationDataQuery =
    | 'getCommunityMembers'
    | 'getCommunityContent'
    | 'searchCommunities'
    | 'searchAutocompleteCollections'
    | 'searchArticles'
    | 'searchAutocomplete'
    | 'searchCollections'
    | 'getArticleTransfers'
    | 'getBookmarks'
    | 'searchExternalLinks'
    | 'searchDiscussions'
    | 'getTips'

interface IProps {
    [queryName: string]: { [key in PaginationDataQuery]: { isLast: boolean } } &
        DataValue<any>
}

function withPagination(
    Paginated: React.FunctionComponent<any> | React.ComponentClass<any>,
    key: PaginationDataQuery | ((props: any) => PaginationDataQuery),
    queryName: string = 'data'
): React.ComponentClass<any> {
    class WithPagination extends Component<IProps, IState> {
        childRef: HTMLElement | null
        childRefElement: Element | null

        constructor(props: IProps) {
            super(props)
            this.state = {
                page: 0,
                showLoading: false,
            }
            this.childRef = null
            this.childRefElement = null
        }

        componentDidMount() {
            if (this.childRef) {
                const childRefElement = findDOMNode(this.childRef)
                this.childRefElement = childRefElement as Element
                ;(childRefElement as Element).addEventListener(
                    'touchend',
                    this.handleOnScroll
                )
                ;(childRefElement as Element).addEventListener(
                    'scroll',
                    this.handleOnScroll
                )
                return
            }
            window.addEventListener('touchend', this.handleOnScroll)
            window.addEventListener('scroll', this.handleOnScroll)
        }

        componentWillUnmount() {
            if (this.childRefElement) {
                ;(this.childRefElement as Element).removeEventListener(
                    'touchend',
                    this.handleOnScroll,
                    false
                )
                ;(this.childRefElement as Element).removeEventListener(
                    'scroll',
                    this.handleOnScroll,
                    false
                )
                return
            }
            window.removeEventListener('touchend', this.handleOnScroll, false)
            window.removeEventListener('scroll', this.handleOnScroll, false)
        }

        handleOnScroll = () => {
            const scrollTop =
                (this.childRefElement && this.childRefElement.scrollTop) ||
                (document.scrollingElement &&
                    document.scrollingElement.scrollTop) ||
                window.scrollY ||
                window.pageYOffset ||
                document.body.scrollTop +
                    ((document.documentElement &&
                        document.documentElement.scrollTop) ||
                        0)
            const scrollHeight =
                (this.childRefElement && this.childRefElement.scrollHeight) ||
                (document.scrollingElement &&
                    document.scrollingElement.scrollHeight) ||
                (document.documentElement &&
                    document.documentElement.scrollHeight) ||
                document.body.scrollHeight
            const clientHeight =
                (this.childRefElement && this.childRefElement.clientHeight) ||
                (document.scrollingElement &&
                    document.scrollingElement.clientHeight) ||
                document.body.getBoundingClientRect().height ||
                (document &&
                    document.documentElement &&
                    document.documentElement.clientHeight) ||
                window.innerHeight
            const scrolledToBottom =
                Math.ceil(scrollTop + clientHeight + 150) >= scrollHeight

            const k = typeof key === 'function' ? key(this.props) : key

            if (
                scrolledToBottom &&
                this.props[queryName] &&
                this.props[queryName][k] &&
                this.props[queryName][k].isLast !== true &&
                this.state.showLoading === false
            ) {
                const nextPage = this.state.page + 1
                this.setState({ showLoading: true })
                this.props[queryName].fetchMore({
                    updateQuery: (prev, { fetchMoreResult }) => {
                        this.setState({ showLoading: false, page: nextPage })
                        if (!fetchMoreResult) {
                            return prev
                        }
                        const result = {
                            [k]: {
                                __typename: prev[k].__typename,
                                content: [
                                    ...prev[k].content,
                                    ...fetchMoreResult[k].content,
                                ],
                                isLast: fetchMoreResult[k].isLast,
                                totalElements: prev[k].totalElements,
                                totalElementsBreakdown:
                                    prev[k].totalElementsBreakdown,
                                totalPages: prev[k].totalPages,
                            },
                        }
                        return result
                    },
                    variables: {
                        page: nextPage,
                    },
                })
            }
        }

        render() {
            const setChildRef = (childRef: HTMLElement) =>
                (this.childRef = childRef)

            return (
                <>
                    <Paginated {...this.props} setRef={setChildRef} />
                    {this.state.showLoading && <Loading />}
                </>
            )
        }
    }

    return WithPagination
}

export default withPagination
