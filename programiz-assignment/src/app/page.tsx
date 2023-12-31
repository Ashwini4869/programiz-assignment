"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import JobCard from "@/components/JobCard";
import axios from "axios";
import Filterbar from "@/components/Filterbar";

const fetchData = async () => {
  const url =
    "https://storage.googleapis.com/programiz-static/hiring/software/job-listing-page-challenge/data.json";
  const res = await axios.get(url);
  return res.data;
};

export default function Home() {
  const [state, setState] = useState<"loading" | "done" | null>(null);
  const [data, setData] = useState<null | [{}]>();
  const [filters, setFilters] = useState<Array<string>>([]);
  const changeFilters = (element: string) => {
    if (!filters.includes(element)) {
      setFilters([...filters, element]);
    }
  };
  useEffect(() => {
    setState("loading");
    fetchData()
      .then((res) => {
        setData(res);
      })
      .catch((e: Error) => console.log(e));
  }, []);

  const filterJobs = data?.filter((elem: any) => {
    if (filters.length == 0) {
      return elem;
    }
    return filters.every((element) => elem.keywords.includes(element));
  });
  const jobCardElements = filterJobs?.map((elem: any) => {
    return (
      <JobCard
        image_url={elem.company_logo}
        company={elem.company}
        location={elem.location}
        posted_on={elem.posted_on}
        position={elem.position}
        timing={elem.timing}
        keywords={elem.keywords}
        filters={filters}
        changeFilters={changeFilters}
        featured={Math.random() >= 0.5}
      />
    );
  });
  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      {/* conditionally render the filterbar component */}
      {filters.length !== 0 ? (
        <Filterbar filters={filters} setFilters={setFilters} />
      ) : (
        ""
      )}
      <div className="w-full mt-12 flex flex-col items-center">
        {jobCardElements}
      </div>
    </div>
  );
}
