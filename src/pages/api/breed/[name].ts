import { WIKIPEDIA_URL } from "common/services/api";
import { NextApiRequest, NextApiResponse } from "next";
import wiki from "wikijs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name } = req.query;

  const breed = await wiki({ apiUrl: WIKIPEDIA_URL })
    // @ts-ignore
    .page(name)
    .then((page) => page.summary());

  res.status(200).json({ breedDescription: breed });
}
