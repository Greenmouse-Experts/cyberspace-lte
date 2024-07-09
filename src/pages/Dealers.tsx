import Banner from "../components/Banner";
import DealersOverview from "../features/dealers/DealersOverview";

function Dealers() {
  return (
    <>
      <Banner title="Our Dealers" text="our dealers" image="/img/dealer-banner.png" />
      <DealersOverview />
    </>
  );
}

export default Dealers;
