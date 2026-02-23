import { Header } from "@/components/header/Header";
import { containerClass } from "@/components/Container";

export default function UkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header locale="uk" />
      <main className={`${containerClass} py-12`}>
        {children}
      </main>
    </>
  );
}
