import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { FaAsterisk } from "react-icons/fa";
import { BASE_URL } from "../config/_url";
import axios from "axios";

function WhistleBlower() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  const [image, setimage] = useState<File | null>(null);

  const resetForm = () =>{
    setName("");
    setEmail("");
    setPhone("");
    setDescription("");
    setimage(null);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(`${BASE_URL}/submit/whistle/blower`, {
        name,
        email,
        phone,
        description,
        document: image,
      });
      console.log(response);
      if (response.data.success === true) {
        toast.success(response.data.message);
        resetForm()
      }
      if (response.data.success === false) {
        toast.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit form");
    } finally {
      setLoading(false);
    }
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
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="md:w-[33%] w-full">
            <label className="para">Email Address</label>
            <input
              placeholder="Email Address"
              type="email"
              className="w-full h-12 outline-none border rounded-md p-2 border-grey-300 mt-5"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="md:w-[33%] w-full">
            <label className="para">Phone Number</label>
            <input
              placeholder="Phone Number"
              type="tel"
              className="w-full h-12 outline-none border rounded-md p-2 border-grey-300 mt-5"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </div>
        </div>
        <div className="mt-10">
          <label className="para flex items-center gap-1">
            Description of tip{" "}
            <span className=" text-redPrimary">
              <FaAsterisk size={10} />
            </span>
          </label>
          <textarea
            required={true}
            className="h-40 p-4 w-full border rounded-md border-grey-300 mt-5 text-black dark:text-white bg-white dark:bg-darkMood"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
        </div>
        <div className="flex flex-col lg:mt-20 mt-10">
          <label className="para">Supporting Document</label>
          <input
            type="file"
            name=""
            id=""
            className="mt-5"
            onChange={(e) => {
              const file = e.target.files ? e.target.files[0] : null;
              setimage(file);
            }}
          />
        </div>

        <div className="lg:mt-20 flex justify-end mt-10">
          <button
            type="submit"
            className="bg-bluePrimary text-white base-btn  "
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default WhistleBlower;
