
"use client"

import * as React from "react"
import { LucideIcon } from "lucide-react"
import { MenuItem } from "./glow-menu/MenuItem"
import { SEFSparkles } from "./glow-menu/SEFSparkles"
import { MenuContainer } from "./glow-menu/MenuContainer"

interface MenuItem {
  icon: LucideIcon | React.FC
  label: string
  href: string
  gradient: string
  iconColor: string
}

interface MenuBarProps extends React.HTMLAttributes<HTMLDivElement> {
  items: MenuItem[]
  activeItem?: string
  onItemClick?: (label: string) => void
}

export const MenuBar = React.forwardRef<HTMLDivElement, MenuBarProps>(
  ({ className, items, activeItem, onItemClick, ...props }, ref) => {
    return (
      <MenuContainer
        ref={ref}
        className={className}
        items={items}
        activeItem={activeItem}
        onItemClick={onItemClick}
        {...props}
      >
        {items.map((item, index) => {
          const isActive = item.label === activeItem
          const isSEF = item.label === "SEF"

          return (
            <React.Fragment key={item.label}>
              <MenuItem
                item={item}
                index={index}
                isActive={isActive}
                onItemClick={onItemClick}
              />
              {isSEF && <SEFSparkles />}
            </React.Fragment>
          )
        })}
      </MenuContainer>
    )
  },
)

MenuBar.displayName = "MenuBar"
