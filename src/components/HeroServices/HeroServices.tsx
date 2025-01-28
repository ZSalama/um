import React from 'react'
import Image from 'next/image'
import styles from './HeroServices.module.css'
import heroImage from '@/media/services_background.jpg'

const HeroFeatures = () => {
    return (
        <div className={styles.hero_features_container}>
            <h1 className={styles.header}> website Services </h1>
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
                        Our team of designers will work with you to create a
                        custom website that reflects your brand and communicates
                        your message effectively.
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
