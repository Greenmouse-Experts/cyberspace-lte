
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import  { useState } from "react";

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import InputText from "../InputText";
 
export function CheckoutModal({handleOpen, open}) {
  
    const [firstName, setFirstName] = useState("")
    const [city, setCity] = useState("")
    const [email, setEmail] = useState("")
    const [lastName, setLastName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [address, setAddress] = useState("")
 
   
 
  return (
    <>
    <Dialog size="md" open={open} handler={handleOpen} className=" dark:bg-darkMood">
      <DialogHeader className="dark:text-white">Checkout</DialogHeader>
      <DialogBody>
        <div className="flex md:flex-row flex-col items-center gap-10">
          <InputText textLabel="First name" setValue={setFirstName} value={firstName} type="text"/>
          <InputText textLabel="Last name" setValue={setLastName} value={lastName} type="text"/>
        </div>

        <div className="flex md:flex-row flex-col items-center gap-10 mt-10">
          <InputText textLabel="Email Address" setValue={setEmail} value={email} type="email"/>
          <InputText textLabel="Address" setValue={setAddress} value={address} type="text"/>
        </div>

        <div className="flex md:flex-row flex-col items-center gap-10 mt-10">
          <InputText textLabel="State" setValue={setCity} value={city} type="text"/>
          <InputText textLabel="Phone number" setValue={setPhoneNumber} value={phoneNumber} type="tel"/>
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
        <Button variant="gradient" color="green" onClick={handleOpen}>
          <span>Proceed</span>
        </Button>
      </DialogFooter>
    </Dialog>
  </>
  );
}


















