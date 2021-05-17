import Image from "next/image";
import { useSession, signOut } from "next-auth/client";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  TemplateIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

import HeaderIcon from "./HeaderIcon";

function Header() {
  const [session] = useSession();

  return (
    <div className="sticky top-0 z-50 h-[10vh] bg-white flex items-center p-2 lg:px-5 shadow-md">
      <div className="flex items-center">
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
        />

        <div className="flex ml-2 items-center rounded-full cursor-pointer bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>
      <div className="flex flex-grow justify-center">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active Icon={HomeIcon} title="Home" />
          <HeaderIcon Icon={PlayIcon} title="Watch" />
          <HeaderIcon Icon={ShoppingCartIcon} title="Marketplace" />
          <HeaderIcon Icon={UserGroupIcon} title="Groups" />
          <HeaderIcon Icon={TemplateIcon} title="Gaming" />
        </div>
      </div>
      <div className="flex items-center sm:space-x-2 justify-end">
        <Image
          onClick={signOut}
          className="rounded-full cursor-pointer"
          src={session.user.image}
          width={40}
          height={40}
          layout="fixed"
        />

        <p className="hidden lg:inline-flex font-semibold pr-3 whitespace-nowrap">
          {session.user.name}
        </p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <div onClick={signOut} className="relative group">
          <ChevronDownIcon className="icon" />
          <div className="invisible absolute top-9 md:top-16 left-[50%] transform translate-x-[-50%] p-1 rounded-xl mt-1 bg-black opacity-70 group-hover:visible">
            <p className="p-1 text-white text-xs text-center truncate">
              Sign Out
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
