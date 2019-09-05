import React from 'react'
import ReactMarkdown from 'markdown-to-jsx'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import config from '../../config'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Prism from 'prismjs'
import katex from 'katex'

const Renderer = ({ markdown }) => {
    const useStyles = makeStyles((theme: Theme) => ({
        image: {
            borderRadius: 4,
            display: 'block',
            margin: 'auto',
            maxWidth: '100%',
        },
        code: {
            borderRadius: 4,
            margin: 'auto',
            maxWidth: '100%',
            background: theme.palette.common.black,
            color: theme.palette.common.white,
            padding: theme.spacing(0, 1),
            fontSize: 16,
        },
        quote: {
            padding: theme.spacing(1),
            borderLeft: `3px solid ${theme.palette.primary.main}`,
            '& p': {
                margin: 0,
            },
        },
        rendered: {
            '& pre code': {
                display: 'block',
            },
        },
        katex: {
            fontSize: '2em',
            padding: theme.spacing(2),
            borderRadius: 4,
        },
    }))

    const classes = useStyles()

    const CustomIMG = props => {
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
        if (props.className === 'lang-latex') {
            return (
                <div
                    className={classes.katex}
                    dangerouslySetInnerHTML={{
                        __html: katex.renderToString(props.children, {
                            throwOnError: false,
                            displayMode: true,
                        }),
                    }}
                />
            )
        } else {
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
    }

    const options = {
        forceBlock: true,
        overrides: {
            blockquote: {
                component: Typography,
                props: {
                    className: classes.quote,
                },
            },
            h1: {
                component: Typography,
                props: {
                    gutterBottom: true,
                    variant: 'h4',
                    'aria-label': 'title',
                },
            },
            h2: {
                component: Typography,
                props: {
                    gutterBottom: true,
                    variant: 'h5',
                    'aria-label': 'title',
                },
            },
            h3: {
                component: Typography,
                props: {
                    gutterBottom: true,
                    variant: 'h6',
                    'aria-label': 'title',
                },
            },
            h4: {
                component: Typography,
                props: {
                    gutterBottom: true,
                    variant: 'h6',
                    'aria-label': 'title',
                    paragraph: true,
                },
            },
            h5: {
                component: Typography,
                props: {
                    gutterBottom: true,
                    variant: 'h6',
                    'aria-label': 'title',
                    paragraph: true,
                },
            },
            h6: {
                component: Typography,
                props: {
                    gutterBottom: true,
                    variant: 'h6',
                    'aria-label': 'title',
                    paragraph: true,
                },
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

    return (
        <div className={classes.rendered}>
            <ReactMarkdown options={options}>{markdown}</ReactMarkdown>
        </div>
    )
}

export default Renderer
