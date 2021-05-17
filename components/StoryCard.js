import Image from "next/image";

function StoryCard({ name, src, profile }) {
  return (
    <div className="relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-56 cursor-pointer overflow-x p-3 transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse">
      <Image
        className="absolute rounded-full z-50 top-10 opacity-0 lg:opacity-100"
        src={profile}
        width={40}
        height={40}
        layout="fixed"
      />
      <Image
        className="object-cover filter brightness-75 rounded-full lg:rounded-3xl blur-0 md:blur-[1px]"
        src={src}
        layout="fill"
      />
      <p className="absolute invisible lg:visible bottom-4  w-5/6 text-white text-sm font-bold truncate">
        {name}
      </p>
    </div>
  );
}

export default StoryCard;
