"use client";
import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

/**
 * Props for `TestimonialCard`.
 */
export type TestimonialCardProps =
  SliceComponentProps<Content.TestimonialCardSlice>;

/**
 * Component for "TestimonialCard" Slices.
 */
const TestimonialCard: FC<TestimonialCardProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full bg-white py-16 md:py-24"
    >
      <div className="max-w-[1440px] mt-10 mx-auto px-4 md:px-8 lg:px-16">
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Quote Section */}
          <div>
            {/* Heading with Bike Icon */}
            <h2 className="w-full md:w-[500px] lg:w-[600px] xl:w-[672px] h-auto md:h-[70px] xl:h-[84px] text-4xl md:text-5xl lg:text-6xl xl:text-[72.8px] font-semibold leading-[100%] text-black mb-4 flex items-center gap-3 md:gap-4 xl:gap-6">
              <PrismicRichText field={slice.primary.heading} />
              {slice.primary.cylce_icon?.url && (
                <PrismicNextImage
                  field={slice.primary.cylce_icon}
                  className="w-12 h-12 md:w-16 md:h-16 xl:w-[84px] xl:h-[84px] object-contain"
                />
              )}
            </h2>

            {/* Subheading */}
            <div className="w-full md:w-[450px] lg:w-[520px] xl:w-[564px] h-auto md:h-[48px] xl:h-[56px] text-xl md:text-2xl lg:text-3xl xl:text-[40.4px] font-normal leading-[100%] text-black mb-6 md:mb-8">
              <PrismicRichText field={slice.primary.sub_text} />
            </div>

            {/* Gray Background Container */}
            <div className="w-full md:w-[700px] lg:w-[900px] xl:w-[1320px] h-auto md:h-[350px] lg:h-[400px] xl:h-[456px] bg-gray-100 rounded-2xl md:rounded-[24px] xl:rounded-[28px] p-4 md:p-6 xl:p-8">
              {/* Author and Quote Container */}
              <div className="flex gap-6 items-start">
                {/* Author Photo */}
                <div className="shrink-0 mx-2 md:mx-10 lg:mx-20 xl:mx-40 my-4 md:my-6 xl:my-8">
                  <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-[248px] xl:h-[248px] rounded-full overflow-hidden">
                    <PrismicNextImage
                      field={slice.primary.author_photo}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center mt-3 md:mt-6 xl:mt-8">
                    <p className="w-auto md:w-[120px] xl:w-[152px] h-auto md:h-[40px] xl:h-[52px] mx-auto text-lg md:text-2xl lg:text-3xl xl:text-[35.4px] font-medium leading-[100%] text-black">
                      {slice.primary.author_name}
                    </p>
                    <p className="w-auto md:w-[120px] xl:w-[152px] h-auto md:h-[40px] xl:h-[52px] mx-auto text-base md:text-xl lg:text-2xl xl:text-[30.4px] font-light leading-[100%] text-black">
                      {slice.primary.author_subtitle}
                    </p>
                  </div>
                </div>
                {/* Quote Section */}
                <div className="flex-1 mx-2 md:mx-10 lg:mx-16 xl:mx-20">
                  {/* Starting Comma */}
                  {slice.primary.starting_comma?.url && (
                    <div className="w-12 h-10 md:w-16 md:h-12 xl:w-[84px] xl:h-[64px] mb-2 md:mb-3">
                      <PrismicNextImage
                        field={slice.primary.starting_comma}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}

                  {/* Quote Text */}
                  <div className="w-full md:w-[350px] lg:w-[420px] xl:w-[486px] h-auto md:h-[150px] xl:h-[181px] text-base md:text-xl lg:text-2xl xl:text-[30.23px] my-4 md:my-8 xl:my-14 font-normal leading-relaxed md:leading-[40px] xl:leading-[50.57px] text-black mb-2 md:mb-3">
                    <PrismicRichText field={slice.primary.quote} />
                  </div>

                  {/* Ending Comma */}
                  {slice.primary.ending_comma?.url && (
                    <div className="w-12 h-10 md:w-16 md:h-12 xl:w-[84px] xl:h-[64px] ml-auto">
                      <PrismicNextImage
                        field={slice.primary.ending_comma}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Description List */}
          <div className="xl:absolute xl:mx-260 xl:mb-112 flex flex-col gap-4">
            <div className="text-base md:text-lg xl:text-2xl font-normal w-full md:w-[350px] lg:w-[380px] xl:w-[290px] h-auto xl:h-[104px] text-black">
              <PrismicRichText field={slice.primary.description} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCard;
