import React from "react";

const WalletLayout: React.FC<{
  adress: string;
}> = ({ adress }) => {
  return (
    <div>
      <div>
        <p>{adress}</p>
      </div>
    </div>
  );
};

export default WalletLayout;
