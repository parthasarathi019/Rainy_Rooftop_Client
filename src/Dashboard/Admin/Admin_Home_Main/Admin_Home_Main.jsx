//eslint-disable-next-line
import React, { useContext } from 'react';
import walet from '../../../local_img/Admin_first_Page_icon/walet.png';
import client from '../../../local_img/Admin_first_Page_icon/client.png';
import chef from '../../../local_img/Admin_first_Page_icon/chef.png';
import car from '../../../local_img/Admin_first_Page_icon/car.png';
import Charts from '../Charts/Charts';
import { AuthContext } from '../../../Providers/AuthProviders';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const Admin_Home_Main = () => {
    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();

    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure('/admin-stats');
            return res.data;
        }
    })

    
    return (
        <section className='ml-4'>
            <div>
                <div className=''>
                    <span><span className='text-[2.2em] pr-[3px]'>𝐇</span><span className='text-[1.7em] pr-[3px]'>𝐈,</span></span>

                    <span className='px-2'> <span className='text-[2.2em] pr-[3px]'>𝐖</span><span className='text-[1.7em] pr-[3px]'>𝐄</span><span className='text-[1.7em] pr-[3px]'>𝐋</span><span className='text-[1.7em] pr-[3px]'>𝐂</span><span className='text-[1.7em] pr-[3px]'>𝐎</span><span className='text-[1.7em] pr-[3px]'>𝐌</span><span className='text-[1.7em] pr-[3px]'>𝐄</span></span>

                    <span> <span className='text-[2.2em] pr-[3px]'>𝐁</span><span className='text-[1.7em] pr-[3px]'>𝐀</span><span className='text-[1.7em] pr-[3px]'>𝐂</span><span className='text-[1.7em] pr-[3px]'>𝐊</span><span className='text-[1.9em] '>!</span></span>
                </div>

                <div className='flex flex-col md:flex-row gap-y-3 justify-between mr-9 md:mr-0'>
                    <div className='flex justify-center items-center bg-purple-400 rounded-md md:rounded-[12px] md:py-7 py-[.8em] md:px-[3.5em]'>
                        <img className='w-[28px] md:w-[30px]' src={walet} alt="" />
                        <div className='pl-5 leading-6'>
                            <p className='md:text-[2em] text-[1.4em] font-bold text-white'>${stats.revenue}</p>
                            <p className='text-white text-[1.1em]'>Revenue</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center bg-purple-400 rounded-md md:rounded-[12px] md:py-7 py-[.8em] md:px-[3.5em]'>
                        <img className='w-[28px] md:w-[30px]' src={client} alt="" />
                        <div className='pl-5 leading-6'>
                            <p className='md:text-[2em] text-[1.4em] font-bold text-white'>{stats.users}</p>
                            <p className='text-white text-[1.1em]'>Customers</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center bg-purple-400 rounded-md md:rounded-[12px] md:py-7 py-[.8em] md:px-[3.5em]'>
                        <img className='w-[28px] md:w-[30px]' src={chef} alt="" />
                        <div className='pl-5 leading-6'>
                            <p className='md:text-[2em] text-[1.4em] font-bold text-white'>{stats.products}</p>
                            <p className='text-white text-[1.1em]'>Products</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center bg-purple-400 rounded-md md:rounded-[12px] md:py-7 py-[.8em] md:px-[3.5em]'>
                        <img className='w-[28px] md:w-[30px]' src={car} alt="" />
                        <div className='pl-5 leading-6'>
                            <p className='md:text-[2em] text-[1.4em] font-bold text-white'>{stats.orders}</p>
                            <p className='text-white text-[1.1em]'>Orders</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-slate-100 ml-0 mt-4'>
                <Charts></Charts>
            </div>
        </section>

    );
};
export default Admin_Home_Main;