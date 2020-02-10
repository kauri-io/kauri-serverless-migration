import React, { useState } from 'react'
import AlertView from '../../components/Modal/AlertView'
import { Select, MenuItem, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((_theme: Theme) => ({
    select: {
        width: '100%',
        zIndex: 100000,
    },
}))

export interface IOption {
    __typename: string
    id: string
    name: string
    type: string
}

interface IProps {
    type?: string
    userId: string
    communities: IOption[]
    handleSubmit: (
        destination: IOption,
        e: React.SyntheticEvent<HTMLButtonElement>
    ) => void
    closeModalAction: () => void
    action?: string
}

const PublishingSelector = (props: IProps) => {
    const classes = useStyles()

    let options: any[] = []
    if (props.type) {
        options.push({
            id: props.userId,
            name: `My ${props.type}`,
            type: 'USER',
        })
    }
    props.communities.map(c => options.push(c))

    const action: string = props.action || 'Publish'

    const [destination, setDestination] = useState(options[0])

    const handleChange = event => {
        setDestination(event.target.value)
    }

    return (
        <AlertView
            title={action}
            content={
                <Select
                    value={destination}
                    onChange={handleChange}
                    className={classes.select}
                >
                    {options.map((option, key) => (
                        <MenuItem
                            key={key}
                            // @ts-ignore [2]
                            value={option}
                        >
                            {option.name}
                        </MenuItem>
                    ))}
                </Select>
            }
            closeModalAction={props.closeModalAction}
            confirmButtonAction={(
                e: React.SyntheticEvent<HTMLButtonElement>
            ) => {
                e && e.preventDefault()
                props.handleSubmit(destination, e)
                props.closeModalAction()
            }}
        />
    )
}

export default PublishingSelector
