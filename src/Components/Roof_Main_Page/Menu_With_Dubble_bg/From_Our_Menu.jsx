//eslint-disable-next-line
import React, { useEffect, useState } from 'react';
import img from '../../../assets/home/featured.jpg';
// import moment from 'moment/moment';
import button from '../../../local_img/See_more.png';
import button2 from '../../../local_img/See_less.png';



const From_Our_Menu = () => {
    const [currentTime, setCurrentTime] = useState(new Date())
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date())
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    //Show all button.......................
    const [isExpanded, setIsExpanded] = useState(false);
    const sampleText =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt luctus elementum. Phasellus rhoncus nisi at lorem pharetra dapibus. Morbi at eleifend turpis. Donec euismod mi nec elit elementum, non lacinia dolor finibus. Nulla efficitur interdum tristique. Fusce quis viverra elit. In vel quam arcu. Nullam ultrices posuere posuere. Phasellus cursus sapien a viverra efficitur. Sed tristique tortor eu risus pharetra, sed lobortis ipsum bibendum.";

    const handleShowAll = () => {
        setIsExpanded(true);
    };

    const handleShowLess = () => {
        setIsExpanded(false);
    };

    const renderText = () => {
        if (isExpanded) {
            return sampleText;
        } else {
            const halfLength = Math.ceil(sampleText.length / 2);
            const visibleText = sampleText.slice(0, halfLength);
            const hiddenText = sampleText.slice(halfLength);

            return (
                <>
                    {visibleText}
                    <span style={{ display: 'none' }}>{hiddenText}</span>
                </>
            );
        }
    };
    return (
        <div className="md:mt-2 mt-[3px]">
            <div
                className="bg-cover  bg-center bg-no-repeat flex justify-center items-center relative z-0"
                style={{
                    // backgroundColor: 'rgba(0,0,0,.5)',
                    background: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url(${img})`,
                    backgroundSize: 'cover',
                    backgroundAttachment: "fixed",

                    //   opacity: 0.55,
                }}
            >
                <div className=""></div>
                <section className="text-center md:my-14 my-4">
                    <p className="pb-2 text-[#D99904] italic text-[.7em] md:text-[1.1em]">
                        ---Check it out---
                    </p>
                    <hr className="w-[34.7%] md:w-[21%] mx-auto border-[1.3px] md:border-2 border-[#E8E8E8] text-white" />
                    <p className="text-[1em] md:text-[2em] py-[3px] md:py-[5px] text-white">
                        FROM OUR MENU
                    </p>
                    <hr className="w-[34.7%] md:w-[21%] mx-auto border-[1.3px] md:border-2 border-[#E8E8E8] text-white" />

                    <section className='flex flex-col md:flex-row justify-center items-center gap-x-7 mt-2 md:mt-6 md:px-16'>
                        <img className='md:w-[40%]' src={img} alt="" />
                        <div className='text-white '>
                            <p className='text-left'>{currentTime.toLocaleString()}</p>
                            <p className='text-left md:text-[1.2em] uppercase'>𝐖𝐡𝐞𝐫𝐞 𝐜𝐚𝐧 𝐢 𝐠𝐞𝐭 𝐬𝐨𝐦𝐞‽¿</p>
                            {/* <p className='text-left text-[.92em]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate <br /> facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat <br /> recusandae ad laudantium tempore consequatur consequuntur omnis ullam <br /> maxime tenetur.</p> */}
                            <div className='text-left '>
                                {renderText()}
                                {!isExpanded && (
                                    <>
                                        {/* <button onClick={handleShowAll}>Show All</button> */}
                                        <div className='flex justify-center'><button className='flex justify-center' onClick={handleShowAll}> <img className='w-[65%]' src={button} alt="" /></button></div>
                                    </>
                                )}
                                {isExpanded && (
                                    <>
                                        {/* <button onClick={handleShowLess}>Show Less</button> */}
                                        <div className='flex justify-center'><button className='flex justify-center' onClick={handleShowLess}> <img className='w-[65%]' src={button2} alt="" /></button></div>
                                    </>
                                )}
                            </div>
                        </div>
                      
                    </section>
                </section>

            </div>

        </div>
    );
};

export default From_Our_Menu;
