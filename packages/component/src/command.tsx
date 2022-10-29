import { useState } from "react";
import { Dialog, Combobox } from "@headlessui/react";
import { CommandProps } from "./interfaces/commandInterface";

export const Command = (props: CommandProps) => {
  const [open, setOpen] = useState(props.open);
  return (
    <Dialog
      open={open}
      onClose={() => {
        setOpen(false);
      }}
      className="fixed inset-0 p-5 pt-[25vh] overflow-y-auto"
    >
      <Dialog.Overlay className="fixed inset-0 bg-gray-300/75 opacity-30" />
      <Combobox
        as="div"
        onChange={props.commandFunction}
        className="relative max-w-xl mx-auto overflow-hidden rounded-md shadow-2xl ring-1 ring-black/5"
      >
        {props.children}
      </Combobox>
    </Dialog>
  );
};
