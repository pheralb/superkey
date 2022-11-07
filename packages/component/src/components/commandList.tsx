import { Combobox } from "@headlessui/react";
import { CommandListProps } from "../interfaces/commandInterface";

const CommandList = (props: CommandListProps) => {
  return (
    <Combobox.Options static className="overflow-y-auto transition-all duration-300 max-h-96">
      {props.children}
    </Combobox.Options>
  );
};

export default CommandList;