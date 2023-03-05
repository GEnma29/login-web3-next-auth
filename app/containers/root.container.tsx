"use client";

import React from "react";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import WagmiProvider from "./wagmi.container";

// Root Provider
// ========================================================
function RootProvider({
  children,
  session,
}: {
  children: React.ReactNode;
  // eslint-disable-next-line react/require-default-props
  session?: Session;
}) {
  return (
    <WagmiProvider>
      <SessionProvider session={session} refetchInterval={0}>
        {children}
      </SessionProvider>
    </WagmiProvider>
  );
}

// Exports
// ========================================================
export default RootProvider;
