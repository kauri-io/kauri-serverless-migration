import React from 'react'
import styled from 'styled-components'
import { space, SpaceProps } from 'styled-system'
import { Form, Field, FieldArray, InjectedFormikProps } from 'formik'
import Stack from 'stack-styled'
import { path, remove, pipe, map, reduce, defaultTo } from 'ramda'
import ActionsSection from '../../components/Section/ActionsSection'
import PrimaryHeaderSection from '../../components/Section/PrimaryHeaderSection'
import CardContentSection from '../../components/Section/CardContentSection'
import StatisticsContainer from '../../components/PublicProfile/StatisticsContainer'
import Avatar from '../../components/Avatar'
import { Label } from '../../components/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '../../components/Button'
import showFormValidationErrors from '../../lib/show-form-validation-errors'
import SectionOptions from './SectionOptions'
// import AddTagButton from '../../components/Button/AddTagButton'
// import AddMemberButton from '../../components/Button/AddMemberButton'
import TagSelector from '../../components/TagSelector'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import handleDragEnd from './handleDragEnd'
import { IFormValues } from './index'
import { Collection_sections } from '../../queries/Fragments/__generated__/Collection'
import {
    IShowNotificationAction,
    IShowNotificationPayload,
} from '../../lib/Epics/ShowNotificationEpic'
import { ICommunity } from '../../lib/Module'
import ArticleCardFormView from '../ArticleCardFormView'
import { useEffect } from 'react'
import initUppy from '../../lib/init-uppy'
import config from '../../config'
import UploadIcon from '@material-ui/icons/CloudUpload'
import BackIcon from '@material-ui/icons/ArrowLeft'
import {
    openModalAction,
    closeModalAction,
} from '../../components/Modal/Module'

import { Theme, makeStyles } from '@material-ui/core/styles'
import {
    ResourceTypeInput,
    SectionDTOInput,
    ResourceIdentifierInput,
} from '../../__generated__/globalTypes'
import LinkCardFormView from '../LinkCardFormView'
import DeleteIcon from '@material-ui/icons/Delete'
import ValidatedTextField from '../../components/ValidatedTextField'
import ChooseResourceModal from '../ChooseResourceModal'
import { ICollection } from './ChooseCollectionModal'
import { globalSearchApprovedArticles } from '../../queries/Article'
import { DocumentNode } from 'graphql'
import { PaginationDataQuery } from '../../lib/with-pagination'
import { IRouteChangeAction } from '../../lib/Epics/RouteChangeEpic'

const useStyles = makeStyles((theme: Theme) => ({
    input: {
        padding: theme.spacing(1, 0, 1, 0),
        color: theme.palette.common.white,
        '&:hover': {
            '&:before': {
                borderBottomColor: 'rgba(255,255,255,0.6) !important',
            },
        },
        '&:before': {
            borderBottomColor: 'rgba(255,255,255,0.3)',
        },
    },
    inputSection: {
        width: '808px',
        '& > div': {
            '& > input': {
                textAlign: 'center',
            },
        },
    },
    uploadIcon: {
        marginRight: theme.spacing(2),
    },
}))

const emptySection: SectionDTOInput = {
    id: null,
    name: '',
    description: null,
    resourcesId: [],
}

const Section = styled.section`
    display: flex;
    flex-direction: column;
`

const ResourceSection = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    ${space};
    > button:last-child {
        margin-top: ${props => props.theme.space[1]}px;
    }
`

const SectionSection = styled.section<SpaceProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    :not(:first-child) {
        ${space};
    }
    > :nth-child(2) {
        margin-bottom: ${props => props.theme.space[2]}px;
    }
    > button:nth-child(4) {
        margin-top: ${props => props.theme.space[2]}px;
    }
`

const ContentSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${props => props.theme.paddingTop} ${props => props.theme.padding};
    min-height: calc(100vh - 270px);
