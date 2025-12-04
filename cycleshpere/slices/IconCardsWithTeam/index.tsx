"use client";
import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

/**
 * Props for `IconCardsWithTeam`.
 */
export type IconCardsWithTeamProps =
  SliceComponentProps<Content.IconCardsWithTeamSlice>;

/**
 * Component for "IconCardsWithTeam" Slices.
 */
const IconCardsWithTeam: FC<IconCardsWithTeamProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full bg-black py-12 md:py-16 lg:py-24"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
        {/* Core Values Section */}
        <div className="text-center mb-12 md:mb-14 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6">
            <PrismicRichText field={slice.primary.section_title} />
          </h2>
          <div className="text-base md:text-lg xl:text-xl text-white max-w-2xl lg:max-w-3xl mx-auto">
            <PrismicRichText field={slice.primary.section_intro} />
          </div>
        </div>

        {/* Icon Cards Grid */}
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 mb-16 md:mb-20 lg:mb-24">
          {slice.primary.icon_cards.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col items-center text-center ${index === 0
                  ? 'w-full md:w-[380px] lg:w-[400px] xl:w-[416px] h-auto md:h-[420px] xl:h-[452px]'
                  : 'w-full md:w-[380px] lg:w-[400px] xl:w-[420px] h-auto md:h-[420px] xl:h-[452px]'
                }`}
            >
              {/* Icon with yellow-green circular background */}
              <div className="w-[140px] h-[140px] md:w-[150px] md:h-[150px] lg:w-[160px] lg:h-[160px] xl:w-[172px] xl:h-[172px] mt-4 md:mt-6 lg:mt-8 bg-[#D4FF70] rounded-full flex items-center justify-center mb-4 md:mb-6">
                <PrismicNextImage
                  field={item.icon}
                  className="w-[140px] h-[140px] md:w-[150px] md:h-[150px] lg:w-[160px] lg:h-[160px] xl:w-[172px] xl:h-[172px] object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl xl:text-3xl font-semibold my-4 md:my-6 text-black">
                {item.title}
              </h3>

              {/* Description */}
              <p className="w-full max-w-[250px] xl:w-[270px] text-base md:text-lg xl:text-[20px] font-medium text-black leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Meet the Team Section */}
        <div className="mb-12 md:mb-14 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6">
            <PrismicRichText field={slice.primary.team_section_title} />
          </h2>
          <div className="w-full md:w-[700px] lg:w-[800px] xl:w-[844px] h-auto xl:h-[62px] text-lg md:text-xl lg:text-[22px] xl:text-[24px] font-semibold leading-[131%] text-white">
            <PrismicRichText field={slice.primary.team_section_intro} />
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
          {slice.primary.team_members.map((item, index) => (
            <div
              key={index}
              className="w-full md:w-[380px] lg:w-[400px] xl:w-[416px] h-auto md:h-[330px] xl:h-[351px] bg-white rounded-[20px] p-6 md:p-8 flex flex-col items-center text-center"
            >
              {/* Profile Photo */}
              <div className="w-28 h-28 md:w-32 md:h-32 xl:w-36 xl:h-36 -mt-12 md:-mt-14 xl:-mt-16 rounded-full overflow-hidden mb-10 md:mb-12 xl:mb-14">
                <PrismicNextImage
                  field={item.photo}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name */}
              <h3 className="w-full max-w-[220px] xl:w-[244.17px] h-auto xl:h-[52.04px] text-2xl md:text-3xl xl:text-[39.23px] font-semibold leading-[100%] text-black mb-2">
                {item.name}
              </h3>

              {/* Role */}
              <p className="w-full max-w-[320px] xl:w-[361px] h-auto xl:h-[93px] text-lg md:text-xl xl:text-[24px] font-semibold leading-[131%] text-black">
                {item.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IconCardsWithTeam;
