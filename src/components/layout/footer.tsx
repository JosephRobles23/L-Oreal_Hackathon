import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="w-full bg-garnier-light-beige border-t">
      <div className="container-garnier py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4 text-garnier-green text-sm uppercase">LINKS ÚTILES</h3>
            <ul className="space-y-2">
              <FooterLink href="/acerca-de-garnier" text="Acerca de Garnier" />
              <FooterLink href="/politicas-de-privacidad" text="Políticas de Privacidad" />
              <FooterLink href="/contacto" text="Contacto" />
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-garnier-green text-sm uppercase">SERVICIOS AL CONSUMIDOR</h3>
            <ul className="space-y-2">
              <FooterLink href="/preguntas-frecuentes" text="Preguntas Frecuentes" />
              <FooterLink href="/contacto" text="Contacto" />
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-garnier-green text-sm uppercase">SÍGUENOS</h3>
            <div className="flex space-x-4">
              <SocialLink href="https://www.facebook.com/GarnierPeru" icon={<Facebook className="h-5 w-5" />} label="Facebook" />
              <SocialLink href="https://www.instagram.com/garnierperu/" icon={<Instagram className="h-5 w-5" />} label="Instagram" />
              <SocialLink href="https://twitter.com/garnierperu" icon={<Twitter className="h-5 w-5" />} label="Twitter" />
            </div>
          </div>

          <div>
            <Image
              src="https://ext.same-assets.com/2552496294/1040282724.png"
              alt="Garnier"
              width={100}
              height={35}
              className="h-auto mb-4"
            />
            <p className="text-sm text-garnier-green">
              © {new Date().getFullYear()} Garnier Peru. Todos los derechos reservados.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t text-center text-xs text-garnier-green">
          <p>
            Garnier ha formulado productos para el cuidado de la piel, coloración, tintes y cuidado del cabello, desodorantes y antitranspirantes para mujer y hombre.
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, text }: { href: string; text: string }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-garnier-green hover:text-garnier-green-light transition-colors"
      >
        {text}
      </Link>
    </li>
  )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-garnier-green hover:text-garnier-green-light transition-colors"
    >
      {icon}
      <span className="sr-only">{label}</span>
    </Link>
  )
}
