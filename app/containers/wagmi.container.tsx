import React from "react";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet, bsc, polygon } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

// Config
// ========================================================
const { provider } = configureChains(
  [mainnet, bsc, polygon],
  [publicProvider()]
);

const client = createClient({
  autoConnect: true,
  provider,
});

// Provider
// ========================================================
const WagmiProvider: React.FC<{
  children: React.ReactNode;
  // eslint-disable-next-line react/function-component-definition
}> = ({ children }) => {
  return <WagmiConfig client={client}>{children}</WagmiConfig>;
};

export default WagmiProvider;
