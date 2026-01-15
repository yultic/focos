"use client"

import { TrendingUp, Users, Globe, DollarSign } from "lucide-react"
import { Card } from "@/components/ui/card"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts"

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

const stats = [
  {
    icon: Users,
    value: "127M",
    label: "Nuevos usuarios digitales",
    change: "+23%",
  },
  {
    icon: Globe,
    value: "76%",
    label: "Penetración promedio",
    change: "+8%",
  },
  {
    icon: DollarSign,
    value: "$48B",
    label: "Inversión en infraestructura",
    change: "+31%",
  },
  {
    icon: TrendingUp,
    value: "3.2x",
    label: "Crecimiento e-commerce",
    change: "+45%",
  },
]

export function DataVisualization() {
  return (
    <section id="datos" className="py-16 lg:py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Los Datos</span>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-4">
            Visualizando la transformación
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Análisis comparativo de la adopción digital en América Latina frente al promedio global durante los últimos
            8 años.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12">
          {stats.map((stat) => (
            <Card key={stat.label} className="p-6 bg-card border-border">
              <div className="flex items-start justify-between mb-3">
                <stat.icon className="h-5 w-5 text-accent" />
                <span className="text-xs font-semibold text-accent">{stat.change}</span>
              </div>
              <p className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Area Chart */}
          <Card className="p-6 bg-card border-border">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Adopción digital: LATAM vs Global</h3>
            <p className="text-sm text-muted-foreground mb-6">Porcentaje de población con acceso a internet</p>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={adoptionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickFormatter={(value) => `${value}%`} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "4px",
                    }}
                    formatter={(value: number) => [`${value}%`, ""]}
                  />
                  <Area
                    type="monotone"
                    dataKey="global"
                    stackId="1"
                    stroke="hsl(var(--chart-1))"
                    fill="hsl(var(--chart-1))"
                    fillOpacity={0.3}
                    name="Global"
                  />
                  <Area
                    type="monotone"
                    dataKey="latam"
                    stackId="2"
                    stroke="hsl(var(--accent))"
                    fill="hsl(var(--accent))"
                    fillOpacity={0.5}
                    name="LATAM"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="flex items-center gap-6 mt-4 justify-center">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-accent" />
                <span className="text-sm text-muted-foreground">LATAM</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-chart-1" />
                <span className="text-sm text-muted-foreground">Global</span>
              </div>
            </div>
          </Card>

          {/* Bar Chart */}
          <Card className="p-6 bg-card border-border">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Penetración por país</h3>
            <p className="text-sm text-muted-foreground mb-6">Acceso a internet en principales economías (2025)</p>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={countryData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" horizontal={false} />
                  <XAxis
                    type="number"
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    tickFormatter={(value) => `${value}%`}
                    domain={[0, 100]}
                  />
                  <YAxis
                    type="category"
                    dataKey="country"
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    width={80}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "4px",
                    }}
                    formatter={(value: number) => [`${value}%`, "Penetración"]}
                  />
                  <Bar dataKey="penetration" fill="hsl(var(--accent))" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>

        {/* Source */}
        <p className="text-center text-xs text-muted-foreground mt-8">
          Fuente: Análisis propio basado en datos del Banco Mundial, CEPAL y estudios de mercado regionales (2018-2025)
        </p>
      </div>
    </section>
  )
}
