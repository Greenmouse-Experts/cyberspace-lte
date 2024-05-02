import { useState } from "react";
import PersonalPlanItem from "./PersonalPlanItem";

function PersonalPlanOverview() {
  const [plan, setPlan] = useState(false);

  return (
    <section className="pt-16">
      <div className="border border-bluePrimary rounded-[100px] flex items-center 2xl:w-[55%] md:w-[70%] w-full justify-center mx-auto h-[70px] ">
        <p
          onClick={() => setPlan(false)}
          className={`sm:text-2xl text-sm font-medium w-[50%] text-center mx-2 rounded-[100px] h-[80%] flex justify-center items-center cursor-pointer ${
            !plan && "bg-bluePrimary text-white"
          }`}
        >
          Holiday Packages
        </p>
        <p
          onClick={() => setPlan(true)}
          className={`sm:text-2xl text-sm font-medium w-[50%] text-center mx-2 rounded-[100px] h-[80%] flex justify-center items-center cursor-pointer ${
            plan && "bg-bluePrimary text-white"
          }`}
        >
          Monthly Renewal Packages
        </p>
      </div>
{plan && <>
      <div className="pt-16 grid md:grid-cols-4 grid-col-1 gap-5 ">
        <PersonalPlanItem plan="Cyber Student" size="4" price={2150} />
        <PersonalPlanItem plan="Cyber Student Plus" size="6" price={3225} />
        <PersonalPlanItem plan="Cyber Budget" size="7" price={3762.5} />
        <PersonalPlanItem plan="Cyber Budget Plus" size="10" price={4300} />
        <PersonalPlanItem plan="Cyber Economy" size="15" price={5375} />
        <PersonalPlanItem plan="Cyber Economy Plus" size="25" price={6450} />

        <PersonalPlanItem plan="Cyber Diplomat" size="35" price={7525} />

        <PersonalPlanItem plan="Cyber Diplomat Plus" size="40" price={9600} />

        <PersonalPlanItem plan="Cyber Supreme" size="55" price={11750} />

        <PersonalPlanItem plan="Cyber Economy Plus" size="65" price={13900} />

        <PersonalPlanItem plan="Cyber Royal" size="75" price={16125} />

        <PersonalPlanItem plan="Cyber Royal Plus" size="105" price={21500} />

        <PersonalPlanItem plan="Cyber Supercool" size="130" price={26875} />

        <PersonalPlanItem
          plan="Cyber Unlimited Classic"
          size="Unlimited volume (1Mbps/1Mbps)"
          price={28200}
        />

        <PersonalPlanItem
          plan="Cyber Unlimited Premium"
          size="Unlimited volume (2Mbps/2Mbps)"
          price={56400}
        />
      </div>

      <div className="mt-20">
        <div className="flex justify-between">
          <h4 className="font-semibold">Extra Validity Plans</h4>
        </div>
        <div className="flex w-full items-center 2xl:mt-8 mt-5">
          <div className="bg-bluePrimary h-[5px] w-[28%]" />
          <div className="bg-lightGray h-[0.5px] w-[72%] opacity-50" />
        </div>
      </div>

      <div className="pt-16 grid md:grid-cols-4 grid-col-1 gap-5 ">
        <PersonalPlanItem
          plan="30 Days Extra Validity"
          size="N28,200 - (Unlimited volume (1 Mbps/1Mbps)"
          price={28200}
          duration="One Year"
        />

        <PersonalPlanItem
          plan="15 Days Extra
         Validity"
          size="N28,200 - (Unlimited volume (1 Mbps/1Mbps)"
          price={28200}
          duration="Six Months"
        />

        <PersonalPlanItem
          plan="30 Days Extra Validity"
          size="N56,400 - Unlimited volume (2 Mbps/2 Mbps)"
          price={56400}
          duration="One Year"
        />

        <PersonalPlanItem
          plan="15 Days Extra
         Validity"
          size="N56,400 - Unlimited volume (2 Mbps/2 Mbps)"
          price={56400}
          duration="Six Months"
        />
      </div>
</> }

{
  !plan && <>  
 <div className="pt-16 grid md:grid-cols-4 grid-col-1 gap-5 ">
  <PersonalPlanItem plan="Cyber Lounge" time="24 Hrs Weekends and Public Holidays" size="25" price={4300} /> 
  <PersonalPlanItem plan="Cyber Crib" time="5pm-8am Weekdays, 24Hrs Weekends and Public Holidays" size="25" price={6450} /> 
  <PersonalPlanItem plan="Cyber Serene" time="5pm-8am Weekdays, 24Hrs Weekends and Public Holidays" size="50" price={8600} /> 
  <PersonalPlanItem plan="Cyber Professional" time="7am-7pm Weekdays" size="50" price={8600} /> 
  </div>
  </>
}
    </section>
  );
}

export default PersonalPlanOverview;
