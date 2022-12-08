import clsx from "clsx";
import { Fragment } from "react";
import { Dialog, Combobox, Transition } from "@headlessui/react";
import { CommandProps } from "../interfaces/commandInterface";

const Command = (props: CommandProps) => {
  return (
    <Transition.Root
      show={props.open}
      as={Fragment}
      afterLeave={props.afterLeave}
    >
      <Dialog
        onClose={props.onClose}
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
          <Dialog.Overlay
            className={clsx(
              `fixed inset-0`,
              props.overlayClassName
                ? props.overlayClassName
                : "bg-gray-200/60 dark:bg-zinc-900/60"
            )}
          />
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
            className={clsx(
              `relative max-w-xl mx-auto overflow-hidden rounded-md shadow-2xl`,
              props.className
                ? props.className
                : "bg-white  dark:bg-zinc-900 dark:ring-zinc-900/5"
            )}
          >
            {props.children}
          </Combobox>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
};

export default Command;
