import { IoIosCheckmarkCircle } from "react-icons/io";
import { formatCurrency } from "../../utils/helpers";
import { NavLink } from "react-router-dom";

interface PersonalItemProps {
  plan: string;
  size: string;
  duration?: string;
  price: number;
  time?: string;
}

function PersonalPlanItem({
  plan,
  size,
  duration,
  price,
  time,
}: PersonalItemProps) {
  return (
    <NavLink to="/signin">

    <div className="border flex  flex-col justify-between border-bluePrimary py-8 px-4 rounded-2xl font-inter shadow-sm">
      <div>
        <p className="text-base">plan</p>
        <h3 className="text-3xl mb-2">{plan}</h3>
        <div className="flex items-start gap-2 border-t border-grey-400 py-4">
          <span>
            <IoIosCheckmarkCircle color="" size={20} />
          </span>
          <p className=" font-normal text-base">
            {time ? time : "24 Hours x 7 Days"}
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
            {duration ? duration : "30 Days"}
          </p>
        </div>
      </div>

      <div className="flex justify-between items-end border border-bluePrimary rounded-lg px-3 py-1">
        <p className="text-base text-bluePrimary">Price:</p>
        <h3 className="font-inter text-bluePrimary text-2xl">
          {formatCurrency(price)}
        </h3>
      </div>
    </div>
    </NavLink>
  );
}

export default PersonalPlanItem;
