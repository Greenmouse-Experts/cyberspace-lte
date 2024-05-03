import { ReactNode } from "react";

interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type?: any;
  disabled?: boolean
}

function Button({ onClick, children, type, disabled }: ButtonProps) {
  return (
    <button disabled={disabled} type={type} className=" disabled:cursor-not-allowed w-full flex justify-center items-center text-lg text-white bg-bluePrimary rounded-lg py-3" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
