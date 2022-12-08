import { clsx } from "clsx";
import { Combobox } from "@headlessui/react";
import { CommandOptionProps } from "../interfaces/commandInterface";

const CommandOption = (props: CommandOptionProps) => {
  return (
    <Combobox.Option value={props.value}>
      {({ active }) => (
        <div
          className={clsx(
            "space-x-1 px-4 py-2 cursor-pointer",
            active
              ? "bg-gray-100 dark:bg-zinc-700/25" ||
                  props.activeClassName
              : "bg-transparent"
          )}
        >
          {props.children}
        </div>
      )}
    </Combobox.Option>
  );
};

export default CommandOption;
