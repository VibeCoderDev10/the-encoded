'use client';

import { useRef, useState } from 'react';
import { ArrowIcon } from './icons';
import ReelEmbed from './ReelEmbed';
import ProfileSlide from './ProfileSlide';
import { REEL_ITEMS, SLIDE_COUNT } from '../lib/data';

export default function ReelsShowcase() {
  const carouselRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);

  const scrollReels = (direction) => {
    const node = carouselRef.current;
    if (!node) return;
    const first = node.children[0];
    const step = first ? first.offsetWidth + 20 : 320;
    node.scrollBy({ left: direction * step, behavior: 'smooth' });
  };

  const goToReel = (index) => {
    const node = carouselRef.current;
    const target = node ? node.children[index] : null;
    if (!node || !target) return;
    node.scrollTo({ left: target.offsetLeft - node.offsetLeft, behavior: 'smooth' });
  };

  const handleCarouselScroll = () => {
    const node = carouselRef.current;
    if (!node) return;
    let best = 0;
    let bestDistance = Infinity;
    Array.from(node.children).forEach((child, index) => {
      const distance = Math.abs(child.offsetLeft - node.offsetLeft - node.scrollLeft);
      if (distance < bestDistance) {
        bestDistance = distance;
        best = index;
      }
    });
    setActiveDot(best);
  };

  return (
    <section id="showcase" className="border-t border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-blue-700">Client showcase</p>
            <h2 className="te-serif mt-3 text-3xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
              Reels that <span className="font-bold italic text-blue-700">convert</span>.
            </h2>
            <p className="mt-3 max-w-md text-base leading-relaxed text-slate-700">
              Swipe through our work and tap play on any reel.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollReels(-1)}
              aria-label="Scroll reels left"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 transition-colors hover:border-blue-700 hover:text-blue-700"
            >
              <ArrowIcon direction="left" />
            </button>
            <button
              type="button"
              onClick={() => scrollReels(1)}
              aria-label="Scroll reels right"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-700 text-white transition-colors hover:bg-blue-800"
            >
              <ArrowIcon direction="right" />
            </button>
          </div>
        </div>

        <div
          ref={carouselRef}
          onScroll={handleCarouselScroll}
          className="te-hide-scroll te-reel-track"
          role="region"
          aria-label="Client reels carousel"
          tabIndex={0}
        >
          {REEL_ITEMS.map((item, index) => (
            <ReelEmbed key={item.video} item={item} index={index} />
          ))}
          <ProfileSlide />
        </div>

        <div className="mt-4 flex items-center justify-center gap-2">
          {Array.from({ length: SLIDE_COUNT }, (unused, index) => (
            <button
              key={'dot-' + index}
              type="button"
              onClick={() => goToReel(index)}
              aria-label={index === SLIDE_COUNT - 1 ? 'Go to Instagram profile slide' : 'Go to reel ' + (index + 1)}
              aria-current={index === activeDot}
              className={'h-2 rounded-full transition-all ' + (index === activeDot ? 'w-7 bg-blue-700' : 'w-2 bg-slate-300 hover:bg-slate-400')}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
