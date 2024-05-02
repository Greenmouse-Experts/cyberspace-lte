import { NavLink } from "react-router-dom";
import List from "../List";
import FaqItem from "./FaqItem";

function Faq() {
  return (
    <section className="bg-[#F5FBFE] dark:bg-darkMood mx-0 py-20 mt-32 2xl:px-36 md:px-24 px-5">
      <h4 className="text-black text-center font-semibold mb-20">
        Frequently Asked Questions
      </h4>
      <FaqItem
        open={true}
        title="How do I pay for the Cyberspace Superfast modem?"
        answer={
          <div>
            <p>
              Direct transfer to our Zenith bank account: 1014025067 /
              Cyberspace Ltd-LTE / Zenith bank
            </p>
          </div>
        }
      />
      <FaqItem
        open={false}
        title="How do I subscribe on my device?"
        answer={
          <List
            items={[
              "Direct transfer to our Zenith bank account:1014025067 Cyberspace Ltd-LTE Zenith ",
              "Or via our self-care portal: http://selfcare.cyberspace.net.ng/",
            ]}
          />
        }
      />
      <FaqItem
        open={false}
        title="How do I renew via the selfcare portal?"
        answer={
          <List
            items={[
              "Connect laptop to device via WIFI or LAN cable, logon to http://selfcare.cyberspace.net.ng/",
              "Click My Account",
              "Input username as email address and password (password was sent to email upon activation)",
              "(If password is forgotten, click on forgot password so that a password reset mail be sent to email address)",
              "Click Profile",
              "Click Renew",
              "Choose New Service Plan and Choose Period",
              "Select Payment Method and click YES to Proceed",
            ]}
          />
        }
      />
      <FaqItem
        open={false}
        title="How do I change my password for the indoor modem?"
        answer={
          <List
            items={[
              "Connect to the device, with the default password 12345678.",
              "Input the IP 192.168.1.1 ",
              "Input username and password: admin/ admin ",
              "It will show you a page where you click on WLAN ",
              "Double click and go to where you will see the SSID ",
              "Scroll down, you will see where the password is, click to view, then change to the preferred and apply ",
              "Wait for about 5mins and check.",
            ]}
          />
        }
      />
      {/* <FaqItem
        open={false}
        title="How do I pay for the Cyberspace Superfast modem?"
        answer="You can determine the number of shares you hold by adding up all your share certificates and holdings in CSCS, referring to your recent dividend warrant, or by contacting."
      /> */}
      <section>
        <div className="text-center mt-16">
          <NavLink to="/faqs" className="border bg-bluePrimary px-12 py-5 text-white rounded-[50px]">
            Read More {">"}
          </NavLink>
        </div>
      </section>
    </section>
  );
}

export default Faq;
