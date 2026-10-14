interface ListProps {
  children: React.ReactNode;
}

export default function List({ children }: ListProps) {
  return <div className="divide-y divide-slate-200">{children}</div>;
}