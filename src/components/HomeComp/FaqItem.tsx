import { useState } from "react";
import { FaPlus } from "react-icons/fa";

interface AccodionProps {
  title: string;
  answer: string | JSX.Element;
  open: boolean;
}

const FaqItem = ({ title, answer,open }: AccodionProps) => {
  const [accordionOpen, setAccordionOpen] = useState(open);

  return (
    <>
      <div
        className={`md:py-8 py-3  px-5 rounded-lg border border-bluePrimary ${
          accordionOpen ? "bg-bluePrimary text-white mb-5" : "bg-blueLight dark:bg-darkMood mb-5"
        } `}
        onClick={() => setAccordionOpen(!accordionOpen)}
      >
        <button className="flex justify-between w-full items-center">
          <span
            className={`font-sora 2xl:text-[22px] text-left 2xl:font-[400] text-base font-normal  ${
              accordionOpen ? "white" : "black"
            }`}
          >
            {title}
          </span>
          {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
          <FaPlus  size={10} color={accordionOpen ? "white" : "black"} />
        </button>
      </div>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div
          className={`overflow-hidden text-grayPrimary2 ${
            accordionOpen ? "mb-6" : ""
          }`}
        >
         <p className="leading-[30px] text-black font-normal text-base"> {answer}</p>
        </div>
      </div>
    </>
  );
};

export default FaqItem;
