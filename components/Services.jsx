import { SERVICES } from '../lib/data';

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 pb-20">
      <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-blue-700">What we do</p>
      <h2 className="te-serif mt-3 max-w-2xl text-3xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
        Two disciplines. <span className="font-bold italic text-blue-700">One outcome.</span>
      </h2>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {SERVICES.map((service) => (
          <article
            key={service.index}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-8 transition-all hover:border-blue-400"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-blue-700">
              [ {service.index} / {service.title} ]
            </p>
            <h3 className="te-serif mt-5 text-2xl font-extrabold leading-snug text-slate-900 sm:text-3xl">
              {service.title}.
            </h3>
            <p className="mt-4 text-base leading-relaxed text-slate-700">{service.body}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {service.points.map((point) => (
                <li
                  key={point}
                  className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-700"
                >
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
