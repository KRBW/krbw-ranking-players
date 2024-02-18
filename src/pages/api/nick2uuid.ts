import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  ok: boolean;
  data: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const query = req.query;
  const nick = query.nick ?? "";

  try {
    const response = await fetch(
      `https://api.mojang.com/users/profiles/minecraft/${nick}`
    );
    if (response.ok) {
      const json = await response.json();
      const uuid = json.id;
      res.status(200).json({ ok: true, data: uuid });
    } else {
      res.status(200).json({ ok: true, data: "NULL" });
    }
  } catch (error) {
    console.log(`nick2uuid 중 에러 : ${error}`);
    res.status(500).json({ ok: false, data: "ERROR" });
  }
}
