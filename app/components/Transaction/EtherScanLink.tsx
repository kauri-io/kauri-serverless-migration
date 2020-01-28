import ButtonComp from '../Button'
import { Link } from '@material-ui/core'

interface IProps {
    txHash: string
    linkText: string
}

const EtherScanLink = ({ txHash, linkText }: IProps) => {
    return (
        <Link
            href={`https://rinkeby.etherscan.io/tx/${txHash}`}
            target="_blank"
        >
            <a>
                <ButtonComp color="primary">{linkText}</ButtonComp>
            </a>
        </Link>
    )
}

export default EtherScanLink
