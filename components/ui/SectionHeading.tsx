interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <header>
      {eyebrow && (
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-blue-700">
          {eyebrow}
        </p>
      )}

      <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
        {title}
      </h2>

      {description && (
        <p className="mt-3 max-w-xl text-[15px] leading-7 text-slate-500">
          {description}
        </p>
      )}
    </header>
  );
}