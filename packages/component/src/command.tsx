import { Fragment, useState } from "react";
import { Dialog, Combobox, Transition } from "@headlessui/react";
import { CommandProps } from "./interfaces/commandInterface";

export const Command = (props: CommandProps) => {
  const [isOpen, setisOpen] = useState(props.open);

  function closeModal() {
    setisOpen(false);
  }

  return (
    <Transition.Root show={props.open} as={Fragment} afterLeave={props.afterLeave}>
      <Dialog
        onClose={() => {
          props.onClose ? props.onClose() : closeModal();
        }}
        className="fixed inset-0 p-5 pt-[25vh] overflow-y-auto"
      >
        <Transition.Child
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-gray-200/40" />
        </Transition.Child>
        <Transition.Child
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Combobox
            as="div"
            onChange={props.commandFunction}
            className="relative max-w-xl mx-auto overflow-hidden rounded-md shadow-2xl ring-1 ring-black/5"
          >
            {props.children}
          </Combobox>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
};
