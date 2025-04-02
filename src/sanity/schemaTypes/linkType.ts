import { Rule, ValidationContext } from 'sanity';

export const linkType = {
  name: 'link',
  type: 'object',
  title: 'Link',
  fields: [
    {
      name: 'linkType',
      title: 'Link Type',
      type: 'string',
      required: true,
      options: {
        list: [
          { title: 'Interne Link', value: 'internal' },
          { title: 'Externe Link', value: 'external' },
        ],
        layout: 'radio',
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'externalLink',
      title: 'Externe Link',
      description: "Gebruik volledige URL's voor externe links",
      type: 'url',
      hidden: ({ parent }: { parent: { linkType: string } }) =>
        parent?.linkType !== 'external',
      validation: (Rule: Rule) =>
        Rule.uri({
          allowRelative: true,
          scheme: ['https', 'http', 'mailto', 'tel'],
        }),
    },
    {
      title: 'Openen in nieuwe tabblad?',
      name: 'blank',
      type: 'boolean',
    },
    {
      title: 'Interne Link',
      name: 'internalLink',
      description: 'Selecteer een pagina of post om te linken',
      type: 'reference',
      to: [{ type: 'page' }, { type: 'post' }],
      hidden: ({ parent }: { parent: { linkType: string } }) =>
        parent?.linkType !== 'internal',
    },
  ],
};
