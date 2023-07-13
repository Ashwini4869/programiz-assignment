"use client";
import React from "react";

interface Props {
  filters: Array<string>;
  changeFilters: (arg0: string) => void;
}
const handleClick: any = (props: Props, element: string) => {
  props.changeFilters(element);
};

const Filterbar = (props: Props) => {
  const filterElements = props.filters.map((element) => {
    return <div>{element}</div>;
  });
  return (
    <div className="flex justify-between">
      <div className="flex">{filterElements}</div>
      <button onClick={() => handleClick(props)}>Clear</button>
    </div>
  );
};

export default Filterbar;
