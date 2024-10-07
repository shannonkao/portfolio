import Link from 'next/link';
import styles from '../styles/tooltip.module.css'

interface TooltipLinkProps {
    text: string;
    href: string;
    title: string;
}

export default function TooltipLink({ text, href, title }: TooltipLinkProps) {
    return (
        <div className={styles['tooltip-link']}>
            <Link href={href} title={title}>{text}</Link>
            <span className={styles.tooltip}>{title}</span>
        </div>
    )
}