// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    res.status(200).json([
    {
        "id":"01",
        "nome":"Layout Eventos",
        "descricao":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
        "tipo":"Institucional",
        "endereco":"https://layouteventos.com.br",
        "imagem":"layoutnova01.png",
        "logo": "logo-layout.png",
    },
    {
        "id":"02",
        "nome":"Adda Consultoria",
        "descricao":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
        "tipo":"Institucional",
        "endereco":"https://www.addaconsultoria.com.br",
        "imagem":"layoutnova01.png",
        "logo": "",
    },
    {
        "id":"03",
        "nome":"Portal Marquesi",
        "descricao":"The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable",
        "tipo":"Saas",
        "endereco":"https://portal.marquesi.com.br/",
        "imagem":"marquesi01.png",
        "logo": "logo-marquesi.png",
    },
    {
        "id":"04",
        "nome":"PlanoACCD",
        "descricao":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
        "tipo":"Institucional",
        "endereco":"https://planoaccd.com.br",
        "imagem":"planoa01.png",
        "logo": "logo-planoa.png",
    },
    {
        "id":"05",
        "nome":"Loma Advocacia",
        "descricao":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
        "tipo":"Institucional",
        "endereco":"https://reckon.lomaconsultoria.com/",
        "imagem":"loma01.png",
        "logo": "logo-loma.png",
    },
    {
        "id":"06",
        "nome":"Fmmlr Shop",
        "descricao":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
        "tipo":"Ecommerce",
        "endereco":"https://fmmlr.com",
        "imagem":"fmmlr01.png",
        "logo": "logo-fmmlr.png",
    },
    {
        "id":"07",
        "nome":"GrowZero011",
        "descricao":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
        "tipo":"Ecommerce",
        "endereco":"https://growzeroonze.com",
        "imagem":"grow01.png",
        "logo": "logo-growzero.png",
    },
    {
        "id":"08",
        "nome":"Aromaterapia",
        "descricao":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
        "tipo":"Institucional",
        "endereco":"http://aromaterapiabemestar.com.br/",
        "imagem":"aroma01.png",
        "logo": "logo-aromaterapia.png",
    },
    {
        "id":"09",
        "nome":"Cais Shop",
        "descricao":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
        "tipo":"Ecommerce",
        "endereco":"https://caishop.com",
        "imagem":"cais01.png",
        "logo": "logo-caisp.png",
    },
    {
        "id":"10",
        "nome":"Alphaboulder",
        "descricao":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
        "tipo":"Ecommerce",
        "endereco":"https://www.alphaboulder.com.br",
        "imagem":"screen-alphaboulder.jpg",
        "logo": "logo-alphaboulder.webp",
    },
    {
        "id":"11",
        "nome":"Ekopuffs",
        "descricao":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
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