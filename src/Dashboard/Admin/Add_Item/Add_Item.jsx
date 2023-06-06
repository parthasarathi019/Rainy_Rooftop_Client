import React from 'react';
import img from '../../../local_img/cutlery_Add_item.png';
import { useState } from 'react';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const Add_Item = () => {
    const [isScaled, setIsScaled] = useState(false);
    const [axiosSecure] = useAxiosSecure()
    const handleClick = () => {
        setIsScaled(true);
        setTimeout(() => {
            setIsScaled(false);
        }, 300); // Change the duration as needed
    };
    const Handle_Submit = (event) => {
        event.preventDefault();
        const Full_Form = event.target
        const name = Full_Form.name.value
        const category = Full_Form.select.value
        const price = Full_Form.price.value
        const recipe = Full_Form.details.value
        //image upload start-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
        const image = Full_Form.image.files[0]
        const Form_Data = new FormData()
        Form_Data.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_UPLOAD_KEY}`
        fetch(url, {
            method: 'POST',
            body: Form_Data,
        })
            .then(res => res.json())
            .then(img_data => {
                //    console.log(img_data.data.display_url)
                const image = img_data.data.display_url
                //image upload end-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                const Add_Item = { name, price: parseFloat(price), category, recipe, image }
                console.log(Add_Item);
                axiosSecure.post('/rooftop_menu', Add_Item)
                    .then(data => {
                        console.log('after posting new menu item', data.data);
                        if (data.data.insertedId) {
                            Swal.fire({
                                title: 'success',
                                text: 'Your Drone data added successfully!',
                                icon: 'success',
                                confirmButtonText: '🥰K',
                            })
                        }
                    })
            })
        Full_Form.reset();
    }
    return (
        <div>
            <section className="text-center py-3 md:py-6">
                <p className="pb-2 text-[#D99904] italic text-[.7em] md:text-[1.06em]">---What,s new?---</p>
                <hr className="w-[34.7%] md:w-[20%] mx-auto border-[1.3px] md:border-2 border-[#E8E8E8] " />
                <p className="text-[1em] md:text-[2em] py-[3px] md:py-[5px]">ADD AN ITEM</p>
                <hr className="w-[34.7%] md:w-[20%] mx-auto border-[1.3px] md:border-2 border-[#E8E8E8] " />
            </section>
            <section className='bg-[#F3F3F3] py-5 mb-5 md:ml-14'>
                <form onSubmit={Handle_Submit} className=' mx-auto md:w-[90%]'>
                    <div className=' mx-auto pt-3'>
                        <p className='md:text-[.94em] text-[.85em] font-semibold'>Recipe name*</p>
                        <p className='pt-1 md:pt-2'><input required name='name' id="name" type='text' placeholder='Recipe name' className=" rounded-sm bg-[#fff] w-full py-2 md:py-4 pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                    </div>
                    <div className='flex flex-col md:flex-row gap-x-4'>
                        <div className='pt-1 md:pt-2 w-full'>
                            <p className='md:text-[.94em] text-[.85em] font-semibold'>Category*</p>
                            <p className='rounded-sm bg-[#fff] w-full py-2 md:py-4 pl-1 md:pl-2 text-[.65em] md:text-[.85em]'>
                                <p ><select name='select' id="select">
                                    <option value="salad">SALAD</option>
                                    <option value="pizza">PIZZA</option>
                                    <option value="soup">SOUP</option>
                                    <option value="dessert">DESSERT</option>
                                    <option value="drinks">DRINK</option>
                                </select></p>
                            </p>

                        </div>

                        <div className=' mx-auto pt-1 md:pt-2 w-full'>
                            <p className='md:text-[.94em] text-[.85em] font-semibold'>Price*</p>
                            <p className=''><input required name='price' id="price" type='number' placeholder='Price' className=" rounded-sm bg-[#fff] w-full py-2 md:py-4 pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                        </div>
                    </div>
                    <div className=' mx-auto pt-3'>
                        <p className='md:text-[.94em] text-[.85em] font-semibold'>Recipe Details*</p>
                        <p className='pt-1 md:pt-2'>
                            <textarea rows="9" cols="50" name='details' id="details" type='text' placeholder='Recipe Details' className=" rounded-sm bg-[#fff] w-full pl-1 md:pl-2 text-[.65em] md:text-[.85em]"></textarea></p>
                    </div>
                    <div className=' mx-auto pt-3'>
                        <p className='md:text-[.94em] text-[.85em] font-semibold'>Profile </p>
                        <p className='pt-1 md:pt-2'><input required name='image' id="image" type='file' accept='image/*' className=" rounded-sm bg-[#fff]  w-full py-2 md:py-[12px] pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                    </div>
                    <button onClick={handleClick} className={`${isScaled ? 'scale-105' : ''} duration-300`}><div className='pt-3 mt-3 cursor-pointer flex items-center gap-x-1 px-5 py-2 text-white bg-gradient-to-r from-[#835D23] to-[#B58130] font-bold text-[1.16em rounded-sm]'><button className=''>Add item</button><img className='w-[15px] h-[12px]' src={img} alt="" /> </div></button>
                </form>
            </section>
        </div>
    );
};

export default Add_Item;