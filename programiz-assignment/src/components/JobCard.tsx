import Image from "next/image";
import React from "react";

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
  const keywordElements = props.keywords.map((element) => {
    return <div className="px-2">{element}</div>;
  });
  return (
    <div className="flex m-1 w-full justify-between border-2 border-black">
      {/* outer container */}
      <div className="flex w-full">
        <Image
          className="rounded-[50%] p-2"
          src={props.image_url}
          width={70}
          height={50}
          alt="Company Logo"
        />
        {/* main section of the card */}
        <div className="p-2 w-full">
          <h1>{props.company}</h1>
          {/* title and keywords section */}
          <div className="flex justify-between">
            <h1>{props.position}</h1>
            <div className="flex justify-between">{keywordElements}</div>
          </div>
          {/* posted date, timing and location section */}
          <div className="flex">
            <h1>{props.posted_on}</h1>
            <h1>{props.timing}</h1>
            <h1>{props.location}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
