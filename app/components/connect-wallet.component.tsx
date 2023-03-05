import React from "react";
import ClientOnly from "../containers/client-only";
import useConnectWallet from "../hooks/useConnectWallet";

export default function WalletConnect() {
  const { connect, isConnected, handleLogin } = useConnectWallet();

  return (
    <ClientOnly>
      <div>
        <div className="p-8">
          <button
            type="button"
            className="h-10 bg-blue-600 text-white px-6 rounded-full hover:bg-blue-800 transition-colors ease-in-out duration-200"
            onClick={(e) => {
              e.preventDefault();
              if (!isConnected) {
                connect();
              } else {
                handleLogin();
              }
            }}
          >
            Connect Wallet
          </button>
        </div>
      </div>
    </ClientOnly>
  );
}
