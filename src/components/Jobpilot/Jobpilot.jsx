import React from "react";
import BoxJopiot from "../BoxJopiot";

export default function Jobpilot() {
  return (
    <div>
      <div className="px-30  py-20 bg-blur">
        <h1 className="font-bold text-3xl  text-center my-6">How jobpilot work</h1>
        <div className="flex gap-5 justify-center">
            <BoxJopiot />
            <BoxJopiot />
            <BoxJopiot />
            <BoxJopiot />
        </div>
      </div>
    </div>
  );
}
