import React from 'react'

export default function Navbar() {
  return (
    <div >
        <div className='justify-around flex'>
            <div className='flex gap-3'>
                <div>Home</div>
                <div>Find Job</div>
                <div>Employers</div>
                <div>Candidates</div>
                <div>Pricing Plans</div>
                <div>Customer Supports Plans</div>
            </div>
            <div className='flex gap-3'>
<div>+1-202-555-0178</div>
<div>
English
</div>
            </div>

        </div>
        <div className='flex gap-5'>
<div>MyJob</div>
<div>India</div>
<div><input className='w-72 border-1 outline-none' type="text" placeholder='Job tittle, keyword, company' name="" id="" /></div>
        </div>
    </div>
  )
}
