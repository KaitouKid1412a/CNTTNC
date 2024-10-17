import React, { useState } from 'react'
import FindEmpoyee from '../components/FindEmpoyee'
import { BsArrowUp } from 'react-icons/bs'
import { BiLocationPlus } from 'react-icons/bi'
import BoxCandidate from '../components/BoxCandidate'
import Modal from '../components/Modal'

export default function BrowseCandidate() {
    const [show,setShow] =useState (false)
    const handleBoxClick = () => {
        setShow(true);
    };
    return (
        <div className="relative">

            <FindEmpoyee />
            <div className="px-[300px] flex gap-5 justify-between">
                <div className="left  px-5 ">
                    <div className="py-3 px-5  border-blur">
                        <div className="flex items-center justify-between">
                            Location Radius:
                            32 miles
                            <BsArrowUp />
                        </div>
                    </div>
                    <div className="py-3 px-5  border-blur">
                        <div className="flex items-center justify-between w-[360px]">
                            Candidate Level:
                            <BsArrowUp />
                        </div>
                        <div className=''>
                            <input className='my-3' type="radio" value={"Entry Level"} /> Entry Level  <br />
                            <input className='my-3' type="radio" value={"Entry Level"} /> Entry Level  <br />
                            <input className='my-3' type="radio" value={"Entry Level"} /> Entry Level  <br />
                        </div>

                    </div>
                    <div className="py-3 px-5  border-blur">
                        <div className="flex items-center justify-between w-[360px]">
                            Candidate Level:
                            <BsArrowUp />
                        </div>
                        <div className=''>
                            <input className='my-3' type="radio" value={"Entry Level"} /> Entry Level  <br />
                            <input className='my-3' type="radio" value={"Entry Level"} /> Entry Level  <br />
                            <input className='my-3' type="radio" value={"Entry Level"} /> Entry Level  <br />
                        </div>

                    </div>
                    <div className="py-3 px-5  border-blur">
                        <div className="flex items-center justify-between w-[360px]">
                            Candidate Level:
                            <BsArrowUp />
                        </div>
                        <div className=''>
                            <input className='my-3' type="radio" value={"Entry Level"} /> Entry Level  <br />
                            <input className='my-3' type="radio" value={"Entry Level"} /> Entry Level  <br />
                            <input className='my-3' type="radio" value={"Entry Level"} /> Entry Level  <br />
                        </div>

                    </div>
                    <div className="py-3 px-5  border-blur">
                        <div className="flex items-center justify-between w-[360px]">
                            Candidate Level:
                            <BsArrowUp />
                        </div>
                        <div className=''>
                            <input className='my-3' type="radio" value={"Entry Level"} /> Entry Level  <br />
                            <input className='my-3' type="radio" value={"Entry Level"} /> Entry Level  <br />
                            <input className='my-3' type="radio" value={"Entry Level"} /> Entry Level  <br />
                        </div>

                    </div>

                </div>
                <div className="w-[872px] ">
                <BoxCandidate onClick={handleBoxClick} />
                <BoxCandidate onClick={handleBoxClick} />
                <BoxCandidate onClick={handleBoxClick} />
                <BoxCandidate onClick={handleBoxClick} />
                <BoxCandidate onClick={handleBoxClick} />

            
                </div>
            </div>
            {show && <Modal onClose={() => setShow(false)} />}
                        </div>
    )
}
