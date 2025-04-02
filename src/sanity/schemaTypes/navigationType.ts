import { GrNavigate } from 'react-icons/gr';

export const navigationType = {
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  icon: GrNavigate,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Titel',
    },
    {
      name: 'navId',
      type: 'slug',
      title: 'Menu ID',
      description: 'Voer een unieke ID in voor dit menu',
    },
    {
      name: 'items',
      type: 'array',
      title: 'Menu items',
      required: true,
      of: [{ type: 'navigationItem' }],
    },
  ],
};
