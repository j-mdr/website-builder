'use client';

import { MenuIcon } from 'lucide-react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/app/_components/ui/accordion';
import { Button } from '@/app/_components/ui/button';
import {
  NavigationMenu,
  NavigationMenuList,
} from '@/app/_components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/app/_components/ui/sheet';
import { NavBarItem, NavBarItemProps } from './NavBarItem';

type NavBarProps = {
  title?: string;
  navId?: string;
  items: NavBarItemProps[];
};

const Navbar5 = ({ items }: NavBarProps) => {
  return (
    <section className="py-4">
      <div className="container">
        <nav className="flex items-center justify-between">
          <a
            href="https://www.shadcnblocks.com"
            className="flex items-center gap-2"
          >
            <img
              src="https://shadcnblocks.com/images/block/logos/shadcnblockscom-icon.svg"
              className="max-h-8"
              alt="Shadcn UI Navbar"
            />
            <span className="text-lg font-semibold tracking-tighter">
              Shadcnblocks.com
            </span>
          </a>
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList>
              {items.length > 0
                ? items.map((feature, index) => <NavBarItem {...feature} />)
                : null}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden items-center gap-4 lg:flex">
            <Button variant="outline">Sign in</Button>
            <Button>Start for free</Button>
          </div>
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon">
                <MenuIcon className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="max-h-screen overflow-auto">
              <SheetHeader>
                <SheetTitle>
                  <a
                    href="https://www.shadcnblocks.com"
                    className="flex items-center gap-2"
                  >
                    <img
                      src="https://shadcnblocks.com/images/block/logos/shadcnblockscom-icon.svg"
                      className="max-h-8"
                      alt="Shadcn UI Navbar"
                    />
                    <span className="text-lg font-semibold tracking-tighter">
                      Shadcnblocks.com
                    </span>
                  </a>
                </SheetTitle>
              </SheetHeader>
              {/*<div className="flex flex-col p-4">*/}
              {/*  <Accordion type="single" collapsible className="mt-4 mb-2">*/}
              {/*    <AccordionItem value="solutions" className="border-none">*/}
              {/*      <AccordionTrigger className="text-base hover:no-underline">*/}
              {/*        Features*/}
              {/*      </AccordionTrigger>*/}
              {/*      <AccordionContent>*/}
              {/*        <div className="grid md:grid-cols-2">*/}
              {/*          {features.map((feature, index) => (*/}
              {/*            <a*/}
              {/*              href={feature.href}*/}
              {/*              key={index}*/}
              {/*              className="hover:bg-muted/70 rounded-md p-3 transition-colors"*/}
              {/*            >*/}
              {/*              <div key={feature.title}>*/}
              {/*                <p className="text-foreground mb-1 font-semibold">*/}
              {/*                  {feature.title}*/}
              {/*                </p>*/}
              {/*                <p className="text-muted-foreground text-sm">*/}
              {/*                  {feature.description}*/}
              {/*                </p>*/}
              {/*              </div>*/}
              {/*            </a>*/}
              {/*          ))}*/}
              {/*        </div>*/}
              {/*      </AccordionContent>*/}
              {/*    </AccordionItem>*/}
              {/*  </Accordion>*/}
              {/*  <div className="flex flex-col gap-6">*/}
              {/*    <a href="#" className="font-medium">*/}
              {/*      Templates*/}
              {/*    </a>*/}
              {/*    <a href="#" className="font-medium">*/}
              {/*      Blog*/}
              {/*    </a>*/}
              {/*    <a href="#" className="font-medium">*/}
              {/*      Pricing*/}
              {/*    </a>*/}
              {/*  </div>*/}
              {/*  <div className="mt-6 flex flex-col gap-4">*/}
              {/*    <Button variant="outline">Sign in</Button>*/}
              {/*    <Button>Start for free</Button>*/}
              {/*  </div>*/}
              {/*</div>*/}
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </section>
  );
};

export { Navbar5 };
