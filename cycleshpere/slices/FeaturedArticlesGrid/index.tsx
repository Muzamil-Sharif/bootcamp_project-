"use client";
import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `FeaturedArticlesGrid`.
 */
export type FeaturedArticlesGridProps =
  SliceComponentProps<Content.FeaturedArticlesGridSlice>;

/**
 * Component for "FeaturedArticlesGrid" Slices.
 */
const FeaturedArticlesGrid: FC<FeaturedArticlesGridProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full bg-white py-12 md:py-16 lg:py-20 xl:py-24"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 xl:px-26 xl:-my-30 xl:mb-4 xl:ml-18">
        {/* Section Title */}
        {slice.primary.section_title && (
          <h2 className="text-2xl md:text-3xl xl:text-[32px] font-[415px] text-black mb-8 md:mb-10 xl:mb-10">
            {slice.primary.section_title}
          </h2>
        )}

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 xl:gap-0">
          {slice.primary.articles.map((item, index) => (
            <article
              key={index}
              className="group flex flex-col xl:w-[370px] xl:h-[505px] bg-white rounded-lg overflow-hidden transition-all duration-300 cursor-pointer"
            >
              {/* Article Image with Category Label */}
              <div className="relative w-full h-[200px] md:h-[220px] xl:rounded-lg xl:h-[240px] overflow-hidden">
                <PrismicNextImage
                  field={item.image}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Category Label */}
                {item.category_label && (
                  <div className="absolute top-4 right-4 px-3 py-1.5 bg-black/70 border border-white text-white text-xs md:text-sm font-medium rounded">
                    {item.category_label}
                  </div>
                )}
              </div>

              {/* Article Content */}
              <div className="flex flex-col p-5 md:p-6 flex-1">
                {/* Author & Date */}
                <div className="flex flex-row gap-3 mb-8 xl:-mx-6">
                  {/* Author Image */}
                  {item.author_image && (
                    <div className="shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden">
                      <PrismicNextImage
                        field={item.author_image}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  <div className="flex flex-col flex-1 min-w-0">
                    {/* Author Name */}
                    {item.author_name && (
                      <p className="text-sm md:text-base xl:text-[14px] xl:my-3 font-medium text-gray-900 truncate">
                        {item.author_name}
                      </p>
                    )}

                    {/* Date */}
                    {item.date && (
                      <p className="text-xs md:text-sm xl:absolute xl:my-13 xl:-mx-13 text-gray-500">
                        {item.date}
                      </p>
                    )}
                  </div>
                </div>

                {/* Article Title */}
                {item.title && (
                  <h3 className="text-lg md:text-xl xl:text-[20px] xl:-ml-6 xl:w-[350px] xl:font-[415px] text-gray-900 leading-snug mb-3 line-clamp-2 transition-colors duration-200">
                    {item.title}
                  </h3>
                )}

                {/* Article Summary */}
                {item.summary && (
                  <p className="text-sm md:text-base xl:text-[16px] xl:-mx-6 xl:font-medium text-gray-600 leading-relaxed line-clamp-3 flex-1">
                    {item.summary}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        {slice.primary.pagination && (
          <div className="flex items-start justify-start gap-4 mt-10 md:mt-12">
            {/* Previous Button */}
            <button
              className="w-10 h-10 md:w-12 md:h-12 xl:w-[70px] flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-700 rounded transition-colors duration-200"
              aria-label="Previous page"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Page Number */}
            {/* <div className="px-4 py-2 text-white text-sm md:text-base font-medium rounded"> */}
              {/* {slice.primary.pagination} */}
            {/* </div> */}

            {/* Next Button */}
            <button
              className="w-10 h-10 md:w-12 md:h-12 xl:w-[70px] flex items-center justify-center bg-gray-800 hover:bg-gray-900 text-white rounded transition-colors duration-200"
              aria-label="Next page"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedArticlesGrid;
