import styled from 'styled-components'
import Button from '../../components/Button'
import { Title2 } from '../Typography'
import Link from 'next/link'
import { Grid, makeStyles } from '@material-ui/core'

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    > :not(:last-child) {
        margin-bottom: ${props => props.theme.space[1]}px;
    }
`

interface IProps {
    content: Array<any | null> | null
    isLoggedIn: boolean
}

const PublishYourOwnContentCTA: React.FunctionComponent<IProps> = props => {
    const useStyles = makeStyles(() => ({
        container: {
            maxWidth: (1242 / 12) * 3,
            width: '100%',
            marginRight: 'auto',
        },
    }))
    const classes = useStyles()
    return (
        <Grid className={classes.container} item={true} sm={3}>
            <Title2>Publish your own content</Title2>
            <Buttons>
                {props.content &&
                    props.content.map((content, key) => (
                        <Link
                            key={key}
                            href={
                                props.isLoggedIn
                                    ? content.link
                                    : `/login?r=${content.link}`
                            }
                        >
                            <a>
                                <Button
                                    color="primary"
                                    fullWidth={true}
                                    variant="outlined"
                                    key={content.actionName}
                                >
                                    {content.actionName}
                                </Button>
                            </a>
                        </Link>
                    ))}
            </Buttons>
        </Grid>
    )
}

export default PublishYourOwnContentCTA
