'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Search, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev)
  }

  return (
    <header className="w-full bg-garnier-light-beige border-b sticky top-0 z-50">
      <div className="container-garnier">
        <div className="flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>

          {/* Logo */}
          <div className="flex items-center justify-center md:justify-start">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="https://ext.same-assets.com/2552496294/1040282724.png"
                alt="Garnier"
                width={120}
                height={40}
                className="h-auto"
              />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavItem href="/sobre-nuestras-marcas/express-aclara" label="CUIDADO DE LA PIEL" />
            <NavItem href="/productos/capilar-styling/shampoo" label="CUIDADO DEL CABELLO" />
            <NavItem href="/sobre-nuestras-marcas/nutrisse" label="COLORACIÓN" />
            <NavItem href="/tips" label="CONSEJOS Y TENDENCIAS" />
          </nav>

          {/* Search button */}
          <div className="flex items-center">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden h-[calc(100vh-4rem)] overflow-auto bg-garnier-light-beige">
          <nav className="container-garnier py-6 space-y-4">
            <MobileNavItem href="/sobre-nuestras-marcas/express-aclara" label="CUIDADO DE LA PIEL" />
            <MobileNavItem href="/productos/capilar-styling/shampoo" label="CUIDADO DEL CABELLO" />
            <MobileNavItem href="/sobre-nuestras-marcas/nutrisse" label="COLORACIÓN" />
            <MobileNavItem href="/tips" label="CONSEJOS Y TENDENCIAS" />
          </nav>
        </div>
      )}
    </header>
  )
}

function NavItem({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="text-garnier-green text-sm font-medium hover:text-garnier-green-light transition-colors flex items-center"
    >
      {label}
      <ChevronDown className="ml-1 h-4 w-4" />
    </Link>
  )
}

function MobileNavItem({ href, label }: { href: string; label: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b pb-2">
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className="flex items-center justify-between w-full py-2 text-garnier-green font-medium"
      >
        {label}
        <ChevronDown
          className={cn(
            "h-5 w-5 transition-transform",
            isOpen && "transform rotate-180"
          )}
        />
      </button>

      {isOpen && (
        <div className="py-2 pl-4 space-y-2">
          <Link href={href} className="block py-1 text-sm">
            Ver todo
          </Link>
        </div>
      )}
    </div>
  )
}
