import Button, { ButtonProps } from '@material-ui/core/Button'
import { makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
    main: {
        color: theme.palette.common.white,
    },
}))

const ButtonComp = (props: ButtonProps) => {
    const classes = useStyles()
    return (
        <Button
            {...props}
            className={props.variant === 'contained' ? classes.main : ''}
        >
            {props.children}
        </Button>
    )
}

export default ButtonComp
