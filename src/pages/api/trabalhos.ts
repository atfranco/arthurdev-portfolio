// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    res.status(200).json([
      { id: "01", nome: "PlanoACCD" },
      { id: "02", nome: "Layout Eventos" },
      { id: "03", nome: "Marquesi" },
      { id: "04", nome: "Fmmlr" },
      { id: "05", nome: "Loma" },
      { id: "06", nome: "Marquesi" },
    ]);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;