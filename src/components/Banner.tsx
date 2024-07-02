import { NavLink } from "react-router-dom";

interface BannerProps {
  title: string;
  text: string;
}

function Banner({ title, text }: BannerProps) {
  return (
    <section className=" xl:pt-32 pt-20  mx-0  bg-cover bg-center ">
      <div className="bg-[url('/img/banner-img.png')] flex flex-col justify-center items-center px-[7%] h-[260px] mx-0 text-white gap-3 ">
        <p className="font-inter uppercase tracking-widest sm:text-base text-[12px] font-[300] cursor-pointer">
         <NavLink to="/"> <span>Home</span></NavLink> / <span className=" font-semibold self-center">{text}</span>
        </p>
        <p className="sm:text-4xl text-2xl font-semibold font-inter uppercase">{title}</p> 
      </div>
    </section>
  );
}

export default Banner;
