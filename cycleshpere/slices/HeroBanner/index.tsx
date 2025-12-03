"use client";
import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

/**
 * Props for `HeroBanner`.
 */
export type HeroBannerProps = SliceComponentProps<Content.HeroBannerSlice>;

/**
 * Component for "HeroBanner" Slices.
 */
const HeroBanner: FC<HeroBannerProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative w-full h-full overflow-hidden"
    >
      {/* Background Image */}
      <div className="w-full h-full">
        <PrismicNextImage
          field={slice.primary.background_image}
          className="w-full h-full object-cover"
          priority
        />
      </div>

      {/* Content Overlay */}
      <div className="absolute top-4 md:top-5 my-10 md:my-20 xl:my-60 left-0 px-4 md:px-0 z-10">
        {/* Yellow-Green Text Box */}
        <div className="w-full max-w-[90vw] md:w-[600px] lg:w-[700px] xl:w-[788px] h-auto md:h-[180px] lg:h-[200px] xl:h-[216px] bg-[#D4FF70] border-2 md:border-4 border-[#CCF07E] px-4 py-4 md:px-8 md:py-6 lg:px-10 lg:py-7 xl:px-12 xl:py-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-[#506335] uppercase leading-tight mb-1 md:mb-0">
            <PrismicRichText field={slice.primary.headline} />
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-[#506335] uppercase leading-tight">
            <PrismicRichText field={slice.primary.headline2} />
          </h2>
        </div>
      </div>

    </section>
  );
};

export default HeroBanner;
