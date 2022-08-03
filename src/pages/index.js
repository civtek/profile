import Head from "next/head";
import { Navbar } from "../components/Navbar";
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
      <main className="overflow-hidden h-full flex flex-col">
        <Navbar></Navbar>
        <Landing></Landing>
        <WhatWeDo></WhatWeDo>
        <Team></Team>
      </main>
    </div>
  );
}
