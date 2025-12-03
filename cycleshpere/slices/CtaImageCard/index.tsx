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
      className="w-full bg-white py-16 md:py-24"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            <PrismicRichText field={slice.primary.title} />
          </h2>
          <div className="w-[673px] h-[72px] text-[18px] font-medium leading-[131%] text-black">
            <PrismicRichText field={slice.primary.description} />
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Main Image with Cross Overlay */}
          <div className="relative">
            <PrismicNextImage
              field={slice.primary.main_image}
              className="w-full h-auto rounded-3xl grayscale"
            />
            {/* Cross Image Overlay */}
            {slice.primary.cross_image?.url && (
              <div className="absolute top-[245.43px] left-[460.44px] w-[50.04px] h-[60.04px] md:w-20 md:h-20">
                <PrismicNextImage
                  field={slice.primary.cross_image}
                  className="w-full h-full object-contain"
                />
              </div>
            )}
          </div>

          {/* Right: Content Section */}
          <div className="flex flex-col gap-6">
            {/* Subtitle */}
            <h3 className="w-[480.33px] h-[172.12px] text-[46.03px] font-bold leading-[52.04px] text-black">
              <PrismicRichText field={slice.primary.subtitle} />
            </h3>

            {/* Bar Image */}
            {slice.primary.bar_image?.url && (
              <div className="w-20 h-2">
                <PrismicNextImage
                  field={slice.primary.bar_image}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Subtitle Description */}
            <div className="w-[416px] h-[72px] text-[18px] font-medium leading-[131%] text-black">
              <PrismicRichText field={slice.primary.subtitle_description} />
            </div>

            {/* CTA Button */}
            {slice.primary.cta_button && (
              <div className="mt-4">
                <PrismicLink
                  field={slice.primary.cta_button}
                  className="inline-block px-14 py-4 bg-[#D4FF70] text-black font-medium rounded-full hover:bg-[#b8ef00] transition-colors duration-300"
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
