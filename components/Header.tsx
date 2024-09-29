import Link from 'next/link';
import styles from '../styles/home.module.css';
import Contact from './Contact';

export default function Header() {
    return (
        <>
            <div className={styles.nav}>
                <Link href="/">🏠</Link>
                <Link href="/projects">📚</Link>
                <Link href="/illustration">🖌️</Link>
                <Link href="/about">💡</Link>
            </div>
        </>
    )
}