import type { StructureResolver } from 'sanity/structure';
import { cmsName } from '@/sanity/env';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title(cmsName)
    .items([
      S.listItem().title('Site configuration').child(
        // Instead of rendering a list of documents, we render a single
        // document, specifying the `documentId` manually to ensure
        // that we're editing the single instance of the document
        S.document().schemaType('siteConfig').documentId('siteConfig')
      ),
      S.divider(),
      S.documentTypeListItem('page').title('Pages'),
      S.documentTypeListItem('post').title('Posts'),
      S.documentTypeListItem('category').title('Categories'),
      S.documentTypeListItem('author').title('Authors'),
      S.documentTypeListItem('navigation').title('Navigations'),
      S.divider(),
    ]);
