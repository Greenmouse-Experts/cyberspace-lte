import { useState } from 'react';

function Testimonials() {
    const maxCharacters = 80; 

    // State to track whether "Read More" button is clicked for each testimonial
 // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [showFullText, _setShowFullText] = useState({
        testimonial1: false,
        testimonial2: false,
        testimonial3: false
    });

    // // Function to toggle the state for showing full testimonial text
    // const toggleShowFullText = testimonial => {
    //     setShowFullText(prevState => ({
    //         ...prevState,
    //         [testimonial]: !prevState[testimonial]
    //     }));
    // };

    return (
        <section className="bg-bluePrimary py-24 2xl:px-[140px] px-24 mx-0">
            <h5 className="text-white text-3xl font-bold mb-10">Testimonials</h5>
            <div className="flex items-center gap-5 md:flex-nowrap flex-wrap">
                {/* Testimonial 1 */}
                <div className="bg-white px-7 py-14 rounded-xl font-mdSans">
                    <p className="text-[#514F6E] 2xl:text-lg text-[12px] font-normal">
                        {showFullText.testimonial1
                            ? "I'm absolutely in love with @cyberpaylte. Since switching to routers from them, my internet connection has never been more reliable. Highly recommended!"
                            : "I'm absolutely in love with @cyberpaylte. Since switching to routers from them, my internet connection has never been more reliable. Highly recommended!".slice(0, maxCharacters) + '...'}
                    </p>
                    {showFullText.testimonial1 || (
                        <button className="text-bluePrimary font-semibold mt-2">
                            Read More
                        </button>
                    )}
                    <div className="flex items-center gap-3 mt-5">
                        <img src="/icons/avatar-1.svg" alt="" className="2xl:w-[64px] w-[40px]" />
                        <div>
                            <p className="text-[#170F49] font-semibold 2xl:text-base text-[12px] ">Urban Dwae</p>
                            <p className="text-[#6F6C90] 2xl:text-sm text-[13px]">Product Designer at Greenmouse</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white px-7 py-14 rounded-xl font-mdSans">
                    <p className="text-[#514F6E] 2xl:text-lg text-[12px] font-normal">
                        {showFullText.testimonial1
                            ? "I'm absolutely in love with @cyberpaylte. Since switching to routers from them, my internet connection has never been more reliable. Highly recommended!"
                            : "I'm absolutely in love with @cyberpaylte. Since switching to routers from them, my internet connection has never been more reliable. Highly recommended!".slice(0, maxCharacters) + '...'}
                    </p>
                    {showFullText.testimonial1 || (
                        <button className="text-bluePrimary font-semibold mt-2">
                            Read More
                        </button>
                    )}
                    <div className="flex items-center gap-3 mt-5">
                        <img src="/icons/avatar-1.svg" alt="" className="2xl:w-[64px] w-[40px]" />
                        <div>
                        <p className="text-[#170F49] font-semibold 2xl:text-base text-[12px] ">Urban Dwae</p>
                            <p className="text-[#6F6C90] 2xl:text-sm text-[13px]">Product Designer at Greenmouse</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white px-7 py-14 rounded-xl font-mdSans">
                    <p className="text-[#514F6E] 2xl:text-lg text-[12px] font-normal">
                        {showFullText.testimonial1
                            ? "I'm absolutely in love with @cyberpaylte. Since switching to routers from them, my internet connection has never been more reliable. Highly recommended!"
                            : "I'm absolutely in love with @cyberpaylte. Since switching to routers from them, my internet connection has never been more reliable. Highly recommended!".slice(0, maxCharacters) + '...'}
                    </p>
                    {showFullText.testimonial1 || (
                        <button className="text-bluePrimary font-semibold mt-2">
                            Read More
                        </button>
                    )}
                    <div className="flex items-center gap-3 mt-5">
                        <img src="/icons/avatar-1.svg" alt="" className="2xl:w-[64px] w-[40px]" />
                        <div>
                        <p className="text-[#170F49] font-semibold 2xl:text-base text-[12px] ">Urban Dwae</p>
                            <p className="text-[#6F6C90] 2xl:text-sm text-[13px]">Product Designer at Greenmouse</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Testimonials;
