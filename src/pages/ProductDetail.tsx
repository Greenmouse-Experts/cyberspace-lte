import { useState } from "react";
import Banner from "../components/Banner";
import { FiMinus, FiPlus } from "react-icons/fi";
import { formatCurrency } from "../utils/helpers";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import {
  addProduct,
  decreaseQuantity,
  increaseQuantity,
} from "../state/cart/cartSlice";
import { useAppDispatch } from "../state/hooks";
import { Tooltip } from "@material-tailwind/react";
import { FaInfoCircle } from "react-icons/fa";
import toast from "react-hot-toast";
import { useProduct } from "../features/cart/useProduct";

// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Box from "@mui/material/Box";

function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const { id } = useParams();
  const { product, isLoading } = useProduct(`${id}`);

  const dispatch = useAppDispatch();

  // const productId = id ? parseInt(id) : undefined;

  const [value, setValue] = useState(0);

  const increment = () => {
    dispatch(increaseQuantity(id));

    setQuantity(quantity + 1);
  };
  const decrement = () => {
    dispatch(decreaseQuantity(id));
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (isLoading) return <Loader />;

  // console.log("product", product);
  // const product = products.data.filter(
  //   (p: ProductItemType) => p.id == productId
  // );
  

  const { product_name, price, images, specification, description, coverage  } = product.data;
console.log(specification)
  const renderImg = JSON.parse(images)[0];

  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  const addToCart = () => {
    dispatch(
      addProduct({
        price: parseInt(price) * quantity,
        name: product_name,
        quantity: quantity,
        productId: id,
        unitPrice: price,
        image: renderImg,
      })
    );
    toast.success(`${product_name} added successfully`);
  };

  return (
    <>
      <Banner title="internet routers" text={`Product / ${product_name}`} />
      <section className="mt-20 flex lg:flex-row flex-col items-center gap-10 font-inter">
        <div className="lg:w-[55%] w-full">
          <div className="flex gap-5 md:flex-row flex-col-reverse items-start h-full">
            {/* <div className="flex md:flex-col flex-row gap-5 ">
              <div className="border  border-bluePrimary p-2 sm:w-36 w-14">
                <img
                  src="/img/product-small.png"
                  alt="product-small"
                  className="w-[50%]  mx-auto"
                />
              </div>
              <div className="border  border-grey-400 p-2 sm:w-36 w-14 ">
                <img
                  src="/img/product-small.png"
                  alt="product-small"
                  className="w-[50%]  mx-auto"
                />
              </div>
              <div className="border  border-grey-400 p-2 sm:w-36 w-14">
                <img
                  src="/img/product-small.png"
                  alt="product-small"
                  className="w-[50%]  mx-auto"
                />
              </div>
              <div className="border  border-grey-400 p-2 sm:w-36 w-14">
                <img
                  src="/img/product-small.png"
                  alt="product-small"
                  className="w-[50%]  mx-auto"
                />
              </div>
            </div> */}

            <div className="bg-grey-100 px-5 py-4 md:w-[80%] w-full lg:h-[26rem] flex items-center justify-center h-full">
              <img src={renderImg} alt="product" className="w-[80%] mx-auto" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 lg:w-[45%] w-full">
          <h3 className="font-medium text-3xl uppercase">{product_name}</h3>

          <ul className="flex flex-col gap-2">
            <li className="text-lg font-[300] flex items-center gap-2">
              {/* <span>
                <GoDotFill size={12} />
              </span> */}
              <div className="add_list"  dangerouslySetInnerHTML={{ __html: specification }} />
            </li>
            {/* <li className="text-lg font-[300] flex items-center gap-2">
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
            </li> */}
          </ul>
          {/* <div className="flex gap-4 border-y border-grey-400 py-5 mt-2">
            <button className="  uppercase text-bluePrimary px-10 py-3 text-lg border border-bluePrimary">
              White
            </button>
            <button className=" uppercase text-grey-700 px-10 py-3 text-lg focus:border focus:border-bluePrimary focus:text-bluePrimary">
              Black
            </button>
          </div> */}
          <p className="text-base font-normal">NGN(incl. of VAT) :</p>
          <div className="flex items-center gap-3">
            <h4 className=" font-inter">{formatCurrency(price * quantity)}</h4>
            {price == 122000 && (
              <div className=" bottom-4 right-2 ">
                <Tooltip
                  placement="top"
                  className="border border-blue-gray-50 bg-white px-4 py-3 shadow-xl shadow-black/10"
                  content={
                    <div className="w-80">
                      <p className="font-normal opacity-80 text-redPrimary">
                        <span className="font-medium">Note:</span>{" "}
                        {formatCurrency(price)} is only for the product not with
                        installation.
                      </p>
                    </div>
                  }
                >
                  <span>
                    <FaInfoCircle
                      color="red"
                      size={20}
                      className=" cursor-pointer"
                    />
                  </span>
                </Tooltip>
              </div>
            )}

            <h3 className="text-2xl text-grey-300 line-through font-inter">
              ₦50,000
            </h3>
          </div>

          <div className="flex sm:flex-row flex-col gap-5 mt-2">
            <div className="grid grid-cols-3 md:w-[200px] py-2 items-center justify-center  divide-x divide-grey-400 border-grey-400 border">
              <span
                className=" flex justify-center items-center cursor-pointer"
                onClick={decrement}
              >
                <FiMinus size={30} />
              </span>
              <span className=" flex justify-center items-center text-3xl">
                {quantity}
              </span>
              <span
                className=" flex justify-center items-center cursor-pointer "
                onClick={increment}
              >
                <FiPlus size={30} />
              </span>
            </div>
            <button
              className="  text-white bg-bluePrimary  md:w-[200px] py-3 sm:px-0 px-1  sm:text-lg text-sm border border-bluePrimary"
              onClick={() => {
                addToCart();
                navigate("/cart");
              }}
            >
              Buy Now
            </button>
            <button
              onClick={addToCart}
              className=" text-bluePrimary md:w-[200px] py-3 sm:px-0 px-1  sm:text-lg text-sm border border-bluePrimary"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </section>
      <section className="mt-20 font-inter mx-0 flex w-full flex-col justify-center items-center">
        <div className="flex justify-center items-center md:gap-20 gap-10 border-b border-grey-400 w-screen no-scrollbar   overflow-x-scroll">
          <div>
            <h6
              className={`sm:text-2xl text-sm font-medium pb-3 cursor-pointer ${
                value === 0 && "border-b-[3px]"
              } border-bluePrimary`}
              onClick={() => handleChange(0)}
            >
              Description
            </h6>
          </div>
          <div>
            <h6
              className={`sm:text-2xl text-sm font-medium pb-3 cursor-pointer ${
                value === 1 && "border-b-[3px]"
              } border-bluePrimary`}
              onClick={() => handleChange(1)}
            >
              Specification
            </h6>
          </div>
          {/* <div>
            <h6 className={`sm:text-2xl text-sm font-medium pb-3 cursor-pointer ${value === 2 && 'border-b-[3px]'} border-bluePrimary`} onClick={() =>handleChange(2)}>Reviews</h6>
          </div> */}
          <div>
            <h6
              className={`sm:text-2xl text-sm font-medium pb-3 cursor-pointer ${
                value === 3 && "border-b-[3px]"
              } border-bluePrimary`}
              onClick={() => handleChange(3)}
            >
              Coverage
            </h6>
          </div>
        </div>

        <div className="mt-5">
          <section>
            {value === 0 && (
              <p className="text-center">
              {description}
              </p>
            )}
            {value === 1 && (
               <div className="add_list"  dangerouslySetInnerHTML={{ __html: specification }} />
            )}
            {value === 3 && (
              <p className="text-center">
              {coverage}
              </p>
            )}
            
          </section>
        </div>
      </section>
    </>
  );
}

export default ProductDetail;

{
  /* <section className="mt-20 font-inter mx-0">
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
</section> */
}
