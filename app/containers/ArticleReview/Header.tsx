import styled from 'styled-components'
import { Title1, Label } from '../../components/Typography'
import Image from '../../components/Image'
import Button from '../../components/Button'
import moment from 'moment'
import theme from '../../lib/theme-config'
import RejectArticleModal from './RejectArticleModal'
import { ICommunity } from '../../lib/Module'

const Container = styled.div<{ bgUpdated: boolean }>`
    background: ${props => props.theme.bgPrimary};
    height: 250px;
    position: relative;
    z-index: 1;
    ${props => props.bgUpdated && `border: 4px solid ${props.theme.primary};`}
`

const Content = styled.div`
    display: flex;
    background: ${props => props.theme.bgPrimary};
    padding-top: 0;
    flex-direction: row;
    flex-wrap: wrap;
    padding: ${props => props.theme.space[2]}px ${props => props.theme.padding};
`

const Left = styled.div`
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 50%;
    flex: 1;
    z-index: 10;
`

const Right = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    z-index: 10;
`

const Actions = styled.div`
    width: 100%;
    padding: ${props => props.theme.space[2]}px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
`

const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    & > button {
        margin-left: ${props => props.theme.space[3]}px;
    }
`

const BGNotice = styled.span`
    display: flex;
    flex-direction: row;
`

const TagContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const TagWrap = styled.span<{ type?: string }>`
    display: flex;
    align-items: center;

    & > span {
        ${props =>
            props.type === 'added' && `background: ${theme.colors.primary}`};
        ${props => props.type === 'removed' && `background: #ce636f`};
        border-radius: 4px;
        padding: 2px 4px;
    }
    &:not(:last-child):after {
        content: '•';
        color: white;
        margin: ${theme.space[1] / 2}px;
        font-weight: ${theme.fontWeight[3]};
    }
`

interface IProps {
    communities: ICommunity[]
    routeChangeAction: (route: string) => void
    title: string
    attributes?: {
        background: string
    }
    date: string
    oldTags: string[]
    newTags: string[]
    bgUpdated: boolean
    openModalAction: (children: any) => void
    closeModalAction: () => void
    rejectArticleAction: ({
        cause,
        id,
        version,
    }: {
        cause: string
        id: string
        version: number
    }) => void
    approveArticleAction: ({
        id,
        version,
        contentHash,
        author,
        dateCreated,
    }: {
        id: string
        version: number
        contentHash: string
        author: string
        dateCreated: string
    }) => void
    currentVersion: string
    proposedVersion: string
    id: string
    author: {
        id: string
    }
    contentHash: string
    owner: string
    currentUser: string
    status: string
}

const formatTags = (oldTags: string[], newTags: string[]) => {
    const allTags = oldTags
        .concat(newTags)
        .filter((elem, pos, arr) => arr.indexOf(elem) === pos)
    return allTags.map(i => {
        if (oldTags.indexOf(i) !== -1 && newTags.indexOf(i) !== -1) {
            return {
                tag: i,
                type: 'unchanged',
            }
        } else if (oldTags.indexOf(i) !== -1 && newTags.indexOf(i) === -1) {
            return {
                tag: i,
                type: 'removed',
            }
        } else if (oldTags.indexOf(i) === -1 && newTags.indexOf(i) !== -1) {
            return {
                tag: i,
                type: 'added',
            }
        }
    })
}

const DiffTagList = (props: { oldTags: string[]; newTags: string[] }) => {
    const tags = formatTags(props.oldTags, props.newTags)
    if (tags.length > 0) {
        return (
            <TagContainer>
                {tags.map((i, key) => (
                    <TagWrap type={i && i.type} key={key}>
                        <Label color="white">{i && i.tag}</Label>
                    </TagWrap>
                ))}
            </TagContainer>
        )
    } else {
        return null
    }
}

const Header: React.FunctionComponent<IProps> = props => (
    <Container bgUpdated={props.bgUpdated}>
        {props.attributes && props.attributes.background && (
            <Image
                asBackground={true}
                height="100%"
                width="100%"
                overlay={{ color: theme.bgPrimary, opacity: 0.7 }}
                image={props.attributes.background}
            />
        )}
        <Content>
            <Actions>
                <BGNotice>
                    {props.bgUpdated ? (
                        <Label color="white">
                            The background has been updated
                        </Label>
                    ) : null}
                </BGNotice>
                {(props.owner === props.currentUser ||
                    props.communities.find(
                        ({ community }) => community.id === props.owner
                    )) &&
                    props.status === 'PENDING' && (
                        <Buttons>
                            <Button
                                color="primary"
                                variant="outlined"
                                onClick={() =>
                                    props.openModalAction({
                                        children: (
                                            <RejectArticleModal
                                                closeModalAction={() =>
                                                    props.closeModalAction()
                                                }
                                                confirmModal={cause =>
                                                    props.rejectArticleAction({
                                                        cause,
                                                        id: props.id,
                                                        version: parseInt(
                                                            props.proposedVersion,
                                                            10
                                                        ),
                                                    })
                                                }
                                            />
                                        ),
                                    })
                                }
                            >
                                Reject Changes
                            </Button>
                            <Button
                                color="primary"
                                variant="contained"
                                onClick={() =>
                                    props.approveArticleAction({
                                        author: props.author.id,
                                        contentHash: props.contentHash,
                                        dateCreated: props.date,
                                        id: props.id,
                                        version: parseInt(
                                            props.proposedVersion,
                                            10
                                        ),
                                    })
                                }
                            >
                                Approve Changes
                            </Button>
                        </Buttons>
                    )}
            </Actions>
            <Left>
                <Label color="white">
                    SUBMITTED - {moment(props.date).format('DD MMM YYYY HH:mm')}
                </Label>
                <Title1 color="white">{props.title}</Title1>
                <DiffTagList oldTags={props.oldTags} newTags={props.newTags} />
            </Left>
            <Right>
                <Label color="white">Status - {props.status}</Label>
            </Right>
        </Content>
    </Container>
)

export default Header
