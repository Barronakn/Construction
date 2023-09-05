import React from 'react';
import { Link } from '@inertiajs/react';

const Price = () => {
    return (
        <section id='price' className='px-32 py-20 gap-12 flex bg-price justify-center items-center'>
            <div className='bg-white rounded-tl-xl w-96 width rounded-tr-xl'>
                <div className='bg-black p-5 text-white text-center rounded-tl-xl rounded-tr-xl'>
                    <h2 className='text-2xl'>Shared Hosting</h2>
                    <h3 className='text-md'>$85/month</h3>
                </div>
                <div className='text-justify p-10 flex flex-col gap-6'>
                    <p className='text-gray-500'>
                        <span className='font-bold text-black'>250 </span>
                        Email Addresses
                    </p>
                    <p className='text-gray-500'>
                        <span className='font-bold text-black'>125GB </span>
                        of Storage
                    </p>
                    <p className='text-gray-500'>
                        <span className='font-bold text-black'>140 </span>
                        Databases
                    </p>
                    <p className='text-gray-500'>
                        <span className='font-bold text-black'>60 </span>
                        Domains
                    </p>
                    <p className='text-gray-500'>
                        <span className='font-bold text-black'>24/7 Unlimited </span>
                        Support
                    </p>
                </div>
                <hr />
                <div className='p-5 text-center'>
                    <Link className='border-2 border-black rounded-3xl px-4 py-2' href='#contact'>Order Now</Link>
                </div>
            </div>
            <div className='bg-white rounded-tl-xl w-96 width height_1 rounded-tr-xl'>
                <div className='bg-yellow p-5 text-white text-center rounded-tl-xl rounded-tr-xl'>
                    <h2 className='text-2xl'>Shared Hosting</h2>
                    <h3 className='text-md'>$85/month</h3>
                </div>
                <div className='text-justify p-10 flex flex-col gap-6'>
                    <p className='text-gray-500'>
                        <span className='font-bold text-black'>250 </span>
                        Email Addresses
                    </p>
                    <p className='text-gray-500'>
                        <span className='font-bold text-black'>125GB </span>
                        of Storage
                    </p>
                    <p className='text-gray-500'>
                        <span className='font-bold text-black'>140 </span>
                        Databases
                    </p>
                    <p className='text-gray-500'>
                        <span className='font-bold text-black'>60 </span>
                        Domains
                    </p>
                    <p className='text-gray-500'>
                        <span className='font-bold text-black'>24/7 Unlimited </span>
                        Support
                    </p>
                </div>
                <hr />
                <div className='p-5 text-center mt-6'>
                    <Link className='bg-yellow rounded-3xl py-4 px-14' href='#contact'>Order Now</Link>
                </div>
            </div>
            <div className='bg-white rounded-tl-xl w-96 width rounded-tr-xl'>
                <div className='bg-black p-5 text-white text-center rounded-tl-xl rounded-tr-xl'>
                    <h2 className='text-2xl'>Shared Hosting</h2>
                    <h3 className='text-md'>$85/month</h3>
                </div>
                <div className='text-justify p-10 flex flex-col gap-6'>
                    <p className='text-gray-500'>
                        <span className='font-bold text-black'>250 </span>
                        Email Addresses
                    </p>
                    <p className='text-gray-500'>
                        <span className='font-bold text-black'>125GB </span>
                        of Storage
                    </p>
                    <p className='text-gray-500'>
                        <span className='font-bold text-black'>140 </span>
                        Databases
                    </p>
                    <p className='text-gray-500'>
                        <span className='font-bold text-black'>60 </span>
                        Domains
                    </p>
                    <p className='text-gray-500'>
                        <span className='font-bold text-black'>24/7 Unlimited </span>
                        Support
                    </p>
                </div>
                <hr />
                <div className='p-5 text-center'>
                    <Link className='border-2 border-black rounded-3xl px-4 py-2' href='#contact'>Order Now</Link>
                </div>
            </div>
        </section>
    );
};

export default Price;
