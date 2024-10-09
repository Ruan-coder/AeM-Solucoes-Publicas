"use client";
import Image from 'next/image';
import React from 'react';



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
      <section id="s-services" className="md:flex-row flex-col min-h-screen flex justify-between items-center px-16 mt-10">
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
      <section className='h-96 bg-orange-500 flex flex-row px-32 items-center justify-between'>
        <div className='text-white w-1/4 flex flex-col py-16'>
          <h1 className='text-3xl'>Melhore a gestão de licitações no seu orgão público</h1>
          <p className='my-5'>Automatize o planejamento de licitações e facilite as compras públicas com nossos sistemas</p>
          <div>
            <a href="" className='w-44 px-3 py-2 flex flex-row items-center gradient-button rounded-lg '>
              Ver soluções
              <Image
                src={'/seta direita.svg'}
                width={20}
                height={10}
                alt='->' className='ml-3' />
            </a>
          </div>
        </div>
        <div className='w-80 h-80 rounded-lg shadow-xl glass px-5 py-5 text-white flex flex-col justify-between'>
          <h2 className='text-xl font-bold'>Plano de Contratações Anual automático</h2>
          <p className='text-sm '>Gere seu Plano de Contratações Anual com apenas 1 clique! Nosso sistema
            automatiza a criação do Plano Anual a partir da criação dos DFDs, trazendo celeridade e organização
            para seu orgão público
          </p>
          <button className='flex flex-row items-center borda relative w-32'>Demonstração
            <Image
              src={'/seta direita.svg'}
              width={20}
              height={10}
              alt='->' className='' /></button>
        </div>
        <div className='w-80 h-80 rounded-lg shadow-xl glass px-5 py-5 text-white flex flex-col justify-between'>
          <h2 className='text-xl font-bold'>Orçamentos direto de fornecedores</h2>
          <p className='text-sm '> A lei não extingue a possibilidade de conseguir
            cotações com fornecedores, desde que seja apresentada justificativa da
            escolha desses fornecedores e que não tenham sido obtidos os orçamentos
            com mais de 6 (seis) meses de antecedência da data de divulgação do edital
          </p>
          <button className='flex flex-row items-center borda relative w-32'>Demonstração
            <Image
              src={'/seta direita.svg'}
              width={20}
              height={10}
              alt='->' className='' /></button>
        </div>
      </section >
      <section className='px-16 mt-32'>
        <div className='flex flex-row justify-between'>
          <div>
            <h3 className='font-medium'>Eficiência</h3>
            <h1 className='font-bold text-5xl pr-10 mt-5'>A solução para pesquisa de preços em compras públicas</h1>
          </div>
          <p className='w-2/3'>Automatize e compare preços de forma eficiente, garantindo transparência e economia nas aquisições do setor público. Com o
            Média Fácil você recebe orçamentos direto de fornecedores em até 15 dias úteis! Além de orçamentos com PNCP e BPS.
          </p>
        </div>
        <div className='grid grid-cols-3 justify-between items-center gap-24 mt-32'>
          <div className='grid grid-rows-3 h-48'>
            <span>1</span>
            <h3 className='font-bold'>Integração de setores</h3>
            <p>Coordenção entre diferentes departamentos ou setores, com o objetivo de otimizar processos, melhorar a comunicação e alinhar esforços
              para alcançar objetivos comuns.</p>
          </div>
          <div className='grid grid-rows-3 h-48'>
            <span>2</span>
            <h3 className='font-bold'>Documentos padronizados</h3>
            <p>Nosso sistema oferece documentos padronizados com opções de personalização, proporcionando um processo mais confiável, ágil e organizado</p>
          </div>
          <div className='grid grid-rows-3 h-48'>
            <span>3</span>
            <h3 className='font-bold'>Integração de setores</h3>
            <p>Coordenção entre diferentes departamentos ou setores, com o objetivo de otimizar processos, melhorar a comunicação e alinhar esforços
              para alcançar objetivos comuns.</p>
          </div>
        </div>
        <button className='my-20 gradient-button'>Saiba mais</button>
      </section>
    </>
  );
}
