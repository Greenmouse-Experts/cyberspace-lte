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
    <button disabled={disabled} type={type} className=" disabled:cursor-not-allowed w-full flex justify-center items-center text-lg text-white bg-bluePrimary rounded-3xl py-3 hover:-translate-y-1 hover:shadow-lg transition-all" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
