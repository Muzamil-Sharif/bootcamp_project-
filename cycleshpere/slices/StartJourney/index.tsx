"use client";
import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

/**
 * Props for `StartJourney`.
 */
export type StartJourneyProps = SliceComponentProps<Content.StartJourneySlice>;

/**
 * Component for "StartJourney" Slices.
 */
const StartJourney: FC<StartJourneyProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full bg-black py-16 md:py-24 font-family-name:var(--font-inter)"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column: Content */}
          <div className="flex flex-col gap-8">
            {/* Heading */}
            <div className="text-5xl xl:text-7xl md:text-6xl xl:w-[500px] font-bold text-white tracking-tight leading-[1.1]">
              <PrismicRichText field={slice.primary.heading} />
            </div>

            {/* Description */}
            <div className="text-white text-base xl:text-sm my-5 md:text-lg w-[220px] font-medium leading-relaxed max-w-md">
              <PrismicRichText field={slice.primary.description} />
            </div>

            {/* Get Started Button */}
            <div>
              <PrismicNextLink
                field={slice.primary.get_started}
                className="inline-block px-8 py-3 rounded-full bg-white text-black text-base font-bold hover:bg-gray-100 transition-colors duration-300"
              >
                Get started
              </PrismicNextLink>
            </div>
          </div>

          {/* Right Column: Bicycle Image */}
          <div className="relative">
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-white">
              <PrismicNextImage
                field={slice.primary.bicycle}
                fallbackAlt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartJourney;
