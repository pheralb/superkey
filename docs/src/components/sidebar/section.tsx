import React from "react";
import clsx from "clsx";
interface SidebarSectionProps {
  icon?: React.ReactNode;
  title: string;
  children: React.ReactNode;
  border?: boolean;
}

const SidebarSection = (props: SidebarSectionProps) => {
  return (
    <div
      className={clsx(
        "mb-8",
        props.border ??
          `pb-5 border-b border-neutral-300 dark:border-neutral-800`
      )}
    >
      <div className="flex items-center mt-4 mb-2">
        <div className="flex items-center space-x-2">
          {props.icon}
          <h3 className="font-medium">{props.title}</h3>
        </div>
      </div>
      <div className="pl-2">
        <div className="flex flex-col justify-end">{props.children}</div>
      </div>
    </div>
  );
};

export default SidebarSection;