`

const CreateCollectionDetails = styled.div`
    display: flex;
    flex-direction: column;
    > :not(:last-child) {
        ${space};
    }
`

const CreateCollectionActionsPlaceHolder = styled.div`
    display: flex;
    mix-blend-mode: normal;
    opacity: 0.2;
    cursor: initial !important;
    > * {
        ${space};
        cursor: initial !important;
    }
`

const CreateCollectionMetaDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    > * {
        ${space};
    }
`

const CreateCollectionCuratorDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ${space};
    > :first-child {
        margin-bottom: ${props => props.theme.space[3]}px;
    }
    > :nth-child(2) {
        margin-bottom: ${props => props.theme.space[1]}px;
    }
`

const CreateCollectionCurators = styled.div`
    display: flex;
    align-items: center;
`

const DisplayFormikState = props => (
    <div style={{ margin: '1rem 0', background: '#f6f8fa', padding: '.5rem' }}>
        <strong>Injected Formik props (the form's state)</strong>
        <div>
            <code>errors:</code> {JSON.stringify(props.errors, null, 2)}
        </div>
        <div>
            <code>values:</code> {JSON.stringify(props.values, null, 2)}
        </div>
        <div>
            <code>isSubmitting:</code>{' '}
            {JSON.stringify(props.isSubmitting, null, 2)}
        </div>
    </div>
)

const DraggableResourceContainer = styled.div`
    width: 100%;
    max-width: 808px;
    margin: auto;
    :hover {
        > :first-child {
            box-shadow: 0 0 0 2px ${props => props.theme.hoverTextColor};
        }
    }
