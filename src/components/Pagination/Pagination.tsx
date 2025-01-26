import React from 'react'
import styles from './Pagination.module.css'

// import './Pagination.css'

interface PaginationProps {
    totalPosts: number
    postsPerPage: number
    setCurrentPage: (page: number) => void
    currentPage: number
}

const Pagination: React.FC<PaginationProps> = ({
    totalPosts,
    postsPerPage,
    setCurrentPage,
    currentPage,
}) => {
    const pages = []

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i)
    }

    return (
        <div className={styles.pagination}>
            {pages.map((page, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        className={page == currentPage ? styles.active : ''}
                    >
                        {page}
                    </button>
                )
            })}
        </div>
    )
}

export default Pagination
