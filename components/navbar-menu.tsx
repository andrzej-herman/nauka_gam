"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const p1: { title: string; href: string; description: string }[] = [
  {
    title: "Ćwiczenie nr 4",
    href: "/p1c4",
    description:
      "Ilość utworów: 3",
  },
  {
    title: "Ćwiczenie nr 5",
    href: "/p1c5",
    description:
      "Ilość utworów: 3",
  },
  {
    title: "Ćwiczenie nr 6",
    href: "/p1c6",
    description:
      "Ilość utworów: 3",
  },
  {
    title: "Ćwiczenie nr 7",
    href: "/p1c7",
    description:
      "Ilość utworów: 3",
  },
];

const p2: { title: string; href: string; description: string }[] = [
  {
    title: "Ćwiczenie nr 12",
    href: "/p2c12",
    description:
      "Ilość utworów: 3",
  },
  {
    title: "Ćwiczenie nr 13",
    href: "/p2c13",
    description:
      "Ilość utworów: 3",
  },
  {
    title: "Ćwiczenie nr 15",
    href: "/p2c15",
    description:
      "Ilość utworów: 3",
  },
  {
    title: "Ćwiczenie nr 16",
    href: "/p2c16",
    description:
      "Ilość utworów: 3",
  },
];

export function NavbarMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Strona główna
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Płyta nr 1</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {p1.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Płyta nr 2</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {p2.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/szukajgamy" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Szukaj gamy
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
