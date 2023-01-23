import React, { useState } from "react";

import {
  examples,
  components,
  introduction,
  theming,
  appsUsingSuperkey,
} from "@/data/routes";

import {
  BiBox,
  BiHeartCircle,
  BiLinkExternal,
  BiPaint,
  BiPalette,
  BiWorld,
} from "react-icons/bi";

import { IoClose, IoSearch } from "react-icons/io5";
import SidebarLink from "./link";
import SidebarSection from "./section";

const SidebarContent = () => {
  const [search, setSearch] = useState<string>("");
  const allLinks = [
    ...introduction,
    ...components,
    ...examples,
    ...appsUsingSuperkey,
  ];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div className="flex items-center">
        <input
          type="text"
          onChange={handleSearch}
          value={search}
          placeholder="Search..."
          className="w-full px-4 py-2 mt-3 mb-2 text-sm bg-gray-100 border rounded-md dark:bg-neutral-900 dark:text-neutral-100 ring-0 focus:ring-0 focus:outline-none border-neutral-300 dark:border-neutral-800"
        />
        {search.length > 0 && (
          <IoClose
            size={18}
            onClick={() => setSearch("")}
            className="absolute right-0 mt-1 mr-3 text-gray-400 duration-200 cursor-pointer hover:text-gray-800 dark:hover:text-gray-300"
          />
        )}
      </div>
      {search.length > 0 ? (
        <>
          <SidebarSection title="Search results:" icon={<IoSearch size={18} />}>
            {allLinks.map((item) => {
              if (item.title.toLowerCase().includes(search.toLowerCase())) {
                return (
                  <SidebarLink
                    key={item.path}
                    path={item.path}
                    title={item.title}
                  />
                );
              }
            })}
          </SidebarSection>
        </>
      ) : (
        <>
          <SidebarSection
            icon={<BiWorld size={18} />}
            title="Introduction"
            border={false}
          >
            {introduction.map((item) => (
              <SidebarLink
                key={item.path}
                path={item.path}
                title={item.title}
              />
            ))}
          </SidebarSection>
          <SidebarSection
            icon={<BiPalette size={18} />}
            title="Components"
            border={false}
          >
            {components.map((item) => (
              <SidebarLink
                key={item.path}
                path={item.path}
                title={item.title}
              />
            ))}
          </SidebarSection>
          <SidebarSection
            icon={<BiPaint size={18} />}
            title="Theme"
            border={false}
          >
            {theming.map((item) => (
              <SidebarLink
                key={item.path}
                path={item.path}
                title={item.title}
              />
            ))}
          </SidebarSection>
          <SidebarSection
            icon={<BiBox size={18} />}
            title="Examples"
            border={false}
          >
            {examples.map((item) => (
              <a
                rel="noreferrer"
                target="_blank"
                href={item.path}
                key={item.path}
                className="flex items-center py-1 pl-5 text-sm font-medium text-gray-500 transition-all duration-150 border-l border-neutral-300 dark:border-neutral-800 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                {item.title}
                <BiLinkExternal size={10} className="ml-2" />
              </a>
            ))}
          </SidebarSection>
          <SidebarSection
            icon={<BiHeartCircle size={18} />}
            title="Showcase"
            border={false}
          >
            {appsUsingSuperkey.map((item) => (
              <a
                rel="noreferrer"
                target="_blank"
                href={item.path}
                key={item.path}
                className="flex items-center py-1 pl-5 text-sm font-medium text-gray-500 transition-all duration-150 border-l border-neutral-300 dark:border-neutral-800 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                {item.title}
                <BiLinkExternal size={10} className="ml-2" />
              </a>
            ))}
          </SidebarSection>
        </>
      )}
    </>
  );
};

export default SidebarContent;
