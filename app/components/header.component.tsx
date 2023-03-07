import React, { Fragment } from "react";
import {
  // CalendarIcon,
  AtSymbolIcon,
  // CheckIcon,
  ChevronDownIcon,
  CurrencyDollarIcon,
  UserMinusIcon,
} from "@heroicons/react/20/solid";
import { Menu, Transition } from "@headlessui/react";
import { useDisconnect } from "wagmi";
import { signOut } from "next-auth/react";
import WalletBalance from "./wallet-balance.component";
import AddressCopyInClipboard from "./address-copy.component";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const Header: React.FC<{ title: string }> = ({ title }) => {
  const { disconnect } = useDisconnect();
  const callbackUrl = "/";
  return (
    <div className="lg:flex p-4 lg:items-center lg:justify-between">
      <div className="min-w-0 flex-1">
        <h2 className="text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight">
          {title}
        </h2>
        <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
          <div className="mt-2 flex items-center text-sm text-gray-300">
            <AtSymbolIcon
              className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-500"
              aria-hidden="true"
            />
            <AddressCopyInClipboard />
          </div>
          {/* <div className="mt-2 flex items-center text-sm text-gray-300">
            <MapPinIcon
              className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-500"
              aria-hidden="true"
            />
            Remote
          </div>
  */}
          <div className="mt-2 flex items-center text-sm text-gray-300">
            <CurrencyDollarIcon
              className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-500"
              aria-hidden="true"
            />
            <WalletBalance />
          </div>
          {/* <div className="mt-2 flex items-center text-sm text-gray-300">
            <CalendarIcon
              className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-500"
              aria-hidden="true"
            />
            Closing on January 9, 2020
          </div>
*/}
        </div>
      </div>
      <div className="mt-5 flex lg:mt-0 lg:ml-4">
        <span className="sm:ml-3">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
            onClick={(e) => {
              e.preventDefault();
              disconnect();
              signOut({
                redirect: true,
                callbackUrl,
              });
            }}
          >
            <UserMinusIcon
              className="-ml-0.5 mr-1.5 h-5 w-5"
              aria-hidden="true"
            />
            Disconnect Wallet
          </button>
        </span>

        {/* Dropdown */}
        <Menu as="div" className="relative ml-3 sm:hidden">
          <Menu.Button className="inline-flex items-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20">
            More
            <ChevronDownIcon
              className="-mr-1.5 ml-1.5 h-5 w-5"
              aria-hidden="true"
            />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute left-0 z-10 mt-2 -ml-1 w-48 origin-top-left rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="/"
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700"
                    )}
                  >
                    Edit
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="/"
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700"
                    )}
                  >
                    View
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};
export default Header;
