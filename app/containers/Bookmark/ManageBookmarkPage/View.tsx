import { getBookmarkFolders_getBookmarkFolders } from '../../../queries/__generated__/getBookmarkFolders'
import React from 'react'
import { routeChangeAction } from '../../../lib/Epics/RouteChangeEpic'
import { labelRootFolder, ROOT_FOLDER } from '../Module'
import { Tabs, Tab, makeStyles, Theme, Grid, Box } from '@material-ui/core'
import ManageBookmarkBody from '../ManageBookmarkBody'
import CreateBookmarkFolder from '../CreateBookmarkFolderWidget'
import Loading from '../../../components/Loading'

interface IProps {
    isLoggedIn: boolean
    routeChangeAction: typeof routeChangeAction
    data: {
        getBookmarkFolders: (getBookmarkFolders_getBookmarkFolders | null)[]
    }
}

const useStyles = makeStyles((_theme: Theme) => ({
    root: {
        //backgroundColor: theme.palette.background.paper,
    },
    tabs: {
        textAlign: 'left'
    },
}))

export const ManageBookmarkPageComponent = ({
    isLoggedIn,
    routeChangeAction,
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
            <Grid item xs={3}>
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
                                        label={
                                            labelRootFolder(folder.name) +
                                            ' (' +
                                            folder.total +
                                            ')'
                                        }
                                        id={'vertical-tab-' + folder.name}
                                        aria-controls={'vertical-tabpanel-' + folder.name}
                                        style={ folder.name == currentFolder ? { borderRight:'3px solid green'} : {}}
                                        onClick={() =>
                                            handleChange(folder.name)
                                        }
                                    />
                                )
                            })}
                        <CreateBookmarkFolder />
                    </Tabs>
                </Box>
            </Grid>
            <Grid item xs={9}>
                <Box borderLeft={1} borderColor="grey.500">
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
