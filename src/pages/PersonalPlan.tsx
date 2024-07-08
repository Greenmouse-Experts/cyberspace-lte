import Banner from "../components/Banner";
import PersonalPlanOverview from "../features/PersonalPlan/PlansOverview";


function PersonalPlan() {
  return (
    <>
      <Banner title="Personal Plan" text="Personal Plan" image="/img/plan-banner.png" />
      <PersonalPlanOverview />
    </>
  );
}

export default PersonalPlan;
