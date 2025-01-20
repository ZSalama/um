// import React from 'react'
// import '../styles/index.css'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import Image from 'next/image'

export default async function Blog() {
    const payload = await getPayload({ config: configPromise })
    const users = await payload.find({
        collection: 'users',
        select: {
            name: true,
        },
    })
    const media = await payload.find({
        collection: 'media',
        select: {
            url: true,
        },
    })
    console.log('Media response:', media)
    console.log(media.docs.map((item: { url?: string | null }) => item.url))

    return (
        <div>
            <h1 className='title'>Blog</h1>
            <p>
                users:{' '}
                {users.docs.map(
                    (user: { id: number; name?: string | null }) => (
                        <span key={user.id}>{user.name ?? 'Unknown'}</span>
                    )
                )}
            </p>
            <p>media:</p>
            <ul>
                {media.docs.map(
                    (item: {
                        id: number
                        alt?: string | null
                        caption?: string | null
                        url?: string | null
                    }) => (
                        <li key={item.id}>
                            {item.url && (
                                <Image
                                    src={item.url}
                                    alt={item.alt ?? 'No alt text'}
                                    width={500} // Specify the width
                                    height={300} // Specify the height
                                />
                            )}
                            <p>{item.caption ?? 'No caption'}</p>
                        </li>
                    )
                )}
                {/* <li>
                    <Image
                        src='https://oick8vuyczecmiup.public.blob.vercel-storage.com/space_tacos.jpg'
                        alt='Space tacos'
                        width={500} // Specify the width
                        height={300} // Specify the height
                    ></Image>
                </li> */}
            </ul>
        </div>
    )
}
