// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import Banner from "../components/Banner";
import { Dialog, DialogBody, DialogFooter } from "@material-tailwind/react";
import InputText from "../components/InputText";
import { Controller, useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../config/_url";
import toast from "react-hot-toast";

interface ContactForm {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

function Contact() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const initialValues: ContactForm = {
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>({
    defaultValues: initialValues,
  });

  const onSubmit = async (data: ContactForm) => {
    setLoading(true);
    console.log(data);
    try {
      const response = await axios.post(
        `${BASE_URL}/submit/contact/form`,
        {
          ...data,
          full_name: data.name,
          phone_number: data.phone,
        }
      );
      // toast.success(response.data.message);
      reset(initialValues); // Reset the form to initial values after successful submission
      setOpen(true); // Open the success dialog
      console.log("Form submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit form");
    } finally {
      setLoading(false);
    }
  };

  const handleDialogClose = () => setOpen(false);

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
              onSubmit={handleSubmit(onSubmit)}
            >
              <h5 className="font-montserrat text-[22px] font-semibold  ">
                Contact Us
              </h5>
              <div className=" flex md:flex-row flex-col justify-between gap-8 ">
              <Controller
                  name="name"
                  control={control}
                  rules={{ required: "Name is required" }}
                  render={({ field }) => (
                    <InputText
                  
                      type="text"
                      placeholder="Enter full name"
                      error={errors.name?.message}
                      {...field}
                    />
                  )}
                />
              <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                      message: "Invalid email address",
                    },
                  }}
                  render={({ field }) => (
                    <InputText
                      
                      type="email"
                      placeholder="Enter email address"
                      error={errors.email?.message}
                      {...field}
                    />
                  )}
                />
              </div>
              <div className=" ">
              <Controller
                  name="phone"
                  control={control}
                  rules={{ required: "Phone number is required" }}
                  render={({ field }) => (
                    <InputText
                      
                      type="tel"
                      placeholder="Enter phone number"
                      error={errors.phone?.message}
                      {...field}
                    />
                  )}
                />
              </div>
              <div>
                <Controller
                  name="subject"
                  control={control}
                  rules={{ required: "Subject is required" }}
                  render={({ field }) => (
                    <InputText
                      label="Subject"
                      type="text"
                      placeholder="Subject"
                      error={errors.subject?.message}
                      {...field}
                    />
                  )}
                />
              </div>
              <div className=" ">
              <Controller
                  name="message"
                  control={control}
                  rules={{ required: "Message is required" }}
                  render={({ field }) => (
                    <textarea
                      {...field}
                      placeholder="Additional details..."
                      className="border border-gray-500 text-black rounded-lg h-[120px] pl-5 w-full pt-4 "
                    />
                  )}
                />
                  {errors.message && (
                  <p className="text-red-600">{errors.message.message}</p>
                )}
              </div>
              <button
                type="submit"
                className="bg-bluePrimary btn-hover text-white font-medium py-3 rounded-[5rem]"
              >
               {loading ? "Sending..." : "Submit"}
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
      <Dialog open={open} handler={handleDialogClose}>
        <DialogBody>
          <div className="text-center text-black">
            <h3 className="text-2xl font-semibold mb-4">Success</h3>
            <p className=" text-xl">
              Thank you for reaching out! Your message has been successfully
              sent. We will get back to you shortly.!
            </p>
          </div>
        </DialogBody>
        <DialogFooter>
          <button
            className="bg-colorPrimary btn btn-green rounded-md text-white font-semibold py-2 px-3"
            onClick={handleDialogClose}
          >
            Close
          </button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default Contact;
