
import styles from '../styles/list.module.css'
import { ListItem } from '../data/comics';
import Image from 'next/future/image'

interface ListProps {
    items: ListItem[];
}

export default function List({ items }: ListProps) {
    return (
        <div className={styles.list}>
            {items.map(el => <div key={el.name} className={styles["list-item"]}>
                <div className={styles["list-preview"]}>
                    {el.paths.slice(0, 2).map(path => <div key={path}>
                        <Image
                            src={path}
                            width="0"
                            height="0"
                            sizes="100vw"
                            alt=""
                            style={{ width: '30rem', height: '100%' }}
                        />
                    </div>)}
                </div>
                <span>{`${el.name} (${el.year})`}</span>
            </div>)}
        </div>
    )
}