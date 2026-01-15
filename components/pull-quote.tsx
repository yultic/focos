interface PullQuoteProps {
  quote: string
  author: string
  role: string
}

export function PullQuote({ quote, author, role }: PullQuoteProps) {
  return (
    <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <svg className="w-12 h-12 mx-auto mb-6 opacity-30" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium leading-relaxed mb-8 text-balance">
          {quote}
        </blockquote>
        <div>
          <p className="font-semibold text-lg">{author}</p>
          <p className="text-primary-foreground/70">{role}</p>
        </div>
      </div>
    </section>
  )
}
