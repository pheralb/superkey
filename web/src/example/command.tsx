import { useEffect, useState } from "react";
import { Command, CommandInput, CommandList, CommandOption } from "superkey";
import toast from "react-hot-toast";

// Your json data =>
import { exampleData } from "./data";

const CommandExample = () => {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  // Ctrl+k to open command =>
  useEffect(() => {
    function handleKeyDown(event?: KeyboardEvent) {
      if (event?.key === "k" && (event?.metaKey || event?.ctrlKey)) {
        event?.preventDefault();
        setOpen(!open);
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [open]);

  // Filter fruits =>
  const filteredFruits = query
    ? exampleData.filter((example) =>
        example.name.toLowerCase().includes(query.toLowerCase())
      )
    : exampleData;

  return (
    <Command
      open={open}
      afterLeave={() => {
        setQuery("");
      }}
      commandFunction={(fruit) => {
        setOpen(false);
        toast.success(`You selected ${fruit} 🥳`);
      }}
    >
      <CommandInput
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <CommandList>
        {filteredFruits.map((example) => (
          <CommandOption key={example.id} value={example.name} className="bg-red-500">
            <div className="flex items-center space-x-2">
              <div className="flex-shrink-0 icon-size-8">{example.icon}</div>
              <h1>{example.name}</h1>
            </div>
            <div>
              <p className="text-sm text-gray-400">{example.command}</p>
            </div>
          </CommandOption>
        ))}
      </CommandList>
    </Command>
  );
};

export default CommandExample;
