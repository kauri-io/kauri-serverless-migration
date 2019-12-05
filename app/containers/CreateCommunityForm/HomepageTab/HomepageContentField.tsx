import styled from 'styled-components'
import React from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import CardContentSection from '../../../components/Section/CardContentSection'
import { FieldArray, Field } from 'formik'
import { IFormValues, emptySection } from '../index'
import TextField from '@material-ui/core/TextField'
import ArticleCard from '../../ArticleCardFormView'
import CollectionCard from '../../CollectionCardFormView'
import { space, SpaceProps, background, BackgroundProps } from 'styled-system'
import { path, defaultTo, pipe, remove } from 'ramda'
import Button from '../../../components/Button'
import SectionOptions from '../../CreateCollectionForm/SectionOptions'
import {
    openModalAction as openModal,
    closeModalAction as closeModal,
} from '../../../components/Modal/Module'
import DeleteIcon from '@material-ui/icons/Delete'
import { Theme, makeStyles } from '@material-ui/core/styles'
import ChooseResourceModal from '../../ChooseResourceModal'
import { ResourceIdentifierInput } from '../../../__generated__/globalTypes'
import { globalSearchApprovedArticles } from '../../../queries/Article'
import { IModalConfig } from '../../CreateCollectionForm/View'
import { getCommunityArticleContent } from '../../../queries/Community'
import LinkCardFormView from '../../LinkCardFormView'

const useStyles = makeStyles((_theme: Theme) => ({
    inputSection: {
        width: '808px',
        '& > div': {
            '& > input': {
                textAlign: 'center',
            },
        },
    },
}))

