import clsx from "clsx";
import { Combobox } from "@headlessui/react";
import { CommandInputProps } from "../interfaces/commandInterface";

const CommandInput = (props: CommandInputProps) => {
  return (
    <div
      className={clsx(
        `flex items-center p-2 space-x-2`,
        props.className
          ? props.className
          : ""
      )}
    >
      {props.searchIcon}
      <Combobox.Input
        as="input"
        onChange={props.onChange}
        className={clsx(
          `w-full h-10 pl-2 bg-transparent border-none focus:outline-none`,
          props.inputClassName
            ? props.inputClassName
            : "text-gray-600 dark:text-gray-200"
        )}
        placeholder={
          props.placeholder ? props.placeholder : "Type a command or search..."
        }
      />
    </div>
  );
};

export default CommandInput;
