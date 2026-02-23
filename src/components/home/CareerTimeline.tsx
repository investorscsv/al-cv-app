import { Card } from "@heroui/react";
import { Person } from "@gravity-ui/icons";
import { TIMELINE_COMPANIES, type TimelineCompany } from "./careerTimeline.logos";
import type { Dictionary } from "@/i18n";

function TimelineAvatars({ companies }: { companies?: TimelineCompany[] }) {
  if (!companies?.length) return null;

  return (
    <div className="absolute -top-10 flex gap-2">
      {companies.map((company, index) => (
        <div
          key={index}
          title={company.name}
          className="w-12 h-12 rounded-full border border-black/10 bg-white flex items-center justify-center"
        >
          {company.icon ? (
            <img src={company.icon} alt={company.name} className="w-8 h-8 object-fill" />
          ) : (
            <span className="text-xs font-medium">{company.fallback ?? <Person />}</span>
          )}
        </div>
      ))}
    </div>
  );
}

type Props = {
  t: Dictionary;
};

export function CareerTimeline({ t }: Props) {
  const timeline = t.home.timeline;

  return (
    <section>
      <div className="relative hidden md:block my-24">
        <div className="absolute top-4 left-0 right-0 h-[2px] bg-black/20" />

        <div className="grid grid-cols-4 gap-8">
          {timeline.items.map((item, index) => (
            <div
              key={item.id ?? index}
              className="relative flex flex-col items-center text-center pt-4 h-full"
            >
              <TimelineAvatars companies={TIMELINE_COMPANIES[item.id]} />

              <div className="absolute top-4 -translate-y-1/2 z-10 bg-white px-2">
                <div className="w-3 h-3 rounded-full bg-black" />
              </div>

              <p className="mt-6 text-sm font-medium text-gray-500">{item.period}</p>

              <Card className="mt-6 w-full h-full flex flex-col">
                <Card.Header className="min-h-[2.5rem] flex items-start justify-center">
                  <Card.Title className="text-base leading-tight">{item.title}</Card.Title>
                </Card.Header>

                <Card.Content className="pt-2 flex-1">
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </Card.Content>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="md:hidden space-y-4">
        {timeline.items.map((item, index) => (
          <Card key={item.id ?? index}>
            <Card.Header>
              <Card.Title className="text-base">{item.title}</Card.Title>
              <Card.Description>{item.period}</Card.Description>
            </Card.Header>

            <Card.Content>
              <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
            </Card.Content>
          </Card>
        ))}
      </div>
    </section>
  );
}
