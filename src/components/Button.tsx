import { ReactNode } from "react";

interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
}

function Button({ onClick, children }: ButtonProps) {
  return (
    <button className="w-full text-lg text-white bg-bluePrimary rounded-lg py-3" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
