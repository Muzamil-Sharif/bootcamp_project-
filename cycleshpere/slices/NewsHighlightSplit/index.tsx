"use client";
import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

/**
 * Props for `NewsHighlightSplit`.
 */
export type NewsHighlightSplitProps =
  SliceComponentProps<Content.NewsHighlightSplitSlice>;

/**
 * Component for "NewsHighlightSplit" Slices.
 */
const NewsHighlightSplit: FC<NewsHighlightSplitProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full bg-white py-12 md:py-16 lg:py-20 xl:py-24"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
        {/* Background Container */}
        <div className="bg-[#EBEEF3] rounded-md md:rounded-lg xl:rounded-[6px] p-6 md:p-8 lg:p-10 xl:p-8 xl:-my-48 xl:mb-6 xl:w-[1150px] xl:h-[659px] xl:mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 h-full">
            {/* Left Column: Trending News */}
            <div className="flex flex-col">
              {/* Section Title */}
              <h2 className="text-2xl md:text-3xl xl:text-[32px] font-bold text-black mb-6 md:mb-8">
                <PrismicRichText field={slice.primary.news_section_title} />
              </h2>

              {/* News Items List */}
              <div className="flex flex-col gap-6 md:gap-8">
                {slice.primary.news_items.map((item, index) => (
                  <div
                    key={index}
                    className="group flex gap-4 md:gap-5 cursor-pointer hover:opacity-80 transition-opacity duration-300"
                  >
                    {/* Thumbnail Image */}
                    <div className="shrink-0 w-[180px] md:w-[200px] xl:w-[236px] h-[120px] md:h-[130px] xl:h-[150px] rounded-lg md:rounded-xl overflow-hidden">
                      <PrismicNextImage
                        field={item.thumbnail}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* News Content */}
                    <div className="flex flex-col justify-start">
                      {/* Author & Date */}
                      {item.author && (
                        <p className="text-xs md:text-sm text-gray-500 xl:mt-2 xl:text-[10px] font-medium mb-2 md:mb-3">
                          {item.author}
                        </p>
                      )}

                      {/* Headline */}
                      {item.headline && (
                        <h3 className="text-base xl:w-[310px] md:text-lg xl:text-[20px] font-semibold text-black leading-snug mb-2 md:mb-3">
                          {item.headline}
                        </h3>
                      )}

                      {/* Summary */}
                      <div className="text-sm md:text-base xl:font-normal xl:-my-2 xl:text-[13px] xl:w-[249px] xl:h-[45px] text-gray-600 leading-[131%]">
                        <PrismicRichText field={item.summary} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Featured Article */}
            <div className="relative flex items-center xl:-my-8 xl:w-[570px] xl:mx-6 justify-center overflow-hidden rounded-none md:rounded-3xl h-[400px] md:h-[500px] lg:h-[600px] xl:h-[659px] xl:rounded-none">
              {/* Background Image */}
              <PrismicNextImage 
                field={slice.primary.featured_background}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Content Overlay */}
              <div className="relative z-10 flex flex-col items-start justify-start p-6 md:p-8 lg:p-10 xl:p-12 w-full h-full">
                {/* Featured Tag */}
                {slice.primary.featured_tag && (
                  <div className="inline-block px-4 py-2 md:px-5 md:py-2.5 border border-white text-white text-sm md:text-base font-medium rounded-md mb-auto">
                    {slice.primary.featured_tag}
                  </div>
                )}

                {/* Bottom Content */}
                <div className="mt-auto">
                  {/* Author & Date */}
                  {slice.primary.featured_author && (
                    <p className="text-sm md:text-base text-white font-normal mb-3 md:mb-4">
                      {slice.primary.featured_author}
                    </p>
                  )}

                  {/* Featured Title */}
                  <div className="text-2xl md:text-3xl lg:text-4xl xl:text-[36px] xl:w-[620px] font-bold text-white uppercase leading-tight xl:leading-[115%]">
                    <PrismicRichText field={slice.primary.featured_title} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsHighlightSplit;
