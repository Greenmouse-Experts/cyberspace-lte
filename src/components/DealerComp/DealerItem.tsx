
import { GrLocation } from "react-icons/gr";
import { IoMdCall } from "react-icons/io";

function DealerItem() {
  return (
    <div className="border border-grey-400 p-4 rounded-2xl">
      <div className="h-[100px] w-full rounded-xl bg-grey-300" />
      <p className="text-xl text-bluePrimary font-normal py-3">
        Acmesynergy Limited
      </p>
      <div className="flex items-start gap-2 border-t border-grey-400 pt-3 pb-1">
        <span>
          <GrLocation color="#DE0F04" size={20} />
        </span>
        <p className="mt-[-8px]">
          Suite 14, Ogidan Shopping Complex, Ogidan Bus-stop, Sangotedo. Road 5,
          Shop K132 see more...
        </p>
      </div>
      <div className="flex items-start gap-2 border-t border-grey-400 pt-3 pb-1">
        <IoMdCall color="#DE0F04" size={20} />
        <p className="mt-[-5px]">08065357513, 07025001972</p>
      </div>
    </div>
  );
}

export default DealerItem;
