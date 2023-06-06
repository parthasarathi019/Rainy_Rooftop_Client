//eslint-disable-next-line
import React, { useState } from 'react';
import { FaTrashAlt, FaRegEdit } from "react-icons/fa";
import useMenu from '../../../../Hooks/useMenu';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import Error_Item from '../../../local_img/Error_Item.png';
import Swal from 'sweetalert2';
const Manage_Item = () => {
    const [Menus, , refetch] = useMenu()
    const [axiosSecure] = useAxiosSecure()
    const [isScaled, setIsScaled] = useState(false);
    const [isScaled0, setIsScaled0] = useState(false);
    const handleClick = () => {
        setIsScaled(true);
        setTimeout(() => {
            setIsScaled(false);
        }, 300); // Change the duration as needed
    };
    const handleClick0 = () => {
        setIsScaled0(true);
        setTimeout(() => {
            setIsScaled0(false);
        }, 300); // Change the duration as needed
    };

    const handle_delete = (menu) => {
        console.log(menu._id);
        Swal.fire({
            title: `Are You Want To Delete Item, ${menu.name}`,
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                // fetch(`https://drone-bd-server.vercel.app/drones/${menu._id}`, { method: "DELETE" },

                // )
                //   .then(res => res.json())
                //   .then(delete_data => {
                //     // console.log(delete_data);
                //     if (delete_data.deletedCount > 0) {
                //       Swal.fire(
                //         'Deleted!',
                //         'Your drone data been deleted.',
                //         'success'
                //       )
                //     }
                //   })
                axiosSecure.delete(`/rooftop_menu/${menu._id}`)
                    .then(res => {
                        console.log('deleted', res.data);
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your drone data been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })

    }
    return (
        <div className='bg-slate-200  px-8'>
            <section className="text-center py-3 md:py-6">
                <p className="pb-2 text-[#D99904] italic text-[.7em] md:text-[1.06em]">---My Cart---</p>
                <hr className="w-[34.7%] md:w-[20%] mx-auto border-[1.3px] md:border-2 border-[#E8E8E8] " />
                <p className="text-[1em] md:text-[2em] py-[3px] md:py-[5px]">WANNA  ADD MORE?</p>
                <hr className="w-[34.7%] md:w-[20%] mx-auto border-[1.3px] md:border-2 border-[#E8E8E8] " />
            </section>
            <section className='bg-white h-screen'>
                <div className='py-7 px-8 flex'>
                    <p className='font-bold text-[1.7em] uppercase'>Total Items: <span>{Menus.length}</span></p>
                </div>

                <table className='w-full'>
                    <thead >
                        <tr>
                            <th className='text-white bg-[#D1A054] py-5 rounded-t-lg'><p>serial no.</p></th>
                            <th className='text-white bg-[#D1A054] py-5 '><p>ITEM IMAGE</p></th>
                            <th className='text-white bg-[#D1A054] py-5 '><p>ITEM NAME</p></th>
                            <th className='text-white bg-[#D1A054] py-5 '><p>PRICE</p></th>
                            <th className='text-white bg-[#D1A054] py-5 '><p>ACTION</p></th>
                            <th className='text-white bg-[#D1A054] py-5 rounded-t-lg'><p>ACTION</p></th>
                        </tr>
                    </thead>
                    <tbody className='py-2'>
                        {/* {
                            user_data.map((user, index) => <tr key={user._id} className='text-center'>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email ? user.email : <p className='text-red-600'>Error : Email not found!</p>}</td>
                                <td>{
                                    user.role === 'admin' ? 'Admin' : <p onClick={() => Make_Admin(user)}><p onClick={handleClick0} className={`${isScaled0 ? 'scale-105' : ''} duration-300 bg-[#D1A054] cursor-pointer py-3 w-[50px] mx-auto rounded-lg`}><button><img className='w-[15px]' src={user_icon} alt="" /></button></p></p>
                                }</td>
                                <td><p onClick={handleClick} className={`${isScaled ? 'scale-105' : ''} duration-300 bg-[#B91C1C] cursor-pointer py-3 w-[50px] mx-auto rounded-lg`}><button><FaTrashAlt className='text-white'></FaTrashAlt></button></p></td>
                            </tr>)
                        } */}
                        {
                            Menus.map((menu, index) => <tr key={menu._id}
                                className='text-center'>
                                <td>{index + 1}</td>
                                <td className='pl-7'>{menu.image ? <img className='w-[40px] h-[40px] ' src={menu.image} alt="" /> : <img className='w-[40px] h-[40px] ' src={Error_Item} alt="" />}</td>
                                <td>{menu.name}</td>
                                <td>﹩{menu.price}</td>
                                <td><p onClick={handleClick} className={`${isScaled ? 'scale-90' : ''} duration-300 bg-[#D1A054] cursor-pointer py-3 w-[50px] mx-auto rounded-lg`}><button><FaRegEdit className='text-white'></FaRegEdit></button></p></td>
                                <td onClick={() => { handle_delete(menu) }}><p onClick={handleClick0} className={`${isScaled0 ? 'scale-105' : ''} duration-300 bg-[#B91C1C] cursor-pointer py-3 w-[50px] mx-auto rounded-lg`}><button><FaTrashAlt className='text-white'></FaTrashAlt></button></p></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default Manage_Item;

