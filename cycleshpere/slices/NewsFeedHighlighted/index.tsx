"use client";
import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

/**
 * Props for `NewsFeedHighlighted`.
 */
export type NewsFeedHighlightedProps =
  SliceComponentProps<Content.NewsFeedHighlightedSlice>;

/**
 * Component for "NewsFeedHighlighted" Slices.
 */
const NewsFeedHighlighted: FC<NewsFeedHighlightedProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full bg-white py-12 md:py-16 lg:py-20 xl:py-24"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 xl:px-0">
        <div className="relative xl:h-[850px]">
          {/* Center: Cyclist Image - Behind Text with Lower Z-Index */}
          <div className="relative xl:absolute xl:-my-24 xl:mx-4 xl:top-[38px] xl:left-[351px] xl:z-0 mb-8 xl:mb-0">
            <div className="w-full md:w-[500px] lg:w-[580px] xl:w-[623px] h-auto md:h-[600px] lg:h-[700px] xl:h-[777px] mx-auto xl:mx-0">
              <PrismicNextImage
                field={slice.primary.cyclist}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Left Column: Heading - Positioned Above Cyclist with Higher Z-Index */}
          <div className="relative xl:absolute xl:top-[204px] xl:left-[135px] xl:z-10 mb-6 md:mb-8 lg:mb-10 xl:mb-0">
            <h2
              className="w-full md:w-[400px] xl:-my-24 xl:mx-4 lg:w-[450px] xl:w-[470px] h-auto xl:h-[375px] text-3xl md:text-4xl lg:text-5xl xl:text-[80px] font-semibold uppercase leading-tight md:leading-[60px] xl:leading-[75px]"
              style={{
                fontFamily: 'Inter, sans-serif',
                background: 'linear-gradient(180deg, #262626 0%, #B8C2CE 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              <PrismicRichText field={slice.primary.heading} />
            </h2>
          </div>

          {/* Right Column: News Items - Positioned Absolutely on XL */}
          <div className="flex flex-col xl:z-10">
            {/* Today Label - Positioned on LEFT side above news items */}
            {slice.primary.today && (
              <div className="inline-block self-start px-4 py-1.5 mx-10 md:px-5 md:py-2 xl:mx-12 xl:-my-28 bg-[#E1E8F0] text-[#B8C2CE] text-sm md:text-base font-medium rounded-md mb-6 md:mb-8 xl:absolute xl:top-[220px] xl:left-[1035px]">
                {slice.primary.today}
              </div>
            )}

            {/* News Items List */}
            <div className="flex flex-col gap-6 md:gap-8">
              {slice.primary.news_items.map((item, index) => (
                <div
                  key={index}
                  className={`group cursor-pointer ${index === 0
                    ? 'xl:absolute xl:top-[261px] xl:right-[135px]'
                    : 'xl:absolute xl:top-[524px] xl:right-[135px]'
                    }`}
                >
                  {/* News Item Image with Text Overlay */}
                  <div className="relative w-full md:w-[300px] lg:w-[320px] xl:-my-20 xl:-mx-12 xl:w-[270px] h-[180px] md:h-[200px] lg:h-[220px] xl:h-[233px] rounded-md xl:rounded-[6px] overflow-hidden mx-auto md:mx-0">
                    {/* Background Image */}
                    <PrismicNextImage
                      field={item.image}
                      className="w-full h-full object-cover xl:-my-6 group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Gradient Overlay with Text Content */}
                    <div
                      className="absolute inset-0 flex flex-col justify-end xl:mt-4 p-4 md:p-5"
                      style={{
                        background: 'linear-gradient(360deg, #F2F2F2 35.23%, rgba(242, 242, 242, 0) 50%)'
                      }}
                    >
                      {/* Meta Information */}
                      {item.meta && (
                        <p className="text-xs xl:text-[10px] md:text-sm text-gray-600 font-normal uppercase tracking-wide mb-3">
                          {item.meta}
                        </p>
                      )}

                      {/* News Title */}
                      <div className={`text-base md:text-lg xl:text-[16px] font-normal xl:-my-2 text-black leading-tight xl:leading-[131%] group-hover:text-gray-700 transition-colors duration-300 ${index === 0 ? 'xl:w-[200px]' : 'xl:w-[238px]'
                        }`}>
                        <PrismicRichText field={item.title} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsFeedHighlighted;
