import Image from "next/image";
import { LogoLinkedin } from "@gravity-ui/icons";
import { Card, Link } from "@heroui/react";
import type { Dictionary } from "@/i18n";

type Props = {
  t: Dictionary;
};

export function IntroSection({ t }: Props) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <div className="lg:col-span-8 flex gap-6 items-start">
        <div className="shrink-0">
          <div className="inline-flex rounded-full shadow-[0_0_0_4px_rgba(148,163,184,0.15)]">
            <div className="relative h-32 w-32 rounded-full overflow-hidden">
              <Image
                src="/images/photo.jpg"
                alt="Anton Liakhovskii"
                fill
                priority
                className="object-cover scale-[1.6]"
                style={{ objectPosition: "center -170%" }}
                sizes="128px"
              />
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
            {t.home.kicker}
          </p>

          <h1 className="mt-1 text-4xl font-bold leading-tight">{t.home.title}</h1>

          <p className="mt-3 text-lg text-gray-600 max-w-2xl">{t.home.subtitle}</p>

          <p className="mt-2 text-base text-gray-600 max-w-2xl">{t.home.description}</p>

          <div className="mt-4">
            <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
              {t.home.specialties.title}
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {t.home.specialties.items.map((specialty) => (
                <li
                  key={specialty}
                  className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm text-gray-700"
                >
                  {specialty}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <aside className="lg:col-span-4">
        <Card className="w-full">
          <Card.Header className="flex items-start gap-3">
            <LogoLinkedin className="text-primary size-6" />
            <div>
              <Card.Title>{t.home.linkedin.title}</Card.Title>
              <Card.Description>{t.home.linkedin.description}</Card.Description>
            </div>
          </Card.Header>

          <Card.Footer>
            <Link
              href="https://www.linkedin.com/in/antonliakhovskii/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.home.linkedin.cta}
              <Link.Icon aria-hidden />
            </Link>
          </Card.Footer>
        </Card>
      </aside>
    </section>
  );
}
