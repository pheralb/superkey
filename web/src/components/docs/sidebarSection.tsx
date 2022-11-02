import React from "react";

interface SidebarSectionProps {
  children: React.ReactNode;
  title: string;
}

const SidebarSection = (props: SidebarSectionProps) => {
  return (
    <div className="pt-3 pb-3 border-b border-gray-100 dark:border-zinc-800">
      <h1 className="mb-3 text-lg font-medium text-gray-500 dark:text-gray-400 font-gtw">
        {props.title}
      </h1>
      {props.children}
    </div>
  );
};

export default SidebarSection;
