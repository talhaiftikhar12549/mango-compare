import footerLogo from "../assets/footer/footerLogo.png";
import facebookIcon from "../assets/footer/facebook.png";
import instaIcon from "../assets/footer/insta.png";
import linkedInIcon from "../assets/footer/linkedIn.png";
export default function FooterBar() {
  return (
    <>
      <footer className="bg-[#141414] flex justify-center align-items-center w-full pt-[60px]">
        <div className=" text-white max-w-[1280px] w-[100%] lg:px-[40px] xl:px-0 px-[16px] ">
          <div className="mx-auto px-0">
            {/* Main Footer */}
            <div className="flex flex-col md:flex-row flex-wrap md:justify-between justify-center align-items-center">
              {/* Left Column */}
              <div className="w-[100%] md:w-[40%] mb-8 lg:mb-0">
                <img
                  src={footerLogo}
                  alt="Structo Construction Logo"
                  className="mb-4"
                />
                <p className="text-[20px] font-normal">
                  Stay updated with the latest in construction trends and news.
                  Sign up for our newsletter!
                </p>

                <div className="mt-[50px] relative flex flex-wrap bg-white rounded-lg p-2 shadow-md">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="flex-1 min-w-[200px] border-none p-3 text-[18px] text-[#6A778B] outline-none rounded-l-lg font-normal"
                  />
                  <button className="flex-shrink-0 text-[16px] font-semibold bg-[#FFC836] px-6 md:px-6 sm:px-4 rounded-[10px] cursor-pointer ease-in-out hover:text-[#FCC821] hover:bg-[#ffffff] transition duration-700 border-[2px] mt-2 sm:mt-0">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Right Column */}
              <div className="w-[100%] md:w-[50%] lg:w-1/2">
                <div className="flex flex-wrap">
                  {/* Contact Column */}
                  <div className="w-full md:w-1/2 mb-8 md:mb-0">
                    <h3 className="text-xl font-semibold mb-4 text-white">
                      Contact
                    </h3>
                    <ul className="w-3/4 space-y-[16px] pt-[24px] text-gray-300">
                      <li>mango@compare.com</li>
                      <li>Phone: +1 (123) 456‑7890</li>
                      {/* <li>Hours: 8:00 AM – 6:00 PM</li>
                      <li>Office Hours: Monday – Friday, 8:00 AM – 6:00 PM</li> */}
                    </ul>
                  </div>

                  {/* Links & Social Column */}
                  <div className="w-full md:w-1/2 flex flex-col gap-y-[36px]">
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
            <div className="border-t w-full border-gray-700 mt-8 py-4">
              <div className="flex flex-col sm:flex-row items-center w-full">
                <div className="w-full sm:w-1/2 text-center sm:text-start">
                  <p>© 2024 Structo Construction. All Rights Reserved.</p>
                </div>
                <div className="w-full sm:w-1/2 flex justify-center sm:justify-end items-center space-x-3 text-center sm:text-end mt-2 sm:mt-0">
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
