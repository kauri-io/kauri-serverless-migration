import ButtonComp from '../Button'
import { Link } from '@material-ui/core'
import config from '../../config'

interface IProps {
    txHash: string
    linkText: string
}

const EtherScanLink = ({ txHash, linkText }: IProps) => {
    const prefix =
        config.ethereumNetwork === 'Main' ? '' : config.ethereumNetwork + '.'
    return (
        <Link
            href={`https://${prefix}etherscan.io/tx/${txHash}`}
            target="_blank"
        >
            <a>
                <ButtonComp color="primary">{linkText}</ButtonComp>
            </a>
        </Link>
    )
}

export default EtherScanLink
