"use client";

import { readData } from "@/core/http-service/http-service";
import { useEffect } from "react";

const CourseComments = () => {
  useEffect(() => {
    readData("/validation-error");
  });

  return <></>;
};
export default CourseComments;
