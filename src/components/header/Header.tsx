"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Tabs, Button } from "@heroui/react";
import { Bars, Xmark, House, Briefcase, Envelope } from "@gravity-ui/icons";

import { getDictionary, Locale } from "@/i18n";
import { containerClass } from "@/components/Container";
import { LanguageSwitch } from "./LanguageSwitch";

const NAV_ITEMS = [
    { id: "home", path: "/", icon: House },
    { id: "cases", path: "/cases", icon: Briefcase },
    { id: "contactMe", path: "/contact-me", icon: Envelope },
] as const;

export function Header({ locale }: { locale: Locale }) {
    const t = getDictionary(locale);
    const prefix = locale === "uk" ? "/uk" : "";
    const pathname = usePathname();
    const router = useRouter();

    const [open, setOpen] = useState(false);

    // определяем активный tab по URL
    const activeTab = (() => {
        if (pathname === `${prefix}/`) return "home";
        if (pathname.startsWith(`${prefix}/cases`)) return "cases";
        if (pathname.startsWith(`${prefix}/contact-me`)) return "contactMe";
        return "home";
    })();


    // закрываем mobile-меню при смене роута
    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    return (
        <header className="relative">
            <div className={`${containerClass} py-6 flex items-center`}>
                {/* Logo */}
                <Link
                    href={`${prefix}/`}
                    className="font-semibold text-lg whitespace-nowrap"
                >
                    {/* Logo */}
                </Link>

                {/* ================= Desktop Tabs ================= */}
                <div className="hidden md:block">
                    <Tabs
                        selectedKey={activeTab}
                        onSelectionChange={(key) => {
                            const item = NAV_ITEMS.find((i) => i.id === key);
                            if (item) router.push(`${prefix}${item.path}`);
                        }}
                    >
                        <Tabs.ListContainer>
                            <Tabs.List aria-label="Main navigation">
                                <Tabs.Tab id="home" className="min-w-fit">
                                    <span className="flex items-center gap-2">
                                        <House className="w-4 h-4" />
                                        {t.nav.home}
                                    </span>
                                    <Tabs.Indicator />
                                </Tabs.Tab>

                                <Tabs.Tab id="cases" className="min-w-fit">
                                    <span className="flex items-center gap-2">
                                        <Briefcase className="w-4 h-4" />
                                        {t.nav.cases}
                                    </span>
                                    <Tabs.Indicator />
                                </Tabs.Tab>

                                <Tabs.Tab id="contactMe" className="min-w-fit">
                                    <span className="flex items-center gap-2">
                                        <Envelope className="w-4 h-4" />
                                        {t.nav.contactMe}
                                    </span>
                                    <Tabs.Indicator />
                                </Tabs.Tab>

                            </Tabs.List>
                        </Tabs.ListContainer>
                    </Tabs>
                </div>

                {/* Spacer — сохраняет desktop layout */}
                <div className="flex-1" />

                {/* ================= Right side ================= */}
                <div className="flex items-center gap-3">
                    <LanguageSwitch />

                    {/* Burger — только mobile */}
                    <Button
                        isIconOnly
                        variant="ghost"
                        className="md:hidden"
                        aria-label="Open menu"
                        onPress={() => setOpen((v) => !v)}
                    >
                        {open ? <Xmark /> : <Bars />}
                    </Button>
                </div>
            </div>

            {/* ================= Mobile Popup Menu ================= */}
            {open && (
                <div className="fixed inset-0 z-50 md:hidden">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/40"
                        onClick={() => setOpen(false)}
                    />

                    {/* Popup */}
                    <div
                        className="
        absolute top-4 left-4 right-4
        bg-white rounded-xl shadow-xl
        max-h-[calc(100vh-2rem)]
        overflow-y-auto
        p-6
        flex flex-col gap-6
      "
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between">
                            <span className="text-lg font-semibold">Menu</span>
                            <button
                                aria-label="Close menu"
                                onClick={() => setOpen(false)}
                                className="p-2 -m-2"
                            >
                                <Xmark />
                            </button>
                        </div>

                        {/* Navigation */}
                        <nav className="flex flex-col gap-4">
                            {NAV_ITEMS.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => {
                                            router.push(`${prefix}${item.path}`);
                                            setOpen(false);
                                        }}
                                        className={`
        flex items-center gap-3
        text-left text-base font-medium
        py-2
        transition
        ${activeTab === item.id
                                                ? "text-black"
                                                : "text-gray-500 hover:text-black"
                                            }
      `}
                                    >
                                        <Icon className="w-5 h-5" />
                                        {t.nav[item.id]}
                                    </button>
                                );
                            })}
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
}
