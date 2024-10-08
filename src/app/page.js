"use client";
import Image from 'next/image'
import { useRef } from 'react';


export function MyComponent() {
  const circleLogo = useRef(null);

};


export default function Home() {
  return (
    <>
      <nav className='px-16 py-3 flex justify-between items-center shadow-sm sticky'>
        <Image src='/am logo.png' width={60} height={60} alt='Logo A&M' />
        <div className='md:flex w-full justify-center hidden'>
          <ul className='flex flex-row gap-5 items-center'>
            <li className='hover:text-primary transition duration-200 cursor-pointer'>
              <a href='#'>Soluções</a>
            </li>
            <li className='hover:text-primary transition duration-200 cursor-pointer'>
              <a href='#'>Serviços</a>
            </li>
            <li className='hover:text-primary transition duration-200 cursor-pointer'>
              <a href='#'>Sobre nós</a>
            </li>
          </ul>
        </div>
        <button className='gradient-button'>Demonstração</button>
      </nav>
      <section>
        <div>
          <a href='#' className='cursor-pointer'>
            <video
              src="/video-home.mp4"
              autoPlay
              loop
              muted
              unoptimized
              width="100%"
              height="auto"
              className='md:block hidden'
            >
              Seu navegador não suporta o elemento de vídeo.
            </video>
            <Image src='/banner-mobile.jpg' width={1000} height={600} alt='Banner Mobile' className='md:hidden block' />
          </a>
        </div>
        <div id='home' className='flex flex-col bg-branco sm:h-auto md:flex-row mt-20 items-center px-16 gap-10'>
          <div id='hero-text' className='flex items-center justify-center my-10  md:h-full sm:w-full sm:h-auto md:my-0'>
            <p className='text-2xl font-bold leading-tight md:text-5xl'>Transformando a Gestão Pública com Soluções de Sistema Inovadoras!</p>
          </div>
          <div id='call-to-action' className='flex items-center justify-center h-full  sm:w-full sm:h-auto'>
            <div className='flex flex-col justify-between md:items-start'>
              <p className="drop-shadow-md">Bem-vindo à nossa empresa, onde nos especializamos em fornecer sistemas de gestão de ponta para organizações públicas.
                A nossa missão é agilizar e otimizar os processos da administração pública, tornando-os mais eficientes e transparentes.
                Com nossos produtos inovadores, ajudamos os órgãos públicos a gerenciar suas atividades de compras, incluindo o complexo
                processo de planejamento de licitações. Junte-se a nós hoje e experimente o poder de nossas soluções.</p>
              <button className='gradient-button mt-10'>Demonstração</button>
            </div>
          </div>
        </div>
      </section>
      <section id="s-services" className="md:flex-row flex-col min-h-screen flex justify-between items-center px-16">
        <div className='md:flex md:justify-between justify-center items-center'>
          <div id="products" className=" h-full">
            <div id="products-titlle md:block flex">
              <h2 className="md:w-4/5 md:text-4xl text-3xl md:text-start text-center font-semibold md:pt-0 pt-20">Descubra os recursos poderosos dos nossos softwares de gestão pública em licitações</h2>
              <p className="md:w-4/5 text-md mt-6 md:text-start text-center">Nossos softwares oferecem soluções abrangentes para uma gestão pública eficiente, agilizando processos e aumentando a transparência.</p>
            </div>
            <div id="products-description" className="mt-16 md:flex">
              <div className="md:block flex items-center justify-center flex-col">
                <a href="#"><Image className="my-5" src={"/sublogo-pg.png"} width={50} height={1} alt="sublogo Preparagov" /></a>
                <a href="#"><h3 className="font-bold text-lg my-3 md:text-start text-center">Planejamento licitatório</h3></a>
                <p className="w-11/12 md:text-start text-center">Otimize o seu Plano de Contratações Anual com nossas ferramentas de gerenciamento intuitivas e personalizáveis.</p>
                <a href="#">
                  <button className="gradient-button mt-3">
                    Saiba mais</button>
                </a>
              </div>
              <div className="md:block flex items-center justify-center flex-col">
                <a href="#"><Image className="mt-6" src={"/sublogo-mf.png"} width={40} height={1} alt="sublogo Preparagov" /></a>
                <a href="#"><h3 className="font-bold text-lg my-3 md:text-start ">Captação de orçamentos</h3></a>
                <p className="w-11/12 md:text-start text-center">Gerencie e acompanhe orçamentos para suas requisições, garantindo conformidade e eficiência.</p>
                <a href="#">
                  <button className="gradient-button mt-3">
                    Saiba mais</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div className='carrossel bg-white md:flex hidden shadow-xl rounded-lg relative overflow-hidden'>
            <div className='circulo absolute w-40 h-40 bg-transparent rounded-full -top-20 -left-20'></div>
            <div className='pentagono bg-primary w-28 h-28 absolute -bottom-12 -left-8 rotate-12'></div>
            <div className='circulo absolute w-40 h-40 bg-transparent rounded-full top-10 right-0 bg-white z-30'></div>
            <div className='arch-up absolute rounded-full top-20 right-8'></div>
            <h1 className='absolute font-bold text-5xl top-24 left-10'>Média Fácil</h1>
            <p className='absolute top-40 w-80 left-10'>O Média Fácil tem como diferencial a captação personalizada para o seu município, tranzendo em até 10 dias
              úteis os orçamentos solicitados direto de fornecedores internos. Também há a possibilidade de conseguir
              orçamentos com o Portal Nacional de Contratações Públicas (PNCP) e o Banco de Preços em Saúde (BPS).</p>
            <button className='gradient-button mt-10 absolute bottom-10 left-32'>Demonstração</button>
            <Image src='/sublogo-mf.png' width={80} height={80} alt='Logo Média Fácil' className='card-mf absolute right-10 z-50' />
          </div>
        </div>
      </section>

    </>
  )
}
