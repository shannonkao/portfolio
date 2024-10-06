import Link from 'next/link';
import styles from '../styles/home.module.css';

export default function Header() {
    return (
        <>
            <div className={styles.nav}>
                <Link href="/" title="Home">🏠</Link>
                <Link href="/illustration" title="Illustrations">🖌️</Link>
                <Link href="/comics" title="Comics">📚</Link>
                <Link href="/contact" title="Contact">☎️</Link>
            </div>
        </>
    )
}