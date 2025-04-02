import { GrNavigate } from 'react-icons/gr';

export const navigationItemType = {
  name: 'navigationItem',
  title: 'Navigation Item',
  type: 'object',
  icon: GrNavigate,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Titel',
      description: 'Titel van de navigatie item',
      required: true,
    },
    {
      name: 'description',
      type: 'string',
      title: 'Beschrijving',
    },
    {
      name: 'link',
      type: 'link',
      title: 'Link',
    },
    {
      name: 'subItems',
      type: 'array',
      title: 'Sub items',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Titel', required: true },
            { name: 'description', type: 'string', title: 'Beschrijving' },
            { name: 'link', type: 'link', title: 'Link', required: true },
          ],
        },
      ],
    },
  ],
};