const Section = styled.section<SpaceProps>`
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

const ResourceSection = styled.section<SpaceProps>`
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
    index: number,
    arrayHelpers: any,
    section: any,
    values: IFormValues,
    mappingKey: string
) => (resource: any, resourceIndex: number) => {
    const type = path(
        ['homepage', index, mappingKey, resourceIndex, 'type'],
        values
    )

    return (
        <ResourceSection key={resourceIndex} mt={3}>
            {type === 'ARTICLE' && (
                <Draggable
                    index={resourceIndex}
                    draggableId={`${path(
                        ['homepage', index, mappingKey, resourceIndex, 'id'],
                        values
                    )}`}
                >
                    {(provided): any => {
                        return (
                            <DraggableResourceContainer
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                ref={provided.innerRef}
                                id="article-card"
                            >
                                <ArticleCard
                                    isLoggedIn={true}
                                    id={String(
                                        path(
                                            [
                                                'homepage',
                                                index,
                                                mappingKey,
                                                resourceIndex,
                                                'id',
                                            ],
                                            values
                                        )
                                    )}
                                    version={parseInt(
                                        path<string>(
                                            [
                                                'homepage',
                                                index,
                                                mappingKey,
                                                resourceIndex,
                                                'version',
                                            ],
                                            values
                                        ) || '',
                                        2
                                    )}
                                />
                                {provided.placeholder}
                            </DraggableResourceContainer>
                        )
                    }}
                </Draggable>
            )}

            {type === 'LINK' && (
                <Draggable
                    index={resourceIndex}
                    draggableId={`${path(
                        ['homepage', index, mappingKey, resourceIndex, 'id'],
                        values
                    )}`}
                >
                    {(provided): any => (
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
                                            'homepage',
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

            {type === 'COLLECTION' && (
                <Draggable
                    index={resourceIndex}
                    draggableId={`${path(
                        ['homepage', index, mappingKey, resourceIndex, 'id'],
                        values
                    )}`}
                >
                    {(provided): any => (
                        <DraggableResourceContainer
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            id="collection-card"
                        >
                            <CollectionCard
                                id={String(
                                    path(
                                        [
                                            'homepage',
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

            <Button
                color="default"
                variant="text"
                onClick={() =>
                    arrayHelpers.form.setFieldValue(
                        `homepage[${index}][${mappingKey}]`,
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
                <DeleteIcon />
                {`Remove ${resource.type}`}
            </Button>
        </ResourceSection>
    )
}

const ContentSection = styled.section<BackgroundProps & { bg: string }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${props => props.theme.paddingTop} ${props => props.theme.padding};
    min-height: calc(100vh - 270px);
    ${background};
`

interface IResourceIdentifier {
    id: string
    type: string // "ARTICLE" || "COLLECTION"
    version: number
}

interface IProps {
    values: IFormValues
    openModalAction: typeof openModal
    closeModalAction: typeof closeModal
    id: string
}

const HomepageContentField: React.FunctionComponent<IProps> = ({
    values,
    id,
}) => {
    const [resourceModalOpened, setResourceModalOpened] = React.useState({})

    const [modalOptions, setModalOptions] = React.useState({
        showSearch: false,
        query: globalSearchApprovedArticles,
        queryKey: '',
        variables: {},
        title: '',
    })

    const modalConfigs: IModalConfig[] = [
        {
            title: 'Community content',
            showSearch: false,
            query: {
                name: getCommunityArticleContent,
                key: 'getCommunityContent',
                variables: {
                    id,
                    size: 10,
                    filter: {
                        statusEquals: 'APPROVED',
                    },
                },
            },
        },
    ]

    const classes = useStyles()

    return (
        <ContentSection bg="tertiaryBackgroundColor">
            <FieldArray
                name="homepage"
                render={arrayHelpers => (
                    <>
                        {values.homepage &&
                            values.homepage.length > 0 &&
                            values.homepage.map((section, index) => (
                                <Section key={index} mt={4}>
                                    <Field
                                        type="text"
                                        name={`homepage.${index}.name`}
                                        render={({ field }: any) => (
                                            <TextField
                                                {...field}
                                                placeholder="Add Section Name"
                                                fontWeight={500}
                                                className={classes.inputSection}
                                                color={'primaryTextColor'}
                                            />
                                        )}
                                    />
                                    <Field
                                        type="text"
                                        name={`homepage.${index}.description`}
                                        render={({ field }: any) => (
                                            <TextField
                                                {...field}
                                                type="text"
                                                placeholder="Add Section Description"
                                                fontWeight={300}
                                                className={classes.inputSection}
                                                color={'primaryTextColor'}
                                            />
                                        )}
                                    />

                                    <DragDropContext
                                        onDragEnd={result => {
                                            const {
                                                destination,
                                                source,
                                            } = result
                                            if (!destination) {
                                                return
                                            }
                                            if (
                                                destination.droppableId ===
                                                    source.droppableId &&
                                                destination.index ===
                                                    source.index
                                            ) {
                                                return
                                            }

                                            const sourceResource = path<
                                                IResourceIdentifier
                                            >([
                                                'homepage',
                                                index,
                                                'resourcesId',
                                                source.index,
                                            ])(values)

                                            const destinationResource = path<
                                                IResourceIdentifier
                                            >([
                                                'homepage',
                                                index,
                                                'resourcesId',
                                                destination.index,
                                            ])(values)

                                            arrayHelpers.form.setFieldValue(
                                                `homepage[${index}].resourcesId[${destination.index}]`,
                                                sourceResource
                                            )

                                            arrayHelpers.form.setFieldValue(
                                                `homepage[${index}].resourcesId[${source.index}]`,
                                                destinationResource
                                            )
                                        }}
                                    >
                                        <Droppable
                                            direction={'vertical'}
                                            droppableId={
                                                (section && section.id) || '0'
                                            }
                                        >
                                            {(provided): any => (
                                                <CardContentSection
                                                    {...provided.droppableProps}
                                                    ref={provided.innerRef}
                                                >
                                                    {/* Section id */}
                                                    {section &&
                                                        section.resourcesId &&
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
                                        open={resourceModalOpened[index]}
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
                                                `homepage[${index}].resourcesId`,
                                                selected
                                            )
                                            setModalOptions({
                                                ...modalOptions,
                                                query: '',
                                            })
                                            setResourceModalOpened({
                                                ...resourceModalOpened,
                                                [index]: false,
                                            })
                                        }}
                                        preSelected={path([
                                            'homepage',
                                            index,
                                            'resourcesId',
                                        ])(values)}
                                        disabled={[]}
                                        title={modalOptions.title}
                                        queryDoc={modalOptions.query}
                                        queryKey={modalOptions.queryKey}
                                        queryVariables={modalOptions.variables}
                                        pathToResource={['resource']}
                                        showSearch={modalOptions.showSearch}
                                    />

                                    <SectionOptions
                                        currentSectionIndex={index}
                                        previousSectionHasArticles={pipe(
                                            path<any[]>([
                                                'homepage',
                                                index > 0 ? index : 0,
                                                'resourcesId',
                                            ]),
                                            defaultTo([]),
                                            resourcesId => resourcesId.length,
                                            Boolean
                                        )(values)}
                                        addNewSection={() =>
                                            arrayHelpers.push(emptySection)
                                        }
                                        removeSection={() =>
                                            arrayHelpers.remove(index)
                                        }
                                        modalConfigs={modalConfigs}
                                        onClick={(config: IModalConfig) => {
                                            setModalOptions({
                                                showSearch: config.showSearch,
                                                queryKey: config.query.key,
                                                query: config.query.name,
                                                variables:
                                                    config.query.variables,
                                                title: config.title,
                                            })
                                            setResourceModalOpened({
                                                ...resourceModalOpened,
                                                [index]: true,
                                            })
                                        }}
                                    />
                                </Section>
                            ))}
                    </>
                )}
            />
        </ContentSection>
    )
}

export default HomepageContentField
