import s from './Statistics.module.css';
const Statistic = ({ title, data }) => {
    return (   
        <section  className={s.container}>
            {title && <h2 className={s.title}>{ title}</h2>}
            <ul  className={s.list}>
                {data.map(item => (
                    <li className={s.li} key={item.id}>
                        <span className={s.label}>{ item.label}</span>
                        <span class="percentage">{ item.percentage}</span>
                    </li>
                ))}
            </ul>
    </section>
    )
}

export default Statistic