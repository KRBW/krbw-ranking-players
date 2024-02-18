import Head from "next/head";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

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
      <main className={`${inter.className}`}></main>
    </>
  );
}
