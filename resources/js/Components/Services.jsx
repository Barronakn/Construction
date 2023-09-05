import React from 'react';
import service1 from "../../../public/assets/icon1.png";
import service2 from "../../../public/assets/icon4.png";
import service3 from "../../../public/assets/sr1.png";
import service4 from "../../../public/assets/sr2.png";
import service5 from "../../../public/assets/sr3.png";

const Services = () => {
    return (
        <section id='services' className=' py-20'>
            <div className='flex justify-between px-32 gap-32'>
                <div className='w-1/3 width'>
                    <h1 className='font-bold text-4xl uppercase'>Services</h1>
                    <div className='bg-yellow w-14 h-1 my-5'></div>
                    <p className='text-gray-500 text-xl'>WE ARE THE LEADERS IN THE CONSTRUCTION INDUSTRY!</p>
                </div>
                <div className='flex w-2/3 width gap-32'>
                    <div className='flex flex-col justify-center items-center'>
                        <img className='w-24 h-20' src={service1} alt="service_icon_01" />
                        <div className='p-4'>
                            <h2 className='text-center text-xl py-2 uppercase'>Service One</h2>
                            <p className='text-center text-sm text-gray-500'>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <img className='w-24 h-20' src={service2} alt="service_icon_02" />
                        <div className='p-4'>
                            <h2 className='text-center text-xl py-2 uppercase'>Service Two</h2>
                            <p className='text-center text-sm text-gray-500'>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex gap-32 px-32 bg-gray-800'>
                <div className='flex flex-col  py-20  justify-center items-center'>
                    <img className='w-24 h-20' src={service3} alt="service_icon_03" />
                    <div className=''>
                        <h2 className='text-center text-white text-xl py-2 uppercase'>Manufacturing</h2>
                        <p className='text-center text-sm text-gray-100'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                </div>
                <div className='flex flex-col px-32 py-20 bg-gray-900 justify-center items-center'>
                    <img className='w-24 h-20' src={service4} alt="service_icon_04" />
                    <div className=''>
                        <h2 className='text-center text-white text-xl py-2 uppercase'>Fabrication</h2>
                        <p className='text-center text-sm text-gray-100'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                </div>
                <div className='flex flex-col py-20 justify-center items-center'>
                    <img className='w-24 h-20' src={service5} alt="service_icon_05" />
                    <div className=''>
                        <h2 className='text-center text-white text-xl py-2 uppercase'>Construction</h2>
                        <p className='text-center text-sm text-gray-100'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
