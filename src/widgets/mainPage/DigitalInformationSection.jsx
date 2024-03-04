const DigitalInformationSection = () => {
  return (
    <section className="bg-[#000000] h-[508px] flex justify-center items-center">
      <section className="container mx-auto items-center align-middle  ">
        <h4 className="font-medium text-[50px] text-center text-[#f5f5f5] ">
          За все время
        </h4>
        <div className="flex justify-center  mt-[60px]">
          <div className="flex  ">
            <h5 className="font-semibold flex text-[100px] leading-[50%]  text-[#d76843]">
              1500+
            </h5>
            <div className="ml-[51px] w-[1px] h-[101px] bg-[#555555]"></div>
          </div>
          <div className="flex  ml-[80px]">
            <h5 className="font-semibold text-[100px] leading-[50%]  text-[#d76843]">
              3000+
            </h5>
            <div className="ml-[51px] w-[1px] h-[101px] bg-[#555555]"></div>
          </div>
          <div className="flex ml-[80px]">
            <h5 className="font-semibold text-[100px] leading-[50%]  text-[#d76843]">
              1000+
            </h5>
          </div>
        </div>
      </section>
    </section>
  );
};

export default DigitalInformationSection;
