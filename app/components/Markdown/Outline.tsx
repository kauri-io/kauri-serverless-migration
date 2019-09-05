import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'markdown-to-jsx'
import Typography from '@material-ui/core/Typography'
import { makeStyles, Theme } from '@material-ui/core'
import Loading from '../Loading'

const OFFSET = 80

const Renderer = ({ markdown, withComments, commentsCount }) => {
    const elList = document.querySelectorAll('[aria-label="title"]')
    const [loading, setLoading] = useState(true)
    const [selected, setSelected] = useState(0)

    const handleScroll = () => {
        const checkpoint = window.scrollY + OFFSET
        for (let i = 0; i < elList.length; i++) {
            const heading = elList[i.toString()]
            if (
                checkpoint > heading.offsetTop - 50 &&
                checkpoint < heading.offsetTop + 50
            ) {
                setSelected(i)
            }
        }
    }
    useEffect(() => {
        setTimeout(() => setLoading(false), 1000)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    let counter = 0
    const getTitleIndex = () => {
        const index = counter
        counter++
        return index
    }

    const Heading = ({ children, indent }) => {
        const titleIndex = getTitleIndex()
        const targetEl = elList[titleIndex.toString()]
        const offsetTop = targetEl.offsetTop - OFFSET
        const inView = titleIndex === selected

        const useStyles = makeStyles((theme: Theme) => ({
            heading: {
                marginLeft: theme.spacing(indent),
                paddingLeft: theme.spacing(2),
                fontWeight: 'bold',
                cursor: 'pointer',
                borderLeft: inView
                    ? `3px solid ${theme.palette.primary.main}`
                    : '3px solid transparent',
            },
        }))
        const classes = useStyles()
        return (
            <Typography
                className={classes.heading}
                onClick={() => {
                    setSelected(titleIndex)
                    window.scrollTo(0, offsetTop)
                }}
                variant="body1"
            >
                {children}
            </Typography>
        )
    }

    const options = {
        forceBlock: true,
        overrides: {
            blockquote: {
                component: () => null,
            },
            h1: {
                component: props => <Heading indent={0} {...props} />,
            },
            h2: {
                component: props => <Heading indent={1} {...props} />,
            },
            h3: {
                component: props => <Heading indent={2} {...props} />,
            },
            h4: {
                component: props => <Heading indent={3} {...props} />,
            },
            h5: {
                component: props => <Heading indent={4} {...props} />,
            },
            h6: {
                component: props => <Heading indent={5} {...props} />,
            },
            p: { component: () => null },
            a: { component: () => null },
            li: {
                component: () => null,
            },
            ol: {
                component: () => null,
            },
            ul: {
                component: () => null,
            },
            img: {
                component: () => null,
            },
            code: {
                component: () => null,
            },
            pre: {
                component: () => null,
            },
            hr: {
                component: () => null,
            },
            table: {
                component: () => null,
            },
            br: {
                component: () => null,
            },
        },
    }

    return (
        <div>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <Typography align="left" variant="h6">
                        Contents
                    </Typography>
                    <ReactMarkdown options={options}>{markdown}</ReactMarkdown>
                    {withComments && (
                        <Heading indent={0}>Comments ({commentsCount})</Heading>
                    )}
                </>
            )}
        </div>
    )
}

export default Renderer
