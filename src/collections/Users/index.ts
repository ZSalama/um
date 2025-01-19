import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
    slug: 'users',
    admin:
    {
        useAsTitle: 'name',
        defaultColumns: ['name', 'email'],
    },
    auth: true,
    fields: [
        {
            name: 'name',
            type: 'text',
        }
    ],
    timestamps: true
}