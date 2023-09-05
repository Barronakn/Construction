import React from 'react';
import work1 from "../../../public/assets/pro1.png";
import work2 from "../../../public/assets/pro2.png";
import work3 from "../../../public/assets/pro3.png";
import work4 from "../../../public/assets/pro4.png";

const Work = () => {
    return (
        <section id='work' className='px-32' >
            <div className='w-1/3 width'>
                <h1 className='font-bold text-4xl uppercase'>Our Projects</h1>
                <div className='bg-yellow w-14 h-1 my-5'></div>
                <p className='text-gray-500 text-xl'>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
            </div>
            <div className='flex flex-col justify-center items-center mt-10 mb-20'>
                <div className='flex gap-2 row_1 items-center justify-center flex-wrap'>
                    <img className='dimension_1' src={work1} alt="pro1-img" />
                    <img className='dimension_2' src={work2} alt="pro2-img" />
                </div>
                <div className='flex gap-2 row_2 items-center justify-center my-2 flex-wrap'>
                    <img className='dimension_2' src={work3} alt="pro3-img" />
                    <img className='dimension_2' src={work4} alt="pro4-img" />
                    <img className='dimension_2' src={work3} alt="pro3-img" />
                </div>
                <div className='flex gap-2 row_3 items-center justify-center flex-wrap'>
                    <img className='dimension_1' src={work1} alt="pro1-img" />
                    <img className='dimension_2' src={work2} alt="pro2-img" />
                </div>
            </div>
        </section>
    );
};

export default Work;
