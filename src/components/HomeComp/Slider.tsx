/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import "animate.css";
import { getBanners } from "../../services/apis/generalApi";
import { useQuery } from "@tanstack/react-query";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface Banner {
  id: number;
  title: string;
  background: string;
  image: string;
  created_at: string;
  updated_at: string;
}

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const slideLength = 3; // Total number of slides
  const transitionTime = 6000; // Transition time in milliseconds
  let slideInterval;

  useEffect(() => {
    // Auto change slide at intervals
    slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide % slideLength) + 1);
    }, transitionTime);

    return () => clearInterval(slideInterval);
  }, []);

  const { data: banners, isLoading } = useQuery<Banner[]>({
    queryKey: ["banners"],
    queryFn: getBanners,
  });

  if (isLoading || !banners || banners.length === 0) {
    return (
      <SkeletonTheme baseColor="#0075BF" highlightColor="#999">
        <Skeleton className="rounded-[21px]" height={"340px"} />
      </SkeletonTheme>
    );
  }

  return (
    <>
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          style={{ backgroundImage: `url('${banner.background}')` }}
          className={`bg-[url(${
            banner.background
          })] bg-cover bg-center sm:pl-24 sm:pr-10 px-5 py-10 rounded-[21px] md:min-h-[20rem] min-h-[37rem] flex md:flex-row flex-col md:items-center md:gap-0 gap-10 items-center justify-between relative ${
            currentSlide === index + 1 ? "block" : "hidden"
          }`}
        >
          <div className="gap-10 text-white animate__animated animate__fadeIn animate__delay-3">
            {JSON.parse(banner.title).map((text: any) => (
              <div key={text.firstTitle}>
                <p className="font-medium 2xl:text-3xl text-2xl">
                  {text.firstTitle}
                </p>
                <h2 className="2xl:text-6xl md:text-5xl text-4xl font-semibold my-5">
                  {text.secondTitle}
                </h2>
                <div className="flex items-center gap-5">
                  <p className="font-medium 2xl:text-3xl text-2xl">
                    {text.thirdTitle}
                  </p>
                  <img
                    src="/icons/arrowright.svg"
                    alt=""
                    className="mt-2 2xl:h-4 h-2"
                  />
                </div>
                <div className="mt-10">
                  <NavLink
                    className={`bg-white text-bluePrimary rounded-3xl base-btn text-base px-5 py-3 mt-5 font-bold flex items-center w-fit gap-2 justify-center`}
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
            ))}
          </div>
          <img
            src={banner.image}
            alt=""
            className={`xl:w-[350px] xl:h-[85%] w-[250px] h-[200px] md:mt-0 mt-20  absolute bottom-0 md:right-3  ${
              currentSlide === 1 && "md:mt-[50px] "
            }`}
          />
        </div>
      ))}
    </>
  );
}

export default Slider;
