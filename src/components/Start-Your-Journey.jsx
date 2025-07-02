export default function StartYourJourney() {
  return (
    <>
      <section className="flex justify-center bg-gradient-to-br from-teal-400 via-yellow-400 to-orange-500">
        <div className="max-w-[1280px] flex flex-col items-center py-[50px]">
          <div className="flex items-center justify-center  px-4">
            <div className="bg-white rounded-xl shadow-lg p-10 max-w-3xl w-full text-center">
              <h2 className="text-3xl md:!text-[32px] !font-[600] text-gray-900 mb-4">
                Start Your Weight <br className="md:hidden" /> Loss Journey
                Today
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Join thousands of UK patients who have saved money on their
                weight loss medications. Compare prices from trusted pharmacies
                in seconds.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm text-gray-800 mb-6">
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

              <a href="#price-compare" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition">
                Compare Wegovy & Mounjaro Prices →
              </a>

              <p className="text-sm text-gray-500 mt-6">
                Free to use • Instant results • Secure and confidential
              </p>

              <hr className="my-8 border-gray-200" />

              <div className="flex justify-center gap-10 text-center">
                <div>
                  <p className="text-[rgb(16_185_129)] font-bold text-xl">
                    15,000+
                  </p>
                  <p className="text-sm text-gray-600">Happy Customers</p>
                </div>
                <div>
                  <p className="text-[#ee9c25] font-bold text-xl">£2.1M+</p>
                  <p className="text-sm text-gray-600">Total Savings</p>
                </div>
                <div>
                  <p className="text-orange-500 font-bold text-xl">50+</p>
                  <p className="text-sm text-gray-600">Partner Pharmacies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
