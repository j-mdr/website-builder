import type { StructureResolver } from 'sanity/structure';
import { cmsName } from '@/sanity/env';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title(cmsName)
    .items([
      S.listItem().title('Site instellingen').child(
        // Instead of rendering a list of documents, we render a single
        // document, specifying the `documentId` manually to ensure
        // that we're editing the single instance of the document
        S.document().schemaType('siteConfig').documentId('siteConfig')
      ),
      S.divider(),
      S.listItem()
        .title("Detail Pagina's")
        .child(
          S.documentList()
            .title("Pagina's met een Parent")
            .filter('_type == "page" && defined(parent)')
            .defaultOrdering([{ field: 'title', direction: 'asc' }])
        ),
      S.listItem()
        .title("Overview pagina's")
        .child(
          S.documentList()
            .title("Pagina's zonder Parent")
            .filter('_type == "page" && !defined(parent)')
            .defaultOrdering([{ field: 'title', direction: 'asc' }])
        ),

      S.documentTypeListItem('post').title('Posts'),
      S.documentTypeListItem('author').title('Auteurs'),
      S.documentTypeListItem('navigation').title("Menu's"),
      S.divider(),
    ]);
