import { Card, Link, Chip } from "@heroui/react";
import { ArrowUpRight } from "@gravity-ui/icons";

type Experience = {
  id: string;
  role: string;
  company: string;
  location: string;
  period?: string;
  website?: string;
  websiteLabel?: string;
  intro: string;
  highlights: string[];
  skills: string[];
  logo?: string;
};

type Props = {
  experience: Experience;
};

export function ExperienceCard({ experience }: Props) {
  return (
    <Card className="w-full p-4 space-y-3">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
  <div className="flex items-start gap-3">
    {/* Logo */}
    {experience.logo && (
      <div className="w-10 h-10 rounded-md border border-black/10 bg-white flex items-center justify-center shrink-0">
        <img
          src={experience.logo}
          alt={experience.company}
          className="w-6 h-6 object-contain"
        />
      </div>
    )}

    {/* Title */}
    <div>
      <h3 className="text-base font-semibold">
        {experience.role}
      </h3>
      <p className="text-xs text-gray-500">
        {experience.company} · {experience.location}
        {experience.period && ` · ${experience.period}`}
      </p>
    </div>
  </div>

  {experience.website && (
    <Link
      href={experience.website}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1 text-xs shrink-0"
    >
      {experience.websiteLabel ?? "Website"}
      <ArrowUpRight className="size-3" />
    </Link>
  )}
</div>

      {/* Body */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_220px] gap-4 text-sm text-gray-700 leading-relaxed">
        {/* Text */}
        <div className="space-y-2">
          <p>{experience.intro}</p>

          <ul className="list-disc pl-4 space-y-0.5">
            {experience.highlights.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Skills */}
        <div
          className="
            flex flex-wrap gap-2
            md:flex-col
            md:pl-4 md:border-l border-gray-200
            w-full
          "
        >
          {experience.skills.map((skill, index) => (
            <Chip
              key={index}
              size="sm"
              className="px-3 py-1 whitespace-nowrap"
            >
              {skill}
            </Chip>
          ))}
        </div>
      </div>
    </Card>
  );
}
