import { defineQuery } from 'next-sanity';

export const POSTS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)][0...12]{
  _id, title, slug
}`);

export const POST_QUERY =
  defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  title, body, mainImage
}`);

export const MAIN_NAV_QUERY = defineQuery(`*[_type == "siteConfig"][0]{
  "mainNavigation": mainNav->{
    _id,
    title,
    navId,
    "items": items[]{
      title,
      description,
      "link": link{
        _type,
        linkType,
        "internalLink": select(
          linkType == 'internal' && defined(internalLink) => internalLink->{
            _id,
            _type,
            title,
            slug
          }
        )
      },
      "subItems": subItems[]{
        title,
        description,
        "link": link{
          _type,
          linkType,
          "internalLink": select(
            linkType == 'internal' && defined(internalLink) => internalLink->{
              _id,
              _type,
              title,
              slug
            }
          )
        }
      }
    }
  }
}

`);
