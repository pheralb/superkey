import React from "react";

interface SidebarSectionProps {
  children: React.ReactNode;
  title: string;
  icon: React.ReactNode;
}

const SidebarSection = (props: SidebarSectionProps) => {
  return (
    <div className="pt-3 pb-3 border-b border-gray-100 dark:border-zinc-800">
      <div className="flex items-center mb-4 text-gray-500 dark:text-gray-400 ">
        <div className="mr-2">{props.icon}</div>
        <h1 className="text-lg font-medium font-gtw">{props.title}</h1>
      </div>
      {props.children}
    </div>
  );
};

export default SidebarSection;
