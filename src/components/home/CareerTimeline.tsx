import { Card, Avatar } from "@heroui/react";
import { Person } from "@gravity-ui/icons";
import {
  TIMELINE_COMPANIES,
  type TimelineCompany,
} from "./careerTimeline.logos";

/**
 * Компонент иконок над точкой
 */
function TimelineAvatars({
  companies,
}: {
  companies?: TimelineCompany[];
}) {
  if (!companies?.length) return null;

  return (
    <div className="absolute -top-10 flex gap-2">
      {companies.map((company, index) => (
        <div
          key={index}
          title={company.name}
          className="
        w-12 h-12
        rounded-full
        border border-black/10
        bg-white
        flex items-center justify-center
      "
        >
          {company.icon ? (
            <img
              src={company.icon}
              alt={company.name}
              className="w-8 h-8 object-fill"
            />
          ) : (
            <span className="text-xs font-medium">
              {company.fallback ?? <Person />}
            </span>
          )}
        </div>
      ))}
    </div>

  );
}

type Props = {
  t: any;
};

export function CareerTimeline({ t }: Props) {
  const timeline = t.home.timeline;

  return (
    <section>
      {/* ================= Desktop ================= */}
      <div className="relative hidden md:block my-24">
        {/* Линия таймлайна */}
        <div className="absolute top-4 left-0 right-0 h-[2px] bg-black/20" />

        <div className="grid grid-cols-4 gap-8">
          {timeline.items.map((item: any, index: number) => (
            <div
              key={item.id ?? index}
              className="relative flex flex-col items-center text-center pt-4 h-full"
            >
              {/* Иконки компаний */}
              <TimelineAvatars
                companies={TIMELINE_COMPANIES[item.id]}
              />

              {/* Точка */}
              <div className="absolute top-4 -translate-y-1/2 z-10 bg-white px-2">
                <div className="w-3 h-3 rounded-full bg-black" />
              </div>

              {/* Период */}
              <p className="mt-6 text-sm font-medium text-gray-500">
                {item.period}
              </p>

              {/* Карточка */}
              <Card className="mt-6 w-full h-full flex flex-col">
                <Card.Header className="min-h-[2.5rem] flex items-start justify-center">
                  <Card.Title className="text-base leading-snug line-clamp-2">
                    {item.title}
                  </Card.Title>
                </Card.Header>

                <Card.Content className="flex-1">
                  <p className="text-sm text-gray-600">
                    {item.description}
                  </p>
                </Card.Content>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* ================= Mobile ================= */}
      <div className="md:hidden space-y-8 border-l border-primary/30 pl-6">
        {timeline.items.map((item: any, index: number) => (
          <div key={item.id ?? index} className="relative">
            <div className="w-3 h-3 rounded-full bg-primary absolute -left-[30px] top-1" />

            {/* Иконки компаний (mobile) */}
            <div className="mb-2 flex gap-2">
              {TIMELINE_COMPANIES[item.id]?.map((company, i) => (
                <Avatar
                  key={i}
                  title={company.name}
                  className="w-10 h-10 border border-black/10 bg-white"
                >
                  {company.icon ? (
                    <Avatar.Image
                      src={company.icon}
                      alt={company.name}
                      className="p-1.5 object-contain"
                    />
                  ) : (
                    <Avatar.Fallback className="text-xs">
                      {company.fallback ?? <Person />}
                    </Avatar.Fallback>
                  )}
                </Avatar>
              ))}
            </div>

            <p className="text-sm font-medium text-gray-500">
              {item.period}
            </p>

            <h3 className="mt-1 font-semibold">
              {item.title}
            </h3>

            <p className="mt-2 text-sm text-gray-600">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
