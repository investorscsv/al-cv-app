"use client";
import { useState } from "react";
import { Card, Chip, Link } from "@heroui/react";
import { ArrowUpRight, Magnifier } from "@gravity-ui/icons";
import type { CaseMeta } from "./cases.meta";

import type { CaseItem } from "@/i18n/types";

type Props = {
  meta: CaseMeta;
  data: CaseItem;
};

export function CaseCard({ meta, data }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card className="w-full p-4 space-y-4 overflow-hidden">

        {/* Header — теперь ПЕРВЫМ */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-base font-semibold">
              {data.title}
            </h3>
            {data.subtitle && (
              <p className="text-xs text-gray-500">
                {data.subtitle}
              </p>
            )}
          </div>

          {meta.link && (
            <Link
              href={meta.link}
              target="_blank"
              className="flex items-center gap-1 text-xs"
            >
              View
              <ArrowUpRight className="size-3" />
            </Link>
          )}
        </div>

        {/* Cover image — теперь ПОСЛЕ заголовка */}
        {meta.cover && (
          <button
            onClick={() => setOpen(true)}
            className="relative group rounded-md overflow-hidden focus:outline-none"
          >
            <img
              src={meta.cover}
              alt={data.title}
              className="w-full object-cover"
            />

            {/* Иконка лупы */}
            <div
              className="absolute top-2 left-2 z-10
             bg-black/50 backdrop-blur-sm
             rounded-md p-1.5
             text-white
             flex items-center justify-center"
            >
              <Magnifier className="w-4 h-4" />
            </div>
          </button>
        )}

        {/* Body — без изменений */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_220px] gap-4 text-sm text-gray-700">
          <div className="space-y-2">
            <p>{data.intro}</p>

            <ul className="list-disc pl-4 space-y-0.5">
              {data.highlights.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-2 md:flex-col md:border-l md:pl-4">
            {data.skills.map((skill, i) => (
              <Chip key={i} size="sm" className="px-1">
                {skill}
              </Chip>
            ))}
          </div>
        </div>
      </Card>

      {/* POPUP / LIGHTBOX */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/80
               flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button — теперь ВИДНА */}
            <button
              onClick={() => setOpen(false)}
              className="cursor-pointer absolute top-3 right-3 z-20
                   bg-black/70 text-white
                   rounded-full w-8 h-8
                   flex items-center justify-center
                   hover:bg-black transition"
              aria-label="Close"
            >
              ✕
            </button>

            <img
              src={meta.cover}
              alt={data.title}
              className="w-full max-h-[90vh]
                   object-contain rounded"
            />
          </div>
        </div>
      )}
    </>
  );
}
