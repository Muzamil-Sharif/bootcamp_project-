"use client";
import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

/**
 * Props for `Spacer`.
 */
export type SpacerProps = SliceComponentProps<Content.SpacerSlice>;

/**
 * Component for "Spacer" Slices.
 */
const Spacer: FC<SpacerProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full bg-white py-8 md:py-16 lg:py-24 font-family-name:var(--font-inter)"
    >
      <div className="w-full h-auto md:h-[500px] lg:h-[580px] xl:h-[635px] bg-[#D9D9D9] mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 py-6 md:py-8 lg:py-10 md:grid-cols-2 gap-6 md:gap-12 lg:gap-16 items-center">
          {/* Left Column: Image */}
          <div className="relative w-full max-w-[350px] md:max-w-[380px] lg:max-w-[440px] xl:w-[468px] h-[350px] md:h-[420px] lg:h-[480px] xl:h-[530px] mx-auto md:mx-0 md:ml-[40px] lg:ml-[70px] xl:ml-[88px]">
            <PrismicNextImage
              field={slice.primary.cycle_image}
              className="w-full h-full object-cover rounded-[35px]"
            />
          </div>
          {/* Right Column: Content */}
          <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 text-center md:text-left px-4 md:px-0">
            <div className="w-full md:w-[450px] lg:w-[520px] xl:w-[573px] text-3xl md:text-4xl lg:text-5xl xl:text-[72px] font-bold text-black leading-tight md:leading-[50px] lg:leading-[70px] xl:leading-[87.14px]">
              {slice.primary.heading}
            </div>
            <div className="w-full md:w-[400px] lg:w-[420px] xl:w-[425px] h-auto xl:h-[78px] text-base md:text-[16px] lg:text-[17px] xl:text-[18px] font-medium text-black leading-relaxed md:leading-[22px] lg:leading-[23px] xl:leading-[24px]">
              {slice.primary.description}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Spacer;
