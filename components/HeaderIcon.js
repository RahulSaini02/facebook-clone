function HeaderIcon({ Icon, active, title }) {
  return (
    <div className="relative flex items-center cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500 group">
      <Icon
        className={`${
          active ? "text-blue-500" : "text-gray-500"
        } h-5 text-center  sm:h-6 mx-auto group-hover:text-blue-500`}
      />
      <div className="invisible absolute top-9 md:top-16 left-[50%] transform translate-x-[-50%] p-1 rounded-xl mt-1 bg-black opacity-70 group-hover:visible">
        <p className="p-1 text-white text-sm text-center">{title}</p>
      </div>
    </div>
  );
}

export default HeaderIcon;
