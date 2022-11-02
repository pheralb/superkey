import { Combobox } from "@headlessui/react";
import { CommandInputProps } from "./interfaces/commandInterface";

export const CommandInput = (props: CommandInputProps) => {
  return (
    <div
      className={`flex items-center p-2 space-x-2 shadow-md ${
        props.className ? props.className : "border-b border-gray-200 dark:border-zinc-800"
      }`}
    >
      {props.searchIcon}
      <Combobox.Input
        as="input"
        onChange={props.onChange}
        className={`w-full h-10 pl-2 bg-transparent border-none focus:outline-none ${
          props.inputClassName ? props.inputClassName : "text-gray-600 dark:text-gray-200"
        }`}
        placeholder={
          props.placeholder ? props.placeholder : "Type a command or search..."
        }
      />
    </div>
  );
};
