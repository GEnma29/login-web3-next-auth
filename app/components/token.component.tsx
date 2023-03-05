import { useToken, useAccount } from "wagmi";

export default function Token() {
  const { address } = useAccount();
  const { data, isError, isLoading } = useToken({
    address,
  });

  if (isLoading) return <div>Fetching token…</div>;
  if (isError) return <div>Error fetching token</div>;
  return <div>Token: {data?.symbol}</div>;
}
