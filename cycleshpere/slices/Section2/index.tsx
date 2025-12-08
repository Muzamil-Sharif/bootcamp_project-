"use client";
import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";

/**
 * Props for `Section2`.
 */
export type Section2Props = SliceComponentProps<Content.Section2Slice>;

/**
 * Component for "Section2" Slices.
 */
const Section2: FC<Section2Props> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full bg-white py-20 md:py-32 overflow-hidden font-family-name:var(--font-inter) relative"
    >
      <div className="max-w-[1440px] mx-auto relative flex flex-col lg:block items-center justify-center h-full xl:mb-70 xl:mt-60">

        {/* Left Image */}
        <div className="w-full max-w-sm lg:max-w-none lg:absolute lg:left-[-350px] lg:w-[700px] xl:w-[460px] xl:mx-80 lg:top-1/2 lg:-translate-y-1/2 z-0 shrink-0 mb-8 lg:mb-0">
          <PrismicNextImage
            field={slice.primary.backside_of_cycle}
            fallbackAlt=""
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Center Content */}
        <div className="flex flex-col items-center justify-between text-center mx-89 gap-7 max-w-[673px] px-4 lg:-translate-y-8">
          <div className="text-3xl md:text-[50px] font-bold leading-[1.04] xl:text-[50px] -mt-16 text-black tracking-normal w-full">
            <PrismicRichText field={slice.primary.main_text} />
          </div>

          <div className="text-black  md:text-[18px] font-medium xl:text-[16px] leading-[1.31] tracking-normal w-full">
            <PrismicRichText field={slice.primary.sub_text} />
          </div>

          {/* Learn More Button */}
          <PrismicNextLink
            field={slice.primary.learn_more}
            className="px-8 py-3 rounded-full border-2 border-black text-black mt-4 text-base font-medium hover:bg-gray-100 transition flex items-center gap-2"
          >
            {slice.primary.learn_more.text || "Learn more"}
            <div className="w-3 h-3">
              <PrismicNextImage
                field={slice.primary.north_east_arrow}
                fallbackAlt=""
                className="w-full h-full object-contain"
              />
            </div>
          </PrismicNextLink>
        </div>

        {/* Right Image */}
        <div className="w-full max-w-sm lg:max-w-none lg:absolute lg:left-[1000px] lg:w-[700px] xl:w-[460px] xl:-mx-5 lg:top-1/2 lg:-translate-y-1/2 z-0 shrink-0 mt-8 lg:mt-0">
          <PrismicNextImage
            field={slice.primary.frontside_of_cycle}
            fallbackAlt=""
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

    </section>
  );
};

export default Section2;
