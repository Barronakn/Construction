import React from 'react';
import { Link } from '@inertiajs/react';
import Logo from '../../../public/assets/logo-icon.png';

const Footer = () => {
    return (
        <footer className='text-gray-500'>
            <div className='bg-footer top flex gap-10 px-32 py-20'>
                <div className='w-1/3 w-footer'>
                    <div>
                        <h1 className='font-bold text-2xl uppercase'>About Us</h1>
                        <div className='bg-yellow w-14 h-1 my-5'></div>
                    </div>
                    <div>
                        <Link href='/' className="logo flex gap-2 items-center">
                            <img className='w-14 h-14' src={Logo} alt="logo-img" />
                            <p className='text-2xl gray-trans font-bold text-white uppercase'>Constructed</p>
                        </Link>
                        <p className='mt-5'>Aenean suscipit eget mi act fermentum phasellus vulputate turpis tincidunt.
                            Aenean suscipit eget. Aenean suscipit eget mi act fermentum phasellus vulputate
                            turpis tincidunt.
                            Aenean suscipit ege Aenean suscipit eget mi act fermentum phasellus.</p>
                    </div>
                </div>

                <div className='w-1/3 w-footer'>
                    <div>
                        <h1 className='font-bold text-2xl uppercase'>Company Links</h1>
                        <div className='bg-yellow w-14 h-1 my-5'></div>
                    </div>
                    <div className='flex gap-10'>
                        <ul className='flex  flex-col gap-5'>
                            <li>
                                <Link href='/'>Home</Link>
                            </li>
                            <li>
                                <Link href='#services'>Services</Link>
                            </li>
                            <li>
                                <Link href='#testimonials'>Testimonials</Link>
                            </li>
                            <li>
                                <Link href='#contact'>Contact Us</Link>
                            </li>
                        </ul>
                        <ul className='flex flex-col gap-5'>
                            <li>
                                <Link href='#about'>About Us</Link>
                            </li>
                            <li>
                                <Link href='#work'>Our Work</Link>
                            </li>
                            <li>
                                <Link href='#price'>Price</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='w-1/3 w-footer'>
                    <div>
                        <h1 className='font-bold text-2xl uppercase'>Contact Info</h1>
                        <div className='bg-yellow w-14 h-1 my-5'></div>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <div>
                            <h3 className='font-bold'>Address:</h3>
                            <p>1010 Berkler avenue, Brooklyn New York City, NY 10018 US</p>
                        </div>
                        <div>
                            <h3 className='font-bold'>Phone No:</h3>
                            <p>+212 386 5575</p>
                            <p>+212 386 5575</p>
                        </div>
                        <div>
                            <h3 className='font-bold'>Email Address:</h3>
                            <p>Demo@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-between bottom bg-black py-4 px-32 text-xs'>
                <div>
                    <p>All Rights Reserved. Company Name © 2023</p>
                </div>

                <ul className='flex justify-between gap-10'>
                    <li>
                        <Link href='#'>HISTORY</Link>
                    </li>
                    <li>
                        <Link href='#'>FAQ</Link>
                    </li>
                    <li>
                        <Link href='#'>EVENTS</Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
