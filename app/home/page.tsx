"use client";

import React from "react";
import HeaderWallet from "../components/header-wallet.component";
import ClientOnly from "../containers/client-only";

function Home() {
  return (
    <div className="flex w-screen h-screen justify-center align-center ">
      <ClientOnly>
        <HeaderWallet />
      </ClientOnly>
    </div>
  );
}

export default Home;
