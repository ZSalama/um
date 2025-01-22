import configPromise from '@payload-config'
import { getPayload } from 'payload'
import type { Post } from '@/payload-types'
import BlogPost from '@/components/BlogPost/BlogPost'
// import type { Metadata } from 'next'
import { cache } from 'react'

export async function generateStaticParams() {
    const payload = await getPayload({ config: configPromise })
    const posts = await payload.find({
        collection: 'posts',
        select: {
            slug: true,
        },
    })

    const params = posts.docs.map(({ slug }) => {
        return { slug }
    })

    return params
}

type Args = {
    params: Promise<{
        slug?: string
    }>
}

export default async function Post({ params: paramsPromise }: Args) {
    const { slug = '' } = await paramsPromise
    // const url = '/posts/' + slug_title
    const post = await queryPostBySlug({ slug })

    if (!post) return <div>Post not found</div>

    return <BlogPost post={post} />
}

const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
    const payload = await getPayload({ config: configPromise })

    const result = await payload.find({
        collection: 'posts',
        limit: 10,
        pagination: false,
        where: {
            slug: {
                equals: slug,
            },
        },
    })

    // console.log(result.docs)

    return result.docs?.[0] || null
})

// export async function generateMetadata({ params: paramsPromise}: Args): Promise<Metadata> {
//     const { slug_title = '' } = await paramsPromise
//     const post = await queryPostBySlug({ slug_title })

//     return generateMeta({ doc: post })
// }
