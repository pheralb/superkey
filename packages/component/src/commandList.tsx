import { Combobox } from "@headlessui/react";
import { CommandListProps } from "./interfaces/commandInterface";

export const CommandList = (props: CommandListProps) => {
  return (
    <Combobox.Options static className="overflow-y-auto max-h-96">
      {props.children}
    </Combobox.Options>
  );
};
