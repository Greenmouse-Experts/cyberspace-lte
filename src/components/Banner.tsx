
interface BannerProps{
    title:string;
    text:string;
}

function Banner({title, text}:BannerProps) {
  return (
    <section className=" bg-bluePrimary flex flex-col justify-center items-center h-[260px] mx-0 text-white gap-3">
      <h4 className="text-4xl font-inter uppercase">{title}</h4>
      <p className="font-inter uppercase tracking-widest font-[300]">
        <span>Home</span> /
       {text}
      </p>
    </section>
  );
}

export default Banner;
