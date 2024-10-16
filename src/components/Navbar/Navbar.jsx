import React from "react";

export default function Navbar() {
  return (
    <div className="">
      <div className="justify-around flex bg-slate-100 py-3">
        <div className="flex gap-3">
          <div>Home</div>
          <div>Find Job</div>
          <div>Employers</div>
          <div>Candidates</div>
          <div>Pricing Plans</div>
          <div>Customer Supports Plans</div>
        </div>
        <div className="flex gap-3">
          <div>+1-202-555-0178</div>
          <div>English</div>
        </div>
      </div>
      <div className="flex justify-around my-4 py-2">
        <div className="flex gap-3 items-center">
          <div>MyJob</div>
          <div className="flex w-96 gap-3 items-center">
            <div>India</div>

            <input
              className="border border-pink-100 p-3 "
              type="text"
              placeholder="Job tittle, keyword, company"
              name=""
              id=""
            />
          </div>
         
        </div>
        <div className="flex items-center gap-4">
            <div className="border border-1 text-blue-600 p-1">sign in</div>
            <div className="p-1 text-white bg-blue-600">Post a Jobs</div>
          </div>
      </div>
    </div>
  );
}
