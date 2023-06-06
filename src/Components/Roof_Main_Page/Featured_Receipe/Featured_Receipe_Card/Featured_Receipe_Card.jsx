//eslint-disable-next-line
import React, { useState } from 'react';


const Featured_Receipe_Card = ({Receipess}) => {
    console.log(Receipess);

//eslint-disable-next-line
const {image , name , recipe, _id} = Receipess

  // const [isHovered, setIsHovered] = useState(false);

  // const handleHover = () => {
  //   setIsHovered(true);
  // };

  // const handleLeave = () => {
  //   setIsHovered(false);
  // };

  return (
   <section className='bg-[#F3F3F3] '>
    <img src={image} alt="" />.
   <div className='py-8'>
   <p className='text-center md:text-[1.2em] font-bold  ' >{name}</p>
    <p className='text-center text-[#737373] py-3'>{recipe}</p>
    {/* <div
      className=" relative"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <div className=" flex justify-center">
      <button className='bg-gradient-to-t from-[#926703] from-6%  to-[#e8e8e8] to-10% text-[#BB8506]  hover:text-white px-8 py-[8px] rounded-md'>
           Hover Me
        </button>
      </div>
      {isHovered && (
        <div className="absolute top-0 left-[118px] md:left-[150px] flex justify-center">
            <button className=' hover:bg-blue-950 text-[#BB8506] hover:text-white px-8 py-[8px] rounded-md'>
           Hover Me
        </button>
        </div>
      )}
    </div> */}
     <div className='flex justify-center '>
            <button className='px-11 duration-300 py-2 rounded-md border-0 border-b-4 border-[#926703] hover:border-black bg-[#e8e8e8] hover:bg-black text-[#926703]'>add to cart</button>
        </div>
   </div>
   </section>
  );
};

export default Featured_Receipe_Card;
