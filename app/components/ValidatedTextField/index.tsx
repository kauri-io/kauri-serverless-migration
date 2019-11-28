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
    label?: string
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
    label,
}: IProps) => {
    const [error, setError] = useState('')
    const [lastValueChange, setLastValueChange] = useState('')

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
        console.log('useEffect() for ' + id)
        if (value !== lastValueChange) {
            console.log('Validating...')
            doValidation(value)
        }
    }, [value])

    return (
        <TextField
            margin={margin}
            onChange={e => {
                doValidation(e.target.value)
                setLastValueChange(e.target.value)
                handleChange(e)
            }}
            value={value}
            placeholder={
                placeholder ? placeholder + (required ? ' (Required)' : '') : ''
            }
            className={className}
            label={error ? error : label}
            error={error.length === 0 ? false : true}
            InputProps={InputProps}
        />
    )
}

export default ValidatedTextField
