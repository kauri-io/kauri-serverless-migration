import TextField from '@material-ui/core/TextField'
import styled from 'styled-components'
import Plus from './Plus'
import { ITag } from './types'
import { Component } from 'react'
import { Theme, withStyles } from '@material-ui/core/styles'

const styles = (theme: Theme) => ({
    input: {
        marginLeft: theme.spacing(2),
        width: '100%',
        '&:hover': {
            '& .MuiInput-underline::before': {
                borderBottomColor: 'rgba(255,255,255,0.6)',
            },
        },
        color: 'white',
        '& .MuiInputBase-root': {
            color: 'white',
        },
        '& .MuiInput-underline::before': {
            borderBottomColor: 'rgba(255,255,255,0.3)',
        },
    },
})

interface IProps {
    availableTags?: ITag[]
    selectedTags?: string[]
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    onSelect?: (tag: ITag) => void
    handleEnterKey: (val: string) => void
    removeLastTag: () => void
    classes: any
}

interface IState {
    selected: ITag | null
    value: string
    selectedIndex: number
}

const Wrapper = styled.div`
    background: transparent;
    display: flex;
    flex-direction: column;
    position: relative;
`

const TopRow = styled.div`
    display: flex;
    align-items: center;
    & > svg {
        margin-right: ${props => props.theme.space[1] / 2}px;
        cursor: pointer;
    }
`

const Results = styled.div`
    background: white;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    position: absolute;
    top: ${props => props.theme.space[3]}px;
    left: 0;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    & > .selected {
        background: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.white};
        & > span {
            color: ${props => props.theme.colors.white};
        }
    }
`

const Result = styled.div`
    color: ${props => props.theme.colors.primary};
    font-weight: ${props => props.theme.fontWeight[2]};
    cursor: pointer;
    font-weight: bold;
    text-transform: uppercase;
    font-size: ${props => props.theme.fontSizes[0]}px;
    padding: 5px ${props => props.theme.space[1]}px;

    & > span {
        color: ${props => props.theme.colors.textPrimary};
    }
    &:hover {
        text-decoration: underline;
    }

    &:first-child {
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
    }

    &:last-child {
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
    }
`

class TagInput extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = {
            selected: null,
            value: '',
            selectedIndex: 0,
        }
        this.handleKey = this.handleKey.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    public handleClick(tag: ITag) {
        if (this.props.onSelect) {
            this.props.onSelect(tag)
            ;(document.activeElement as HTMLElement).blur()
        }
        this.setState({ value: '', selectedIndex: 0 })
    }

    public handleKey(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.keyCode === 13) {
            this.props.handleEnterKey(
                this.props.availableTags &&
                    this.props.availableTags.length > 0 &&
                    this.props.availableTags[this.state.selectedIndex]
                    ? this.props.availableTags[this.state.selectedIndex].tag
                    : e.currentTarget.value
            )
            this.setState({ value: '', selectedIndex: 0 })
        }
        if (
            e.keyCode === 8 &&
            e.currentTarget.value === '' &&
            this.state.value === ''
        ) {
            this.props.removeLastTag()
        }
        if (e.keyCode === 40) {
            let currentIndex = this.state.selectedIndex
            const availableLength = this.props.availableTags
                ? this.props.availableTags.length
                : 1
            const newIndex =
                currentIndex >= availableLength ? 0 : (currentIndex += 1)
            this.setState({ selectedIndex: newIndex })
        }
        if (e.keyCode === 38) {
            let currentIndex = this.state.selectedIndex
            const availableLength = this.props.availableTags
                ? this.props.availableTags.length
                : 1
            const newIndex =
                currentIndex <= 0 ? availableLength : (currentIndex -= 1)
            this.setState({ selectedIndex: newIndex })
        }
    }

    updateState(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ value: e.target.value.toLowerCase() })
    }

    public render() {
        const available =
            this.props.availableTags &&
            this.props.availableTags.reduce(
                (all, item) => {
                    let match
                    if (this.props.selectedTags) {
                        match = this.props.selectedTags.find(
                            i => i === item.tag
                        )
                    }
                    if (!match) {
                        all.push(item)
                    }
                    return all
                },
                [] as ITag[]
            )
        return (
            <Wrapper>
                <div>
                    <TopRow>
                        <Plus />
                        <TextField
                            className={this.props.classes.input}
                            onKeyPress={(
                                e: React.KeyboardEvent<HTMLInputElement>
                            ) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault()
                                }
                            }}
                            onKeyUp={this.handleKey}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => {
                                this.props.onChange && this.props.onChange(e)
                                this.updateState(e)
                            }}
                            placeholder="Add Tag"
                            value={this.state.value}
                        />
                    </TopRow>
                </div>
                {this.state.value && this.state.value.length > 0 && (
                    <Results>
                        {Array.isArray(available) &&
                            available.map((i, index) => (
                                <Result
                                    className={
                                        index === this.state.selectedIndex
                                            ? 'selected'
                                            : ''
                                    }
                                    onClick={this.handleClick.bind(this, i)}
                                    key={index}
                                >
                                    {i.tag} <span>({i.count})</span>
                                </Result>
                            ))}
                        {!available ||
                            (available.filter(i => i.tag === this.state.value)
                                .length === 0 && (
                                <Result
                                    className={
                                        !available ||
                                        this.state.selectedIndex >=
                                            available.length
                                            ? 'selected'
                                            : ''
                                    }
                                    onClick={this.handleClick.bind(this, {
                                        tag: this.state.value,
                                    })}
                                >
                                    New Tag: <span>{this.state.value}</span>
                                </Result>
                            ))}
                    </Results>
                )}
            </Wrapper>
        )
    }
}

export default withStyles(styles)(TagInput)
