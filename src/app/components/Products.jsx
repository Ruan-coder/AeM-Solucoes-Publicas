import Image from "next/image";
import React from "react";

export default function Products() {
    return (
        <>
            <section id="produtos" className='md:px-16 md:py-32 py-20 px-5'>
                <div className='grid md:grid-rows-1 grid-rows-2 md:mb-40 mb-20'>
                    <div>
                        <h3 className='font-medium text-primary flex flex-row'><Image src={'/sublogo-pg.png'} width={20} height={20} alt="preparagov" /> <span className="ml-1">Planejamento</span></h3>
                        <h1 className='font-bold md:text-5xl text-4xl pr-10 mt-5'>Planejamento eficiente</h1>
                    </div>
                    <p>O PreparaGov é um sistema que automatiza a fase preparatória de uma licitação,
                        sendo agora na Nova Lei de Licitações e Contratos uma ferramenta de governança do município.
                        Ele simplifica esse processo, garantindo que todos os detalhes importantes estejam claros e corretos,
                        o que é essencial para uma licitação bem-sucedida.
                    </p>
                </div>
                <div id='info' className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-10'>
                    <div>
                        <span><Image src={'/integration.svg'} width={50} height={50} alt='setores' /></span>
                        <h3 className='font-bold text-primary py-3'>Integração de setores</h3>
                        <p>Coordenação entre diferentes departamentos ou setores, com o objetivo de otimizar processos,
                            aprimorar a comunicação e alinhar esforços para atingir metas comuns de forma eficiente.</p>
                    </div>
                    <div>
                        <span><Image src={'/doc.svg'} width={50} height={50} alt='setores' /></span>
                        <h3 className='font-bold text-primary py-3'>Documentos padronizados</h3>
                        <p>Nosso sistema oferece documentos padronizados com opções de personalização, proporcionando um
                            processo mais confiável, ágil e organizado. Além disso, permite a personalização dentro dos padrões estabelecidos,
                            garantindo flexibilidade sem comprometer a eficiência.
                        </p>
                    </div>
                    <div>
                        <span><Image src={'/automation.svg'} width={50} height={50} alt='setores' /></span>
                        <h3 className='font-bold text-primary py-3'>Automação de processos</h3>
                        <p>Crie seu Plano de Contratações Anual em apenas 2 cliques a partir das requisições feitas nos DFDs.
                            Facilite a elaboração de ETPs de maneira rápida e simplificada. Elabore termos de referência em tempo hábil,
                            selecionando apenas opções pré-definidas, otimizando o processo com eficiência.
                        </p>
                    </div>
                </div>
                <button className='gradient-button mt-10'>Saiba mais</button>
            </section>

            <section className='md:px-16 md:py-32 py-20 px-5 bg-zinc-50'>
                <div className='grid md:grid-rows-1 grid-rows-2 md:mb-40 mb-20'>
                    <div>
                        <h3 className='font-medium text-primary flex flex-row '><Image src={'/sublogo-mf.png'} width={18} height={20} alt="media-facil"/><span className="ml-1">Eficiência</span></h3>
                        <h1 className='font-bold md:text-5xl text-3xl my-5'>A solução para pesquisa de preços em compras públicas</h1>
                    </div>
                    <p>Automatize e compare preços de forma eficiente, garantindo transparência e economia nas aquisições do setor público. Com o
                        Média Fácil você recebe orçamentos direto de fornecedores em até 15 dias úteis! Além de orçamentos com PNCP e BPS.
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-10'>
                    <div className=''>
                        <span><Image src={'/watch.svg'} width={50} height={50} alt='relogio' /></span>
                        <h3 className='font-bold text-primary py-3'>Orçamentos em tempo real</h3>
                        <p>Com o Média Fácil, você pode obter orçamentos com poucos cliques diretamente de nosso
                            banco de dados. Os orçamentos são emitidos com carimbo e assinatura de fornecedores reais,
                            garantindo preços confiáveis para sua licitação.
                        </p>
                    </div>
                    <div className=''>
                        <span><Image src={'/list.svg'} width={50} height={50} alt='list' /></span>
                        <h3 className='font-bold text-primary py-3'>Várias formas de captação</h3>
                        <p>Nosso sistema oferece diversas formas de captação de orçamento. Você pode obter orçamentos de fornecedores internos,
                            acompanhados pela ata de formação da cesta de preços, validando esses valores. Além disso, o sistema também permite a
                            captação de orçamentos via PNCP e BPS, ampliando suas opções com segurança e eficiência.
                        </p>
                    </div>
                    <div className=''>
                        <span><Image src={'/add.svg'} width={50} height={50} alt='add' /></span>
                        <h3 className='font-bold text-primary py-3'>Inclusão de itens</h3>
                        <p>Nosso banco de dados conta com uma ampla variedade de produtos já cadastrados.
                            No entanto, você também pode incluir seus próprios itens com descrições personalizadas.
                            Nesses casos, o orçamento será concluído em até 15 dias, proporcionando flexibilidade e
                            agilidade ao processo.
                        </p>
                    </div>
                </div>
                <button className='gradient-button mt-10'>Saiba mais</button>
            </section>

        </>
    )
}
