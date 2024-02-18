// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  ok: boolean;
  data: string[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    // 플레이어 데이터 텍스트 파일 불러오기
    const response = await fetch("http://koreahypixellist.kro.kr/");
    const text = await response.text();

    // 정규 표현식으로 <p> 태그 안에 있는 텍스트 추출
    const regex = /<p>(.*?)<\/p>/;
    const match = regex.exec(text);
    const extractedText = match ? match[1].trim() : "";

    const uuidList = extractedText.split(" ");

    res.status(200).json({ ok: true, data: uuidList });
  } catch (err) {
    console.log("player uuid list를 불러오는 데 오류 발생: " + err);
    res.status(500).json({ ok: false, data: [] });
  }
}
