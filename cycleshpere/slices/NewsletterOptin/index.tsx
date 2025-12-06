"use client";
import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";

/**
 * Props for `NewsletterOptin`.
 */
export type NewsletterOptinProps =
  SliceComponentProps<Content.NewsletterOptinSlice>;

/**
 * Component for "NewsletterOptin" Slices.
 */
const NewsletterOptin: FC<NewsletterOptinProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full bg-white py-12 md:py-16 lg:py-20 xl:py-20"
    >
      <div className="max-w-[1440px] w-full h-auto xl:w-[1200px] xl:h-[500px] mx-auto px-4 md:px-8 lg:px-16 xl:px-0">
        <div className="relative bg-[#EBEEF3] w-full h-auto xl:w-[1228px] xl:h-[410px] rounded-lg xl:rounded-sm mb-10 xl:mb-10 border-2 border-gray-200 overflow-visible">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-visible lg:items-stretch">

            {/* Left Column: Newsletter Form */}
            <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16 xl:p-20">
              {/* Title & Description Merged */}
              <div className="relative mb-8 md:mb-10">
                {slice.primary.title && (
                  <div
                    className="text-3xl md:text-4xl lg:text-5xl xl:text-[60px] uppercase w-full h-auto xl:w-[614px] xl:h-[120px] relative z-0"
                    style={{
                      fontFamily: 'Sequel Sans, sans-serif',
                      fontWeight: 700,
                      lineHeight: '60px',
                      letterSpacing: '0.01em',
                      background: 'linear-gradient(180deg, #262626 0%, #B8C2CE 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    <PrismicRichText field={slice.primary.title} />
                  </div>
                )}

                {/* Description overlaying title */}
                {slice.primary.description && (
                  <div className="absolute bottom-1 left-1 md:bottom-2 md:left-2 xl:bottom-[10px] xl:left-[5px] z-10 text-sm md:text-base text-[#2626265E] font-medium mix-blend-multiply">
                    <PrismicRichText field={slice.primary.description} />
                  </div>
                )}
              </div>

              {/* Newsletter Form */}
              <form className="relative w-full max-w-md">
                <input
                  type="email"
                  placeholder=""
                  className="w-full xl:w-[512px] h-12 xl:h-14 pl-5 pr-14 xl:pl-6 xl:pr-16 bg-white border text-black border-gray-300 rounded focus:outline-none focus:border-gray-400 transition-colors duration-200 text-base xl:text-lg"
                  required
                />

                {/* Submit Button inside Input */}
                {slice.primary.submit_button && (
                  <PrismicNextLink
                    field={slice.primary.submit_button}
                    className="absolute top-0 right-0 h-full xl:w-[74.09px] xl:-mr-16 aspect-square bg-gray-900 hover:bg-gray-800 text-white rounded-r flex items-center justify-center transition-colors duration-200"
                  >
                    <svg
                      className="w-5 h-5 xl:w-6 xl:h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </PrismicNextLink>
                )}
              </form>
            </div>

            {/* Right Column: Player Image with Spiral */}
            <div className="relative h-[300px] md:h-[400px] lg:h-auto overflow-visible">
              {/* Spiral Illustration - Positioned and Rotated */}
              {slice.primary.illustration && (
                <div
                  className="absolute z-0"
                  style={{
                    width: '100%',
                    maxWidth: '472px',
                    height: 'auto',
                    aspectRatio: '472/262',
                    top: '-24%',
                    right: '17%',
                    transform: 'rotate(1.16deg)',
                    opacity: 1
                  }}
                >
                  <PrismicNextImage
                    field={slice.primary.illustration}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}

              {/* Player Image - Foreground Layer */}
              {slice.primary.player && (
                <div className="absolute bottom-0 right-0 xl:bottom-[-40px] xl:right-[-20px] z-10 h-[90%] xl:h-full my-[7px] xl:mx-3 flex items-end justify-end pointer-events-none">
                  <PrismicNextImage
                    field={slice.primary.player}
                    className="h-full w-auto object-contain object-bottom"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterOptin;
