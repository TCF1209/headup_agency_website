export function PageStub({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <main className="min-h-[70vh] bg-dark-primary pt-32">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <p className="mb-6 font-mono text-xs uppercase tracking-widest text-accent">
          {"// COMING SOON"}
        </p>
        <h1 className="max-w-4xl font-display text-5xl font-bold leading-[0.95] tracking-tight text-white md:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-offwhite">{subtitle}</p>
      </div>
    </main>
  );
}
