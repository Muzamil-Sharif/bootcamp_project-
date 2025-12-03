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
      className="w-full bg-black py-16 md:py-24"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
        {/* Core Values Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            <PrismicRichText field={slice.primary.section_title} />
          </h2>
          <div className="text-lg md:text-xl text-white max-w-3xl mx-auto">
            <PrismicRichText field={slice.primary.section_intro} />
          </div>
        </div>

        {/* Icon Cards Grid */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-24">
          {slice.primary.icon_cards.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl p-8 flex flex-col items-center text-center ${index === 0 ? 'w-full md:w-[416px] h-[452px]' : 'w-full md:w-[420px] h-[452px]'
                }`}
            >
              {/* Icon with yellow-green circular background */}
              <div className="w-[176px] h-[176px] mt-8 xl:w-[172px] xl:h-[172px] md:w-28 md:h-28 bg-[#D4FF70] rounded-full flex items-center justify-center mb-6">
                <PrismicNextImage
                  field={item.icon}
                  className="w-12 h-12 xl:w-[172px] xl:h-[172px] md:w-14 md:h-14 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-semibold my-6 text-black">
                {item.title}
              </h3>

              {/* Description */}
              <p className="size-[20px] w-[270px] font-medium md:text-lg text-black leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Meet the Team Section */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            <PrismicRichText field={slice.primary.team_section_title} />
          </h2>
          <div className="w-[844px] h-[62px] text-[24px] font-semibold leading-[131%] text-white">
            <PrismicRichText field={slice.primary.team_section_intro} />
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {slice.primary.team_members.map((item, index) => (
            <div
              key={index}
              className="w-full md:w-[416px] h-[351px] bg-white rounded-[20px] p-8 flex flex-col items-center text-center"
            >
              {/* Profile Photo */}
              <div className="w-32 h-32 -mt-16 md:w-36 md:h-36 rounded-full overflow-hidden mb-14">
                <PrismicNextImage
                  field={item.photo}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name */}
              <h3 className="w-[244.17px] h-[52.04px] text-[39.23px] font-semibold leading-[100%] text-black mb-2">
                {item.name}
              </h3>

              {/* Role */}
              <p className="w-[361px] h-[93px] text-[24px] font-semibold leading-[131%] text-black">
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
