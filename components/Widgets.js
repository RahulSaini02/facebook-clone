import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import Contact from "./Contact";

const contacts = [
  {
    id: 1,
    name: "Harry Potter",
    src: "https://links.papareact.com/d0c",
  },
  {
    id: 2,
    name: "Elon Musk",
    src: "https://links.papareact.com/kxk",
  },
  {
    id: 3,
    name: "Jeff Bezoz",
    src: "https://links.papareact.com/f0p",
  },
  {
    id: 4,
    name: "Mark Zukerberg",
    src: "https://links.papareact.com/snf",
  },
  {
    id: 5,
    name: "Bill Gates",
    src: "https://links.papareact.com/zvy",
  },
  {
    id: 6,
    name: "The Queen",
    src: "https://links.papareact.com/6gg",
  },
  {
    id: 7,
    name: "James Bond",
    src: "https://links.papareact.com/r57",
  },
  {
    id: 8,
    name: "Sonny Sangha",
    src: "https://links.papareact.com/zof",
  },
  {
    id: 8,
    name: "Papa React",
    src: "https://links.papareact.com/l4v",
  },
];

function Widgets() {
  return (
    <div className="hidden h-screen  lg:flex flex-col w-60 p-2 mt-4 mb-10">
      <div className="flex justify-between items-center text-gray-500 mb-4">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <div className="hover:bg-gray-200 rounded-full p-2">
            <VideoCameraIcon className="h-6 cursor-pointer" />
          </div>
          <div className="hover:bg-gray-200 rounded-full p-2">
            <SearchIcon className="h-6 cursor-pointer" />
          </div>
          <div className="hover:bg-gray-200 rounded-full p-2">
            <DotsHorizontalIcon className="h-6 cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="overflow-y-scroll scrollbar-hide">
        {contacts.map((contact) => (
          <Contact key={contact.id} name={contact.name} src={contact.src} />
        ))}
      </div>
    </div>
  );
}

export default Widgets;
