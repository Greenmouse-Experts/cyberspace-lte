import { GoArrowRight } from "react-icons/go";
import {
  IoCalendarClearOutline,
  IoChatbubbleEllipsesOutline,
} from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";

function News() {
  return (
    <section className="mt-32">
      <h3 className="text-[#191C1F] font-semibold 2xl:text-4xl  text-2xl text-center mb-5">
        Latest News
      </h3>
      <div className="flex items-center gap-8">
        <div className="font-pSans w-[33%] border-[1.2px] border-bluePrimary 2xl:p-8 p-5 rounded-[4px]">
          <img
            src="/img/news-1.png"
            alt="news"
            className="w-full object-cover object-center"
          />
          <div className="flex 2xl:gap-4 gap-3 font-pSans mt-6">
            <div className="flex items-center 2xl:gap-2 gap-1">
              <RxAvatar color="#FA8232" size={28} />
              <span className="2xl:text-[17px] text-[11px] text-[#475156]">
                Admin
              </span>
            </div>
            <div className="flex items-center 2xl:gap-2 gap-1">
              <IoCalendarClearOutline color="#FA8232" size={25} />
              <span className="2xl:text-[17px] text-[11px] text-[#475156]">
                8 March, 2024
              </span>
            </div>
            <div className="flex items-center 2xl:gap-2 gap-1">
              <IoChatbubbleEllipsesOutline color="#FA8232" size={25} />
              <span className="2xl:text-[17px] text-[11px] text-[#475156]">
                453
              </span>
            </div>
          </div>
          <p className="2xl:text-[21px] text-[15px] font-semibold 2xl:leading-[28px] leading-5 mt-3">
            Cras nisl dolor, accumsan et metus sit amet, vulputate condimentum
            dolor.
          </p>
          <p className="2xl:text-lg text-sm font-normal 2xl:leading-[28px] leading-5 mt-3 text-[#77878F]">
            Maecenas scelerisque, arcu quis tempus egestas, ligula diam molestie
            lectus, tincidunt malesuada arcu metus posuere metus.
          </p>
          <button className="border-[2px] border-[#FFE7D6] flex items-center font-bold 2xl:text-[17px] text-[11px] 2xl:py-3 py-2 2xl:px-5 px-3 mt-6 uppercase text-[#FA8232]">
            Read more
            &nbsp;
            <GoArrowRight color="#FA8232" size={20} />
          </button>
        </div>
        <div className="font-pSans w-[33%] border-[1.2px] border-bluePrimary 2xl:p-8 p-5 rounded-[4px]">
          <img
            src="/img/news-1.png"
            alt="news"
            className="w-full object-cover object-center"
          />
          <div className="flex 2xl:gap-4 gap-3 font-pSans mt-6">
            <div className="flex items-center 2xl:gap-2 gap-1">
              <RxAvatar color="#FA8232" size={28} />
              <span className="2xl:text-[17px] text-[11px] text-[#475156]">
                Admin
              </span>
            </div>
            <div className="flex items-center 2xl:gap-2 gap-1">
              <IoCalendarClearOutline color="#FA8232" size={25} />
              <span className="2xl:text-[17px] text-[11px] text-[#475156]">
                8 March, 2024
              </span>
            </div>
            <div className="flex items-center 2xl:gap-2 gap-1">
              <IoChatbubbleEllipsesOutline color="#FA8232" size={25} />
              <span className="2xl:text-[17px] text-[11px] text-[#475156]">
                453
              </span>
            </div>
          </div>
          <p className="2xl:text-[21px] text-[15px] font-semibold 2xl:leading-[28px] leading-5 mt-3">
            Cras nisl dolor, accumsan et metus sit amet, vulputate condimentum
            dolor.
          </p>
          <p className="2xl:text-lg text-sm font-normal 2xl:leading-[28px] leading-5 mt-3 text-[#77878F]">
            Maecenas scelerisque, arcu quis tempus egestas, ligula diam molestie
            lectus, tincidunt malesuada arcu metus posuere metus.
          </p>
          <button className="border-[2px] border-[#FFE7D6] flex items-center font-bold 2xl:text-[17px] text-[11px] 2xl:py-3 py-2 2xl:px-5 px-3 mt-6 uppercase text-[#FA8232]">
            Read more
            &nbsp;
            <GoArrowRight color="#FA8232" size={20} />
          </button>
        </div>
        <div className="font-pSans w-[33%] border-[1.2px] border-bluePrimary 2xl:p-8 p-5 rounded-[4px]">
          <img
            src="/img/news-1.png"
            alt="news"
            className="w-full object-cover object-center"
          />
          <div className="flex 2xl:gap-4 gap-3 font-pSans mt-6">
            <div className="flex items-center 2xl:gap-2 gap-1">
              <RxAvatar color="#FA8232" size={28} />
              <span className="2xl:text-[17px] text-[11px] text-[#475156]">
                Admin
              </span>
            </div>
            <div className="flex items-center 2xl:gap-2 gap-1">
              <IoCalendarClearOutline color="#FA8232" size={25} />
              <span className="2xl:text-[17px] text-[11px] text-[#475156]">
                8 March, 2024
              </span>
            </div>
            <div className="flex items-center 2xl:gap-2 gap-1">
              <IoChatbubbleEllipsesOutline color="#FA8232" size={25} />
              <span className="2xl:text-[17px] text-[11px] text-[#475156]">
                453
              </span>
            </div>
          </div>
          <p className="2xl:text-[21px] text-[15px] font-semibold 2xl:leading-[28px] leading-5 mt-3">
            Cras nisl dolor, accumsan et metus sit amet, vulputate condimentum
            dolor.
          </p>
          <p className="2xl:text-lg text-sm font-normal 2xl:leading-[28px] leading-5 mt-3 text-[#77878F]">
            Maecenas scelerisque, arcu quis tempus egestas, ligula diam molestie
            lectus, tincidunt malesuada arcu metus posuere metus.
          </p>
          <button className="border-[2px] border-[#FFE7D6] flex items-center font-bold 2xl:text-[17px] text-[11px] 2xl:py-3 py-2 2xl:px-5 px-3 mt-6 uppercase text-[#FA8232]">
            Read more
            &nbsp;
            <GoArrowRight color="#FA8232" size={20} />
          </button>
        </div>

      </div>
    </section>
  );
}

export default News;
