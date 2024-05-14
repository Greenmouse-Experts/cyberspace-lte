import { FormEvent } from "react";


function WhistleBlower() {

  function handleSubmit(e:FormEvent<HTMLFormElement>){
    e.preventDefault()
  }
  return (
    <section className="py-20">
      <form className="padding !pt-40" onSubmit={handleSubmit}>
        <h2 className="h2">Submit a tip</h2>
     <h3 className="h3 mt-10">Reporter’s Contact Information <span className="text-bluePrimary para">This section may be left blank if reporter chooses to remain anonymous</span></h3>
        <div className=" flex md:flex-row flex-col items-center gap-10 mt-16">
          <div className="md:w-[33%] w-full">
            <label className="para">Fullname</label>
            <input
              type="text"
              className="w-full h-12 outline-none border rounded-md p-2 border-grey-300 mt-5"
            />
          </div>
          <div className="md:w-[33%] w-full">
            <label className="para">Email Address</label>
            <input
              type="text"
              className="w-full h-12 outline-none border rounded-md p-2 border-grey-300 mt-5"
            />
          </div>
          <div className="md:w-[33%] w-full">
            <label className="para">Phone Number</label>
            <input
              type="text"
              className="w-full h-12 outline-none border rounded-md p-2 border-grey-300 mt-5"
            />
          </div>
        </div>
        <div className="mt-10">
          <label className="para">Description</label>
          <textarea className="h-40 p-4 w-full border rounded-md border-grey-300 mt-5 text-black dark:text-white bg-white dark:bg-darkMood"></textarea>
        </div>
        <div className="flex flex-col mt-20">
          <label className="para">Supporting Document</label>
          <input type="file" name="" id="" className="mt-5" />
        </div>

        <div className="mt-20 flex justify-end ">
            <button type="submit" className="bg-bluePrimary text-white px-10 py-3 para rounded-lg  ">
                submit
            </button>
        </div>
      </form>
    </section>
  );
}

export default WhistleBlower;
