import React from 'react'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa'

const Account=()=>{
    return(
        <>
        <div className='flex items-center space-x-6 text-[#17183B]'>
            <FaInstagram />
            <FaFacebook />
            <FaTwitter />
            <FaPinterest />
        </div>
        </>
    )
}
export default Account