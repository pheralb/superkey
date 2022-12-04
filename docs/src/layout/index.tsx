import { Link } from "@remix-run/react";
import React from "react";
import { BsGithub, BsTwitter } from "react-icons/bs";
import CommandExample from "src/example/command";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <>
      <div className="sticky top-0 flex w-full border-b border-neutral-800 bg-customDark">
        <div className="flex items-center justify-between w-full px-6 py-5">
          <Link to="/">
            <div className="flex items-center space-x-3">
              <img src="/img/logo_svg.svg" alt="Superkey" className="h-8" />
              <h1 className="text-xl font-medium">Superkey</h1>
              <p className="text-sm text-gray-400">v0.1.0</p>
            </div>
          </Link>
          <div className="flex items-center space-x-6">
            <CommandExample />
            <a
              href="https://twitter.com/pheralb_"
              target="_blank"
              className="text-neutral-300 hover:text-neutral-100"
              rel="noreferrer"
            >
              <BsTwitter size={20} />
            </a>
            <a
              href="https://github.com/pheralb/superkey"
              target="_blank"
              className="text-neutral-300 hover:text-neutral-100"
              rel="noreferrer"
            >
              <BsGithub size={20} />
            </a>
          </div>
        </div>
      </div>
      {props.children}
    </>
  );
};

export default Layout;
