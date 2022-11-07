export interface CommandData {
  id: number;
  name: string;
  description: string;
  url?: string;
}

// Global Command Props =>
export interface CommandProps {
  children: React.ReactNode;
  open: boolean;
  className?: string;
  overlayClassName?: string;
  commandFunction?: (command: CommandData) => void;
  onClose: (value: boolean) => void;
  afterLeave?: () => void;
}

// Command Input =>
export interface CommandInputProps {
  placeholder?: string;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
  searchIcon?: React.ReactNode;
  className?: string;
  inputClassName?: string;
}

// Command Option =>
export interface CommandOptionProps {
  value: string;
  className?: string;
  activeClassName?: string;
  children: React.ReactNode;
}

// Command List =>
export interface CommandListProps {
  children: React.ReactNode;
}
