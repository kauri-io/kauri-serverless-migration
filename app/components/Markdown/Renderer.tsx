import React from 'react'
import ReactMarkdown from 'markdown-to-jsx'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import config from '../../config'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Prism from 'prismjs'
import katex from 'katex'
import Gist from 'react-gist'

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
            background: theme.palette.grey[200],
            color: theme.palette.common.black,
            padding: theme.spacing(0, 1),
            fontSize: 16,
            overflowX: 'auto',
            '& .token.punctuation': {
                color: theme.palette.common.black,
            },
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
                background: theme.palette.common.black,
                color: theme.palette.common.white,
                '& .token.punctuation': {
                    color: theme.palette.common.white,
                },
            },
        },
        katex: {
            fontSize: '2em',
            padding: theme.spacing(2),
            borderRadius: 4,
        },
        h1: {
            fontWeight: 500,
            fontSize: 30,
        },
        h2: {
            fontWeight: 500,
            fontSize: 24,
        },
        h3: {
            fontWeight: 500,
            fontSize: 20,
        },
        h4: {
            fontWeight: 500,
            fontSize: 16,
        },
        h5: {
            fontWeight: 500,
            fontSize: 14,
        },
        h6: {
            fontWeight: 500,
            fontSize: 14,
        },
        link: {
            overflowWrap: 'break-word',
            wordWrap: 'break-word',
            msWordBreak: 'break-all',
            wordBreak: 'break-all',
            msHyphens: 'auto',
            MozHyphens: 'auto',
            WebkitHyphens: 'auto',
            hyphens: 'auto',
        },
    }))

    const classes = useStyles()

    const CustomIMG = props => {
        return (
            <img
                alt={props.alt ? props.alt : 'article image'}
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
            let html

            //Non inline code blocks have a className set, so highlight in this case.
            if (props.className) {
                html = Prism.highlight(
                    props.children,
                    Prism.languages.javascript,
                    'javascript'
                )
            } else {
                html = Prism.highlight(
                    props.children,
                    Prism.languages.markup,
                    'markup'
                )
            }

            return (
                <code
                    className={classes.code}
                    dangerouslySetInnerHTML={{
                        __html: html,
                    }}
                />
            )
        }
    }

    const LinkOrGist = props => {
        console.log("props", props)
        if (props.href.indexOf('https://gist.github.com') !== -1) {
            return <Gist id={props.href.split('/')[4]} />
        } else {
            return <Link {...props} title={props.title || props.children[0]} target="_blank" rel="noopener" />
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
                    className: classes.h1,
                },
            },
            h2: {
                component: Typography,
                props: {
                    gutterBottom: true,
                    variant: 'h4',
                    'aria-label': 'title',
                    className: classes.h2,
                },
            },
            h3: {
                component: Typography,
                props: {
                    gutterBottom: true,
                    variant: 'h5',
                    //'aria-label': 'title',
                    className: classes.h3,
                },
            },
            h4: {
                component: Typography,
                props: {
                    gutterBottom: true,
                    variant: 'h6',
                    //'aria-label': 'title',
                    className: classes.h4,
                },
            },
            h5: {
                component: Typography,
                props: {
                    gutterBottom: true,
                    variant: 'h6',
                    //'aria-label': 'title',
                    className: classes.h5,
                },
            },
            h6: {
                component: Typography,
                props: {
                    gutterBottom: true,
                    variant: 'h6',
                    //'aria-label': 'title',
                    className: classes.h6,
                },
            },
            p: { component: Typography, props: { paragraph: true } },
            a: {
                component: LinkOrGist,
                props: {
                    className: classes.link,
                },
            },
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
