import { NavLink } from "react-router-dom";
import Banner from "../components/Banner";

function Contact() {
  return (
    <>
      <Banner title="contact" text="Contact us" />
      <section className="pt-20">
        <p className="font-normal md:text-lg">
          Experience the power of superfast internet with Cyberspace Superfast.
          To learn more about our services or inquire about custom solutions for
          your home or business, contact us today:
        </p>
      <div className="mt-10">
        <p><span className="font-medium capitalize">Address:</span> 12 Ologun Agbaje Street, off Adeola Odeku Street, Victoria Island, Lagos.</p>
        <p><span className="font-medium capitalize">phone:</span> 02015159999</p>
        <p><span className="font-medium capitalize">sales phone number:</span> 09076555350, 09076555417</p>
        
        <p><span className="font-medium capitalize">email:</span> <NavLink to="mailto:lteretail@cyberspace.net.ng">
                  lteretail@cyberspace.net.ng
                </NavLink></p>
        <p><span className="font-medium capitalize">website</span> <NavLink to="www.cyberspacelte.net.ng">
        www.cyberspacelte.net.ng
                </NavLink></p>
      </div>
        <p className="font-normal md:text-lg mt-10">Join the Cyberspace Superfast community and unlock a world of possibilities with our premium broadband solutions. Connect with us today!</p>

      </section>
    </>
  );
}

export default Contact;
