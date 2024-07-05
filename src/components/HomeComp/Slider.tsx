// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import "animate.css";
function Slider() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const slideLength = 3; // Total number of slides
  const transitionTime = 6000; // Transition time in milliseconds
  let slideInterval;

  useEffect(() => {
    // Auto change slide at intervals
    // eslint-disable-next-line react-hooks/exhaustive-deps
    slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide % slideLength) + 1);
    }, transitionTime);

    return () => clearInterval(slideInterval);
  }, []);
  return (
    <>
      {currentSlide === 1 && (
        <div className="bg-[url('/img/hero-bg-1.png')] bg-cover bg-center sm:pl-24 sm:pr-10 px-5 py-10 rounded-[21px] flex   md:flex-row flex-col md:items-center md:gap-0 gap-10 items-center justify-between ">
          <div className="gap-10 text-white animate__animated  animate__fadeIn animate__delay-3 ">
            <p className="font-medium 2xl:text-3xl text-2xl ">
              Double Your Online Presence
            </p>
            <h3 className="2xl:text-6xl md:text-5xl text-4xl font-semibold my-3">
              New Superfast Modem
            </h3>
            <div className="flex items-center gap-5">
              <p className="font-medium 2xl:text-3xl text-2xl">
                Enjoy Smart Deals
              </p>
              <img
                src="/icons/arrowright.svg"
                alt=""
                className="mt-2 2xl:h-4 h-2"
              />
            </div>
            <div className="mt-0">
              <NavLink
                className="bg-white text-bluePrimary rounded-3xl base-btn text-base px-5 py-3 mt-5 font-bold flex items-center w-fit gap-2 justify-center"
                to="/products"
              >
                See our Products{" "}
                <span>
                  <IoIosArrowForward />
                </span>
              </NavLink>
            </div>
            <img src="/icons/dot1.svg" alt="dot" className="mt-5 ml-2" />
          </div>
          <img
            src="/img/hero-img.png"
            alt=""
            className="lg:w-[350px] lg:h-[90%] w-[250px] h-[200px] mt-[-30px]"
          />
        </div>
      )}
      {currentSlide === 2 && (
        <div className="bg-[url('/img/hero-bg-2.png')] bg-cover bg-center sm:pl-24 sm:pr-10 px-5 py-10 rounded-[21px] md:min-h-[21rem] min-h-[35rem] flex md:flex-row flex-col md:items-center md:gap-0 gap-10 items-center justify-between relative">
          <div className="  gap-10 text-white animate__animated  animate__fadeIn animate__delay-3">
            <p className="font-medium 2xl:text-3xl text-2xl">
              Double Your Online Presence
            </p>
            <h3 className="2xl:text-6xl md:text-5xl text-4xl font-semibold my-5">
              Bundled Data Offers
            </h3>
            <div className="flex items-center gap-5">
              <p className="font-medium 2xl:text-3xl text-2xl">
                Enjoy Great Data Offers
              </p>
              <img
                src="/icons/arrowright.svg"
                alt=""
                className="mt-2 2xl:h-4 h-2"
              />
            </div>
            <div className="">
              <NavLink
                className="bg-white text-black rounded-3xl base-btn text-base px-5 py-3 mt-5 font-bold flex items-center w-fit gap-2 justify-center"
                to="/plans"
              >
                See our Data Plans{" "}
                <span>
                  <IoIosArrowForward />
                </span>
              </NavLink>
            </div>
            <img src="/icons/dot2.svg" alt="dot" className="mt-5 ml-2" />
          </div>

          <img
            src="/img/hero-img2.png"
            alt=""
            className="2xl:w-[350px] 2xl:h-[90%] w-[250px] h-[200px] mt-[-30px] absolute bottom-0 right-3 "
          />
        </div>
      )}
      {currentSlide === 3 && (
        <div className="bg-[url('/img/hero-bg-3.png')] bg-cover bg-center sm:pl-24 sm:pr-10 px-5 py-10 rounded-[21px] md:min-h-[21rem] min-h-[35rem] flex md:flex-row flex-col md:items-center md:gap-0 gap-10 items-center justify-between relative">
          <div className="  gap-10 text-white animate__animated  animate__fadeIn animate__delay-3">
            <p className="font-medium 2xl:text-3xl text-2xl">
              Double Your Online Presence
            </p>
            <h3 className="2xl:text-6xl md:text-5xl text-4xl font-semibold my-5">
              High Speed Internet
            </h3>
            <div className="flex items-center gap-5">
              <p className="font-medium 2xl:text-3xl text-2xl">
                Affordable Internet Voices
              </p>
              <img
                src="/icons/arrowright.svg"
                alt=""
                className="mt-2 2xl:h-4 h-2"
              />
            </div>
            <div className="">
              <NavLink
                className="bg-redPrimary text-white rounded-3xl base-btn text-base px-5 py-3 mt-5 font-bold flex items-center w-fit gap-2 justify-center"
                to="/plans"
              >
                Explore More{" "}
                <span>
                  <IoIosArrowForward />
                </span>
              </NavLink>
            </div>
            <img src="/icons/dot3.svg" alt="dot" className="mt-5 ml-2" />
          </div>

          <img
            src="/img/hero-img3.png"
            alt=""
            className="2xl:w-[350px] 2xl:h-[90%] w-[250px] h-[200px] mt-[-30px] absolute bottom-0 right-3 "
          />
        </div>
      )}
    </>
  );
}

