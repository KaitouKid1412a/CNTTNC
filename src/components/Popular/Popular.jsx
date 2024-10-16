import React from "react";
import Anesthesiologists from "../Anesthesiologists/Anesthesiologists";

export default function Popular() {
  return (
    <div className="w-1320 mx-auto py-20">
      <h1 className="font-bold text-3xl my-3">Most Popular Vacancies</h1>
      <div>
        <div className="flex gap-4">
          <Anesthesiologists />
          <Anesthesiologists />
          <Anesthesiologists />
          <Anesthesiologists />
        </div>
        <div className="flex gap-4">
          <Anesthesiologists />
          <Anesthesiologists />
          <Anesthesiologists />
          <Anesthesiologists />
        </div>
        
        <div className="flex gap-4">
          <Anesthesiologists />
          <Anesthesiologists />
          <Anesthesiologists />
          <Anesthesiologists />
        </div>
        
      </div>
    </div>
  );
}
