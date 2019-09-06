import { Grid } from '@material-ui/core'
import Image from '../../components/Image'

const Empty: React.SFC = ({ children }) => (
    <Grid>
        <Image width={100} image="/static/images/empty.png" />
        {children}
    </Grid>
)

export default Empty
