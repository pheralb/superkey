import { clsx } from "clsx";
import { Combobox } from "@headlessui/react";
import { CommandOptionProps } from "../interfaces/commandInterface";

const CommandOption = ({
  value,
  activeClassName,
  children,
}: CommandOptionProps) => {
  return (
    <Combobox.Option value={value}>
      {({ active: isActive }) => (
        <div
          className={clsx(
            "space-x-1 px-4 py-2 cursor-pointer",
            isActive
              ? "bg-gray-100 dark:bg-zinc-700/25" ?? activeClassName
              : "bg-transparent"
          )}
        >
          {children}
        </div>
      )}
    </Combobox.Option>
  );
};

export default CommandOption;
