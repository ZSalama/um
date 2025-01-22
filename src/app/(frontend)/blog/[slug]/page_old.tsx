// import { Post } from '@/payload-types'
// import BlogPost from '@/components/BlogPost/BlogPost'

// interface BlogPostPageProps {
//     params: Promise<{ slug: string }>
// }

// const BlogPostPage = async (props: BlogPostPageProps) => {
//     const params = await props.params
//     const { slug } = params
//     const response = await fetch(
//         `${process.env.NEXT_PUBLIC_SERVER_URL}/api/posts/`
//     )
//     if (!response.ok) {
//         // Handle error
//         console.error('Failed to fetch post:', response.statusText)
//         return <div>Failed to load post</div>
//     }
//     const data = await response.json()
//     const post = data.docs
//     const blogPost = post.find((post: Post) => post.slug_title === slug)
//     if (!blogPost) {
//         return <div>Post not found</div>
//     }
//     return <BlogPost post={blogPost} />
// }

// export const generateStaticParams = async (): Promise<{ slug: string }[]> => {
//     const response = await fetch(
//         `${process.env.NEXT_PUBLIC_SERVER_URL}/api/posts/`
//     )
//     const data = await response.json()
//     const posts: Post[] = data.docs

//     return posts
//         .filter((post) => post.slug_title)
//         .map((post) => ({
//             slug: post.slug_title as string,
//         }))
// }

// export default BlogPostPage
