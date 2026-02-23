import { Card, Link, Avatar } from "@heroui/react";
import { ArrowUpRight } from "@gravity-ui/icons";
import { EDUCATION_INSTITUTIONS } from "./education.logos";
import type { DegreeDictionary } from "@/i18n/types";

type Props = {
  project: DegreeDictionary;
};

export function EducationSection({ project }: Props) {
  if (!project?.items?.length) return null;

  return (
    <section className="space-y-6">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {project.items.slice(0, 6).map((item) => {
          const institution = EDUCATION_INSTITUTIONS[item.institutionId];

          return (
            <Card
              key={item.id}
              className="h-full flex flex-col rounded-2xl transition-shadow hover:shadow-md"
            >
              <Card.Header className="flex items-start gap-4">
                <Avatar className="w-14 h-14 border border-black/10 bg-white flex items-center justify-center">
                  {institution?.logo ? (
                    <img src={institution.logo} alt={institution.name} className="w-12 h-12 object-contain" />
                  ) : (
                    <span className="text-xs font-medium">{institution?.name?.[0]}</span>
                  )}
                </Avatar>

                <div className="space-y-0.5">
                  <h3 className="font-semibold leading-tight">{institution?.name ?? item.institutionId}</h3>

                  <p className="text-sm text-gray-500">{item.course}</p>
                </div>
              </Card.Header>

              <Card.Content className="flex-1">
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </Card.Content>

              <Card.Footer className="flex items-center justify-between text-sm text-gray-500">
                <span>{item.endDate}</span>

                {institution?.url && (
                  <Link
                    href={institution.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 font-medium"
                  >
                    {item.link}
                    <ArrowUpRight className="size-4" />
                  </Link>
                )}
              </Card.Footer>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
