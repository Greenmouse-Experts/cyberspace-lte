import { useState } from "react";
import PersonalPlanItem from "./PersonalPlanItem";

function PersonalPlanOverview() {
  const [plan, setPlan] = useState(false);

  return (
    <section className="pt-16">
      <div className="border border-bluePrimary rounded-[100px] flex items-center 2xl:w-[55%] md:w-[70%] w-full justify-center mx-auto h-[70px] ">
        <p
          onClick={() => setPlan(false)}
          className={`text-2xl font-medium w-[50%] text-center mx-2 rounded-[100px] h-[80%] flex justify-center items-center cursor-pointer ${
            !plan && "bg-bluePrimary text-white"
          }`}
        >
          Holiday Packages
        </p>
        <p
          onClick={() => setPlan(true)}
          className={`text-2xl font-medium w-[50%] text-center mx-2 rounded-[100px] h-[80%] flex justify-center items-center cursor-pointer ${
            plan && "bg-bluePrimary text-white"
          }`}
        >
          Monthly Renewal Packages
        </p>
      </div>

      <div className="pt-16 grid md:grid-cols-4 grid-col-1 gap-6 ">
        <PersonalPlanItem />
        <PersonalPlanItem />
        <PersonalPlanItem />
        <PersonalPlanItem />
        <PersonalPlanItem />
        <PersonalPlanItem />
      </div>
    </section>
  );
}

export default PersonalPlanOverview;
