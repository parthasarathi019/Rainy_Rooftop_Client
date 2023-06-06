//eslint-disable-next-line
import React from 'react';
import'./Menu_Card.css';

const Menu_Card = ({Menu}) => {
    //eslint-disable-next-line
    const{name , recipe , image , category , price , _id} = Menu
  
    return (
       <section>
        <section className='flex items-center justify-between gap-x-5 pb-3 px-3'>
        <img className='w-[80px] h-[72px] md:w-[118px] md:h-[104px]' style={{borderRadius: '0 200px 200px 200px'}} src={image} alt="" />
        <div>
            <h1 className='text-[#151515] hidden md:block md:text-[1.4em] font-[500]'>{name}------------------</h1>
            <h1 className='text-[#151515] text-[1.15em]  block md:hidden font-[500]'>{name}--------</h1>
            <h1 className='text-[#737373] text-[.72em] md:text-[.92em]'>{recipe}</h1>
        </div>
        <div className='text-[#BB8506]'>${price}</div>
       </section>
       </section>
    );
};

export default Menu_Card;