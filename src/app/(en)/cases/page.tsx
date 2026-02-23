import { getDictionary } from "@/i18n";
import { CasesList } from "@/components/cases/CasesList";

export default function CasesPageEN() {
  const t = getDictionary("en");

  return (
    <main className="p-8 space-y-6">
      <header>
        <h1 className="text-3xl font-bold">
          {t.cases.title}
        </h1>
        <p className="mt-2 text-gray-600">
          {t.cases.content}
        </p>
      </header>

      <CasesList t={t} />
    </main>
  );
}
