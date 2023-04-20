// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    res.status(200).json([
      { "id": "01", "nome": "Layout Eventos", "descricao": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout", "tipo": "Site Institucional", "endereco": "https://layouteventos.com.br", "imagem": "layoutnova01.png" },
      { "id": "02", "nome": "Portal Marquesi", "descricao": "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable", "tipo": "Saas", "endereco": "https://marquesi.com.br", "imagem": "marquesi01.png" },
      { "id": "03", "nome": "PlanoACCD", "descricao": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout", "tipo": "Site Institucional", "endereco": "https://planoaccd.com.br", "imagem": "planoa01.png" },
      { "id": "04", "nome": "Loma Advocacia", "descricao": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout", "tipo": "Site Institucional", "endereco": "https://loma.com.br", "imagem": "loma01.png" },
      { "id": "05", "nome": "Fmmlr Shop", "descricao": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout", "tipo": "Ecommerce", "endereco": "https://fmmlr.com", "imagem": "fmmlr01.png" },
      { "id": "06", "nome": "GrowZero011", "descricao": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout", "tipo": "Ecommerce", "endereco": "https://growzeroonze.com", "imagem": "grow01.png" },
      { "id": "07", "nome": "Aromaterapia", "descricao": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout", "tipo": "Site Institucional", "endereco": "https://planoaccd.com.br", "imagem": "aroma01.png" },
      { "id": "08", "nome": "Cais Shop", "descricao": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout", "tipo": "Ecommerce", "endereco": "https://planoaccd.com.br", "imagem": "cais01.png" },
      { "id": "09", "nome": "Alphaboulder", "descricao": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout", "tipo": "Ecommerce", "endereco": "https://planoaccd.com.br", "imagem": "screen-alphaboulder.jpg" },
      { "id": "10", "nome": "Ekopuffs", "descricao": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout", "tipo": "Ecommerce", "endereco": "https://planoaccd.com.br", "imagem": "ekopuffs-screen.jpg" }
    ]);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;