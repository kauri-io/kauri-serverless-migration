import AlertView from '../../components/Modal/AlertView'
import Select from '../../components/Select'
import styled from 'styled-components'
import React, { useState } from 'react'

export interface IOption {
    __typename: string
    id: string
    name: string
    type: string
}

interface IProps {
    type: string
    userId: string
    communities: IOption[]
    handleSubmit: (
        destination: IOption,
        e: React.SyntheticEvent<HTMLButtonElement>
    ) => void
    closeModalAction: () => void
}

const TooltipContainer = styled.div`
    display: flex;
    width: 300px;
    padding: 0 20px;
    flex-direction: column;
    position: relative;
    align-items: center;
    background: white;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px;
    border-radius: 4px;
    > div:not(:last-child) {
        margin-bottom: 20px;
    }
    > * {
        cursor: pointer;
    }
`

const Label = styled.span`
    font-size: 11px;
    font-weight: bold;
    text-transform: uppercase;
    color: ${props => props.theme.primary};
    padding: 20px;
    text-align: center;
    width: 100%;
    transition: all 0.3s;

    &:hover {
        color: #108e72;
    }

    &:not(:last-child) {
        border-bottom: 1px solid #d8d8d8;
    }
`

interface IContentProps {
    options: IOption[]
    setDestination: (destValue: IOption) => void
}

const Content: React.FC<IContentProps> = ({ options, setDestination }) => {
    return (
        <TooltipContainer>
            {options &&
                options.map((option, key) => (
                    <Label key={key} onClick={() => setDestination(option)}>
                        Publish to {option.name}
                    </Label>
                ))}
        </TooltipContainer>
    )
}

const PublishingSelector = (props: IProps) => {
    const options: any[] = [
        { id: props.userId, name: `My ${props.type}`, type: 'USER' },
        ...props.communities,
    ]

    const [destination, setDestination] = useState(options[0])
    return (
        <AlertView
            title="Publish"
            content={
                <div>
                    <Select
                        placeHolder="placeholder text"
                        value={`Publish to ${destination.name}`}
                    >
                        <Content
                            setDestination={setDestination}
                            options={options}
                        />
                    </Select>
                </div>
            }
            closeModalAction={props.closeModalAction}
            confirmButtonAction={(
                e: React.SyntheticEvent<HTMLButtonElement>
            ) => {
                props.handleSubmit(destination, e)
                props.closeModalAction()
            }}
        />
    )
}

export default PublishingSelector
