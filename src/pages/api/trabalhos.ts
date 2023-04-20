// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    res.status(200).json([
      { id: "01", nome: "PlanoACCD", descricao: 'desc PlanAbc' },
      { id: "02", nome: "Layout Eventos", descricao: 'desc layout' },
      { id: "03", nome: "Marquesi", descricao: 'desc marquesi' },
      { id: "04", nome: "Fmmlr", descricao: 'desc fmmlr' },
      { id: "05", nome: "Loma", descricao: 'desc loma' },
      { id: "07", nome: "Marquesi", descricao: 'desc marquesi' },
      { id: "08", nome: "Marquesi", descricao: 'desc marquesi' },
      { id: "09", nome: "Marquesi", descricao: 'desc marquesi' },
      { id: "10", nome: "Marquesi", descricao: 'desc marquesi' },
    ]);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;