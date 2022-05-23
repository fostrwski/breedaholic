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
    .search(name + " dog")
    .then((data) =>
      wiki({ apiUrl: WIKIPEDIA_URL })
        .page(data.results[0])
        .then(async (page) => {
          return {
            breedDescription: await page.summary(),
            // @ts-ignore
            breedOrigin: await page.info().then((info) => info.country),
            breedWikiUrl: page.url(),
          };
        })
        .catch((error) => {
          console.error(error);
        })
    );
  res.status(200).json(breed);
}
