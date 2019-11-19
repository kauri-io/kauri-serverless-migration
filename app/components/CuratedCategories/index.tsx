import React from 'react'
import Image from '../Image'
import theme from '../../lib/theme-config'
import Link from 'next/link'
import Typography from '@material-ui/core/Typography'
import { Theme, makeStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        maxWidth: 1272,
        margin: 'auto',
        width: '100%',
        marginTop: theme.spacing(1),
    },

    link: {
        width: '100%',
        height: 90,
        borderRadius: 4,
        background: theme.palette.common.black,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
    },
    text: {
        zIndex: 10,
    },
}))

const CuratedCategory = ({ content }) => {
    const classes = useStyles()
    return (
        <Grid container={true} className={classes.container} spacing={2}>
            {content.map((category, key) => (
                <Grid key={key} item={true} md={3} sm={6} xs={12}>
                    <Link href={category.link}>
                        <a className={classes.link}>
                            {category.image && (
                                <Image
                                    asBackground={true}
                                    height="100%"
                                    width="100%"
                                    overlay={{
                                        color: theme.bgPrimary,
                                        opacity: 0.7,
                                    }}
                                    image={category.image}
                                    borderRadius={'4px'}
                                />
                            )}
                            <Typography
                                className={classes.text}
                                align="center"
                                variant="body1"
                                color="secondary"
                            >
                                {category.propertyName}
                            </Typography>
                            <Typography
                                className={classes.text}
                                align="center"
                                variant="caption"
                                color="secondary"
                            >
                                {category.description}
                            </Typography>
                        </a>
                    </Link>
                </Grid>
            ))}
        </Grid>
    )
}

export default CuratedCategory
