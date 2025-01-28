'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import styles from './HeroFeatures.module.css'
import heroImage from '@/media/features_background.jpg'

const HeroFeatures = () => {
    useEffect(() => {
        const handleScroll = () => {
            const features_text = document.querySelector(
                `.${styles.features_grid}`
            )
            if (features_text) {
                const rect = features_text.getBoundingClientRect()
                if (rect.top <= window.innerHeight) {
                    features_text.classList.add(styles.visible)
                }
            }
            const features_header = document.querySelector(`.${styles.header}`)
            if (features_header) {
                const rect = features_header.getBoundingClientRect()
                if (rect.top <= window.innerHeight) {
                    features_header.classList.add(styles.visible)
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className={styles.hero_features_container}>
            <h1 className={styles.header}> website features </h1>
            <div className={styles.features_image_container}>
                <Image
                    src={heroImage}
                    alt='Features Image'
                    layout='fill'
                    objectFit='cover'
                    quality={100}
                    className={styles.feautures_image}
                />
            </div>
            <div className={styles.features_grid}>
                <div>
                    <p className={styles.features_text}>
                        Our websites have custom designs, mobile responsive
                        layouts, fast load times, and CMS functionality
                    </p>
                </div>
                <div>
                    <p className={styles.features_text}>
                        We offer SEO optimization, social media integration,
                        reactive components and more
                    </p>
                </div>
                <div>
                    <p className={styles.features_text}>
                        Write a blog, show off products, or showcase your
                        portfolio
                    </p>
                </div>
                <div>
                    <p className={styles.features_text}>
                        Build your brand with increased online visibility
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HeroFeatures
