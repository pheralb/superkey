import clsx from "clsx";
import { Combobox } from "@headlessui/react";
import { CommandListProps } from "../interfaces/commandInterface";

const CommandList = (props: CommandListProps) => {
  return (
    <Combobox.Options
      static
      className={clsx(
        "border-t border-gray-200 dark:border-zinc-800 overflow-y-auto transition-all duration-300 max-h-96",
        props.className ? props.className : ""
      )}
    >
      {props.children}
    </Combobox.Options>
  );
};

export default CommandList;
