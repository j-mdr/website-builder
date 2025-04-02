import { Navbar5 } from './navBar5';
import { MAIN_NAV_QUERY } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/live';
import { getNavBarProps } from '@/app/_components/navbar/navBar5/utils';

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
