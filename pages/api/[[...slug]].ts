import proxy from '../../src/utils/proxyMiddleware';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse<unknown>) {
  if (process.env.NODE_ENV !== 'development') {
    return res.status(404).json({ message: 'Not found' });
  }

  // @ts-ignore
  return proxy(req, res);
}

export const config = {
  api: {
    bodyParser: false, 
    externalResolver: true, 
  },
};