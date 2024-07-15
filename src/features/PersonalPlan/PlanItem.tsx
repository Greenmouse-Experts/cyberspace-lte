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
      <div className="border flex relative  flex-col justify-between md:h-[28rem] h-[25rem]  border-bluePrimary py-8 px-4 rounded-2xl font-inter shadow-sm hover:-translate-y-1 transition-all hover:shadow-xl">
        <div className="flex flex-col  justify-between h-full ">
          <div className="flex flex-col ">
            <h3 className="text-2xl mb-2 text-center">{plan}</h3>
            <h3 className="font-inter text-bluePrimary font-semibold text-2xl text-center">
              {formatAsNgnMoney(price)}
            </h3>
          </div>

          <div className="w-full flex justify-center absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
            <button
              onClick={() => {
                if (checkUser) {
                  handleOpen();
                } else {
                  navigate("/signin");
                  toast.error("Sign in to continue...");
                }
              }}
              className="border border-bluePrimary  rounded-3xl text-xl base-btn"
            >
              Subscribe
            </button>
          </div>
          <div className="flex flex-col ">
            <div className="flex items-center gap-2  py-3">
              <span>
                <FaCheck color="" size={15} />
              </span>
              <p className=" font-normal text-base">
                {available_hour ? available_hour : "24 Hours x 7 Days"}
              </p>
            </div>
            <div className="flex items-center gap-2  py-3">
              <span>
                <FaCheck color="" size={15} />
              </span>
              <p className=" font-normal text-base">{size} GB</p>
            </div>
            <div className="flex items-center gap-2  py-3">
              <span>
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
