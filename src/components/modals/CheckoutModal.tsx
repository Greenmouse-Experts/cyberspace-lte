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
import NaijaStates from "naija-state-local-government";
import SelectInput from "../SelectInput";
import { useSelector } from "react-redux";
import { getTotalCartPrice } from "../../state/cart/cartSlice";
import { formatCurrency } from "../../utils/helpers";
import { usePayment } from "../../features/cart/usePayment";
import { useForm } from "react-hook-form";

// import toast from "react-hot-toast";
import SpinnerMini from "../SpinnerMini";


export function CheckoutModal({ handleOpen, open }) {
  const totalPrice = useSelector(getTotalCartPrice);
 

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

  const watchState = watch("state");
  // const [merchantRef, setMerchantRef] = useState(""); 

  const generateMerchantRef = () => {
    // Generate a unique identifier using timestamp or any other method you prefer
    const timestamp = Date.now().toString();
    const randomSuffix = Math.floor(Math.random() * 10000).toString().padStart(4, "0"); // Add random numbers to ensure uniqueness
    const newMerchantRef = `MRef-${timestamp}-${randomSuffix}`;
    return newMerchantRef// Update the state with the new MerchantRef
  };
 


  const onSubmit = (data) => {
    
    pay(
      {
        Currency: "NGN",
        MerchantRef: generateMerchantRef(),
        Amount: totalPrice,
        Description: "showmax subscription",
        CustomerId: "960",
        CustomerName: `${data.first_name} ${data.last_name}`,
        CustomerEmail: data.email,
        CustomerMobile: data.phone_number,
        IntegrationKey: "078b48a5c64442ddb63ac3d1f0604153",
        ReturnUrl: "https://cyberspace-lte.netlify.app/",
        WebhookUrl: "https://merchant_webhook_url",
        ProductCode: "",
        Splits: [
          {
            WalletCode: "teargstd",
            Amount: totalPrice,
            ShouldDeductFrom: true,
          },
        ],
      },
      {
        onSuccess(data) {
          console.log(data);
          if (data.succeeded) {
           window.location.href = data.data.redirectUrl;
          }
        },
        onError() {
          handleOpen()
         
        }
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
            <SelectInput
              id="state"
              items={NaijaStates.states()}
              label="State of residence"
              handleChange={(e) => setValue("state", e.target.value)}
              value={watchState}
              error={errors.state?.message}
              {...register("state", { required: "State is required" })}
            />
            <SelectInput
              id="lga"
              items={watchState ? NaijaStates.lgas(watchState).lgas : []}
              label="Local Government Area"
              handleChange={(e) => setValue("lga", e.target.value)}
              value={watch("lga")}
              error={errors.lga?.message}
              {...register("lga", { required: "LGA is required" })}
            />
          </div>

          <div className="flex md:flex-row flex-col items-center gap-10 mt-10">
            <InputText
              id="address"
              textLabel="Delivery Address"
              type="text"
              setValue={(value) => setValue("address", value)}
              value={watch("address")}
              error={errors.address?.message}
              {...register("address", { required: "Address is required" })}
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

          <div className="mt-10 flex flex-col gap-5 text-black">
            <div className="flex justify-between">
              <span className="text-2xl font-medium">Subtotal</span>
              <span className="text-[1.3rem] font-medium">
                {formatCurrency(totalPrice)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-lg font-[300]">Estimated Tax</span>
              <span className="text-[1.3rem] font-medium">₦0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-lg font-[300]">Shipping and Handling</span>
              <span className="text-[1.3rem] font-medium">₦0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-2xl font-medium">Total</span>
              <span className="text-[1.3rem] font-medium">
                {formatCurrency(totalPrice)}
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
          {isLoading ? <SpinnerMini/> :  <span>Proceed</span>}
          </Button>
        </DialogFooter>
      </form>
    </Dialog>
  );
}
