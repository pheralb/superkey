import clsx from "clsx";
import { Fragment } from "react";
import { Dialog, Combobox, Transition } from "@headlessui/react";
import { CommandProps } from "../interfaces/commandInterface";

const Command = ({ 
  open, 
  afterLeave, 
  onClose,
  overlayClassName,
  commandFunction,
  className,
  children
}: CommandProps) => {
  return (
    <Transition.Root
      show={open}
      as={Fragment}
      afterLeave={afterLeave}
    >
      <Dialog
        onClose={onClose}
        className="fixed inset-0 p-5 pt-[25vh] overflow-y-auto mx-auto max-w-xl h-screen"
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
              overlayClassName ?? "bg-gray-200/60 dark:bg-zinc-900/60"
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
            onChange={commandFunction}
            className={clsx(
              `relative max-w-xl mx-auto overflow-hidden rounded-md shadow-2xl`,
              className ?? "bg-white dark:bg-zinc-900 dark:ring-zinc-900/5 border border-neutral-300 dark:border-neutral-800"
            )}
          >
            {children}
          </Combobox>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
};

export default Command;
