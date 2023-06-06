//eslint-disable-next-line
import React, { useEffect, useState } from 'react';
import Featured_Receipe_Card from './Featured_Receipe_Card/Featured_Receipe_Card';

const Featured_Receipe = () => {
    const [Receipes, SetReceipes] = useState([])
    useEffect(() => {
        fetch(`http://localhost:11000/featured_receipe`)

            .then(res => res.json())
            .then((data) => {
                SetReceipes(data);
            })
    }, [])
    console.log(Receipes);
    return (
        <div>
            <section className="text-center my-3 md:my-6">
                <p className="pb-2 text-[#D99904] italic text-[.7em] md:text-[1.06em]">---Should Try---</p>
                <hr className="w-[34.7%] md:w-[20%] mx-auto border-[1.3px] md:border-2 border-[#E8E8E8] " />
                <p className="text-[1em] md:text-[2em] py-[3px] md:py-[5px]">CHEF RECOMMENDS</p>
                <hr className="w-[34.7%] md:w-[20%] mx-auto border-[1.3px] md:border-2 border-[#E8E8E8] " />
            </section>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-4 md:gap-y-0'>
                {
                     Receipes.map(Receipess => <Featured_Receipe_Card key={Receipess._id} Receipess = {Receipess}></Featured_Receipe_Card>)
                }
            </div>
        </div>
    );
};

export default Featured_Receipe;