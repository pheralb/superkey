import { Combobox } from "@headlessui/react";
import { CommandOptionProps } from "./interfaces/commandInterface";

export const CommandOption = (props: CommandOptionProps) => {
  return (
    <Combobox.Option value={props.value}>
      {({ active }) => (
        <div
          className={`space-x-1 px-4 py-2 cursor-pointer ${
            active ? "bg-gray-200" : "bg-transparent"
          }`}
        >
          {props.children}
        </div>
      )}
    </Combobox.Option>
  );
};
