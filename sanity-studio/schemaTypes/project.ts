import { defineField, defineType } from 'sanity';
import localeString from './localeString';

const removeDiacritics = (input: string) => {
  const diacriticsMap = [
    { base: 'a', letters: /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EAC\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u00C6\u01E2\u01FC]/g },
    { base: 'c', letters: /[\u0043\u24B8\uFF23\u00C7\u0106\u0108\u010A\u010C]/g },
    { base: 'e', letters: /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1E1C\u1E18\u1E1A]/g },
    { base: 'l', letters: /[\u004C\u24C1\uFF2C\u0141]/g },
    { base: 'n', letters: /[\u004E\u24C3\uFF2E\u00D1\u0143\u00D1\u0144\u0145\u0146\u0147\u00D2\u0149]/g },
    { base: 's', letters: /[\u0053\u24C8\uFF33\u015A\u015C\u015E\u0160]/g },
    { base: 'z', letters: /[\u005A\u24CF\uFF3A\u0179\u017B\u017D]/g },
  ];

  for (let i = 0; i < diacriticsMap.length; i++) {
    input = input.replace(diacriticsMap[i].letters, diacriticsMap[i].base);
  }
  return input
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localeString',
      validation: (Rule) => Rule.required().error('Title is required'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: (doc: any) => (doc?.title?.en || doc?.title?.pl || ''),
        maxLength: 96,
        slugify: (input: string) => removeDiacritics(input),
      },
    }),
    defineField({
      name: 'description',
      title: 'Long Description',
      type: 'localeString',
      validation: (Rule) => Rule.required().error('Description is required'),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'customImage',
      // validation: (Rule) => Rule.required().error('Main Image is required'),
    }),
    // defineField({
    //   name: 'gallery',
    //   title: 'Image Gallery',
    //   type: 'array',
    //   of: [{ type: 'customImage' }],
    //   validation: (Rule) => Rule.required().min(1).error('At least one image is required in the gallery'),
    // }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
      validation: (Rule) => Rule.required().error('Link is required'),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
  ],
  preview: {
    select: {
      title_en: 'title.en',
      title_pl: 'title.pl',
      media: 'mainImage',
    },
    prepare(selection) {
      const { title_en, title_pl, media } = selection;
      return {
        title: title_en || title_pl || 'Untitled',
        media: media,
      };
    },
  },
});
