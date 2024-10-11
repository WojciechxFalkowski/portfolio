import { defineType, defineField } from 'sanity';

export default defineType({
    name: 'customImage',
    title: 'Custom Image',
    type: 'image',
    options: {
        hotspot: true,
    },
    fields: [
        defineField({
            name: 'alt',
            title: 'Alternative Text',
            type: 'localeString',
        })
    ],
});
