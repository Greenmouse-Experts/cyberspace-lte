
import { useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";

interface AccordionProps {
  index: number;
  title: string;
  answer: string | JSX.Element;
  open: boolean;
  toggleAccordion: (index: number) => void;
}

const FaqItem = ({ index, title, answer, open, toggleAccordion }: AccordionProps) => {

  useEffect(() => {
   toggleAccordion(0)
  }, [])
  
 

  return (
    <>
      <div
        className={`md:py-8 py-5 px-5 rounded-lg border border-bluePrimary ${open ? "bg-bluePrimary text-white mb-5" : "bg-blueLight dark:bg-darkMood mb-5"}`}
        onClick={() => toggleAccordion(index)}
      >
        <button className="flex justify-between w-full items-center">
          <span className={`font-sora text-left 2xl:font-[400] text-base font-normal ${open ? "text-white" : "text-black"}`}>
            {title}
          </span>
          {open ? (
            <span>
              <FaMinus size={10} className="!text-black dark:!text-white" />
            </span>
          ) : (
            <span>
              <FaPlus size={10} className="!text-black dark:!text-white" />
            </span>
          )}
        </button>
      </div>
      <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className={`overflow-hidden text-grayPrimary2 ${open ? "mb-6" : ""}`}>
          <p className="leading-[30px] text-black font-normal text-base ml-5">
            {answer}
          </p>
        </div>
      </div>
    </>
  );
};

export default FaqItem;
