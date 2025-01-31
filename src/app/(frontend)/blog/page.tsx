'use client'
import { useEffect, useState } from 'react'
import BlogList from '@/components/BlogList/BlogList'
import Pagination from '@/components/Pagination/Pagination'
import { Post } from '@/payload-types'
import Loader from '@/components/Loading/Loading'

export default function Blog() {
    const [posts, setPosts] = useState<Post[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error | null>(null)
    const [currentPage, setCurrentPage] = useState(1)
    // const [postsPerPage, setPostsPerPage] = useState(1)
    const postsPerPage = 3

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

    if (loading) return <Loader />
    if (error) return <p>Error: {error.message}</p>
    if (posts.length === 0) return <p>No posts found.</p>

    const lastPostIndex = currentPage * postsPerPage
    const firstPostIndex = lastPostIndex - postsPerPage
    const currentPosts = posts.slice(firstPostIndex, lastPostIndex)

    return (
        <div className='app'>
            <BlogList posts={currentPosts} />
            <Pagination
                totalPosts={posts.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        </div>
    )
}
