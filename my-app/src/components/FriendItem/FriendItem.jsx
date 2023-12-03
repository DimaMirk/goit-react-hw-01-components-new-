import s from './FriendItem.module.css';

const FriendItem = ({ friend }) => {
    console.log(s)
    const {isOnline,name,avatar} = friend
    return (

        <li className={s.li}>
            <span className={`${s.status} ${s[isOnline]}`}></span>
            <img className={s.img} src={avatar} alt="User avatar" width="48" />
            <p className="name">{ name }</p>
        </li>
    )
}

export default FriendItem