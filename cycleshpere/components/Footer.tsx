import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import React from "react";

export default async function Footer() {
    const client = createClient();
    const footer = await client.getSingle("footer").catch(() => null);

    if (!footer) return null;

    const { data } = footer;

    return (
        <footer className="bg-black text-white w-full px-6 md:px-12 lg:px-16 py-12 md:py-20 font-family-name:var(--font-inter)">
            <div className="max-w-[1440px] mx-auto flex flex-col gap-16 md:gap-24">

                {/* Top Section: Thank You Note */}
                <div>
                    <div className="text-6xl md:text-8xl lg:text-[190px] font-extrabold leading-[0.97] tracking-normal">
                        <PrismicRichText field={data.thankyou_note} />
                    </div> 
                </div>

                {/* Content Stack */}
                <div className="flex flex-col gap-12">

                    {/* Sign Up Text */}
                    <div className="text-lg font-medium max-w-xs">
                        <PrismicRichText field={data.sign_up_text} />
                    </div>

                    {/* Links Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-sm md:text-base w-full max-w-4xl">

                        {/* Column 1: Socials */}
                        <div className="flex flex-col gap-1">
                            <PrismicRichText field={data.social_media_text} />
                        </div>

                        {/* Column 2: Center Copyright */}
                        <div className="flex flex-col gap-1">
                            <PrismicRichText field={data.copyright_text_centre} />
                        </div>

                        {/* Column 3: Terms */}
                        <div className="flex flex-col gap-1">
                            <PrismicRichText field={data.term_and_conditions} />
                        </div>

                    </div>

                    {/* Email Input Visual */}
                    <div className="relative mt-4 max-w-xs w-full">
                        <div className="text-gray-400 text-sm mb-2 flex items-center justify-between">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="focus outline-none font-bold placeholder-white text-white bg-transparent w-full"
                            />
                            <div className="w-4 h-4 shrink-0">
                                <PrismicNextImage field={data.arrow_vector} className="w-full h-full object-contain hover:scale-120 transition" />
                            </div>
                        </div>
                        <div className="w-full h-px bg-white relative">
                            <PrismicNextImage field={data.line_vector} className="w-full h-full object-cover absolute top-0 left-0" />
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center gap-6 pt-1 mx-14">
                        <div className="w-12 h-12">
                            <PrismicNextImage field={data.instagram_icon} className="w-full h-full object-contain" />
                        </div>
                        <div className="w-12 h-12">
                            <PrismicNextImage field={data.facebook_icon} className="w-full h-full object-contain" />
                        </div>
                        <div className="w-12 h-12">
                            <PrismicNextImage field={data.linkedin} className="w-full h-full object-contain" />
                        </div>
                        <div className="w-12 h-12">
                            <PrismicNextImage field={data.twitter_icon} className="w-full h-full object-contain" />
                        </div>
                    </div>

                    {/* Bottom Copyright */}
                    <div className="text-lg text-white font-medium pt-4">
                        <PrismicRichText field={data.copyright_text} />
                    </div>

                </div>

            </div>
        </footer>
    );
}
