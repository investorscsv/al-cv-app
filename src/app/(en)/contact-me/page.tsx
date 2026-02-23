import { getDictionary } from "@/i18n";
import { ContactSection } from "@/components/contact/ContactSection";

export default function ContactMeEN() {
  const t = getDictionary("en");

  return (
    <main className="p-8">
      <ContactSection t={t} />
    </main>
  );
}
