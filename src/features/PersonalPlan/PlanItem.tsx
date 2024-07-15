import { formatAsNgnMoney } from "../../utils/helpers";
import { PlantModal } from "../../components/modals/PlanModal";
import { useState } from "react";
import { isLoggedIn } from "../../state/user/userSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { PlanType } from "./plans.types";
import { FaCheck } from "react-icons/fa";

interface PersonalItemProps {
  plan: string;
  size: string;
  duration?: string;
  price: string;
  available_hour?: string;
  planItem: PlanType;
}

function PersonalPlanItem({
  plan,
  size,
  duration,
  price,
  available_hour,
  planItem,
}: PersonalItemProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const checkUser = useSelector(isLoggedIn);
  const navigate = useNavigate();

  return (
    <>
      <div className="border flex relative  flex-col justify-between  border-bluePrimary py-8 px-4 rounded-2xl font-inter shadow-sm hover:-translate-y-1 transition-all hover:shadow-xl">
        <div className="flex flex-col h-full ">
          <div className="flex flex-col justify-between h-[12rem]">
            <h3 className="text-2xl mb-2 text-center">{plan}</h3>
            <div className="w-full flex items-center flex-col gap-6">
              <h3 className="font-inter text-bluePrimary font-semibold text-2xl text-center mt-5">
                {formatAsNgnMoney(price)}
              </h3>
              <button
                onClick={() => {
                  if (checkUser) {
                    handleOpen();
                  } else {
                    navigate("/signin");
                    toast.error("Sign in to continue...");
                  }
                }}
                className="border border-bluePrimary  rounded-3xl base-btn w-fit mx-auto"
              >
                Subscribe
              </button>
            </div>
          </div>

          <div className="flex flex-col mt-6">
            <div className="flex items-start gap-3  py-3">
              <span className="mt-1">
                <FaCheck color="" size={15} />
              </span>
              <p className=" font-normal text-base">
                {available_hour ? available_hour : "24 Hours x 7 Days"}
              </p>
            </div>
            <div className="flex items-start gap-3  py-3">
              <span className="mt-1">
                <FaCheck color="" size={15} />
              </span>
              <p className=" font-normal text-base">{size} GB</p>
            </div>
            <div className="flex items-start gap-3  py-3">
              <span className="mt-1">
                <FaCheck color="" size={15} />
              </span>
              <p className=" font-normal text-base">{duration + " days"}</p>
            </div>
          </div>
        </div>
      </div>
      <PlantModal handleOpen={handleOpen} open={open} planItem={planItem} />
    </>
  );
}

export default PersonalPlanItem;
