import React from 'react'
import { Theme, makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import {
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Typography,
    IconButton,
    InputBase,
} from '@material-ui/core'
import Link from 'next/link'
import { Close as CloseIcon, Search as SearchIcon } from '@material-ui/icons'
import {
    ResourceIdentifierInput,
    ResourceTypeInput,
} from '../../__generated__/globalTypes'
import CardDetails from '../../components/Card/CardComponents/CardDetails'
import Loading from '../../components/Loading'
import {
    getArticleURL,
    getLinkUrl,
    getCollectionURL,
    getCommunityURL,
    getProfileURL,
} from '../../lib/getURLs'
import withPagination, { PaginationDataQuery } from '../../lib/with-pagination'
import { Article } from '../../queries/Fragments/__generated__/Article'
import { Link as ExternalLink } from '../../queries/Fragments/__generated__/Link'
import { Collection } from '../../queries/Fragments/__generated__/Collection'
import { UserOwner } from '../../queries/Fragments/__generated__/UserOwner'
import { path } from 'ramda'
import { Community } from '../../queries/Fragments/__generated__/Community'
import { searchResultsAutocomplete_searchAutocomplete_content_resource_CollectionDTO_owner_PublicUserDTO as User } from '../../queries/__generated__/searchResultsAutocomplete'

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        margin: 0,
        padding: theme.spacing(2),
        display: 'flex',
    },
    title: {
        padding: theme.spacing(1),
        flexGrow: 1,
    },
    inputInput: {
        padding: theme.spacing(1, 2),
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
        paddingRight: theme.spacing(2),
    },
    searchClass: {
        alignItems: 'center',
        backgroundColor: theme.palette.background.default,
        borderRadius: theme.shape.borderRadius,
        display: 'flex',
        margin: theme.spacing(1),
        width: '90%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIconClass: {
        alignItems: 'center',
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        cursor: 'pointer',
        marginRight: theme.spacing(2),
    },
    body: {
        width: '100%',
        color: theme.palette.common.black,
    },
    card: {
        display: 'flex',
        margin: theme.spacing(1),
        padding: theme.spacing(1),
        border: '1px solid #CBCBCB',
        borderRadius: theme.shape.borderRadius,
    },
    cardSelected: {
        display: 'flex',
        margin: theme.spacing(1),
        padding: theme.spacing(1),
        border: '2px solid #0BA986',
        borderRadius: theme.shape.borderRadius,
    },
    left: {
        flexGrow: 1,
    },
    cardTitle: {
        flexGrow: 1,
        margin: theme.spacing(1),
    },
    cardButton: {
        width: '130px',
        padding: theme.spacing(1),
    },
    empty: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyText: {
        maxWidth: '50%',
        textAlign: 'center',
        fontWeight: 'bold',
    },
}))

