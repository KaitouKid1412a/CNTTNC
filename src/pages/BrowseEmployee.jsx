import React from 'react'
import { BiArrowFromRight, BiCategory, BiDownArrow, BiLocationPlus, BiSearch, BiSelection, BiUpArrow } from 'react-icons/bi'
import { BsArrowLeft, BsArrowRight, BsFillTelephoneFill } from 'react-icons/bs'

export default function BrowseEmployee() {
  return (
    <div className="canchinh bg-[#F1F2F4] py-5">
      <div className="w-1320 mx-auto">
        <div className="flex justify-between py-12 items-center">
          <div className='text-lg font-semibold '>Find Employers</div>
          <div className='flex gap-5'>
            <span className='text-[#767F8C]'>Home/ <span className='text-[#18191C]'>Find Employers</span></span>
          </div>
        </div>
        <div className="flex p-2 gap-4 justify-between bg-white">
          <div className="flex gap-4 items-center">
            <BiSearch />
            <input className='py-4 px-2 w-[512px]' type="text" placeholder='Job tittle, Keyword...' />
          </div>
          <div className="flex gap-4 items-center">
            <BiLocationPlus />
            <input type="text" className='py-4 px-2 w-[321px]' placeholder='Location' />
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-3 items-center">
              <BiLocationPlus />
              <input type="text" className='py-4 px-2 w-[321px]' placeholder='Select Category' />
            </div>
            <BiSelection />
            <div className="bg-[#0A65CC] py-4 px-2 w-max text-white">
              Find Job
            </div>
          </div>


        </div>

      </div>
      <div className="bg-white">
        <div className="w-1320 mx-auto">
          <div className="flex justify-between items-center  py-4 bg-white my-4 px-2">
            <div className="bg-[#0A65CC] text-[#FFFFFF] flex gap-3 items-center px-4 py-2"><BsFillTelephoneFill /> Filter</div>

            <div className="flex gap-4 items-center" >

              <select name="" id="" className='flex justify-between  w-[180px]  py-3' style={{ border: "1px solid #E4E5E8" }}>
                <option value="">Latest</option>

              </select>

              <div className="flex w-[180px]">
                <select name="" id="" className='flex justify-between  w-[180px]   py-3' style={{ border: "1px solid #E4E5E8" }} >
                  <option value="">12 per page</option>

                </select>
              </div>

              <div className="flex gap-3 text-[#191F33] border-[1px solid #E4E5E8] ">
                <BiCategory />
                <BiCategory />
              </div>
            </div>
          </div>

          <div className="flex justify-between ">
            <div style={{ border: " 1px solid #EDEFF5" }} className="w-[420px] py-4 px-4 justify-between h-[420px]">
              <div className="flex justify-between ">
                <span>Location Radius: <span className='text-[#0066FF]'>32 miles</span></span>
                <BiDownArrow />
              </div>
              <div className="py-2">
                <div className="flex items-center justify-between">
                  <h5>Organization Type</h5>  <BiUpArrow />
                </div>
                <label className='flex gap-5 items-center my-3'>
                  <input
                    type="radio"
                    value="option1"
                  />
                  Option 1
                </label>
                <label className='flex gap-5 items-center my-3'>
                  <input
                    type="radio"
                    value="option1"
                  />
                  Option 1
                </label>
                <label className='flex gap-5 items-center my-3'>
                  <input
                    type="radio"
                    value="option1"
                  />
                  Option 1
                </label>
                <label className='flex gap-5 items-center my-3'>
                  <input
                    type="radio"
                    value="option1"
                  />
                  Option 1
                </label>
                <label className='flex gap-5 items-center my-3'>
                  <input
                    type="radio"
                    value="option1"
                  />
                  Option 1
                </label>
              </div>
            </div>
            <div className="box-boro">
              <div style={{ border: "1px solid #EDEFF5" }} className="py-2 px-3  flex justify-between w-[872px] my-3">
                <div className="flex gap-3 items-center">
                  <BiCategory />
                  <div className="mota">
                    <div className="text-lg">
                      Dribbble
                    </div>
                    <p><span>United States</span> <span>3 - open Job</span></p>
                  </div>
                </div>

                <div className="py-2 px-5 bg-[#E7F0FA] text-[#0A65CC] w-[193px] flex items-center  gap-5 my-3">
                  <span>Open Position </span> <BiArrowFromRight />
                </div>
              </div>

              <div style={{ border: "1px solid #EDEFF5" }} className="py-2 px-3  flex justify-between w-[872px] my-3">
                <div className="flex gap-3 items-center">
                  <BiCategory />
                  <div className="mota">
                    <div className="text-lg">
                      Dribbble
                    </div>
                    <p><span>United States</span> <span>3 - open Job</span></p>
                  </div>
                </div>

                <div className="py-2 px-5 bg-[#E7F0FA] text-[#0A65CC] w-[193px] flex items-center  gap-5 my-3">
                  <span>Open Position </span> <BiArrowFromRight />
                </div>
              </div>
              <div style={{ border: "1px solid #EDEFF5" }} className="py-2 px-3  flex justify-between w-[872px] my-3">
                <div className="flex gap-3 items-center">
                  <BiCategory />
                  <div className="mota">
                    <div className="text-lg">
                      Dribbble
                    </div>
                    <p><span>United States</span> <span>3 - open Job</span></p>
                  </div>
                </div>

                <div className="py-2 px-5 bg-[#E7F0FA] text-[#0A65CC] w-[193px] flex items-center  gap-5 my-3">
                  <span>Open Position </span> <BiArrowFromRight />
                </div>
              </div>
              <div style={{ border: "1px solid #EDEFF5" }} className="py-2 px-3  flex justify-between w-[872px] my-3">
                <div className="flex gap-3 items-center">
                  <BiCategory />
                  <div className="mota">
                    <div className="text-lg">
                      Dribbble
                    </div>
                    <p><span>United States</span> <span>3 - open Job</span></p>
                  </div>
                </div>

                <div className="py-2 px-5 bg-[#E7F0FA] text-[#0A65CC] w-[193px] flex items-center  gap-5 my-3">
                  <span>Open Position </span> <BiArrowFromRight />
                </div>
              </div>
              <div style={{ border: "1px solid #EDEFF5" }} className="py-2 px-3  flex justify-between w-[872px] my-3">
                <div className="flex gap-3 items-center">
                  <BiCategory />
                  <div className="mota">
                    <div className="text-lg">
                      Dribbble
                    </div>
                    <p><span>United States</span> <span>3 - open Job</span></p>
                  </div>
                </div>

                <div className="py-2 px-5 bg-[#E7F0FA] text-[#0A65CC] w-[193px] flex items-center  gap-5 my-3">
                  <span>Open Position </span> <BiArrowFromRight />
                </div>
              </div>
              <div style={{ border: "1px solid #EDEFF5" }} className="py-2 px-3  flex justify-between w-[872px] my-3">
                <div className="flex gap-3 items-center">
                  <BiCategory />
                  <div className="mota">
                    <div className="text-lg">
                      Dribbble
                    </div>
                    <p><span>United States</span> <span>3 - open Job</span></p>
                  </div>
                </div>

                <div className="py-2 px-5 bg-[#E7F0FA] text-[#0A65CC] w-[193px] flex items-center  gap-5 my-3">
                  <span>Open Position </span> <BiArrowFromRight />
                </div>
              </div>
              <div style={{ border: "1px solid #EDEFF5" }} className="py-2 px-3  flex justify-between w-[872px] my-3">
                <div className="flex gap-3 items-center">
                  <BiCategory />
                  <div className="mota">
                    <div className="text-lg">
                      Dribbble
                    </div>
                    <p><span>United States</span> <span>3 - open Job</span></p>
                  </div>
                </div>

                <div className="py-2 px-5 bg-[#E7F0FA] text-[#0A65CC] w-[193px] flex items-center  gap-5 my-3">
                  <span>Open Position </span> <BiArrowFromRight />
                </div>
              </div>
              <div style={{ border: "1px solid #EDEFF5" }} className="py-2 px-3  flex justify-between w-[872px] my-3">
                <div className="flex gap-3 items-center">
                  <BiCategory />
                  <div className="mota">
                    <div className="text-lg">
                      Dribbble
                    </div>
                    <p><span>United States</span> <span>3 - open Job</span></p>
                  </div>
                </div>

                <div className="py-2 px-5 bg-[#E7F0FA] text-[#0A65CC] w-[193px] flex items-center  gap-5 my-3">
                  <span>Open Position </span> <BiArrowFromRight />
                </div>
              </div>
              <div style={{ border: "1px solid #EDEFF5" }} className="py-2 px-3  flex justify-between w-[872px] my-3">
                <div className="flex gap-3 items-center">
                  <BiCategory />
                  <div className="mota">
                    <div className="text-lg">
                      Dribbble
                    </div>
                    <p><span>United States</span> <span>3 - open Job</span></p>
                  </div>
                </div>

                <div className="py-2 px-5 bg-[#E7F0FA] text-[#0A65CC] w-[193px] flex items-center  gap-5 my-3">
                  <span>Open Position </span> <BiArrowFromRight />
                </div>
              </div>
              <div style={{ border: "1px solid #EDEFF5" }} className="py-2 px-3  flex justify-between w-[872px] my-3">
                <div className="flex gap-3 items-center">
                  <BiCategory />
                  <div className="mota">
                    <div className="text-lg">
                      Dribbble
                    </div>
                    <p><span>United States</span> <span>3 - open Job</span></p>
                  </div>
                </div>

                <div className="py-2 px-5 bg-[#E7F0FA] text-[#0A65CC] w-[193px] flex items-center  gap-5 my-3">
                  <span>Open Position </span> <BiArrowFromRight />
                </div>
              </div>
              <div style={{ border: "1px solid #EDEFF5" }} className="py-2 px-3  flex justify-between w-[872px] my-3">
                <div className="flex gap-3 items-center">
                  <BiCategory />
                  <div className="mota">
                    <div className="text-lg">
                      Dribbble
                    </div>
                    <p><span>United States</span> <span>3 - open Job</span></p>
                  </div>
                </div>

                <div className="py-2 px-5 bg-[#E7F0FA] text-[#0A65CC] w-[193px] flex items-center  gap-5 my-3">
                  <span>Open Position </span> <BiArrowFromRight />
                </div>
              </div>
              <div style={{ border: "1px solid #EDEFF5" }} className="py-2 px-3  flex justify-between w-[872px] my-3">
                <div className="flex gap-3 items-center">
                  <BiCategory />
                  <div className="mota">
                    <div className="text-lg">
                      Dribbble
                    </div>
                    <p><span>United States</span> <span>3 - open Job</span></p>
                  </div>
                </div>

                <div className="py-2 px-5 bg-[#E7F0FA] text-[#0A65CC] w-[193px] flex items-center  gap-5 my-3">
                  <span>Open Position </span> <BiArrowFromRight />
                </div>
              </div>


            </div>

          </div>
          <div className='flex gap-3 items-center justify-center'>
            <BsArrowLeft />
            <div className="flex">
              <div className="w-8 h-8 text-center rounded-full  bg-[#0A65CC] text-white">
                01
              </div>
              <div className="w-8 h-8 text-center rounded-full  bg-[#0A65CC] text-white">
                01
              </div>
              <div className="w-8 h-8 text-center rounded-full  bg-[#0A65CC] text-white">
                01
              </div>
              <div className="w-8 h-8 text-center rounded-full  bg-[#0A65CC] text-white">
                01
              </div>
              <div className="w-8 h-8 text-center rounded-full  bg-[#0A65CC] text-white">
                01
              </div>

            </div>
            <BsArrowRight />
          </div>
        </div>

      </div>
    </div>
  )
}
