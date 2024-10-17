import React from "react";
import Image from "next/image";

export default function Footer() {
    return (
        <>
            <section className="footer1 overflow-hidden relative mt-10">
                <div className="absolute inset-0 z-10 transition-transform duration-500 ease-in-out zoom">
                    <Image
                        src={'/team-work.jpg'}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="top"
                        alt=""
                    />
                </div>
                <div className="py-28 relative z-30">
                    <h1 className="text-white px-5 md:px-16 my-3 text-3xl font-bold">Descubra o poder das nossas soluções</h1>
                    <p className="text-white px-5 md:px-16 my-3">Facilite os processos com sistemas inovadores para gestão pública</p>
                    <div className="px-5 md:px-16 my-3">
                        <button className="gradient-button">Demonstração</button>
                        <button
                            className="text-white py-3 px-4 rounded-lg border bg transition duration-300 ease ml-3
                            hover:bg-white hover:text-black hover:font-bold">
                            Saiba mais
                        </button>
                    </div>
                </div>
            </section>
            <section className="p-16">
                <div className="flex md:flex-row flex-col justify-between">
                    <div className="">
                        <Image src={'/aem logo full.png'} width={150} height={100} alt="logo" />
                        <div className="my-10">
                            <h6 className="font-bold py-3">Endereço</h6>
                            <p>Rua Francisco Neiva, 107 - Apto 01, Centro, Medina-MG</p>
                        </div>
                        <div>
                            <h6 className="font-bold py-3">Contato</h6>
                            <p>(33) 3753-2822</p>
                        </div>
                        <div className="flex flex-row gap-3 my-10">
                            <a href=""><Image src={'/youtube.png'} width={50} height={30} alt="youtube" /></a>
                            <a href="" className="flex items-center"><Image src={'/instagram.png'} width={30} height={30} alt="instagram" /></a>
                        </div>
                    </div>
                    <div className="md:block hidden">
                        <ul className="m-32 gap-10 grid">
                            <li><a href="#nav">Home</a></li>
                            <li><a href="#s-services">Serviços</a></li>
                            <li><a href="#produtos">Produtos</a></li>
                        </ul>
                    </div>
                </div>
                <div className="w-full h-[1px] bg-zinc-600 my-10"></div>
                <div className="text-sm flex flex-row justify-between ">
                    <div >&copy; <a href="https://www.linkedin.com/in/ruancostaarag%C3%A3obb60581a1/" target="blank">2024 Ruan Costa Aragão</a></div>
                    <div className="md:block hidden">
                        <a href="">Politica de privacidade</a>
                        <a href="" className="mx-5">Termos de serviço</a>
                        <a href="">Configuração de cookies</a>
                    </div>
                </div>
            </section>
        </>
    );
}
