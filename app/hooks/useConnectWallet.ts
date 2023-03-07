import { useEffect, useCallback } from "react";
import { getCsrfToken, signIn, useSession } from "next-auth/react";
import { SiweMessage } from "siwe";
import { useAccount, useConnect, useNetwork, useSignMessage } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

const useConnectWallet = () => {
  // sign message
  const { signMessageAsync } = useSignMessage();
  const { chain } = useNetwork(); // select network
  const { address, isConnected } = useAccount(); // account
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { data: session } = useSession();

  const handleLogin = useCallback(async () => {
    try {
      const callbackUrl = "/home";
      const message = new SiweMessage({
        domain: window.location.host,
        address,
        statement: "Sign in with Ethereum to the app.",
        uri: window.location.origin,
        version: "1",
        chainId: chain?.id,
        nonce: await getCsrfToken(),
      });
      const signature = await signMessageAsync({
        message: message.prepareMessage(),
      });
      signIn("credentials", {
        message: JSON.stringify(message),
        redirect: true,
        signature,
        callbackUrl,
      });
    } catch (error) {
      // window.alert(error); add one alert
    }
  }, [address, chain, signMessageAsync]);

  useEffect(() => {
    if (isConnected && !session) {
      handleLogin();
    }
  }, [isConnected, session, handleLogin]);

  return { handleLogin, connect, isConnected };
};

export default useConnectWallet;
