import React from "react";
import { useSwitchNetwork, useNetwork } from "wagmi";
import { goerli, bscTestnet } from "wagmi/chains";

const ChangeChainComponent = () => {
  const { switchNetwork } = useSwitchNetwork();
  const { chain } = useNetwork();

  return (
    <div className="flex-col w-screen justify-center items-center">
      <div className="flex w-full justify-center items-center">
        <p>Select Chain </p>
      </div>
      <div className="flex w-screen justify-center align-center">
        <button
          className="flex m-2 items-center rounded-md bg-yellow-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
          type="button"
          disabled={!switchNetwork || bscTestnet.id === chain?.id}
          onClick={() => switchNetwork?.(bscTestnet.id)}
        >
          {bscTestnet.name}
        </button>
        <button
          className="flex m-2 items-center rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
          type="button"
          disabled={!switchNetwork || goerli.id === chain?.id}
          onClick={() => switchNetwork?.(goerli.id)}
        >
          {goerli.name}
        </button>
      </div>
    </div>
  );
};

export default ChangeChainComponent;
