import { WIKIPEDIA_URL } from "common/utils/api";
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
    .then(async (page) => {
      return {
        breedDescription: await page.summary(),
        breedOrigin: await page.info().then((info) => info.country),
        breedWikiUrl: page.url(),
      };
    });

  res.status(200).json(breed);
}