export default Slider;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
// import { useEffect, useState } from "react";
// import { IoIosArrowForward } from "react-icons/io";
// import { NavLink } from "react-router-dom";
// import { motion } from "framer-motion";

// function Slider() {
//   const [currentSlide, setCurrentSlide] = useState(1);
//   const slideLength = 3; // Total number of slides
//   const transitionTime = 4000; // Transition time in milliseconds
//   let slideInterval;

//   useEffect(() => {
//     // Auto change slide at intervals
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     slideInterval = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide % slideLength) + 1);
//     }, transitionTime);

//     return () => clearInterval(slideInterval);
//   }, []);

//   const slides = [
//     {
//       backgroundImage: "/img/hero-bg-1.png",
//       heading: "Double Your Online Presence",
//       subheading: "New Superfast Modem",
//       description: "Enjoy Smart Deals",
//       imageUrl: "/img/hero-img.png",
//     },
//     {
//       backgroundImage: "/img/hero-bg-2.png",
//       heading: "Custom Heading for Slide 2",
//       subheading: "Bundled Data Offers",
//       description: "Enjoy Great Data Offers",
//       imageUrl: "/img/hero-img2.png",
//     },
//     {
//       backgroundImage: "/img/hero-bg-3.png",
//       heading: "Custom Heading for Slide 3",
//       subheading: "High Speed Internet",
//       description: "Affordable Internet Voices",
//       imageUrl: "/img/hero-img3.png",
//     },
//   ];

//   return (
//     <>
//       {slides.map((slide, index) => (
//         <motion.div
//           key={index}
//           style={{ display: currentSlide === index + 1 ? "block" : "none" }}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: currentSlide === index + 1 ? 1 : 0 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <div
//             className="bg-cover bg-center sm:pl-24 sm:pr-10 px-5 py-14 rounded-[21px] flex md:flex-row flex-col md:items-center md:gap-0 gap-10 items-center justify-between"
//             style={{ backgroundImage: `url(${slide.backgroundImage})` }}
//           >
//             <div className="  gap-10 text-white">
//               <p className="font-medium 2xl:text-3xl text-2xl">
//               Double Your Online Presence
//               </p>
//               <h3 className="2xl:text-6xl md:text-5xl text-4xl font-semibold my-5">
//                 {slide.subheading}
//               </h3>
//               <div className="flex items-center gap-5">
//                 <p className="font-medium 2xl:text-3xl text-2xl">
//                   {slide.description}
//                 </p>
//                 <img
//                   src="/icons/arrowright.svg"
//                   alt=""
//                   className="mt-2 2xl:h-4 h-2"
//                 />
//               </div>
//               <div className="mt-10">
//                 <NavLink
//                   className={` ${index === 2 && "text-white bg-redPrimary"} ${index === 0 && "text-bluePrimary bg-white"} ${index === 1 && "text-black bg-white"} rounded-3xl text-base px-5 py-3 mt-10 font-bold flex items-center w-fit gap-2 justify-center`}
//                   to="/products"
//                 >
//                   See our Products{" "}
//                   <span>
//                     <IoIosArrowForward />
//                   </span>
//                 </NavLink>
//               </div>
//             </div>
//             <img
//               src={slide.imageUrl}
//               alt=""
//               className="2xl:w-[350px] 2xl:h-[80%] w-[250px] h-[200px] mt-[-30px]"
//             />
//           </div>
//         </motion.div>
//       ))}
//     </>
//   );
// }

// export default Slider;
