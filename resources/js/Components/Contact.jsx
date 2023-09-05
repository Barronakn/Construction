import React, { useState } from 'react';
// import { Inertia } from '@inertiajs/inertia';

const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        details: "",
    });

    const {
        name,
        lastName,
        email,
        phone,
        service,
        details, } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Send the form data using Inertia.post
        Inertia.post(route("contact"), formData, {
            onSuccess: () => {
                // Clear the form and show the success message
                setFormData({
                    name: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    service: "",
                    details: "",
                });
            },
        });
    };

    return (
        <section id='contact' className='text-gray-500 py-10 px-32'>
            <div className='flex flex-col justify-center items-center gap-6'>
                <h1 className='text-black font-bold uppercase text-4xl'>Contact Us</h1>
                <p className='w-1/2 w-contact text-center'>Quisque eget nisl id nulla sagittis auctor quis id.
                    Aliquam quis vehicula enim, non aliquam risus.
                    Sed a tellus quis mi rhoncus dignissim.</p>
            </div>
            <div className='info flex py-12 gap-14'>
                <div className='flex flex-col gap-10 w-1/3 w-contact'>
                    <div>
                        <h3 className='text-black font-bold'>Address:</h3>
                        <p>1010 Berkler avenue, Brooklyn New York City, NY 10018 US</p>
                    </div>
                    <div>
                        <h3 className='text-black font-bold'>Phone No:</h3>
                        <p>+212 386 5575</p>
                        <p>+212 386 5575</p>
                    </div>
                    <div>
                        <h3 className='text-black font-bold'>Email Address:</h3>
                        <p>Demo@gmail.com</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className='w-2/3 flex flex-col gap-10'>
                    <div className='flex gap-10 w-input items-center'>
                        <div className='w-input'>
                            <input value={name} onChange={handleChange} className='border-b-gray w-80' type="text" placeholder='First Name' name="name" id="name" />
                        </div>
                        <div className='w-input'>
                            <input value={lastName} onChange={handleChange} className='border-b-gray w-80' type="text" placeholder='Last Name' name="lastName" id="lastName" />
                        </div>
                    </div>

                    <div className='flex gap-10 w-input items-center'>
                        <div className='w-input'>
                            <input value={email} onChange={handleChange} className='border-b-gray w-80' type="email" placeholder='Your Email' name="email" id="email" />
                        </div>
                        <div className='w-input'>
                            <input value={phone} onChange={handleChange} className='border-b-gray w-80' type="phone" placeholder='Your Website' name="phone" id="phone" />
                        </div>
                    </div>

                    <div>
                        <select value={service} onChange={handleChange} className='border-b-gray w-full' name="service" id="service">
                            <option selected defaultValue="Select Service">Select Service</option>
                            <option defaultValue="Building Service">Building Service</option>
                            <option defaultValue="Tover Design">Tover Design</option>
                            <option defaultValue="Others">Others</option>
                        </select>
                    </div>

                    <div>
                        <textarea value={details} onChange={handleChange} className='border-b-gray w-full resize-none' name="details" id="details" placeholder='Give us more details..' cols="30" rows="4"></textarea>
                    </div>

                    <input className='bg-yellow text-xl hover:cursor-pointer rounded-3xl py-4 px-14 text-black' type="submit" value="Get a Quote" />
                </form>
            </div>
        </section>
    );
};

export default Contact;
