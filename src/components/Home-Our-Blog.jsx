import blogImg1 from "../assets/home/blog-img1.png";
import blogImg2 from "../assets/home/blog-img2.png";
import blogImg3 from "../assets/home/blog-img3.png";
import { FaArrowRight } from "react-icons/fa";
export default function HomeOurBlog() {
  return (
    <>
      <section className="max-w-[1280px] w-full py-[100px] lg:max-w-[960px]">
        <div className=" d-flex pb-[50px] w-full justify-content-center align-items-center ">
          <h2 className="text-[39px] text-center font-[700] font-montserrat text-[#05222E]">
            Our Blogs
          </h2>
        </div>

        <div className="flex w-[100%] gap-[22px]">
          <div className="max-w-[413px]">
            <img src={blogImg1} alt="" />
            <h3 className="text-[22px] pt-[20px] pb-[10px] font-[500] font-montserrat text-[#000000]">
              Lorem ipsum dolor sit amet consectetur. Sed suscipit semper.
            </h3>
            <p className="text-[14px] font-[400] font-montserrat text-[#5B5C67]">
              Lorem ipsum dolor sit amet consectetur. Pellentesque arcu nisl at
              aliquam vitae donec consequat cursus vel. Viverra.
            </p>
            <h4 className="text-[18px] pt-[10px] font-[600] font-montserrat text-[#FCC821] inline-flex items-center">
              Read More
              <FaArrowRight className="ml-2" />
            </h4>
            
          </div>

          <div className="max-w-[413px]">
            <img src={blogImg2} alt="" />
            <h3 className="text-[22px] pt-[20px] pb-[10px] font-[500] font-montserrat text-[#000000]">
              Lorem ipsum dolor sit amet consectetur. Sed suscipit semper.
            </h3>
            <p className="text-[14px] font-[400] font-montserrat text-[#5B5C67]">
              Lorem ipsum dolor sit amet consectetur. Pellentesque arcu nisl at
              aliquam vitae donec consequat cursus vel. Viverra.
            </p>
            <h4 className="text-[18px] pt-[10px] font-[600] font-montserrat text-[#FCC821] inline-flex items-center">
              Read More
              <FaArrowRight className="ml-2" />
            </h4>
          </div>
          <div className="max-w-[413px]">
            <img src={blogImg3} alt="" />
            <h3 className="text-[22px] pt-[20px] pb-[10px] font-[500] font-montserrat text-[#000000]">
              Lorem ipsum dolor sit amet consectetur. Sed suscipit semper.
            </h3>
            <p className="text-[14px] font-[400] font-montserrat text-[#5B5C67]">
              Lorem ipsum dolor sit amet consectetur. Pellentesque arcu nisl at
              aliquam vitae donec consequat cursus vel. Viverra.
            </p>
            <h4 className="text-[18px] pt-[10px] font-[600] font-montserrat text-[#FCC821] inline-flex items-center">
              Read More
              <FaArrowRight className="ml-2" />
            </h4>
          </div>
        </div>
      </section>
    </>
  );
}
