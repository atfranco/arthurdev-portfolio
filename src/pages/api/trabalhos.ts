// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    res.status(200).json([
    {
        "id":"01",
        "nome":"Layout Eventos",
        "descricao":"Site institucional inicialmente criado em 2018 passou por uma renovação de layout e funções, está em sua segunda versão com um layout mais moderno e atual",
        "tipo":"Institucional",
        "endereco":"https://layouteventos.com.br",
        "imagem":"layoutnova01.png",
        "logo": "logo-layout.png",
    },
    {
        "id":"02",
        "nome":"Adda Consultoria",
        "descricao":"Site criado para demonstrar os trabalhos, a equipe e expertise dos seus Geólogos",
        "tipo":"Institucional",
        "endereco":"https://www.addaconsultoria.com.br",
        "imagem":"layoutnova01.png",
        "logo": "logo-adda.png",
    },
    {
        "id":"03",
        "nome":"Portal Marquesi",
        "descricao":"Portal do cliente foi criado para troca de informações e gerenciamento dos processos judiciais administrados pelo Escritório",
        "tipo":"Saas",
        "endereco":"https://portal.marquesi.com.br/",
        "imagem":"marquesi01.png",
        "logo": "logo-marquesi.png",
    },
    {
        "id":"04",
        "nome":"PlanoACCD",
        "descricao":"Site e identidade visual criados para marcar uma nova fase do escritório focado na era digital com chatbot e portal do cliente.",
        "tipo":"Institucional",
        "endereco":"https://planoaccd.com.br",
        "imagem":"planoa01.png",
        "logo": "logo-planoaccd.png",
    },
    {
        "id":"05",
        "nome":"Loma Advocacia",
        "descricao":"Sistema criado para gerenciamento e direcionamento de processos trabalhistas aos calculistas da equipe.",
        "tipo":"Institucional",
        "endereco":"https://reckon.lomaconsultoria.com/",
        "imagem":"loma01.png",
        "logo": "logo-loma.png",
    },
    {
        "id":"06",
        "nome":"Fmmlr Shop",
        "descricao":"Ecommerce criado para venda dos produtos da marca, conta com ERP Bling na administração, notas fiscais e anuncio de produtos em Marketplaces ",
        "tipo":"Ecommerce",
        "endereco":"https://fmmlr.com",
        "imagem":"fmmlr01.png",
        "logo": "logo-fmmlr.png",
    },
    {
        "id":"07",
        "nome":"GrowZero011",
        "descricao":"Ecommerce criado para venda dos produtos da marca",
        "tipo":"Ecommerce",
        "endereco":"https://growzeroonze.com",
        "imagem":"grow01.png",
        "logo": "logo-growzero.png",
    },
    {
        "id":"08",
        "nome":"Aromaterapia",
        "descricao":"Infoproduto destinado a Aromaterapia e bem estar, focando em uma comunicação direta com gatilhos de venda",
        "tipo":"Institucional",
        "endereco":"http://aromaterapiabemestar.com.br/",
        "imagem":"aroma01.png",
        "logo": "logo-aromaterapia.png",
    },
    {
        "id":"09",
        "nome":"Cais Shop",
        "descricao":"Ecommerce criado para venda dos produtos da marca",
        "tipo":"Ecommerce",
        "endereco":"https://caishop.com",
        "imagem":"cais01.png",
        "logo": "logo-cais.png",
    },
    {
        "id":"10",
        "nome":"Alphaboulder",
        "descricao":"Ecommerce criado para venda dos produtos da marca, um dos primeiros que eu fiz",
        "tipo":"Ecommerce",
        "endereco":"https://www.alphaboulder.com.br",
        "imagem":"screen-alphaboulder.jpg",
        "logo": "logo-alphaboulder.webp",
    },
    {
        "id":"11",
        "nome":"Ekopuffs",
        "descricao":"Ecommerce criado para venda dos produtos da marca",
        "tipo":"Ecommerce",
        "endereco":"https://www.ekopuffs.com.br",
        "imagem":"ekopuffs-screen.jpg",
        "logo": "logo-eko.png",
    }
]);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;