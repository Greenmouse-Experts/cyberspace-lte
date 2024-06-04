// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import InputText from "../InputText";
import { useSelector } from "react-redux";
import { getTotalCartPrice } from "../../state/cart/cartSlice";
import { formatCurrency } from "../../utils/helpers";
import { usePayment } from "../../features/cart/usePayment";
import { useForm } from "react-hook-form";

// import toast from "react-hot-toast";
import SpinnerMini from "../SpinnerMini";
import { userData } from "../../state/user/userSlice";
import { GATEWAY_KEY } from "../../services/constant";

export function PlantModal({ handleOpen, open }) {
  const totalPrice = useSelector(getTotalCartPrice);
  const { id } = useSelector(userData);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      address: "",
      state: "",
      lga: "",
    },
  });

  const { pay, isLoading } = usePayment();

//   const watchState = watch("state");

  const generateMerchantRef = () => {
    // Generate a unique identifier using timestamp or any other method you prefer
    const timestamp = Date.now().toString();
    const randomSuffix = Math.floor(Math.random() * 10000)
      .toString()
      .padStart(4, "0"); // Add random numbers to ensure uniqueness
    const newMerchantRef = `MRef-${timestamp}-${randomSuffix}`;
    return newMerchantRef; // Update the state with the new MerchantRef
  };

  const onSubmit = (data) => {
    pay(
      {
        Currency: "NGN",
        MerchantRef: generateMerchantRef(),
        Amount: `${totalPrice * 100}`,
        Description: "Product",
        CustomerId: id,
        CustomerName: `${data.first_name} ${data.last_name}`,
        CustomerEmail: data.email,
        CustomerMobile: data.phone_number,
        IntegrationKey: `${GATEWAY_KEY}`,
        ReturnUrl: "https://cyberspace-lte.netlify.app/account",
        WebhookUrl: "https://merchant_webhook_url",
        ProductCode: "",
        // Splits: [
        //   {
        //     WalletCode: "teargstd",
        //     Amount: totalPrice,
        //     ShouldDeductFrom: true,
        //   },
        // ],
      },
      {
        onSuccess(data) {
          if (data.succeeded) {
            window.location.href = data.data.redirectUrl;
          }
        },
        onError() {
          handleOpen();
        },
      }
    );
  };

  const onError = (errors) => {
    console.log(errors);
  };

  return (
    <Dialog
      size="md"
      open={open}
      handler={handleOpen}
      className="dark:bg-darkMood overflow-y-scroll h-[90vh]"
    >
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <DialogHeader className="dark:text-white">Checkout</DialogHeader>
        <DialogBody>
          <div className="flex md:flex-row flex-col items-center gap-10">
            <InputText
              id="first_name"
              textLabel="First name"
              type="text"
              setValue={(value) => setValue("first_name", value)}
              value={watch("first_name")}
              error={errors.first_name?.message}
              {...register("first_name", {
                required: "First name is required",
              })}
            />
            <InputText
              id="last_name"
              textLabel="Last name"
              type="text"
              setValue={(value) => setValue("last_name", value)}
              value={watch("last_name")}
              error={errors.last_name?.message}
              {...register("last_name", { required: "Last name is required" })}
            />
          </div>

          <div className="flex md:flex-row flex-col items-center gap-10 mt-10">
            <InputText
              id="email"
              textLabel="Email Address"
              type="email"
              setValue={(value) => setValue("email", value)}
              value={watch("email")}
              error={errors.email?.message}
              {...register("email", { required: "Email is required" })}
            />
          </div>

          <div className="flex md:flex-row flex-col items-center gap-10 mt-10">
            <InputText
              id="routerId"
              textLabel="Router ID"
              type="text"
              setValue={(value) => setValue("routerId", value)}
              value={watch("routerId")}
              error={errors.routerId?.message}
              {...register("routerId", { required: "Router ID is required" })}
            />
            <InputText
              id="phone_number"
              textLabel="Phone number"
              type="tel"
              setValue={(value) => setValue("phone_number", value)}
              value={watch("phone_number")}
              error={errors.phone_number?.message}
              {...register("phone_number", {
                required: "Phone number is required",
              })}
            />
          </div>
          <div className="flex flex-col items-start gap-1 mt-10">
            <p className="text-bluePrimary font-bold 2xl:text-[18px] text-base font-grotesk">
            5pm-8am Weekdays, 24Hrs Weekends and Public Holidays
            </p>
            <div className="bg-[#E4E7E9] h-[1px]" />
            <div className="bg-[#E4E7E9] h-[1px]" />
            <p className="text-bluePrimary font-bold 2xl:text-lg text-sm">
              30 Days
            </p>
            <div className="bg-[#E4E7E9] h-[1px]" />
            <p className="text-lightGray font-bold 2xl:text-2xl text-lg ">
              N28,500
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-5 text-black">
            
            <div className="flex justify-between">
              <span className="text-2xl font-medium">Total</span>
              <span className="text-[1.3rem] font-medium">
                {formatCurrency(6000)}
              </span>
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" type="submit">
            {isLoading ? <SpinnerMini /> : <span>Proceed</span>}
          </Button>
        </DialogFooter>
      </form>
    </Dialog>
  );
}
