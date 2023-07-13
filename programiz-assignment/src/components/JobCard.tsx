import Image from "next/image";
import React from "react";
import moment from "moment";
import { split } from "postcss/lib/list";

interface Props {
  image_url: string;
  company: string;
  position: string;
  keywords: Array<string>;
  posted_on: number;
  timing: string;
  location: string;
  filters: Array<string>;
  changeFilters: (arg0: string) => void;
}

//function to add keyword to filter
const handleClick: any = (props: Props, element: string) => {
  props.changeFilters(element);
};

const JobCard = (props: Props) => {
  //function to convert given timestamp in milliseconds to relative time
  function relativeTime(timestamp: number) {
    const dateObject = new Date(timestamp);
    const standardDateFormat = dateObject.toLocaleString();
    const time = moment(standardDateFormat).fromNow();
    return time;
  }

  const displayNew = () => {
    let time_string = relativeTime(props.posted_on);
    const split_array = time_string.split(" ");
    if (Number(split_array[0]) < 25) {
      return true;
    } else {
      return false;
    }
  };

  const keywordElements = props.keywords.map((element) => {
    return (
      <div
        onClick={() => handleClick(props, element)}
        className="px-2 mx-1 text-sm bg-teal-100  text-teal-600 cursor-pointer hover:bg-teal-600 hover:text-teal-50"
      >
        {element}
      </div>
    );
  });
  return (
    <div className="flex py-4 mx-2 my-4 w-3/4 justify-between bg-gray-50 shadow-md rounded-lg">
      {/* outer container */}
      <div className="flex w-full">
        <Image
          className="rounded-[50%] p-2 ml-2"
          src={props.image_url}
          width={70}
          height={50}
          alt="Company Logo"
        />
        {/* main section of the card */}
        <div className="p-2 w-full">
          <div className="flex items-center">
            <h1 className="text-sm font-semibold text-teal-600">
              {props.company}
            </h1>
            {/* new badge ,conditionally render for jobs that are within 25 days (just to demonstrate)*/}
            {displayNew() ? (
              <div className="text-xs bg-teal-600 p-1 px-2 font-semibold text-gray-50 rounded-xl ml-2">
                NEW!
              </div>
            ) : (
              ""
            )}
          </div>
          {/* title and keywords section */}
          <div className="flex justify-between">
            <h1 className="text-[15px] font-bold text-slate-700 tracking-wide hover:text-teal-500 hover:cursor-pointer">
              {props.position}
            </h1>
            <div className="flex justify-between">{keywordElements}</div>
          </div>
          {/* posted date, timing and location section */}
          <div className="flex text-xs text-gray-500">
            <h1 className="px">{relativeTime(props.posted_on)}</h1>
            <div className="mx-2"> &#8226;</div>
            <h1>{props.timing}</h1>
            <div className="mx-2"> &#8226;</div>
            <h1>{props.location}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
