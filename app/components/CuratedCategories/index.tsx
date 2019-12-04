import React from 'react'
import Image from '../Image'
import theme from '../../lib/theme-config'
import Link from 'next/link'
import Typography from '@material-ui/core/Typography'
import { Theme, makeStyles, Grid } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        margin: theme.spacing(2, 0),
        [theme.breakpoints.down('md')]: {
            display: 'flex',
            flexDirection: 'column',
        },
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
        <Grid
            direction="row"
            container={true}
            className={classes.container}
            spacing={2}
        >
            {content.map((category, key) => (
                <Grid key={key} lg={3} md={6} sm={12} item={true}>
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
