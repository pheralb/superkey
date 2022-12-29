import { FormEventHandler } from "react";

// Shared Interface =>
export interface SharedCommandProps {
  className?: string;
}

// Command Props =>
export interface CommandProps extends SharedCommandProps {
  children: React.ReactNode;
  open: boolean;
  overlayClassName?: string;
  commandFunction?: FormEventHandler<HTMLFormElement> | (() => void);
  onClose: (value: boolean) => void;
  afterLeave?: () => void;
}

// Command Input =>
export interface CommandInputProps extends SharedCommandProps {
  placeholder?: string;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
  icon?: React.ReactNode;
  inputClassName?: string;
}

// Command Option =>
export interface CommandOptionProps extends SharedCommandProps {
  value: string | (() => void);
  activeClassName?: string;
  children: React.ReactNode;
}

// Command List =>
export interface CommandListProps extends SharedCommandProps {
  children: React.ReactNode;
}
