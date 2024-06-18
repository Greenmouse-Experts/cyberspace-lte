// eslint-disable-next-line @typescript-eslint/ban-ts-comment

import InputText from "../../components/InputText";
import { useForm } from "react-hook-form";
import { useAppSelector } from "../../state/hooks";
import { saveUser, userData } from "../../state/user/userSlice";
import { useUpdateProfile } from "./useProfileUpdate";
import SpinnerMini from "../../components/SpinnerMini";
import Password from "./Password";

function UserDetails() {
const {updateProfile, isUpdating } = useUpdateProfile()
    const user = useAppSelector(userData)
    const {first_name, last_name, phone_number, email} = user
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      first_name:first_name ?? "",
      last_name: last_name ??  "",
      email: email ?? "",
      phone_number: phone_number ?? "",
      
    },
  });

  const allValues = getValues();



  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function onSubmit(data:any) {
    console.log(data)
    updateProfile({
    ...data
    }, {
      onSuccess(){
        saveUser({...user, ...allValues})
      }
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h4 className="mb-4">Update User Details</h4>
        <div className="flex flex-col gap-7">
          <InputText
            id="first_name"
            textLabel="First name"
            type="text"
            setValue={(value) => setValue("first_name", value as string)}
            value={watch("first_name")}
            error={errors.first_name?.message as unknown as string}
              {...register("first_name", {
                required: "first_name is required",
              })}
          />
            <InputText
            id="last_name"
            textLabel="Last name"
            type="text"
            setValue={(value) => setValue("last_name", value as string)}
            value={watch("last_name")}
            error={errors.last_name?.message as unknown as string}
              {...register("last_name", {
                required: "last_name is required",
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
        <button type="submit" className="mt-10 bg-bluePrimary rounded-md px-4 w-[10rem] py-2 font-medium text-white">
          {isUpdating ? <SpinnerMini/> : "Update"}
        </button>
      </form>
     <Password/>
    </div>
  );
}

export default UserDetails;
