export default function StartYourJourney() {
  return (
    <>
      <section className="flex justify-center bg-gradient-to-br from-teal-400 via-yellow-400 to-orange-500 px-4 w-full">
        <div className="max-w-[1280px] w-full flex flex-col items-center py-12">
          <div className="w-full">
            <div className="bg-white rounded-xl shadow-lg p-5 md:p-6 sm:p-10 w-full max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 leading-snug">
                Start Your Weight <br className="md:hidden" /> Loss Journey
                Today
              </h2>
              <p className="text-gray-600 text-base md:text-lg mb-6">
                Join thousands of UK patients who have saved money on their
                weight loss medications. Compare prices from trusted pharmacies
                in seconds.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-1 text-sm text-gray-800 mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-[rgb(16_185_129)] text-xl">✔</span> 100%
                  GPhC Verified
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[rgb(16_185_129)] text-xl">✔</span> No
                  Hidden Fees
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[rgb(16_185_129)] text-xl">✔</span> Save
                  Up to 27%
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full mb-6">
                <a
                  href="#price-compare"
                  className="bg-orange-500 w-full md:w-auto text-center hover:shadow-md text-white font-bold py-3 px-6 rounded-lg text-md transition"
                >
                  Compare Prices Now →
                </a>
              </div>

              <p className="text-sm text-gray-500 mt-4">
                Free to use • Instant results • Secure and confidential
              </p>

              {/* <hr className="my-8 border-gray-200" /> */}

              {/* <div className="flex justify-center gap-4 md:gap-10 text-center">
                <div className="flex flex-col items-center justify-center">
                  <p className="text-[rgb(16_185_129)] font-bold text-xl">
                    15,000+
                  </p>
                  <p className="text-xs md:text-sm text-gray-600">
                    Happy Customers
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p className="text-[#ee9c25] font-bold text-xl">£2.1M+</p>
                  <p className="text-xs md:text-sm text-gray-600">
                    Total Savings
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p className="text-orange-500 font-bold text-xl">50+</p>
                  <p className="text-xs md:text-sm text-gray-600">
                    Partner Pharmacies
                  </p>
                </div>
              </div> */}

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
