import Link from "next/link";
import Logo from "./icons/logo";
import { BsGithub, BsTwitter } from "react-icons/bs";
import ChangeTheme from "./changeTheme";

const Header = () => {
  return (
    <div className="sticky top-0 w-full p-4 bg-white border-b border-gray-100 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="container flex items-center justify-between mx-auto">
        <Link href="/">
          <div className="flex items-center transition-all cursor-pointer hover:text-gray-400">
            <Logo className="w-6 h-6 mr-2" />
            <h1 className="text-xl font-medium">Superkey</h1>
          </div>
        </Link>
        <div className="flex items-center space-x-6">
          <a
            href="https://twitter.com/pheralb_"
            target="_blank"
            rel="noreferrer"
            className="transition-all hover:-translate-y-0.5"
          >
            <BsTwitter size={20} />
          </a>
          <a
            href="https://github.com/pheralb/superkey"
            target="_blank"
            rel="noreferrer"
            className="transition-all hover:-translate-y-0.5"
          >
            <BsGithub size={20} />
          </a>
          <ChangeTheme />
        </div>
      </div>
    </div>
  );
};

export default Header;
