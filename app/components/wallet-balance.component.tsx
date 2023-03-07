import React from "react";
import { useAccount, useBalance } from "wagmi";

const WalletBalance = () => {
  const { address } = useAccount();
  const {
    data: balance,
    isError,
    isLoading,
  } = useBalance({
    address,
  });
  if (isLoading) return <div>Fetching balance…</div>;
  if (isError) return <div>Error fetching balance</div>;
  return (
    <div>
      {balance?.formatted} {balance?.symbol}
    </div>
  );
};

export default WalletBalance;
