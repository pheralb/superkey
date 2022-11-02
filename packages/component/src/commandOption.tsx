import { Combobox } from "@headlessui/react";
import { CommandOptionProps } from "./interfaces/commandInterface";

export const CommandOption = (props: CommandOptionProps) => {
  return (
    <Combobox.Option value={props.value}>
      {({ active }) => (
        <div
          className={`flex flex-row items-center justify-between w-full px-4 py-3 ${
            active ? "bg-gray-100 dark:bg-zinc-700" : ""
          }`}
        >
          {props.children}
        </div>
      )}
    </Combobox.Option>
  );
};
