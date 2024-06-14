import { IoIosCheckmarkCircle } from "react-icons/io";
import { formatAsNgnMoney } from "../../utils/helpers";
import { PlantModal } from "../../components/modals/PlanModal";
import { useState } from "react";
import { isLoggedIn } from "../../state/user/userSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { PlanType } from "./plans.types";

interface PersonalItemProps {
  plan: string;
  size: string;
  duration?: string;
  price: string;
  available_hour?: string;
  planItem:PlanType;
}

function PersonalPlanItem({
  plan,
  size,
  duration,
  price,
  available_hour,
  planItem
}: PersonalItemProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const checkUser = useSelector(isLoggedIn);
  const navigate = useNavigate();

  return (
    <>
      <div
        className="border flex  flex-col justify-between border-bluePrimary py-8 px-4 rounded-2xl font-inter shadow-sm cursor-pointer"
        onClick={() => {
          if (checkUser) {
            handleOpen();
          } else {
            navigate("/signin");
            toast.error("Sign in to continue...");
          }
        }}
      >
        <div>
          <p className="text-base">plan</p>
          <h3 className="text-3xl mb-2">{plan}</h3>
          <div className="flex items-start gap-2 border-t border-grey-400 py-4">
            <span>
              <IoIosCheckmarkCircle color="" size={20} />
            </span>
            <p className=" font-normal text-base">
              {available_hour ? available_hour : "24 Hours x 7 Days"}
            </p>
          </div>
          <div className="flex items-start gap-2 border-t border-grey-400 py-4">
            <span>
              <IoIosCheckmarkCircle color="" size={20} />
            </span>
            <p className=" font-normal text-base">{size} GB</p>
          </div>
          <div className="flex items-start gap-2 border-t border-grey-400 py-4">
            <span>
              <IoIosCheckmarkCircle color="" size={20} />
            </span>
            <p className=" font-normal text-base">
              {duration + " days"}
            </p>
          </div>
        </div>

        <div className="flex justify-between items-end border border-bluePrimary rounded-lg px-3 py-1">
          <p className="text-base text-bluePrimary">Price:</p>
          <h3 className="font-inter text-bluePrimary text-2xl">
            {formatAsNgnMoney(price)}
          </h3>
        </div>
      </div>
      <PlantModal handleOpen={handleOpen} open={open} planItem={planItem}  />
    </>
  );
}

export default PersonalPlanItem;
