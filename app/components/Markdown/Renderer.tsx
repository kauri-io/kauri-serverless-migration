import React from 'react'
import ReactMarkdown from 'markdown-to-jsx'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import config from '../../config'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Button from '../Button'
import 'prismjs/themes/prism-okaidia.css'
import Prism from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-kotlin'
import 'prismjs/components/prism-python'

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
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1,
        },
    }))
    const classes = useStyles()
    const language = props.className
        ? props.className.replace('lang-', '')
        : 'bash'
    return (
        <div>
            <Button
                variant="outlined"
                color="primary"
                onClick={() => navigator.clipboard.writeText(props.children)}
            >
                Copy to clipboard
            </Button>
            <code
                className={classes.code}
                dangerouslySetInnerHTML={{
                    __html: Prism.highlight(
                        props.children,
                        Prism.languages[language],
                        language
                    ),
                }}
            />
        </div>
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
