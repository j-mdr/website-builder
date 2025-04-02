import { z } from 'zod';

// Schema voor internalLink
export const InternalLinkSchema = z.object({
  _id: z.string(),
  slug: z.string(),
});

// Schema voor link
export const LinkSchema = z
  .object({
    _type: z.literal('link'),
    linkType: z.enum(['internal', 'external']),
    openedInNewTab: z.boolean().nullish(), // komt overeen met het 'blank' veld
    externalLink: z.string().nullish(),
    internalLink: InternalLinkSchema.nullish(),
  })
  .refine(
    (data) => {
      if (data.linkType === 'internal') return data.internalLink !== undefined;
      if (data.linkType === 'external') return data.externalLink !== undefined;
      return true;
    },
    {
      message:
        'Een interne link moet een internalLink hebben, en een externe link moet een externalLink hebben',
    }
  );

// Schema voor subItems
export const SubItemSchema = z.object({
  title: z.string(),
  description: z.string().nullish(),
  link: LinkSchema,
});

// Schema voor items
export const NavigationItemSchema = z.object({
  title: z.string(),
  description: z.string().nullish(),
  link: LinkSchema.nullish(),
  subItems: z.array(SubItemSchema).nullish(),
});

// Schema voor navigatie
export const NavigationSchema = z.object({
  _id: z.string(),
  title: z.string(),
  navId: z.object({
    current: z.string(), // navId is een slug field dat een 'current' eigenschap heeft
  }),
  items: z.array(NavigationItemSchema),
});

// Schema voor de hoofdresponse
export const MainNavResponseSchema = z.object({
  mainNavigation: NavigationSchema,
});

// Type exports
export type MainNavResponse = z.infer<typeof MainNavResponseSchema>;
export type Navigation = z.infer<typeof NavigationSchema>;
export type NavigationItem = z.infer<typeof NavigationItemSchema>;
export type NavigationSubItem = z.infer<typeof SubItemSchema>;
export type NavigationLink = z.infer<typeof LinkSchema>;
