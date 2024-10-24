import Image from 'next/image';
import React, { useState } from 'react';

export default function Services() {
    const [activeIndex, setActiveIndex] = useState(0);

    const slides = [
        {
            title: "PreparaGov",
            description: "Descubra a eficiência que o PreparaGov pode oferecer para sua gestão. O seu sistema ideal para gerar documentos, simplificar processos e integrar setores. O sistema gera documentos importantes para a fase preparatória em conformidade com a NLLC 14.133/2021 e integra os setores responsáveis por cada fase do processo preliminar de uma licitação.",
            logo: "/sublogo-pg.png",
        },
        {
            title: "Média Fácil",
            description: "O Média Fácil tem como diferencial a captação personalizada para o seu município, trazendo em até 10 dias úteis os orçamentos solicitados direto de fornecedores internos. Também há a possibilidade de conseguir orçamentos com o Portal Nacional de Contratações Públicas (PNCP) e o Banco de Preços em Saúde (BPS).",
            logo: "/sublogo-mf.png",
        },
    ];

    const totalSlides = slides.length;

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    };

    return (
        <section id="s-services" className="bg-zinc-50 md:flex-row flex-col min-h-screen flex justify-between items-center px-16 py-10">
            <div className="md:flex md:justify-between justify-center items-center w-full md:w-1/2">
                <div id="products" className="w-full h-full">
                    <div id="products-title" className="md:block flex flex-col items-center text-center">
                        <h2 className="md:w-4/5 md:text-4xl text-3xl font-semibold md:pt-0 pt-20">
                            Descubra os recursos poderosos dos nossos softwares de gestão pública em licitações
                        </h2>
                        <p className="md:w-4/5 text-md mt-6">
                            Nossos softwares oferecem soluções abrangentes para uma gestão pública eficiente, agilizando processos e aumentando a transparência.
                        </p>
                    </div>
                    <div id="products-description" className="mt-16 flex flex-col md:flex-row items-center justify-around">
                        <div className="md:block flex items-center justify-center flex-col text-center md:text-left">
                            <a href="#"><Image className="my-5" src={"/sublogo-pg.png"} width={50} height={1} alt="sublogo Preparagov" /></a>
                            <a href="#"><h3 className="font-bold text-lg my-3">Planejamento licitatório</h3></a>
                            <p className="w-11/12">Otimize o seu Plano de Contratações Anual com nossas ferramentas de gerenciamento intuitivas e personalizáveis.</p>
                            <a href="#"><button className="gradient-button mt-3">Saiba mais</button></a>
                        </div>
                        <div className="md:block flex items-center justify-center flex-col text-center md:text-left">
                            <a href="#"><Image className="mt-6" src={"/sublogo-mf.png"} width={40} height={1} alt="sublogo Média Fácil" /></a>
                            <a href="#"><h3 className="font-bold text-lg my-3">Captação de orçamentos</h3></a>
                            <p className="w-11/12">Gerencie e acompanhe orçamentos para suas requisições, garantindo conformidade e eficiência.</p>
                            <a href="#"><button className="gradient-button mt-3">Saiba mais</button></a>
                        </div>
                    </div>
                </div>
            </div>

            <div id='carousel' className="md:block hidden relative w-full md:w-1/2 h-auto overflow-hidden shadow-xl">
                <button onClick={prevSlide} className=" absolute top-1/2 left-0 text-primary bg-zinc-100 hover:bg-zinc-200 ml-2 p-2 rounded-full transform -translate-y-1/2 z-10">❮</button>

                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeIndex * 100}%)`, width: `${totalSlides * 100}%` }}>
                    {slides.map((slide, index) => (
                        <div key={index} className="flex-shrink-0 w-full h-[500px] shadow-xl rounded-lg relative bg-white overflow-hidden p-10 flex flex-col justify-between">
                            <div className="flex flex-col items-start">
                                <Image src={slide.logo} width={80} height={80} alt={`Logo ${slide.title}`} className="top-10 absolute left-[80px]" />
                                <h1 className="absolute font-bold text-5xl top-36 left-20 ">{slide.title}</h1>
                                <p className="absolute top-52 w-[500px] left-20">{slide.description}</p>
                            </div>
                            <button className="gradient-button mt-10 absolute bottom-10 left-20">Demonstração</button>
                        </div>
                    ))}
                </div>

                <button onClick={nextSlide} className=" absolute top-1/2 right-0 text-primary bg-zinc-100 hover:bg-zinc-200 mr-2 p-2 rounded-full transform -translate-y-1/2 z-10">❯</button>
            </div>
        </section>
    );
}
