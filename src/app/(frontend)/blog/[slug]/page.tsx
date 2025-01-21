import { Post } from '@/payload-types'
import BlogPost from '@/components/BlogPost/BlogPost'

interface BlogPostPageProps {
    params: { slug: string }
}

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
    const { slug } = await params
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/posts/`
    )
    if (!response.ok) {
        // Handle error
        console.error('Failed to fetch post:', response.statusText)
        return <div>Failed to load post</div>
    }
    const data = await response.json()
    const post = data.docs
    console.log(post)
    const blogPost = post.find((post: Post) => post.slug_title === slug)
    console.log(blogPost)
    return <BlogPost post={blogPost} />
}

export const generateStaticParams = async () => {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/posts/`
    )
    const data = await response.json()
    const posts: Post[] = data.docs
    return posts.map((post) => ({
        slug: post.slug_title,
    }))
}

export default BlogPostPage