`

const renderResourceSection = (
    index,
    arrayHelpers,
    section,
    values,
    mappingKey
) => (resource, resourceIndex) => {
    const type = path(
        ['sections', index, mappingKey, resourceIndex, 'type'],
        values
    )

    return (
        <ResourceSection key={resourceIndex}>
            {type === 'ARTICLE' && (
                <Draggable
                    index={resourceIndex}
                    draggableId={`${path(
                        ['sections', index, mappingKey, resourceIndex, 'id'],
                        values
                    )}-${path(
                        [
                            'sections',
                            index,
                            mappingKey,
                            resourceIndex,
                            'version',
                        ],
                        values
                    )}`}
                >
                    {provided => (
                        <DraggableResourceContainer
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            id="article-card"
                        >
                            <ArticleCardFormView
                                id={String(
                                    path(
                                        [
                                            'sections',
                                            index,
                                            mappingKey,
                                            resourceIndex,
                                            'id',
                                        ],
                                        values
                                    )
                                )}
                            />
                            {provided.placeholder}
                        </DraggableResourceContainer>
                    )}
                </Draggable>
            )}

            {type === 'LINK' &&
                (path(
                    ['sections', index, mappingKey, resourceIndex],
                    values
                ) && (
                    <Draggable
                        index={resourceIndex}
                        draggableId={`${path(
                            [
                                'sections',
                                index,
                                mappingKey,
                                resourceIndex,
                                'id',
                            ],
                            values
                        )}`}
                    >
                        {provided => (
                            <DraggableResourceContainer
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                ref={provided.innerRef}
                                id="collection-card"
                            >
                                <LinkCardFormView
                                    id={String(
                                        path(
                                            [
                                                'sections',
                                                index,
                                                mappingKey,
                                                resourceIndex,
                                                'id',
                                            ],
                                            values
                                        )
                                    )}
                                />
                                {provided.placeholder}
                            </DraggableResourceContainer>
                        )}
                    </Draggable>
                ))}
            <Button
                color="default"
                variant="text"
                onClick={() => {
                    arrayHelpers.form.setFieldValue(
                        `sections[${index}][${mappingKey}]`,
                        Array.isArray(section[mappingKey]) &&
                            (!resourceIndex
                                ? section[mappingKey].length > 1
                                    ? section[mappingKey].splice(1)
                                    : []
                                : remove(resourceIndex, 1, section[mappingKey]))
                    )
                }} // Remove current resource index
            >
                <DeleteIcon />
                {`Remove ${resource.type}`}
            </Button>
        </ResourceSection>
    )
}

export interface IModalConfig {
    title: string
    showSearch: boolean
    query: {
        name: DocumentNode
        key: PaginationDataQuery
        variables: any
    }
}

export interface IProps {
    communities?: ICommunity[]
    id?: string
    touched: {
        name: boolean
        description: boolean
    }
    errors: {
        name?: string
        description?: string
    }
    values: IFormValues
    isSubmitting: boolean
    setFieldValue: (string, any) => void
    validateForm: () => Promise<any>
    showNotificationAction: (
        payload: IShowNotificationPayload
    ) => IShowNotificationAction
    routeChangeAction: (payload: string) => IRouteChangeAction
    editCollectionAction: any
    createCollectionAction: any
    openModalAction: typeof openModalAction
    closeModalAction: typeof closeModalAction
    data?: { getCollection?: ICollection; variables: { id: string } }
    userId: string
    username: string
    userAvatar: string
    isLoggedIn: boolean
    query: {
        resourceId: string
        type: ResourceTypeInput
    }
}

let uppy
const CreateCollectionForm: React.FC<
    InjectedFormikProps<IProps, IFormValues>
> = ({
    touched,
    errors,
    values,
    isSubmitting,
    setFieldValue,
    validateForm,
    showNotificationAction,
    routeChangeAction,
    data,
    username,
    userId,
    userAvatar,
}) => {
    useEffect(() => {
        uppy = initUppy({
            allowGifs: false,
        })
        uppy.on('upload-success', (_data, data2) => {
            const url = `https://${config.gateway}:443/ipfs/${data2.body.hash}`
            setFieldValue('background', url)
        })
    }, [])

    const classes = useStyles()

    const [resourceModalOpened, setResourceModalOpened] = React.useState({})
    const [validationMessages, setValidationMessages] = React.useState({})
    const [disableSave, setDisableSave] = React.useState(false)

    const [modalOptions, setModalOptions] = React.useState({
        showSearch: false,
        query: globalSearchApprovedArticles,
        queryKey: '',
        variables: {},
        title: '',
    })

    const modalConfigs: IModalConfig[] = [
        {
            title: 'My published content',
            showSearch: true,
            query: {
                name: globalSearchApprovedArticles,
                key: 'searchAutocomplete',
                variables: {
                    size: 10,
                    query: '',
                    filter: {
                        types: ['ARTICLE', 'LINK'],
                        mustIncludeUserId: [userId],
                    },
                },
            },
        },
        {
            title: 'Search Content',
            showSearch: true,
            query: {
                name: globalSearchApprovedArticles,
                key: 'searchAutocomplete',
                variables: {
                    size: 10,
                    query: '',
                    filter: {
                        types: ['ARTICLE', 'LINK'],
                    },
                },
            },
        },
    ]

    const validate = (name: string, value: string, maxLength: number) => {
        if (value && value.length > maxLength) {
            return name + ' longer than ' + maxLength + ' characters'
        }
        return ''
    }

    const onValidation = (id, message) => {
        if (!message || message == '') {
            delete validationMessages[id]
        } else {
            validationMessages[id] = message
        }

        setValidationMessages(validationMessages)
        checkDisableSave()
    }

    const checkDisableSave = () => {
        setDisableSave(
            (validationMessages &&
                Object.keys(validationMessages).length > 0) ||
                (errors && Object.keys(errors).length > 0)
        )
    }

    //Check if we should disable saving any time errors are updated
    useEffect(() => {
        checkDisableSave()
    }, [errors])

    return (
        <Section>
            <Form>
                <ActionsSection
                    bg={
                        (typeof values.background === 'string' &&
                            'transparent') ||
                        'bgPrimary'
                    }
                >
                    <Stack
                        alignItems={['', 'left']}
                        justifyContent={['', 'start']}
                    >
                        <Button
                            color="secondary"
                            variant="text"
                            data-testid={`CreateCollectionForm-back`}
                            onClick={() => routeChangeAction('back')}
                        >
                            <BackIcon />
                            Go Back
                        </Button>
                    </Stack>
                    <Stack
                        alignItems={['', 'center']}
                        justifyContent={['', 'center']}
                    >
                        <Button
                            color="secondary"
                            variant="text"
                            className="background-upload"
                            onClick={() =>
                                uppy.getPlugin('Dashboard').openModal()
                            }
                        >
                            <UploadIcon className={classes.uploadIcon} />
                            Background Image
                        </Button>
                    </Stack>
                    <Stack
                        alignItems={['', 'center']}
                        justifyContent={['', 'end']}
                    >
                        <Button
                            variant="contained"
                            color="primary"
                            disabled={isSubmitting || disableSave}
                            type="submit"
                            onClick={() =>
                                showFormValidationErrors(
                                    validateForm,
                                    showNotificationAction
                                )
                            }
                        >
                            {data ? 'Update Collection' : 'Create Collection'}
                        </Button>
                    </Stack>
                </ActionsSection>

                <PrimaryHeaderSection backgroundURL={values.background}>
                    <CreateCollectionDetails>
                        <Field
                            type="text"
                            name="name"
                            render={({ field }) => (
                                <ValidatedTextField
                                    id="name"
                                    field={field}
                                    multiline={true}
                                    rowsMax={3}
                                    placeholder="Add collection title"
                                    InputProps={{
                                        className: classes.input,
                                    }}
                                    margin="normal"
                                    validate={value =>
                                        validate('name', value, 100)
                                    }
                                    required={true}
                                    onValidation={onValidation}
                                    value={values.name}
                                    handleChange={e => field.onChange(e)}
                                />
                            )}
                        />
                        {/* <ErrorMessage name='name' render={(message: string) => <ErrorMessageRenderer>{message}</ErrorMessageRenderer>} /> */}
                        <Field
                            type="text"
                            name="description"
                            render={({ field }) => (
                                <ValidatedTextField
                                    id="description"
                                    field={field}
                                    multiline
                                    rowsMax={3}
                                    placeholder="Add description"
                                    InputProps={{
                                        className: classes.input,
                                    }}
                                    margin="normal"
                                    validate={value =>
                                        validate('description', value, 150)
                                    }
                                    required={true}
                                    onValidation={onValidation}
                                    value={values.description || ''}
                                    handleChange={e => field.onChange(e)}
                                />
                            )}
                        />

                        <FieldArray
                            name="tags"
                            render={arrayHelpers => (
                                <TagSelector
                                    updateTags={tags =>
                                        arrayHelpers.form.setFieldValue(
                                            'tags',
                                            tags
                                        )
                                    }
                                    tags={values.tags || []}
                                />
                            )}
                        />
                        {/* <ErrorMessage name='description' render={(message: string) => <ErrorMessageRenderer>{message}</ErrorMessageRenderer>} /> */}

                        {/* TODO: WAIT FOR BACKEND */}
                        {/* <AddTagButton color='white' /> */}
                        <CreateCollectionActionsPlaceHolder>
                            {/* <Button variant='contained'>Follow Collection</Button> */}
                            {/* <Button
                                variant='text'>Up vote</Button> */}
                            {/* <Button
                                variant='text' icon={<ShareIcon />}>Share</Button> */}
                        </CreateCollectionActionsPlaceHolder>
                    </CreateCollectionDetails>
                    <Stack
                        alignItems={['', 'center']}
                        justifyContent={['', 'end']}
                    >
                        <CreateCollectionMetaDetails>
                            <CreateCollectionCuratorDetails>
                                <StatisticsContainer
                                    pageType="CreateCollectionPage"
                                    statistics={[
                                        {
                                            name: 'Articles',
                                            count: pipe(
                                                map<any, any>(
                                                    section =>
                                                        section &&
                                                        section.resourcesId
                                                ),
                                                reduce((current, next) => {
                                                    const articlesInSection = next.filter(
                                                        ({ type }) =>
                                                            type.toLowerCase() ===
                                                            'article'
                                                    )
                                                    if (articlesInSection) {
                                                        return (
                                                            current +
                                                            articlesInSection.length
                                                        )
                                                    }
                                                    return current
                                                }, 0)
                                            )(values.sections),
                                        },
                                        {
                                            name: 'Collections',
                                            count: pipe(
                                                map<any, any>(
                                                    ({ resourcesId }) =>
                                                        resourcesId
                                                ),
                                                reduce((current, next) => {
                                                    const collectionsInSection = next.filter(
                                                        ({ type }) =>
                                                            type.toLowerCase() ===
                                                            'collection'
                                                    )
                                                    if (collectionsInSection) {
                                                        return (
                                                            current +
                                                            collectionsInSection.length
                                                        )
                                                    }
                                                    return current
                                                }, 0)
                                            )(values.sections),
                                        },
                                    ]}
                                />
                                <Label color="white">Curator</Label>
                                <CreateCollectionCurators>
                                    <Avatar
                                        color="secondary"
                                        username={username}
                                        id={userId}
                                        avatar={userAvatar}
                                        withName={true}
                                    />
                                    {/* <AddMemberButton /> */}
                                </CreateCollectionCurators>
                            </CreateCollectionCuratorDetails>
                        </CreateCollectionMetaDetails>
                    </Stack>
                </PrimaryHeaderSection>

                <ContentSection>
                    <FieldArray
                        name="sections"
                        render={arrayHelpers => (
                            <>
                                {/* {console.log(arrayHelpers)} */}
                                {values.sections &&
                                    values.sections.length > 0 &&
                                    values.sections.map(
                                        (
                                            section: Collection_sections,
                                            index
                                        ) => (
                                            <SectionSection key={index} mt={4}>
                                                <Field
                                                    type="text"
                                                    name={`sections.${index}.name`}
                                                    render={({ field }) => (
                                                        <TextField
                                                            {...field}
                                                            type="text"
                                                            placeholder="Add Section Name"
                                                            fontWeight={500}
                                                            className={
                                                                classes.inputSection
                                                            }
                                                            color={
                                                                'primaryTextColor'
                                                            }
                                                        />
                                                    )}
                                                />
                                                <Field
                                                    type="text"
                                                    name={`sections.${index}.description`}
                                                    render={({ field }) => (
                                                        <TextField
                                                            {...field}
                                                            type="text"
                                                            placeholder="Add Section Description"
                                                            fontWeight={300}
                                                            className={
                                                                classes.inputSection
                                                            }
                                                            color={
                                                                'primaryTextColor'
                                                            }
                                                        />
                                                    )}
                                                />

                                                <DragDropContext
                                                    onDragEnd={handleDragEnd(
                                                        arrayHelpers,
                                                        index,
                                                        values
                                                    )}
                                                >
                                                    <Droppable
                                                        direction={'vertical'}
                                                        droppableId={
                                                            section.id || '0'
                                                        }
                                                    >
                                                        {provided => (
                                                            <CardContentSection
                                                                {...provided.droppableProps}
                                                                ref={
                                                                    provided.innerRef
                                                                }
                                                            >
                                                                {/* Section id */}
                                                                {section.resourcesId &&
                                                                    Array.isArray(
                                                                        section.resourcesId
                                                                    ) &&
                                                                    section.resourcesId.map(
                                                                        renderResourceSection(
                                                                            index,
                                                                            arrayHelpers,
                                                                            section,
                                                                            values,
                                                                            'resourcesId'
                                                                        )
                                                                    )}
                                                            </CardContentSection>
                                                        )}
                                                    </Droppable>
                                                </DragDropContext>

                                                <ChooseResourceModal
                                                    key={`choose-resource-modal-${index}`}
                                                    open={
                                                        resourceModalOpened[
                                                            index
                                                        ]
                                                    }
                                                    handleClose={() =>
                                                        setResourceModalOpened({
                                                            ...resourceModalOpened,
                                                            [index]: false,
                                                        })
                                                    }
                                                    handleConfirm={(
                                                        selected: ResourceIdentifierInput[]
                                                    ) => {
                                                        arrayHelpers.form.setFieldValue(
                                                            `sections[${index}].resourcesId`,
                                                            selected.map(
                                                                res => res
                                                            )
                                                        )
                                                        setModalOptions({
                                                            ...modalOptions,
                                                            variables: {
                                                                ...modalOptions.variables,
                                                                query: '',
                                                            },
                                                        })
                                                        setResourceModalOpened({
                                                            ...resourceModalOpened,
                                                            [index]: false,
                                                        })
                                                    }}
                                                    preSelected={
                                                        values.sections[index]
                                                            .resourcesId
                                                    }
                                                    title={modalOptions.title}
                                                    queryDoc={
                                                        modalOptions.query
                                                    }
                                                    queryKey={
                                                        modalOptions.queryKey
                                                    }
                                                    queryVariables={
                                                        modalOptions.variables
                                                    }
                                                    pathToResourceId={[
                                                        'resourceIdentifier',
                                                    ]}
                                                    pathToResource={[
                                                        'resource',
                                                    ]}
                                                    showSearch={
                                                        modalOptions.showSearch
                                                    }
                                                    searchQuery={
                                                        modalOptions.variables[
                                                            'query'
                                                        ]
                                                    }
                                                    setSearchQuery={(
                                                        query: string
                                                    ) =>
                                                        setModalOptions({
                                                            ...modalOptions,
                                                            variables: {
                                                                ...modalOptions.variables,
                                                                query,
                                                            },
                                                        })
                                                    }
                                                />
                                                <SectionOptions
                                                    currentSectionIndex={index}
                                                    previousSectionHasArticles={pipe(
                                                        path<any>([
                                                            'sections',
                                                            index > 0
                                                                ? index
                                                                : 0,
                                                            'resourcesId',
                                                        ]),
                                                        defaultTo([]),
                                                        resourcesId =>
                                                            resourcesId.length,
                                                        Boolean
                                                    )(values)}
                                                    addNewSection={() =>
                                                        arrayHelpers.push(
                                                            emptySection
                                                        )
                                                    }
                                                    removeSection={() =>
                                                        arrayHelpers.remove(
                                                            index
                                                        )
                                                    }
                                                    modalConfigs={modalConfigs}
                                                    onClick={(
                                                        config: IModalConfig
                                                    ) => {
                                                        setModalOptions({
                                                            showSearch:
                                                                config.showSearch,
                                                            queryKey:
                                                                config.query
                                                                    .key,
                                                            query:
                                                                config.query
                                                                    .name,
                                                            variables:
                                                                config.query
                                                                    .variables,
                                                            title: config.title,
                                                        })
                                                        setResourceModalOpened({
                                                            ...resourceModalOpened,
                                                            [index]: true,
                                                        })
                                                    }}
                                                />
                                            </SectionSection>
                                        )
                                    )}
                            </>
                        )}
                    />

                    {process.env.NODE_ENV !== 'production' && (
                        <DisplayFormikState
                            touched={touched}
                            errors={errors}
                            values={values}
                            isSubmitting={isSubmitting}
                        />
                    )}
                </ContentSection>
            </Form>
        </Section>
    )
}

export default CreateCollectionForm
