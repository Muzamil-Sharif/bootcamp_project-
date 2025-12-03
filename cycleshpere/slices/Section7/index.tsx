"use client";
import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

/**
 * Props for `Section7`.
 */
export type Section7Props = SliceComponentProps<Content.Section7Slice>;

/**
 * Component for "Section7" Slices.
 */
const Section7: FC<Section7Props> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full bg-white py-16 md:py-24 font-family-name:var(--font-inter)"
    >
      <div className="w-full h-[635px] bg-[#D9D9D9] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 py-10 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left Column: Image */}
          <div className="relative w-[468px] h-[530px] mx-auto md:mx-0 md:ml-[88px]">
            <PrismicNextImage
              field={slice.primary.cycle_image}
              className="w-full h-full object-cover rounded-[35px]"
            />
          </div>
          {/* Right Column: Content */}
          <div className="flex flex-col gap-6 text-center md:text-left">
            <div className="w-full md:w-[573px] text-4xl md:text-[72px] font-bold text-black xl:leading-none md:leading-[87.14px]">
              <PrismicRichText field={slice.primary.heading} />
            </div>
            <div className="w-full md:w-[573px] xl:w-[425px] xl:h-[78px] text-base md:text-[18px] font-medium text-black leading-relaxed md:leading-[24px]">
              <PrismicRichText field={slice.primary.description} />
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Section7;
