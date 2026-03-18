export default function Page() {
  const services = [
    "Plantas de tratamiento de agua",
    "Osmosis inversa",
    "Membranas de osmosis inversa",
    "Valvulas automaticas de filtracion",
    "Medios filtrantes",
    "Lineas de filtracion critica",
    "Sistemas de mezcla",
    "Tuberias para procesos",
    "Consultoria de desempeno",
    "Conectores rapidos",
  ];

  const sectors = ["Salud", "Alimentos y bebidas", "Farmaceutico", "Industria"];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="bg-gradient-to-br from-slate-900 via-sky-900 to-teal-700 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm">
              COREX SYSTEMS
            </div>
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Medimos, filtramos y energizamos el futuro
            </h1>
            <p className="mt-6 text-lg text-slate-100 md:text-xl">
              Soluciones de agua para industrias donde la calidad es critica.
              Ingenieria, fabricacion, montaje, instrumentacion, control,
              mantenimiento y suministro tecnico especializado.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/573148835602?text=Hola%20Corex%20Systems,%20quiero%20una%20cotizacion."
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-teal-400 px-6 py-3 font-semibold text-slate-900 transition hover:bg-teal-300"
              >
                Cotizar por WhatsApp
              </a>
              <a
                href="mailto:Corexcolombia@gmail.com"
                className="rounded-full border border-white/30 px-6 py-3 font-semibold transition hover:bg-white/10"
              >
                Escribir al correo
              </a>
            </div>

            <div className="mt-8 grid gap-3 text-sm sm:grid-cols-3">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
                <div className="font-semibold">Correo</div>
                <div className="mt-1 text-slate-100">Corexcolombia@gmail.com</div>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
                <div className="font-semibold">WhatsApp</div>
                <div className="mt-1 text-slate-100">+57 314 883 5602</div>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
                <div className="font-semibold">Ciudad</div>
                <div className="mt-1 text-slate-100">Medellin, Colombia</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">Por que Corex</h2>
            <p className="mt-4 text-slate-600">
              Corex Systems desarrolla y opera soluciones para captacion,
              tratamiento y adecuacion de agua para usos industriales,
              comerciales y especiales, con integracion de tecnologia,
              instrumentacion, control y monitoreo.
            </p>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li>- Estrategia de calidad del agua orientada a resultados del proceso.</li>
              <li>- Integracion de instrumentacion, control y monitoreo.</li>
              <li>- Disponibilidad de componentes criticos y repuestos.</li>
              <li>- Mantenimiento programado y soporte tecnico continuo.</li>
              <li>- Proyectos llave en mano: diseno, fabricacion, instalacion y optimizacion.</li>
            </ul>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-2xl font-semibold">Sectores que atendemos</h3>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {sectors.map((sector) => (
                <div
                  key={sector}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center font-medium"
                >
                  {sector}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold">Productos y servicios</h2>
          <p className="mt-4 max-w-3xl text-slate-600">
            Diseno + fabricacion + instalacion + mantenimiento + suministro tecnico especializado.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl bg-slate-900 px-8 py-12 text-white">
          <h2 className="text-3xl font-bold">Hablemos de tu proyecto</h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            Cotizacion rapida, diagnostico tecnico y suministro de repuestos criticos.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://wa.me/573148835602?text=Hola%20Corex%20Systems,%20quiero%20una%20cotizacion."
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-teal-400 px-6 py-3 font-semibold text-slate-900 transition hover:bg-teal-300"
            >
              WhatsApp
            </a>
            <a
              href="mailto:Corexcolombia@gmail.com"
              className="rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:bg-white/10"
            >
              Corexcolombia@gmail.com
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-slate-600">
          <div className="font-semibold text-slate-900">Corex Systems S.A.S.</div>
          <div className="mt-1">Medellin, Colombia</div>
          <div className="mt-1">Corexcolombia@gmail.com | +57 314 883 5602</div>
        </div>
      </footer>
    </main>
  );
}
