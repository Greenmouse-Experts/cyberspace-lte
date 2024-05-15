import React from "react";

interface InputProps {
  textLabel: string;
 
  type:string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const InputText: React.FC<InputProps> = ({
  textLabel,
  
  value,
  type,
  setValue,
}) => {
 

  return (
    <div className=" w-[100%] sm:w-[100%]  relative flex items-start flex-col">
      <label className="text-[14px] font-medium">{textLabel}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        
        className="w-full py-3 px-4 outline-none border border-green rounded-lg text-sm"
      />
    </div>
  );
};

export default InputText;
