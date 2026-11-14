export default function SectionHeading({ index, label, title }) {
  return (
    <div className="mb-12 md:mb-16">
      <p className="mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-muted">
        <span className="text-accent">{index}</span>
        <span className="h-px w-8 bg-line" />
        {label}
      </p>
      {title && (
        <h2 className="max-w-2xl font-serif text-4xl leading-tight md:text-5xl">
          {title}
        </h2>
      )}
    </div>
  );
}
