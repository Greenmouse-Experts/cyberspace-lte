// import { NavLink } from "react-router-dom";

interface BannerProps {
  title: string;
  text: string;
  image?: string;
}

function Banner({ title, text, image }: BannerProps) {
  console.log(text)

  return (
    <section className="xl:mt-32 mt-20 mx-0  relative h-[300px] xl:mb-24 mb-10">
      <img src={ `${image}`} alt="" className=" w-full h-full object-cover object-top  " />
      <div
        className={` flex flex-col justify-center items-center px-[7%] mx-0 text-white gap-3 w-full h-full absolute xl:top-[55%] top-1/2 lg:left-[16%] left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
      >
        {/* <p className="font-inter uppercase tracking-widest sm:text-base text-[12px] font-[300] cursor-pointer">
          <NavLink to="/">
            <span>Home</span>
          </NavLink>{" "}
          / <span className="font-semibold self-center">{text}</span>
        </p> */}
        <h3 className=" !text-white  font-semibold font-inter uppercase">
          {title}
        </h3>
      </div>
    </section>
  );
}

export default Banner;
