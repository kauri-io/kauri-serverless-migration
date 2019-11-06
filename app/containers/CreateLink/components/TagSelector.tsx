import React, { CSSProperties, HTMLAttributes } from 'react'
import clsx from 'clsx'
import AsyncSelect from 'react-select/async'
import Typography from '@material-ui/core/Typography'
import NoSsr from '@material-ui/core/NoSsr'
import TextField, { BaseTextFieldProps } from '@material-ui/core/TextField'
import Chip from '@material-ui/core/Chip'
import MenuItem from '@material-ui/core/MenuItem'
import CancelIcon from '@material-ui/icons/Cancel'
import { ValueContainerProps } from 'react-select/src/components/containers'
import { ControlProps } from 'react-select/src/components/Control'
import { NoticeProps } from 'react-select/src/components/Menu'
import { MultiValueProps } from 'react-select/src/components/MultiValue'
import { OptionProps } from 'react-select/src/components/Option'
import { PlaceholderProps } from 'react-select/src/components/Placeholder'
import { Omit } from '@material-ui/types'

import {
    createStyles,
    emphasize,
    makeStyles,
    Theme,
} from '@material-ui/core/styles'
import { searchTags } from '../../../queries/Tag'

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: theme.spacing(4, 0, 0, 0),
        },
        input: {
            display: 'flex',
            padding: 0,
            height: 'auto',
        },
        valueContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            flex: 1,
            alignItems: 'center',
            overflow: 'hidden',
        },
        chip: {
            margin: theme.spacing(0.5, 0.25),
        },
        chipFocused: {
            backgroundColor: emphasize(
                theme.palette.type === 'light'
                    ? theme.palette.grey[300]
                    : theme.palette.grey[700],
                0.08
            ),
        },
        noOptionsMessage: {
            padding: theme.spacing(1, 2),
        },
        placeholder: {
            position: 'absolute',
            left: 2,
            bottom: 6,
            fontSize: 16,
        },
        label: {
            fontWeight: 600,
        },
    })
)

interface OptionType {
    label: string
    value: string
}

function NoOptionsMessage(props: NoticeProps<OptionType>) {
    return (
        <Typography
            color="textSecondary"
            className={props.selectProps.classes.noOptionsMessage}
            {...props.innerProps}
        >
            {props.children}
        </Typography>
    )
}

type InputComponentProps = Pick<BaseTextFieldProps, 'inputRef'> &
    HTMLAttributes<HTMLDivElement>

function inputComponent({ inputRef, ...props }: InputComponentProps) {
    return <div ref={inputRef} {...props} />
}

function Control(props: ControlProps<OptionType>) {
    const {
        children,
        innerProps,
        innerRef,
        selectProps: { classes, TextFieldProps },
    } = props

    return (
        <TextField
            fullWidth
            InputProps={{
                inputComponent,
                inputProps: {
                    className: classes.input,
                    ref: innerRef,
                    children,
                    ...innerProps,
                },
            }}
            {...TextFieldProps}
        />
    )
}

function Option(props: OptionProps<OptionType>) {
    return (
        <MenuItem
            ref={props.innerRef}
            selected={props.isFocused}
            component="div"
            style={{
                fontWeight: props.isSelected ? 500 : 400,
            }}
            {...props.innerProps}
        >
            {props.children}
        </MenuItem>
    )
}

type MuiPlaceholderProps = Omit<PlaceholderProps<OptionType>, 'innerProps'> &
    Partial<Pick<PlaceholderProps<OptionType>, 'innerProps'>>
function Placeholder(props: MuiPlaceholderProps) {
    const { selectProps, innerProps = {}, children } = props
    return (
        <Typography
            color="textSecondary"
            className={selectProps.classes.placeholder}
            {...innerProps}
        >
            {children}
        </Typography>
    )
}

function ValueContainer(props: ValueContainerProps<OptionType>) {
    return (
        <div className={props.selectProps.classes.valueContainer}>
            {props.children}
        </div>
    )
}

function MultiValue(props: MultiValueProps<OptionType>) {
    return (
        <Chip
            tabIndex={-1}
            label={props.children}
            className={clsx(props.selectProps.classes.chip, {
                [props.selectProps.classes.chipFocused]: props.isFocused,
            })}
            onDelete={props.removeProps.onClick}
            deleteIcon={<CancelIcon {...props.removeProps} />}
        />
    )
}

const components = {
    Control,
    MultiValue,
    NoOptionsMessage,
    Option,
    Placeholder,
    ValueContainer,
}

export default function IntegrationReactSelect({ tags, client, setTags }) {
    const classes = useStyles({})

    const selectStyles = {
        input: (base: CSSProperties) => ({
            ...base,
            '& input': {
                font: 'inherit',
            },
        }),
    }

    return (
        <div className={classes.root}>
            <NoSsr>
                <AsyncSelect
                    classes={classes}
                    styles={selectStyles}
                    inputId="react-select-multiple"
                    TextFieldProps={{
                        label: 'MIX 1 MAX 7 TAGS',
                        InputLabelProps: {
                            htmlFor: 'react-select-multiple',
                            shrink: true,
                            className: classes.label,
                        },
                    }}
                    placeholder="Select up to 7 tags"
                    components={components}
                    getOptionLabel={option => option.label}
                    getOptionValue={option => option.label}
                    value={tags}
                    onChange={val => setTags(val)}
                    loadOptions={inputValue =>
                        new Promise(resolve => {
                            client
                                .query({
                                    fetchPolicy: 'no-cache',
                                    query: searchTags,
                                    variables: {
                                        query: inputValue,
                                        page: 0,
                                        size: 10,
                                    },
                                })
                                .then(res => {
                                    resolve([
                                        ...res.data.searchTags.content.map(
                                            i => ({ label: i.tag })
                                        ),
                                        ...[{ label: inputValue }],
                                    ])
                                })
                        })
                    }
                    isMulti
                />
            </NoSsr>
        </div>
    )
}
