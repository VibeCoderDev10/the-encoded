import { STATS } from '../lib/data';

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:py-28">
      <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.25em] text-blue-700">
        This month&rsquo;s client capacity: 2 spots left
      </span>

      <h1 className="te-serif mt-8 text-4xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">
        <span className="text-slate-900">Our videos =</span>{' '}
        <span className="font-bold italic text-blue-700">more sales.</span>
      </h1>

      <p className="mt-8 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">
        We edit retention-first video and run performance marketing for brands that want their content to pay for itself.
        Every hook, cut and campaign is built to hold attention and turn it into revenue you can measure.
      </p>

      <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
        <a
          href="#inquire"
          className="inline-flex items-center rounded-full bg-blue-700 px-8 py-4 text-sm font-semibold text-white shadow-md transition-colors hover:bg-blue-800"
        >
          Initiate Growth &rarr;
        </a>
        <a
          href="#showcase"
          className="text-sm font-semibold text-slate-900 underline decoration-blue-700 decoration-2 underline-offset-8 transition-colors hover:text-blue-700"
        >
          Explore Client Showcase &rarr;
        </a>
      </div>

      <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 lg:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="bg-slate-50 px-5 py-7 sm:px-7">
            <dt className="te-serif text-3xl font-extrabold text-slate-900 sm:text-4xl">{stat.value}</dt>
            <dd className="mt-2 text-[11px] font-bold uppercase leading-snug tracking-[0.25em] text-blue-700">
              {stat.label}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
