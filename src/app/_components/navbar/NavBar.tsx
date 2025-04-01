import { Navbar5 } from './Navbar5';
import { client } from '@/sanity/lib/client';
import { MAIN_NAV_QUERY } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/live';

export const NavBar = async () => {
  const { data } = await sanityFetch({
    query: MAIN_NAV_QUERY,
  });
  console.log('test',data);
  if (data) {
    return null;
  }

  return <Navbar5 />;
};
