// components/Navbar.js
import Image from 'next/image';
import React from 'react';

export default function Navbar() {
    return (
        <>
            <nav id='nav' className='nav md:px-16 px-10 py-3 flex justify-between items-center shadow-sm sticky'>
                <Image src='/am logo.png' width={60} height={60} alt='Logo A&M' />
                <div className='md:flex w-full justify-center hidden'>
                    <ul className='flex flex-row gap-5 items-center'>
                        <li className='hover:text-primary transition duration-200 cursor-pointer'>
                            <a href='#s-services'>Serviços</a>
                        </li>
                        <li className='hover:text-primary transition duration-200 cursor-pointer'>
                            <a href='#produtos'>Soluções</a>
                        </li>
                        <li className='hover:text-primary transition duration-200 cursor-pointer'>
                            <a href='#'>PreparaGov</a>
                        </li>
                        <li className='hover:text-primary transition duration-200 cursor-pointer'>
                            <a href='#'>Média Fácil</a>
                        </li>
                    </ul>
                </div>
                <button className='gradient-button2'>Demonstração</button>
            </nav>
        </>
    );
}
