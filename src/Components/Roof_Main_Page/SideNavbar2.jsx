// import React from 'react';
import { useState } from 'react';
//eslint-disable-next-line
import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import home from '../../local_img/Admin_Dashboard_Icon/home.png';
import cutlery from '../../local_img/Admin_Dashboard_Icon/cutlery.png';
import list from '../../local_img/Admin_Dashboard_Icon/list.png';
import book from '../../local_img/Admin_Dashboard_Icon/book.png';
import customer from '../../local_img/Admin_Dashboard_Icon/customer.png';
import menu from '../../local_img/Admin_Dashboard_Icon/menu.png';
import bag from '../../local_img/Admin_Dashboard_Icon/bag.png';
import email from '../../local_img/Admin_Dashboard_Icon/email.png';

const SideNavbar2 = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav>

            <nav
                //eslint-disable-next-line
                x-data="{ isOpen: false }"
                className="text-black w-[24%] md:bg-[#D1A054] top-0 "
            >
                <div className="container  mx-auto">
                    <div className="flex flex-col  justify-center">
                        <div className="flex flex-col-reverse">

                            <div className='text-white hidden'>
                                {/* <img className="md:w-[6.6875em] w-[3.9375em] "src={logo} alt=""/> */}
                                <p className='text-[1.2em] font-bold'>𝐓𝐇𝐄 𝐑𝐀𝐈𝐍𝐘 𝐑𝐎𝐎𝐅𝐓𝐎𝐏</p>
                                <p className='text-[.8em] italic'>𝑅𝐸𝑆𝑇𝐴𝑈𝑅𝐴𝑁𝑇</p>
                            </div>

                            <div className="flex lg:hidden">
                                <button
                                    onClick={() => {
                                        //eslint-disable-next-line
                                        setOpen(!open);
                                    }}
                                    type="button"
                                    className={`text-gray-500  hover:text-gray-600  focus:outline-none focus:text-gray-600 `}
                                    aria-label="toggle menu"
                                >
                                    <Bars3Icon className="h-6 text-gray-500" />
                                </button>
                            </div>
                        </div>

                        <div className={`${open ? "translate-x-0 opacity-100 " : "opacity-0 -translate-x-full"} absolute inset-x-0 z-20 w-full px-6 py-2 bg-[#D1A054] transition-all duration-500 ease-in-out md:bg-transparent top-[24px]  md:mt-0 md:p-0 md:top-0 md:relative md:w-auto md:opacity-100 md:translate-x-0`}>
                            <div className='pl-10 py-7 h-screen'>
                            <div className='pb-11'>
                                <p className='text-[1.7em] font-bold'>𝐓𝐇𝐄 𝐑𝐀𝐈𝐍𝐘 𝐑𝐎𝐎𝐅𝐓𝐎𝐏</p>
                                <p className='text-[1.2em] italic'><span className='pr-[15px]' >𝑅</span><span className='pr-[15px]' >𝐸</span><span className='pr-[15px]' >𝑆</span><span className='pr-[15px]' >𝑇</span><span className='pr-[15px]' >𝐴</span><span className='pr-[15px]' >𝑈</span><span className='pr-[15px]' >𝑅</span><span className='pr-[15px]' >𝐴</span><span className='pr-[15px]' >𝑁</span><span className='pr-[15px]' >𝑇</span></p>
                            </div>
                            <div>
                                <div className='flex font-bold gap-x-2 items-center'><img className='w-[15.9px]' src={home} alt="home" /><p>ADMIN HOME</p></div>
                                <div className='flex font-bold pt-7 gap-x-2 items-center'><img className='w-[15.9px]' src={cutlery} alt="home" /><p>ADD ITEMS</p></div>
                                <div className='flex font-bold pt-7 gap-x-2 items-center'><img className='w-[15.9px]' src={list} alt="home" /><p>MANAGE ITEMS</p></div>
                                <div className='flex font-bold pt-7 gap-x-2 items-center'><img className='w-[15.9px]' src={book} alt="home" /><p>MANAGE BOOKINGS</p></div>
                                <div className='flex font-bold pt-7 pb-9 gap-x-2 items-center'><img className='w-[15.9px]' src={customer} alt="home" /><p>ALL USERS</p></div>
                                <hr className='w-[81%] border' />
                                <div className='flex font-bold pt-9 gap-x-2 items-center'><img className='w-[15.9px]' src={menu} alt="home" /><p>HOME</p></div>
                                <div className='flex font-bold pt-7 gap-x-2 items-center'><img className='w-[15.9px]' src={home} alt="home" /><p>MENU</p></div>
                                <div className='flex font-bold pt-7 gap-x-2 items-center'><img className='w-[15.9px]' src={bag} alt="home" /><p>SHOP</p></div>
                                <div className='flex font-bold pt-7 gap-x-2 items-center'><img className='w-[15.9px]' src={email} alt="home" /><p>CONTACT</p></div>
                            </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </nav>


        </nav>
    );
};

export default SideNavbar2;