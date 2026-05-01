export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 px-6 pt-12 pb-10 bg-transparent isolate overflow-hidden">
      <div className="w-full max-w-4xl mx-auto h-px mb-8 bg-gradient-to-r from-transparent via-[rgba(181,222,247,0.25)] to-transparent" />

      <div className="flex flex-col items-center gap-3">
        <p className="m-0 text-[0.95rem] font-medium text-[rgba(220,230,245,0.7)] tracking-wide text-center">
          © {year}{" "}
          <span className="font-extrabold tracking-tight inline-flex items-center mx-1 select-none">
            <span className="text-[rgb(181,222,247)] drop-shadow-[0_0_12px_rgba(181,222,247,0.3)]">Gerald</span>
            <span className="text-[rgb(227,180,212)] drop-shadow-[0_0_12px_rgba(227,180,212,0.3)]">.Dev</span>
          </span>{" "}
          — All rights reserved.
        </p>
        <p className="m-0 text-[0.75rem] font-semibold tracking-[0.15em] uppercase text-[rgba(181,222,247,0.4)] text-center select-none">
          Diseñado y desarrollado en Argentina
        </p>
      </div>
    </footer>
  );
}