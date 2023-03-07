"use client";

import React from "react";
import Link from "next/link";
import HeaderWallet from "../components/header-wallet.component";
import Token from "../components/token.component";
import CommonLayout from "../components/common-layout.component";

function Home() {
  return (
    <CommonLayout title="Create your NFT">
      <HeaderWallet />
      <Token />
      <li>
        <Link href="/wallet">wallet</Link>
      </li>
    </CommonLayout>
  );
}

export default Home;
