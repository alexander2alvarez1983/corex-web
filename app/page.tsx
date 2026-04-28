export default function Page() {
  const services = [
    { title: "Plantas de tratamiento de agua", img: "/Plantas.jpg" },
    { title: "Osmosis inversa", img: "/osmosis.jpg" },
    { title: "Medios filtrantes", img: "/Medios Filtrantes.jpg" },
    { title: "Valvulas automaticas de filtracion", img: "/Valvulas.jpg" },
    { title: "Lineas de filtracion critica", img: "/salud.jpg" },
    { title: "Tuberias para procesos", img: "/industria.jpg" },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-sky-950 to-teal-800 text-white">
        <div className="absolute inset-0 opacity-20">
          <img src="/corex.jpg" alt="Corex Systems" className="h-full w-full object-cover" />
        </div>

        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <div className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm">
              COREX SYSTEMS S.A.S.
            </div>

            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Medimos, filtramos y energizamos el futuro
            </h1>

            <p className="mt-6 text-lg text-slate-100">
              Soluciones integrales de tratamiento de agua, osmosis inversa,
              filtracion critica, instrumentacion, control y soporte tecnico
              para salud, alimentos, bebidas, industria y farmaceutico.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/573148835602?text=Hola%20Corex%20Systems,%20quiero%20una%20cotizacion."
                target="_blank"
                className="rounded-full bg-teal-400 px-7 py-3 font-bold text-slate-950 shadow-lg transition hover:bg-teal-300"
              >
                Cotizar por WhatsApp
              </a>

              <a
                href="mailto:ventas@corexsystem.com.co"
                className="rounded-full border border-white/30 px-7 py-3 font-bold transition hover:bg-white/10"
              >
                ventas@corexsystem.com.co
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur">
           <img
  src="/corex.jpg"
  alt="Corex Systems - soluciones integrales de tratamiento de agua"
  className="h-auto w-full rounded-[1.5rem] object-contain"
/>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-4">
          {["Salud", "Alimentos y bebidas", "Farmaceutico", "Industria"].map((item) => (
            <div key={item} className="rounded-3xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-200">
              <h3 className="font-bold text-slate-900">{item}</h3>
              <p className="mt-2 text-sm text-slate-600">Procesos donde la calidad del agua es critica.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold">Productos y servicios</h2>
          <p className="mt-4 max-w-3xl text-slate-600">
            Diseno, fabricacion, instalacion, mantenimiento y suministro tecnico especializado.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="overflow-hidden rounded-3xl bg-slate-50 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <img src={service.img} alt={service.title} className="h-48 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-lg font-bold">{service.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Soluciones tecnicas para continuidad, control, trazabilidad y eficiencia operativa.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-bold">Por que Corex</h2>
            <p className="mt-4 text-slate-600">
              Integramos tecnologia, instrumentacion, repuestos, consumibles y soporte tecnico
              para reducir paradas, mejorar la calidad del agua y proteger procesos criticos.
            </p>

            <ul className="mt-6 space-y-3 text-slate-700">
              <li>- Proyectos llave en mano.</li>
              <li>- Mantenimiento programado y soporte tecnico.</li>
              <li>- Instrumentacion, control y monitoreo.</li>
              <li>- Componentes criticos disponibles.</li>
            </ul>
          </div>

          <img src="/Ingenieria.jpg" alt="Infraestructura industrial Corex" className="rounded-3xl shadow-xl" />
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-16 text-white">
        <div className="mx-auto max-w-6xl rounded-3xl bg-gradient-to-r from-sky-900 to-teal-700 p-10 shadow-2xl">
          <h2 className="text-3xl font-bold">Hablemos de tu proyecto</h2>
          <p className="mt-4 max-w-2xl text-slate-100">
            Cotizacion rapida, diagnostico tecnico y suministro de repuestos criticos.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://wa.me/573148835602?text=Hola%20Corex%20Systems,%20quiero%20una%20cotizacion."
              target="_blank"
              className="rounded-full bg-teal-300 px-7 py-3 font-bold text-slate-950"
            >
              WhatsApp
            </a>

            <a
              href="mailto:ventas@corexsystem.com.co"
              className="rounded-full border border-white/30 px-7 py-3 font-bold"
            >
              ventas@corexsystem.com.co
            </a>
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/573148835602?text=Hola%20Corex%20Systems,%20quiero%20una%20cotizacion."
        target="_blank"
        className="fixed bottom-6 right-6 z-50 rounded-full bg-teal-400 px-5 py-4 font-bold text-slate-950 shadow-2xl transition hover:bg-teal-300"
      >
        WhatsApp
      </a>

      <footer className="border-t bg-white px-6 py-8 text-sm text-slate-600">
        <div className="mx-auto max-w-6xl">
          <div className="font-bold text-slate-900">Corex Systems S.A.S.</div>
          <div>Medellin, Colombia</div>
          <div>ventas@corexsystem.com.co | +57 314 883 5602</div>
        </div>
      </footer>
    </main>
  );
}