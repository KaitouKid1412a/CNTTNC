import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Fotter from '../components/Fotter/Fotter'

export default function Layout({ children }) {

    return (
        <div className=''>
            <Navbar />
            {children}
           <Fotter />
        </div>
    )
}
