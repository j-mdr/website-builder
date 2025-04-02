import {
  MainNavResponse,
  MainNavResponseSchema,
  NavigationItem,
  NavigationSubItem,
} from './zod'; // Je export types
import { NavBarItemProps } from './NavBarItem';

/**
 * Bepaalt de URL op basis van het linktype en de beschikbare linkgegevens
 */
const getLinkUrl = (
  link: NavigationItem['link'] | NavigationSubItem['link']
): string => {
  if (link.linkType === 'internal' && link.internalLink?.slug) {
    return `/${link.internalLink.slug}`;
  } else if (link.linkType === 'external' && link.externalLink) {
    return link.externalLink;
  }
  return '/'; // Fallback naar homepage als er geen geldige link is
};

/**
 * Mapt een navigatie subitem naar NavBarItemProps (zonder subItems)
 */
const mapSubItemToNavBarItem = (
  subItem: NavigationSubItem
): Omit<NavBarItemProps, 'subItems'> => {
  return {
    title: subItem.title,
    description: subItem.description || '',
    href: getLinkUrl(subItem.link),
  };
};

/**
 * Mapt een navigatie-item naar NavBarItemProps
 */
const mapItemToNavBarItem = (item: NavigationItem): NavBarItemProps => {
  const navBarItem: NavBarItemProps = {
    title: item.title,
    description: item.description || '',
    href: getLinkUrl(item.link),
  };

  // Voeg subItems toe als ze bestaan
  if (item.subItems && item.subItems.length > 0) {
    navBarItem.subItems = item.subItems.map(mapSubItemToNavBarItem);
  }

  return navBarItem;
};

/**
 * Converteert gevalideerde navigatiedata naar props voor de NavBar5 component
 */
export const mapNavigationToNavBarProps = (validatedData: MainNavResponse) => {
  const { mainNavigation } = validatedData;

  return {
    title: mainNavigation.title,
    navId: mainNavigation.navId.current,
    items: mainNavigation.items.map(mapItemToNavBarItem),
  };
};

/**
 * Volledige functie die gegevens valideert en omzet naar NavBar5 props
 */
export const getNavBarProps = (data: unknown) => {
  try {
    // Validator wordt hier geïmporteerd
    const validateNavData = (data: unknown): MainNavResponse => {
      return MainNavResponseSchema.parse(data);
    };

    const validatedData = validateNavData(data);
    return mapNavigationToNavBarProps(validatedData);
  } catch (error) {
    console.error(
      'Fout bij het valideren of mappen van navigatiegegevens:',
      error
    );
    // Retourneer standaard navigatie als er iets misgaat
    return {
      title: 'Navigatie',
      navId: 'main-nav',
      items: [],
    };
  }
};
