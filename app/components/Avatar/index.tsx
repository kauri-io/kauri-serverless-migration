import blockies from 'ethereum-blockies'
interface IProps {
    username: string | null;
    id: string;
    name?: string ;
    withName: boolean;
    avatar?: string;
    className?: string;
}

const AvatarComp = ({ className, username, name, id, withName, avatar}: IProps) => <div className={className}>
    {!avatar && process.browser && blockies.create({
        seed: id
    })}
    {withName && <div>{name || username || id}</div>}
</div>

export default AvatarComp