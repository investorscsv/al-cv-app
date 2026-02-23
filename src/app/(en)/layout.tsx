import { Header } from "@/components/header/Header";
import { containerClass } from "@/components/Container";

export default function EnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header locale="en" />
      <main className={`${containerClass} py-12`}>
        {children}
      </main>
    </>
  );
}
