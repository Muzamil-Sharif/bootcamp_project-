"use client";
import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `BlogPost`.
 */
export type BlogPostProps = SliceComponentProps<Content.BlogPostSlice>;

/**
 * Component for "BlogPost" Slices.
 */
const BlogPost: FC<BlogPostProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full bg-white py-12 md:py-16 lg:py-20"
    >
      <div className="max-w-[1152px] xl:mt-12 mx-auto px-4 md:px-8">
        {/* Title Section */}
        <div className="mb-6 md:mb-8">
          <PrismicRichText
            field={slice.primary.title}
            components={{
              heading2: ({ children }) => (
                <h1
                  className="text-3xl md:text-4xl lg:text-[40px] font-bold text-gray-900 text-left"
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontWeight: 700,
                    lineHeight: '45px',
                    letterSpacing: '0.05em',
                    maxWidth: '776px'
                  }}
                >
                  {children}
                </h1>
              ),
            }}
          />
        </div>

        {/* Metadata Section */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-8 md:mb-12">
          {slice.primary.meta_info.map((item, index) => (
            <div key={index} className="flex items-center gap-4 md:gap-6">
              {/* Author & Date Group */}
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full overflow-hidden shrink-0">
                  <PrismicNextImage
                    field={item.profile_icon}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-normal text-gray-900">
                    {item.author}
                  </span>
                  <span className="text-gray-300">|</span>

                </div>
              </div>

              {/* Reading Time Group */}
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 shrink-0">
                  <PrismicNextImage
                    field={item.clock_icon}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-black font-medium">
                  {item.reading_time}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Hero Image */}
        <div
          className="w-full relative overflow-hidden shadow-sm mt-8"
          style={{
            borderRadius: '25px',
            aspectRatio: '1152/562'
          }}
        >
          <PrismicNextImage
            field={slice.primary.hero_image}
            className="w-full h-full object-cover"
            priority
          />
        </div> 
      </div>
    </section>
  );
};

export default BlogPost;
