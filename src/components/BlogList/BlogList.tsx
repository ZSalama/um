import BlogPost from '@/components/BlogPost/BlogPost'
import { Post } from '@/payload-types'

const BlogList = ({ posts }: { posts: Post[] }) => {
    return (
        <div>
            <h1>Blog Posts</h1>
            {posts.map((post) => (
                <BlogPost key={post.id} post={post} />
            ))}
        </div>
    )
}

export default BlogList
