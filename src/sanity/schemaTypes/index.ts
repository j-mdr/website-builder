import { type SchemaTypeDefinition } from 'sanity';

import { blockContentType } from './blockContentType';
import { postType } from './postType';
import { authorType } from './authorType';
import { siteConfigType } from './siteConfigType';
import { pageType } from '@/sanity/schemaTypes/pageType';
import { navigationType } from '@/sanity/schemaTypes/navigationType';
import { imageSetType } from '@/sanity/schemaTypes/imageSetType';
import { linkType } from '@/sanity/schemaTypes/linkType';
import { navigationItemType } from '@/sanity/schemaTypes/navigationItemType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    postType,
    authorType,
    siteConfigType,
    imageSetType,
    pageType,
    navigationType,
    navigationItemType,
    linkType,
  ],
};
