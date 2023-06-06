//eslint-disable-next-line
import React from 'react';
import { FaFacebookF , FaTwitter , FaInstagram } from "react-icons/fa";
const Footer = () => {
    return (
        <footer>
            <div className='flex text-white md:h-[25em] flex-col md:flex-row'>
                <section className='bg-[#1f2937] md:w-[50%] py-[10px] md:py-0 flex md:pt-[130px]  pl-5 md:pl-0 md:justify-end md:pr-[5em]'>
                   <div>
                    <p className='md:text-[2em] text-[1.4em] font-[500] pb-3'>CONTACT US</p>
                    <p className='text-[0.96em] md:text-[1.25em] font-[500]'>123 ABS Street, Uni 21, Bangladesh</p>
                    <p className='text-[0.96em] md:text-[1.25em] font-[500]'>+88 123456789</p>
                    <p className='text-[0.96em] md:text-[1.25em] font-[500]'>Mon - Fri: 08:00 - 22:00</p>
                    <p className='text-[0.96em] md:text-[1.25em] font-[500]'>Sat - Sun: 10:00 - 23:00</p>
                   </div>
                </section>
                <section className='bg-[#111827] md:w-[50%]  py-[10px] md:py-0 mt-[.5px] md:mt-0 md:pt-[130px] pl-5 md:pl-[5em] '>
                   <div>
                   <p className='md:text-[2em] text-[1.4em] font-[500] pb-3'>Follow US</p>
                    <p className='text-[0.96em] md:text-[1.25em] font-[500]'>Join us on social media</p>
                    <div className='flex gap-x-4'>
                        <FaFacebookF size={23}></FaFacebookF>
                        <FaTwitter size={23}></FaTwitter>
                        <FaInstagram size={23}></FaInstagram>
                    </div>
                   </div>
                </section>
            </div>
            <div className='bg-[#151515] flex justify-center items-center h-[4.375em] md:text-[1.25em] text-[.81em] font-[500] text-white'>Copyright © The•rainy•rooftop. All rights reserved.</div>
        </footer>
    );
};

export default Footer;