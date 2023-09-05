import React, { useState } from 'react';
import arrow from "../../../public/assets/arrow.svg"

const Testimonials = () => {

    const testimonials = [
        {
            title: "Wonderful Support! 1",
            description: "They have got my project on time with the competition with a sed highly skilled, and experienced & professional team."
        },
        {
            title: "Awesome Services! 1",
            description: "Explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you completed."
        },
        {
            title: "Great & Talented Team! 1",
            description: "The master-builder of human happines no one rejects, dislikes avoids pleasure itself, because it is very pursue pleasure. "
        },
        {
            title: "Wonderful Support! 2",
            description: "They have got my project on time with the competition with a sed highly skilled, and experienced & professional team."
        },
        {
            title: "Awesome Services! 2",
            description: "Explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you completed."
        },
        {
            title: "Great & Talented Team! 2",
            description: "The master-builder of human happines no one rejects, dislikes avoids pleasure itself, because it is very pursue pleasure. "
        },
    ];

    let itemsPerPage;

    if (window.innerWidth > 500 && window.innerWidth <= 768) {
        itemsPerPage = 2;
    } else if (window.innerWidth <= 500) {
        itemsPerPage = 1;
    } else {
        itemsPerPage = 3;
    }

    console.log(itemsPerPage);

    const totalItems = testimonials.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const testimonialsToDisplay = testimonials.slice(startIndex, endIndex);


    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    return (
        <section id='testimonials' className='bg-opacity-70 bg-black py-20'>
            <div className='text-center flex flex-col gap-5 items-center justify-center'>
                <h1 className='text-5xl uppercase text-white'>Testimonials</h1>
                <p className='text-gray-400 py-5 w-1/2 width'>Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis vehicula enim, non aliquam risus. Sed a tellus quis mi rhoncus dignissim.</p>
            </div>
            <div className='pagination px-32 flex gap-5 items-center justify-center'>
                <img onClick={() => handlePageChange(currentPage - 1)} className='-rotate-90 w-14 h-14 cursor-pointer p-5 rounded-5xl bg-black bg-yellow_hover' src={arrow} alt="arrow_left" />
                {testimonialsToDisplay.map((testimonial, index) => (
                    <div className='bg-black p-5 ' key={index}>
                        <h2 className='text-white text-center text-2xl'>{testimonial.title}</h2>
                        <p className='text-gray-400 leading-8 italic'>{testimonial.description}</p>
                    </div>
                ))}
                <img onClick={() => handlePageChange(currentPage + 1)} className='rotate-90 90 w-14 h-14 cursor-pointer p-5 rounded-5xl bg-black bg-yellow_hover' src={arrow} alt="arrow_left" />
            </div>

        </section>
    );
};

export default Testimonials;
