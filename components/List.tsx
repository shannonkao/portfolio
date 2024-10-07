
import styles from '../styles/list.module.css'
import { ListItem } from '../data/comics';
import Image from 'next/future/image'

interface ListProps {
    items: ListItem[];
}

export default function List({ items }: ListProps) {
    return (
        <div className={styles.list}>
            {items.map(el => {
                const linkOut = el.paths.length > 2;
                const link = `/comics/${el.id}`;
                return <div key={el.name} className={styles["list-item"]}>
                    <div className={styles["list-preview"]}>
                        {el.paths.slice(0, 2).map((path, i) => <div key={path}>
                            {linkOut ? <a href={linkOut ? link : ""}>
                                    <Image src={path} width="0" height="0" sizes="100vw" alt=""
                                        style={{ width: '30rem', height: '100%' }} priority={el.priority} />
                                </a>
                                : <Image src={path} width="0" height="0" sizes="100vw" alt=""
                                    style={{ width: '30rem', height: '100%' }} priority={el.priority} />
                            }
                            {linkOut && i == 1 && <a className={styles["link-out"]} href={link} />}
                        </div>)}
                    </div>
                    <span>{`${el.name} (${el.year})`}</span>
                    <span>
                        {linkOut && <a href={link}>Read →</a>}
                    </span>
                </div>
            })}
        </div>
    )
}