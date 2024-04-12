
import { IoIosCheckmarkCircle } from "react-icons/io";

function PersonalPlanItem() {
  return (
    <div className="border border-bluePrimary py-8 px-4 rounded-2xl font-inter shadow-sm">
      <p className="text-base">plan</p>
      <h3 className="text-3xl mb-2">Cyber Lounge</h3>
      <div className="flex items-start gap-2 border-t border-grey-400 py-4">
        <span>
          <IoIosCheckmarkCircle color="" size={20} />
        </span>
        <p className=" font-normal text-base">
        24 Hours x 7 Days
        </p>
      </div>
      <div className="flex items-start gap-2 border-t border-grey-400 py-4">
        <span>
          <IoIosCheckmarkCircle color="" size={20} />
        </span>
        <p className=" font-normal text-base">25 GB</p>
      </div>
      <div className="flex items-start gap-2 border-t border-grey-400 py-4">
        <span>
          <IoIosCheckmarkCircle color="" size={20} />
        </span>
        <p className=" font-normal text-base">30 Days</p>
      </div>

      <div className="flex justify-between items-center border border-bluePrimary rounded-lg px-3 py-1">
        <p className="text-base text-bluePrimary">Price:</p>
        <h3 className="font-inter text-bluePrimary text-2xl">₦4,300</h3>
      </div>
    </div>
  );
}

export default PersonalPlanItem;
