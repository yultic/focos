import Link from "next/link"
import { Twitter, Linkedin, Mail } from "lucide-react"
import { reportajes } from "@/lib/reportajes-data"

const footerLinks = {
  navegacion: [
    { label: "Inicio", href: "/" },
    { label: "Reportajes", href: "/#reportajes" },
    { label: "Nosotros", href: "/#nosotros" },
  ],
  legal: [
    { label: "Política de privacidad", href: "#" },
    { label: "Términos de uso", href: "#" },
    { label: "Licencia de datos", href: "#" },
  ],
}

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "mailto:contacto@focos.tv", label: "Email" },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Red editorial rule at top */}
      <div className="h-1 bg-accent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-primary-foreground flex items-center justify-center">
                <span className="font-serif text-base font-bold text-primary">F</span>
              </div>
              <span className="font-serif text-xl font-semibold">FOCOS</span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Periodismo de investigación centroamericano desde el exilio. Historias que importan, contadas con profundidad.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors duration-150"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="font-medium text-sm uppercase tracking-wider mb-4 text-primary-foreground/80">Navegación</h4>
            <ul className="space-y-3">
              {footerLinks.navegacion.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Reportajes */}
          <div>
            <h4 className="font-medium text-sm uppercase tracking-wider mb-4 text-primary-foreground/80">Reportajes</h4>
            <ul className="space-y-3">
              {reportajes.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/reportajes/${r.slug}`}
                    className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-150"
                  >
                    {r.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-medium text-sm uppercase tracking-wider mb-4 text-primary-foreground/80">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium text-sm uppercase tracking-wider mb-4 text-primary-foreground/80">Contacto</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/60">
              <li>
                <a
                  href="mailto:contacto@focos.tv"
                  className="hover:text-primary-foreground transition-colors duration-150"
                >
                  contacto@focos.tv
                </a>
              </li>
              <li>San José, Costa Rica</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/50">© {new Date().getFullYear()} FOCOS. Todos los derechos reservados.</p>
          <p className="text-xs text-primary-foreground/50">Contenido bajo licencia Creative Commons BY-NC-SA 4.0</p>
        </div>
      </div>
    </footer>
  )
}
