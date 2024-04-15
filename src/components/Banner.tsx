
interface BannerProps{
    title:string;
    text:string;
}

function Banner({title, text}:BannerProps) {
  return (
    <section className=" bg-bluePrimary flex flex-col justify-center items-center h-[260px] mx-0 text-white gap-3 lg:mt-40 mt-24">
      <h4 className="sm:text-4xl text-2xl font-inter uppercase">{title}</h4>
      <p className="font-inter uppercase tracking-widest sm:text-base text-[12px] font-[300]">
        <span>Home</span> /
       {text}
      </p>
    </section>
  );
}

export default Banner;
