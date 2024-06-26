import React from "react";

interface SelectProps {
  id: string;
  items: string[];
  label: string;
  value: string;
  error: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
 
}

const SelectInput: React.FC<SelectProps> = React.forwardRef(({
  id,
  items,
  label,
  value,
  error,
  handleChange,
  ...rest
}, ref) => {
  return (
    <div className="w-full">
      <label htmlFor={id} className="text-[15px] font-medium text-[#1d2026] tracking-wide">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={handleChange}
         // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-expect-error
        ref={ref}
        className="block w-full h-[2.9rem] py-1.5 px-2 text-[14px] text-[#1c2125] border-0 outline-none ring-2 ring-inset ring-[#C3D4E9] placeholder:text-[#8C94A3] focus:ring-2 focus:ring-inset focus:ring-[#0675C1] rounded-md"
        {...rest}
      >
        <option value="">Select {label}</option>
        {items.map((option: string, index: number) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
});

SelectInput.displayName = "SelectInput";
export default SelectInput;
