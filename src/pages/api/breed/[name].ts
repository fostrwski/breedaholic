import { NextApiRequest, NextApiResponse } from "next";
import wiki from "wikijs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name } = req.query;

  const breed = await wiki({ apiUrl: "https://en.wikipedia.org/w/api.php" })
    // @ts-ignore
    .page(name)
    .then((page) => page.summary());

  res.status(200).json({ breedDescription: breed });
}
