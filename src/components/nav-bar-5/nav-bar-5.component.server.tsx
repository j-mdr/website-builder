import { Navbar5 } from './nav-bar-5.component.client';
import { MAIN_NAV_QUERY } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/live';
import { getNavBarProps } from '@/components/nav-bar-5/nav-bar-5.utils';

export const NavBar = async () => {
  const { data } = await sanityFetch({
    query: MAIN_NAV_QUERY,
  });
  if (!data) {
    return null;
  }

  console.log('data', data);

  const navBarProps = getNavBarProps(data);

  console.log('navBarProps', navBarProps);
  return <Navbar5 {...navBarProps} />;
};
