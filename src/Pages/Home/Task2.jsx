import { FiArrowRight } from "react-icons/fi";

const Task2 = () => {
    return (
    <div className="flex flex-col items-center justify-center w-full min-h-[644px] px-6 sm:px-12 md:px-[120px] py-[60px] md:py-[120px] bg-white">
  <div className="flex flex-col w-full 
                  max-w-full sm:max-w-[95%] md:max-w-[1360px] 
                  p-6 sm:p-10 md:p-[80px] gap-[32px] 
                  rounded-[24px] bg-[#0058FF] text-center text-white">
    {/* Heading */}
    <h2 className="max-w-[1200px] mx-auto font-inter font-bold text-[32px] sm:text-[40px] md:text-[48px] leading-[100%] tracking-[-0.03em] text-center">
      Get In Touch
    </h2>

    {/* Paragraph */}
    <p className="max-w-[1000px] mx-auto font-inter font-normal text-[16px] sm:text-[18px] leading-[26px] sm:leading-[30px] tracking-[0em] text-center">
      Contact us now to enquire our plumbing services, whether you have a
      commercial project that requires support, or a domestic plumbing task
      that needs the attention of a trusted professional.
    </p>

    {/* Button */}
    <button className="flex items-center justify-center gap-[12px] sm:gap-[16px] md:gap-[24px] px-[20px] sm:px-[24px] py-[10px] h-[52px] bg-[#FFFFFF] text-[#0058FF] rounded-md hover:bg-gray-100 transition mx-auto">
      <span className="font-inter font-bold text-[14px] sm:text-[16px] leading-[30px] tracking-[-0.01em] text-center">
        Book a Professional Plumber
      </span>
      <FiArrowRight className="text-[18px] sm:text-[20px]" />
    </button>
  </div>
</div>

    );
};

export default Task2;
