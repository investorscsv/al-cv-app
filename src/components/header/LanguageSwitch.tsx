"use client";

import { usePathname, useRouter } from "next/navigation";

export function LanguageSwitch() {
  const pathname = usePathname();
  const router = useRouter();

  const isUk = pathname.startsWith("/uk"); // UA справа

  const switchToEn = () => {
    const newPath = pathname.replace(/^\/uk/, "") || "/";
    router.push(newPath);
  };

  const switchToUk = () => {
    router.push(`/uk${pathname === "/" ? "" : pathname}`);
  };

  return (
    <div
      className="
        ml-6 flex items-center
        h-10 w-[96px]
        rounded-full
        border
        bg-foreground/5
        overflow-hidden
        select-none
      "
      aria-label="Language switch"
    >
      {/* EN */}
      <button
        type="button"
        onClick={switchToEn}
        className={`
          cursor-pointer flex-1 h-full
          flex items-center justify-center
          transition
          ${!isUk ? "bg-foreground/15" : "hover:bg-foreground/10"}
        `}
        aria-pressed={!isUk}
      >
        <span
          className={`
            text-xl transition
            ${!isUk ? "scale-110 opacity-100" : "opacity-60"}
          `}
        >
          🇬🇧
        </span>
      </button>

      {/* UA */}
      <button
        type="button"
        onClick={switchToUk}
        className={`
          cursor-pointer flex-1 h-full
          flex items-center justify-center
          transition
          ${isUk ? "bg-foreground/15" : "hover:bg-foreground/10"}
        `}
        aria-pressed={isUk}
      >
        <span
          className={`
            text-xl transition
            ${isUk ? "scale-110 opacity-100" : "opacity-60"}
          `}
        >
          🇺🇦
        </span>
      </button>
    </div>
  );
}
