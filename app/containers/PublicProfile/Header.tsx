import React from 'react'
import anchorme from 'anchorme'
import Button from '../../components/Button'
import StatisticsContainer from '../../components/PublicProfile/StatisticsContainer'
import SocialWebsiteIcon from '../../components/Social/SocialWebsiteIcon'
import Schema from '../../lib/with-schema'
import Avatar from '../../components/Avatar'
import { getProfileURL } from '../../lib/getURLs'
import { Grid, Typography, makeStyles, Theme } from '@material-ui/core'

const getURL = (string, type) => {
    const split = string.split('/')
    switch (type) {
        case 'website':
            const url = anchorme(string, { list: true })[0]
            return `${url ? `${url.protocol}${url.encoded}` : string}`
        case 'twitter':
            return `https://www.twitter.com/${split[split.length - 1]}`
        case 'github':
            return `https://www.github.com/${split[split.length - 1]}`
        default:
            return ''
    }
}

interface IProps {
    hostName: string
    id: string
    avatar: string
    title: string
    username: string
    name: string
    website: string
    github: string
    twitter: string
    currentUser: string
    collections: number
    articles: number
    toggleEditing: () => void
}

const ProfileHeader = ({
    hostName,
    id,
    avatar,
    title,
    username,
    name,
    website,
    github,
    twitter,
    currentUser,
    collections,
    articles,
    toggleEditing,
}: IProps) => {
    const useStyles = makeStyles((theme: Theme) => ({
        root: {
            background: theme.palette.common.black,
            width: '100%',
        },
        container: {
            maxWidth: 1272,
            margin: 'auto',
            padding: theme.spacing(6, 3),
            [theme.breakpoints.down('md')]: {
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
            },
        },
        avatar: {
            marginRight: theme.spacing(3),
            [theme.breakpoints.down('md')]: {
                margin: 0,
                '& > *': {
                    marginLeft: theme.spacing(1),
                },
            },
        },
        social: {
            marginTop: theme.spacing(2),
            '& > *': {
                margin: theme.spacing(1),
            },
            [theme.breakpoints.down('md')]: {
                maxWidth: 200,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
            },
        },
        data: {
            flex: 1,
        },
        rightSide: {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'space-between',
        },
    }))
    const classes = useStyles()

    return (
        <Grid className={classes.root}>
            <Grid container={true} className={classes.container}>
                <Schema
                    type="Profile"
                    url={getProfileURL({ username })}
                    id={id}
                    title={`@${username}`}
                    description={`Kauri user - @${username}`}
                    background={avatar}
                    author={username}
                    hostName={hostName}
                />

                <Avatar
                    className={classes.avatar}
                    id={id}
                    avatar={avatar}
                    size={120}
                    withName={false}
                    username={username}
                />
                <Grid item={true} className={classes.data}>
                    {username || name ? (
                        <>
                            {username && (
                                <Typography
                                    component={!name ? 'h1' : 'h6'}
                                    variant="subtitle1"
                                    color="secondary"
                                >
                                    @{username}
                                </Typography>
                            )}
                            {name && (
                                <Typography
                                    component={name ? 'h1' : 'h6'}
                                    variant="h6"
                                    color="secondary"
                                >
                                    {name}
                                </Typography>
                            )}
                        </>
                    ) : (
                        id && (
                            <Typography variant="subtitle1" color="secondary">
                                {id}
                            </Typography>
                        )
                    )}
                    {title && (
                        <Typography variant="subtitle2" color="secondary">
                            {title}
                        </Typography>
                    )}
                    <Grid className={classes.social}>
                        {github && (
                            <SocialWebsiteIcon
                                brand="github"
                                height={20}
                                socialURL={getURL(github, 'github')}
                            />
                        )}
                        {twitter && (
                            <SocialWebsiteIcon
                                brand="twitter"
                                height={20}
                                socialURL={getURL(twitter, 'twitter')}
                            />
                        )}
                        {website && (
                            <a
                                target="_blank"
                                href={getURL(website, 'website')}
                            >
                                <Typography color="secondary">
                                    {website}
                                </Typography>
                            </a>
                        )}
                    </Grid>
                </Grid>
                <Grid item={true} className={classes.rightSide}>
                    {(articles > 0 || collections > 0) && (
                        <StatisticsContainer
                            pageType="CollectionPage"
                            statistics={[
                                {
                                    name: 'Articles',
                                    count: articles,
                                },
                                {
                                    name: 'Collections',
                                    count: collections,
                                },
                            ]}
                        />
                    )}
                    {id === currentUser && (
                        <Button
                            color="primary"
                            variant="contained"
                            onClick={() => toggleEditing()}
                        >
                            Edit Profile
                        </Button>
                    )}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ProfileHeader
