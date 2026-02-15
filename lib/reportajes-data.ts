export interface ReportajeSection {
  type: "text" | "image" | "pull-quote"
  content?: string
  /** Caption for images, author for pull-quotes */
  caption?: string
  /** Role/title for pull-quote author */
  role?: string
  /** Unsplash URL for image sections */
  imageUrl?: string
}

export interface Reportaje {
  slug: string
  title: string
  subtitle: string
  period: string
  author: string
  date: string
  readTime: string
  heroImage: string
  summary: string
  sections: ReportajeSection[]
}

export const reportajes: Reportaje[] = [
  {
    slug: "los-cimientos-digitales",
    title: "Los cimientos digitales",
    subtitle: "Cómo América Latina sentó las bases de su transformación tecnológica",
    period: "2010–2014",
    author: "Equipo FOCOS",
    date: "15 febrero 2026",
    readTime: "10 min",
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80",
    summary:
      "En apenas cinco años, la región pasó de una conectividad incipiente a sentar las bases de una revolución digital que transformaría la vida de millones de personas.",
    sections: [
      {
        type: "text",
        content:
          "En marzo de 2010, cuando la CEPAL presentó en Santiago de Chile su Plan Regional de Banda Ancha, apenas el 23% de los hogares latinoamericanos tenía acceso a internet. La brecha digital no era solo un concepto académico: era una realidad cotidiana que separaba a millones de personas del acceso a la información, la educación y las oportunidades económicas.",
      },
      {
        type: "image",
        imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80",

        caption: "Los primeros centros de conectividad comunitaria en zonas rurales marcaron el inicio de la transformación.",
      },
      {
        type: "text",
        content:
          "El plan de la CEPAL no era simplemente un documento burocrático. Representaba el reconocimiento, por primera vez a nivel regional, de que la infraestructura digital era tan fundamental como las carreteras o los puertos. Los gobiernos de la región se comprometieron a invertir en fibra óptica, a regular los mercados de telecomunicaciones y a crear políticas de inclusión digital.",
      },
      {
        type: "pull-quote",
        content:
          "La conectividad no es un lujo, es un derecho fundamental que determina quién participa en la economía del siglo XXI y quién queda excluido.",
        caption: "Alicia Bárcena",
        role: "Secretaria Ejecutiva, CEPAL (2008-2022)",
      },
      {
        type: "text",
        content:
          "Para julio de 2012, la explosión de los smartphones había cambiado las reglas del juego. Con más de 340 millones de usuarios móviles en la región y una penetración que superaba el 15%, el teléfono inteligente se convirtió en la puerta de entrada a internet para comunidades que nunca habían tenido acceso a una computadora de escritorio.",
      },
      {
        type: "image",
        imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80",

        caption: "La penetración de smartphones en mercados emergentes superó todas las proyecciones iniciales.",
      },
      {
        type: "text",
        content:
          "El fenómeno del leapfrogging —saltar directamente de la ausencia de infraestructura fija a la conectividad móvil— fue particularmente notable en Centroamérica. En Guatemala, Honduras y Nicaragua, donde la cobertura de banda ancha fija apenas alcanzaba al 5% de la población, los teléfonos móviles se convirtieron en el principal medio de acceso a internet.",
      },
      {
        type: "text",
        content:
          "En noviembre de 2014, Colombia dio un paso histórico al promulgar la Ley 1581, la primera legislación integral de protección de datos personales en la región. Bogotá se convirtió en referente para un debate que apenas comenzaba: ¿cómo proteger la privacidad de los ciudadanos en un mundo cada vez más digitalizado? La ley estableció principios de consentimiento informado, finalidad y circulación restringida que luego servirían de modelo para otros países de la región.",
      },
      {
        type: "pull-quote",
        content:
          "Construimos los cimientos sin saber exactamente qué edificio levantaríamos. Pero sabíamos que sin esa base, América Latina quedaría fuera de la historia.",
        caption: "Hernán Galperin",
        role: "Investigador, Centro de Tecnología y Sociedad, Universidad de San Andrés",
      },
    ],
  },
  {
    slug: "la-era-del-movil",
    title: "La era del móvil",
    subtitle: "Cuando el smartphone se convirtió en la herramienta de inclusión financiera más poderosa de la región",
    period: "2015–2018",
    author: "Equipo FOCOS",
    date: "15 febrero 2026",
    readTime: "11 min",
    heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&q=80",
    summary:
      "El móvil dejó de ser un dispositivo de comunicación para convertirse en banco, oficina y ventana al mundo para cientos de millones de latinoamericanos.",
    sections: [
      {
        type: "text",
        content:
          "En febrero de 2015, un hito silencioso pero trascendental cambió la ecuación digital de América Latina: por primera vez, más del 60% del tráfico web en la región provenía de dispositivos móviles. El paradigma mobile-first no era ya una tendencia futurista sino una realidad consolidada que obligaba a empresas, gobiernos y organizaciones a repensar su presencia digital.",
      },
      {
        type: "image",
        imageUrl: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=1200&q=80",

        caption: "Mercados informales adoptaron pagos digitales a una velocidad que sorprendió a los analistas.",
      },
      {
        type: "text",
        content:
          "Pero la verdadera revolución no estaba en los navegadores web. En agosto de 2016, desde São Paulo, una startup llamada Nubank alcanzó su primer millón de usuarios, desafiando el oligopolio bancario más concentrado del continente. Su propuesta era tan simple como radical: un banco sin sucursales, sin filas, sin letra pequeña. Todo desde el teléfono.",
      },
      {
        type: "pull-quote",
        content:
          "Nubank no solo cambió la banca en Brasil. Demostró que la tecnología podía democratizar servicios que durante décadas fueron privilegio de las élites.",
        caption: "David Vélez",
        role: "Fundador y CEO, Nubank",
      },
      {
        type: "text",
        content:
          "El efecto Nubank fue contagioso. En México surgió Clip y Konfío; en Argentina, Ualá y Mercado Pago expandían sus servicios; en Colombia, Nequi transformaba la relación de los jóvenes con el dinero. El fintech latinoamericano atrajo más de $5 mil millones en inversión entre 2015 y 2018, convirtiendo a la región en el mercado fintech de más rápido crecimiento en el mundo emergente.",
      },
      {
        type: "image",
        imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80",

        caption: "Las redes 4G transformaron la conectividad urbana y abrieron paso al streaming y los servicios en la nube.",
      },
      {
        type: "text",
        content:
          "El despliegue masivo de redes 4G hacia diciembre de 2018 fue el catalizador final de este período. Con cobertura que alcanzaba al 70% de la población urbana, la velocidad de conexión ya no era un obstáculo para servicios más sofisticados. El streaming de video, el comercio electrónico en tiempo real y las aplicaciones de transporte como Uber, Didi y Rappi transformaron la vida cotidiana de las ciudades latinoamericanas.",
      },
      {
        type: "text",
        content:
          "Sin embargo, la era del móvil también profundizó brechas existentes. La división entre zonas urbanas y rurales se amplió: mientras las grandes ciudades disfrutaban de 4G, comunidades indígenas y campesinas seguían sin cobertura básica. La promesa de inclusión digital chocaba con la realidad de un continente profundamente desigual.",
      },
      {
        type: "pull-quote",
        content:
          "Cada vez que celebrábamos un nuevo récord de conectividad urbana, debíamos recordar que millones de personas en zonas rurales seguían esperando una señal que nunca llegaba.",
        caption: "Marta García",
        role: "Directora, Programa de Conectividad Rural, BID",
      },
    ],
  },
  {
    slug: "pandemia-y-aceleracion",
    title: "Pandemia y aceleración",
    subtitle: "Cómo un virus comprimió una década de transformación digital en apenas dos años",
    period: "2019–2021",
    author: "Equipo FOCOS",
    date: "15 febrero 2026",
    readTime: "12 min",
    heroImage: "https://images.unsplash.com/photo-1584931423298-c576fda54bd2?w=1920&q=80",
    summary:
      "La pandemia de COVID-19 no creó la transformación digital de América Latina, pero la aceleró de manera brutal, exponiendo tanto el potencial como las fracturas de un continente en transición.",
    sections: [
      {
        type: "text",
        content:
          "En octubre de 2019, antes de que el mundo conociera la palabra coronavirus, el comercio electrónico en América Latina superó por primera vez los $100 mil millones en ventas anuales. Mercado Libre, la empresa fundada en un garaje de Buenos Aires en 1999, se había convertido en el gigante indiscutido del e-commerce regional, con operaciones en 18 países y una capitalización bursátil que superaba a la de cualquier banco latinoamericano.",
      },
      {
        type: "image",
        imageUrl: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=1200&q=80",

        caption: "150 millones de estudiantes pasaron de las aulas físicas a las pantallas en cuestión de semanas.",
      },
      {
        type: "text",
        content:
          "Luego llegó marzo de 2020. En cuestión de semanas, 150 millones de estudiantes en América Latina y el Caribe fueron enviados a casa. Las escuelas cerraron, las oficinas se vaciaron, y el tejido social de un continente acostumbrado al contacto físico se desgarró de la noche a la mañana. La digitalización dejó de ser una opción para convertirse en una necesidad de supervivencia.",
      },
      {
        type: "pull-quote",
        content:
          "La pandemia comprimió una década de transformación digital en apenas dos años. Lo que habría tomado hasta 2030 sucedió antes de 2022.",
        caption: "Dra. Ana Martínez",
        role: "Directora, Observatorio Digital CEPAL",
      },
      {
        type: "text",
        content:
          "La educación virtual reveló la magnitud de la brecha digital con una crueldad sin precedentes. Mientras estudiantes de clase media alta en Santiago o Ciudad de México se conectaban a Zoom desde laptops con banda ancha, niños en comunidades rurales de Honduras o Bolivia caminaban kilómetros para encontrar una señal de celular. En algunos países, menos del 30% de los hogares con niños en edad escolar tenía acceso a internet.",
      },
      {
        type: "image",
        imageUrl: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=1200&q=80",

        caption: "El trabajo remoto pasó de ser una excepción a convertirse en la norma para el 35% de los trabajadores formales.",
      },
      {
        type: "text",
        content:
          "Para junio de 2021, el trabajo remoto se había consolidado como una realidad permanente. El 35% de los trabajadores formales en la región operaba en esquemas híbridos o completamente remotos, una cifra que antes de la pandemia no superaba el 3%. Las empresas de tecnología, servicios financieros y consultoría lideraron la transición, pero incluso sectores tradicionalmente presenciales como la manufactura adoptaron herramientas digitales para la coordinación y gestión.",
      },
      {
        type: "text",
        content:
          "El boom del e-commerce durante la pandemia fue extraordinario. Las ventas en línea crecieron un 36% solo en 2020, y categorías como alimentos y medicamentos —que antes tenían una presencia digital marginal— experimentaron crecimientos de tres dígitos. Rappi, iFood y otros servicios de delivery se convirtieron en infraestructura esencial, creando al mismo tiempo millones de empleos precarios en la gig economy.",
      },
      {
        type: "pull-quote",
        content:
          "No fue una transformación digital. Fue una migración forzada. Y como toda migración forzada, dejó atrás a los más vulnerables.",
        caption: "Carlos Slim Domit",
        role: "Presidente, Grupo Carso",
      },
      {
        type: "text",
        content:
          "La pandemia también aceleró la digitalización de los servicios gubernamentales. Trámites que durante décadas requirieron presencia física —desde la obtención de cédulas hasta el registro de empresas— migraron a plataformas digitales en tiempo récord. Uruguay, Chile y Brasil lideraron esta transición, pero la calidad y accesibilidad de los servicios digitales gubernamentales varió enormemente entre países.",
      },
    ],
  },
  {
    slug: "ia-y-futuro",
    title: "IA y futuro",
    subtitle: "El amanecer de la inteligencia artificial en un continente que busca no quedarse atrás",
    period: "2022–2025",
    author: "Equipo FOCOS",
    date: "15 febrero 2026",
    readTime: "11 min",
    heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&q=80",
    summary:
      "La llegada de la inteligencia artificial generativa plantea la pregunta más urgente de la transformación digital: ¿será América Latina consumidora o creadora de la tecnología que definirá el siglo XXI?",
    sections: [
      {
        type: "text",
        content:
          "En abril de 2022, cuando las primeras redes 5G comerciales comenzaron a operar en São Paulo y Santiago, pocos imaginaban que la tecnología que verdaderamente sacudiría al continente no vendría de las torres de telecomunicaciones sino de los laboratorios de inteligencia artificial en San Francisco. La velocidad prometida del 5G —hasta 500 Mbps en promedio— era impresionante, pero la revolución que se avecinaba haría que la mera velocidad de conexión pareciera un tema menor.",
      },
      {
        type: "image",
        imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80",

        caption: "La inteligencia artificial generativa llegó a América Latina con una velocidad de adopción sin precedentes.",
      },
      {
        type: "text",
        content:
          "En marzo de 2023, apenas cuatro meses después de su lanzamiento global, ChatGPT ya era utilizado por el 45% de las empresas medianas y grandes en América Latina, según un estudio del BID. La velocidad de adopción superó incluso la de los smartphones una década antes. Pero esta vez, la adopción no se limitó a los consumidores: las empresas latinoamericanas comenzaron a integrar IA generativa en sus procesos de atención al cliente, producción de contenido, análisis de datos y toma de decisiones.",
      },
      {
        type: "pull-quote",
        content:
          "La inteligencia artificial no pregunta si estamos listos. Simplemente llega. Y los países que no se preparen quedarán en el lado equivocado de la historia.",
        caption: "Gustavo Parés",
        role: "CEO, NDS Cognitive Labs, México",
      },
      {
        type: "text",
        content:
          "El impacto en el mercado laboral fue inmediato y profundo. Los centros de atención al cliente, que empleaban a cientos de miles de personas en países como Colombia, Guatemala y El Salvador, comenzaron a reducir personal a medida que los chatbots con IA generativa asumían funciones que antes requerían operadores humanos. Al mismo tiempo, surgió una demanda explosiva de nuevos perfiles profesionales: ingenieros de prompts, especialistas en ética de IA, y analistas de datos con capacidades de machine learning.",
      },
      {
        type: "image",
        imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80",

        caption: "Hubs tecnológicos en Ciudad de México, São Paulo y Bogotá lideran el desarrollo de soluciones de IA para la región.",
      },
      {
        type: "text",
        content:
          "En enero de 2025, representantes de 15 países latinoamericanos se reunieron en Ciudad de México para firmar el primer Marco Regulatorio Regional de Inteligencia Artificial. El acuerdo, resultado de dos años de negociaciones, estableció principios comunes para la transparencia algorítmica, la protección contra sesgos automatizados y la responsabilidad en el uso de sistemas de IA en decisiones que afectan a los ciudadanos.",
      },
      {
        type: "text",
        content:
          "El marco regulatorio fue celebrado como un hito, pero también generó debate. ¿Era suficientemente estricto para proteger a los ciudadanos? ¿O demasiado restrictivo para permitir la innovación? Mientras la Unión Europea había optado por una regulación exhaustiva con su AI Act, y Estados Unidos por un enfoque más permisivo, América Latina intentaba encontrar un camino intermedio que equilibrara protección e innovación.",
      },
      {
        type: "pull-quote",
        content:
          "El verdadero riesgo no es la inteligencia artificial. Es la estupidez natural de creer que podemos ignorarla y seguir como si nada hubiera cambiado.",
        caption: "Ricardo Baeza-Yates",
        role: "Director, Institute for Experiential AI, Northeastern University",
      },
      {
        type: "text",
        content:
          "Al cierre de 2025, América Latina se encuentra en una encrucijada. Con el 78% de su población conectada a internet, 520 millones de usuarios de smartphones, un mercado de e-commerce de $280 mil millones y una adopción de IA del 45% en el sector empresarial, la región ha recorrido un camino extraordinario en apenas quince años. Pero los desafíos pendientes son igualmente extraordinarios: la brecha rural-urbana persiste, la economía de plataformas precariza el trabajo, y la concentración de poder en manos de unas pocas empresas tecnológicas globales plantea preguntas fundamentales sobre soberanía digital y desarrollo autónomo.",
      },
    ],
  },
]

export function getReportajeBySlug(slug: string): Reportaje | undefined {
  return reportajes.find((r) => r.slug === slug)
}

export function getAllSlugs(): string[] {
  return reportajes.map((r) => r.slug)
}
