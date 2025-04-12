import CardResult from "./Cards-Result";
export default function PriceCalculator() {
  return (
    <>
      <section className="max-w-[1280px] py-[100px] w-[100%]">
        <div className="flex w-[100%]">
          <div className="w-[20%]">meow</div>
          <div className="w-[80%]">
            <div className="flex w-[100%] bg-[#FCC821] py-[14px] rounded-[10px] px-[50px] text-[#05222E] text-[16px] font-[600]">
              <div className="w-[37%] ">
                <p>Pharmacy</p>
              </div>
              <div className="w-[12%]">
                <p>Price</p>
              </div>
              <div className="w-[12%]">
                <p>Quantity</p>
              </div>
              <div className="w-[12%]">
                <p>Rating</p>
              </div>
              <div className="w-[28%] text-center">
                <p>Website</p>
              </div>
            </div>
            {/* card section */}
            <div>
              <CardResult />
            </div>
            {/* card section */}
          </div>
        </div>
      </section>
    </>
  );
}
