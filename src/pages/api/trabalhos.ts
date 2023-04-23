// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    res.status(200).json([
    {
        "id":"01",
        "nome":"Layout Eventos",
        "descricao":"Site institucional inicialmente criei ele em 2018 e passou por uma renovação de layout e funções, está em sua segunda versão com um layout moderno junto de um gerenciamento/atualização dos projeto por parte de postagens do cliente",
        "tipo":"Institucional",
        "endereco":"https://layouteventos.com.br",
        "imagem":"layoutnova01.png",
        "logo": "logo-layout.png",
    },
    {
        "id":"02",
        "nome":"Adda Consultoria",
        "descricao":"Site criado para demonstrar os trabalhos da consultoria, sua expertise e equipe técnica de Geólogos",
        "tipo":"Institucional",
        "endereco":"https://www.addaconsultoria.com.br",
        "imagem":"adda01.png",
        "logo": "logo-adda.png",
    },
    {
        "id":"03",
        "nome":"Portal Marquesi",
        "descricao":"Portal do cliente foi criado para troca de informações e gerenciamento dos processos judiciais administrados pelo Escritório (CRUD - Create Read Update Delete)",
        "tipo":"Saas",
        "endereco":"https://portal.marquesi.com.br/",
        "imagem":"marquesi01.png",
        "logo": "logo-marquesi.png",
    },
    {
        "id":"04",
        "nome":"PlanoACCD",
        "descricao":"Site criado para marcar uma nova fase do escritório focado na era digital com chatbot e portal do cliente.",
        "tipo":"Institucional",
        "endereco":"https://planoaccd.com.br",
        "imagem":"planoa01.png",
        "logo": "logo-planoaccd.png",
    },
    {
        "id":"05",
        "nome":"PlanoACCD",
        "descricao":"Identidade Visual criada para marcar uma nova fase do escritório focado na era digital.",
        "tipo":"Institucional",
        "endereco":"https://planoaccd.com.br",
        "imagem":"planoa02.png",
        "logo": "logo-planoaccd.png",
    },
    {
        "id":"06",
        "nome":"Loma Advocacia",
        "descricao":"Sistema (CRUD) criado para gerenciamento e direcionamento de processos trabalhistas aos calculistas da equipe.",
        "tipo":"Institucional",
        "endereco":"https://reckon.lomaconsultoria.com/",
        "imagem":"loma01.png",
        "logo": "logo-loma.png",
    },
    {
        "id":"07",
        "nome":"Fmmlr Shop",
        "descricao":"Ecommerce criado para venda dos produtos da marca, conta com ERP Bling na administração, notas fiscais e anuncio/gerenciamento de produtos em Marketplaces ",
        "tipo":"Ecommerce",
        "endereco":"https://fmmlr.com",
        "imagem":"fmmlr01.png",
        "logo": "logo-fmmlr.png",
    },
    {
        "id":"08",
        "nome":"GrowZero011",
        "descricao":"Ecommerce criado para venda dos produtos da marca",
        "tipo":"Ecommerce",
        "endereco":"https://growzeroonze.com",
        "imagem":"grow01.png",
        "logo": "logo-growzero.png",
    },
    {
        "id":"09",
        "nome":"Aromaterapia",
        "descricao":"Pagina com foco em infoproduto destinado a Aromaterapia e bem estar, focando em uma comunicação direta com gatilhos de venda",
        "tipo":"Institucional",
        "endereco":"http://aromaterapiabemestar.com.br/",
        "imagem":"aroma01.png",
        "logo": "logo-aromaterapia.png",
    },
    {
        "id":"10",
        "nome":"Cais Shop",
        "descricao":"Ecommerce criado para venda dos produtos da marca",
        "tipo":"Ecommerce",
        "endereco":"https://caishop.com",
        "imagem":"cais01.png",
        "logo": "logo-cais.png",
    },
    {
        "id":"11",
        "nome":"Alphaboulder",
        "descricao":"Ecommerce criado para venda dos produtos da marca, um dos primeiros que eu fiz",
        "tipo":"Ecommerce",
        "endereco":"https://www.alphaboulder.com.br",
        "imagem":"screen-alphaboulder.jpg",
        "logo": "logo-alphaboulder.webp",
    },
    {
        "id":"12",
        "nome":"Ekopuffs",
        "descricao":"Ecommerce criado para venda dos produtos da marca",
        "tipo":"Ecommerce",
        "endereco":"https://www.ekopuffs.com.br",
        "imagem":"ekopuffs-screen.jpg",
        "logo": "logo-eko.png",
    },
]);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;