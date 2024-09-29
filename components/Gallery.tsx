import Image from 'next/future/image'
import styles from '../styles/gallery.module.css'

interface GalleryProps {
    id: string;
    paths: string[];
    prefix?: string;
    name: string;
    year: string;
    medium?: string;
    description?: string;
    priority?: boolean
}

const getId = (name: string) => name.replace(/[\s]/gi, "")

export default function Gallery({ id, paths, prefix, name, year, medium, description, priority }: GalleryProps) {
    return (
        <div>
            <div className={styles.gallery}>
                {paths.map((path, i) => {
                    return <div id={`${id}${i}`} key={path} className={styles["gallery-card"]}>
                        <div className={styles["gallery-image-wrapper"]}>
                            <a className={`${styles["link-arrow"]} ${styles["link-prev"]} ${i === 0 ? styles["link-inactive"] : ''}`} href={`#${id}${i-1}`}></a>
                            <Image
                                src={(prefix || "") + path}
                                width="0"
                                height="0"
                                alt=""
                                style={{ width: '40rem', height: 'auto' }}
                                priority={priority}
                            />
                            <a className={`${styles["link-arrow"]} ${styles["link-next"]} ${i === paths.length - 1 ? styles["link-inactive"] : ''}`}  href={`#${id}${i+1}`}></a>
                        </div>
                    </div>
                })}
            </div>
            <div className={styles.meta}>
                <div className={styles.name}>{name}</div>
                <div>{year}</div>
                <div>{medium}</div>
                <div className={styles.description}>{description}</div>
            </div>
        </div>
    )
}