import styled from 'styled-components'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import CardContentSection from '../../../components/Section/CardContentSection'
import { FieldArray, Field } from 'formik'
import { IFormValues, emptySection } from '../index'
import Input from '../../../components/Input/Input'
import ArticleCard from '../../ArticleCardFormView'
import CollectionCard from '../../CollectionCardFormView'
import { space, SpaceProps, background, BackgroundProps } from 'styled-system'
import { path, defaultTo, pipe, filter, remove, concat } from 'ramda'
import TertiaryButtonComponent from '../../../components/Button/TertiaryButton'
import SectionOptions from '../../CreateCollectionForm/SectionOptions'
import {
    openModalAction as openModal,
    closeModalAction as closeModal,
} from '../../../components/Modal/Module'
import ChooseCommunityArticleModal from './ChooseCommunityArticleModal'
import ChooseCommunityCollectionModal from './ChooseCommunityCollectionModal'

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
    :hover {
        > :first-child {
            box-shadow: 0 0 0 2px ${props => props.theme.hoverTextColor};
        }
    }
`

const RemoveIcon = () => (
    <img src="https://png.icons8.com/windows/50/000000/delete-sign.png" />
)

const renderResourceSection = (
    index: number,
    arrayHelpers: any,
    section: any,
    values: IFormValues,
    mappingKey: string
) => (resource: any, resourceIndex: number) => (
    <ResourceSection key={resourceIndex} mt={3}>
        {path(
            ['homepage', index, mappingKey, resourceIndex, 'version'],
            values
        ) ? (
            <Draggable
                index={resourceIndex}
                draggableId={`${path(
                    ['homepage', index, mappingKey, resourceIndex, 'id'],
                    values
                )}-${path(
                    ['homepage', index, mappingKey, resourceIndex, 'version'],
                    values
                )}`}
            >
                {(provided): any => {
                    return (
                        <DraggableResourceContainer
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.ref}
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
        ) : (
            path(['homepage', index, mappingKey, resourceIndex], values) && (
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
                            ref={provided.ref}
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
            )
        )}
        <TertiaryButtonComponent
            color="primaryTextColor"
            icon={<RemoveIcon />}
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
            {`Remove ${resource.type}`}
        </TertiaryButtonComponent>
    </ResourceSection>
)

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
    id,
    values,
    openModalAction,
    closeModalAction,
}) => {
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
                                            <Input
                                                {...field}
                                                type="text"
                                                placeHolder="Add Section Name"
                                                fontSize={5}
                                                fontWeight={500}
                                                color={'primaryTextColor'}
                                                textAlign={'center'}
                                            />
                                        )}
                                    />
                                    <Field
                                        type="text"
                                        name={`homepage.${index}.description`}
                                        render={({ field }: any) => (
                                            <Input
                                                {...field}
                                                type="text"
                                                placeHolder="Add Section Description"
                                                fontSize={2}
                                                fontWeight={300}
                                                color={'primaryTextColor'}
                                                textAlign={'center'}
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

                                            // console.log(arrayHelpers.form);
                                            // console.log(`homepage[${index}].resources[${destination.index}]`);
                                            // console.log(sourceResource);

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
                                                    ref={provided.ref}
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
                                        chooseArticle={() =>
                                            openModalAction({
                                                children: (
                                                    // TODO: CHANGE TO CHOOSEARTICLEMODAL COMPONENT BECAUSE PHASE 2 :-1:
                                                    <ChooseCommunityArticleModal
                                                        id={id}
                                                        allOtherChosenArticles={
                                                            values.homepage &&
                                                            values.homepage.filter(
                                                                (
                                                                    _,
                                                                    sectionIndex
                                                                ) =>
                                                                    index !==
                                                                    sectionIndex
                                                            )
                                                        }
                                                        chosenArticles={pipe(
                                                            path<
                                                                Array<{
                                                                    type: string
                                                                }>
                                                            >([
                                                                'homepage',
                                                                index,
                                                                'resourcesId',
                                                            ]),
                                                            defaultTo([]),
                                                            filter(
                                                                (
                                                                    resourceId: any
                                                                ) =>
                                                                    resourceId &&
                                                                    resourceId.type.toLowerCase() ===
                                                                        'article'
                                                            )
                                                        )(values)}
                                                        closeModalAction={() =>
                                                            closeModalAction()
                                                        }
                                                        confirmModal={(
                                                            chosenArticles: [
                                                                {
                                                                    id: string
                                                                    version: number
                                                                }
                                                            ]
                                                        ) =>
                                                            arrayHelpers.form.setFieldValue(
                                                                `homepage[${index}].resourcesId`,
                                                                pipe(
                                                                    path<
                                                                        Array<{
                                                                            type: string
                                                                            id: string
                                                                            version: number
                                                                        }>
                                                                    >([
                                                                        'homepage',
                                                                        index,
                                                                        'resourcesId',
                                                                    ]),
                                                                    // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/25581
                                                                    // @ts-ignore
                                                                    defaultTo(
                                                                        []
                                                                    ),
                                                                    // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/25581
                                                                    // @ts-ignore
                                                                    filter<
                                                                        Array<{
                                                                            type: string
                                                                            id: string
                                                                            version: number
                                                                        }>
                                                                    >(
                                                                        resourceId =>
                                                                            resourceId &&
                                                                            // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/25581
                                                                            // @ts-ignore
                                                                            resourceId.type &&
                                                                            // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/25581
                                                                            // @ts-ignore
                                                                            resourceId.type.toLowerCase() ===
                                                                                'collection'
                                                                    ),
                                                                    defaultTo(
                                                                        []
                                                                    ),
                                                                    concat(
                                                                        chosenArticles.map(
                                                                            article =>
                                                                                article && {
                                                                                    ...article,
                                                                                    type:
                                                                                        'ARTICLE',
                                                                                }
                                                                        )
                                                                    )
                                                                )(values)
                                                            )
                                                        }
                                                    />
                                                ),
                                            })
                                        }
                                        chooseCollection={() =>
                                            openModalAction({
                                                children: (
                                                    // TODO: CHANGE TO CHOOSECOLLECTIONMODAL COMPONENT BECAUSE PHASE 2 :-1:
                                                    <ChooseCommunityCollectionModal
                                                        id={id}
                                                        currentCollectionIdIfUpdating={
                                                            '1337'
                                                        }
                                                        allOtherChosenCollections={
                                                            values.homepage &&
                                                            values.homepage.filter(
                                                                (
                                                                    _,
                                                                    sectionIndex
                                                                ) =>
                                                                    index !==
                                                                    sectionIndex
                                                            )
                                                        }
                                                        chosenCollections={pipe(
                                                            path([
                                                                'homepage',
                                                                index,
                                                                'resourcesId',
                                                            ]),
                                                            // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/25581
                                                            // @ts-ignore
                                                            defaultTo([]),
                                                            // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/25581
                                                            // @ts-ignore
                                                            filter<
                                                                Array<{
                                                                    type: string
                                                                    id: string
                                                                }>
                                                            >(
                                                                resourceId =>
                                                                    resourceId &&
                                                                    // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/25581
                                                                    // @ts-ignore
                                                                    resourceId.type.toLowerCase() ===
                                                                        'collection'
                                                            )
                                                        )(values)}
                                                        closeModalAction={() =>
                                                            closeModalAction()
                                                        }
                                                        confirmModal={(
                                                            chosenCollections: [
                                                                { id: string }
                                                            ]
                                                        ) =>
                                                            arrayHelpers.form.setFieldValue(
                                                                `homepage[${index}].resourcesId`,
                                                                pipe(
                                                                    path([
                                                                        'homepage',
                                                                        index,
                                                                        'resourcesId',
                                                                    ]),
                                                                    // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/25581
                                                                    // @ts-ignore
                                                                    defaultTo(
                                                                        []
                                                                    ),
                                                                    // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/25581
                                                                    // @ts-ignore
                                                                    filter(
                                                                        ({
                                                                            type,
                                                                        }) =>
                                                                            type.toLowerCase() ===
                                                                            'article' // TODO: check?
                                                                    ),
                                                                    concat(
                                                                        chosenCollections.map(
                                                                            collection => ({
                                                                                ...collection,
                                                                                type:
                                                                                    'COLLECTION',
                                                                            })
                                                                        )
                                                                    )
                                                                )(values)
                                                            )
                                                        }
                                                    />
                                                ),
                                            })
                                        }
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
