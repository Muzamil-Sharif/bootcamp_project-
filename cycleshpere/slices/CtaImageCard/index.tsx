"use client";
import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, PrismicLink } from "@prismicio/react";

/**
 * Props for `CtaImageCard`.
 */
export type CtaImageCardProps = SliceComponentProps<Content.CtaImageCardSlice>;

/**
 * Component for "CtaImageCard" Slices.
 */
const CtaImageCard: FC<CtaImageCardProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full bg-white py-12 md:py-16 lg:py-24"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
        {/* Header Section */}
        <div className="mb-8 md:mb-10 lg:mb-12">
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 md:mb-6">
            <PrismicRichText field={slice.primary.title} />
          </div>
          <div className="w-full md:w-[600px] lg:w-[650px] xl:w-[673px] h-auto xl:h-[72px] text-base md:text-[17px] xl:text-[18px] font-medium leading-[131%] text-black">
            <PrismicRichText field={slice.primary.description} />
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          {/* Left: Main Image with Cross Overlay */}
          <div className="relative">
            <PrismicNextImage
              field={slice.primary.main_image}
              fallbackAlt=""
              className="w-full h-auto rounded-2xl md:rounded-3xl grayscale"
            />
            {/* Cross Image Overlay */}
            {slice.primary.cross_image?.url && (
              <div className="absolute top-[40%] left-[70%] md:top-[245px] md:left-[460px] xl:top-[245.43px] xl:left-[460.44px] w-[40px] h-[48px] md:w-[50px] md:h-[60px] xl:w-[50.04px] xl:h-[60.04px]">
                <PrismicNextImage
                  field={slice.primary.cross_image}
                  fallbackAlt=""
                  className="w-full h-full object-contain"
                />
              </div>
            )}
          </div>

          {/* Right: Content Section */}
          <div className="flex flex-col gap-4 md:gap-5 lg:gap-6">
            {/* Subtitle */}
            <div className="w-full md:w-[400px] lg:w-[450px] xl:w-[480.33px] h-auto xl:h-[172.12px] text-2xl md:text-3xl lg:text-4xl xl:text-[46.03px] font-bold leading-tight md:leading-[45px] xl:leading-[52.04px] text-black">
              <PrismicRichText field={slice.primary.subtitle} />
            </div>

            {/* Bar Image */}
            {slice.primary.bar_image?.url && (
              <div className="w-16 h-1.5 md:w-20 md:h-2">
                <PrismicNextImage
                  field={slice.primary.bar_image}
                  fallbackAlt=""
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Subtitle Description */}
            <div className="w-full md:w-[380px] lg:w-[400px] xl:w-[416px] h-auto xl:h-[72px] text-base md:text-[17px] xl:text-[18px] font-medium leading-[131%] text-black">
              <PrismicRichText field={slice.primary.subtitle_description} />
            </div>

            {/* CTA Button */}
            {slice.primary.cta_button && (
              <div className="mt-2 md:mt-4">
                <PrismicLink
                  field={slice.primary.cta_button}
                  className="inline-block px-10 py-3 md:px-12 md:py-3.5 xl:px-14 xl:py-4 bg-[#D4FF70] text-black text-sm md:text-base font-medium rounded-full hover:bg-[#b8ef00] transition-colors duration-300"
                >
                  Join Now
                </PrismicLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaImageCard;
