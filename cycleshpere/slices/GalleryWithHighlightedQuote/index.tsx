"use client";
import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

/**
 * Props for `GalleryWithHighlightedQuote`.
 */
export type GalleryWithHighlightedQuoteProps =
  SliceComponentProps<Content.GalleryWithHighlightedQuoteSlice>;

/**
 * Component for "GalleryWithHighlightedQuote" Slices.
 */
const GalleryWithHighlightedQuote: FC<GalleryWithHighlightedQuoteProps> = ({
  slice,
}) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full bg-white py-12 md:py-16 lg:py-20"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
        {/* Title and Description */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-black mb-3 md:mb-4">
            <PrismicRichText field={slice.primary.title} />
          </h2>
          <div className="text-base md:text-lg font-normal xl:w-[524px] text-black max-w-2xl">
            <PrismicRichText field={slice.primary.description} />
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-auto">
          {/* First Row */}
          {/* Image 1 */}
          {slice.primary.gallery_images[0] && (
            <div className="w-full xl:w-[308px] h-[180px] xl:h-[244px] rounded-2xl overflow-hidden bg-gray-200">
              <PrismicNextImage
                field={slice.primary.gallery_images[0].image}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}

          {/* Image 2 */}
          {slice.primary.gallery_images[1] && (
            <div className="w-full xl:w-[312px] h-[180px] xl:h-[240px] rounded-[22px] overflow-hidden bg-gray-200">
              <PrismicNextImage
                field={slice.primary.gallery_images[1].image}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}

          {/* Image 3 */}
          {slice.primary.gallery_images[2] && (
            <div className="w-full xl:w-[312px] h-[180px] xl:h-[244px] overflow-hidden bg-gray-200" style={{ borderTopLeftRadius: '30px', borderTopRightRadius: '29px', borderBottomRightRadius: '9px', borderBottomLeftRadius: '22px' }}>
              <PrismicNextImage
                field={slice.primary.gallery_images[2].image}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}

          {/* Image 4 */}
          {slice.primary.gallery_images[3] && (
            <div className="w-full xl:w-[312px] h-[180px] xl:h-[240px] overflow-hidden bg-gray-200" style={{ borderTopLeftRadius: '28px', borderTopRightRadius: '38px', borderBottomRightRadius: '21px', borderBottomLeftRadius: '18px' }}>
              <PrismicNextImage
                field={slice.primary.gallery_images[3].image}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}

          {/* Second Row */}
          {/* Image 5 */}
          {slice.primary.gallery_images[4] && (
            <div className="w-full xl:w-[312px] h-[100px] xl:h-[140px] rounded-[22px] overflow-hidden bg-gray-200">
              <PrismicNextImage
                field={slice.primary.gallery_images[4].image}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}

          {/* Image 6 */}
          {slice.primary.gallery_images[5] && (
            <div className="w-full xl:w-[312px] h-[100px] xl:h-[140px] rounded-[19px] overflow-hidden bg-gray-200">
              <PrismicNextImage
                field={slice.primary.gallery_images[5].image}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}

          {/* Image 7 */}
          {slice.primary.gallery_images[6] && (
            <div className="w-full xl:w-[312px] h-[100px] xl:h-[140px] rounded-[23px] overflow-hidden bg-gray-200">
              <PrismicNextImage
                field={slice.primary.gallery_images[6].image}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}

          {/* Image 8 */}
          {slice.primary.gallery_images[7] && (
            <div className="w-full xl:w-[312px] h-[100px] xl:h-[140px] rounded-[21px] overflow-hidden bg-gray-200">
              <PrismicNextImage
                field={slice.primary.gallery_images[7].image}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}

          {/* Third Row */}
          {/* Image 9 */}
          {slice.primary.gallery_images[8] && (
            <div className="w-full xl:w-[312px] h-[170px] xl:h-[232px] overflow-hidden bg-gray-200" style={{ borderTopLeftRadius: '29px', borderTopRightRadius: '19px', borderBottomRightRadius: '28px', borderBottomLeftRadius: '33px' }}>
              <PrismicNextImage
                field={slice.primary.gallery_images[8].image}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}

          {/* Image 10 */}
          {slice.primary.gallery_images[9] && (
            <div className="w-full xl:w-[312px] h-[170px] xl:h-[228px] rounded-[29px] overflow-hidden bg-gray-200">
              <PrismicNextImage
                field={slice.primary.gallery_images[9].image}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}

          {/* Image 11 */}
          {slice.primary.gallery_images[10] && (
            <div className="w-full xl:w-[312px] h-[170px] xl:h-[228px] rounded-[35px] overflow-hidden bg-gray-200">
              <PrismicNextImage
                field={slice.primary.gallery_images[10].image}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}

          {/* Image 12 */}
          {slice.primary.gallery_images[11] && (
            <div className="w-full xl:w-[312px] h-[170px] xl:h-[228px] rounded-[28px] overflow-hidden bg-gray-200">
              <PrismicNextImage
                field={slice.primary.gallery_images[11].image}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}

          {/* Last Row */}
          {/* Image 13 (Left) */}
          {slice.primary.gallery_images[12] && (
            <div className="w-full xl:w-[308px] h-[280px] xl:h-[404px] rounded-[36px] overflow-hidden bg-gray-200">
              <PrismicNextImage
                field={slice.primary.gallery_images[12].image}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}

          {/* Quote Card (Spans 2 columns) */}
          <div className="col-span-2 flex flex-col justify-center items-center text-center rounded-2xl md:rounded-3xl p-6 md:p-8">
            {/* Quotation Mark */}
            {slice.primary.inverted_commas?.url && (
              <div className="w-10 h-10 xl:w-18 xl:h-18 md:w-12 md:h-12 mb-3 md:mb-4">
                <PrismicNextImage
                  field={slice.primary.inverted_commas}
                  className="w-full xl:-mx-65 h-full object-contain"
                />
              </div>
            )}

            {/* Quote Text */}
            <div className="w-full md:w-[500px] xl:w-[482px] xl:-my-18 xl:mb-10 xl:ml-12 h-auto xl:h-[149px] text-2xl md:text-3xl xl:text-[40px] font-normal xl:leading-[49.38px] text-black text-right mb-4 md:mb-6">
              <PrismicRichText field={slice.primary.highlighted_quote} />
            </div>

            {/* CTA Button */}
            <PrismicNextLink
              field={slice.primary.cta_button}
              className="inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 border border-black text-black text-sm md:text-base font-medium rounded-full transition-colors duration-300"
            >
              {slice.primary.cta_button.text || "Contact us"}
              {slice.primary.north_east_arrow?.url && (
                <PrismicNextImage
                  field={slice.primary.north_east_arrow}
                  className="w-3 h-3 object-contain"
                />
              )}
            </PrismicNextLink>
          </div>

          {/* Image 14 (Right) */}
          {slice.primary.gallery_images[13] && (
            <div className="w-full xl:w-[304px] h-[280px] xl:h-[404px] overflow-hidden bg-gray-200" style={{ borderTopLeftRadius: '35px', borderTopRightRadius: '32px', borderBottomRightRadius: '39px', borderBottomLeftRadius: '42px' }}>
              <PrismicNextImage
                field={slice.primary.gallery_images[13].image}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GalleryWithHighlightedQuote;
