//eslint-disable-next-line
import React, { useContext, useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './React_Tabs.css'
import useMenu from '../../../../Hooks/useMenu';
import Salads from './Salads/Salads';
import Pizzas from './Pizzas/Pizzas';
import Soups from './Soups/Soups';
import Desserts from './Desserts/Desserts';
import Drinks from './Drinks/Drinks';
import { useParams } from 'react-router-dom';
// import { Link, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../Providers/AuthProviders';
// import Swal from 'sweetalert2';


const React_Tabs = () => {
  const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'] //dynamic tab --------3
  const {category} = useParams()//dynamic tab --------2
  const initialindex = categories.indexOf(category)//dynamic tab --------4
  const [TabIndex , setTabIndex] = useState(initialindex)//dynamic tab --------1
  // console.log(TabIndex);
  const [menus , loading] = useMenu()
  const salads = menus.filter(menu => menu.category === "salad")
  const pizzas = menus.filter(menu => menu.category === "pizza")
  const soups = menus.filter(menu => menu.category === "soup")
  const desserts = menus.filter(menu => menu.category === "dessert")
  const drinks = menus.filter(menu => menu.category === "drinks")

  if (
    loading
  ) {
    return <div className='text-center text-[4.4em] py-3 text-red-600 font-bold'>Loading...</div>
  }
  
  return (
    <div className="my-2">
      <Tabs defaultIndex={TabIndex} onSelect={(index) => setTabIndex(index)}>
        <section className="bg-pink-500 py-1 text-[1.4em] font-bold">
          <div className="md:w-[30%] overflow-x-scroll md:overflow-visible mx-auto">
            <TabList>
              <div className="flex">
                <Tab>SALAD</Tab>
                <Tab>PIZZA</Tab>
                <Tab>SOUPS</Tab>
                <Tab>DESSERTS</Tab>
                <Tab>DRINKS</Tab>
              </div>
            </TabList>
          </div>
        </section>

        <TabPanel>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-4'>
            {
              salads.map(salad => <Salads key={salad._id} salad={salad} ></Salads>)
            }
          </div>
        </TabPanel>
        <TabPanel>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-4'>
            {
              pizzas.map(pizza => <Pizzas key={pizza._id} pizza={pizza}></Pizzas>)
            }
          </div>
        </TabPanel>
        <TabPanel>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-4'>
            {
              soups.map(soup => <Soups key={soup._id} soup={soup}></Soups>)
            }
          </div>
        </TabPanel>
        <TabPanel>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-4'>
            {
              desserts.map(dessert => <Desserts key={dessert._id} dessert={dessert}></Desserts>)
            }
          </div>
        </TabPanel>
        <TabPanel>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-4'>
            {
              drinks.map(drink => <Drinks key={drink._id} drink={drink}></Drinks>)
            }
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default React_Tabs;
