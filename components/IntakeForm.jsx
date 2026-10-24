'use client';

import { useState } from 'react';
import { INITIAL_FORM } from '../lib/data';

export default function IntakeForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setForm(INITIAL_FORM);
  };

  const inputClass =
    'w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-[15px] text-slate-800 placeholder-slate-400 transition-colors focus:border-blue-700';

  const labelClass = 'mb-2 block text-[11px] font-bold uppercase tracking-[0.25em] text-blue-700';

  return (
    <section id="inquire" className="border-t border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-blue-700">Intake</p>
        <h2 className="te-serif mt-3 text-3xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
          Want sales? <span className="font-bold italic text-blue-700">Let&rsquo;s work.</span>
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-700">
          Tell us about your brand. We take on a limited number of clients each month and reply to every application.
        </p>

        {submitted ? (
          <div
            className="mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-8"
            role="status"
            aria-live="polite"
          >
            <h3 className="te-serif text-2xl font-extrabold text-slate-900">Application received.</h3>
            <p className="mt-3 text-base leading-relaxed text-slate-700">
              Thanks for reaching out. For the fastest reply, send us a quick message on Instagram at @the_encoded_.
            </p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-6 rounded-full border border-blue-700 px-6 py-2.5 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-700 hover:text-white"
            >
              Submit another application
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-10 grid gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
          >
            <div>
              <label htmlFor="brand" className={labelClass}>Brand Name</label>
              <input
                id="brand"
                name="brand"
                type="text"
                required
                value={form.brand}
                onChange={handleChange}
                placeholder="Your brand"
                className={inputClass}
                autoComplete="organization"
              />
            </div>

            <div>
              <label htmlFor="contact" className={labelClass}>Instagram Handle / Website</label>
              <input
                id="contact"
                name="contact"
                type="text"
                required
                value={form.contact}
                onChange={handleChange}
                placeholder="@yourbrand or yourbrand.com"
                className={inputClass}
              />
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="service" className={labelClass}>Service</label>
                <select
                  id="service"
                  name="service"
                  required
                  value={form.service}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="" disabled>Select a service</option>
                  <option value="video-editing">Video Editing & Retention Engineering</option>
                  <option value="digital-marketing">Performance Digital Marketing</option>
                  <option value="both">Both services</option>
                </select>
              </div>

              <div>
                <label htmlFor="budget" className={labelClass}>Target Budget</label>
                <select
                  id="budget"
                  name="budget"
                  required
                  value={form.budget}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="" disabled>Select a budget tier</option>
                  <option value="starter">Starter</option>
                  <option value="growth">Growth</option>
                  <option value="scale">Scale</option>
                  <option value="enterprise">Enterprise</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="rounded-full bg-blue-700 px-8 py-4 text-sm font-semibold text-white shadow-md transition-colors hover:bg-blue-800"
            >
              Submit Application &rarr;
            </button>
          </form>
        )}

        <a
          href="https://www.instagram.com/the_encoded_"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex items-center justify-center rounded-full border border-slate-200 px-6 py-4 text-center text-sm font-semibold text-slate-900 transition-colors hover:border-blue-700 hover:text-blue-700"
        >
          Or DM us directly on Instagram @the_encoded_
        </a>
      </div>
    </section>
  );
}
