import Image from "next/image";
import React from "react";
import { BellIcon, HomeIcon, UserGroupIcon } from "@heroicons/react/solid";
import {
  SearchIcon,
  FlagIcon,
  PlayIcon,
  ShoppingCartIcon,
  ViewGridIcon,
  ChatIcon,
  ChevronDownIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";
import { useSession, signIn, signOut } from "next-auth/react";

function Header() {
  const { data: session } = useSession();
  return (
    <header className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      {/* left */}
      <div className="flex items-center">
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
          priority
          alt="picture"
        />
        <div className="hidden md:flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600 mr-1" />
          <input
            type="text"
            placeholder="Search Facebook"
            className="hidden md:inline-flex bg-transparent outline-none"
          />
        </div>
      </div>
      {/* center */}
      <div className="flex justify-center items-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      {/* right */}
      <div className="flex items-center sm:space-x-2 justify-end">
        <Image
          className="rounded-full cursor-pointer hover:scale-95"
          onClick={signOut}
          src={session.user.image}
          height={40}
          width={40}
          layout="fixed"
          alt="Profile"
        />
        <div className="flex items-center justify-start">
          <div>
          <p className="whitespace-nowrap font-semibold pr-3 cursor-pointer hidden sm:inline-flex">
            {session.user.name}
          </p>
          <p className="whitespace-nowrap text-xs pr-3 hidden sm:inline-flex">{session.user.email}</p>
          </div>

          <div className="px-2 md:px-0">
          <p className="cursor-pointer bg-blue-600 rounded-md text-white hover:bg-blue-500 py-1 px-2" onClick={signOut}>Logout</p>
          </div>

        </div>
        

        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </header>
  );
}

export default Header;
