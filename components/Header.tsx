export function Header() {
  return (
    <div className="h-12 flex items-center max-w-6xl p-10 mx-auto">
      <div className=" max-w-3xl ml-0 flex justify-start items-center">
        <h1 className=" font-extrabold">Meduim Blog</h1>
        <div className="hidden md:flex w-[300px] justify-between px-5 items-center">
          <span>About</span>
          <span>Content</span>
          <span className=" bg-green-700 px-6 rounded-full text-white">
            Follow
          </span>
        </div>
      </div>
      <div className="w-1/2  flex justify-end items-center">
        <span className=" text-green-600 mr-4">Sign In</span>
        <button className=" text-green-600 border border-black px-4 py-1 rounded-full">Get Started</button>
      </div>
    </div>
  );
}
