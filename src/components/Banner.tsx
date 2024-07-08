import { NavLink } from "react-router-dom";

interface BannerProps {
  title: string;
  text: string;
  image?: string;
}

function Banner({ title, text, image }: BannerProps) {
  console.log(image);
  return (
    <section className="xl:mt-32 mt-20 mx-0 bg-cover bg-center relative h-[260px] xl:mb-24 mb-10">
      <img src={image ? `${image}` : "/img/banner-img.png"} alt="" className=" w-full h-full object-cover object-center " />
      <div
        className={` flex flex-col justify-center items-center px-[7%] mx-0 text-white gap-3 w-full h-full absolute xl:top-[55%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
      >
        <p className="font-inter uppercase tracking-widest sm:text-base text-[12px] font-[300] cursor-pointer">
          <NavLink to="/">
            <span>Home</span>
          </NavLink>{" "}
          / <span className="font-semibold self-center">{text}</span>
        </p>
        <p className="sm:text-3xl text-2xl font-semibold font-inter uppercase">
          {title}
        </p>
      </div>
    </section>
  );
}

export default Banner;
