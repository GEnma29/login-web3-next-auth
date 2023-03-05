import React from "react";
import { signOut, useSession } from "next-auth/react";
import { useDisconnect } from "wagmi";

function HeaderWallet() {
  const { data: session } = useSession();
  const { disconnect } = useDisconnect();
  const callbackUrl = "/";
  return (
    <div className="p-8 w-screen">
      <h1 className="text-2xl text-white font-medium mb-6">
        Wallet Connection
      </h1>
      {session?.user && (
        <div className="flex w-screen">
          {session.user.image && (
            <span
              className="inline-block h-6 w-6 rounded-full"
              style={{ backgroundImage: `url('${session.user.image}')` }}
            />
          )}
          <div className="flex align-center justify-center">
            <div className="flex">
              <span>
                <div className="flex-colum">
                  <small className="flex">Signed in as</small>
                  <strong className="flex mt-3 bg-zinc-700 text-zinc-200 p-2 rounded ">
                    {session.user.email ?? session.user.name}
                  </strong>
                </div>
              </span>
            </div>
          </div>
          <div className="p-8">
            <button
              type="button"
              className="h-10 bg-red-600 text-white px-6 rounded-full hover:bg-red-800 transition-colors ease-in-out duration-200"
              onClick={(e) => {
                e.preventDefault();
                disconnect();
                signOut({
                  redirect: true,
                  callbackUrl,
                });
              }}
            >
              Disconnect Wallet
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default HeaderWallet;
