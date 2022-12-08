import React, { useState } from "react";

import { examples, components, introduction } from "@/data/routes";
import { BiBox, BiPalette, BiSearch, BiWorld } from "react-icons/bi";
import SidebarLink from "./link";
import SidebarSection from "./section";

type Props = {};

const SidebarContent = (props: Props) => {
  const [search, setSearch] = useState<string>("");
  const allLinks = [...introduction, ...components, ...examples];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        onChange={handleSearch}
        value={search}
        placeholder="Search..."
        className="w-full px-4 py-2 mt-3 mb-2 text-sm bg-gray-100 border rounded-md dark:bg-neutral-900 dark:text-neutral-100 ring-0 focus:ring-0 focus:outline-none border-neutral-300 dark:border-neutral-800"
      />
      {search.length > 0 ? (
        <>
          <SidebarSection icon={<BiSearch size={18} />} title="Search results:">
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
            border={true}
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
            border={true}
          >
            {components.map((item) => (
              <SidebarLink
                key={item.path}
                path={item.path}
                title={item.title}
              />
            ))}
          </SidebarSection>
          <SidebarSection icon={<BiBox size={18} />} title="Examples">
            {examples.map((item) => (
              <a
                rel="noreferrer"
                target="_blank"
                href={item.path}
                key={item.path}
                className="py-1 pl-5 text-sm font-medium text-gray-500 transition-all duration-150 border-l border-neutral-300 dark:border-neutral-800 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                {item.title}
              </a>
            ))}
          </SidebarSection>
        </>
      )}
    </>
  );
};

export default SidebarContent;
