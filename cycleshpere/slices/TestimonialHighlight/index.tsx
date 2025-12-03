"use client";
import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, PrismicLink } from "@prismicio/react";

/**
 * Props for `TestimonialHighlight`.
 */
export type TestimonialHighlightProps =
  SliceComponentProps<Content.TestimonialHighlightSlice>;

/**
 * Component for "TestimonialHighlight" Slices.
 */
const TestimonialHighlight: FC<TestimonialHighlightProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full bg-white py-16 md:py-24"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
        {/* Testimonials Header */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-12 text-center md:text-left">
          <PrismicRichText field={slice.primary.testimonials} />
        </h2>

        {/* Testimonials Grid */}
        <div className="relative">
          {/* Horizontal Line Behind Boxes */}
          <div className="absolute top-10 left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen h-[2px] bg-gray-400 z-0"></div>

          <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-24 z-10">
            {/* Left Profile Box */}
            {slice.primary.profiles[0] && (
              <div className="bg-white rounded-3xl w-[320.23px] h-[648.33px] p-4 shadow-sm">
                <div className="w-[320.23px] h-[438.33px] -mx-4 -my-4 bg-[#F6F6F6] rounded-[16px] p-8 flex flex-col items-center text-center">
                  <div className="w-[264.18px] h-[268.19px] rounded-[132.09px] overflow-hidden mb-6 grayscale">
                    <PrismicNextImage
                      field={slice.primary.profiles[0].avatar}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-thin text-black">
                    {slice.primary.profiles[0].name}
                  </h3>
                  {slice.primary.profiles[0].caption && (
                    <p className="text-sm text-gray-600 mt-1">
                      {slice.primary.profiles[0].caption}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Center Quote */}
            <div className="bg-white rounded-3xl w-[500.42px] -mx-13 h-[648px] p-4 shadow-sm">
              <div className="w-[500.42px] h-[438.34px] -mx-4 -my-4 bg-[#F6F6F6] rounded-[16px] flex flex-col items-center justify-center text-center px-8 py-12">
                {/* Starting Comma - positioned above */}
                <div className="w-16 h-16 mb-6 self-start">
                  <PrismicNextImage
                    field={slice.primary.starting_comma}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Quote Text */}
                <div className="w-[442.31px] h-[172.12px] text-[37.23px] font-normal leading-[50.57px] text-black text-center">
                  <PrismicRichText field={slice.primary.quote} />
                </div>

                {/* Ending Comma - positioned below */}
                <div className="w-16 h-16 mt-4 self-end">
                  <PrismicNextImage
                    field={slice.primary.ending_comma}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Right Profile Box */}
            {slice.primary.profiles[1] && (
              <div className="bg-white rounded-3xl w-[320.23px] mx-4 xl:mx-18 h-[648.33px] p-4 shadow-sm">
                <div className="w-[320.22px] h-[438.33px] -mx-4 -my-4 bg-[#F6F6F6] rounded-[16px] border-4 border-[#F6F6F6] p-8 flex flex-col items-center text-center">
                  <div className="w-[264.18px] h-[268.19px] rounded-[133.09px] overflow-hidden mb-6 grayscale">
                    <PrismicNextImage
                      field={slice.primary.profiles[1].avatar}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl xl:text-2xl font-normal text-black">
                    {slice.primary.profiles[1].name}
                  </h3>
                  {slice.primary.profiles[1].caption && (
                    <p className="text-xl font-light text-black mt-1">
                      {slice.primary.profiles[1].caption}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Ready to Meet Us CTA Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-16">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
              <PrismicRichText field={slice.primary.ready_heading} />
            </h2>
            <div className="text-base md:text-lg xl:font-semibold xl:w-[548px] text-[#615E5E]">
              <PrismicRichText field={slice.primary.description} />
            </div>
          </div>

          {/* CTA Button */}
          <div className="shrink-0">
            <PrismicNextLink
              field={slice.primary.button}
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-black text-black font-semibold rounded-full hover:bg-white duration-300"
            >
              Contact Us
              {slice.primary.north_east_arrow?.url && (
                <PrismicNextImage
                  field={slice.primary.north_east_arrow}
                  className="w-3 h-3 object-contain"
                />
              )}
            </PrismicNextLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialHighlight;
