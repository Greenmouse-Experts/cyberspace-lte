// import { NavLink } from "react-router-dom";
import Banner from "../components/Banner";

function Contact() {
  return (
    <>
      <Banner title="contact Us" text="Contact us" image="/img/contact-banner.png" />
      <section className="pt-20">
        <p className="font-normal md:text-lg">
          Experience the power of superfast internet with Cyberspace Superfast.
          To learn more about our services or enquire about custom solutions for
          your home or business, contact us today:
        </p>
        {/* <div className="mt-10">
          <p>
            <span className="font-medium capitalize">Address:</span> 12 Ologun
            Agbaje Street, off Adeola Odeku Street, Victoria Island, Lagos.
          </p>
          <p>
            <span className="font-medium capitalize">phone:</span> 02015159999
          </p>
          <p>
            <span className="font-medium capitalize">sales phone number:</span>{" "}
            09076555350, 09076555417
          </p>

          <p>
            <span className="font-medium capitalize">email:</span>{" "}
            <NavLink to="mailto:lteretail@cyberspace.net.ng">
              lteretail@cyberspace.net.ng
            </NavLink>
          </p>
          <p>
            <span className="font-medium capitalize">website</span>{" "}
            <NavLink to="www.cyberspacelte.net.ng">
              www.cyberspacelte.net.ng
            </NavLink>
          </p>
        </div> */}
         <div className="flex lg:flex-row gap-10 flex-col-reverse  mt-20">
          <div className="lg:w-[50%] w-full ">
            <div>
              <iframe
                title="Contact Map"
                width="100%"
                height="600px"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.750165491411!2d3.4140952757533904!3d6.426135924285578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8acdaec4eb6b%3A0x86a6056ae99642d9!2s12%20Ologun%20Agbaje%20St%2C%20Victoria%20Island%2C%20Lagos%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1717680371715!5m2!1sen!2sng"
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                //@ts-ignore
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div className=" text-black border border-gray-400 rounded-md dark:text-white px-8 2xl:py-[70px] py-10 md:w-[50%] w-full   md:ml-3 ml-0 shadow-md">
            <form
              className="flex flex-col 2xl:gap-8 gap-5 "
              onSubmit={(e) => e.preventDefault()}
            >
              <h5 className="font-montserrat text-[22px] font-semibold  ">
                Contact Us
              </h5>
              <div className=" flex md:flex-row flex-col justify-between gap-8 ">
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-[#F4F4F4] border border-gray-300 rounded-lg 2xl:h-[60px] placeholder:text-gray-800 dark:placeholder:text-white h-[50px] pl-5 md:w-[373px] w-full"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="bg-[#F4F4F4] border border-gray-300 rounded-lg md:w-[373px] w-full 2xl:h-[60px] placeholder:text-gray-800 dark:placeholder:text-white  h-[50px] pl-5"
                />
              </div>
              <div className=" ">
                <input
                  type="tel"
                  placeholder="Phone"
                  className="bg-[#F4F4F4] border border-gray-300 rounded-lg 2xl:h-[60px] placeholder:text-gray-800 dark:placeholder:text-white  h-[50px] pl-5 w-full"
                />
              </div>
              <div className=" ">
                <textarea
                  placeholder="Additional details"
                  className="bg-[#F4F4F4] border border-gray-300 rounded-lg text-black h-[120px] pl-5 w-full pt-4 placeholder:text-gray-800 dark:placeholder:text-white"
                />
              </div>
              <button
                type="submit"
                className="bg-bluePrimary btn-hover text-white font-medium py-3 rounded-[5rem]"
              >
                Submit Form
              </button>
            </form>
          </div>
        </div>
        <p className="font-normal md:text-lg mt-10">
          Join the Cyberspace Superfast community and unlock a world of
          possibilities with our premium broadband solutions. Connect with us
          today!
        </p>
      </section>
    </>
  );
}

export default Contact;
