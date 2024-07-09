
import { NavLink } from 'react-router-dom';
import { formatAsNgnMoney, formatDate } from '../../utils/helpers';
import { usePlans } from './useAccount';
import Loader from '../../components/Loader';
import { PlanTypes } from './orders.type';

const Plans = () => {
    const {plans, isLoading} = usePlans()

  console.log("user details",plans);
  if (isLoading) return <Loader />;
  return (
    <div className="container mx-auto p-6 flex flex-col">
    {plans.data.map((plan:PlanTypes) => (
      <div
        className="bplan-grey-700 flex justify-between p-4 bg-white shadow-md rounded my-6"
        key={plan.plan.name}
      >
        <div className="flex flex-col gap-2">
          <p className="font-medium">{plan.transactionReference}</p>
          <p className=" bg-yellow w-fit rounded-lg px-2 ">{plan.status}</p>
          <p className="font-semibold">{formatDate(plan.plan.created_at)}</p>
        </div>
        <div className="flex flex-col justify-between">
          <NavLink to="#">
            <button className="bg-bluePrimary hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
              View
            </button>
          </NavLink>

          <p className="font-bold text-xl">{formatAsNgnMoney(plan.plan.price)}</p>
        </div>
      </div>
    ))}
  </div>
  )
}

export default Plans