'use client';

import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

export type NavBarItemProps = {
  title: string;
  description: string;
  href: string;
  subItems?: Exclude<NavBarItemProps, 'subItems'>[];
};

export const NavBarItemComponentClient = ({
  title,
  description,
  href,
  subItems,
}: NavBarItemProps) => {
  return (
    <NavigationMenuItem>
      {subItems && subItems?.length > 0 ? (
        <>
          <NavigationMenuTrigger>{title}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[600px] grid-cols-2 p-3">
              {subItems.map((feature, index) => (
                <NavigationMenuLink
                  href={feature.href}
                  key={index}
                  className="hover:bg-muted/70 rounded-md p-3 transition-colors"
                >
                  <div key={feature.title}>
                    <p className="text-foreground mb-1 font-semibold">
                      {feature.title}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </NavigationMenuLink>
              ))}
            </div>
          </NavigationMenuContent>
        </>
      ) : (
        <NavigationMenuLink
          href={href}
          className={navigationMenuTriggerStyle()}
        >
          {title}
        </NavigationMenuLink>
      )}
    </NavigationMenuItem>
  );
};
