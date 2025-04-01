import { type SchemaTypeDefinition } from 'sanity';

import { blockContentType } from './blockContentType';
import { categoryType } from './categoryType';
import { postType } from './postType';
import { authorType } from './authorType';
import { siteConfigType } from './siteConfigType';
import { pageType } from '@/sanity/schemaTypes/pageType';
import { navigationType } from '@/sanity/schemaTypes/navigationType';
import { imageSetType } from '@/sanity/schemaTypes/imageSetType';
import navItemType from '@/sanity/schemaTypes/navItemType';
import { linkType } from '@/sanity/schemaTypes/linkType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    siteConfigType,
    imageSetType,
    pageType,
    navigationType,
    navItemType,
    linkType,
  ],
};
