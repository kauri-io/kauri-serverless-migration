import React, { ChangeEvent, useEffect } from 'react'
import TextField from '@material-ui/core/TextField'
import { useState } from 'react'
import { OutlinedInputProps } from '@material-ui/core/OutlinedInput'

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
    InputProps?: Partial<OutlinedInputProps>
    validate?: (v: string) => string
    required?: boolean
    onValidation?: (k: string, e: string) => void
    field?: any
    multiline?: boolean
    label?: string
    rowsMax?: number
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
}: IProps) => {
    const [error, setError] = useState('')

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

    useEffect(() => {
        doValidation(value)
    }, [])

    return (
        <TextField
            name={field && field.name}
            margin={margin}
            onChange={e => {
                doValidation(e.target.value)
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
        />
    )
}

export default ValidatedTextField
