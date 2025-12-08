"use client";
import { FC, useState } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

/**
 * Props for `ContactFormImageSide`.
 */
export type ContactFormImageSideProps =
  SliceComponentProps<Content.ContactFormImageSideSlice>;

/**
 * Component for "ContactFormImageSide" Slices.
 */
const ContactFormImageSide: FC<ContactFormImageSideProps> = ({ slice }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full bg-white py-12 md:py-16 lg:py-20"
    >
      <div className="max-w-[1440px] mx-auto px-4 mt-30 md:px-8 lg:px-16">
        {/* Contact Container with Border */}
        {/* <div className="border-4 border-[#A3D5FF] rounded-3xl md:rounded-[32px] p-6 md:p-8 lg:p-12"> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Contact Form */}
          <div className="flex flex-col">
            {/* Title */}
            <div className="text-4xl md:text-5xl font-normal lg:text-6xl xl:text-[99.9px] text-black mb-3 md:mb-4">
              <PrismicRichText field={slice.primary.form_title} />
            </div>

            {/* Description */}
            <div className="w-full md:w-[500px] xl:w-[534px] h-auto xl:h-[33px] text-base xl:text-[17px] xl:leading-[32.3px] text-black mb-8 md:mb-10" style={{ fontFamily: 'Pontano Sans, sans-serif' }}>
              <PrismicRichText field={slice.primary.form_description} />
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Name Label */}
              {slice.primary.name_label && (
                <label className="text-sm md:text-base font-medium text-black">
                  {slice.primary.name_label}
                </label>
              )}

              {/* First Name and Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="text-sm md:text-base font-medium text-black mb-2 block">
                    {slice.primary.first_name_label || "First Name"}
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full md:w-[250px] xl:w-[262px] h-[45px] xl:h-[50px] px-4 py-3 border border-black rounded-[29px] focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm md:text-base xl:-mx-10 font-medium text-black mb-2 block">
                    {slice.primary.last_name_label || "Last Name"}
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full md:w-[250px] xl:-mx-10 xl:w-[262px] h-[45px] xl:h-[50px] px-4 py-3 border border-black rounded-[29px] focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="text-sm md:text-base font-medium text-black mb-2 block">
                  {slice.primary.email_label || "Email"}
                </label>
                <input
                  type="email"
                  name="email"

                  value={formData.email}
                  onChange={handleChange}
                  className="w-full md:w-[480px] lg:w-[520px] xl:w-[538px] h-[45px] xl:h-[50px] px-4 py-3 border border-black rounded-full focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-sm md:text-base font-medium text-black mb-2 block">
                  {slice.primary.message_label || "Message"}
                </label>
                <textarea
                  name="message"

                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full md:w-[480px] lg:w-[520px] xl:w-[538px] px-4 py-3 border border-black rounded-3xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-auto self-start xl:w-[193px] xl:h-[77px] px-[30px] xl:px-[34px] py-[22px] xl:py-[25.5px] text-base md:text-lg xl:text-[20px] bg-[#D0FF00] text-black font-bold uppercase rounded-full xl:rounded-[300px] hover:bg-[#C4EF60] transition-colors duration-300"
              >
                {slice.primary.submit_button_label || "Send"}
              </button>
            </form>
          </div>

          {/* Right Column - Image */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-[350px] md:max-w-[400px] lg:max-w-none lg:w-auto rounded-3xl md:rounded-[32px] overflow-hidden">
              <PrismicNextImage
                field={slice.primary.side_image}
                fallbackAlt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default ContactFormImageSide;