const ChooseResourceModalContentView = props => {
    const {
        indexOf,
        isDisabled,
        selectResource,
        Query,
        queryKey,
        pathToResource,
        pathToResourceId,
        loading,
        setRef,
    } = props

    const classes = useStyles()

    return (
        <DialogContent
            dividers
            className={classes.container}
            ref={(ref: any) => setRef && setRef(ref)}
        >
            <DialogContentText
                id="alert-dialog-description"
                className={classes.body}
            >
                {/**** LOADING ****/}
                {!Query[queryKey] || loading ? <Loading /> : null}

                {/**** EMPTY STATE ****/}
                {Query[queryKey] &&
                Query[queryKey].totalElements === 0 &&
                !loading ? (
                    <div className={classes.empty}>
                        <Typography variant="h6" className={classes.emptyText}>
                            No Content Found
                        </Typography>
                    </div>
                ) : null}

                {/**** CONTENT ****/}
                {Query[queryKey] &&
                Query[queryKey].totalElements > 0 &&
                !loading
                    ? Query[queryKey].content.map(
                          (result: any, _index: number) => {
                              if (
                                  result === null ||
                                  result.resourceIdentifier === null
                              )
                                  return null

                              const resourceId: ResourceIdentifierInput = {
                                  id:
                                      path<string>([...pathToResourceId, 'id'])(
                                          result
                                      ) || '',
                                  type:
                                      path<ResourceTypeInput>([
                                          ...pathToResourceId,
                                          'type',
                                      ])(result) || ResourceTypeInput.ARTICLE,
                              }

                              switch (resourceId.type) {
                                  case 'ARTICLE': {
                                      var article = path<Article>([
                                          ...pathToResource,
                                      ])(result) as Article

                                      var author = article.contributors[0]
                                          ? article.contributors[0]
                                          : article.author

                                      return (
                                          <div
                                              className={
                                                  indexOf(resourceId) > -1
                                                      ? classes.cardSelected
                                                      : classes.card
                                              }
                                          >
                                              <div className={classes.left}>
                                                  <Typography
                                                      variant="subtitle1"
                                                      className={
                                                          classes.cardTitle
                                                      }
                                                  >
                                                      {article.title}
                                                  </Typography>
                                                  <CardDetails
                                                      user={{
                                                          id: author.id,
                                                          username:
                                                              author.username ||
                                                              '',
                                                          name:
                                                              author.name || '',
                                                          avatar:
                                                              author.avatar ||
                                                              '',
                                                      }}
                                                      date={
                                                          article.datePublished
                                                      }
                                                  />
                                              </div>
                                              <Button
                                                  color="primary"
                                                  variant="text"
                                                  className={classes.cardButton}
                                              >
                                                  {' '}
                                                  <Link
                                                      as={
                                                          getArticleURL({
                                                              ...article,
                                                          }).as
                                                      }
                                                      href={
                                                          getArticleURL({
                                                              ...article,
                                                          }).href
                                                      }
                                                  >
                                                      <a target="_blank">
                                                          View article
                                                      </a>
                                                  </Link>
                                              </Button>
                                              <Button
                                                  color="primary"
                                                  variant="text"
                                                  disabled={isDisabled(
                                                      resourceId,
                                                      article
                                                  )}
                                                  onClick={() =>
                                                      selectResource(resourceId)
                                                  }
                                                  className={classes.cardButton}
                                              >
                                                  {' '}
                                                  {indexOf(resourceId) > -1
                                                      ? 'Unselect'
                                                      : 'Select'}
                                              </Button>
                                          </div>
                                      )
                                  }

                                  case 'LINK': {
                                      var link = path<ExternalLink>([
                                          ...pathToResource,
                                      ])(result) as ExternalLink

                                      return (
                                          <div
                                              className={
                                                  indexOf(resourceId) > -1
                                                      ? classes.cardSelected
                                                      : classes.card
                                              }
                                          >
                                              <div className={classes.left}>
                                                  <Typography
                                                      variant="subtitle1"
                                                      className={
                                                          classes.cardTitle
                                                      }
                                                  >
                                                      {link.linkTitle.value}
                                                  </Typography>
                                                  <CardDetails
                                                      user={{
                                                          id: link.submitter.id,
                                                          username:
                                                              link.submitter
                                                                  .username ||
                                                              '',
                                                          name:
                                                              link.submitter
                                                                  .name || '',
                                                          avatar:
                                                              link.submitter
                                                                  .avatar || '',
                                                      }}
                                                      date={link.dateCreated}
                                                  />
                                              </div>
                                              <Button
                                                  color="primary"
                                                  variant="text"
                                                  className={classes.cardButton}
                                              >
                                                  <Link
                                                      as={
                                                          getLinkUrl({
                                                              ...link,
                                                          }).as
                                                      }
                                                      href={
                                                          getLinkUrl({
                                                              ...link,
                                                          }).href
                                                      }
                                                  >
                                                      <a target="_blank">
                                                          View link
                                                      </a>
                                                  </Link>
                                              </Button>
                                              <Button
                                                  color="primary"
                                                  variant="text"
                                                  disabled={isDisabled(
                                                      resourceId,
                                                      link
                                                  )}
                                                  onClick={() =>
                                                      selectResource(resourceId)
                                                  }
                                                  className={classes.cardButton}
                                              >
                                                  {' '}
                                                  {indexOf(resourceId) > -1
                                                      ? 'Unselect'
                                                      : 'Select'}
                                              </Button>
                                          </div>
                                      )
                                  }

                                  case 'COLLECTION': {
                                      var collection = path<Collection>([
                                          ...pathToResource,
                                      ])(result) as Collection
                                      var owner = collection.owner as UserOwner

                                      return (
                                          <div
                                              className={
                                                  indexOf(resourceId) > -1
                                                      ? classes.cardSelected
                                                      : classes.card
                                              }
                                          >
                                              <div className={classes.left}>
                                                  <Typography
                                                      variant="subtitle1"
                                                      className={
                                                          classes.cardTitle
                                                      }
                                                  >
                                                      {collection.name}
                                                  </Typography>
                                                  <CardDetails
                                                      user={{
                                                          id: owner.id,
                                                          username:
                                                              owner.username ||
                                                              '',
                                                          name:
                                                              owner.publicUserName ||
                                                              '',
                                                          avatar:
                                                              owner.avatar ||
                                                              '',
                                                      }}
                                                      date={
                                                          collection.dateCreated
                                                      }
                                                  />
                                              </div>
                                              <Button
                                                  color="primary"
                                                  variant="text"
                                                  className={classes.cardButton}
                                              >
                                                  <Link
                                                      as={
                                                          getCollectionURL({
                                                              ...collection,
                                                          }).as
                                                      }
                                                      href={
                                                          getCollectionURL({
                                                              ...collection,
                                                          }).href
                                                      }
                                                  >
                                                      <a target="_blank">
                                                          View Collection
                                                      </a>
                                                  </Link>
                                              </Button>
                                              <Button
                                                  color="primary"
                                                  variant="text"
                                                  disabled={isDisabled(
                                                      resourceId,
                                                      collection
                                                  )}
                                                  onClick={() =>
                                                      selectResource(resourceId)
                                                  }
                                                  className={classes.cardButton}
                                              >
                                                  {' '}
                                                  {indexOf(resourceId) > -1
                                                      ? 'Unselect'
                                                      : 'Select'}
                                              </Button>
                                          </div>
                                      )
                                  }

                                  case 'COMMUNITY': {
                                      var community = path<Community>([
                                          ...pathToResource,
                                      ])(result) as Community

                                      return (
                                          <div
                                              className={
                                                  indexOf(resourceId) > -1
                                                      ? classes.cardSelected
                                                      : classes.card
                                              }
                                          >
                                              <div className={classes.left}>
                                                  <Typography
                                                      variant="subtitle1"
                                                      className={
                                                          classes.cardTitle
                                                      }
                                                  >
                                                      {community.name}
                                                  </Typography>
                                              </div>
                                              <Button
                                                  color="primary"
                                                  variant="text"
                                                  className={classes.cardButton}
                                              >
                                                  <Link
                                                      as={
                                                          getCommunityURL({
                                                              ...community,
                                                          }).as
                                                      }
                                                      href={
                                                          getCommunityURL({
                                                              ...community,
                                                          }).href
                                                      }
                                                  >
                                                      <a target="_blank">
                                                          View Community
                                                      </a>
                                                  </Link>
                                              </Button>
                                              <Button
                                                  color="primary"
                                                  variant="text"
                                                  disabled={isDisabled(
                                                      resourceId,
                                                      community
                                                  )}
                                                  onClick={() =>
                                                      selectResource(resourceId)
                                                  }
                                                  className={classes.cardButton}
                                              >
                                                  {' '}
                                                  {indexOf(resourceId) > -1
                                                      ? 'Unselect'
                                                      : 'Select'}
                                              </Button>
                                          </div>
                                      )
                                  }

                                  case 'USER': {
                                      var user = path<User>([
                                          ...pathToResource,
                                      ])(result) as User

                                      return (
                                          <div
                                              className={
                                                  indexOf(resourceId) > -1
                                                      ? classes.cardSelected
                                                      : classes.card
                                              }
                                          >
                                              <div className={classes.left}>
                                                  <Typography
                                                      variant="subtitle1"
                                                      className={
                                                          classes.cardTitle
                                                      }
                                                  >
                                                      {user.publicUserName ||
                                                          user.username}
                                                  </Typography>
                                              </div>
                                              <Button
                                                  color="primary"
                                                  variant="text"
                                                  className={classes.cardButton}
                                              >
                                                  <Link
                                                      as={
                                                          getProfileURL({
                                                              ...user,
                                                          }).as
                                                      }
                                                      href={
                                                          getProfileURL({
                                                              ...user,
                                                          }).href
                                                      }
                                                  >
                                                      <a target="_blank">
                                                          View User
                                                      </a>
                                                  </Link>
                                              </Button>
                                              <Button
                                                  color="primary"
                                                  variant="text"
                                                  disabled={isDisabled(
                                                      resourceId,
                                                      user
                                                  )}
                                                  onClick={() =>
                                                      selectResource(resourceId)
                                                  }
                                                  className={classes.cardButton}
                                              >
                                                  {' '}
                                                  {indexOf(resourceId) > -1
                                                      ? 'Unselect'
                                                      : 'Select'}
                                              </Button>
                                          </div>
                                      )
                                  }
                                  default: {
                                      return null
                                  }
                              }
                          }
                      )
                    : null}
            </DialogContentText>
        </DialogContent>
    )
}

