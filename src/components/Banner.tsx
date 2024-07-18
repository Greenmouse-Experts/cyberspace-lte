// import { NavLink } from "react-router-dom";

interface BannerProps {
  title: string;
  text: string;
  image?: string;
}

function Banner({ title, text, image }: BannerProps) {
  console.log(text)

  return (
    <section className="xl:mt-32 mt-20 mx-0  relative 2xl:h-[300px] xl:h-[250px] h-[200px] xl:mb-24 mb-10 px-0">
      <img src={image ? `${image}` : "/img/banner-img.png"} alt="" className=" w-full h-full object-cover sm:object-top object-right  " />
     
        <h4 className=" !text-white  font-semibold font-inter uppercase absolute top-[40%] left-[5%]">
          {title}
        </h4>
    </section>
  );
}

export default Banner;
