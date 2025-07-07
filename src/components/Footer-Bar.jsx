import footerLogo from "../assets/footer/footerLogo.webp";
import { NavLink } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { RiTwitterXLine } from "react-icons/ri";
export default function FooterBar() {
  return (
    <>
      <footer className="bg-[#141414] flex justify-center align-items-center w-full pt-[60px]">
        <div className=" text-white max-w-[1280px] custom-width  w-[100%] lg:px-[40px] xl:px-0 px-[16px] ">
          <div className="mx-auto px-0">
            {/* Main Footer */}
            <div className="flex flex-col md:flex-row flex-wrap md:justify-between justify-center align-items-center">
              {/* Left Column */}
              <div className="w-[100%] md:w-[40%] mb-8 lg:mb-0">
                <img
                  src={footerLogo}
                  alt="Structo Construction Logo"
                  className="mb-4 max-h-[57px]"
                />
                <p className="text-[16px] font-normal">
                  Mango is the UK’s go-to price comparison platform for weight
                  loss medications, helping you find the best deals on
                  GP-prescribed Mounjaro and Wegovy.
                </p>
              </div>

              {/* Right Column */}
              <div className="w-[100%] md:w-[50%] lg:w-1/2">
                <div className="flex flex-wrap just">
                  {/* Contact Column */}
                  <div className="w-full md:w-1/2 mb-8 md:mb-0">
                    <h3 className="text-xl font-semibold mb-4 !text-white">
                      Links
                    </h3>
                    <span className="w-3/4 space-y-[16px] pt-[24px] text-gray-300 flex flex-col ">
                      <NavLink
                        aria-label="Home"
                        className="hover:text-[#FCC821]"
                        to="/"
                      >
                        Home
                      </NavLink>

                      <NavLink
                        aria-label="Mounjaro"
                        className="hover:text-[#FCC821]"
                        to="mounjaro-compare"
                      >
                        Mounjaro
                      </NavLink>

                      <NavLink
                        aria-label="Wegovy"
                        className="hover:text-[#FCC821]"
                        to="wegovy-compare"
                      >
                        Wegovy
                      </NavLink>

                      <NavLink
                        aria-label="Blogs"
                        className="hover:text-[#FCC821]"
                        to="blogs"
                      >
                        Blogs
                      </NavLink>

                      <NavLink
                        aria-label="Forum"
                        className="hover:text-[#FCC821]"
                        to="contact-us"
                      >
                        Contact Us
                      </NavLink>
                    </span>
                  </div>

                  {/* Links & Social Column */}
                  <div className="w-full md:w-1/2 flex flex-col gap-y-[36px]">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 !text-white">
                        Contact
                      </h3>
                      <span className="w-3/4 space-y-[16px] pt-[24px] text-gray-300">
                        <p className="whitespace-normal break-words max-w-full mt-10">
                          <a
                            href="mailto:info@mangocompare.co.uk"
                            className="pointer"
                          >
                            info@mangocompare.co.uk
                          </a>
                        </p>

                        {/* <li>Phone: +1 (123) 456‑7890</li> */}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl text-start font-semibold mb-2 !text-white">
                        Social Media
                      </h3>
                      <div className="flex justify-start items-center  gap-2 py-2">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.facebook.com/share/12KVqbtETnb/"
                          className="transition-transform duration-200 hover:scale-110"
                          aria-label="Share on Facebook"
                          title="Share on Facebook"
                        >
                          <FaFacebookF
                            className="text-[24px] transition-colors duration-200"
                            style={{ color: "#FFFFFF" }} // initial color
                            onMouseEnter={(e) =>
                              (e.currentTarget.style.color = "#FCC821")
                            }
                            onMouseLeave={(e) =>
                              (e.currentTarget.style.color = "#FFFFFF")
                            }
                          />
                        </a>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.instagram.com/mangocompare/"
                          className="transition-transform duration-200 hover:scale-110"
                          aria-label="Share on Instagram"
                          title="Share on Instagram"
                        >
                          <FaInstagram
                            className="text-[24px] transition-colors duration-200"
                            style={{ color: "#FFFFFF" }} // initial color
                            onMouseEnter={(e) =>
                              (e.currentTarget.style.color = "#FCC821")
                            }
                            onMouseLeave={(e) =>
                              (e.currentTarget.style.color = "#FFFFFF")
                            }
                          />
                        </a>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.tiktok.com/@mangocompare"
                          className="transition-transform duration-200 hover:scale-110"
                          aria-label="Share on tiktok"
                          title="Share on tiktok"
                        >
                          <IoLogoTiktok
                            className="text-[24px] transition-colors duration-200"
                            style={{ color: "#FFFFFF" }} // initial color
                            onMouseEnter={(e) =>
                              (e.currentTarget.style.color = "#FCC821")
                            }
                            onMouseLeave={(e) =>
                              (e.currentTarget.style.color = "#FFFFFF")
                            }
                          />
                        </a>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://x.com/MangoCompare"
                          className="transition-transform duration-200 hover:scale-110"
                          aria-label="Share on twitter"
                          title="Share on twitter"
                        >
                          <RiTwitterXLine
                            className="text-[24px] transition-colors duration-200"
                            style={{ color: "#FFFFFF" }} // initial color
                            onMouseEnter={(e) =>
                              (e.currentTarget.style.color = "#FCC821")
                            }
                            onMouseLeave={(e) =>
                              (e.currentTarget.style.color = "#FFFFFF")
                            }
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mini Footer */}
            <div className="border-t w-full border-gray-700 mt-8 py-4">
              <div className="flex flex-col sm:flex-row items-center w-full">
                <div className="w-full  text-center sm:text-start">
                  <p className="text-center">
                    © 2025 Mango Compare. All Rights Reserved.
                  </p>
                </div>
                {/* <div className="w-full sm:w-1/2 flex justify-center sm:justify-end items-center space-x-8 text-center sm:text-end mt-2 sm:mt-0">
                  <p className="cursor-pointer hover:underline">Privacy</p>
                  <p className="cursor-pointer hover:underline">
                    Terms &amp; Conditions
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
