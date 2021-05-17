import Image from "next/image";

function SidebarRow({ src, Icon, title, last }) {
  return (
    <div className="flex items-center space-x-2 p-3 hover:bg-gray-200 rounded-xl cursor-pointer">
      {src ? (
        <Image
          className="rounded-full"
          src={src}
          width="30"
          height="30"
          layout="fixed"
        />
      ) : (
        <Icon
          className={`h-8 w-8 text-blue-500 ${
            last && "text-gray-700 p-1 bg-gray-300 rounded-full"
          } `}
        />
      )}
      <p className="hidden sm:inline-flex font-normal ml-3">{title}</p>
    </div>
  );
}

export default SidebarRow;
