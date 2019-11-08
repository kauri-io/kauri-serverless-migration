import { getBookmarkFolders_getBookmarkFolders } from '../../../queries/__generated__/getBookmarkFolders'
import React from 'react'
import { labelRootFolder, ROOT_FOLDER, ICreateBookmakFolderAction} from '../Module'
import { Tabs, Tab, makeStyles, Theme, Grid, Box } from '@material-ui/core'
import ManageBookmarkBody from '../ManageBookmarkBody'
import CreateBookmarkFolder from '../CreateBookmarkFolderWidget/View'
import Loading from '../../../components/Loading'
import { createBookmarkFolderVariables } from '../../../queries/__generated__/createBookmarkFolder'
import { IRouteChangeAction } from '../../../lib/Epics/RouteChangeEpic'

interface IProps {
    isLoggedIn: boolean
    routeChangeAction: (payload: string) => IRouteChangeAction
    createBookmarkFolderAction: (payload: createBookmarkFolderVariables) => ICreateBookmakFolderAction
    data: {
        getBookmarkFolders: (getBookmarkFolders_getBookmarkFolders | null)[]
    }
}

const useStyles = makeStyles((_theme: Theme) => ({
    root: {
        //backgroundColor: theme.palette.background.paper,
        height: '100%',
        flex: 1,
    },
    tabContainer: {
        flex: 1,
        alignItems: 'flex-start',
        borderRight: '1px solid #cbcbcb',
    },
    tabs: {
        '& div': {
            alignItems: 'flex-end',
        },
    },
    tab: {
        width: 250,
        '& > span': {
            alignItems: 'flex-start',
            textTransform: 'capitalize',
            fontWeight: 600,
        },
    },
    createContainer: {
        width: 250,
        alignItems: 'flex-start',
        padding: '6px 12px',
        '& > div': {
            alignItems: 'flex-start',
        },
    },
}))

export const ManageBookmarkPageComponent = ({
    isLoggedIn,
    routeChangeAction,
    createBookmarkFolderAction,
    data,
}: IProps) => {
    if (!isLoggedIn) {
        return routeChangeAction(`/login?r=/bookmarks`)
    }
    if (!data.getBookmarkFolders) {
        return <Loading />
    }
    const [currentFolder, setCurrentFolder] = React.useState(ROOT_FOLDER)

    const classes = useStyles()

    const handleChange = (folder: string) => {
        setCurrentFolder(folder)
    }

    const move = (folder: string) => {
        setCurrentFolder(folder)
    }

    return (
        <Grid container className={classes.root}>
            <Grid item xs={3} className={classes.tabContainer}>
                <Box py={2}>
                    <Tabs
                        orientation="vertical"
                        value={currentFolder}
                        className={classes.tabs}
                    >
                        {data.getBookmarkFolders &&
                            data.getBookmarkFolders.map(folder => {
                                if (!folder) return ''
                                return (
                                    <Tab
                                        className={classes.tab}
                                        label={
                                            labelRootFolder({folder: folder.name}) +
                                            ' (' +
                                            folder.total +
                                            ')'
                                        }
                                        id={'vertical-tab-' + folder.name}
                                        aria-controls={
                                            'vertical-tabpanel-' + folder.name
                                        }
                                        style={
                                            folder.name == currentFolder
                                                ? {
                                                      borderRight:
                                                          '3px solid green',
                                                  }
                                                : {}
                                        }
                                        onClick={() =>
                                            handleChange(folder.name)
                                        }
                                    />
                                )
                            })}
                        <Box className={classes.createContainer}>
                            <CreateBookmarkFolder createBookmarkFolderAction={createBookmarkFolderAction}/>
                        </Box>
                    </Tabs>
                </Box>
            </Grid>
            <Grid item xs={9}>
                <Box>
                    <ManageBookmarkBody
                        folder={currentFolder}
                        isLoggedIn={isLoggedIn}
                        updateFolder={move}
                    />
                </Box>
            </Grid>
        </Grid>
    )
}

export default ManageBookmarkPageComponent
