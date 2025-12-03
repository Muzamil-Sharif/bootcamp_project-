"use client";
import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

/**
 * Props for `HeroWithNavbar`.
 */
export type HeroWithNavbarProps =
  SliceComponentProps<Content.HeroWithNavbarSlice>;

/**
 * Component for "HeroWithNavbar" Slices.
 */
const HeroWithNavbar: FC<HeroWithNavbarProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative w-full h-[800px] md:h-[900px] lg:h-[1000px] flex items-center justify-center overflow-visible"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <PrismicNextImage
          field={slice.primary.background_image}
          className="w-full h-full min-h-[750px] xl:h-[1057px] object-cover object-center"
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-8 md:px-12 lg:px-16 flex items-center h-full">
        <div className="flex flex-col gap-2 xl:-mx-8 md:gap-3 max-w-2xl">
          {/* Title */}
          <div className="text-4xl md:text-6xl lg:text-[80px] font-bold text-white uppercase leading-tight tracking-wide drop-shadow-lg">
            <PrismicRichText field={slice.primary.title} />
          </div>

          {/* Subtitle */}
          <div className="text-4xl md:text-6xl lg:text-[80px] xl:w-[788.55px] xl:mx-3 font-bold text-white uppercase leading-tight tracking-wide drop-shadow-lg">
            <PrismicRichText field={slice.primary.subtitle} />
          </div>

          {/* Accent Text */}
          <div className="text-4xl md:text-6xl lg:text-[80px] xl:text-[90px] xl:mx-6 font-bold text-[#D4FF70] uppercase leading-tight tracking-wide drop-shadow-lg mt-2">
            <PrismicRichText field={slice.primary.accent_text} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroWithNavbar;
