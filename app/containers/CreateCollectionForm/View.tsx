import React from 'react'
import styled from 'styled-components'
import { space, SpaceProps } from 'styled-system'
import { Form, Field, FieldArray, InjectedFormikProps } from 'formik'
import Stack from 'stack-styled'
import { path, remove, pipe, map, reduce, filter, defaultTo } from 'ramda'
import ActionsSection from '../../components/Section/ActionsSection'
import PrimaryHeaderSection from '../../components/Section/PrimaryHeaderSection'
import CardContentSection from '../../components/Section/CardContentSection'
import StatisticsContainer from '../../components/PublicProfile/StatisticsContainer'
import UserAvatar from '../../components/UserAvatar'
import { Label } from '../../components/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import showFormValidationErrors from '../../lib/show-form-validation-errors'
import ChooseArticleModal from './ChooseArticleModal'
import ChooseCollectionModal, { ICollection } from './ChooseCollectionModal'
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
import CollectionCardFormView from '../CollectionCardFormView'
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

const useStyles = makeStyles((theme: Theme) => ({
    input: {
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
    uploadIcon: {
        marginRight: theme.spacing(2),
    },
}))

const emptySection: Collection_sections = {
    id: null,
    __typename: 'SectionDTO',
    name: '',
    description: null,
    resourcesId: [],
    resources: [],
}
const RemoveIcon = () => (
    <img src="https://png.icons8.com/windows/50/000000/delete-sign.png" />
)

const Section = styled.section`
    display: flex;
    flex-direction: column;
`

const ResourceSection = styled.section`
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
) => (resource, resourceIndex) => (
    <ResourceSection key={resourceIndex}>
        {path(
            ['sections', index, mappingKey, resourceIndex, 'version'],
            values
        ) ? (
            <Draggable
                index={resourceIndex}
                draggableId={`${path(
                    ['sections', index, mappingKey, resourceIndex, 'id'],
                    values
                )}-${path(
                    ['sections', index, mappingKey, resourceIndex, 'version'],
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
        ) : (
            path(['sections', index, mappingKey, resourceIndex], values) && (
                <Draggable
                    index={resourceIndex}
                    draggableId={`${path(
                        ['sections', index, mappingKey, resourceIndex, 'id'],
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
                            <CollectionCardFormView
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
            )
        )}
        <Button
            color="primary"
            variant="text"
            onClick={() =>
                arrayHelpers.form.setFieldValue(
                    `sections[${index}][${mappingKey}]`,
                    Array.isArray(section[mappingKey]) &&
                        (!resourceIndex
                            ? section[mappingKey].length > 1
                                ? section[mappingKey].splice(1)
                                : []
                            : remove(
                                  resourceIndex,
                                  resourceIndex,
                                  section[mappingKey]
                              ))
                )
            } // Remove current resource index
        >
            <RemoveIcon />
            {`Remove ${resource.type}`}
        </Button>
    </ResourceSection>
)

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
    routeChangeAction: (route: string) => void
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
        articleId: string
        version: string
    }
}
const CreateCollectionForm: React.FC<
    InjectedFormikProps<IProps, IFormValues>
> = ({
    id,
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
        const uppy = initUppy({
            allowGifs: false,
            trigger: '.background-upload',
        })
        uppy.on('upload-success', (_data, data2) => {
            const url = `https://${config.gateway}:443/ipfs/${data2.body.hash}`
            setFieldValue('background', url)
        })
    }, [])

    const [openChooseArticleModal, setOpenChooseArticleModal] = React.useState<
        boolean
    >(false)

    const [
        openChooseCollectionModal,
        setOpenChooseCollectionModal,
    ] = React.useState<boolean>(false)
    const classes = useStyles()

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
                    <Stack alignItems={['', 'center']}>
                        <Button
                            color="secondary"
                            variant="text"
                            data-testid={`CreateCollectionForm-back`}
                            onClick={() => routeChangeAction('back')}
                        >
                            <BackIcon />
                            Cancel Collection
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
                            disabled={isSubmitting}
                            type="submit"
                            onClick={() =>
                                showFormValidationErrors(
                                    validateForm,
                                    showNotificationAction
                                )
                            }
                        >
                            <Button
                                color="secondary"
                                variant="text"
                                className="background-upload"
                            >
                                <UploadIcon className={classes.uploadIcon} />
                                Background Image
                            </Button>
                        </Button>
                    </Stack>
                    <Stack
                        alignItems={['', 'center']}
                        justifyContent={['', 'end']}
                    >
                        <Button
                            variant="contained"
                            color="primary"
                            disabled={isSubmitting}
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
                        <Label color="white">Collection</Label>
                        <Field
                            type="text"
                            name="name"
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    type="text"
                                    placeholder="Add collection title"
                                    InputProps={{
                                        className: classes.input,
                                    }}
                                    margin="normal"
                                />
                            )}
                        />
                        {/* <ErrorMessage name='name' render={(message: string) => <ErrorMessageRenderer>{message}</ErrorMessageRenderer>} /> */}
                        <Field
                            type="text"
                            name="description"
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    type="text"
                                    placeholder="Add description"
                                    InputProps={{
                                        className: classes.input,
                                    }}
                                    margin="normal"
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
                                    <UserAvatar
                                        variant="white"
                                        fullWidth
                                        username={username}
                                        userId={userId}
                                        avatar={userAvatar}
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
                                                            color={
                                                                'primaryTextColor'
                                                            }
                                                            textAlign={'center'}
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
                                                            color={
                                                                'primaryTextColor'
                                                            }
                                                            textAlign={'center'}
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
                                                <ChooseArticleModal
                                                    open={
                                                        openChooseArticleModal
                                                    }
                                                    allOtherChosenArticles={values.sections.filter(
                                                        (_, sectionIndex) =>
                                                            index !==
                                                            sectionIndex
                                                    )}
                                                    chosenArticles={pipe(
                                                        path<
                                                            [
                                                                {
                                                                    type: string
                                                                }
                                                            ]
                                                        >([
                                                            'sections',
                                                            index,
                                                            'resourcesId',
                                                        ]),
                                                        defaultTo([] as Array<{
                                                            type: string
                                                        }>),
                                                        filter(
                                                            ({ type }) =>
                                                                type.toLowerCase() ===
                                                                'article'
                                                        )
                                                    )(values)}
                                                    closeModalAction={() =>
                                                        setOpenChooseArticleModal(
                                                            false
                                                        )
                                                    }
                                                    confirmModal={chosenArticles => {
                                                        arrayHelpers.form.setFieldValue(
                                                            `sections[${index}].resourcesId`,
                                                            (
                                                                path<
                                                                    [
                                                                        {
                                                                            type
                                                                            string
                                                                        }
                                                                    ]
                                                                >([
                                                                    'sections',
                                                                    index,
                                                                    'resourcesId',
                                                                ])(values) || []
                                                            )
                                                                .filter(
                                                                    ({
                                                                        type,
                                                                    }) =>
                                                                        type &&
                                                                        type.toLowerCase() ===
                                                                            'collection'
                                                                )
                                                                .concat(
                                                                    chosenArticles.map(
                                                                        article => ({
                                                                            ...article,
                                                                            type:
                                                                                'ARTICLE',
                                                                        })
                                                                    )
                                                                )
                                                        )
                                                        setOpenChooseArticleModal(
                                                            false
                                                        )
                                                    }}
                                                />

                                                <ChooseCollectionModal
                                                    open={
                                                        openChooseCollectionModal
                                                    }
                                                    currentCollectionIdIfUpdating={
                                                        id
                                                    }
                                                    allOtherChosenCollections={values.sections.filter(
                                                        (_, sectionIndex) =>
                                                            index !==
                                                            sectionIndex
                                                    )}
                                                    chosenCollections={pipe(
                                                        path<
                                                            [
                                                                {
                                                                    type: string
                                                                }
                                                            ]
                                                        >([
                                                            'sections',
                                                            index,
                                                            'resourcesId',
                                                        ]),
                                                        defaultTo([] as Array<{
                                                            type: string
                                                        }>),
                                                        filter(
                                                            ({ type }) =>
                                                                type.toLowerCase() ===
                                                                'collection'
                                                        )
                                                    )(values)}
                                                    closeModalAction={() =>
                                                        setOpenChooseCollectionModal(
                                                            false
                                                        )
                                                    }
                                                    confirmModal={chosenCollections =>
                                                        arrayHelpers.form.setFieldValue(
                                                            `sections[${index}].resourcesId`,
                                                            (
                                                                path<
                                                                    [
                                                                        {
                                                                            type
                                                                            string
                                                                        }
                                                                    ]
                                                                >([
                                                                    'sections',
                                                                    index,
                                                                    'resourcesId',
                                                                ])(values) || []
                                                            )
                                                                .filter(
                                                                    ({
                                                                        type,
                                                                    }) =>
                                                                        type &&
                                                                        type.toLowerCase() ===
                                                                            'article'
                                                                )
                                                                .concat(
                                                                    chosenCollections.map(
                                                                        collection => ({
                                                                            ...collection,
                                                                            type:
                                                                                'COLLECTION',
                                                                        })
                                                                    )
                                                                )
                                                        )
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
                                                    chooseArticle={() =>
                                                        setOpenChooseArticleModal(
                                                            true
                                                        )
                                                    }
                                                    chooseCollection={() =>
                                                        setOpenChooseCollectionModal(
                                                            true
                                                        )
                                                    }
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
