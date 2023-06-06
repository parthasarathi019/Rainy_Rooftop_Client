//eslint-disable-next-line
import React, { useState } from 'react';
import Main_Slider from './Main_Slider/Main_Slider';
import Banner from './Banner/Banner';
import Menu_Section from './Menu_Section/Menu_Section';
import Contact_Section from './Contact_Section/Contact_Section';
import Featured_Receipe from './Featured_Receipe/Featured_Receipe';
import From_Our_Menu from './Menu_With_Dubble_bg/From_Our_Menu';
import Testimonials from './Testimonials/Testimonials';
import Main_Carosel from './Main_Carosel/Main_Carosel';
// import SideNavbar from './SideNavbar';
// import Scale from './Scale';
// import Pagination from './Pagination';

const Roof_Main_Page = () => {
    // const [loading, Setloading] = useState(true)
    // if (
    //     loading
    //   ) {
    //     return <div className='text-center text-[4.4em] py-3 text-red-600 font-bold'>Loading...</div>
    //   }
    return (
        <div>
            <Main_Carosel></Main_Carosel>
            <Main_Slider></Main_Slider>
            <Banner></Banner>
            <Menu_Section></Menu_Section>
            <Contact_Section></Contact_Section>
            <Featured_Receipe></Featured_Receipe>
            <From_Our_Menu></From_Our_Menu>
            <Testimonials></Testimonials>
            {/* <Pagination></Pagination> */}
            {/* {Setloading(false)} */}
            {/* <Scale></Scale> */}
            {/* <SideNavbar></SideNavbar> */}
            
        </div>
       
    );
};

export default Roof_Main_Page;