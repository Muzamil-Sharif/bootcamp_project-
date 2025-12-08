"use client";

import { FC, useState } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `MembershipForm`.
 */
export type MembershipFormProps =
  SliceComponentProps<Content.MembershipFormSlice>;

/**
 * Component for "MembershipForm" Slices.
 */
const MembershipForm: FC<MembershipFormProps> = ({ slice }) => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isHealthCondition, setIsHealthCondition] = useState<string | null>(
    null
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<
    "success" | "error" | null
  >(null);

  const handleInputChange = (label: string, value: string) => {
    const key = label.toLowerCase().replace(/[^a-z0-9]/g, "_");
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);

    try {
      const response = await fetch("/api/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          health_condition: isHealthCondition,
        }),
      });

      if (response.ok) {
        setSubmissionStatus("success");
        setFormData({});
        setIsHealthCondition(null);
      } else {
        setSubmissionStatus("error");
      }
    } catch (error) {
      console.error(error);
      setSubmissionStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper to find label from Prismic fields
  const getLabel = (
    fields: Content.MembershipFormSliceDefaultPrimaryPersonalFieldsItem[] | Content.MembershipFormSliceDefaultPrimaryContactFieldsItem[],
    key: string
  ) => {
    const field = fields.find((item) =>
      item.label?.toLowerCase().includes(key.toLowerCase())
    );
    return field?.label || key;
  };

  // Specific label lookups from Prismic
  // Specific label lookups from Prismic
  const nameLabel = getLabel(slice.primary.personal_fields, "Name (required)");
  const firstNameLabel = getLabel(slice.primary.personal_fields, "First Name");
  const lastNameLabel = getLabel(slice.primary.personal_fields, "Last Name");
  const dobLabel = getLabel(slice.primary.personal_fields, "Date of Birth") || getLabel(slice.primary.personal_fields, "DOB");
  const emailLabel = getLabel(slice.primary.personal_fields, "Email") || getLabel(slice.primary.contact_fields, "Email");
  const phone1Label = getLabel(slice.primary.personal_fields, "Phone Number 1") || getLabel(slice.primary.contact_fields, "Phone Number 1") || "Phone Number 1";
  const phone2Label = getLabel(slice.primary.personal_fields, "Phone Number 2") || getLabel(slice.primary.contact_fields, "Phone Number 2") || "Phone Number 2";

  const addressLabel = getLabel(slice.primary.personal_fields, "Address") || "Address";
  const street1Label = getLabel(slice.primary.personal_fields, "Street Address") || "Street Address";
  const street2Label = getLabel(slice.primary.personal_fields, "Street Address 2") || "Street Address 2";
  const cityLabel = getLabel(slice.primary.personal_fields, "City") || "City";
  const zipLabel = getLabel(slice.primary.personal_fields, "Zip Code") || "Zip Code";

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full font-inter bg-white text-black"
    >
      <div className="pt-40 px-4 md:px-0 max-w-[1180px] mx-auto pb-32">
        {/* Main Title */}
        <div className="text-center mb-24 xl:text-5xl font-bold xl:w-[775px] xl:h-[78px] xl:mx-auto">
          <PrismicRichText
            field={slice.primary.title}
            components={{
              heading1: ({ children }) => (
                <h1 className="text-5xl md:text-[64px] font-bold mb-4 tracking-tight">
                  {children}
                </h1>
              )
            }}
          />
        </div>

        {submissionStatus === "success" ? (
          <div className="text-center p-12 bg-lime-50 rounded-3xl border border-lime-200">
            <h3 className="text-2xl font-bold mb-4 text-lime-900">
              Thank You!
            </h3>
            <p className="text-lg text-lime-800">
              Your application has been submitted successfully.
            </p>
            <button
              onClick={() => setSubmissionStatus(null)}
              className="mt-6 text-lime-900 underline font-semibold hover:text-black transition-colors"
            >
              Submit another application
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-12 max-w-[1180px] mx-auto"
          >
            {/* Personal Fields Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
              {/* --- Name Section --- */}
              <div className="md:col-span-2">
                <label className="block text-xl md:text-[20px] font-normal mb-3 text-black">
                  {nameLabel}
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <input
                      required
                      type="text"
                      className="w-full h-[60px] px-6 xl:font-normal xl:text-[20px] rounded-full border border-black text-lg placeholder-transparent focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                      onChange={(e) =>
                        handleInputChange("first_name", e.target.value)
                      }
                    />
                    <p className="mt-2 text-[#757575] text-sm pl-6 font-light">
                      {firstNameLabel}
                    </p>
                  </div>
                  <div>
                    <input
                      required
                      type="text"
                      className="w-full h-[60px] px-6 rounded-full border border-black text-lg placeholder-transparent focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                      onChange={(e) =>
                        handleInputChange("last_name", e.target.value)
                      }
                    />
                    <p className="mt-2 text-[#757575] text-sm pl-6 font-light">
                      {lastNameLabel}
                    </p>
                  </div>
                </div>
              </div>

              {/* --- Date of Birth & Email --- */}
              <div className="md:col-span-1">
                <label className="block text-xl md:text-[20px] font-normal mb-3 text-black">
                  {dobLabel}
                </label>
                <input
                  required
                  type="text"
                  className="w-full h-[60px] px-6 rounded-full border border-black text-lg placeholder-transparent focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                  placeholder=""
                  onChange={(e) =>
                    handleInputChange("date_of_birth", e.target.value)
                  }
                />
              </div>

              <div className="md:col-span-1">
                <label className="block text-xl md:text-[20px] font-normal mb-3 text-black">
                  {emailLabel}
                </label>
                <input
                  required
                  type="email"
                  className="w-full h-[60px] px-6 rounded-full border border-black text-lg placeholder-transparent focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                  placeholder=""
                  onChange={(e) => handleInputChange("email", e.target.value)}
                />
              </div>

              {/* --- Phone Numbers --- */}
              <div className="md:col-span-1">
                <label className="block text-xl md:text-[20px] font-normal mb-3 text-black">
                  {phone1Label}
                </label>
                <input
                  required
                  type="tel"
                  className="w-full h-[60px] px-6 rounded-full border border-black text-lg placeholder-transparent focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                  placeholder=""
                  onChange={(e) =>
                    handleInputChange("phone_number_1", e.target.value)
                  }
                />
              </div>

              <div className="md:col-span-1">
                <label className="block text-xl md:text-[20px] font-normal mb-3 text-black">
                  {phone2Label}
                </label>
                <input
                  type="tel"
                  className="w-full h-[60px] px-6 rounded-full border border-black text-lg placeholder-transparent focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                  placeholder=""
                  onChange={(e) =>
                    handleInputChange("phone_number_2", e.target.value)
                  }
                />
              </div>

              {/* --- Address Section --- */}
              <div className="md:col-span-2 mt-4">
                <label className="block text-[24px] md:text-[20px] font-bold mb-3 text-black">
                  {addressLabel}
                </label>
                <div className="flex flex-col gap-8">
                  <div className="w-full">
                    <input
                      type="text"
                      className="w-full h-[60px] px-6 rounded-full border border-black text-lg placeholder-transparent focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                      onChange={(e) =>
                        handleInputChange("street_address", e.target.value)
                      }
                      placeholder=""
                    />
                    <p className="mt-2 text-[#757575] text-sm pl-6 font-light">
                      {street1Label}
                    </p>
                  </div>

                  <div className="w-full">
                    <input
                      type="text"
                      className="w-full h-[60px] px-6 rounded-full border border-black text-lg placeholder-transparent focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                      onChange={(e) =>
                        handleInputChange("street_address_2", e.target.value)
                      }
                      placeholder=""
                    />
                    <p className="mt-2 text-[#757575] text-sm pl-6 font-light">
                      {street2Label}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <input
                        type="text"
                        className="w-full h-[60px] px-6 rounded-full border border-black text-lg placeholder-transparent focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                        onChange={(e) => handleInputChange("city", e.target.value)}
                        placeholder=""
                      />
                      <p className="mt-2 text-[#757575] text-sm pl-6 font-light">
                        {cityLabel}
                      </p>
                    </div>
                    <div>
                      <input
                        type="text"
                        className="w-full h-[60px] px-6 rounded-full border border-black text-lg placeholder-transparent focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                        onChange={(e) =>
                          handleInputChange("zip_code", e.target.value)
                        }
                        placeholder=""
                      />
                      <p className="mt-2 text-[#757575] text-sm pl-6 font-light">
                        {zipLabel}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Health Information */}
            <div className="pt-12">
              <div className="text-center xl:text-[36px] font-bold mb-10">
                <PrismicRichText
                  field={slice.primary.health_info_heading}
                  components={{
                    heading2: ({ children }) => (
                      <h2 className="text-3xl md:text-[32px] font-bold text-center">
                        {children}
                      </h2>
                    ),
                  }}
                />
              </div>

              <div className="flex flex-col items-center space-y-6">
                <p className="text-[18px] md:text-[20px] font-medium text-left w-full xl:w-[841px] xl:mr-80">
                  {slice.primary.health_question}
                </p>

                <div className="flex gap-4">
                  {["Yes", "No"].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setIsHealthCondition(option)}
                      className={`min-w-[100px] h-[50px] rounded-full border border-black text-lg transition-all ${isHealthCondition === option
                        ? "bg-black text-white"
                        : "bg-white text-black hover:bg-gray-50"
                        }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>

                <div className="w-full mt-6">
                  <div className="max-w-full">
                    <label className="block text-xl md:text-[20px] font-normal mb-3 text-black">
                      {slice.primary.health_specify_label}
                    </label>
                    <input
                      type="text"
                      className="w-full h-[60px] px-6 rounded-full border border-black text-lg placeholder-transparent focus:outline-none focus:border-black focus:ring-1 focus:ring-black"
                      onChange={(e) =>
                        handleInputChange("health_details", e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="pt-12">
              <h3 className="text-3xl md:text-[32px] font-bold text-center mb-10">
                {slice.primary.emergency_contact}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                {/* --- Emergency Name Section --- */}
                <div className="md:col-span-2">
                  <label className="block text-xl md:text-[20px] font-normal mb-3 text-black">
                    {getLabel(slice.primary.emergency_contact_fields, "Name (required)")}
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <input
                        required
                        type="text"
                        className="w-full h-[60px] px-6 rounded-full border border-black text-lg placeholder-transparent focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                        onChange={(e) =>
                          handleInputChange("emergency_first_name", e.target.value)
                        }
                      />
                      <p className="mt-2 text-[#757575] text-sm pl-6 font-light">
                        {getLabel(slice.primary.emergency_contact_fields, "First Name") || "First Name"}
                      </p>
                    </div>
                    <div>
                      <input
                        required
                        type="text"
                        className="w-full h-[60px] px-6 rounded-full border border-black text-lg placeholder-transparent focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                        onChange={(e) =>
                          handleInputChange("emergency_last_name", e.target.value)
                        }
                      />
                      <p className="mt-2 text-[#757575] text-sm pl-6 font-light">
                        {getLabel(slice.primary.emergency_contact_fields, "Last Name") || "Last Name"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* --- Emergency Phone Section --- */}
                <div className="md:col-span-1">
                  <label className="block text-xl md:text-[20px] font-normal mb-3 text-black">
                    {getLabel(slice.primary.emergency_contact_fields, "Phone Number")}
                  </label>
                  <input
                    required
                    type="tel"
                    className="w-full h-[60px] px-6 rounded-full border border-black text-lg placeholder-transparent focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                    placeholder=""
                    onChange={(e) =>
                      handleInputChange("emergency_phone", e.target.value)
                    }
                  />
                </div>

                {/* Remaining Dynamic Emergency Fields */}
                {slice.primary.emergency_contact_fields
                  .filter((item) => {
                    const label = item.label?.toLowerCase() || "";
                    const excluded = [
                      "name", "first name", "last name",
                      "phone", "phone number", "required"
                    ];
                    return !excluded.some((ex) => label.includes(ex));
                  })
                  .map((item, index) => {
                    return (
                      <div key={index} className="md:col-span-1">
                        <label className="block text-xl md:text-[20px] font-normal mb-3 text-black">
                          {item.label}
                        </label>
                        <input
                          required
                          type="text"
                          className="w-full h-[60px] px-6 rounded-full border border-black text-lg placeholder-transparent focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                          placeholder=""
                          onChange={(e) =>
                            item.label &&
                            handleInputChange(
                              `emergency_${item.label}`,
                              e.target.value
                            )
                          }
                        />
                      </div>
                    );
                  })}
              </div>
            </div>

            <div className="text-center pt-16 pb-12">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-[245px] h-[60px] xl:w-[250px] xl:h-[84px] bg-[#D9FF00] text-black font-medium text-[24px] md:text-[18px] rounded-full hover:bg-[#ccec00] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
              >
                {isSubmitting
                  ? "Submitting..."
                  : slice.primary.submit_button_text || "Submit"}
              </button>

              <div className="mt-8 xl:mt-22 text-[16px] xl:text-[20px] text-black w-full xl:top-[920px] max-w-[1179px] mx-auto font-normal leading-relaxed xl:leading-[32.3px] tracking-normal text-left">
                <PrismicRichText field={slice.primary.footnote} />
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default MembershipForm;
