import Image from "next/image";
import React from "react";
import moment from "moment";

interface Props {
  image_url: string;
  company: string;
  position: string;
  keywords: Array<string>;
  posted_on: number;
  timing: string;
  location: string;
}

const JobCard = (props: Props) => {
  //function to convert given timestamp in milliseconds to relative time
  function relativeTime(timestamp: number) {
    const dateObject = new Date(timestamp);
    const standardDateFormat = dateObject.toLocaleString();
    const time = moment(standardDateFormat).fromNow();
    return time;
  }
  const keywordElements = props.keywords.map((element) => {
    return (
      <div className="px-2 mx-1 text-sm bg-teal-100 font-bold text-teal-600">
        {element}
      </div>
    );
  });
  return (
    <div className="flex mx-2 my-4 w-3/4 justify-between bg-gray-50 shadow-md">
      {/* outer container */}
      <div className="flex w-full">
        <Image
          className="rounded-[50%] p-2 ml-1"
          src={props.image_url}
          width={70}
          height={50}
          alt="Company Logo"
        />
        {/* main section of the card */}
        <div className="p-2 w-full">
          <h1 className="text-sm font-semibold text-teal-600">
            {props.company}
          </h1>
          {/* title and keywords section */}
          <div className="flex justify-between">
            <h1 className="text-[15px] font-bold text-slate-700 tracking-wide">
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
