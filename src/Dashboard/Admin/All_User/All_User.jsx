//eslint-disable-next-line
import React from 'react';
// import useCart from '../../../Hooks/useCart';
import { FaTrashAlt } from "react-icons/fa";
import { useState } from 'react';
import user_icon from '../../../local_img/users.png';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
// import Swal from 'sweetalert2';
const All_User = () => {
    const [axiosSecure] = useAxiosSecure();
    const [isScaled0, setIsScaled0] = useState(false);
    const [isScaled, setIsScaled] = useState(false);
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

    const { data: user_data = [], refetch } = useQuery(['user_data'], async () => {
        const res = await axiosSecure.get('/user_data')
        return res.data;
    })

    const Make_Admin = (user) => {
        fetch(`http://localhost:11000/user_data/admin/${user._id}` , {
          method: "PATCH",
        //   headers: {
        //     'content-type': 'application/json'
        //   },
        //   body: JSON.stringify({status: 'confirm'}) 
        })
        .then(res => res.json())
        .then(data => {
          if (data.modifiedCount > 0) {
            //update state
            refetch()
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${user.name} is an admin now`,
                showConfirmButton: false,
                timer: 1000
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
                    <p className='font-bold text-[1.7em] uppercase'>Total Users: <span>{user_data.length}</span></p>
                </div>

                <table className='w-full'>
                    <thead >
                        <tr>
                            <th className='text-white bg-[#D1A054] py-5 rounded-t-lg'><p>serial no.</p></th>
                            <th className='text-white bg-[#D1A054] py-5 '><p>NAME</p></th>
                            <th className='text-white bg-[#D1A054] py-5 '><p>EMAIL</p></th>
                            <th className='text-white bg-[#D1A054] py-5 '><p>ROLE</p></th>
                            <th className='text-white bg-[#D1A054] py-5 rounded-t-lg'><p>ACTION</p></th>
                        </tr>
                    </thead>
                    <tbody className='py-2'>
                        {
                            user_data.map((user, index) => <tr key={user._id} className='text-center'>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email ? user.email : <p className='text-red-600'>Error : Email not found!</p>}</td>
                                <td>{
                                    user.role === 'admin' ? 'Admin' : <p onClick={() => Make_Admin(user)}><p onClick={handleClick0} className={`${isScaled0 ? 'scale-105' : ''} duration-300 bg-[#D1A054] cursor-pointer py-3 w-[50px] mx-auto rounded-lg`}><button><img className='w-[15px]' src={user_icon} alt="" /></button></p></p>
                                }</td>
                                <td><p onClick={handleClick} className={`${isScaled ? 'scale-105' : ''} duration-300 bg-[#B91C1C] cursor-pointer py-3 w-[50px] mx-auto rounded-lg`}><button><FaTrashAlt className='text-white'></FaTrashAlt></button></p></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default All_User;
