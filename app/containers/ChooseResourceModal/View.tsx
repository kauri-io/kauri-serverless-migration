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
import { Close as CloseIcon, Search as SearchIcon } from '@material-ui/icons'
import { ResourceIdentifierInput } from '../../__generated__/globalTypes'
import CardDetails from '../../components/Card/CardComponents/CardDetails'
import Loading from '../../components/Loading'
import {
    searchAutocompleteArticles_searchAutocomplete,
    searchAutocompleteArticles_searchAutocomplete_content,
    searchAutocompleteArticles_searchAutocomplete_content_resource_ArticleDTO,
    searchAutocompleteArticles_searchAutocomplete_content_resource_ExternalLinkDTO,
} from '../../queries/__generated__/searchAutocompleteArticles'
import { getArticleURL, getLinkUrl } from '../../lib/getURLs'
import withPagination from '../../lib/with-pagination'
import { IRouteChangeAction } from '../../lib/Epics/RouteChangeEpic'

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
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: '#F7F7F7',
        margin: theme.spacing(1),
        width: 'auto',
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: 120,
        '&:focus': {
            width: 200,
        },
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
        width: '120px',
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
        routeChangeAction,
        indexOf,
        selectResource,
        GlobalSearchQuery,
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
                {!GlobalSearchQuery.searchAutocomplete ||
                GlobalSearchQuery.loading ? (
                    <Loading />
                ) : null}

                {/**** EMPTY STATE ****/}
                {GlobalSearchQuery.searchAutocomplete &&
                GlobalSearchQuery.searchAutocomplete.totalElements === 0 &&
                !GlobalSearchQuery.loading ? (
                    <div className={classes.empty}>
                        <Typography variant="h6" className={classes.emptyText}>
                            No Content Found
                        </Typography>
                    </div>
                ) : null}

                {/**** CONTENT ****/}
                {GlobalSearchQuery.searchAutocomplete &&
                GlobalSearchQuery.searchAutocomplete.totalElements > 0 &&
                !GlobalSearchQuery.loading
                    ? GlobalSearchQuery.searchAutocomplete.content.map(
                          (
                              result: searchAutocompleteArticles_searchAutocomplete_content | null,
                              _index: number
                          ) => {
                              if (
                                  result === null ||
                                  result.resourceIdentifier === null
                              )
                                  return null

                              const resourceId: ResourceIdentifierInput = {
                                  id: result.resourceIdentifier.id,
                                  type: result.resourceIdentifier.type
                              }

                              switch (resourceId.type) {
                                  case 'ARTICLE': {
                                      var article = result.resource as searchAutocompleteArticles_searchAutocomplete_content_resource_ArticleDTO

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
                                                          id: article.author.id,
                                                          username:
                                                              article.author
                                                                  .username ||
                                                              '',
                                                          name:
                                                              article.author
                                                                  .name || '',
                                                          avatar:
                                                              article.author
                                                                  .avatar || '',
                                                      }}
                                                      date={
                                                          article.datePublished
                                                      }
                                                  />
                                              </div>
                                              <Button
                                                  color="primary"
                                                  variant="text"
                                                  onClick={() =>
                                                      routeChangeAction(
                                                          getArticleURL({
                                                              ...article,
                                                          }).as
                                                      )
                                                  }
                                                  className={classes.cardButton}
                                              >
                                                  {' '}
                                                  View article
                                              </Button>
                                              <Button
                                                  color="primary"
                                                  variant="text"
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
                                      var link = result.resource as searchAutocompleteArticles_searchAutocomplete_content_resource_ExternalLinkDTO

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
                                                  onClick={() =>
                                                      routeChangeAction(
                                                          getLinkUrl({
                                                              ...link,
                                                          }).as
                                                      )
                                                  }
                                                  className={classes.cardButton}
                                              >
                                                  {' '}
                                                  View Link
                                              </Button>
                                              <Button
                                                  color="primary"
                                                  variant="text"
                                                  onClick={() =>
                                                      selectResource(resourceId)
                                                  }
                                                  className={classes.cardButton}
                                              >
                                                  {' '}
                                                  Select
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

const ChooseResourceModalContent = withPagination(
    ChooseResourceModalContentView,
    'searchAutocomplete',
    'GlobalSearchQuery'
)

interface IProps {
    routeChangeAction: (payload: string) => IRouteChangeAction
    open: boolean
    handleClose: () => void
    handleConfirm: (selected: ResourceIdentifierInput[]) => void
    query: string
    setQuery: (query: string) => void
    title: string
    preSelected: ResourceIdentifierInput[]
    GlobalSearchQuery: {
        loading: boolean
        searchAutocomplete: searchAutocompleteArticles_searchAutocomplete
    }
}

export const ChooseResourceModal = ({
    routeChangeAction,
    open,
    handleClose,
    handleConfirm,
    title,
    preSelected,
    GlobalSearchQuery,
    query,
    setQuery,
}: IProps) => {
    const classes = useStyles()
    const [selected, setSelected] = React.useState(preSelected)

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
        if (index > -1) {
            // resource found: unselect
            setSelected(selected.filter((_, i) => i !== index))
        } else {
            // resource not found: select
            setSelected([...selected, resourceId])
        }
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
                {!GlobalSearchQuery.searchAutocomplete ? (
                    <Typography
                        variant="h6"
                        className={classes.title}
                    >{`${title}`}</Typography>
                ) : (
                    <Typography
                        variant="h6"
                        className={classes.title}
                    >{`${title} (${GlobalSearchQuery.searchAutocomplete.totalElements})`}</Typography>
                )}
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                        onChange={e => setQuery(e.target.value)}
                        value={query}
                    />
                </div>
                <IconButton aria-label="close" onClick={handleClose}>
                    <CloseIcon onClick={handleClose} />
                </IconButton>
            </DialogTitle>

            <ChooseResourceModalContent
                indexOf={indexOf}
                selectResource={selectResource}
                GlobalSearchQuery={GlobalSearchQuery}
                routeChangeAction={routeChangeAction}
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
