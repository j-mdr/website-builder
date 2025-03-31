import { createClient } from '@sanity-typed/client';
import { apiVersion, dataset, projectId } from '../env';
import config from '../../../sanity.config';
import type { SanityValues } from '../../../sanity.config';
import { sanityConfigToZods } from '@sanity-typed/zod';

export const client = createClient<SanityValues>({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  stega: { studioUrl: 'http://localhost:3000/studio' },
});

const sanityZods = sanityConfigToZods(config);

export const makeTypedQuery = async () => {
  const results = await client.fetch('*[_type=="product"]');

  return results.map((result) => sanityZods.product.parse(result));
};