export interface IProps {
    open: boolean
    handleClose: () => void
    handleConfirm: (selected: ResourceIdentifierInput[]) => void
    showSearch?: boolean
    searchQuery?: string
    pathToResourceId?: string[]
    pathToResource?: string[]
    setSearchQuery?: (query: string) => void
    title: string
    preSelected: ResourceIdentifierInput[]
    disabled?: ResourceIdentifierInput[]
    disable?: (resource: any, resourceId: ResourceIdentifierInput) => boolean
    Query: any
    queryKey: PaginationDataQuery
    maxSelection?: number
}

const ChooseResourceModalContent = withPagination(
    ChooseResourceModalContentView,
    (props: IProps) => {
        return props.queryKey
    },
    'Query'
)

export const ChooseResourceModal = ({
    open,
    handleClose,
    handleConfirm,
    title,
    preSelected,
    disabled = [],
    disable,
    Query,
    queryKey,
    pathToResourceId = [],
    pathToResource = [],
    showSearch = false,
    searchQuery,
    setSearchQuery,
    maxSelection = 100,
}: IProps) => {
    const classes = useStyles()
    const [selected, setSelected] = React.useState(preSelected)
    const [query, setQuery] = React.useState(searchQuery)

    // Update if the section resource list is updated from the form (via remove-article button)
    React.useEffect(() => {
        setSelected(preSelected)
    }, [preSelected])

    const indexOf = (resourceId: ResourceIdentifierInput): number => {
        var index = -1
        for (var i = 0; i < selected.length; i++) {
            if (
                selected[i].type === resourceId.type &&
                selected[i].id === resourceId.id
            ) {
                index = i
            }
        }
        return index
    }

    const selectResource = (resourceId: ResourceIdentifierInput) => {
        var index = indexOf(resourceId)

        // resource found: unselect
        if (index > -1) {
            setSelected(selected.filter((_, i) => i !== index))

            // resource not found: select
        } else {
            setSelected([...selected, resourceId])
        }

        // If the user has selected the maximum resources allowed, we close the popup
        if (selected.length + 1 >= maxSelection) {
            handleConfirm([...selected, resourceId])
        }
    }

    const isDisabled = (
        resourceId: ResourceIdentifierInput,
        resource: any
    ): boolean => {
        for (var i = 0; i < disabled.length; i++) {
            if (
                disabled[i].type === resourceId.type &&
                disabled[i].id === resourceId.id
            ) {
                return true
            }
        }
        if (disable && resource) {
            return disable(resource, resourceId)
        }

        return false
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            scroll="paper"
            maxWidth="md"
            fullWidth
        >
            <DialogTitle disableTypography className={classes.container}>
                {!Query[queryKey] ? (
                    <Typography
                        variant="h6"
                        className={classes.title}
                    >{`${title}`}</Typography>
                ) : (
                    <Typography
                        variant="h6"
                        className={classes.title}
                    >{`${title} (${Query[queryKey].totalElements})`}</Typography>
                )}
                {showSearch && setSearchQuery && (
                    <div className={classes.searchClass}>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                input: classes.inputInput,
                                root: classes.inputRoot,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                            onChange={e => setQuery(e.target.value)}
                            value={query}
                        />
                        <div className={classes.searchIconClass}>
                            <SearchIcon
                                onClick={() => setSearchQuery(query || '')}
                            />
                        </div>
                    </div>
                )}

                <IconButton aria-label="close" onClick={handleClose}>
                    <CloseIcon onClick={handleClose} />
                </IconButton>
            </DialogTitle>

            <ChooseResourceModalContent
                indexOf={indexOf}
                selectResource={selectResource}
                isDisabled={isDisabled}
                Query={Query}
                queryKey={queryKey}
                pathToResource={pathToResource}
                pathToResourceId={pathToResourceId}
                loading={Query.loading}
            />

            <DialogActions className={classes.container}>
                <Typography
                    variant="subtitle1"
                    className={classes.title}
                >{`${selected.length} selected`}</Typography>
                <Button color="primary" variant="text" onClick={handleClose}>
                    {' '}
                    Close
                </Button>
                <Button
                    autoFocus
                    color="primary"
                    variant="contained"
                    style={{ color: 'white' }}
                    disabled={selected.length === 0}
                    onClick={() => handleConfirm(selected)}
                >
                    {' '}
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ChooseResourceModal
