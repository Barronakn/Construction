import React from 'react';
import SepLine from "../../../public/assets/sep-line-white.png";
import { Link } from '@inertiajs/react';

const Header = () => {
    return (
        <header className='px-32 bg-header text-white font-bold flex flex-col justify-between items-center py-52'>
            <div>
                <img src={SepLine} alt="SepLine-img" />
                <h2 className='text-yellow uppercase text-7_5xl text-center'>Construction</h2>
                <img src={SepLine} alt="SepLine-img" />
            </div>
            <div className='flex flex-col justify-between items-center gap-12'>
                <p className='text-lg w-2/3  text-center mt-12'>
                    With Landigoo responsive
                    landing page template, you can showcase your awesome
                    building & construction services!
                </p>
                <Link className='bg-black p-4 link rounded-4xl' href="#services">View all Services</Link>
            </div>
        </header>
    );
};

export default Header;
