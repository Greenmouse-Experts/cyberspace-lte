import { NavLink } from "react-router-dom";
import Banner from "../components/Banner";
import FaqItem from "../components/HomeComp/FaqItem";
import List from "../components/List";

function Faq() {
  return (
    <>
      <Banner title="faqs" text="faqs" />
      <section className="bg-[#F5FBFE] dark:bg-darkMood mx-0 py-20 2xl:px-36 md:px-24 px-5">
        <h4 className="text-black text-center font-semibold mb-20">
          Frequently Asked Questions
        </h4>
        <FaqItem
        open={true}
        title="“How do I subscribe to the Cyberspace Superfast Service"
        answer={
          <div>
            <p>
            Contact us on our LiveChat on our website, give us a call at 09076555350 or 09076555417 or send us an e-mail at lteretail@cyberspace.net.ng.
            </p>
          </div>
        }
      />
      <FaqItem
        open={false}
        title="How do I renew my subscription via the selfcare portal"
        answer={
          <List
            items={[
              "Direct transfer to our Zenith bank account:1014025067 Cyberspace Ltd-LTE Zenith. ",
              "Or via our self-care portal: http://selfcare.cyberspace.net.ng/.",
            ]}
          />
        }
      />
      <FaqItem
        open={false}
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
      />
      <FaqItem
        open={false}
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
      />

        <FaqItem
          open={false}
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
        />

        <FaqItem
          open={false}
          title="How do I pull my data usage?"
          answer="You can send a mail to customercare_retail@cyberspace.net.ng requesting for your data usage or login to http://selfcare.cyberspace.net.ng/"
        />

        <FaqItem
          open={false}
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
        />
        <FaqItem
          open={false}
          title="Our coverage areas (Lagos, Abuja and Asaba)"
          answer=""
        />
        <FaqItem
          open={false}
          title="Where can I find information about promotions or discounts on the self-service website?"
          answer="Notifications will be sent via SMS, email, website and all our social media platforms (Instagram, X and LinkedIn)"
        />

        <FaqItem
          open={false}
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
        />

        <FaqItem
          open={false}
          title="Documents needed for voice (VOIP) activation:"
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
        />

        <FaqItem
          open={false}
          title="Does my unused data roll over?"
          answer="Yes, your unused data roll over when you renew on the same service plan or a higher service plan on or before the expiration date."
        />

        <FaqItem
          open={false}
          title="What is your internet speed?"
          answer="Internet speed within a good coverage area will range up to 7mbps on upload and 25mbps on download."
        />

        <FaqItem
          open={false}
          title="How many devices can I connect to the indoor modem?"
          answer="Multiple user WIFI access up to 15 users."
        />

        <FaqItem
          open={false}
          title="How many devices can I connect to the outdoor modem?"
          answer="Multiple user WIFI access up to 40 users."
        />

        <FaqItem
          open={false}
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
        />

        <FaqItem
          open={false}
          title="Do I get compensation for downtimes?"
          answer="The validity period may be extended in the event that a network problem caused a prolonged outage from our end."
        />

        <FaqItem
          open={false}
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
        />

        <FaqItem
          open={false}
          title="How do I update information on my account?"
          answer="Send a mail to customercare_retail@cyberspace.net.ng with your customer ID or MDN and information you intend to update on your account."
        />

        <FaqItem
          open={false}
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
        />

        <FaqItem
          open={false}
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
        />

        <FaqItem
          open={false}
          title="Can I add or remove unauthorized users on my account through the self-service portal?"
          answer="No, you cannot add or remove unauthorized users"
        />

        <FaqItem
          open={false}
          title="Can I schedule a service appointment or technician visit online?"
          answer="Yes, you can send us a mail or call any of our numbers on the website."
        />

        {/* <FaqItem
        open={false}
        title="How do I pay for the Cyberspace Superfast modem?"
        answer="You can determine the number of shares you hold by adding up all your share certificates and holdings in CSCS, referring to your recent dividend warrant, or by contacting."
      /> */}
        {/* <section>
        <div className="text-center mt-16">
          <button className="border bg-bluePrimary px-12 py-5 text-white rounded-[50px]">
            Read More {">"}
          </button>
        </div>
      </section> */}
      </section>
    </>
  );
}

export default Faq;
