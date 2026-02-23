import { CASES_META } from "./cases.meta";
import { CaseCard } from "./CaseCard";
import type { Dictionary } from "@/i18n";

type Props = {
  t: Dictionary;
};

export function CasesList({ t }: Props) {
  const items = t.cases.items;

  return (
    <div className="space-y-6">
      {CASES_META.map((meta) => {
        const data = items[meta.id];
        if (!data) return null;

        return <CaseCard key={meta.id} meta={meta} data={data} />;
      })}
    </div>
  );
}
