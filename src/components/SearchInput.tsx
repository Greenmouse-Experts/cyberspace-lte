import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";

const SearchInput = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const location = useLocation();

  
  const getSearchParams = () => {
    const params = new URLSearchParams(location.search);
    return params.get("search") || "";
  };

  useEffect(() => {
    const searchQuery = getSearchParams()?.toLowerCase() || "";
    setInput(searchQuery);
    getSearchParams();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (input.trim()) {
      navigate(`/products?search=${encodeURIComponent(input.trim())}`);
    }
    setInput(""); 
  };

  return (
    <form
      onSubmit={handleSearch}
      className="2xl:w-[300px] w-[200px] 2xl:h-[50px] h-[40px] relative xl:block hidden"
    >
      <BsSearch
        color=" #0075BF"
        size={20}
        className="absolute left-4 2xl:top-4 top-3"
      />
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        className=" w-full h-full bg-[#f3f8fb] px-14 text-black border border-bluePrimary rounded-xl 2xl:placeholder:text-[16px] placeholder:text-grayPrimary placeholder:text-[12px]"
        placeholder="Search devices..."
      />
    </form>
  );
};

export default SearchInput;
