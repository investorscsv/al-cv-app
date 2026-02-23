import { getDictionary } from "@/i18n";
import {
  IntroSection,
  CareerTimeline,
  ExperienceCard,
  ProjectCard,
  EducationSection
} from "@/components/home";
import { SectionTitle } from "@/components/ui";

export default function HomePage() {
  const t = getDictionary("uk");

  const timeline = t.home.timeline;
  const career = t.career;

  return (
    <main className="mx-auto max-w-6xl py-12 space-y-24">
      <IntroSection t={t} />

      {/* TIMELINE */}
      <section className="space-y-6">
        <SectionTitle title={timeline.title} />
        <CareerTimeline t={t} />
      </section>

      {/* EXPERIENCE / BACKGROUND */}
      <section className="space-y-6">
        <SectionTitle
          title={career.title}
          subtitle={career.subtitle}
        />

        <div className="space-y-8">
          {career.experiences.map((exp: any) => (
            <ExperienceCard
              key={exp.id}
              experience={exp}
            />
          ))}
        </div>
      </section>
      <section className="space-y-6">
        <SectionTitle
          title={t.projects.title}
          subtitle={t.projects.subtitle}
        />
        <ProjectCard project={t.projects.crino} />
      </section>
      <section className="space-y-6">
        <SectionTitle
          title={t.degree.title}
          subtitle={t.degree.subtitle}
        />
        <EducationSection project={t.degree} />
      </section>
    </main>
  );
}
