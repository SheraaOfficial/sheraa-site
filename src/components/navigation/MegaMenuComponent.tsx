
import React from "react";
import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { ListItem } from "./ListItem";
import { LucideIcon } from "lucide-react";

interface MegaMenuProps {
  title: string;
  icon: LucideIcon;
  links: {
    title: string;
    href: string;
    description?: string;
  }[];
}

const MegaMenuComponent: React.FC<MegaMenuProps> = ({ title, icon: Icon, links }) => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
        <div className="flex items-center gap-2">
          <Icon className="h-4 w-4" />
          <span>{title}</span>
        </div>
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[400px] gap-2 p-4 md:grid-cols-1 bg-white/95 backdrop-blur-sm">
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
