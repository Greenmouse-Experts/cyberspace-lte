import { FormEvent } from "react";
import { FaAsterisk } from "react-icons/fa";

function WhistleBlower() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  return (
    <section className="py-20">
      <form className="padding !pt-40" onSubmit={handleSubmit}>
        <div className="border-b border-grey-800 pb-2">
          <h3 className="">Submit a tip</h3>
        </div>
        <div className=" flex md:flex-row flex-col items-center gap-10 mt-10">
        <div className="md:w-[33%] w-full">
            <label className="para">Full Name</label>
            <input
            placeholder="Your Name"
              type="text"
              className="w-full h-12 outline-none border rounded-md p-2 border-grey-300 mt-5"
            />
          </div>
          <div className="md:w-[33%] w-full">
            <label className="para">Email Address</label>
            <input
            placeholder="Email Address"
              type="email"
              className="w-full h-12 outline-none border rounded-md p-2 border-grey-300 mt-5"
            />
          </div>
          <div className="md:w-[33%] w-full">
            <label className="para">Phone Number</label>
            <input
            placeholder="Phone Number"
              type="tel"
              className="w-full h-12 outline-none border rounded-md p-2 border-grey-300 mt-5"
            />
          </div>
        </div>
        <div className="mt-10">
          <label className="para flex items-center gap-1">
            Description of tip <span className=" text-redPrimary"><FaAsterisk size={10} /></span>
          </label>
          <textarea
            required={true}
            className="h-40 p-4 w-full border rounded-md border-grey-300 mt-5 text-black dark:text-white bg-white dark:bg-darkMood"
          ></textarea>
        </div>
        <div className="flex flex-col lg:mt-20 mt-10">
          <label className="para">Supporting Document</label>
          <input type="file" name="" id="" className="mt-5" />
        </div>

        <div className="lg:mt-20 flex justify-end mt-10">
          <button
            type="submit"
            className="bg-bluePrimary text-white base-btn  "
          >
            submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default WhistleBlower;
