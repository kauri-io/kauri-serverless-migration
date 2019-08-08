import styled from 'styled-components'
import { space, SpaceProps } from 'styled-system'
import { Formik, Form, Field, FieldArray, InjectedFormikProps } from 'formik'
import Stack from 'stack-styled'
import { path, remove, pipe, map, reduce, filter, defaultTo } from 'ramda'
import ActionsSection from '../../components/Section/ActionsSection'
import PrimaryHeaderSection from '../../components/Section/PrimaryHeaderSection'
import CardContentSection from '../../components/Section/CardContentSection'
import StatisticsContainer from '../../components/PublicProfile/StatisticsContainer'
import UserAvatar from '../../components/UserAvatar'
import { Label } from '../../components/Typography'
import Input from '../../components/Input/Input'
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
import {
    IOpenModalAction,
    ICloseModalAction,
    IOpenModalPayload,
} from '../../components/Modal/Module'
import { ICommunity } from '../../lib/Module'
import ArticleCardFormView from '../ArticleCardFormView'
import CollectionCardFormView from '../CollectionCardFormView'
import { useEffect } from 'react'
import initUppy from '../../lib/init-uppy'
import config from '../../config'

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

const UploadIcon = () => (
    <img src="https://png.icons8.com/color/50/000000/upload.png" />
)

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
    openModalAction: (payload: IOpenModalPayload) => IOpenModalAction
    editCollectionAction: any
    createCollectionAction: any
    data?: { getCollection?: ICollection; variables: { id: string } }
    closeModalAction: () => ICloseModalAction
    userId: string
    username: string
    userAvatar: string
    isLoggedIn: boolean
    query: {
        articleId: string
        version: string
    }
}

const BackIcon = styled.div`
    width: 10px !important;
    height: 14px !important;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-right: 10px solid ${props => props.theme.colors['primary']};
`

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
    openModalAction,
    closeModalAction,
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
    return (
        <Section>
            <Formik initialValues={values} onSubmit={console.log}>
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
                                color="primary"
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
                                color="primary"
                                className="background-upload"
                            >
                                <UploadIcon />
                                Background Image
                            </Button>
                        </Stack>
                        <Stack
                            alignItems={['', 'center']}
                            justifyContent={['', 'end']}
                        >
                            <Button
                                className="create-collection"
                                color="primary"
                                variant="contained"
                                disabled={isSubmitting}
                                onClick={() =>
                                    showFormValidationErrors(
                                        validateForm,
                                        showNotificationAction
                                    )
                                }
                            >
                                {data
                                    ? 'Update Collection'
                                    : 'Create Collection'}
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
                                    <Input
                                        {...field}
                                        type="text"
                                        placeHolder="Add collection title"
                                        fontSize={7}
                                    />
                                )}
                            />
                            {/* <ErrorMessage name='name' render={(message: string) => <ErrorMessageRenderer>{message}</ErrorMessageRenderer>} /> */}
                            <Field
                                type="text"
                                name="description"
                                render={({ field }) => (
                                    <Input
                                        {...field}
                                        type="text"
                                        placeHolder="Add description"
                                        fontSize={4}
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
                                {/* <Button>Follow Collection</Button> */}
                                {/* <Button>Up vote</Button> */}
                                {/* <Button color='primary' icon={<ShareIcon />}>Share</Button> */}
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
                                                        if (
                                                            collectionsInSection
                                                        ) {
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
                                                <SectionSection
                                                    key={index}
                                                    mt={4}
                                                >
                                                    <Field
                                                        type="text"
                                                        name={`sections.${index}.name`}
                                                        render={({ field }) => (
                                                            <Input
                                                                {...field}
                                                                type="text"
                                                                placeHolder="Add Section Name"
                                                                fontSize={5}
                                                                fontWeight={500}
                                                                color={
                                                                    'primaryTextColor'
                                                                }
                                                                textAlign={
                                                                    'center'
                                                                }
                                                            />
                                                        )}
                                                    />
                                                    <Field
                                                        type="text"
                                                        name={`sections.${index}.description`}
                                                        render={({ field }) => (
                                                            <Input
                                                                {...field}
                                                                type="text"
                                                                placeHolder="Add Section Description"
                                                                fontSize={2}
                                                                fontWeight={300}
                                                                color={
                                                                    'primaryTextColor'
                                                                }
                                                                textAlign={
                                                                    'center'
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
                                                            direction={
                                                                'horizontal'
                                                            }
                                                            droppableId={
                                                                section.id ||
                                                                '0'
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

                                                    <SectionOptions
                                                        currentSectionIndex={
                                                            index
                                                        }
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
                                                            openModalAction({
                                                                children: (
                                                                    <ChooseArticleModal
                                                                        allOtherChosenArticles={values.sections.filter(
                                                                            (
                                                                                _,
                                                                                sectionIndex
                                                                            ) =>
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
                                                                            defaultTo(
                                                                                [] as Array<{
                                                                                    type: string
                                                                                }>
                                                                            ),
                                                                            filter(
                                                                                ({
                                                                                    type,
                                                                                }) =>
                                                                                    type.toLowerCase() ===
                                                                                    'article'
                                                                            )
                                                                        )(
                                                                            values
                                                                        )}
                                                                        closeModalAction={() =>
                                                                            closeModalAction()
                                                                        }
                                                                        confirmModal={chosenArticles =>
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
                                                                                    >(
                                                                                        [
                                                                                            'sections',
                                                                                            index,
                                                                                            'resourcesId',
                                                                                        ]
                                                                                    )(
                                                                                        values
                                                                                    ) ||
                                                                                    []
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
                                                                                        chosenArticles.map(
                                                                                            article => ({
                                                                                                ...article,
                                                                                                type:
                                                                                                    'ARTICLE',
                                                                                            })
                                                                                        )
                                                                                    )
                                                                            )
                                                                        }
                                                                    />
                                                                ),
                                                            })
                                                        }
                                                        chooseCollection={() =>
                                                            openModalAction({
                                                                children: (
                                                                    <ChooseCollectionModal
                                                                        currentCollectionIdIfUpdating={
                                                                            id
                                                                        }
                                                                        allOtherChosenCollections={values.sections.filter(
                                                                            (
                                                                                _,
                                                                                sectionIndex
                                                                            ) =>
                                                                                index !==
                                                                                sectionIndex
                                                                        )}
                                                                        chosenCollections={(
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
                                                                            ])(
                                                                                values
                                                                            ) ||
                                                                            []
                                                                        ).filter(
                                                                            ({
                                                                                type,
                                                                            }) =>
                                                                                type &&
                                                                                type.toLowerCase() ===
                                                                                    'colllection'
                                                                        )}
                                                                        closeModalAction={() =>
                                                                            closeModalAction()
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
                                                                                    >(
                                                                                        [
                                                                                            'sections',
                                                                                            index,
                                                                                            'resourcesId',
                                                                                        ]
                                                                                    )(
                                                                                        values
                                                                                    ) ||
                                                                                    []
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
                                                                ),
                                                            })
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
            </Formik>
        </Section>
    )
}

export default CreateCollectionForm
