import { Card, Chip, Link } from "@heroui/react";
import { ArrowUpRight } from "@gravity-ui/icons";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="w-full overflow-hidden">
      {/* Images */}
      {project.images?.length && (
        <div className="flex gap-2 p-3">
          {project.images.slice(0, 3).map((image, index) => (
            <div
              key={index}
              className="
                relative h-62 flex-1 overflow-hidden rounded-xl
                bg-gray-100
              "
            >
              <img
                src={image.src}
                alt={image.alt}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      )}

      <div className="p-5 space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            {project.badge && (
              <Chip size="sm" variant="flat" className="px-2">
                {project.badge}
              </Chip>
            )}

            <h3 className="text-lg font-semibold">
              {project.title}
            </h3>

            {project.subtitle && (
              <p className="text-sm text-gray-500">
                {project.subtitle}
              </p>
            )}
          </div>

          {project.cta && (
            <Link
              href={project.cta.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm"
            >
              {project.cta.label}
              <ArrowUpRight className="size-4" />
            </Link>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-gray-700 leading-relaxed">
          {project.description}
        </p>

        {/* Highlights */}
        {project.highlights && (
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
            {project.highlights.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}

        {/* Stack */}
        {project.stack && (
          <div className="flex flex-wrap gap-2 pt-2">
            {project.stack.map((tech, index) => (
              <Chip key={index} size="sm" variant="flat" className="px-2">
                {tech}
              </Chip>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
}
