import Chevron from '@material-ui/icons/ArrowBackIos'
import Typography from '@material-ui/core/Typography'
import { makeStyles, Theme } from '@material-ui/core/styles'

export const VoteWidgetStyles = makeStyles((theme: Theme) => ({
    chevronDown: {
        marginBottom: 5,
        marginTop: -5,
        transform: 'rotate(-90deg)',
    },
    chevronUp: {
        marginBottom: -5,
        marginTop: 5,
        transform: 'rotate(90deg)',
    },
    container: {
        '&.active': {
            cursor: 'pointer',
        },
        '&:hover': {
            '&.active': {
                boxShadow: '0px 0px 4px rgba(0,0,0,0.2)',
            },
        },
        alignItems: 'center',
        borderRadius: '50%',
        display: 'flex',
        margin: theme.spacing(1),
        padding: theme.spacing(1),
        position: 'relative',
        transition: '0.3s',
    },
}))

interface IProps {
    voteAction: any
    voteResult: any
    id: string
    resourceType: 'ARTICLE' | 'LINK' | 'DISCUSSION'
    loginFirstToVote: () => void
    isLoggedIn: boolean
}

const VoteWidget = ({
    id,
    resourceType,
    voteResult,
    voteAction,
    loginFirstToVote,
    isLoggedIn,
}: IProps) => {
    const classes = VoteWidgetStyles({})
    return (
        <>
            <div
                className={`${classes.container} ${
                    voteResult.hasVoted ? '' : 'active'
                }`}
            >
                <Chevron
                    onClick={() =>
                        !voteResult.hasVoted
                            ? isLoggedIn
                                ? voteAction({
                                      resourceId: {
                                          id,
                                          type: resourceType,
                                      },
                                      value: 1,
                                  })
                                : loginFirstToVote()
                            : null
                    }
                    color={voteResult.hasVoted ? 'disabled' : 'primary'}
                    className={classes.chevronUp}
                />
            </div>
            <Typography variant="h6">
                {voteResult && voteResult.sum ? voteResult.sum : 0}
            </Typography>
            <Typography variant="caption">Votes</Typography>
            <div
                className={`${classes.container} ${
                    voteResult.hasVoted ? '' : 'active'
                }`}
            >
                <Chevron
                    onClick={() =>
                        !voteResult.hasVoted
                            ? isLoggedIn
                                ? voteAction({
                                      resourceId: {
                                          id,
                                          type: resourceType,
                                      },
                                      value: -1,
                                  })
                                : loginFirstToVote()
                            : null
                    }
                    color={voteResult.hasVoted ? 'disabled' : 'primary'}
                    className={classes.chevronDown}
                />
            </div>
            {voteResult.hasVoted && (
                <Typography variant="caption">
                    You have already voted
                </Typography>
            )}
        </>
    )
}

export default VoteWidget
