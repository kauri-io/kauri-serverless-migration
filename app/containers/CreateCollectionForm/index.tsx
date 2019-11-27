import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withFormik, InjectedFormikProps } from 'formik'
import * as Yup from 'yup'
import CreateCollectionForm, { IProps } from './View'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import {
    closeModalAction,
    openModalAction,
} from '../../components/Modal/Module'
import {
    createCollectionAction,
    editCollectionAction,
    composeCollectionAction,
} from './Module'
import PublishingSelector from '../PublishingSelector'
import { IReduxState } from '../../lib/Module'
import { dissocPath, map, pipe, path } from 'ramda'
import {
    Collection_sections,
} from '../../queries/Fragments/__generated__/Collection'
import { ITag } from '../../components/Tags/types'
import { defaultTo } from 'ramda'

export interface IFormValues {
    name: string
    background?: string
    description?: string
    sections: Collection_sections[]
    destination?: {
        id: string
        type: string
    }
    tags: ITag[] | null
}

const emptySection: any = {
    name: '',
    description: null,
    resourcesId: [],
}

function getCollectionField<T>(field: string, data: any) {
    return path<T>(['getCollection', field], data)
}

export default compose<
    InjectedFormikProps<IProps, IFormValues>,
    InjectedFormikProps<IProps, IFormValues>
>(
    connect(
        (state: IReduxState) => ({
            communities: state.app.user && state.app.user.communities,
            userId: state.app && state.app.user && state.app.user.id,
            username: state.app && state.app.user && state.app.user.username,
            userAvatar: state.app && state.app.user && state.app.user.avatar,
        }),
        {
            showNotificationAction,
            createCollectionAction,
            editCollectionAction,
            composeCollectionAction,
            routeChangeAction,
            openModalAction,
            closeModalAction,
        }
    ),
    withFormik<IProps, IFormValues>({
        mapPropsToValues: ({ data, query }) => {
            const sections =
                // Prefill article in section 1 and create first collection
                typeof query === 'object' &&
                typeof query.resourceId === 'string'
                    ? [
                          {
                              name: '',
                              description: undefined,
                              resourcesId: [
                                  {
                                      type: query.type,
                                      id: query.resourceId,
                                  },
                              ],
                          },
                      ] // Updating a collection, prefill data
                    : path<Collection_sections[]>([
                          'getCollection',
                          'sections',
                      ])(data)
                    ? pipe(
                          path<Collection_sections[]>([
                              'getCollection',
                              'sections',
                          ]),
                          defaultTo([]),
                          map(
                              (section: Collection_sections) =>
                                  section && {
                                      ...section,
                                      resourcesId: section.resourcesId,
                                  }
                          ),
                          map(section => dissocPath(['resources'])(section)),
                          map(section => dissocPath(['__typename'])(section))
                      )(data)
                    : [emptySection]
            // Empty section, fresh collection

            return {
                name: getCollectionField<string>('name', data) || '',
                sections: sections as any,
                background:
                    getCollectionField<string>('background', data) || undefined,
                description:
                    getCollectionField<string>('description', data) ||
                    undefined,
                tags: getCollectionField<ITag[]>('tags', data) || null,
            }
        },
        validationSchema: Yup.object().shape({
            name: Yup.string()
                .min(2, 'Too Short!')
                .max(100, 'Too Long!')
                .required('Give your collection a name'),
            description: Yup.string()
                .min(2, 'Too Short!')
                .max(150, 'Too Long!')
                .required('Give your collection a description'),
            tags: Yup.array().min(1, 'Add a tag to your collection to save'),
            sections: Yup.array(
                Yup.object().shape({
                    // name: Yup.string().required("Missing section name!"),
                    resourcesId: Yup.array().required(
                        'You must include an article or another collection per section to save your collection'
                    ),
                })
            ),
        }),
        handleSubmit: (
            values: IFormValues,
            { props, setSubmitting }: { props: IProps; setSubmitting: any }
        ) => {
            if (props.communities && !props.data) {
                props.openModalAction({
                    children: (
                        <PublishingSelector
                            userId={props.userId}
                            type="Collections"
                            closeModalAction={() => {
                                props.closeModalAction()
                                setSubmitting(false)
                            }}
                            communities={props.communities.map(
                                ({ community }) => ({
                                    ...community,
                                    __typename: 'CommunityDTO',
                                    type: 'COMMUNITY',
                                })
                            )}
                            handleSubmit={destination => {
                                values.destination = destination
                                props.createCollectionAction(values, () => {
                                    props.closeModalAction()
                                    setSubmitting(false)
                                })
                            }}
                        />
                    ),
                })
            } else {
                if (props.data) {
                    // BACKEND FIX sections.resources -> sections.resourcesId
                    const reassignResourcesToResourcesId = pipe(
                        path<Collection_sections[]>(['sections']),
                        defaultTo([]),
                        map((section: Collection_sections) => ({
                            ...section,
                            resourcesId:
                                section.resourcesId &&
                                section.resourcesId.map(resource => {
                                    if (resource) {
                                        const {
                                            id,
                                            version,
                                            type,
                                        } = resource as any
                                        return {
                                            type: type.toUpperCase(),
                                            id,
                                            version,
                                        }
                                    }
                                }),
                        })),
                        map(section => dissocPath(['resources'])(section)),
                        map(section => dissocPath(['__typename'])(section))
                    )

                    const payload = {
                        ...values,
                        sections: reassignResourcesToResourcesId(values),
                        id: props.data.variables.id,
                        updating: true,
                    }

                    props.editCollectionAction(payload, () => {
                        setSubmitting(false)
                    })
                    console.log('Editing')
                } else {
                    props.createCollectionAction(values, () => {
                        setSubmitting(false)
                    })
                    console.log('Creating')
                }
            }
        },
    })
)(CreateCollectionForm)
