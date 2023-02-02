import Image from "next/image";
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
    <div className="sticky top-0 flex items-center justify-between w-full border-t-4 border-neutral-800 bg-backgroundLight dark:bg-backgroundDark opacity-90">
      <div className="container px-5 py-5 mx-auto mt-1 mb-2 md:mb-0 md:px-0">
        <div className="flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center space-x-3 transition-all duration-150 dark:hover:text-gray-300 hover:text-gray-500">
              <Image
                src="/img/logo_svg.svg"
                alt="Logo"
                width={32}
                height={32}
                title="Logo"
              />
              <h3 className="text-xl font-medium">Superkey</h3>
              <span className="text-sm font-bold dark:text-neutral-600 text-neutral-500">0.2.2</span>
            </div>
          </Link>
          <div className="flex items-center space-x-2">
            <CommandExample />
            <a
              href="https://twitter.com/pheralb_"
              target="_blank"
              rel="noreferrer"
              className="p-2 transition-colors duration-100 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800"
            >
              <BsTwitter size={20} />
            </a>
            <a
              href="https://github.com/pheralb/superkey"
              target="_blank"
              rel="noreferrer"
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
