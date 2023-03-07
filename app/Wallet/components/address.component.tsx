import React from "react";

const AddressComponent: React.FC<{ address: string | null | undefined }> = ({
  address,
}) => {
  return (
    <div className="flex w-full justify-center align-center">
      <p className="flex mt-3 bg-zinc-700 text-zinc-200 p-2 rounded">
        {address}
      </p>
    </div>
  );
};

export default AddressComponent;
