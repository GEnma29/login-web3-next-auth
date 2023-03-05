import { useSession, signOut } from "next-auth/react";
import { useCallback, useEffect } from "react";
import { useAccount, useDisconnect } from "wagmi";

import usePrevious from "./usePrevious";

export default function useProtected() {
  const { disconnect } = useDisconnect();
  const { address } = useAccount();
  const session = useSession();
  const prevAddress = usePrevious(address);

  const handleSignOut = useCallback(async () => {
    await signOut({ callbackUrl: "/" });
    disconnect();
  }, [disconnect]);

  useEffect(() => {
    if (prevAddress && !address) {
      handleSignOut();
    }
    if (session.status !== "loading" && !address && prevAddress) {
      handleSignOut();
    }
  }, [address, handleSignOut, session.status, prevAddress]);
  return handleSignOut;
}
