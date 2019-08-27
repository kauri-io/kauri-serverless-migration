import React from 'react'
import ReactMarkdown from 'markdown-to-jsx'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import config from '../../config'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Prism from 'prismjs'
import 'prismjs/themes/prism-okaidia.css'

const CustomIMG = props => {
    const useStyles = makeStyles(() => ({
        image: {
            borderRadius: 4,
            display: 'block',
            margin: 'auto',
            maxWidth: '100%',
        },
    }))

    const classes = useStyles()
    return (
        <img
            className={classes.image}
            src={
                config.useCloudImage
                    ? props.src
                          .replace(
                              /https:\/\/api.beta.kauri.io:443\/ipfs\//g,
                              `https://${config.cloudImageId}.cloudimg.io/cdn/n/twebp/https://api.beta.kauri.io:443/ipfs/`
                          )
                          .replace(
                              /https:\/\/api.kauri.io:443\/ipfs\//g,
                              `https://${config.cloudImageId}.cloudimg.io/cdn/n/twebp/https://api.beta.kauri.io:443/ipfs/`
                          )
                    : props.src
            }
        />
    )
}

const CustomCodeBlock = props => {
    const useStyles = makeStyles((theme: Theme) => ({
        code: {
            borderRadius: 4,
            display: 'block',
            margin: 'auto',
            maxWidth: '100%',
            background: theme.palette.common.black,
            color: theme.palette.common.white,
            padding: theme.spacing(2),
        },
    }))
    const classes = useStyles()
    return (
        <code
            className={classes.code}
            dangerouslySetInnerHTML={{
                __html: Prism.highlight(
                    props.children,
                    Prism.languages.javascript,
                    'javascript'
                ),
            }}
        />
    )
}

const options = {
    overrides: {
        h1: {
            component: Typography,
            props: {
                gutterBottom: true,
                variant: 'h4',
            },
        },
        h2: {
            component: Typography,
            props: { gutterBottom: true, variant: 'h6' },
        },
        h3: {
            component: Typography,
            props: { gutterBottom: true, variant: 'subtitle1' },
        },
        h4: {
            component: Typography,
            props: { gutterBottom: true, variant: 'caption', paragraph: true },
        },
        p: { component: Typography, props: { paragraph: true } },
        a: { component: Link },
        li: {
            component: ({ ...props }) => (
                <li>
                    <Typography component="span" {...props} />
                </li>
            ),
        },
        img: {
            component: CustomIMG,
        },
        code: {
            component: CustomCodeBlock,
        },
    },
}

const Renderer = ({ markdown }) => {
    return <ReactMarkdown options={options}>{markdown}</ReactMarkdown>
}

export default Renderer
