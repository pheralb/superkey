import Link from "next/link";
import Logo from "./icons/logo";
import { BsGithub, BsTwitter } from "react-icons/bs";
import ChangeTheme from "./changeTheme";

const Header = () => {
  return (
    <div className="sticky top-0 w-full p-4 bg-white border-b border-gray-100 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="container flex items-center justify-between mx-auto">
        <Link href="/">
          <div className="flex items-center cursor-pointer transition-all hover:-translate-y-0.5">
            <Logo className="w-8 h-8 mr-2" />
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
            <BsTwitter size={22} />
          </a>
          <a
            href="https://github.com/pheralb/superkey"
            target="_blank"
            rel="noreferrer"
            className="transition-all hover:-translate-y-0.5"
          >
            <BsGithub size={22} />
          </a>
          <ChangeTheme />
        </div>
      </div>
    </div>
  );
};

export default Header;
