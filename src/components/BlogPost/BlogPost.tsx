import React from 'react'
import Image from 'next/image'
import { Post } from '@/payload-types'

const BlogPost = ({ post }: { post: Post }) => {
    const hero_image = post.heroImage
    const hero_url =
        typeof hero_image !== 'number' && hero_image?.url ? hero_image.url : ''
    const hero_alt =
        typeof hero_image !== 'number' && hero_image?.alt ? hero_image.alt : ''
    return (
        <div>
            <h1>{post.title}</h1>
            {post.heroImage && (
                <Image
                    src={hero_url}
                    alt={hero_alt}
                    width={500} // Specify the width
                    height={300} // Specify the height
                />
            )}
            <p>Slug: {post.title}</p>
        </div>
    )
}

export default BlogPost
