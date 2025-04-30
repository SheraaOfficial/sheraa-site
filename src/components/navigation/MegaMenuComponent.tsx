
import React from "react";
import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { ListItem } from "./ListItem";

interface MegaMenuProps {
  title: string;
  links: {
    title: string;
    href: string;
    description?: string;
  }[];
}

const MegaMenuComponent: React.FC<MegaMenuProps> = ({ title, links }) => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
        {title}
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[400px] gap-2 p-4 md:grid-cols-1">
          {links.map((link) => (
            <ListItem
              key={link.title}
              title={link.title}
              href={link.href}
            >
              {link.description}
            </ListItem>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default MegaMenuComponent;
