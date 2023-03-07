"use client";

import React from "react";
import ChangeChainComponent from "./change-chain.component";
import CommonLayout from "./common-layout.component";

const WalletLayout: React.FC = () => {
  return (
    <CommonLayout title="Create your first NFT">
      <div className="flex-col w-full">
        <div className="flex w-screen justify-center align-center">
          <ChangeChainComponent />
        </div>
      </div>
    </CommonLayout>
  );
};

export default WalletLayout;
