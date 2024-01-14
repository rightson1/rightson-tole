"use client";
import React from "react";
import ProgressBar from "next-nprogress-bar";
const Progress = () => {
  return (
    <ProgressBar
      height="4px"
      color={"#3f3f46"}
      options={{ showSpinner: false }}
      shallowRouting
      appDirectory
    />
  );
};

export default Progress;
