import Head from "next/head";
import { FormEvent, useEffect, useState } from "react";
import * as S from "@/styles/index.styled";

export default function Home() {
  const [inputNick, setInputNick] = useState<string>("");
  const [convertedUUID, setConvertedUUID] = useState<string | null>(null);
  const [status, setStatus] = useState<boolean | null>(null);

  const [uuidList, setUuidList] = useState<string[]>([]);

  const getUUIDs = async () => {
    const response = await fetch("/api/getuuids");
    const json = await response.json();
    setUuidList(json.data);
  };

  const nick2uuid = async (nick: string): Promise<string> => {
    const response = await fetch(`/api/nick2uuid?&nick=${nick}`);
    const json = await response.json();
    const uuid = json.data;
    return uuid;
  };

  const handleSearchBtn = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setConvertedUUID(null);
    setStatus(null);
    const uuid = await nick2uuid(inputNick);
    setConvertedUUID(uuid);
    if (uuid === "NULL" || uuid === "ERROR") {
      setStatus(null);
    } else {
      setStatus(uuidList.indexOf(uuid) !== -1);
    }
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
        <S.SearchWrapper>
          <S.SearchTitle>닉네임으로 검색하기</S.SearchTitle>
          <S.SearchForm onSubmit={handleSearchBtn}>
            <S.SearchInput
              onChange={(event) => setInputNick(event.target.value)}
            />
            <S.SearchBtn>검색</S.SearchBtn>
          </S.SearchForm>
          <S.SearchResultWrapper>
            <S.SearchResultText1>{`UUID: ${
              convertedUUID ?? "..."
            }`}</S.SearchResultText1>
            <S.SearchResultText2>
              {`등록 상태: ${status === null ? "..." : status ? "O" : "X"}`}
            </S.SearchResultText2>
          </S.SearchResultWrapper>
        </S.SearchWrapper>

        <S.Bar></S.Bar>

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
