import BlogPost from '@/components/BlogPost/BlogPost'
import { Post } from '@/payload-types'
import styles from './BlogList.module.css'

const BlogList = ({ posts }: { posts: Post[] }) => {
    return (
        <div className={styles.blogListContainer}>
            <h1 className={styles.title}>Blog Posts</h1>
            <div className={styles.blogList}>
                {posts.map((post) => (
                    <div key={post.id} className={styles.blogPost}>
                        <BlogPost post={post} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BlogList
