import React from 'react'
import Brecum from '../components/Brecum/Brecum'
import { BsArrowRight } from 'react-icons/bs'
import { BiCalendar, BiLocationPlus } from 'react-icons/bi'

export default function SingleEmployers() {
    return (
        <div className='mb-32'>
            <Brecum />
            <div className='px-[300px] '>
                <div className="relative">
                    <img className='w-[1520px] h-[312px] object-cover' src="https://s3-alpha-sig.figma.com/img/eae3/13a4/8883a46e7a2a60ee806e73a8052191be?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FcOeUggRG-V-Lbar9RLa9Losc9uBhZ0S8gVVFHJ3saLLI5ST2F6YH6SZSEyYU3VlXhOusOcnGO5QGK1LzyYb8JOkhH6Djy0Qaa2VS3FFJr7h7bG2ihASQiOKBwb8I5ZHNoeYLmWF3uqwN2Nrt6xJuF1~bDtkK~AiNCOXBjuBpBzBTV~k9n5TOGNp7cwZ~iNmDoWKevLA~VfDwWh2g9mQCO3ryKWTriIhkYMFxWDBwijg6h60U7nvEgDX6NFSxClvvdBdKyD2IZvH9NRD5XkzN60mCL-Z4kftEMj4Uz1eRHl-nutrWXtxRpazU~qslPfyk-SWxFoGiKFXB7fy8Sn3OQ__" alt="" />

                    <div className="py-2 px-2 flex justify-between w-[1000px] bottom-1 right-2  absolute  bg-white  items-center left-[10rem] bottom-[-30px]">
                        <div className="flex gap-3 items-center">
                            <img className='w-20 object-cover' src="https://s3-alpha-sig.figma.com/img/eae3/13a4/8883a46e7a2a60ee806e73a8052191be?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FcOeUggRG-V-Lbar9RLa9Losc9uBhZ0S8gVVFHJ3saLLI5ST2F6YH6SZSEyYU3VlXhOusOcnGO5QGK1LzyYb8JOkhH6Djy0Qaa2VS3FFJr7h7bG2ihASQiOKBwb8I5ZHNoeYLmWF3uqwN2Nrt6xJuF1~bDtkK~AiNCOXBjuBpBzBTV~k9n5TOGNp7cwZ~iNmDoWKevLA~VfDwWh2g9mQCO3ryKWTriIhkYMFxWDBwijg6h60U7nvEgDX6NFSxClvvdBdKyD2IZvH9NRD5XkzN60mCL-Z4kftEMj4Uz1eRHl-nutrWXtxRpazU~qslPfyk-SWxFoGiKFXB7fy8Sn3OQ__" alt="" />
                            <div >
                                <p>Twitter</p>
                                <p>Information Technology (IT)</p>
                            </div>
                        </div>
                        <div className="flex gap-3 items-center bg-[#0A65CC] py-4 px-2 text-white">View Open Position <BsArrowRight /></div>
                    </div>
                </div>

                <div className="flex justify-between gap-4 my-12">
                    <div className=' w-[724px]'>
                        <p className='font-bold  my-2'>Description</p>
                        <p className=''>Fusce et erat at nibh maximus fermentum. Mauris ac justo nibh. Praesent nec lorem lorem. Donec ullamcorper lacus mollis tortor pretium malesuada. In quis porta nisi, quis fringilla orci. Donec porttitor, odio a efficitur blandit, orci nisl porta elit, eget vulputate quam nibh ut tellus. Sed ut posuere risus, vitae commodo velit. Nullam in lorem dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla tincidunt ac quam quis vehicula. Quisque sagittis ullamcorper magna. Vivamus elementum eu leo et gravida. Sed dignissim placerat diam, ac laoreet eros rutrum sit amet. Donec imperdiet in leo et imperdiet. In hac habitasse platea dictumst. Sed quis nisl molestie diam ullamcorper condimentum. Sed aliquet, arcu eget pretium bibendum, odio enim rutrum arcu, quis suscipit mauris turpis in neque. Vestibulum id vestibulum odio. Sed dolor felis, iaculis eget turpis eu, lobortis imperdiet massa.</p>
                        <div className='my-2'>
                            <p className='font-bold my-2'>Company Benefits</p>
                            <p>Donec dignissim nunc eu tellus malesuada fermentum. Sed blandit in magna at accumsan. Etiam imperdiet massa aliquam, consectetur leo in, auctor neque.</p>
                            <ul className='my-2'>
                                <li>In hac habitasse platea dictumst.</li>
                                <li>In hac habitasse platea dictumst.</li>
                                <li>In hac habitasse platea dictumst.</li>
                                <li>In hac habitasse platea dictumst.</li>
                            </ul>
                        </div>
                        <div>
                            <p className='font-black font-bold'>Company Vision</p>
                            <p>Praesent ultrices mauris at nisi euismod, ut venenatis augue blandit. Etiam massa risus, accumsan nec tempus nec, venenatis in nisl. Maecenas nulla ex, blandit in magna id, pellentesque facilisis sapien. In feugiat auctor mi, eget commodo lectus convallis ac. </p>

                        </div>
                    </div>


                    <div>
                        <div className='box-sighle'>
                            <div className='flex gap-5 my-3'>
                                <div className='w-[227px]'><BiCalendar /> <p>Founded in:</p><p>14 June, 2021</p></div>
                                <div className='w-[227px]'><BiCalendar /> <p>Founded in:</p><p>14 June, 2021</p></div>
                            </div>
                            <div className='flex gap-5 my-3'>
                                <div className='w-[227px]'><BiCalendar /> <p>Founded in:</p><p>14 June, 2021</p></div>
                                <div className='w-[227px]'><BiCalendar /> <p>Founded in:</p><p>14 June, 2021</p></div>
                            </div>
                        </div>
                        <div className='box-sighle my-5'>
                            <div className='flex gap-5 my-3'>
                                <div className='w-[227px]'><BiCalendar /> <p>Founded in:</p><p>14 June, 2021</p></div>
                                <div className='w-[227px]'><BiCalendar /> <p>Founded in:</p><p>14 June, 2021</p></div>
                            </div>
                            <div className='flex gap-5 my-3'>
                                <div className='w-[227px]'><BiCalendar /> <p>Founded in:</p><p>14 June, 2021</p></div>
                                <div className='w-[227px]'><BiCalendar /> <p>Founded in:</p><p>14 June, 2021</p></div>
                            </div>
                        </div>
                        <div className='box-sighle my-5'>
                            <div className='flex gap-5 my-3'>
                                <div className='w-[227px]'><BiCalendar /> <p>Founded in:</p><p>14 June, 2021</p></div>
                                <div className='w-[227px]'><BiCalendar /> <p>Founded in:</p><p>14 June, 2021</p></div>
                            </div>
                            <div className='flex gap-5 my-3'>
                                <div className='w-[227px]'><BiCalendar /> <p>Founded in:</p><p>14 June, 2021</p></div>
                                <div className='w-[227px]'><BiCalendar /> <p>Founded in:</p><p>14 June, 2021</p></div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='font-bold text-3xl my-5 '>Open Position (05)</div>
                <div className="flex gap-5 items-centen flex-wrap  ">
                    <div className="border-blur px-4 py-2 w-[400px]">
                        <div className="flex gap-4 items-center">
                            <div><img className='w-24 object-contain' src="https://images2.thanhnien.vn/528068263637045248/2023/4/23/edit-truc-anh-16822518118551137084698.png" alt="" /></div>
                            <div>
                                <div className="flex gap-3 items-center">
                                    <span className='font-bold'>Freepik</span>
                                    <span className='text-[#FF4F4F]'>Featured</span>
                                </div>
                                <BiLocationPlus /> <span>China</span>
                            </div>
                        </div>

                        <div>
                            <div className="my-3">Visual Designer</div>
                            <div className='flex items-center gap-4'><span>Full Time</span> <div className="dot"></div> <span>$10K-$15K</span></div>
                        </div>
                    </div>
                    <div className="border-blur px-4 py-2 w-[400px]">
                        <div className="flex gap-4 items-center">
                            <div><img className='w-24 object-contain' src="https://images2.thanhnien.vn/528068263637045248/2023/4/23/edit-truc-anh-16822518118551137084698.png" alt="" /></div>
                            <div>
                                <div className="flex gap-3 items-center">
                                    <span className='font-bold'>Freepik</span>
                                    <span className='text-[#FF4F4F]'>Featured</span>
                                </div>
                                <BiLocationPlus /> <span>China</span>
                            </div>
                        </div>

                        <div>
                            <div className="my-3">Visual Designer</div>
                            <div className='flex items-center gap-4'><span>Full Time</span> <div className="dot"></div> <span>$10K-$15K</span></div>
                        </div>
                    </div>
                    <div className="border-blur px-4 py-2 w-[400px]">
                        <div className="flex gap-4 items-center">
                            <div><img className='w-24 object-contain' src="https://images2.thanhnien.vn/528068263637045248/2023/4/23/edit-truc-anh-16822518118551137084698.png" alt="" /></div>
                            <div>
                                <div className="flex gap-3 items-center">
                                    <span className='font-bold'>Freepik</span>
                                    <span className='text-[#FF4F4F]'>Featured</span>
                                </div>
                                <BiLocationPlus /> <span>China</span>
                            </div>
                        </div>

                        <div>
                            <div className="my-3">Visual Designer</div>
                            <div className='flex items-center gap-4'><span>Full Time</span> <div className="dot"></div> <span>$10K-$15K</span></div>
                        </div>
                    </div>
                    <div className="border-blur px-4 py-2 w-[400px]">
                        <div className="flex gap-4 items-center">
                            <div><img className='w-24 object-contain' src="https://images2.thanhnien.vn/528068263637045248/2023/4/23/edit-truc-anh-16822518118551137084698.png" alt="" /></div>
                            <div>
                                <div className="flex gap-3 items-center">
                                    <span className='font-bold'>Freepik</span>
                                    <span className='text-[#FF4F4F]'>Featured</span>
                                </div>
                                <BiLocationPlus /> <span>China</span>
                            </div>
                        </div>

                        <div>
                            <div className="my-3">Visual Designer</div>
                            <div className='flex items-center gap-4'><span>Full Time</span> <div className="dot"></div> <span>$10K-$15K</span></div>
                        </div>
                    </div>
                    <div className="border-blur px-4 py-2 w-[400px]">
                        <div className="flex gap-4 items-center">
                            <div><img className='w-24 object-contain' src="https://images2.thanhnien.vn/528068263637045248/2023/4/23/edit-truc-anh-16822518118551137084698.png" alt="" /></div>
                            <div>
                                <div className="flex gap-3 items-center">
                                    <span className='font-bold'>Freepik</span>
                                    <span className='text-[#FF4F4F]'>Featured</span>
                                </div>
                                <BiLocationPlus /> <span>China</span>
                            </div>
                        </div>

                        <div>
                            <div className="my-3">Visual Designer</div>
                            <div className='flex items-center gap-4'><span>Full Time</span> <div className="dot"></div> <span>$10K-$15K</span></div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
