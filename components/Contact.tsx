import React, { useState } from 'react';

import Image from 'next/future/image'
import styles from '../styles/home.module.css'

export default function Contact() {
    const [ show, setShow ] = useState(false);
    return (
        <div className={styles.contact}
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}>
            {show ? <div>
                <a className="header-icon" href="https://mellific.tumblr.com" target="_blank" rel="noopener noreferrer">
                    <Image src="/logo/tumblr.svg" alt="Tumblr logo" height={24} width={24} />
                </a>
                <a className="header-icon" href="https://twitter.com/mellifics" target="_blank" rel="noopener noreferrer">
                    <Image src="/logo/twitter.svg" alt="Twitter logo" height={24} width={24} />
                </a>
            </div>
          : <a href="/">Contact</a>}
        </div>
    )
}