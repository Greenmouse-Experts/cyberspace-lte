
import { IoIosCheckmarkCircle } from "react-icons/io";

function PersonalPlanItem() {
  return (
    <div className="border border-bluePrimary py-10 px-4 rounded-2xl font-inter shadow-md">
      <p className="text-base">plan</p>
      <h3>Cyber Lounge</h3>
      <div className="flex items-start gap-2 border-t border-grey-400 py-4">
        <span>
          <IoIosCheckmarkCircle color="" size={20} />
        </span>
        <p className="mt-[-5px] font-normal text-lg">
          24 Hrs Weekends and Public Holidays
        </p>
      </div>
      <div className="flex items-start gap-2 border-t border-grey-400 py-4">
        <span>
          <IoIosCheckmarkCircle color="" size={20} />
        </span>
        <p className="mt-[-5px] font-normal text-lg">25 GB</p>
      </div>
      <div className="flex items-start gap-2 border-t border-grey-400 py-4">
        <span>
          <IoIosCheckmarkCircle color="" size={20} />
        </span>
        <p className="mt-[-5px] font-normal text-lg">30 Days</p>
      </div>

      <div className="flex justify-between items-center border border-bluePrimary rounded-lg px-3">
        <p className="text-base text-bluePrimary">Price:</p>
        <h3 className="font-inter text-bluePrimary">₦4,300</h3>
      </div>
    </div>
  );
}

export default PersonalPlanItem;
