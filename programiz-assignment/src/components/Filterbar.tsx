"use client";
import React from "react";
import { HiXMark } from "react-icons/hi2";

interface Props {
  filters: Array<string>;
  setFilters: React.Dispatch<React.SetStateAction<Array<string>>>;
}
const handleClick: any = (props: Props) => {
  props.setFilters([]);
};

const handleRemoveFilter = (props: Props, filter: string) => {
  props.setFilters((prevFilters) => prevFilters.filter((f) => f !== filter));
};
const Filterbar = (props: Props) => {
  const filterElements = props.filters.map((element) => {
    return (
      <div className="flex px-1 items-center m-2 bg-teal-100 text-teal-600">
        <div className="">{element}</div>
        <div
          onClick={() => handleRemoveFilter(props, element)}
          className="bg-teal-600 text-white p-1 ml-1 cursor-pointer"
        >
          <HiXMark />
        </div>
      </div>
    );
  });
  return (
    <div className="flex mt-4 shadow-md justify-between bg-gray-50 h-12 w-3/4">
      <div className="flex">{filterElements}</div>
      <button
        onClick={() => handleClick(props)}
        className="text-teal-600 font-semibold mr-2 hover:underline"
      >
        Clear
      </button>
    </div>
  );
};

export default Filterbar;
