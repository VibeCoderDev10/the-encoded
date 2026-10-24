import LogoBadge from './LogoBadge';

export default function Footer() {
  return (
    <footer className="w-full bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        <LogoBadge size={56} />
        <p className="te-brand text-base sm:text-lg">
          The Encoded <span className="text-slate-500">|</span> <span className="te-serif font-bold tracking-normal">Digital Marketing | Video Editing</span>
        </p>
        <p className="te-quote text-lg text-slate-300">
          Rooted in Erode, Tamil Nadu &mdash; Scaling Brands Globally
        </p>
        <p className="text-xs text-slate-400">
          &copy; {new Date().getFullYear()} The Encoded. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
