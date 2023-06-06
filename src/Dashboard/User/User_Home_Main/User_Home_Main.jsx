//eslint-disable-next-line
import React from 'react';
import { FaTrashAlt } from "react-icons/fa";
import { useState } from 'react';
import Swal from 'sweetalert2';
import useCart from '../../../../Hooks/useCart';
const User_Home_Main = () => {
    const [isScaled, setIsScaled] = useState(false);
    const handleClick = () => {
        setIsScaled(true);
        setTimeout(() => {
            setIsScaled(false);
        }, 300); // Change the duration as needed
    };
    const [uesrs_own_cart, refetch] = useCart()
    console.log(uesrs_own_cart);
    const total = uesrs_own_cart.reduce((sum, item) => item.price + sum, 0)

    const handle_delete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:11000/uesrs_own_cart/${_id}`, { method: "DELETE" },

                )
                    .then(res => res.json())
                    .then(delete_data => {
                        // console.log(delete_data);
                        if (delete_data.deletedCount > 0) {
                            refetch()
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
                <div className='py-7 px-8 flex justify-between items-center'>
                    <p className='font-bold text-[1.7em] uppercase'>Total orders: <span>{uesrs_own_cart.length}</span></p>
                    <p className='font-bold text-[1.7em] uppercase'>total price: $<span>{total}</span></p>
                    <p className='bg-[#D1A054] px-3 py-2 rounded-lg text-white' >PAY</p>
                </div>

                <div className='pt-4'>
                    <div className='flex mx-8 justify-around text-white bg-[#D1A054] py-5 rounded-t-lg'>
                        <p>ITEM quantity</p>
                        <p>ITEM IMAGE</p>
                        <p>ITEM NAME</p>
                        <p>PRICE</p>
                        <p>ACTION</p>
                    </div>
                    <div className='pt-4'>
                        {
                            uesrs_own_cart.map((cart, index) => <div key={cart._id} className='flex items-center justify-around mx-8 py-3 border-0 border-b-2 border-slate-300 mt-2'>
                                <p>{index + 1}</p>
                                <img className='w-40px h-[40px] ' src={cart.image} alt="" />
                                <div className='w-[170px] break-words'><p>{cart.name}</p></div>
                                <p>${cart.price}</p>
                                <p onClick={handleClick} className={`${isScaled ? 'scale-105' : ''} duration-300 bg-[#B91C1C] p-3 cursor-pointer rounded-lg`}><button onClick={() => { handle_delete(cart._id) }}><FaTrashAlt className='text-white'></FaTrashAlt></button></p>
                            </div>)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default User_Home_Main;
