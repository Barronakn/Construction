import React from 'react';
import About1 from "../../../public/assets/building_01.jpg";
import About2 from "../../../public/assets/building_02.jpg";
import About3 from "../../../public/assets/building_03.jpg";
import { Link } from '@inertiajs/react';

const About = () => {
    return (

        <section className='bg-about px-32 py-24'>
            <div id='about' className='flex justify-between gap-32'>
                <div className='w-1/2 width'>
                    <h1 className='font-bold text-4xl uppercase'>About Us</h1>
                    <div className='bg-yellow w-14 h-1 my-5'></div>
                    <p className='text-gray-500 text-xl'>WE ARE THE LEADERS IN THE CONSTRUCTION INDUSTRY!</p>
                </div>
                <div className='w-1/2 width py-14'>
                    <p className='text-gray-500 italic text-lg mb-10'>
                        Integer rutrum ligula eu dignissim laoreet. Pellentesque venenatis nibh sed tellus
                        faucibus bibendum. Sed fermentum est vitae rhoncus molestie. Cum sociis natoque
                        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed vitae rutrum
                        neque. Ut id erat sit amet libero bibendum aliquam.
                        Donec ac egestas libero, eu bibendum risus. Phasellus et congue justo.
                    </p>
                    <Link className='text-black link bg-yellow p-3 uppercase font-bold rounded-4xl hover:bg-black hover:link' href="#services">Read More</Link>
                </div>
            </div>
            <div className='flex bg-white shadow-lg'>
                <div>
                    <img className='h-56' src={About1} alt="building_01" />
                    <div className='p-4'>
                        <h2 className='text-center text-xl py-2'>Spacious and Large Garden</h2>
                        <p className='text-center text-sm text-gray-500'>Aliquam sagittis ligula et sem lacinia, ut facilisis enim sollicitudin. Proin nisi est, convallis nec purus vitae, iaculis posuere sapien. Cum sociis natoque.</p>
                    </div>
                </div>
                <div>
                    <img className='h-56' src={About2} alt="building_02" />
                    <div className='p-4'>
                        <h2 className='text-center text-xl py-2'>With its Own Pool</h2>
                        <p className='text-center text-sm text-gray-500'>Duis at tellus at dui tincidunt scelerisque nec sed felis. Suspendisse id dolor sed leo rutrum euismod. Nullam vestibulum fermentum erat. It nam auctor.</p>
                    </div>
                </div>
                <div>
                    <img className='h-56' src={About3} alt="building_03" />
                    <div className='p-4'>
                        <h2 className='text-center text-xl py-2'>In Forests- Fresh Clean Air</h2>
                        <p className='text-center text-sm text-gray-500'>Etiam materials ut mollis tellus, vel posuere nulla. Etiam sit amet lacus vitae massa sodales aliquam at eget quam. Integer ultricies et magna quis.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
