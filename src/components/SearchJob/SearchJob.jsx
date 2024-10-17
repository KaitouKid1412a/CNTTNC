import React from 'react'
import { BiBell, BiSearch } from 'react-icons/bi'
import { BsBag } from 'react-icons/bs'
import { RxAvatar } from 'react-icons/rx'

export default function SearchJob() {
    return (
        <div className="canchinh">
            <div className="w-1320 mx-auto p-5 ">
                <div className="flex wrappper justify-between items-center">
                    <div className="btn-logo flex gap-2 items-center">

                        <BsBag /> <span>MY Job</span>
                        <div className="btn-drop flex items-center gap-3">
                        <BsBag /> <select name="" id="">
                            <option value="">India</option>
                        </select>
                        <div className="ip-search flex gap-2 items-center w-668">
                            <BiSearch />
                            <input className='p-4 outline-none border border-1 ' type="text" placeholder='Job tittle, keyword, company' />

                        </div>

                    </div>
                    </div>
              
                    <div className="flex gap-4 items-center">
                        <BiBell />
                        <RxAvatar />
                    </div>
                </div>

            </div>
        </div>
    )
}
