//eslint-disable-next-line
import React from 'react';
import img from '../../assets/home/chef-service.jpg';
import Banner from './Banner/Banner';
import useMenu from '../../../Hooks/useMenu';
import Popular from './Popular/Popular';
import Dessert from './Dessert/Dessert';
import Pizza from './Pizza/Pizza';
import Salad from './Salad/Salad';
import Soup from './Soup/Soup';
import Drink from './Drink/Drink';
import { Link } from 'react-router-dom';

const Menu = () => {
    const [menus] = useMenu()
    const offers = menus.filter(menu => menu.category === "offered")
    // const populars = menus.filter(menu => menu.category === "popular")
    const desserts = menus.filter(menu => menu.category === "dessert")
    const pizzas = menus.filter(menu => menu.category === "pizza")
    const salads = menus.filter(menu => menu.category === "salad")
    const soups = menus.filter(menu => menu.category === "soup")
    const drinks = menus.filter(menu => menu.category === "drinks")
    console.log(offers);
    return (
        <div>
            <Banner></Banner>
            <section>
                <section className="text-center mb-3 md:mb-6">
                    <p className="pb-2 text-[#D99904] italic text-[.7em] md:text-[1.1em]">---Don,t miss---</p>
                    <hr className="w-[34.7%] md:w-[20%] mx-auto border-[1.3px] md:border-2 border-[#E8E8E8] " />
                    <p className="text-[1em] md:text-[2em] py-[3px] md:py-[5px]">TODAY,S OFFER</p>
                    <hr className="w-[34.7%] md:w-[20%] mx-auto border-[1.3px] md:border-2 border-[#E8E8E8] " />
                </section>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    {
                        offers.map(popular => <Popular key={popular._id} popular={popular}></Popular>)
                    }
                </div>
                <div className='flex justify-center my-3'>
                    <button disabled className=' px-11 duration-300 py-2 rounded-md border-0 border-b-4 border-[#926703] hover:border-black  hover:bg-black text-[#926703]'>ORDER YOUR FAVOURITE FOOD</button>
                </div>
            </section>

            {/* section 2 */}

            <section>
                <div className="relative my-[24px] md:my-[4.1em] h-[72vh]">
                    <div
                        className=" bg-cover w-full h-full bg-no-repeat bg-center  flex justify-center items-center "
                        style={{ backgroundImage: `url(${img})` }}
                    >
                        <div className='flex justify-center items-center '>
                            <div className=" text-white bg-black bg-opacity-40 text-center flex items-center w-[91%] h-[367px] md:h-[323px] mx-auto">
                                <div className='px-10'>
                                    <h1 className="text-[3em] font-bold ">DESSERTS</h1>
                                    <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    {
                        desserts.map(dessert => <Dessert key={dessert._id} dessert={dessert}></Dessert>)
                    }
                </div>
                <div className='flex justify-center my-3'>
                   <Link to = {`/Shop/${desserts[0]?.category}`}><button className='px-11 duration-300 py-2 rounded-md border-0 border-b-4 border-[#926703] hover:border-black  hover:bg-black text-[#926703]'>ORDER YOUR FAVOURITE FOOD</button></Link>
                </div>
            </section>

            {/* section 3 */}

            <section>
                <div className="relative my-[24px] md:my-[4.1em] h-[72vh]">
                    <div
                        className=" bg-cover w-full h-full bg-no-repeat bg-center  flex justify-center items-center "
                        style={{ backgroundImage: `url(${img})` }}
                    >
                        <div className='flex justify-center items-center '>
                            <div className=" text-white bg-black bg-opacity-40 text-center flex items-center w-[91%] h-[367px] md:h-[323px] mx-auto">
                                <div className='px-10'>
                                    <h1 className="text-[3em] font-bold ">PIZZA</h1>
                                    <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    {
                        pizzas.map(pizza => <Pizza key={pizza._id} pizza ={pizza}></Pizza>)
                    }
                </div>
                <div className='flex justify-center my-3'>
                   <Link to = {`/Shop/${pizzas[0]?.category}`}><button className='px-11 duration-300 py-2 rounded-md border-0 border-b-4 border-[#926703] hover:border-black  hover:bg-black text-[#926703]'>ORDER YOUR FAVOURITE FOOD</button></Link>
                </div>
            </section>

            
            {/* section 4 */}

            <section>
                <div className="relative my-[24px] md:my-[4.1em] h-[72vh]">
                    <div
                        className=" bg-cover w-full h-full bg-no-repeat bg-center  flex justify-center items-center "
                        style={{ backgroundImage: `url(${img})` }}
                    >
                        <div className='flex justify-center items-center '>
                            <div className=" text-white bg-black bg-opacity-40 text-center flex items-center w-[91%] h-[367px] md:h-[323px] mx-auto">
                                <div className='px-10'>
                                    <h1 className="text-[3em] font-bold ">SALAD</h1>
                                    <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    {
                        salads.map(salad => <Salad key={salad._id} salad = {salad}></Salad>)
                    }
                </div>
                <div className='flex justify-center my-3'>
                   <Link to = {`/Shop/${salads[0]?.category}`}><button className='px-11 duration-300 py-2 rounded-md border-0 border-b-4 border-[#926703] hover:border-black  hover:bg-black text-[#926703]'>ORDER YOUR FAVOURITE FOOD</button></Link>
                </div>
            </section>
            
            {/* section 5 */}

            <section>
                <div className="relative my-[24px] md:my-[4.1em] h-[72vh]">
                    <div
                        className=" bg-cover w-full h-full bg-no-repeat bg-center  flex justify-center items-center "
                        style={{ backgroundImage: `url(${img})` }}
                    >
                        <div className='flex justify-center items-center '>
                            <div className=" text-white bg-black bg-opacity-40 text-center flex items-center w-[91%] h-[367px] md:h-[323px] mx-auto">
                                <div className='px-10'>
                                    <h1 className="text-[3em] font-bold ">SOUP</h1>
                                    <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    {
                        soups.map(soup => <Soup key={soup._id} soup ={soup}></Soup>)
                    }
                </div>
                <div className='flex justify-center my-3'>
                   <Link to = {`/Shop/${soups[0]?.category}`}><button className='px-11 duration-300 py-2 rounded-md border-0 border-b-4 border-[#926703] hover:border-black  hover:bg-black text-[#926703]'>ORDER YOUR FAVOURITE FOOD</button></Link>
                </div>
            </section>
            
            {/* section 6 */}

            <section>
                <div className="relative my-[24px] md:my-[4.1em] h-[72vh]">
                    <div
                        className=" bg-cover w-full h-full bg-no-repeat bg-center  flex justify-center items-center "
                        style={{ backgroundImage: `url(${img})` }}
                    >
                        <div className='flex justify-center items-center '>
                            <div className=" text-white bg-black bg-opacity-40 text-center flex items-center w-[91%] h-[367px] md:h-[323px] mx-auto">
                                <div className='px-10'>
                                    <h1 className="text-[3em] font-bold ">DRINK</h1>
                                    <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    {
                        drinks.map(drink => <Drink key={drink._id} drink ={drink}></Drink>)
                    }
                </div>
                <div className='flex justify-center my-3'>
                   <Link to = {`/Shop/${drinks[0]?.category}`}><button className='px-11 duration-300 py-2 rounded-md border-0 border-b-4 border-[#926703] hover:border-black  hover:bg-black text-[#926703]'>ORDER YOUR FAVOURITE FOOD</button></Link>
                </div>
            </section>
        </div>
    );
};

export default Menu;
//offered
