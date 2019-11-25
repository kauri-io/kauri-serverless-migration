import React, { ChangeEvent, useEffect } from 'react'
import TextField from '@material-ui/core/TextField'
import { useState } from 'react'
import { OutlinedInputProps } from '@material-ui/core/OutlinedInput'

interface IProps {
    id: string
    margin: 'none' | 'normal' | 'dense' | undefined
    handleChange: (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void
    value: string
    placeholder: string
    className: string
    InputProps?: Partial<OutlinedInputProps>
    validate: (v: string) => string
    required?: boolean
    onValidation?: (k: string, e: string) => void
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
}: IProps) => {
    const [error, setError] = useState('')

    const doValidation = value => {
        let err = ''

        if (required && (!value || value == '')) {
            onValidation && onValidation(id, 'Field required: ' + id)
        } else {
            err = validate(value)

            setError(err)
            onValidation && onValidation(id, err)
        }
    }

    useEffect(() => {
        doValidation(value)
    }, [])

    return (
        <TextField
            margin={margin}
            onChange={e => {
                doValidation(e.target.value)
                handleChange(e)
            }}
            value={value}
            placeholder={placeholder + (required ? ' (Required)' : '')}
            className={className}
            label={error}
            error={error.length === 0 ? false : true}
            InputProps={InputProps}
        />
    )
}

export default ValidatedTextField
