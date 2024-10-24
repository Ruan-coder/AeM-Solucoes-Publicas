// components/HeroSection.js
import Image from 'next/image';
import React from 'react';

export default function HeroSection() {
    return (
        <section id='home' className='py-16'>
            <div>
                <a href='#' className='cursor-pointer'>
                    <video
                        src="/video-home.mp4"
                        autoPlay
                        loop
                        muted
                        width="100%"
                        height="auto"
                        className='md:block hidden'
                    >
                        Seu navegador não suporta o elemento de vídeo.
                    </video>
                    <Image src='/banner-mobile.jpg' width={1000} height={600} alt='Banner Mobile' className='md:hidden block' />
                </a>
            </div>
            <div className='flex flex-col bg-branco sm:h-auto md:flex-row mt-20 items-center px-16 gap-10'>
                <div id='hero-text' className='flex items-center justify-center my-10  md:h-full sm:w-full sm:h-auto md:my-0'>
                    <p className='text-2xl font-bold leading-tight md:text-5xl'>Transforme a administração pública com sistemas inovadores!</p>
                </div>
                <div id='call-to-action' className='flex items-center justify-center h-full  sm:w-full sm:h-auto'>
                    <div className='flex flex-col justify-between md:items-start'>
                        <p>Bem-vindo à nossa empresa, onde nos especializamos em fornecer sistemas de gestão de ponta para organizações públicas.
                            A nossa missão é agilizar e otimizar os processos da administração pública, tornando-os mais eficientes e transparentes.
                            Com nossos produtos inovadores, ajudamos os órgãos públicos a gerenciar suas atividades de compras, incluindo o complexo
                            processo de planejamento de licitações. Junte-se a nós hoje e experimente o poder de nossas soluções.</p>
                        <a href="https://api.whatsapp.com/send/?phone=5533998054380&text&type=phone_number&app_absent=0" target='blank'><button className='gradient-button mt-10'>Demonstração</button></a>
                    </div>
                </div>
            </div>
        </section>
    );
}
