export interface CommandData {
  id: number;
  name: string;
  description: string;
  url?: string;
}

export interface CommandProps {
  children: React.ReactNode;
  open: boolean;
  commandFunction?: (command: CommandData) => void;
}

export interface CommandInputProps {
  placeholder?: string;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
  searchIcon?: React.ReactNode;
  className?: string;
}

export interface CommandOptionProps {
  value: string;
  className?: string;
  children: React.ReactNode;
}

export interface CommandListProps {
  children: React.ReactNode;
}
