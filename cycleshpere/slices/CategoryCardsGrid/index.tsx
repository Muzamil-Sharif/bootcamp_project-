"use client";
import { FC } from "react";
import Image from "next/image";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

/**
 * Props for `CategoryCardsGrid`.
 */
export type CategoryCardsGridProps =
  SliceComponentProps<Content.CategoryCardsGridSlice>;

/**
 * Component for "CategoryCardsGrid" Slices.
 */
const CategoryCardsGrid: FC<CategoryCardsGridProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full bg-white py-16 md:py-24 font-family-name:var(--font-inter)"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="max-w-xl">
            <div className="text-4xl md:text-6xl font-bold text-black mb-6 -mt-20 tracking-tight">
              <PrismicRichText field={slice.primary.category} />
            </div>
            <div className="text-black xl:text-medium md:text-lg font-medium xl:w-130">
              <PrismicRichText field={slice.primary.description} />
            </div>
          </div>

          {/* Join Now Button */}
          {slice.primary.button.map((item, index) => (
            <button
              key={index}
              className="group px-8 py-3 rounded-full border border-black bg-white text-black text-base font-bold hover:bg-black hover:text-white transition-colors duration-300 flex items-center gap-2"
            >
              {item.join_now}
              <div className="w-4 h-4 relative group-hover:invert transition-all">
                <PrismicNextImage field={item.north_east_arrow} className="w-full h-full object-contain" fallbackAlt="" />
              </div>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {slice.primary.cards.map((item, index) => {
            const hasImage = item.image.url;

            // If it has an image and NO title, treat as Image Card (Card 1)
            // Or if it's the first card? Let's rely on content.
            // Design shows Card 1 is just image. Others are text.
            // Let's assume if image is present, it's the image card.
            // But wait, the model allows image for all.
            // Let's check if title is empty.
            // Actually, looking at the design, the image card has NO text overlay.

            // Helper to determine text color based on bg color
            // Black bg -> White text. Others -> Black text.
            // We can check the color hex or just assume based on index/design.
            // Card 4 is Black.

            const isBlackBg = item.background_color === '#000000';
            const textColor = isBlackBg ? 'text-white' : 'text-black';
            const buttonBorder = isBlackBg ? 'border-white text-white hover:bg-white hover:text-black' : 'border-black text-black hover:bg-black hover:text-white';

            if (hasImage && (!item.title || item.title.length === 0)) {
              return (
                <div key={index} className="relative w-full h-[500px] md:h-[600px] rounded-[32px] overflow-hidden">
                  <PrismicNextImage field={item.image} className="w-full h-full object-cover" fallbackAlt="" />
                </div>
              )
            }

            return (
              <div
                key={index}
                className={`relative w-full h-[500px] md:h-[600px] rounded-[32px] p-8 flex flex-col justify-between transition-transform hover:scale-[1.02] duration-300`}
                style={{ backgroundColor: item.background_color || '#F3F4F6' }}
              >
                {/* Title */}
                <div className={`text-4xl md:text-5xl font-bold ${textColor} leading-none tracking-tight`}>
                  <PrismicRichText field={item.title} />
                </div>

                {/* Bottom Content */}
                <div className="flex flex-col gap-8">
                  <div className={`text-base font-semibold ${textColor} min-h-[130px] xl:w-61`}>
                    <PrismicRichText field={item.description} />
                  </div>

                  <PrismicNextLink
                    field={item.button}
                    className={`w-full py-4 rounded-full border ${buttonBorder} text-center font-bold text-base transition-colors duration-300 flex items-center justify-center gap-2 group`}
                  >
                    Learn more
                    {/* We need an arrow here too. The design shows an arrow. 
                        The model doesn't seem to have a separate arrow field for cards?
                        Wait, the snippet showed: <PrismicNextLink field={item.button} />
                        It didn't show an arrow inside.
                        But the design definitely has one.
                        I'll use a generic SVG arrow if one isn't provided in the item, or reuse the one from primary if appropriate, but that's risky.
                        Actually, looking at the user snippet:
                        {slice.primary.cards.map((item) => ( ... <PrismicNextLink field={item.button} /> ))}
                        It doesn't explicitly show an arrow for the card button.
                        However, I should add one to match the design.
                    */}
                    <div className={`relative w-3 h-3 ${isBlackBg ? "invert group-hover:invert-0" : "group-hover:invert"} transition-all duration-300`}>
                      <Image
                        src="/Frame 45.png"
                        alt=""
                        fill
                        className="object-contain"
                      />
                    </div>
                  </PrismicNextLink>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryCardsGrid;
