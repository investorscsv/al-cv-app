import Image from "next/image";
import { LogoLinkedin, Envelope } from "@gravity-ui/icons";
import { Card, Link } from "@heroui/react";

type Props = {
  t: any;
};

export function ContactSection({ t }: Props) {
  return (
    <section className="max-w-3xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
        {/* Photo */}
        <div className="shrink-0">
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden relative">
            <Image
              src="/images/photo.jpg"
              alt="Anton Liakhovskii"
              fill
              priority
              className="object-cover object-center scale-125"
              sizes="128px"
            />
          </div>
        </div>

        {/* Text */}
        <div>
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
            {t.contact.kicker}
          </p>

          <h1 className="mt-1 text-3xl sm:text-4xl font-bold leading-tight">
            {t.contact.title}
          </h1>

          <p className="mt-3 text-base sm:text-lg text-gray-600">
            {t.contact.subtitle}
          </p>

          {/* Email */}
          <div className="mt-4 flex items-center gap-2 text-sm">
            <Envelope className="size-4 text-gray-500" />
            <Link href="mailto:antonliakhovskii@gmail.com">
              antonliakhovskii@gmail.com
            </Link>
          </div>
        </div>
      </div>

      {/* LinkedIn Card */}
      <Card className="w-full">
        <Card.Header className="flex items-start gap-3">
          <LogoLinkedin className="text-primary size-6" />
          <div>
            <Card.Title>{t.contact.linkedin.title}</Card.Title>
            <Card.Description>
              {t.contact.linkedin.description}
            </Card.Description>
          </div>
        </Card.Header>

        <Card.Footer>
          <Link
            href="https://www.linkedin.com/in/antonliakhovskii/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.contact.linkedin.cta}
            <Link.Icon aria-hidden />
          </Link>
        </Card.Footer>
      </Card>
    </section>
  );
}
