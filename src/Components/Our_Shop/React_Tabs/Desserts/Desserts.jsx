//eslint-disable-next-line
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../../Providers/AuthProviders';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../../../../Hooks/useCart';
import Error_Item from '../../../../local_img/Error_Item.png';

const Desserts = ({ dessert }) => {
    const {user} = useContext(AuthContext)
    const [,refetch] = useCart()
    const navigate = useNavigate()
    const location = useLocation()
    const { name, recipe, image , price} = dessert
    const handle_AddToCart = (uesrs_cart) => {
        console.log(uesrs_cart);
        const cart = {menuItemId:uesrs_cart._id, email:user?.email ,category: uesrs_cart.category , name:uesrs_cart.name, recipe: uesrs_cart.recipe, image: uesrs_cart.image , price: uesrs_cart.price }
        if (user && user.email) {
            fetch("http://localhost:11000/uesrs_own_cart",
            {
                method: "POST",//-----------------------------------
                headers: { //---------------------------------------
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(cart),
            }
        )
            .then(res => res.json())
            .then(uesrs_cart => {
                console.log(uesrs_cart);
                if (uesrs_cart.insertedId) {
                    refetch()
                    Swal.fire({
                        title: 'success',
                        text: 'Your item added successfully!',
                        icon: 'success',
                        confirmButtonText: '🥰'
                      })
                }
            })
        }else {
            Swal.fire({
                title: 'Please Login To Order The Food...',
                // text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login' , {state:{from: location}})
                }
              })
        }
    }
    return (
        <section className='bg-[#F3F3F3] '>
            <div className='relative'>
           <p className='text-white bg-black py-1 px-2 rounded-md text-[1.1em] font-bold absolute top-4 right-4'>﹩{price}</p>
           {image ?  <img className='w-[100%] h-[350px]' src={image} alt="" /> :  <img className='w-[100%] h-[350px]' src={Error_Item} alt="" />}
           </div>
            <div className='py-8'>
                <p className='text-center md:text-[1.2em] font-bold  ' >{name}</p>
                <p className='text-center text-[#737373] py-3'>{recipe}</p>
                <div className='flex justify-center '>
                    <button onClick={()=>handle_AddToCart(dessert)} className='px-11 duration-300 py-2 rounded-md border-0 border-b-4 border-[#926703] hover:border-black bg-[#e8e8e8] hover:bg-black text-[#926703]'>add to cart</button>
                </div>
            </div>
        </section>
    );
};

export default Desserts;
