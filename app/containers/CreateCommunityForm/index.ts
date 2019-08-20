import { connect } from 'react-redux'
import { compose } from 'react-apollo'
import View, { IProps } from './View'
import { IReduxState } from '../../lib/Module'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'
import {
    openModalAction,
    closeModalAction,
} from '../../components/Modal/Module'
import { createCommunityAction, updateCommunityAction } from './Module'
import { withFormik } from 'formik'
import * as Yup from 'yup'
import { map, dissocPath, pipe, path, defaultTo } from 'ramda'
import { updateCommunityVariables } from '../../queries/__generated__/updateCommunity'
import { IInvitation } from './ManageMembers/FormInviteMembersPanel'

export interface ICommunityAttributes {
    background: undefined | string
}

export type IFormValues = updateCommunityVariables & {
    invitations?: IInvitation[]
}

const mapStateToProps = ({ app: { user } }: IReduxState, ownProps: any) => ({
    isCommunityAdmin:
        user &&
        user.communities.find(
            ({ community }) => community.id === ownProps.id
        ) &&
        (user.communities.find(
            ({ community }) => community.id === ownProps.id
        ) as any).role === 'ADMIN',
    userAvatar: user && user.avatar,
    userId: user && user.id,
    username: user && user.username,
})

export const emptySection = {
    description: undefined,
    name: '',
    resourcesId: [],
}

export default compose(
    connect(
        mapStateToProps,
        {
            closeModalAction,
            createCommunityAction,
            openModalAction,
            routeChangeAction,
            showNotificationAction,
            updateCommunityAction,
        }
    ),
    // id: null, "invitations" | "name" | "social" | "website"
    withFormik<
        IProps,
        Pick<
            IFormValues,
            'name' | 'attributes' | 'avatar' | 'description' | 'homepage'
        >
    >({
        displayName: 'CreateCommunityForm',
        handleSubmit: (values, { setSubmitting, props }) => {
            console.info(JSON.stringify(values, null, 2))
            // console.info(values.invitations);
            setSubmitting(true)
            if (props.id) {
                /*

          // BACKEND FIX sections.resources -> sections.resourcesId :(
          const reassignResourcesToResourcesId = pipe(
            path(["sections"]),
            map(section => ({
              ...section,
              resourcesId: map(({ id, version, type }) => ({
                type: type.toUpperCase(),
                id,
                version,
              }))(section.resourcesId),
            })),
            map(section => dissocPath(["resources"])(section)),
            map(section => dissocPath(["__typename"])(section))
          );

          const payload = {
            ...values,
            sections: reassignResourcesToResourcesId(values),
            id: props.data.variables.id,
            updating: true,
          };

          props.editCollectionAction(payload, () => {
            setSubmitting(false);
          });

*/

                const reassignResourcesToResourcesId = pipe(
                    path<
                        [
                            {
                                resourcesId: [
                                    {
                                        id: string
                                        version: number
                                        type: string
                                    }
                                ]
                            }
                        ]
                    >(['homepage']),
                    // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/25581
                    // @ts-ignore
                    defaultTo([]),
                    map(
                        (section: {
                            resourcesId: [
                                { id: string; version: number; type: string }
                            ]
                        }) => ({
                            ...section,
                            resources: map(({ id, version, type }) => ({
                                id,
                                type: type.toUpperCase(),
                                version,
                            }))(section.resourcesId),
                        })
                    ),
                    map(section => dissocPath(['resources'])(section)),
                    map(section => dissocPath(['__typename'])(section))
                )

                const payload = {
                    ...values,
                    homepage: reassignResourcesToResourcesId(values),
                    id: props.id,
                    updating: true,
                }

                props.updateCommunityAction(payload as any, () => {
                    setSubmitting(false)
                })
            } else {
                props.createCommunityAction(values, () => {
                    setSubmitting(false)
                })
            }
        },
        mapPropsToValues: ({ data, id }) => {
            const homepage = path(['getCommunity', 'homepage'])(data)
                ? pipe(
                      path<[any]>(['getCommunity', 'homepage']),
                      // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/25581
                      // @ts-ignore
                      defaultTo([]),
                      map(section => ({
                          // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/25581
                          // @ts-ignore
                          ...section,
                          resourcesId: map(
                              ({ id: resourceId, version, __typename }) => ({
                                  id: resourceId,
                                  type: __typename
                                      .split('DTO')[0]
                                      .toUpperCase(),
                                  version,
                              })
                          )(section.resources),
                      })),
                      map(section => dissocPath(['resources'])(section)),
                      map(section => dissocPath(['__typename'])(section))
                  )(data)
                : [emptySection]

            if (id && data) {
                const { getCommunity } = data
                if (getCommunity) {
                    return { ...getCommunity, invitations: [], homepage }
                }
            }
            return {
                attributes: undefined,
                avatar: null,
                description: '',
                homepage,
                id: null,
                invitations: [],
                name: '',
                social: {},
                website: '',
            }
        },
        validationSchema: Yup.object().shape({
            avatar: Yup.string().typeError(
                'Please upload a .png or .jpeg file as a logo in order to continue'
            ),
            description: Yup.string().required(
                'Give your community a description'
            ),
            name: Yup.string().required('Give your community a name'),
            tags: Yup.array()
                .min(1)
                .required('Add a tag to your community to save'),
        }),
    })
)(View)
