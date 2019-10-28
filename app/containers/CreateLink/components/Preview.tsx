import Image from '../../../components/Image'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const Preview = ({
    classes,
    title,
    description,
    attributes: { background_image },
}) => (
    <Grid className={classes.preview}>
        <Grid>
            <Typography variant="h5">{title}</Typography>
            <Typography variant="body2">{description}</Typography>
        </Grid>
        <Grid>
            {background_image ? (
                <Image
                    width={152}
                    height={152}
                    image={background_image}
                    borderRadius="4px"
                />
            ) : (
                <img src="/static/images/DefaultArticle.svg" />
            )}
        </Grid>
    </Grid>
)

export default Preview
