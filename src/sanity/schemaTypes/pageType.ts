import { DocumentTextIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const pageType = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
    }),
    defineField({
      name: 'parentPage',
      title: 'Parent page',
      type: 'reference',
      to: { type: 'page' },
      options: {
        filter: ({ document }) => {
          return {
            filter: '_id != $documentId',
            params: {
              documentId: document._id,
            },
          };
        },
      },
    }),
  ],
});
