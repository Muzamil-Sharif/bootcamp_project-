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
      className="w-full bg-white py-12 md:py-16 lg:py-24"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
        {/* Testimonials Header */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-8 md:mb-10 lg:mb-12 text-center md:text-left">
          <PrismicRichText field={slice.primary.testimonials} />
        </h2>

        {/* Testimonials Grid */}
        <div className="relative">
          {/* Horizontal Line Behind Boxes */}
          <div className="absolute top-10 left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen h-[2px] bg-gray-400 z-0"></div>

          <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-start mb-16 md:mb-20 lg:mb-24 z-10">
            {/* Left Profile Box */}
            {slice.primary.profiles[0] && (
              <div className="bg-white rounded-2xl md:rounded-3xl w-full md:w-[300px] lg:w-[310px] xl:w-[320.23px] h-auto md:h-[600px] xl:h-[648.33px] p-3 md:p-4 shadow-sm mx-auto">
                <div className="w-full md:w-[300px] lg:w-[310px] xl:w-[320.23px] h-auto md:h-[420px] xl:h-[438.33px] -mx-3 md:-mx-4 -my-3 md:-my-4 bg-[#F6F6F6] rounded-[16px] p-6 md:p-8 flex flex-col items-center text-center">
                  <div className="w-[220px] md:w-[240px] lg:w-[255px] xl:w-[264.18px] h-[220px] md:h-[240px] lg:h-[255px] xl:h-[268.19px] rounded-full overflow-hidden mb-4 md:mb-6 grayscale">
                    <PrismicNextImage
                      field={slice.primary.profiles[0].avatar}
                      fallbackAlt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-thin text-black">
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
            <div className="bg-white rounded-2xl md:rounded-3xl w-full md:w-[450px] lg:w-[480px] xl:w-[500.42px] md:-mx-4 lg:-mx-8 xl:-mx-13 h-auto md:h-[600px] xl:h-[648px] p-3 md:p-4 shadow-sm mx-auto">
              <div className="w-full md:w-[450px] lg:w-[480px] xl:w-[500.42px] h-auto md:h-[420px] xl:h-[438.34px] -mx-3 md:-mx-4 -my-3 md:-my-4 bg-[#F6F6F6] rounded-[16px] flex flex-col items-center justify-center text-center px-6 md:px-8 py-8 md:py-12">
                {/* Starting Comma - positioned above */}
                <div className="w-12 h-12 md:w-14 md:h-14 xl:w-16 xl:h-16 mb-4 md:mb-6 self-start">
                  <PrismicNextImage
                    field={slice.primary.starting_comma}
                    fallbackAlt=""
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Quote Text */}
                <div className="w-full md:w-[400px] lg:w-[420px] xl:w-[442.31px] h-auto xl:h-[172.12px] text-2xl md:text-3xl lg:text-[34px] xl:text-[37.23px] font-normal leading-tight md:leading-[45px] xl:leading-[50.57px] text-black text-center">
                  <PrismicRichText field={slice.primary.quote} />
                </div>

                {/* Ending Comma - positioned below */}
                <div className="w-12 h-12 md:w-14 md:h-14 xl:w-16 xl:h-16 mt-3 md:mt-4 self-end">
                  <PrismicNextImage
                    field={slice.primary.ending_comma}
                    fallbackAlt=""
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Right Profile Box */}
            {slice.primary.profiles[1] && (
              <div className="bg-white rounded-2xl md:rounded-3xl w-full md:w-[300px] lg:w-[310px] xl:w-[320.23px] mx-auto md:mx-4 xl:mx-18 h-auto md:h-[600px] xl:h-[648.33px] p-3 md:p-4 shadow-sm">
                <div className="w-full md:w-[300px] lg:w-[310px] xl:w-[320.22px] h-auto md:h-[420px] xl:h-[438.33px] -mx-3 md:-mx-4 -my-3 md:-my-4 bg-[#F6F6F6] rounded-[16px] border-4 border-[#F6F6F6] p-6 md:p-8 flex flex-col items-center text-center">
                  <div className="w-[220px] md:w-[240px] lg:w-[255px] xl:w-[264.18px] h-[220px] md:h-[240px] lg:h-[255px] xl:h-[268.19px] rounded-full overflow-hidden mb-4 md:mb-6 grayscale">
                    <PrismicNextImage
                      field={slice.primary.profiles[1].avatar}
                      fallbackAlt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl md:text-xl xl:text-2xl font-normal text-black">
                    {slice.primary.profiles[1].name}
                  </h3>
                  {slice.primary.profiles[1].caption && (
                    <p className="text-lg md:text-xl font-light text-black mt-1">
                      {slice.primary.profiles[1].caption}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Ready to Meet Us CTA Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-6 pt-12 md:pt-14 lg:pt-16">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-3 md:mb-4">
              <PrismicRichText field={slice.primary.ready_heading} />
            </h2>
            <div className="text-base md:text-lg xl:font-semibold w-full md:w-auto xl:w-[548px] text-[#615E5E]">
              <PrismicRichText field={slice.primary.description} />
            </div>
          </div>

          {/* CTA Button */}
          <div className="shrink-0">
            <PrismicNextLink
              field={slice.primary.button}
              className="inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 border-2 border-black text-black text-sm md:text-base font-semibold rounded-full hover:bg-white duration-300"
            >
              Contact Us
              {slice.primary.north_east_arrow?.url && (
                <PrismicNextImage
                  field={slice.primary.north_east_arrow}
                  fallbackAlt=""
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
