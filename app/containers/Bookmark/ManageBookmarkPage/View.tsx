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
    tabs: {
        borderRight: `3px solid green`,
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
    const [currentIndex, setCurrentIndex] = React.useState(0)

    const classes = useStyles()

    const handleChange = (folder: string, index: number) => {
        setCurrentFolder(folder)
        setCurrentIndex(index)
    }

    const move = (folder: string, index?: number) => {
        setCurrentFolder(folder)
        if (index) setCurrentIndex(index)
    }

    return (
        <Grid container>
            <Grid item xs={3}>
                <Box py={2}>
                    <Tabs
                        orientation="vertical"
                        value={currentIndex}
                        className={classes.tabs}
                    >
                        {data.getBookmarkFolders &&
                            data.getBookmarkFolders.map((folder, i) => {
                                if (!folder) return ''
                                return (
                                    <Tab
                                        label={
                                            labelRootFolder(folder.name) +
                                            ' (' +
                                            folder.total +
                                            ')'
                                        }
                                        id={'vertical-tab-' + i}
                                        aria-controls={'vertical-tabpanel-' + i}
                                        onClick={() =>
                                            handleChange(folder.name, i)
                                        }
                                    />
                                )
                            })}
                        <CreateBookmarkFolder />
                    </Tabs>
                </Box>
            </Grid>
            <Grid item xs={9}>
                <ManageBookmarkBody
                    folder={currentFolder}
                    isLoggedIn={isLoggedIn}
                    updateFolder={move}
                />
            </Grid>
        </Grid>
    )
}

export default ManageBookmarkPageComponent
