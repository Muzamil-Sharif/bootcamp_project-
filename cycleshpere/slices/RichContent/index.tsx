"use client";
import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `RichContent`.
 */
export type RichContentProps = SliceComponentProps<Content.RichContentSlice>;

/**
 * Component for "RichContent" Slices.
 */
const RichContent: FC<RichContentProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full bg-white py-12 md:py-16"
    >
      <div className="max-w-[956px] mx-auto px-4 md:px-8">
        {/* First Text Block */}
        <div
          className="prose max-w-none mb-12 text-gray-800"
          style={{
            fontFamily: 'Outfit, sans-serif',
            fontWeight: 400,
            fontSize: '20px',
            lineHeight: '25px',
            letterSpacing: '0.05em'
          }}
        >
          <p className="mb-6 last:mb-0">
            <a
              href="https://www.cyclingnews.com/riders/wout-van-aert/"
              className="text-gray-900 transition-colors hover:text-blue-600"
              style={{
                textDecoration: 'underline',
                textDecorationStyle: 'solid',
                textDecorationThickness: '1px',
                textUnderlineOffset: '3px'
              }}
            >
              Wout van Aert
            </a> has returned to training after a short holiday break following the end of his road racing season, with the 2025-26 cyclocross season over the winter the next goal in his sights.
          </p>
          <p className="mb-6 last:mb-0">
            The Belgian racer concluded his season with the Super 8 Classic on September 20, rounding out a year which saw him win stages at the Giro d'Italia and <a
              href="https://www.cyclingnews.com/tour-de-france/"
              className="text-gray-900 transition-colors hover:text-blue-600"
              style={{
                textDecoration: 'underline',
                textDecorationStyle: 'solid',
                textDecorationThickness: '1px',
                textUnderlineOffset: '3px'
              }}
            >
              Tour de France
            </a> in addition to taking podium places at Dwars door Vlaanderen and De Brabantse Pijl.
          </p>
          <p className="mb-6 last:mb-0">
            Van Aert took a family vacation after ending his season a month ago, but on Tuesday, he was back to training again in preparation for racing through the winter.
          </p>
          <p className="mb-6 last:mb-0">
            He completed a flat 107km training ride near his home in Herentals on Tuesday morning, riding three hours at an average speed of 32.5kph. However, the <a
              href="https://www.strava.com/activities/16210319530"
              className="text-gray-900 transition-colors hover:text-blue-600"
              style={{
                textDecoration: 'underline',
                textDecorationStyle: 'solid',
                textDecorationThickness: '1px',
                textUnderlineOffset: '3px'
              }}
            >
              Strava ride
            </a> title of 'cramped' suggests he was a bit rusty after several weeks off the bike.
          </p>
          <p className="mb-6 last:mb-0">
            On Wednesday, Van Aert was back on the bike for a 62km ride, taking on a similarly flat route in just under two hours.
          </p>
        </div>

        {/* Cyclist Image */}
        {slice.primary.cyclist && (
          <div
            className="relative w-full mb-12 overflow-hidden shadow-sm mx-auto"
            style={{
              borderRadius: '25px',
              aspectRatio: '954/469',
              maxWidth: '954px'
            }}
          >
            <PrismicNextImage
              field={slice.primary.cyclist}
              className="w-full h-full object-cover"
            />

            {/* Latest Post Label */}
            {slice.primary.latest_test && (
              <div className="absolute top-6 right-6 text-black px-3 py-1.5 rounded text-sm font-semibold">
                {slice.primary.latest_test}
              </div>
            )}
          </div>
        )}

        {/* Second Text Block */}
        {slice.primary.text && (
          <div
            className="prose max-w-none text-gray-800"
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '25px',
              letterSpacing: '0.05em'
            }}
          >
            <p className="mb-6 last:mb-0">
              Last year, Van Aert and Van der Poel didn't make their season debuts until the Christmas Kerstperiode of racing.
            </p>
            <p className="mb-6 last:mb-0">
              Van Aert won two out of six races during his limited season, while Van der Poel was unbeaten in eight, including the World Championships in Lievin. Pidcock, meanwhile, skipped 'cross season altogether, instead opting to focus on preparing for his first 2025 road season with his new team, Q36.5.
            </p>
            <p className="mb-6 last:mb-0">
              The <a
                href="https://www.cyclingnews.com/road/teams/uci-worldtour/2025/visma-lease-a-bike/"
                className="text-gray-900 transition-colors hover:text-blue-600"
                style={{
                  textDecoration: 'underline',
                  textDecorationStyle: 'solid',
                  textDecorationThickness: '1px',
                  textUnderlineOffset: '3px'
                }}
              >
                Visma-Lease A Bike
              </a> leader will return to the mud of cyclocross this winter, though his schedule hasn't yet been confirmed with the European top-level season having recently gotten underway.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default RichContent;
