"use client";

import React from "react";
import HeaderWallet from "../components/header-wallet.component";
import Token from "../components/token.component";
import ClientOnly from "../containers/client-only";

function Home() {
  return (
    <div className="flex w-screen h-screen justify-center align-center ">
      <ClientOnly>
        <HeaderWallet />
        <Token />
      </ClientOnly>
    </div>
  );
}

export default Home;
