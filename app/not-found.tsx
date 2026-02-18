import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <p className="font-mono text-sm text-accent mb-4">404</p>
          <h1 className="font-serif text-3xl sm:text-4xl font-medium mb-4">
            Página no encontrada
          </h1>
          <p className="text-muted-foreground mb-8">
            El contenido que buscas no existe o fue movido.
          </p>
          <Link
            href="/"
            className="inline-block border border-foreground px-6 py-3 text-sm font-medium hover:bg-foreground hover:text-background transition-colors duration-150"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  )
}
