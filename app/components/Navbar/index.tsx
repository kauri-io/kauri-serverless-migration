import { connect } from 'react-redux'
import { IReduxState, ICommunity } from '../../lib/Module'
import React, { useState } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import SearchIcon from '@material-ui/icons/Search'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MoreIcon from '@material-ui/icons/MoreVert'
import Link from 'next/link'
import { logout } from './Module'
import { withRouter, Router } from 'next/router'
import { getProfileURL, getBookmarksURL } from '../../lib/getURLs'
import Avatar from '../../components/Avatar'

const useStyles = makeStyles((theme: Theme) => {
    return {
        avatar: {
            height: 30,
            width: 30,
        },
        grow: {
            flexGrow: 1,
        },
        inputInput: {
            padding: theme.spacing(1, 2),
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: 200,
            },
        },
        inputRoot: {
            color: 'inherit',
        },
        logo: {
            height: 30,
            marginRight: theme.spacing(0),
            width: 30,
        },
        menu: {
            '& ul': {
                display: 'flex',
                flexDirection: 'column',
            },
        },
        menuButton: {
            marginRight: theme.spacing(1),
        },
        navbar: {
            margin: 'auto',
            maxWidth: 1242,
            width: '100%',
        },
        navlink: {
            '&:hover': {
                color: theme.palette.primary.main,
            },
            cursor: 'pointer',
            marginLeft: theme.spacing(2),
            transition: 'color 0.3s',
        },
        padded: {
            padding: theme.spacing(0, 2),
        },
        searchClass: {
            alignItems: 'center',
            backgroundColor: theme.palette.background.default,
            borderRadius: theme.shape.borderRadius,
            display: 'flex',
            marginLeft: 0,
            marginRight: theme.spacing(2),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(3),
                width: 'auto',
            },
        },
        searchIconClass: {
            alignItems: 'center',
            display: 'flex',
            height: '100%',
            justifyContent: 'center',
            cursor: 'pointer',
        },
        sectionDesktop: {
            display: 'none',
            [theme.breakpoints.up('md')]: {
                display: 'flex',
            },
        },
        sectionMobile: {
            display: 'flex',
            [theme.breakpoints.up('md')]: {
                display: 'none',
            },
        },
        title: {
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
        },
    }
})

interface IProps {
    user?: {
        id: string
        avatar: string
        dateCreated: string
        username: string
        name: string
        email: string
        communities: ICommunity[]
        status: string // [NOT_REGISTERED|CREATED]EMAIL_VERIFIED]
    }
    router: Router
}

