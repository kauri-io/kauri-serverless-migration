import React from 'react'
import { ISubmitArticlePayload } from './Module'
import Editor from '../../components/Markdown/Editor'

interface IProps {
    openModalAction: ({ children }: { children: any }) => void
    closeModalAction: () => void
    submitArticleAction: (payload: ISubmitArticlePayload) => void
    id?: string
    data: any
    article?: any
    form: any
    handleFormChange: ({ text }: { text: string }) => void
    routeChangeAction: (route: string) => void
    getFieldDecorator: (field: string, arg1: any) => any
    getFieldsValue: () => any
    setFieldsValue: ({ text }: { text: string }) => void
    getFieldError: (err: string) => any
    text?: string
    attributes: any
}

export default (props: IProps) => {
    return props.getFieldDecorator('text', {
        initialValue:
            typeof props.text === 'string'
                ? JSON.stringify({ markdown: props.text })
                : null,
        rules: [
            {
                message:
                    'Empty articles cannot be saved or published. Start writing!',
                required: true,
                whitespace: true,
            },
        ],
    })(
        <Editor
            withTabs={true}
            withToolbar={true}
            compact={false}
            text={props.text ? JSON.parse(props.text).markdown : ''}
            openModalAction={props.openModalAction}
            closeModalAction={props.closeModalAction}
            onChange={value => props.setFieldsValue({ text: value })}
        />
    )
}
