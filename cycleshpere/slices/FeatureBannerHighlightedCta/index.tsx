"use client";
import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

/**
 * Props for `FeatureBannerHighlightedCta`.
 */
export type FeatureBannerHighlightedCtaProps =
  SliceComponentProps<Content.FeatureBannerHighlightedCtaSlice>;

/**
 * Component for "FeatureBannerHighlightedCta" Slices.
 */
const FeatureBannerHighlightedCta: FC<FeatureBannerHighlightedCtaProps> = ({
  slice,
}) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full bg-white py-12 md:py-16 lg:py-20"
    >
      <div className="max-w-screen xl:h-[656px] mx-auto bg-[#F6F2F2]">
        {/* Banner Card */}
        <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-8">
          {/* Main Image with Text Overlay */}
          <div className="relative flex-1 w-full md:w-[800px] lg:w-[950px] xl:w-[1052px] h-[300px] md:h-[450px] lg:h-[500px] xl:h-[537px] xl:ml-[44px] xl:mt-[91px] rounded-[50px] overflow-hidden">
            <PrismicNextImage
              field={slice.primary.main_image}
              className="w-full h-full object-cover"
            />

            {/* Text Overlay */}
            <div className="absolute inset-0">
              {/* Headline */}
              <h2 className="absolute w-full md:w-[400px] xl:w-[484px] h-auto xl:h-[61px] top-[120px] md:top-[150px] xl:top-[172px] left-[20px] md:left-[80px] xl:left-[116px] text-white text-3xl md:text-4xl xl:text-[50.4px] font-bold xl:leading-[100%]">
                <PrismicRichText field={slice.primary.headline} />
              </h2>

              {/* Subheadline */}
              <div className="absolute w-full md:w-[400px] xl:w-[484px] h-auto xl:h-[49px] top-[160px] md:top-[200px] xl:top-[232px] left-[20px] md:left-[70px] xl:left-[108px] text-white text-xl md:text-2xl xl:text-[40.4px] font-light xl:leading-[100%]">
                <PrismicRichText field={slice.primary.subheadline} />
              </div>

              {/* CTA Group */}
              <div className="absolute top-[220px] md:top-[260px] xl:top-[314px] left-[20px] md:left-[70px] xl:left-[100px] flex flex-wrap items-center gap-2 md:gap-3">
                {slice.primary.cta_group.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    {/* Leading Text */}
                    {item.cta_leading_text && (
                      <span className="w-full md:w-auto xl:w-[408px] xl:mt-8 xl:mb-0 xl:h-[196px] text-white text-4xl md:text-5xl xl:text-[66px] font-bold xl:leading-[86.63px] uppercase">
                        {item.cta_leading_text}
                      </span>
                    )}

                    {/* Highlighted Text */}
                    {item.cta_highlighted_text && (
                      <span className="bg-[#D0FF00] text-white w-auto md:w-auto xl:w-[370px] xl:h-[95px] xl:mx-8 xl:-mt-16 text-3xl md:text-4xl xl:text-[56px] font-bold xl:leading-[115%] uppercase px-4 md:px-6 py-2 md:py-3 rounded-full text-center flex items-center justify-center">
                        {item.cta_highlighted_text}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Supporting Image */}
          <div className="w-full md:w-[200px] lg:w-[220px] xl:w-[231px] h-[400px] md:h-[450px] lg:h-[500px] xl:h-[515px] xl:mt-[101px] xl:mr-[44px] rounded-[50px] overflow-hidden">
            <PrismicNextImage
              field={slice.primary.supporting_image}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeatureBannerHighlightedCta;
