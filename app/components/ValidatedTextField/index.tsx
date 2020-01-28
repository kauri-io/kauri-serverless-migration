import React, { ChangeEvent, useEffect } from 'react'
import TextField from '@material-ui/core/TextField'
import { useState } from 'react'
import { OutlinedInputProps } from '@material-ui/core/OutlinedInput'
import { FilledInputProps } from '@material-ui/core/FilledInput'
import { InputProps } from '@material-ui/core/Input'

interface IProps {
    id: string
    margin?: 'none' | 'normal' | 'dense' | undefined
    handleChange: (
        e: ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => void
    value: string
    placeholder?: string
    className?: string
    InputProps?:
        | Partial<InputProps>
        | Partial<FilledInputProps>
        | Partial<OutlinedInputProps>
    validate?: (v: string) => string
    required?: boolean
    onValidation?: (k: string, e: string) => void
    field?: any
    multiline?: boolean
    label?: string
    rowsMax?: number
    variant?: 'standard' | 'filled' | 'outlined'
}

const ValidatedTextField = ({
    id,
    margin,
    handleChange,
    value,
    placeholder,
    className,
    validate,
    InputProps,
    required,
    onValidation,
    field,
    rowsMax = 1,
    label,
    variant,
}: IProps) => {
    //Hack to overcome typescript issues when setting variant. urgh
    //See: https://github.com/mui-org/material-ui/issues/15697
    const variantProps =
        variant === 'outlined'
            ? { variant: 'outlined' as 'outlined' }
            : variant === 'filled'
            ? { variant: 'filled' as 'filled' }
            : { variant: 'standard' as 'standard' }

    const [error, setError] = useState('')
    //Setting to this value will ensure that validation runs on intial render
    const [lastValueChange, setLastValueChange] = useState('***NOT-SET***')

    const doValidation = value => {
        let err = ''
        if (required && (!value || value == '')) {
            onValidation && onValidation(id, 'Field required: ' + id)
        } else {
            err = validate ? validate(value) : ''

            setError(err)
            onValidation && onValidation(id, err)
        }
    }

    //There are cases where the value is changed externally to the text field,
    //so by listening for changes to the value, we can still trigger validation.
    //Not always validating here and removing the onChange hook because that would
    //cause a double render every time the text field is changed.
    useEffect(() => {
        if (value !== lastValueChange) {
            doValidation(value)
        }
    }, [value])

    return (
        <TextField
            name={field && field.name}
            margin={margin}
            onChange={e => {
                doValidation(e.target.value)
                setLastValueChange(e.target.value)
                handleChange && handleChange(e)
                field && field.onChange(e)
            }}
            value={value}
            placeholder={
                placeholder ? placeholder + (required ? ' (Required)' : '') : ''
            }
            className={className}
            label={error ? error : label}
            error={error.length === 0 ? false : true}
            InputProps={InputProps}
            multiline={rowsMax && rowsMax > 1 ? true : false}
            rowsMax={rowsMax}
            {...variantProps}
        />
    )
}

export default ValidatedTextField
