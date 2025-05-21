
import * as React from "react"
import { Link, useLocation } from "react-router-dom"
import { LucideIcon } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface NavBarProps {
  items: {
    name: string
    url: string
    icon?: LucideIcon
    highlight?: boolean
  }[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const location = useLocation()
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null)

  return (
    <div 
      className={cn(
        "flex items-center p-1.5 rounded-full backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 shadow-md dark:shadow-none", 
        className
      )}
    >
      <div className="flex gap-2">
        {items.map((item, index) => {
          const Icon = item.icon
          const isActive = location.pathname === item.url
          const isHovered = hoveredIndex === index
          
          return (
            <Link
              key={item.name}
              to={item.url}
              className={cn(
                "relative px-3 py-1.5 rounded-full transition-colors font-medium text-sm sm:text-base group flex items-center gap-1.5",
                isActive
                  ? "text-white z-10"
                  : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white",
                item.highlight && !isActive && "text-sheraa-primary dark:text-sheraa-primary"
              )}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {isActive && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-sheraa-primary to-purple-500 rounded-full -z-10"
                  layoutId="navbar-active-pill"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                />
              )}
              
              {isHovered && !isActive && (
                <motion.div
                  className="absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-full -z-10"
                  layoutId="navbar-hover-pill"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                />
              )}
              
              {Icon && <Icon className="h-4 w-4 flex-shrink-0" />}
              {item.name}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
