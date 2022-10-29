import { Combobox } from "@headlessui/react";
import { CommandInputProps } from "./interfaces/commandInterface";

export const CommandInput = (props: CommandInputProps) => {
  return (
    <div className="flex items-center p-2 border-b border-gray-200">
      {props.searchIcon}
      <Combobox.Input
        as="input"
        onChange={props.onChange}
        className={
          props.className
            ? props.className
            : "text-gray-600 w-full h-12 pl-2  bg-transparent border-none focus:outline-none"
        }
        placeholder={
          props.placeholder ? props.placeholder : "Type a command or search..."
        }
      />
    </div>
  );
};
