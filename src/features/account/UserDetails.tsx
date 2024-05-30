// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import InputText from "../../components/InputText";
import { useForm } from "react-hook-form";
import { useAppSelector } from "../../state/hooks";
import { userData } from "../../state/user/userSlice";

function UserDetails() {

    const user = useAppSelector(userData)
    const {name, phone_number, email} = user
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      full_name:name ?? "",
    //   last_name: "",
      email: email ?? "",
      phone_number: phone_number ?? "",
      
    },
  });

  function onSubmit() {
   
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h4 className="mb-4">Update User Details</h4>
        <div className="flex flex-col gap-7">
          <InputText
            id="full_name"
            textLabel="Full name"
            type="text"
            setValue={(value) => setValue("full_name", value as string)}
            value={watch("full_name")}
            error={errors.full_name?.message as unknown as string}
              {...register("full_name", {
                required: "full_name is required",
              })}
          />
          <InputText
              id="email"
              textLabel="Email Address"
              type="email"
              setValue={(value) => setValue("email", value as string)}
              value={watch("email")}
              error={errors.email?.message as unknown as string}
              {...register("email", { required: "Email is required" })}
            />
           <InputText
              id="phone_number"
              textLabel="Phone number"
              type="tel"
              setValue={(value) => setValue("phone_number", value as string)}
              value={watch("phone_number")}
              error={errors.phone_number?.message as unknown as string}
              {...register("phone_number", {
                required: "Phone number is required",
              })}
            />
        </div>
        <button className="mt-10 bg-bluePrimary rounded-md px-4 py-2 font-medium text-white">
          Update
        </button>
      </form>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-20">
        <h4 className="mb-4">Update Password</h4>
        <div className="flex flex-col gap-7">
        
          <InputText
            id="password"
            textLabel="New Password (min 8 chars)"
            type="text"
            //   setValue={}
            value=""
            error=""
            //   {...register("first_name", {
            //     required: "First name is required",
            //   })}
          />
          <InputText
            id="first_name"
            textLabel="Confirm password"
            type="text"
            //   setValue={}
            value=""
            error=""
            //   {...register("first_name", {
            //     required: "First name is required",
            //   })}
          />
        </div>
        <button className="mt-10 bg-bluePrimary rounded-md px-4 py-2 font-medium text-white">
          Update
        </button>
      </form>
    </div>
  );
}

export default UserDetails;
