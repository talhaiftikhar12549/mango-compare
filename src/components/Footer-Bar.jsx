import footerLogo from "../assets/footer/footerLogo.png";
import facebookIcon from "../assets/footer/facebook.png";
import instaIcon from "../assets/footer/insta.png";
import linkedInIcon from "../assets/footer/linkedIn.png";
export default function FooterBar() {
  return (
    <>
      <footer className="bg-[#141414] flex justify-center align-items-center w-full pt-[60px]">
        <div className=" text-white max-w-[1280px]">
          <div className="container mx-auto px-4">
            {/* Main Footer */}
            <div className="flex flex-wrap">
              {/* Left Column */}
              <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                <img
                  src={footerLogo}
                  alt="Structo Construction Logo"
                  className="mb-4"
                />
                <p className="text-[20px] font-normal">
                  Stay updated with the latest in construction trends and news.
                  Sign up for our newsletter!
                </p>
                <div className="mt-[50px] flex bg-white rounded-lg p-2 shadow-md">
                  <input
                    type="email"
                    placeholder="Email address"
                    className=" flex-1 border-none p-3 text-[18px] outline-none rounded-l-lg  font-normal "
                  />

                  <button className=" text-[16px] font-semibold  bg-[#FFC836] px-8  rounded-[10px]  transition  duration-300  ease-in-out  hover:bg-[#E6AE30] ">
                    Subscribe
                  </button>
                </div>
              </div>
              {/* Right Column */}
              <div className="w-full lg:w-1/2">
                <div className="flex flex-wrap">
                  {/* Contact Column */}
                  <div className="w-full md:w-1/2 mb-8 md:mb-0">
                    <h3 className="text-xl font-semibold mb-4 text-white">
                      Contact
                    </h3>
                    <ul className="w-3/4 space-y-2 text-gray-300">
                      <li>Address: 1234 Builder Lane, Cityville, ST 56789</li>
                      <li>Phone: +1 (123) 456‑7890</li>
                      <li>Hours: 8:00 AM – 6:00 PM</li>
                    </ul>
                  </div>

                  {/* Links & Social Column */}
                  <div className="w-full md:w-1/2 flex flex-col justify-evenly">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white">
                        Recent Projects
                      </h3>
                      {/* insert links or a list here if you have them */}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white">
                        Blogs
                      </h3>
                      {/* insert links or a list here if you have them */}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white">
                        Social Media
                      </h3>
                      <div className="flex items-center justify-start gap-4 py-2">
                        <img
                          src={facebookIcon}
                          alt="Facebook"
                          className="h-6 w-6"
                        />
                        <img
                          src={instaIcon}
                          alt="Instagram"
                          className="h-6 w-6"
                        />
                        <img
                          src={linkedInIcon}
                          alt="LinkedIn"
                          className="h-6 w-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Mini Footer */}
            <div className="border-t border-gray-700 mt-8 py-4">
              <div className="flex flex-wrap items-center">
                <div className="w-1/2">
                  <p>© 2024 Structo Construction. All Rights Reserved.</p>
                </div>
                <div className="w-1/2 flex justify-end items-center space-x-3">
                  <p className="cursor-pointer hover:underline">Privacy</p>
                  <p className="cursor-pointer hover:underline">
                    Terms &amp; Conditions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
