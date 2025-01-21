'use client'
import React, { useEffect, useState } from 'react'
import BlogPost from '@/components/BlogPost/BlogPost'
import { Post } from '@/payload-types'

const Blog = () => {
    const [posts, setPosts] = useState<Post[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('/api/posts/')
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                const data = await response.json()
                console.log('API response:', data.docs)
                if (Array.isArray(data.docs)) {
                    const posts = data.docs.map((post: Post) => ({
                        ...post,
                    }))
                    setPosts(posts)
                } else {
                    throw new Error('Invalid data format')
                }
            } catch (err) {
                setError(err as Error)
            } finally {
                setLoading(false)
            }
        }

        fetchPosts()
    }, [])

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>
    if (posts.length === 0) return <p>No posts found.</p>

    return (
        <div>
            <h1>Blog Posts</h1>
            {posts.map((post) => (
                <BlogPost key={post.id} post={post} />
            ))}
        </div>
    )
}

export default Blog
