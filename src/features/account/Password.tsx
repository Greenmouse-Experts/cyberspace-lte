import React from 'react'
import InputText from '../../components/InputText'
import { useForm } from 'react-hook-form';
import { useUpdatePassword } from './useProfileUpdate';
import SpinnerMini from '../../components/SpinnerMini';

function Password() {


    const {updatePassword, isUpdating } = useUpdatePassword()

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
      } = useForm({
        defaultValues: {
          password: "",
          new_password:  "",
         
          
        },
      });
 // eslint-disable-next-line @typescript-eslint/no-explicit-any
      function onSubmit(data:any) {
        console.log(data)
        updatePassword({
        ...data
        }, {
          onSuccess(){
            // saveUser({...user, ...allValues})
          }
        })
      }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='mt-20'>
    <h4 className="mb-4">Update Password</h4>
    <div className="flex flex-col gap-7">
    
      <InputText
        id="password"
        textLabel="New Password (min 8 chars)"
        type="text"
        setValue={(value) => setValue("password", value as string)}
        value={watch("password")}
         error={errors.password?.message as unknown as string}
          {...register("password", {
            required: "Password is required",
          })}
      />
      <InputText
        id="first_name"
        textLabel="Confirm password"
        type="text"
        setValue={(value) => setValue("new_password", value as string)}
        value={watch("new_password")}
         error={errors.new_password?.message as unknown as string}
          {...register("new_password", {
            required: "New Password is required",
          })}
      />
    </div>
    <button className="mt-10 bg-bluePrimary rounded-md px-4 w-[10rem] py-2 font-medium text-white">
    {isUpdating ? <SpinnerMini/> : "Update"}
    </button>
  </form>
  )
}

export default Password