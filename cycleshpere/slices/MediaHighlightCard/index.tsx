"use client";
import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

/**
 * Props for `MediaHighlightCard`.
 */
export type MediaHighlightCardProps =
  SliceComponentProps<Content.MediaHighlightCardSlice>;

/**
 * Component for "MediaHighlightCard" Slices.
 */
const MediaHighlightCard: FC<MediaHighlightCardProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full bg-white py-16 md:py-24 font-family-name:var(--font-inter)"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <div className="text-4xl font-bold text-black mb-2">
              <PrismicRichText field={slice.primary.highlight_title} />
            </div>
            <div className="text-black text-base max-w-md">
              <PrismicRichText field={slice.primary.highlight_description} />
            </div>
          </div>
          <PrismicNextLink
            field={slice.primary.button}
            className="flex items-center justify-center gap-2 my-10 px-6 py-3 border border-black rounded-full text-black font-bold hover:bg-black hover:text-white transition-colors duration-300"
          >
            See all
            <PrismicNextImage
              field={slice.primary.north_east_arrow}
              fallbackAlt=""
              className="w-3 h-3"
            />
          </PrismicNextLink>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[42%_58%] gap-8 lg:gap-12">
          {/* Left Column: Main Image */}
          <div className="relative w-full h-full min-h-[600px] lg:min-h-[1000px]">
            <PrismicNextImage
              field={slice.primary.media}
              fallbackAlt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col gap-10">
            {/* Upper Section: Text, Box, and Wheel */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Sub-Column: Text and Highlight Box */}
              <div className="flex flex-col justify-between gap-6">
                {/* Text Paragraph */}
                <div className="text-sm xl:font-medium xl:w-[338px] md:text-base text-black leading-relaxed">
                  <PrismicRichText field={slice.primary.text_bet_images} />
                </div>

                {/* Highlight Box */}
                <div
                  className="relative w-[338px] h-[284px] gap-10 aspect-square md:aspect-auto md:h-[300px] rounded-4xl p-6 flex flex-col justify-center"
                  style={{
                    backgroundColor: slice.primary.highlight_box_color || "#C8FF00",
                  }}
                >
                  <div className="text-2xl w-[271px] h-[81px] font-bold xl:text-4xl text-black mb-3 leading-none">
                    <PrismicRichText field={slice.primary.box_heading} />
                  </div>
                  <div className="text-base xl:font-medium xl:w-[240px] xl:h-[96px] xl:text-medium text-black xl:leading-tight">
                    <PrismicRichText field={slice.primary.box_description} />
                  </div>
                </div>
              </div>

              {/* Right Sub-Column: Cycle Wheel */}
              <div className="relative h-[400px] md:h-full xl:w-[350px] min-h-[300px]">
                <PrismicNextImage
                  field={slice.primary.cycle_image}
                  fallbackAlt=""
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>

            {/* Lower Section: Numbered List */}
            <div className="flex flex-col">
              {slice.primary.text.map((item, index) => (
                <div key={index} className="group">
                  {/* List Item Row */}
                  <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_1.5fr] md:gap-8 py-6 justify-end">
                    {/* Number */}
                    <div className="text-2xl md:text-3xl font-bold text-black opacity-80">
                      <PrismicRichText field={item.number} />
                    </div>

                    {/* Heading */}
                    <div className="text-lg md:text-xl xl:text-3xl  font-bold text-black leading-none">
                      <PrismicRichText field={item.heading} />
                    </div>

                    {/* Description */}
                    <div className="text-sm xl:w-[280px] xl:font-medium xl:text-base text-black w-[220px] leading-relaxed">
                      <PrismicRichText field={item.description} />
                    </div>
                  </div>
                  <PrismicNextImage field={item.line_vector} fallbackAlt="" className="w-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaHighlightCard;
