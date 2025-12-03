"use client";

import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

type NavbarClientProps = {
    data: any;
};

export default function NavbarClient({ data }: NavbarClientProps) {
    const pathname = usePathname();

    // NEW: detect scroll
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10); // bg appears after slight scroll
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    /* ----------------------------------------
         PAGE-BASED STYLE LOGIC
       ---------------------------------------- */

    const floatingPages = ["/about", "/join"];
    const rectangularPages = ["/contact-us"];
    const simplePages = ["/", "/services", "/events", "/news", "/products"];

    let navClass =
        "fixed z-50 top-0 w-full transition-all duration-300";

    let containerClass =
        "max-w-[1440px] mx-auto flex items-center justify-between px-6 md:px-12 lg:px-16 py-6";

    /* -------------------- Floating Pill (About / Join) -------------------- */
    let textColorClass = "text-black";

    if (floatingPages.includes(pathname)) {
        navClass =
            "fixed z-50 top-4 left-0 right-0 w-full transition-all duration-300";

        // Always show background for floating navbar
        navClass += " bg-[#E8E8E8]/50 opacity-70 shadow-sm backdrop-blur-md rounded-full";

        containerClass = "flex items-center justify-between px-8 md:px-12 lg:px-16 py-4";
        textColorClass = "text-[#2A2A2A]";
    }

    /* -------------------- Rectangular (Contact Us) -------------------- */
    else if (rectangularPages.includes(pathname)) {
        navClass =
            "fixed z-50 top-0 w-full transition-all duration-300";

        navClass += scrolled
            ? " bg-[#F3F3F3] shadow-sm backdrop-blur-md"
            : " bg-transparent";

        containerClass =
            "max-w-[1440px] mx-auto flex items-center justify-between px-6 md:px-12 lg:px-16 py-6";

        textColorClass = "text-[#000000]";
    }

    /* -------------------- Simple Transparent Pages -------------------- */
    else if (simplePages.includes(pathname)) {
        navClass =
            "fixed z-50 top-0 w-full transition-all duration-300";

        // When scrolled → soft white bg
        navClass += scrolled
            ? " bg-white/80 backdrop-blur-md shadow-sm"
            : " bg-transparent";
    }

    /* ----------------------------------------
                 RETURN JSX
       ---------------------------------------- */

    return (
        <nav className={navClass}>
            <div className={`${containerClass} gap-2 relative`}>

                {/* Left — Menu */}
                <div className={`font-bold uppercase text-xs md:text-sm xl:text-2xl cursor-pointer ${textColorClass}`}>
                    <PrismicRichText field={data.menu} />
                </div>

                {/* Center — Logo */}
                <div className={`absolute left-1/2 -translate-x-1/2 font-bold text-sm md:text-xl lg:text-2xl ${textColorClass} whitespace-nowrap`}>
                    <PrismicRichText field={data.cyclesphere} />
                </div>

                {/* Right — Get Started */}
                <div className="flex items-center gap-1  md:gap-1 xl:gap-1 cursor-pointer xl:-mx-9">
                    <div className={`font-bold sm:mx-4 hidden sm:block text-xs xl:text-lg md:text-sm xl:font-semibold ${textColorClass}`}>
                        <PrismicRichText field={data.get_started} />
                    </div>

                    <div className="w-8 h-8 md:w-10 md:h-10 bg-black rounded-full flex items-center justify-center transition hover:scale-105 shrink-0">
                        <PrismicNextImage
                            field={data.forward_arrow}
                            className="md:w-10 md:h-10 sm:w-10 sm:h-10 rounded-full"
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
}
