"use client"

import { Card } from "@/components/ui/card"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts"

const adoptionData = [
  { year: "2018", latam: 45, global: 62 },
  { year: "2019", latam: 48, global: 67 },
  { year: "2020", latam: 55, global: 74 },
  { year: "2021", latam: 62, global: 79 },
  { year: "2022", latam: 68, global: 83 },
  { year: "2023", latam: 72, global: 86 },
  { year: "2024", latam: 76, global: 89 },
  { year: "2025", latam: 79, global: 91 },
]

const countryData = [
  { country: "Brasil", penetration: 82 },
  { country: "Chile", penetration: 78 },
  { country: "Argentina", penetration: 75 },
  { country: "México", penetration: 72 },
  { country: "Colombia", penetration: 68 },
  { country: "Perú", penetration: 62 },
]

function ChartCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 })

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export function DataVisualization() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal()
  const { ref: narrativeRef, isVisible: narrativeVisible } = useScrollReveal({ threshold: 0.3 })

  return (
    <section id="datos" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 lg:mb-16 transition-all duration-500 ease-out ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="editorial-rule mx-auto mb-6" />
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-[0.2em] mb-3 block">
            Los Datos
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-foreground mt-2 mb-4">
            Visualizando la transformación
          </h2>
        </div>

        {/* Narrative paragraph */}
        <div
          ref={narrativeRef}
          className={`max-w-3xl mx-auto mb-12 lg:mb-16 transition-all duration-700 ease-out ${
            narrativeVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            Entre 2018 y 2025, América Latina cerró una brecha significativa frente al promedio global en
            adopción digital. La aceleración pandémica de 2020 marcó un punto de inflexión visible en los datos,
            aunque las disparidades entre países revelan que el progreso no ha sido uniforme.
          </p>
        </div>

        {/* Charts Grid — individual scroll reveal */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Area Chart */}
          <ChartCard delay={0}>
            <Card className="p-6 bg-card border-border">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Adopción digital: LATAM vs Global</h3>
              <p className="text-sm text-muted-foreground mb-6">Porcentaje de población con acceso a internet</p>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={adoptionData}>
                    <XAxis
                      dataKey="year"
                      stroke="var(--muted-foreground)"
                      fontSize={12}
                      fontFamily="var(--font-mono)"
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis
                      stroke="var(--muted-foreground)"
                      fontSize={12}
                      fontFamily="var(--font-mono)"
                      tickFormatter={(value) => `${value}%`}
                      tickLine={false}
                      axisLine={false}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "var(--card)",
                        border: "1px solid var(--border)",
                        borderRadius: "2px",
                        fontFamily: "var(--font-mono)",
                        fontSize: "12px",
                      }}
                      formatter={(value: number | undefined) => [`${value ?? 0}%`, ""]}
                    />
                    <Area
                      type="monotone"
                      dataKey="global"
                      stackId="1"
                      stroke="var(--chart-1)"
                      fill="var(--chart-1)"
                      fillOpacity={0.3}
                      name="Global"
                    />
                    <Area
                      type="monotone"
                      dataKey="latam"
                      stackId="2"
                      stroke="var(--accent)"
                      fill="var(--accent)"
                      fillOpacity={0.5}
                      name="LATAM"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="flex items-center gap-6 mt-4 justify-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-accent" />
                  <span className="text-sm text-muted-foreground">LATAM</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-chart-1" />
                  <span className="text-sm text-muted-foreground">Global</span>
                </div>
              </div>
            </Card>
          </ChartCard>

          {/* Bar Chart */}
          <ChartCard delay={200}>
            <Card className="p-6 bg-card border-border">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Penetración por país</h3>
              <p className="text-sm text-muted-foreground mb-6">Acceso a internet en principales economías (2025)</p>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={countryData} layout="vertical">
                    <XAxis
                      type="number"
                      stroke="var(--muted-foreground)"
                      fontSize={12}
                      fontFamily="var(--font-mono)"
                      tickFormatter={(value) => `${value}%`}
                      domain={[0, 100]}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis
                      type="category"
                      dataKey="country"
                      stroke="var(--muted-foreground)"
                      fontSize={12}
                      fontFamily="var(--font-mono)"
                      width={80}
                      tickLine={false}
                      axisLine={false}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "var(--card)",
                        border: "1px solid var(--border)",
                        borderRadius: "2px",
                        fontFamily: "var(--font-mono)",
                        fontSize: "12px",
                      }}
                      formatter={(value: number | undefined) => [`${value ?? 0}%`, "Penetración"]}
                    />
                    <Bar dataKey="penetration" fill="var(--accent)" radius={[0, 2, 2, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </ChartCard>
        </div>

        {/* Source */}
        <p className="text-center text-xs text-muted-foreground font-mono mt-8">
          Fuente: Análisis propio basado en datos del Banco Mundial, CEPAL y estudios de mercado regionales (2018-2025)
        </p>
      </div>
    </section>
  )
}
