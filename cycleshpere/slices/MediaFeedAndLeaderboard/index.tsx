"use client";
import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

/**
 * Props for `MediaFeedAndLeaderboard`.
 */
export type MediaFeedAndLeaderboardProps =
  SliceComponentProps<Content.MediaFeedAndLeaderboardSlice>;

/**
 * Component for "MediaFeedAndLeaderboard" Slices.
 */
const MediaFeedAndLeaderboard: FC<MediaFeedAndLeaderboardProps> = ({
  slice,
}) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full bg-white py-12 md:py-16 lg:py-20 xl:py-24"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 xl:px-0">
        {/* Horizontal Row Layout at XL */}
        <div className="flex flex-col xl:flex-row gap-6 xl:ml-6 xl:gap-8 xl:justify-center">

          {/* Left: Featured Image Card - 270px × 300px */}
          {slice.primary.featured_news && slice.primary.featured_news[0] && (
            <div className="flex flex-col gap-4">
              {/* Recent News Title */}
              {slice.primary.recent_news && (
                <h2 className="text-lg md:text-xl xl:text-[24px] font-bold text-black">
                  {slice.primary.recent_news}
                </h2>
              )}

              <div className="w-full xl:w-[250px] h-[280px] xl:h-[370px] xl:my-2 rounded-md xl:rounded-[6px] overflow-hidden relative group cursor-pointer">
                <PrismicNextImage
                  field={slice.primary.featured_news[0].image}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Glassmorphic Overlay Box at Bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 xl:w-[250px] h-[70px] xl:h-[100px] rounded-b-md xl:rounded-b-[6px]"
                  style={{
                    background: 'linear-gradient(108.74deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0.06) 100%)',
                    backdropFilter: 'blur(100px)',
                    WebkitBackdropFilter: 'blur(100px)',
                    boxShadow: '0px 0px 50px -25px rgba(0, 0, 0, 0.5)'
                  }}
                >
                  <div className="p-5 md:p-6 xl:p-5 flex flex-col justify-center h-full">
                    {slice.primary.featured_news[0].label && (
                      <p className="text-xs text-white/90 mb-1">
                        {slice.primary.featured_news[0].label}
                      </p>
                    )}
                    <div className="text-sm md:text-base xl:text-[16px] font-medium text-white leading-tight line-clamp-2">
                      <PrismicRichText field={slice.primary.featured_news[0].title} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Center: News List Card - 270px × 300px, bg #EBEEF3 */}
          <div className="w-full xl:w-[310px] xl:my-14 xl:h-[372px] bg-[#EBEEF3] rounded-md xl:rounded-[6px] p-5 md:p-6 flex flex-col overflow-hidden">
            {/* News Items */}
            <div className="flex flex-col gap-3 overflow-y-auto flex-1 xl:gap-6">
              {slice.primary.news_list && slice.primary.news_list.slice(0, 3).map((item, index) => (
                <div
                  key={index}
                  className="group cursor-pointer hover:opacity-80 transition-opacity duration-200"
                >
                  <div className="flex gap-3">
                    <div className="shrink-0 w-[70px] xl:w-[110px] xl:mt-[9px] h-[52px] xl:h-[80px] rounded overflow-hidden">
                      <PrismicNextImage
                        field={item.image}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col flex-1 xl:mt-6 min-w-0">
                      {item.meta && (
                        <p className="text-[10px] text-gray-500 mb-0.5 truncate">
                          {item.meta}
                        </p>
                      )}
                      <div className="text-xs xl:text-[13px] font-semibold text-black leading-tight line-clamp-2">
                        <PrismicRichText field={item.title} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Clubs Ranking Table - 570px × 300px, bg #EBEEF3 */}
          <div className="flex flex-col gap-4">
            {/* Clubs Ranking Title */}
            {slice.primary.club_ranking && (
              <h2 className="text-lg md:text-xl xl:text-[28px] font-bold text-black">
                {slice.primary.club_ranking}
              </h2>
            )}

            <div className="w-full xl:w-[570px] bg-[#EBEEF3] rounded-md xl:rounded-lg p-4 md:p-5 xl:p-5 flex flex-col border-2 border-[#D9E2EC]">

              {/* Ranking Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="sticky top-0 bg-[#EBEEF3]">
                    <tr className="border-b-2 border-gray-200">
                      <th className="pb-3 px-3 text-base font-semibold text-gray-800">Club</th>
                      <th className="pb-3 px-2 text-center text-base font-semibold text-gray-800">GP</th>
                      <th className="pb-3 px-2 text-center text-base font-semibold text-gray-800">W</th>
                      <th className="pb-3 px-2 text-center text-base font-semibold text-gray-800">D</th>
                      <th className="pb-3 px-2 text-center text-base font-semibold text-gray-800">L</th>
                      <th className="pb-3 px-2 text-center text-base font-semibold text-gray-800">F</th>
                      <th className="pb-3 px-2 text-center text-base font-semibold text-gray-800">A</th>
                      <th className="pb-3 px-2 text-center text-base font-semibold text-gray-800">GD</th>
                    </tr>
                  </thead>
                  <tbody>
                    {slice.primary.table_rows.slice(0, 6).map((row, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200"
                      >
                        <td className="py-3 px-3">
                          <div className="flex items-center gap-3">
                            <span className="text-base font-semibold text-gray-900 w-4">
                              {row.rank || index + 1}
                            </span>
                            {row.logo && (
                              <div className="shrink-0 w-6 h-6">
                                <PrismicNextImage
                                  field={row.logo}
                                  className="w-full h-full object-contain"
                                />
                              </div>
                            )}
                            <span className="text-base font-medium text-gray-900">
                              {row.club_name}
                            </span>
                          </div>
                        </td>
                        <td className="py-3 px-2 text-center text-base text-gray-900">
                          {row.gp}
                        </td>
                        <td className="py-3 px-2 text-center text-base text-gray-900">
                          {row.w}
                        </td>
                        <td className="py-3 px-2 text-center text-base text-gray-900">
                          {row.d}
                        </td>
                        <td className="py-3 px-2 text-center text-base text-gray-900">
                          {row.l}
                        </td>
                        <td className="py-3 px-2 text-center text-base text-gray-900">
                          {row.f}
                        </td>
                        <td className="py-3 px-2 text-center text-base text-gray-900">
                          {row.a}
                        </td>
                        <td className="py-3 px-2 text-center text-base font-semibold text-gray-900">
                          {row.gd}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default MediaFeedAndLeaderboard;
