interface PanelProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export default function Panel({
  children,
  id,
  className = "",
}: PanelProps) {
  return (
    <section
      id={id}
      className={`h-screen w-screen shrink-0 snap-start overflow-y-auto ${className}`}
    >
      {children}
    </section>
  );
}