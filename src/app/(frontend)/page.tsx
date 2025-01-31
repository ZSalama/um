import styles from './page.module.css'
import heroImage from '@/media/hero_splash.jpg'
import Image from 'next/image'
import HeroFeatures from '@/components/HeroFeatures/HeroFeatures'
import HeroServices from '@/components/HeroServices/HeroServices'

export default function Home() {
    return (
        <div>
            <section className={styles.hero}>
                <section className={styles.CTA_container}>
                    <h1 className={styles.CTA}>
                        Design your website with UnderMouse!
                    </h1>
                    <div className={styles.CTA_buttons}>
                        <button className={styles.CTA_button}>
                            Get Started
                        </button>
                        <button className={styles.CTA_button}>
                            Learn More
                        </button>
                    </div>
                </section>
                <div className={styles.heroImageContainer}>
                    <Image
                        src={heroImage}
                        alt='Hero Image'
                        fill={true}
                        style={{ objectFit: 'cover' }}
                        quality={100}
                        className={styles.heroImage}
                    />
                </div>
            </section>
            <HeroFeatures />
            <HeroServices />
        </div>
    )
}
