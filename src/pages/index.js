import Head from "next/head";
import { Team } from "../components/Team";
import { WhatWeDo } from "../components/WhatWeDo";
import { Landing } from "../components/Landing";

export default function Home() {
  return (
    <div>
      <Head>
        <title>civtek</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-screen overflow-hidden h-full flex flex-col gap-y-20 bg-dark">
        <Landing></Landing>
        <Team></Team>
        <WhatWeDo></WhatWeDo>
      </main>
    </div>
  );
}
