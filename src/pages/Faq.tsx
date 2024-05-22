import { useState } from "react";
import { NavLink } from "react-router-dom";
import Banner from "../components/Banner";
import FaqItem from "../components/HomeComp/FaqItem";
import List from "../components/List";

function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Banner title="faqs" text="faqs" />
      <section className="bg-[#F5FBFE] dark:bg-darkMood mx-0 py-20 2xl:px-36 md:px-24 px-5">
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
        <FaqItem
          index={4}
          open={openIndex === 4}
          title="How do I change my password for the outdoor modem?"
          answer={
            <List
              items={[
                "Connect a laptop to the device via Wi-Fi or cable, logon to 192.168.1.1 ",
                "Input username: admin (If using the old router) ",
                "Input username: user (If using the new router)  ",
                "Input password: cyb123 ",
                "Hover the mouse icon on Network settings by the left, and click on Wireless.  ",
                "Scroll down, click on show password and edit ",
                "Then click APPLY (This will ensure it saves permanently).",
              ]}
            />
          }
          toggleAccordion={toggleAccordion}
        />
        <FaqItem
          index={5}
          open={openIndex === 5}
          title="How do I pull my data usage?"
          answer="You can send a mail to customercare_retail@cyberspace.net.ng requesting for your data usage or login to http://selfcare.cyberspace.net.ng/"
          toggleAccordion={toggleAccordion}
        />
        <FaqItem
          index={6}
          open={openIndex === 6}
          title="How do I check my data balance?"
          answer={
            <div>
              <p className="mb-5">
                Connect laptop to device via WIFI or LAN cable, login to
                www.cyberspacelte.net.ng/
              </p>
              <List
                items={[
                  "Click My Account:",
                  "Input username as email address and password (password was sent to email upon activation)",
                  "(If password is forgotten, click on forgot password and input your registered email with us. A password reset mail be sent to your registered email address)",
                  "Click on Account",
                  "Go to Billing Information, View Volume Balance.",
                ]}
              />
            </div>
          }
          toggleAccordion={toggleAccordion}
        />
        {/* <FaqItem
          index={7}
          open={openIndex === 7}
          title="Our coverage areas (Lagos, Abuja and Asaba)"
          answer=""
          toggleAccordion={toggleAccordion}
        /> */}
        <FaqItem
          index={8}
          open={openIndex === 8}
          title="Where can I find information about promotions or discounts on the self-service website?"
          answer="Notifications will be sent via SMS, email, website and all our social media platforms (Instagram, X and LinkedIn)"
          toggleAccordion={toggleAccordion}
        />
        <FaqItem
          index={9}
          open={openIndex === 9}
          title="What are the documents needed to activate my account?"
          answer={
            <List
              items={[
                "Valid ID card",
                "Utility bill",
                "Home or Office Address",
                "Email address  ",
                "NIN number",
                "Phone number",
              ]}
            />
          }
          toggleAccordion={toggleAccordion}
        />
        <FaqItem
          index={10}
          open={openIndex === 10}
          title="Documents needed for voice (VOIP) activation?"
          answer={
            <List
              items={[
                "Valid ID card",
                "Utility bill",
                "Home or Office Address",
                "Email address  ",
                "NIN number",
                "Phone number",
              ]}
            />
          }
          toggleAccordion={toggleAccordion}
        />
        <FaqItem
          index={11}
          open={openIndex === 11}
          title="Does my unused data roll over?"
          answer="Yes, your unused data roll over when you renew on the same service plan or a higher service plan on or before the expiration date."
          toggleAccordion={toggleAccordion}
        />
        <FaqItem
          index={12}
          open={openIndex === 12}
          title="What is your internet speed?"
          answer="Internet speed within a good coverage area will range up to 7mbps on upload and 25mbps on download."
          toggleAccordion={toggleAccordion}
        />
        <FaqItem
          index={13}
          open={openIndex === 13}
          title="How many devices can I connect to the indoor modem?"
          answer="Multiple user WIFI access up to 15 users."
          toggleAccordion={toggleAccordion}
        />
        <FaqItem
          index={14}
          open={openIndex === 14}
          title="How many devices can I connect to the outdoor modem?"
          answer="Multiple user WIFI access up to 40 users."
          toggleAccordion={toggleAccordion}
        />
        <FaqItem
          index={15}
          open={openIndex === 15}
          title="How do I monitor devices connected to the WIFI?"
          answer={
            <List
              items={[
                "Connect to the device, with the default password 12345678.",
                "Input the IP 192.168.1.1 ",
                "Input username and password: admin/ admin ",
                "Scroll down on the home page ",
                "Under Clients, you will see the number of devices connected.",
              ]}
            />
          }
          toggleAccordion={toggleAccordion}
        />
        <FaqItem
          index={16}
          open={openIndex === 16}
          title="Do I get compensation for downtimes?"
          answer="The validity period may be extended in the event that a network problem caused a prolonged outage from our end."
          toggleAccordion={toggleAccordion}
        />
        <FaqItem
          index={17}
          open={openIndex === 17}
          title="Can I suspend my account and how?"
          answer={
            <div>
              <p className="mb-5">
                You can suspend your account for the following reasons:
              </p>
              <List
                items={[
                  "When you are travelling out of town – to a location where our services cannot work (Outside Lagos, Asaba or Abuja State)",
                  "When you have local problems with your modem",
                  "During major downtime on the network",
                  "Send a mail to customercare_retail@cyberspace.net.ng with your customer ID or MDN stating reason why you want to suspend the account",
                ]}
              />
            </div>
          }
          toggleAccordion={toggleAccordion}
        />
        <FaqItem
          index={18}
          open={openIndex === 18}
          title="How do I update information on my account?"
          answer="Send a mail to customercare_retail@cyberspace.net.ng with your customer ID or MDN and information you intend to update on your account."
          toggleAccordion={toggleAccordion}
        />
        <FaqItem
          index={19}
          open={openIndex === 19}
          title="How can I monitor my data using your self-service applications?"
          answer={
            <List
              items={[
                "Connect your device via WIFI or LAN cable, log on to http://www.cyberspacelte.net.ng/",
                "Click My Account:",
                "Input username as email address and password, the password was sent to your email upon activation,",
                "If the password is forgotten, click on forgot password so that a password reset mail be sent to your email.",
                "Click on Account",
                "Go to Billing Information, View Volume Balance.",
              ]}
            />
          }
          toggleAccordion={toggleAccordion}
        />
        <FaqItem
          index={20}
          open={openIndex === 20}
          title="What do I do if I'm experiencing connectivity issues with my internet service?"
          answer={
            <List
              items={[
                "Restart your modem and router or internet gateway (modem/router combo)",
                "An equipment restart is the golden rule of internet troubleshooting",
                "This should always be your first step",
                "Move your router to a better spot",
                "If you’re using the internet over Wi-Fi, router placement is crucial. Sometimes moving your router just a few feet or changing the angle of the antennae can make a world of difference. ",
              ]}
            />
          }
          toggleAccordion={toggleAccordion}
        />
        <FaqItem
          index={21}
          open={openIndex === 21}
          title="Can I add or remove unauthorized users on my account through the self-service portal?"
          answer="No, you cannot add or remove unauthorized users"
          toggleAccordion={toggleAccordion}
        />
        <FaqItem
          index={22}
          open={openIndex === 22}
          title="Can I schedule a service appointment or technician visit online?"
          answer="Yes, you can send us a mail or call any of our numbers on the website."
          toggleAccordion={toggleAccordion}
        />
      </section>
    </>
  );
}

export default Faq;
