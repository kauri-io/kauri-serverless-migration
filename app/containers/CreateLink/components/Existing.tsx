import { getLink } from '../../../queries/Link'
import { flowRight as compose } from 'lodash'
import { graphql } from 'react-apollo'
import LinkCard from '../../../components/Card/LinkCard'
import Loading from '../../../components/Loading'
import { getLinkUrl } from '../../../lib/getURLs'

const Existing = ({ data: { loading, getExternalLink } }) =>
    loading ? (
        <Loading />
    ) : (
        <LinkCard href={getLinkUrl(getExternalLink)} {...getExternalLink} />
    )

export default compose(
    graphql(getLink, {
        name: 'data',
        options: ({ id }: { id: string }) => ({
            variables: {
                id,
            },
        }),
    })
)(Existing)
