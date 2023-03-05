import React from "react";
import { useBalance, useAccount } from "wagmi";

function WalletBalance() {
  const { address } = useAccount();
  const { data, isError, isLoading } = useBalance({
    address,
  });
  if (isLoading) return <div>Fetching balance…</div>;
  if (isError) return <div>Error fetching balance</div>;
  return (
    <div>
      Balance: {data?.formatted} {data?.symbol}
    </div>
  );
}

export default WalletBalance;
