import TextField from '@material-ui/core/TextField'
import { Paper } from '@material-ui/core'
import { useStyles } from '../styles'
import Preview from './Preview'

const sampleLink = {
    "id": "1111cccc5f",
    "dateCreated": "2019-10-05T09:54:58.787Z",
    "submitterId": { "type": "USER", "id": "f0f15cedc719b5a55470877b0710d5c7816916b1" },
    "url": "https://article.com/my-article",
    "title": "Smart Contracts: The Blockchain Technology That Will Replace Lawyers",
    "description": "TLDR: A smart contract is a computer protocol intended to digitally facilitate, verify, or enforce the negotiation or performance of a contract. Smart contracts allow the performan",
    "attributes": { "background_image": "https://pbs.twimg.com/ad_img/1128053087166287872/kQhsjPBf?format=jpg&name=small" },
    "authorName": "Greg",
    "authorSocial": { "github": "gjeanmart" }
}

const LinkInput = () => {
    const classes = useStyles({})
    return <Paper className={classes.linkInputContainer}>
        <TextField label='Add external link' className={classes.linkInput} fullWidth={true} placeholder='Add external link' multiline={true} />
        <Preview  classes={classes} {...sampleLink} />
    </Paper>
}
export default LinkInput