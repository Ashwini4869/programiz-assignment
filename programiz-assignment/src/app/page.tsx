"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import axios from "axios";

const fetchData = async () => {
  const url =
    "https://storage.googleapis.com/programiz-static/hiring/software/job-listing-page-challenge/data.json";
  const res = await axios.get(url);
  return res.data;
};

export default function Home() {
  const [state, setState] = useState<"loading" | "done" | null>(null);
  const [data, setData] = useState<null | [{}]>();
  useEffect(() => {
    setState("loading");
    fetchData()
      .then((res) => {
        setData(res);
        console.log(res);
      })
      .catch((e: Error) => console.log(e));
  }, []);
  return (
    <div>
      <Header />
    </div>
  );
}
