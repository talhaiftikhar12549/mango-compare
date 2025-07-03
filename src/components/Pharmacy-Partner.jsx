import { FaCheckCircle } from "react-icons/fa";

function PharmacyPartner() {
  const partners = [
    { name: "Boots", icon: "🏥" },
    { name: "Superdrug", icon: "💊" },
    { name: "LloydsDirect", icon: "🏪" },
    { name: "Numan", icon: "🔬" },
    { name: "Pharmacy First", icon: "🧪" },
    { name: "Well Pharmacy", icon: "🌡️" },
  ];

  return (
    <>
      <section className=" bg-gradient-to-r from-[rgb(16_185_129_/_0.05)] to-[rgb(245_158_11_/_0.05)] w-full">
        <div className="max-w-[1280px] mx-auto py-[48px]">
          <div className="  px-4 md:px-10 text-center">
            {/* Badge */}
            <div className="inline-block text-sm border border-green-200 px-4 py-1 rounded-full bg-green-100 text-[rgb(16_185_129)] font-semibold mb-3">
              GPhC Registered Partners
            </div>

            {/* Heading */}
            <h2 className="!text-[24px] md:!text-[24px] !font-[600] text-gray-900 mb-2">
              Trusted UK Pharmacies We Compare
            </h2>

            {/* Subtext */}
            <p className="text-gray-500 !text-[16px] md:!text-[18px] max-w-2xl mx-auto mb-10">
              We only work with fully licensed, GPhC-registered pharmacies to
              ensure your safety and peace of mind
            </p>

            {/* Partner Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-10">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white py-6 border-gray-50 border-1 px-4 flex flex-col items-center justify-center hover:border-[#10b98133] rounded-xl p-8 shadow-sm transform transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="text-4xl mb-3">{partner.icon}</div>
                  <p className="text-sm font-medium">{partner.name}</p>
                  <p className="text-xs text-[rgb(16_185_129)] flex items-center gap-1 mt-1">
                    <FaCheckCircle className="text-[rgb(16_185_129)]" />{" "}
                    Verified
                  </p>
                </div>
              ))}
            </div>

            {/* Highlight Box */}
            <div className="bg-green-50 border border-[#10b98133] text-center rounded-xl px-6 py-6 max-w-3xl mx-auto">
              <p className="font-semibold text-sm text-[rgb(16_185_129)] flex justify-center items-center gap-2 mb-1">
                <FaCheckCircle className="text-[rgb(16_185_129)]" />
                100% GPhC Registered
              </p>
              <p className="text-sm text-gray-600">
                Every pharmacy partner is verified by the General Pharmaceutical
                Council (GPhC) and licensed to dispense prescription medications
                in the UK.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PharmacyPartner;
