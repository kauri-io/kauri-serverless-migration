import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withFormik } from 'formik'
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
import { Collection_sections } from '../../queries/Fragments/__generated__/Collection'
import { SectionDTOInput } from '../../__generated__/globalTypes'

export interface IFormState {
    name: string
    background?: string
    description?: string
    sections: Collection_sections
}

const emptySection: Collection_sections = {
    id: null,
    __typename: 'SectionDTO',
    name: '',
    description: undefined,
    resourcesId: [],
    resources: [],
}

const getCollectionField = (field, data) => path(['getCollection', field], data)

export default compose(
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
    withFormik({
        mapPropsToValues: ({ data, query }) => {
            const sections =
                // Prefill article in section 1 and create first collection
                typeof query === 'object' && typeof query.articleId === 'string'
                    ? [
                          {
                              name: '',
                              description: undefined,
                              resourcesId: [
                                  {
                                      type: 'ARTICLE',
                                      id: query.articleId,
                                      version: query.version,
                                  },
                              ],
                          },
                      ] // Updating a collection, prefill data
                    : path(['getCollection', 'sections'])(data)
                    ? pipe(
                          path(['getCollection', 'sections']),
                          map((section: Collection_sections) => ({
                              ...section,
                              resourcesId: map(
                                  ({ id, version, __typename }) => ({
                                      type: __typename
                                          .split('DTO')[0]
                                          .toUpperCase(),
                                      id,
                                      version,
                                  })
                              )(section.resources),
                          })),
                          map(section => dissocPath(['resources'])(section)),
                          map(section => dissocPath(['__typename'])(section))
                      )(data)
                    : [emptySection]
            // Empty section, fresh collection

            return {
                name: getCollectionField('name', data) || '',
                sections,
                background: getCollectionField('background', data) || undefined,
                description:
                    getCollectionField('description', data) || undefined,
                tags: getCollectionField('tags', data) || undefined,
            }
        },
        validationSchema: Yup.object().shape({
            name: Yup.string()
                .min(2, 'Too Short!')
                .max(100, 'Too Long!')
                .required('Required'),
            description: Yup.string().min(2, 'Too Short!'),
            tags: Yup.array().min(1, 'Minimum one tag'),
            sections: Yup.array(
                Yup.object().shape({
                    // name: Yup.string().required("Missing section name!"),
                    resourcesId: Yup.array().required('Missing a resource!'),
                })
            ),
        }),
        handleSubmit: (
            values: IFormState,
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
                    // BACKEND FIX sections.resources -> sections.resourcesId :(
                    const reassignResourcesToResourcesId = pipe(
                        path(['sections']),
                        map((section: Collection_sections) => ({
                            ...section,
                            resourcesId: map(({ id, version, type }) => ({
                                type: type.toUpperCase(),
                                id,
                                version,
                            }))(section.resourcesId),
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