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
      name: 'parent',
      title: 'Parent page',
      type: 'reference',
      to: { type: 'page' },
      // This ensures we cannot select other "children"
      options: {
        filter: ({ document }) => {
          // Verwijder de 'drafts.' prefix als die aanwezig is
          const baseDocId = document._id.replace(/^drafts\./, '');
          return {
            filter: '!(_id in [$docId, $draftDocId]) && !defined(parent)',
            params: {
              docId: baseDocId,
              draftDocId: `drafts.${baseDocId}`,
            },
          };
        },
      },
    }),
  ],
  // Customize the preview so parents are visualized in the studio
  preview: {
    select: {
      title: 'title',
      path: 'slug.current',
      parentPath: 'parent.slug.current',
    },
    prepare: ({ title, path, parentPath }) => ({
      title,
      subtitle: parentPath ? `${parentPath}/${path}` : path,
    }),
  },
});
