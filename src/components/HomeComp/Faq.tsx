import { NavLink } from "react-router-dom";
import List from "../List";
import FaqItem from "./FaqItem";
import { useState } from "react";

function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="bg-[#F5FBFE] dark:bg-darkMood mx-0 py-20 mt-32 2xl:px-36 md:px-24 px-5">
      <h4 className="text-black text-center font-semibold mb-20">
        Frequently Asked Questions
      </h4>
      <FaqItem
          index={0}
          open={openIndex === 0}
          title="How do I subscribe to the Cyberspace Superfast Service?"
          answer={
            <div>
              <p>
                Contact us on our LiveChat on our website, give us a call at 09076555350 or 09076555417 or send us an e-mail at lteretail@cyberspace.net.ng.
              </p>
            </div>
          }
          toggleAccordion={toggleAccordion}
        />
        <FaqItem
          index={1}
          open={openIndex === 1}
          title="How do I renew my subscription via the selfcare portal?"
          answer={
            <List
              items={[
                "Direct transfer to our Zenith bank account: 1014025067 Cyberspace Ltd-LTE Zenith. ",
                "Or via our selfcare portal: http://selfcare.cyberspace.net.ng/.",
              ]}
            />
          }
          toggleAccordion={toggleAccordion}
        />
        <FaqItem
          index={2}
          open={openIndex === 2}
          title="How do I subscribe on my device?"
          answer={
            <div>
              <p>
                Via our selfcare portal <span className="text-redPrimary"><NavLink to="https://selfcare.cyberspace.net.ng/lteselfcare/renewplan?">here</NavLink></span>.
              </p>
              <p>
                Via direct transfer with the right details.
              </p>
            </div>
          }
          toggleAccordion={toggleAccordion}
        />
        <FaqItem
          index={3}
          open={openIndex === 3}
          title="How do I change my password for the indoor modem?"
          answer={
            <List
              items={[
                "Connect to the device, with the default password 12345678.",
                "Input the IP 192.168.1.1 ",
                "Input username and password: admin/ admin.",
                "It will show you a page where you click on WLAN. ",
                "Double click and go to where you will see the SSID. ",
                "Scroll down, you will see where the password is, click to view, then change to the preferred and apply.",
              ]}
            />
          }
          toggleAccordion={toggleAccordion}
        />
     
      <section>
        <div className="text-center mt-16">
          <NavLink to="/faqs" className="border bg-bluePrimary px-12 py-4 text-white rounded-[50px]">
            Read More {">"}
          </NavLink>
        </div>
      </section>
    </section>
  );
}

export default Faq;
