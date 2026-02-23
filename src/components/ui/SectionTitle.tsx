type Props = {
  title: string;
  subtitle?: string;
};

export function SectionTitle({ title, subtitle }: Props) {
  return (
    <header className="space-y-3">
      <div className="flex items-center gap-3">
        {/* dot */}
        <span className="block h-2 w-2 rounded-full
                         bg-slate-400
                         shadow-[0_0_0_3px_rgba(148,163,184,0.15)]" />

        <h2 className="text-4xl font-semibold tracking-tight text-slate-800">
          {title}
        </h2>
      </div>

      {subtitle && (
        <p className="max-w-2xl text-sm text-slate-500">
          {subtitle}
        </p>
      )}
    </header>
  );
}
