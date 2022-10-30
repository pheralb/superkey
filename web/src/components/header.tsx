import Link from "next/link";
import Logo from "./icons/logo";

const Header = () => {
  return (
    <div className="w-full p-4 bg-white">
      <div className="container flex items-center justify-between mx-auto">
        <Link href="/">
          <div className="flex items-center space-x-2 transition-all cursor-pointer hover:transform hover:scale-105">
            <Logo className="w-7 h-7" />
            <h1 className="text-xl font-medium">Superkey</h1>
          </div>
        </Link>
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-200">Github</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
