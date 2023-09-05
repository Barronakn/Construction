import React, { useEffect, useState } from 'react';
import Logo from '../../../public/assets/logo-icon.png';
import { Link, usePage } from '@inertiajs/react';
import Menu_icon from "../../../public/assets/menu_icon.png";

const Nav = () => {

    //Apparution du menu
    const [click, setClick] = useState(false);


    const navbar = document.querySelector(".navbar");
    const menu_icon = document.querySelector(".menu-icon");
    const remove_icon = document.querySelector(".remove-icon");

    const handleClick = () => {
        setClick();
        navbar.style.display = "block"
        menu_icon.style.display = "none"
        remove_icon.style.display = "block"
    }

    const handleClickRemove = () => {
        setClick(false);
        navbar.style.display = "none"
        menu_icon.style.display = "block"
        remove_icon.style.display = "none"

    }

    const { url } = usePage();
    const navLinks = [
        { name: "Home", url: "/", },
        { name: "About Us *", url: "/#about", },
        { name: "Services", url: "/#services", },
        { name: "Our Work", url: "/#work", },
        { name: "Testimonials", url: "/#testimonials", },
        { name: "Price", url: "/#price", },
        { name: "Contact Us", url: "/#contact", },
    ];

    //Fixer le menu au défilement
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(
        () => {
            window.addEventListener("scroll", handleScroll);

            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }, []);

    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };

    const navbarStyle = {
        background: scrollPosition > 10 ? "black" : "rgba(0, 0, 0, 0.2)",
    };

    return (
        <div style={navbarStyle} className='menu fixed font-bold text-white uppercase justify-evenly flex w-full py-4 items-center'>
            <Link href='/' className="logo flex gap-2 items-center">
                <img className='w-14 h-14' src={Logo} alt="logo-img" />
                <p className='text-2xl'>Constructed</p>
            </Link>

            <div onClick={handleClick} className="menu-icon none cursor-pointer">
                <img loading='lazy' src={Menu_icon} alt="menu-icon" />
            </div>

            <nav className='navbar'>
                <ul className='flex gap-6'>
                    <span onClick={handleClickRemove} className='text-2xl none remove-icon'>×</span>
                    {
                        navLinks.map((link, index) => (
                            click ?
                                (<li key={index}>
                                    <a className={url === link.url ? "active" : ""} href={link.url}>{link.name}</a>
                                </li>)
                                :
                                (<li key={index}>
                                    <a className={url === link.url ? "active" : ""} href={link.url}>{link.name}</a>
                                </li>)
                        ))
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Nav;
