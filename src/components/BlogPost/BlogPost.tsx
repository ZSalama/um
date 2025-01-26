import React from 'react'
import Image from 'next/image'
import { Post } from '@/payload-types'
import styles from './BlogPost.module.css'
import { formatDate } from '../../utilities/formateDate'
import Link from 'next/link'

const BlogPost = ({ post }: { post: Post }) => {
    const hero_image = post.heroImage
    const hero_url =
        typeof hero_image !== 'number' && hero_image?.url ? hero_image.url : ''
    const hero_alt =
        typeof hero_image !== 'number' && hero_image?.alt ? hero_image.alt : ''

    const formattedDate = formatDate(post.createdAt)
    return (
        <Link href={`/blog/${post.slug}`} className={styles.cardLink}>
            <div className={styles.card}>
                <h1 className={styles.cardTitle}>{post.title}</h1>
                {post.heroImage && (
                    <Image
                        src={hero_url}
                        alt={hero_alt}
                        width={500} // Specify the width
                        height={300} // Specify the height
                        className={styles.cardImage}
                    />
                )}
                <h3 className={styles.cardDate}>{formattedDate}</h3>
            </div>
        </Link>
    )
}

export default BlogPost
