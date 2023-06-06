//eslint-disable-next-line
import React, { useEffect, useState } from 'react';
import Menu_Card from './Menu_Card/Menu_Card';
import button from '../../../local_img/button.png';

const Menu_Section = () => {
    const [MenuS, SetMenuS] = useState([])
    const [Show_All , setShow_All] = useState(false)
    const handle_show_all = () => {
        setShow_All(true)
    }

    useEffect(() => {
        fetch(`http://localhost:11000/rooftop_menu`)

            .then(res => res.json())
            .then((data) => {
                SetMenuS(data);
            })
    }, [])
    console.log(MenuS);

    return (
        <div className='mb-3'>
            <section className="text-center mb-3 md:mb-6">
                <p className="pb-2 text-[#D99904] italic text-[.7em] md:text-[1.1em]">---Check it out---</p>
                <hr className="w-[34.7%] md:w-[20%] mx-auto border-[1.3px] md:border-2 border-[#E8E8E8] "/>
                <p className="text-[1em] md:text-[2em] py-[3px] md:py-[5px]">FROM OUR MENU</p>
                <hr className="w-[34.7%] md:w-[20%] mx-auto border-[1.3px] md:border-2 border-[#E8E8E8] "/>
            </section>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                {
                     MenuS?.slice(0 , Show_All ? 999999999999999 : 20).map(Menu => <Menu_Card key={Menu._id} Menu = {Menu}></Menu_Card>)
                }
            </div>
           {!Show_All &&
             <div className='flex justify-center'><button className='flex justify-center' onClick={handle_show_all}> <img className='w-[65%]' src={button} alt="" /></button></div>
           }
        </div>
    );
};

export default Menu_Section;

// -webkit-clip-path: polygon(50% 0%, 80% 10%, 99% 36%, 99% 70%, 80% 90%, 43% 98%, 18% 86%, 2% 64%, 0 29%, 0 0);
// clip-path: polygon(50% 0%, 80% 10%, 99% 36%, 99% 70%, 80% 90%, 43% 98%, 18% 86%, 2% 64%, 0 29%, 0 0);
// https://tutorial.techaltum.com/clip-path.html
//social button animatred : https://codepen.io/jh3y/pen/MWBmmxb
//Buttons : https://freefrontend.com/css-buttons/
//Here i use this button : https://codepen.io/t_afif/pen/VwxbdpV