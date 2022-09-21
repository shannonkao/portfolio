import Image from 'next/future/image'
import styles from '../styles/grid.module.css'

interface TileProps {
    paths: string[];
    priority?: boolean
}

export default function Tile({ paths, priority }: TileProps) {
    return (
        <div className={styles.tile}>
            {paths.map(path => {
                return <div key={path} className={styles.image}>
                    <Image
                        src={path}
                        width="0"
                        height="0"
                        sizes="100vw"
                        alt=""
                        style={{ width: '100%', height: 'auto' }}
                        priority={priority}
                    />
                </div>
            })}
        </div>
    )
}