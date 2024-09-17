// import { NavLink } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";
import { getBreadCrumbs } from "../services/apis/generalApi";
import { useLocation } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

interface BannerProps {
  title: string;
  text?: string;
  image?: string;
  link?:string;
  subtitle?: string;
}

function Banner({ title,  image }: BannerProps) {
  const { pathname } = useLocation();
  const { data: breadcrumbs, isLoading } = useQuery<BannerProps[]>({
    queryKey: ["breadcrumb"],
    queryFn: getBreadCrumbs,
  });

  if (isLoading) {
    return (
      <SkeletonTheme baseColor="#0075BF" highlightColor="#999">
        <Skeleton height={"25rem"} />
      </SkeletonTheme>
    );
  }
  const currentPath  = breadcrumbs && breadcrumbs?.find((item) => item.link === pathname)

  console.log(currentPath)
 

  return (
    <section className="xl:mt-32 mt-20 mx-0  relative 2xl:h-[300px] xl:h-[250px] h-[200px] xl:mb-24 mb-10 px-0">
      <img  src={currentPath ? currentPath.image : image} alt="" className=" w-full h-full object-cover sm:object-top object-right  " />
     <div className="absolute top-[40%] left-[5%]">
        <h4 className=" !text-white  font-semibold font-inter uppercase ">
        {currentPath?.title ? currentPath?.title : title}
        </h4>
        <p className="text-white">{currentPath?.subtitle && currentPath?.subtitle }</p>

     </div>
    </section>
  );
}

export default Banner;
