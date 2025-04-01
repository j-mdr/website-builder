export const linkType = {
  name: 'link',
  type: 'object',
  title: 'Link',
  fields: [
    {
      name: 'linkType',
      title: 'Link Type',
      type: 'string',
      options: {
        list: [
          { title: 'Interne Link', value: 'internal' },
          { title: 'Externe Link', value: 'external' }
        ],
        layout: 'radio'
      },
      validation: Rule => Rule.required()
    },
    {
      title: 'Interne Link',
      name: 'internalLink',
      description: 'Selecteer pagina voor navigatie',
      type: 'reference',
      to: [{ type: 'page' }, { type: 'post' }],
      hidden: ({ parent }) => parent?.linkType !== 'internal',
      validation: Rule => Rule.custom((value, context) => {
        if (context.parent?.linkType === 'internal' && !value) {
          return 'Interne link is vereist wanneer "Interne Link" is geselecteerd';
        }
        return true;
      })
    },
    {
      name: 'externalUrl',
      title: 'Externe URL',
      description: "Gebruik volledige URL's voor externe links",
      type: 'url',
      hidden: ({ parent }) => parent?.linkType !== 'external',
      validation: Rule => Rule.custom((value, context) => {
        if (context.parent?.linkType === 'external' && !value) {
          return 'Externe URL is vereist wanneer "Externe Link" is geselecteerd';
        }
        return true;
      })
    },
  ]
};