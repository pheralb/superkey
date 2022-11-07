import { Combobox } from "@headlessui/react";
import { CommandOptionProps } from "../interfaces/commandInterface";

const CommandOption = (props: CommandOptionProps) => {
  return (
    <Combobox.Option value={props.value}>
      {({ active }) => (
        <div
          className={`${props.className} ${
            active ? props.activeClassName : ""
          }`}
        >
          {props.children}
        </div>
      )}
    </Combobox.Option>
  );
};

export default CommandOption;
