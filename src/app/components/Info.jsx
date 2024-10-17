import Image from "next/image";
import React from "react";

export default function Info() {
    return (
        <section className='bg-orange-500 flex md:flex-row md:px-32 px-5 items-center justify-between flex-col gap-5 py-10'>
            <div className='text-white md:w-1/4 flex flex-col pb-16'>
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
    )
}
