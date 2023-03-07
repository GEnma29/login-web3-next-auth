import React from "react";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet, bsc, polygon, bscTestnet, goerli } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { InjectedConnector } from "wagmi/connectors/injected";

// Config
// ========================================================
const { chains, provider } = configureChains(
  [mainnet, bsc, polygon, bscTestnet, goerli],
  [publicProvider()]
);

const client = createClient({
  autoConnect: true,
  connectors: [new InjectedConnector({ chains })],
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
