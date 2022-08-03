import Head from "next/head";
import { Team } from "../components/Team";
import { WhatWeDo } from "../components/WhatWeDo";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-screen overflow-hidden h-full flex flex-col gap-y-20 bg-dark py-20">
        <Team></Team>
        <WhatWeDo></WhatWeDo>
      </main>
    </div>
  );
}
