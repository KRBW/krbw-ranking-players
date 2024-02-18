import Head from "next/head";
import { useEffect, useState } from "react";
import * as S from "@/styles/index.styled";

export default function Home() {
  const [uuidList, setUuidList] = useState<string[]>([]);

  const getUUIDs = async () => {
    const response = await fetch("/api/getuuids");
    const json = await response.json();
    setUuidList(json.data);
  };

  useEffect(() => {
    getUUIDs();
  }, []);

  return (
    <>
      <Head>
        <title>KRBW Ranking Player List</title>
        <meta
          name="KRBW Ranking Player List"
          content="Hello, KRBW!"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <S.Main>
        <S.ListWrapper>
          <S.ListTitle>{`등록된 UUID 리스트 (총 ${uuidList.length}명)`}</S.ListTitle>
          <S.ListUL>
            {uuidList.map((uuid) => {
              return <S.ListLI key={uuid}>{uuid}</S.ListLI>;
            })}
          </S.ListUL>
        </S.ListWrapper>
      </S.Main>
    </>
  );
}
