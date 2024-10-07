import TooltipLink from './TooltipLink';
import styles from '../styles/home.module.css';

export default function Header() {
    return (
        <>
            <div className={styles.nav}>
                <TooltipLink href="/" text="🏠" title="Home" />
                <TooltipLink href="/illustration" text="🖌️" title="Illustrations" />
                <TooltipLink href="/comics" text="📚" title="Comics" />
                <TooltipLink href="/contact" text="☎️" title="Contact" />
            </div>
        </>
    )
}