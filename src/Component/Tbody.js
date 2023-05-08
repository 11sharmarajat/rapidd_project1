import React from "react";
import './Tbody.css'

const Tbody = ({ item, ind }) => {
  let cn = "green";
  if (Math.round( Number(item.ttime)) < 100) {
    cn = "red";
    console.log(item.ttime, cn);
  }
  console.log(ind,"ind")
  return (
    <tr className={cn}>
      <td>{ind+1}</td>
      <td>{item.key}</td>
      <td>{Math.round(item.ttime)}</td>
    </tr>
  );
};

export default Tbody;
