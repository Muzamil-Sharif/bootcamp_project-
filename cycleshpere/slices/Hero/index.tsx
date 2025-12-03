"use client";

import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <section
      className="w-full bg-white px-6 md:px-12 lg:px-16 pt-24 md:pt-32"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* ------------------------------ */}
        {/* LEFT SECTION */}
        {/* ------------------------------ */}
        <div className="flex flex-col gap-8">

          {/* Heading + Subtext */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-8xl xl:w-130 xl:mx-8 font-bold xl:leading-24 leading-tight text-black">
              {slice.primary.heading1}
            </h1>

            <p className="text-black mt-4 md:text-lg lg:text-base xl:text-base xl:font-semibold xl:mx-8 xl:w-70 max-w-md leading-relaxed">
              {slice.primary.text_below_heading1}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 xl:mx-8">
            <PrismicNextLink
              field={slice.primary.get_started}
              className="px-6 py-3 xl:px-8 rounded-full text-white bg-black border border-black text-sm md:text-base font-medium hover:bg-gray-100 hover:text-black transition"
            >
              {slice.primary.get_started?.text || "Get Started"}
            </PrismicNextLink>

            <PrismicNextLink
              field={slice.primary.learn_more}
              className="px-6 py-3 rounded-full border border-gray-300 text-black text-sm md:text-base font-medium hover:bg-gray-100 transition"
            >
              {slice.primary.learn_more?.text || "Learn more"}
            </PrismicNextLink>
          </div>

          {/* Small Image + Text + Plus Icon */}
          <div className="flex items-start justify-between gap-6 mt-4 w-full">

            {/* LEFT: Image + Text */}
            <div className="flex flex-col xl:items-start md:items-center gap-4 xl:mx-8">

              {/* Small Image */}
              <div className="w-40 h-28 xl:w-60 xl:h-40 rounded-xl overflow-hidden shrink-0">
                <PrismicNextImage
                  field={slice.primary.cycle_image}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <div>
                <h3 className="font-semibold text-lg text-gray-900 xl:text-sm xl:w-48">
                  {slice.primary.heading_after_cycle_image}
                </h3>
                <p className="text-sm text-gray-700">
                  {slice.primary.text_after_heading2}
                </p>
              </div>
            </div>

            {/* RIGHT: Plus Button */}
            <button
              className="w-12 h-12 xl:w-20 xl:h-20 xl:mx-20 xl:my-10 flex items-center justify-center rounded-full border border-black text-black hover:bg-black hover:text-white transition"
              aria-label="Add" 
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 xl:w-12 xl:h-12"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
          </div>


        </div>

       
        {/* RIGHT SECTION (Main Image) */}
        {/* ------------------------------ */}
        <div className="relative xl:-mt-10 w-full flex justify-center">

          {/* Main Cyclist Image */}
          <div
            className="
              w-full
              max-w-[775px]      /* Figma width */
              h-[654px]          /* Figma height */
              rounded-3xl
              overflow-hidden
              relative 
              xl:w-[760px]
              xl:h-[620px]
            
            "
          >
            <PrismicNextImage
              field={slice.primary.cyclists_image}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Optional bottom highlight bar */}
          <div className="absolute bottom-0 -my-5 w-36 h-2 bg-gray-200 rounded-full">
            <div className="w-16 h-2 bg-black rounded-full"></div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Hero;