const PrimarySearchAppBar: React.FC<IProps> = ({ user, router }) => {
    const classes = useStyles({})
    const [search, setSearch] = useState()
    const [accountAnchorEl, setAccountAnchorEl] = React.useState<
        HTMLLIElement | HTMLButtonElement | null
    >(null)

    const [createAnchorEl, setCreateAnchorEl] = React.useState<
        HTMLLIElement | HTMLButtonElement | null
    >(null)

    const [
        mobileMoreAnchorEl,
        setMobileMoreAnchorEl,
    ] = React.useState<HTMLButtonElement | null>(null)

    const isMenuOpen = Boolean(accountAnchorEl)
    const isCreateMenuOpen = Boolean(createAnchorEl)
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

    const handleProfileMenuOpen = (
        event: React.MouseEvent<HTMLLIElement | HTMLButtonElement>
    ) => {
        setAccountAnchorEl(event.currentTarget)
    }

    function handleMobileMenuClose() {
        setMobileMoreAnchorEl(null)
    }

    function handleCreateMenuClose() {
        setCreateAnchorEl(null)
    }

    const handleCreateMenuOpen = (
        event: React.MouseEvent<HTMLLIElement | HTMLButtonElement>
    ) => {
        setCreateAnchorEl(event.currentTarget)
    }

    function handleMenuClose() {
        setAccountAnchorEl(null)
        handleMobileMenuClose()
    }

    const handleMobileMenuOpen = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        setMobileMoreAnchorEl(event.currentTarget)
    }

    const renderMenu = (
        <>
            <Menu
                open={isCreateMenuOpen}
                anchorEl={createAnchorEl}
                onClose={handleCreateMenuClose}
            >
                <Link as="/write-article" href="/write-article">
                    <a>
                        <MenuItem>Write Article</MenuItem>
                    </a>
                </Link>

                <Link
                    href={
                        user
                            ? '/create-collection'
                            : 'login?r=/create-collection'
                    }
                >
                    <a>
                        <MenuItem>Create Collection</MenuItem>
                    </a>
                </Link>
                <Link
                    href={
                        user ? '/create-community' : 'login?r=/create-community'
                    }
                >
                    <a>
                        <MenuItem>Create Community</MenuItem>
                    </a>
                </Link>
                <a href="https://import.kauri.io" target="__blank">
                    <MenuItem>Import Content</MenuItem>
                </a>
            </Menu>

            <Menu
                anchorEl={accountAnchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMenuOpen}
                onClose={handleMenuClose}
                className={classes.menu}
            >
                {user && (
                    [<Link
                        href={getProfileURL(user).href}
                        as={getProfileURL(user).as}
                    >
                        <a>
                            <MenuItem>My Profile</MenuItem>
                        </a>
                    </Link>,
                    <Link
                        href={getBookmarksURL().href}
                        as={getBookmarksURL().as}
                    >
                        <a>
                            <MenuItem>My Bookmarks</MenuItem>
                        </a>
                    </Link>]
                )}

                <MenuItem className={classes.padded} onClick={logout}>
                    Logout
                </MenuItem>
            </Menu>
        </>
    )

    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
            className={classes.menu}
        >
            <MenuItem
                onClick={
                    user ? handleProfileMenuOpen : () => router.push('/login')
                }
            >
                <IconButton color="inherit">
                    {!user || !user.id ? (
                        <AccountCircle className={classes.avatar} />
                    ) : (
                        <Avatar
                            className={classes.avatar}
                            avatar={user.avatar}
                            id={user.id}
                            withName={false}
                            ignoreLink={true}
                        />
                    )}
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    )

    return (
        <div className={classes.grow}>
            <AppBar elevation={1} position="fixed" color="inherit">
                <Toolbar className={classes.navbar}>
                    <Link href="/">
                        <a>
                            <img
                                className={classes.logo}
                                src="/static/images/logo.svg"
                            />
                        </a>
                    </Link>
                    <Link href="/">
                        <a>
                            <Typography
                                className={classes.navlink}
                                variant="button"
                            >
                                Home
                            </Typography>
                        </a>
                    </Link>
                    <Link href="/articles">
                        <a>
                            <Typography
                                className={classes.navlink}
                                variant="button"
                            >
                                Articles
                            </Typography>
                        </a>
                    </Link>
                    <Link href="/collections">
                        <a>
                            <Typography
                                className={classes.navlink}
                                variant="button"
                            >
                                Collections
                            </Typography>
                        </a>
                    </Link>
                    <Link href="/communities">
                        <a>
                            <Typography
                                className={classes.navlink}
                                variant="button"
                            >
                                Communities
                            </Typography>
                        </a>
                    </Link>
                    <Link href="/help">
                        <a>
                            <Typography
                                className={classes.navlink}
                                variant="button"
                            >
                                Help
                            </Typography>
                        </a>
                    </Link>
                    <div className={classes.grow} />
                    <div className={classes.searchClass}>
                        <InputBase
                            placeholder="Search…"
                            onKeyUp={e => {
                                if (e.key === 'Enter') {
                                    router.push(`/search-results?q=${search}`)
                                }
                            }}
                            onChange={e => setSearch(e.target.value)}
                            classes={{
                                input: classes.inputInput,
                                root: classes.inputRoot,
                            }}
                            value={search}
                        />
                        <div
                            className={classes.searchIconClass}
                            onClick={() =>
                                search &&
                                search.length > 0 &&
                                router.push(`/search-results?q=${search}`)
                            }
                        >
                            <SearchIcon />
                        </div>
                    </div>
                    <Typography
                        variant="button"
                        className={classes.navlink}
                        onClick={handleCreateMenuOpen}
                    >
                        Create
                    </Typography>
                    <div className={classes.sectionDesktop}>
                        <IconButton
                            edge="end"
                            aria-owns={
                                isMenuOpen ? 'material-appbar' : undefined
                            }
                            aria-haspopup="true"
                            onClick={
                                user
                                    ? handleProfileMenuOpen
                                    : () => router.push('/login')
                            }
                            color="inherit"
                        >
                            {!user ? (
                                <AccountCircle className={classes.avatar} />
                            ) : (
                                <Avatar
                                    className={classes.avatar}
                                    avatar={user.avatar}
                                    id={user.id}
                                    withName={false}
                                    ignoreLink={true}
                                />
                            )}
                        </IconButton>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMenu}
            {renderMobileMenu}
        </div>
    )
}

const mapStateToProps = (state: IReduxState) => ({
    user: state.app && state.app.user,
})

export default connect(mapStateToProps)(withRouter(PrimarySearchAppBar))
