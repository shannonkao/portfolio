
import styles from '../styles/grid.module.css'
import Tile from './Tile';
import { GridItem } from '../data/illustrations';

interface GridProps {
    columns: GridItem[][];
}

export default function Grid({ columns }: GridProps) {
    return (
        <div className={styles.grid}>
            {columns.map((col, i) => {
                return <div key={i} className={styles.column}>
                    {col.map((tile, j) => {
                        return <Tile key={j} paths={tile.paths} />
                    })
                    }
                </div>
            })}
        </div>
    )
}