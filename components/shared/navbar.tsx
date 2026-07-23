"use client"

import { useState } from "react"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

type NavItem = {
  label: string
  href: string
}

// Center navigation links
const navItems: NavItem[] = [
  { label: "Dashboard", href: "dashboard" },
  { label: "Projects", href: "#projects" },
  { label: "Analytics", href: "#analytics" },
  { label: "Team", href: "#team" },
]

// Right-side user dropdown options
const userMenuItems: NavItem[] = [
  { label: "Profile", href: "#profile" },
  { label: "Settings", href: "#settings" },
  { label: "Billing", href: "#billing" },
  { label: "Support", href: "#support" },
]

const currentUser = {
  name: "Alex Morgan",
  email: "alex@acme.com",
  avatar: "/user-avatar.png",
  initials: "AM",
}

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-2">
      <span className="flex size-8 items-center justify-center rounded-md bg-primary text-sm font-bold text-primary-foreground">
        A
      </span>
      <span className="text-lg font-semibold tracking-tight">Acme</span>
    </a>
  )
}

function UserMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex h-auto items-center gap-2 rounded-md px-1.5 py-1.5 transition-colors hover:bg-accent hover:text-accent-foreground sm:pr-2">
        <Avatar className="size-8">
          <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
          <AvatarFallback>{currentUser.initials}</AvatarFallback>
        </Avatar>
        <span className="hidden text-sm font-medium sm:inline-block">
          {currentUser.name}
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuLabel>
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-medium">{currentUser.name}</span>
              <span className="text-xs font-normal text-muted-foreground">
                {currentUser.email}
              </span>
            </div>
          </DropdownMenuLabel>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {userMenuItems.map((item) => (
            <DropdownMenuItem
              key={item.label}
              onClick={() => {
                window.location.hash = item.href
              }}
            >
              {item.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Center: Nav links (desktop) */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right: User menu + mobile trigger */}
        <div className="flex items-center gap-2">
          <UserMenu />

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              aria-label="Open menu"
              className="inline-flex size-9 items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground md:hidden"
            >
              <span className="flex flex-col gap-1">
                <span className="h-0.5 w-5 bg-current" />
                <span className="h-0.5 w-5 bg-current" />
                <span className="h-0.5 w-5 bg-current" />
              </span>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle>
                  <Logo />
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-1 px-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors",
                      "hover:bg-accent hover:text-accent-foreground",
                    )}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <Separator className="my-2" />
              <div className="flex items-center gap-3 px-4">
                <Avatar className="size-9">
                  <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
                  <AvatarFallback>{currentUser.initials}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">{currentUser.name}</span>
                  <span className="text-xs text-muted-foreground">
                    {currentUser.email}
                  </span>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
