import styles from '../styles/home.module.css'
import Contact from './Contact';

export default function Header() {
    return (
        <>
            <div className={styles.title}>
            <a href="/">Shannon Kao</a>
            </div>
            <div className={styles.header}>
                <div>
                <a href="/comics">Comics</a>
                </div>
                <div>
                <a href="https://www.inprnt.com/gallery/shannonkao/"
                    target="_blank"
                    rel="noopener noreferrer">Store</a>
                </div>
                <Contact />
            </div>
        </>
    )
}