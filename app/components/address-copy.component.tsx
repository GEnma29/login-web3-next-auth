import React from "react";
import { useSession } from "next-auth/react";
import useClipboard from "react-use-clipboard";

const AddressCopyInClipboard = () => {
  const { data: session } = useSession();
  const address = session?.user?.email ?? session?.user?.name;

  const [isCopied, setCopied] = useClipboard(address || "");

  return (
    <div className="flex w-full">
      <p className="truncate w-3/4">{address}</p>
      <button className="flex ml-3" type="button" onClick={setCopied}>
        {isCopied ? "Copied 👍" : "Copy!"}
      </button>
    </div>
  );
};

export default AddressCopyInClipboard;
