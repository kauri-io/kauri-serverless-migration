import React from 'react'
import { makeStyles, Theme } from '@material-ui/core'
interface IProps {}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        paddingTop: theme.spacing(1),
    },
}))

export const Discussion = ({  }: IProps) => {
    const classes = useStyles()

    return <div className={classes.root}>Under construction</div>
}

export default Discussion
