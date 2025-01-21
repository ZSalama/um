import type { CollectionConfig } from 'payload'

import { FixedToolbarFeature, InlineToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical'

import { authenticated } from '../../access/authenticated'
import { anyone } from '../../access/anyone'

export const Posts: CollectionConfig = {

    slug: 'posts',
    access: {
        create: authenticated,
        delete: authenticated,
        read: anyone,
        update: authenticated,
    },
    defaultPopulate: {
        title: true,
        slug: true,
        meta: {
          image: true,
          description: true,
        },
      },
    admin: {
        defaultColumns: ['title', 'slug', 'updatedAt'],
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'heroImage',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'content',
            label: 'Content',
            type: 'richText',
            required: true,
            editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
                },
            }),
        },
        {
            name: 'slug_title',
            type: 'text',
        },
        {
            name: 'publishedAt',
            type: 'date',
            admin: {
                date: {
                    pickerAppearance: 'dayAndTime',
                },
                position: 'sidebar',
            }
        }
    ],

    
    timestamps: true,

}