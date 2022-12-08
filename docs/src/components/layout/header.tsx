import Link from "next/link";
import { useTheme } from "next-themes";

import { BiMoon, BiSun } from "react-icons/bi";
import { BsGithub, BsTwitter } from "react-icons/bs";
import CommandExample from "@/example/command";

const Header = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="sticky top-0 flex items-center justify-between w-full bg-backgroundLight dark:bg-backgroundDark">
      <div className="container px-5 py-4 mx-auto mt-1 mb-2 md:mb-0 md:px-0">
        <div className="flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center space-x-3 transition-all duration-150 dark:hover:text-gray-300 hover:text-gray-500">
              <img src="/img/logo_svg.svg" alt="Logo" className="w-8 h-8" />
              <h3 className="text-xl font-medium">Superkey</h3>
            </div>
          </Link>
          <div className="flex items-center space-x-2">
            <CommandExample />
            <a
              href="https://twitter.com/pheralb_"
              target="_blank"
              referrerPolicy="no-referrer"
              className="p-2 transition-colors duration-100 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800"
            >
              <BsTwitter size={20} />
            </a>
            <a
              href="https://github.com/pheralb/superkey"
              target="_blank"
              referrerPolicy="no-referrer"
              className="p-2 transition-colors duration-100 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800"
            >
              <BsGithub size={20} />
            </a>
            <button
              className="p-2 transition-colors duration-100 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800"
              onClick={handleThemeChange}
            >
              {theme === "light" ? <BiMoon size={20} /> : <BiSun size={20} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
