import { useState } from "react";
import { IoStar } from "react-icons/io5";
import Banner from "../components/Banner";
import { GoDotFill } from "react-icons/go";
import { FiMinus, FiPlus } from "react-icons/fi";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function ProductDetail() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity(quantity + 1);
  };
  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const [value, setValue] = useState(0);

  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Banner
        title="internet routers"
        text=" Product / INTERNET ROUTERS"
      />
      <section className="mt-20 flex items-start gap-10 font-inter">
        <div className="w-[55%]">
          <div className="flex gap-5 items-start">
            <div className="flex flex-col gap-5">
              <div className="border  border-bluePrimary p-2 w-36">
                <img
                  src="/img/product-small.png"
                  alt="product-small"
                  className="w-[50%]  mx-auto"
                />
              </div>
              <div className="border  border-grey-400 p-2 w-36">
                <img
                  src="/img/product-small.png"
                  alt="product-small"
                  className="w-[50%]  mx-auto"
                />
              </div>
              <div className="border  border-grey-400 p-2 w-36">
                <img
                  src="/img/product-small.png"
                  alt="product-small"
                  className="w-[50%]  mx-auto"
                />
              </div>
              <div className="border  border-grey-400 p-2 w-36">
                <img
                  src="/img/product-small.png"
                  alt="product-small"
                  className="w-[50%]  mx-auto"
                />
              </div>
            </div>

            <div className="bg-grey-100 px-5 py-4 w-[80%]">
              <img
                src="/img/product-1.png"
                alt="product"
                className="w-[80%] mx-auto"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 w-[45%]">
          <p>
            <span className="font-normal">Brand:</span> Cyberspace LTE
          </p>
          <p>
            <span className="font-normal">Availability:</span> 19 Devices
          </p>
          <h3 className="font-medium text-3xl uppercase">
            Superfast broadband device + 70gb
          </h3>
          <div className="flex gap-2 mt-1">
            <IoStar color="#FFCC00" size={25} />
            <IoStar color="#FFCC00" size={25} />
            <IoStar color="#FFCC00" size={25} />
            <IoStar color="#FFCC00" size={25} />
            <IoStar color="#E4E7E9" size={25} />
          </div>
          <ul className="flex flex-col gap-2">
            <li className="text-lg font-[300] flex items-center gap-2">
              <span>
                <GoDotFill size={12} />
              </span>
              Multiple User Wi-Fi Access Up to 15 Users
            </li>
            <li className="text-lg font-[300] flex items-center gap-2">
              <span>
                <GoDotFill size={12} />
              </span>
              Supported Features Which Includes Parental Control, Speed
              Limiting, IP Blacklist
            </li>
            <li className="text-lg font-[300] flex items-center gap-2">
              <span>
                <GoDotFill size={12} />
              </span>
              Superior Streaming, Online Gaming, Data Download, And Uploads.
            </li>
            <li className="text-lg font-[300] flex items-center gap-2">
              <span>
                <GoDotFill size={12} />
              </span>
              Data Validity 30 Days
            </li>
            <li className="text-lg font-[300] flex items-center gap-2">
              <span>
                <GoDotFill size={12} />
              </span>
              Wi-Fi Frequency: Supports 2.4GHz and 5GHz Frequency
            </li>
          </ul>
          <div className="flex gap-4 border-y border-grey-400 py-5 mt-2">
            <button className="  uppercase text-bluePrimary px-10 py-3 text-lg border border-bluePrimary">
              White
            </button>
            <button className=" uppercase text-grey-700 px-10 py-3 text-lg focus:border focus:border-bluePrimary focus:text-bluePrimary">
              Black
            </button>
          </div>
          <p className="text-base font-normal">NGN(incl. of VAT) :</p>
          <div className="flex items-center gap-3">
            <h4 className=" font-inter">₦28,500</h4>
            <h3 className="text-2xl text-grey-300 line-through font-inter">₦28,500</h3>
          </div>

          <div className="flex gap-5 mt-2">
            <div className="flex justify-center divide-x divide-grey-400 border-grey-400 border">
              <span
                className="w-14 flex justify-center items-center cursor-pointer"
                onClick={decrement}
              >
                <FiMinus size={30} />
              </span>
              <span className="w-14 flex justify-center items-center text-3xl">
                {quantity}
              </span>
              <span
                className="w-14 flex justify-center items-center cursor-pointer "
                onClick={increment}
              >
                <FiPlus size={30} />
              </span>
            </div>
            <button className="  text-white bg-bluePrimary  w-[200px] py-3 text-lg border border-bluePrimary">
              Buy Now
            </button>
            <button className=" text-bluePrimary w-[200px] py-3 text-lg border border-bluePrimary">
              Add to Cart
            </button>
          </div>
        </div>
      </section>
      <section className="mt-20 font-inter mx-0">
        <Box
          sx={{
            // width: { xs: "100%", sm: "100%", lg: "100%"},
            bgcolor: "background.paper",
            display:'flex',
            flexDirection: 'column',
            justifyContent: 'center !important',
            alignItems: 'center !important',
            width: "100%",
            margin: "0 auto !important",
          }}
        >
          <Tabs
            value={value}
            onChange={() => handleChange}
            variant="scrollable"
            scrollButtons={false}
            aria-label="scrollable prevent tabs example"
            sx={{
              ".MuiTabs-indicator": {
                backgroundColor: "#0080CF",
              },
              
              ".MuiTabs-root css-her8mk-MuiTabs-root":{
                width: "100% !important",
              },
              ".MuiTab-root": {
                minWidth: "unset",
                textTransform: "none",
                marginRight: 1,
                fontFamily: "Inter, sans-serif",
                fontSize:'18px',
                color: "#191919",
                fontWeight: 600,
              
              },
              ".Mui-selected": {
                color: "#191919 !important",
              },
              ".MuiTabs-flexContainer ": {
                borderBottom: "1px solid #E4E7E9",
                width: "100%",
                display: "flex",
                gap:10
              },
            }}
          >
            <Tab label="Description" />
            <Tab label="Specification" />
            <Tab label="Reviews" />
            <Tab label="Coverage" />
          </Tabs>

          <div className="mt-5">
           <section>
           <p className="text-center">
              The Cyberspace LTE Internet router offers lightning-fast broadband
              connectivity along with a generous data allowance of 70GB. This
              router ensures high-speed internet access, making it ideal for
              both personal and professional use. With its robust LTE
              capabilities, users can enjoy seamless online activities,
              including streaming, gaming, and browsing, without worrying about
              data limitations. More ...
            </p> 
           </section>
          </div>
        </Box>
      </section>
    </>
  );
}

export default ProductDetail;
