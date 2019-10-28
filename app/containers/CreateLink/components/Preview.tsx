import Image from '../../../components/Image'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const Preview = ({
    classes,
    title,
    description,
    image,
}) => (
    <Grid className={classes.preview}>
        <Grid>
            <Typography variant="h5">{title}</Typography>
            <Typography variant="body2">{description}</Typography>
        </Grid>
        <Grid>
            {image ? (
                <Image
                    width={152}
                    height={152}
                    image={image}
                    borderRadius="4px"
                />
            ) : (
                <img src="/static/images/DefaultArticle.svg" />
            )}
        </Grid>
    </Grid>
)

export default Preview
