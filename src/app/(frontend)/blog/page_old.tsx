// import { getPayload } from 'payload'
// import configPromise from '@payload-config'
// import Image from 'next/image'

// export default async function Blog() {
//     const payload = await getPayload({ config: configPromise })

//     // Fetch media objects
//     const posts = await payload.find({
//         collection: 'posts',
//         select: {
//             title: true,
//             heroImage: true,
//         },
//     })
//     console.log('Posts response:', posts.docs[0])
//     if (posts.docs[0] && posts.docs[0].heroImage) {
//         if (typeof posts.docs[0].heroImage !== 'number') {
//             console.log('Posts response:', posts.docs[0].heroImage.url)
//         }
//     }

//     return (
//         <div>
//             <h1 className='title'>Blog</h1>
//             <p>posts:</p>
//             <ul>
//                 {await Promise.all(
//                     posts.docs.map(
//                         async (post: {
//                             id: number
//                             title: string
//                             heroImage: media
//                         }) => {
//                             let heroImage = post.heroImage
//                             if (typeof heroImage === 'number') {
//                                 const media = await payload.findByID({
//                                     collection: 'media',
//                                     id: heroImage,
//                                 })
//                                 heroImage = media
//                             }
//                             return (
//                                 <li key={post.id}>
//                                     <h2>{post.title}</h2>
//                                     <Image
//                                         src={heroImage.url}
//                                         alt={heroImage.alt ?? 'No alt text'}
//                                         width={500} // Specify the width
//                                         height={300} // Specify the height
//                                     />
//                                 </li>
//                             )
//                         }
//                     )
//                 )}
//             </ul>
//         </div>
//     )
// }
