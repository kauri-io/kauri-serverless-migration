import { useState } from 'react'

import Editor from '../../components/Markdown/Editor'
import Actions from './components/Actions'
import Header from './components/Header'

export interface IAttributes {
    background: string | null
    canonical: string | null
}

const ArticleEditor = props => {
    const [title, setTitle] = useState()
    const [tags, setTags] = useState([])
    const [text, setText] = useState()
    const [attributes, setAttributes] = useState({
        background: null,
        canonical: null,
    })

    return (
        <>
            <Actions
                owner={'test'}
                status={'test'}
                selectDestination={console.log}
                handleSubmit={console.log}
                communities={[]}
                openModalAction={props.openModalAction}
                closeModalAction={props.closeModalAction}
                showNotificationAction={props.showNotificationAction}
                userId={props.userId}
                routeChangeAction={props.routeChangeAction}
                setAttributes={setAttributes}
                attributes={attributes}
            />
            <Header
                title={title}
                setTitle={setTitle}
                tags={tags}
                setTags={setTags}
                attributes={attributes}
            />
            <Editor
                withTabs={true}
                withToolbar={true}
                compact={false}
                text={text}
                // attributes={attributes}
                openModalAction={props.openModalAction}
                closeModalAction={props.closeModalAction}
                onChange={text => setText(text)}
            />
            {process.env.config === 'development' && (
                <div
                    style={{
                        margin: '1rem 0',
                        background: '#f6f8fa',
                        padding: '.5rem',
                    }}
                >
                    <div>
                        <code>Title:</code> {title}
                    </div>
                    <div>
                        <code>Text:</code> {text}
                    </div>
                    <div>
                        <code>Attributes:</code>
                        {JSON.stringify(attributes)}
                    </div>
                    <div>
                        <code>Tags:</code>
                        {JSON.stringify(tags)}
                    </div>
                </div>
            )}
        </>
    )
}

export default ArticleEditor
