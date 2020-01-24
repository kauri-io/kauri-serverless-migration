import Avatar from '../Avatar'
import { UserOwner } from '../../queries/Fragments/__generated__/UserOwner'
import { path } from 'ramda'

interface IProps {
    list: any[]
    total?: number
    limit: number
    pathToResource?: string
}

const AvatarListComp = ({
    list,
    total,
    limit = 5,
    pathToResource = 'resource',
}: IProps) => {
    return (
        <>
            {list.slice(0, limit).map(u => {
                var user = path<UserOwner>([pathToResource])(u) as UserOwner

                return (
                    <Avatar
                        id={user.id}
                        name={user.publicUserName}
                        username={user.username}
                        avatar={user.avatar}
                        withName={false}
                        tooltip={user.username || ''}
                    />
                )
            })}
            {total && total > limit && <div>+ {total - limit}</div>}
        </>
    )
}

export default AvatarListComp
