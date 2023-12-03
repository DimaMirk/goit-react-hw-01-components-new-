import s from './FriendList.module.css'
import FriendItem from "../FriendItem/FriendItem"
const FriendList = ({ friends }) => {
    return (
        <ul className={s.container}>
            {friends.map((friend) => <FriendItem friend={friend} key={friend.id } />)}
        </ul>
    )

}

export default FriendList