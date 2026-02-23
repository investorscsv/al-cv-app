// components/careerTimeline.logos.ts

export type TimelineCompany = {
  name: string;
  icon?: string;
  fallback?: string;
};

export const TIMELINE_COMPANIES: Record<
  number,
  TimelineCompany[]
> = {
  1: [
    {
      name: "English Club TV",
      icon: "/logos/5.png",
      fallback: "ECTV",
    },
  ],

  2: [
    {
      name: "Polymermedics",
      icon: "/logos/4.png",
      fallback: "PL",
    },
    {
      name: "Polyoptics",
      icon: "/logos/6.png",
      fallback: "PO",
    }
  ],

  3: [
    {
      name: "Zarely",
      icon: "/logos/2.png",
      fallback: "Z",
    },
    {
      name: "Kabana design",
      icon: "/logos/1.png",
      fallback: "KB",
    }
  ],

  4: [
    {
      name: "ChipChip",
      icon: "/logos/3.png",
      fallback: "CC",
    },
    {
      name: "Crino",
      icon: "/logos/7.png",
      fallback: "CR",
    }
  ],
};
