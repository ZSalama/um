import React from 'react'
import styles from './Footer.module.css'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.links}>
                    <Link href='/about'>
                        <span className={styles.link}>About Us</span>
                    </Link>
                    <Link href='/portfolio'>
                        <span className={styles.link}>Contact</span>
                    </Link>
                    <Link href='/pricing'>
                        <span className={styles.link}>Pricing</span>
                    </Link>
                </div>
                {/* <div className={styles.social}>
                    <Link
                        href='https://facebook.com'
                        target='_blank'
                        rel='noopener noreferrer'
                        className={styles.socialLink}
                    >
                        Facebook
                    </Link>
                    <Link
                        href='https://twitter.com'
                        target='_blank'
                        rel='noopener noreferrer'
                        className={styles.socialLink}
                    >
                        Twitter
                    </Link>
                    <Link
                        href='https://instagram.com'
                        target='_blank'
                        rel='noopener noreferrer'
                        className={styles.socialLink}
                    >
                        Instagram
                    </Link>
                </div> */}
                <div className={styles.copyright}>
                    &copy; {new Date().getFullYear()} UnderMouse. All rights
                    reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer
