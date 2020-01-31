import { ICollection } from './CollectionsContent'
import { ISection } from './SectionsContent'
import { Typography, Select, MenuItem, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
    select: {
        width: '100%',
        marginBottom: theme.spacing(1),
    },
}))

interface IParentState {
    chosenCollection: ICollection | null
    chosenSection: ISection | null
}

interface IProps {
    setCollection: (payload: { chosenCollection: ICollection }) => void
    setSection: (payload: { chosenSection: ISection | null }) => void
    parentState: IParentState
    collectionsThatDoNotHaveTheChosenArticleId: ICollection[]
    articleAlreadyInAllCollections: boolean
    changeToPrefilledArticleCreateCollectionRoute: () => void
}

const Content: React.FunctionComponent<IProps> = ({
    setCollection,
    setSection,
    parentState,
    collectionsThatDoNotHaveTheChosenArticleId,
    articleAlreadyInAllCollections,
}) => {
    const classes = useStyles()
    
    if (articleAlreadyInAllCollections) {
        return (
            <Typography variant="body1">{'Article is already in all your collections!'}</Typography>
        )
    }

    const handleCollectionSelection = event => {
        setCollection({ chosenCollection: event.target.value })
    }

    const handleSectionSelection = event => {
        setSection({ chosenSection: event.target.value })
    }

    return (
        <>
            {Array.isArray(collectionsThatDoNotHaveTheChosenArticleId) &&
                collectionsThatDoNotHaveTheChosenArticleId.length > 0 && (
                    <Select
                        value={parentState.chosenCollection}
                        onChange={handleCollectionSelection}
                        className={classes.select}
                        >
                        {collectionsThatDoNotHaveTheChosenArticleId.map((option, key) => (
                            <MenuItem 
                                key={key} 
                                // @ts-ignore [2]
                                value={option}>
                                {option.name}
                            </MenuItem>
                        ))}  
                    </Select>
            )}
            {parentState.chosenCollection && parentState.chosenCollection.sections.length > 0 && (
                
                <Select
                    value={parentState.chosenSection}
                    onChange={handleSectionSelection}
                    className={classes.select}
                >
                    {parentState.chosenCollection.sections.map((option, key) => (
                        <MenuItem 
                            key={key} 
                            // @ts-ignore [2]
                            value={option}>
                            {option.name}
                        </MenuItem>
                    ))} 
                </Select>
            )}
        </>
    )
}

export default Content
