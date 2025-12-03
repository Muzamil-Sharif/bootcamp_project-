"use client";
import { FC } from "react";
import Image from "next/image";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

/**
 * Props for `FeatureCardGrid`.
 */
export type FeatureCardGridProps =
  SliceComponentProps<Content.FeatureCardGridSlice>;

/**
 * Component for "FeatureCardGrid" Slices.
 */
const FeatureCardGrid: FC<FeatureCardGridProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full bg-white py-16 md:py-24 font-family-name:var(--font-inter)"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-xl">
            <div className="text-4xl md:text-6xl w-[400px] font-bold text-black mb-6 tracking-tight leading-[1.1]">
              <PrismicRichText field={slice.primary.header_title} />
            </div>
          </div>
          <div className="flex flex-col items-start my-8 md:items-end gap-6 max-w-sm">
            <div className="text-black w-[240px] h-[96px] -mx-6 text-[18px] font-medium leading-[1.31]">
              <PrismicRichText field={slice.primary.header_description} />
            </div>
            <PrismicNextLink
              field={slice.primary.header_cta}
              className="group px-8 py-3 rounded-full xl:w-55 border border-black bg-white text-black text-base font-bold hover:bg-black hover:text-white transition-colors duration-300 flex items-center justify-center gap-2"
            >
              Learn more
              <div className="w-3 h-3 relative group-hover:invert transition-all">
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

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {slice.primary.feature_cards.map((item, index) => {
            // First card (index 0) spans 2 columns
            const isFirstCard = index === 0;
            const colSpan = isFirstCard ? "md:col-span-2" : "md:col-span-1";

            // Determine colors based on background_color field or default
            // If background is black (#000000), use white text. Otherwise black text.
            const isBlackBg = item.background_color === '#000000';
            const textColor = isBlackBg || isFirstCard ? "text-white" : "text-black";
            const subTextColor = isBlackBg || isFirstCard ? "text-white" : "text-black";
            const borderColor = isBlackBg || isFirstCard ? "border-white/30" : "border-black";
            const btnTextColor = isBlackBg || isFirstCard ? "text-white" : "text-black";
            const btnHoverBg = isBlackBg || isFirstCard ? "hover:bg-white hover:text-black" : "hover:bg-black hover:text-white";

            return (
              <div
                key={index}
                className={`relative rounded-[32px] p-8 md:p-10 flex flex-col ${colSpan} min-h-[400px] md:min-h-[500px] transition-transform hover:scale-[1.01] duration-300`}
                style={{ backgroundColor: item.background_color || '#E5E7EB' }}
              >
                {/* Top: Button */}
                <div className="flex justify-start mb-6">
                  <PrismicNextLink
                    field={item.card_cta}
                    className={`${isFirstCard ? "w-[277px] h-[44px] border-3 border-white font-bold rounded-[100px] justify-center" : "px-6 py-2 xl:px-16 xl:py-4 rounded-full border"} ${borderColor} ${btnTextColor} text-sm font-bold ${btnHoverBg} transition-colors duration-300 flex items-center gap-2 group`}
                  >
                    {isFirstCard ? "Learn more" : "Join now"}
                    <div className={`relative w-2.5 h-2.5 ${isBlackBg || isFirstCard ? "invert group-hover:invert-0" : "group-hover:invert"} transition-all`}>
                      <Image
                        src="/Frame 45.png"
                        alt=""
                        fill
                        className="object-contain"
                      />
                    </div>
                  </PrismicNextLink>
                </div>

                {/* Content */}
                {isFirstCard ? (
                  // First Card Layout: Title Left, Description Right
                  <div className="flex flex-col justify-between grow mt-8">
                    <div className={`text-3xl md:text-4xl font-bold ${textColor} tracking-tight leading-[1.2] max-w-lg`}>
                      <PrismicRichText field={item.title} />
                    </div>

                    <div className={`text-2xl font-semibold ${subTextColor} w-[417px] min-h-[200px]`}>
                      <PrismicRichText field={item.subtitle} />
                    </div>

                    <div className={`text-base xl:text-lg xl:leading-[1.3] md:text-base font-medium leading-relaxed ${subTextColor} max-w-sm self-end mt-12`}>
                      <PrismicRichText field={item.description} />
                    </div>
                  </div>
                ) : (
                  // Other Cards Layout: Title/Subtitle Top, Description Bottom
                  <div className="flex flex-col grow">
                    {item.emblem_image?.url && (
                      <div className="mb-2 w-16 h-16 relative">
                        <PrismicNextImage field={item.emblem_image} className="object-contain" fallbackAlt="" />
                      </div>
                    )}

                    {/* Title and Subtitle Group */}
                    <div className="flex flex-col gap-1">
                      <div className={`text-[50px] font-bold ${textColor} tracking-tight leading-[0.94] w-[211px]`}>
                        <PrismicRichText field={item.title} />
                      </div>

                      <div className={`${index === 1 ? "text-[20px] leading-[1.31] w-[241px]" : "text-[30px] leading-[0.89] w-[271px]"} font-bold ${textColor} my-2`}>
                        <PrismicRichText field={item.subtitle} />
                      </div>
                    </div>

                    {/* Description at Bottom */}
                    <div className={`text-sm md:text-base font-medium leading-relaxed ${subTextColor} max-w-xs mt-auto`}>
                      <PrismicRichText field={item.description} />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureCardGrid;
