import { FloatingWhatsApp } from "react-floating-whatsapp";
import whatsapp from "../../public/logo.svg"
//import whatsapp from "../assets/logo-white.png"
const ChatBot = () => {
  return (
    <FloatingWhatsApp
      phoneNumber="+2349076555350"
      accountName="Cyberspace LTE"
      notification
      notificationSound
      allowEsc
        allowClickAway
        avatar={whatsapp}
    />
  );
};

export default ChatBot;