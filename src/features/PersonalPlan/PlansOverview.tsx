import { useEffect, useState } from "react";
import PersonalPlanItem from "./PlanItem";
import { useConfirmPlanPayment, usePlans } from "./usePlans";
import { PlanType } from "./plans.types";
import Loader from "../../components/Loader";
import { useLocation, useNavigate } from "react-router-dom";
import { useGetPayment } from "../cart/usePayment";
import { useDispatch, useSelector } from "react-redux";
import { clearPaymentDetails, getPaymentDetails } from "../../state/payment/paymentSlice";

function PersonalPlanOverview() {
  const [plan, setPlan] = useState(false);
  const { plans, isLoading } = usePlans();
 
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { search } = useLocation();

  const paymentDetails = useSelector(getPaymentDetails)

  const {first_name, last_name, email, phone_number, routerId} = paymentDetails


  const queryParams = new URLSearchParams(search);

  const { confirmTransaction, isConfirming } = useConfirmPlanPayment();
  const { checkPayment, isChecking } = useGetPayment();

  const ref = queryParams.get("ref");
  

  useEffect(() => {
    if (ref) {
      checkPayment(ref, {
        onSuccess(data) {
          console.log(data);
          confirmTransaction({
            plan_id: 25,
            router_id:routerId,
            transactionReference: ref,
            phone_number: phone_number,
            first_name,
            last_name,
            email_address: email,
           
           
          },{
            onSuccess() {
              dispatch(clearPaymentDetails())
            },
          } 
        );
        },
        onSettled() {
          navigate("/plans");
        },
      });
    }
  }, [ref, checkPayment, confirmTransaction]);

  // console.log(plans)

  if (isLoading || isConfirming || isChecking) return <Loader />;

  const monthlyRenewal = plans.data.filter(
    (plan: PlanType) => plan.plan_type === "monthly_renewal"
  );

  const holidayPackages = plans.data.filter(
    (plan: PlanType) => plan.plan_type === "holiday"
  );
  const extraValidity = plans.data.filter(
    (plan: PlanType) => plan.plan_type === "extra_validity"
  );

  return (
    <section className="">
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
      {plan && (
        <>
          <div className="pt-16 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  grid-col-1 gap-5 ">
            {monthlyRenewal.map((plan: PlanType) => (
              <PersonalPlanItem
                plan={plan.name}
                price={plan.price}
                available_hour={plan.avalibilty_hour}
                duration={plan.avalibilty_day}
                size={plan.data_balance}
                planItem={plan}
              />
            ))}
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

          <div className="pt-16 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  grid-col-1 gap-5 ">
            {extraValidity.map((plan: PlanType) => (
              <PersonalPlanItem
                plan={plan.name}
                price={plan.price}
                available_hour={plan.avalibilty_hour}
                duration={plan.avalibilty_day}
                size={plan.data_balance}
                planItem={plan}
              />
            ))}
          </div>
        </>
      )}

      {!plan && (
        <>
          <div className="pt-16 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  grid-col-1 gap-5 ">
            {holidayPackages.map((plan: PlanType) => (
              <PersonalPlanItem
                plan={plan.name}
                price={plan.price}
                available_hour={plan.avalibilty_hour}
                duration={plan.avalibilty_day}
                size={plan.data_balance}
                planItem={plan}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}

export default PersonalPlanOverview;

// phone_number: user.phone_number,
// address: user.residence_address,
// city: user.city,
// region:user.region,
// country: user.country,
