import Head from "next/head";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import styled from "styled-components";

const inter = Inter({ subsets: ["latin"] });

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
      <Main className={`${inter.className}`}>
        <ListWrapper>
          <ListTitle>{`등록된 UUID 리스트 (총 ${uuidList.length}명)`}</ListTitle>
          <ListUL>
            {uuidList.map((uuid) => {
              return <ListLI key={uuid}>{uuid}</ListLI>;
            })}
          </ListUL>
        </ListWrapper>
      </Main>
    </>
  );
}

const Main = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 40px;
`;

const ListWrapper = styled.div`
  min-width: 380px;
`;
const ListTitle = styled.h3`
  text-align: center;
  font-size: 26px;
  margin-bottom: 14px;
`;
const ListUL = styled.ul``;
const ListLI = styled.li`
  border: 1px solid whitesmoke;
  padding: 10px 8px;
  text-align: center;
`;
