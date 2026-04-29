export default function Page() {
  const services = [
    {
      title: "Plantas de tratamiento de agua",
      img: "/plantas.jpg",
      desc: "Diseño, fabricación, instalación y puesta en marcha de soluciones a medida.",
    },
    {
      title: "Ósmosis inversa",
      img: "/osmosis.jpg",
      desc: "Sistemas de alta eficiencia para agua de proceso, salud e industria.",
    },
    {
      title: "Medios filtrantes",
      img: "/medios.jpg",
      desc: "Arena, antracita, carbón activado y soluciones para control de calidad.",
    },
    {
      title: "Válvulas automáticas",
      img: "/valvulas.jpg",
      desc: "Control de ciclos, retrolavados, operación automática y repuestos.",
    },
    {
      title: "Filtración crítica",
      img: "/salud.jpg",
      desc: "Soluciones para bacterias, partículas, endotoxinas y procesos sensibles.",
    },
    {
      title: "Tuberías para procesos",
      img: "/industria.jpg",
      desc: "Infraestructura hidráulica para agua tratada, redes industriales y distribución.",
    },
  ];

  const sectors = [
    "Salud",
    "Alimentos y bebidas",
    "Farmacéutico",
    "Industria",
  ];

  const benefits = [
    "Ingeniería para procesos donde fallar no es una opción.",
    "Integración de instrumentación, control y monitoreo.",
    "Suministro de componentes críticos y repuestos.",
    "Mantenimiento programado y soporte técnico continuo.",
    "Soluciones llave en mano: diseño, fabricación, instalación y optimización.",
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <img
            src="/corex.jpg"
            alt="Corex Systems tratamiento de agua"
            className="h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/90 to-teal-900/80" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
          <div>
            <div className="mb-5 inline-flex rounded-full border border-teal-300/30 bg-white/10 px-4 py-1 text-sm font-semibold text-teal-100 backdrop-blur">
              COREX SYSTEMS S.A.S.
            </div>

<h1 className="text-4xl font-black tracking-tight md:text-6xl">
  Ingeniería de alta confiabilidad para procesos críticos
</h1>

<p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100 md:text-xl">
  Soluciones integrales de tratamiento de agua, ósmosis inversa y control
  para sectores donde la continuidad operativa es vital.
</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/573148835602?text=Hola%20Corex%20Systems,%20quiero%20una%20cotizacion."
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-teal-300 px-8 py-4 text-center font-bold text-slate-950 shadow-xl transition hover:bg-teal-200"
              >
                Solicitar cotización
              </a>

              <a
                href="mailto:ventas@corexsystem.com.co"
                className="rounded-full border border-white/30 px-8 py-4 text-center font-bold text-white transition hover:bg-white/10"
              >
                ventas@corexsystem.com.co
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                <div className="text-2xl font-black">+15</div>
                <div className="text-sm text-slate-200">años de experiencia técnica</div>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                <div className="text-2xl font-black">24/7</div>
                <div className="text-sm text-slate-200">enfoque en continuidad</div>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                <div className="text-2xl font-black">360°</div>
                <div className="text-sm text-slate-200">solución integral</div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur">
            <img
              src="/corex.jpg"
              alt="Corex Systems soluciones integrales"
              className="h-auto w-full rounded-[1.5rem] object-contain"
            />
          </div>
        </div>
      </section>

      {/* SECTORES */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 max-w-3xl">
          <h2 className="text-3xl font-black md:text-4xl">
            Soluciones para sectores críticos
          </h2>
          <p className="mt-4 text-slate-600">
            Acompañamos procesos donde la calidad del agua, la trazabilidad y
            la continuidad operativa son esenciales.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-4">
          {sectors.map((sector) => (
            <div
              key={sector}
              className="rounded-3xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="font-black text-slate-900">{sector}</h3>
              <p className="mt-2 text-sm text-slate-600">
                Agua, control y soporte para operación segura.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-10 max-w-3xl">
            <h2 className="text-3xl font-black md:text-4xl">
              Productos y servicios Corex
            </h2>
            <p className="mt-4 text-slate-600">
              Diseño, fabricación, instalación, mantenimiento y suministro
              técnico especializado para sistemas de agua críticos.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group overflow-hidden rounded-3xl bg-slate-50 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUE COREX */}
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
        <div>
          <div className="mb-4 inline-flex rounded-full bg-teal-100 px-4 py-1 text-sm font-bold text-teal-800">
            Por qué elegir Corex
          </div>

          <h2 className="text-3xl font-black md:text-4xl">
            Ingeniería, control y soporte para proteger tu operación
          </h2>

          <p className="mt-5 text-slate-600">
            Integramos tecnología, instrumentación, repuestos, consumibles y
            soporte técnico para reducir paradas, mejorar la calidad del agua y
            garantizar continuidad en procesos exigentes.
          </p>

          <ul className="mt-7 space-y-4">
            {benefits.map((item) => (
              <li key={item} className="flex gap-3 text-slate-700">
                <span className="mt-1 h-3 w-3 rounded-full bg-teal-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[2rem] bg-white p-3 shadow-2xl ring-1 ring-slate-200">
          <img
            src="/ingenieria.jpg"
            alt="Ingeniería Corex"
            className="rounded-[1.5rem] object-cover shadow-lg"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-gradient-to-r from-sky-900 to-teal-700 p-10 shadow-2xl md:p-14">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-black md:text-4xl">
                Hablemos de tu proyecto
              </h2>
              <p className="mt-4 max-w-2xl text-slate-100">
                Cotización rápida, diagnóstico técnico y suministro de repuestos
                críticos para sistemas de tratamiento de agua.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row md:justify-end">
              <a
                href="https://wa.me/573148835602?text=Hola%20Corex%20Systems,%20quiero%20una%20cotizacion."
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-teal-300 px-8 py-4 text-center font-black text-slate-950 transition hover:bg-teal-200"
              >
                WhatsApp
              </a>

              <a
                href="mailto:ventas@corexsystem.com.co"
                className="rounded-full border border-white/30 px-8 py-4 text-center font-black text-white transition hover:bg-white/10"
              >
                Enviar correo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BOTON FLOTANTE */}
      <a
        href="https://wa.me/573148835602?text=Hola%20Corex%20Systems,%20quiero%20una%20cotizacion."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 rounded-full bg-teal-400 px-6 py-4 font-black text-slate-950 shadow-2xl transition hover:bg-teal-300"
      >
        WhatsApp
      </a>

      {/* FOOTER */}
      <footer className="border-t bg-white px-6 py-10 text-sm text-slate-600">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 md:flex-row">
          <div>
            <div className="text-lg font-black text-slate-900">
              Corex Systems S.A.S.
            </div>
            <div className="mt-1">Medellín, Colombia</div>
          </div>

          <div className="md:text-right">
            <div>ventas@corexsystem.com.co</div>
            <div>+57 314 883 5602</div>
            <div className="mt-1 text-slate-500">
              Medimos, filtramos y energizamos el futuro.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}