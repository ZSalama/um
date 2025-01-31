'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import styles from './HeroServices.module.css'
import heroImage from '@/media/plain_background.png'

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
            <h1 className={styles.header}> Website Services </h1>
            <div className={styles.features_image_container}>
                <Image
                    src={heroImage}
                    alt='Features Image'
                    fill={true}
                    style={{ objectFit: 'cover' }}
                    quality={100}
                    className={styles.feautures_image}
                />
            </div>
            <div className={styles.features_grid}>
                <div>
                    <p className={styles.features_text}>
                        Work side by side to design and create your custom
                        website that reflects your brand and communicates your
                        message effectively.
                    </p>
                </div>
                <div>
                    <p className={styles.features_text}>
                        Our team of SEO experts will help you improve your
                        website&apos;s visibility in search engine results and
                        attract more visitors.
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
