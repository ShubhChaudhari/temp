import React from "react";
import data from "../data.json"

const DragAndDropDemo = () => {
  const isoCode= data.map((item)=>item.isoCode === "IN")
  console.log("isoCode",isoCode)
  console.log("data",data);
  return <div></div>;
};

export default DragAndDropDemo;
