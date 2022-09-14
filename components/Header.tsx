import Link from 'next/link';
import styles from '../styles/home.module.css';
import Contact from './Contact';

export default function Header() {
    return (
        <>
            <div className={styles.title}>
            <Link href="/">Shannon Kao</Link>
            </div>
            <div className={styles.header}>
                <div>
                <Link href="/comics">Comics</Link>
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