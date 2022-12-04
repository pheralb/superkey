import { useEffect, useState } from "react";
import { BsCommand } from "react-icons/bs";
import { Command, CommandInput, CommandList, CommandOption } from "superkey";

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

  // Filter data =>
  const filteredData = query
    ? exampleData.filter((example) =>
        example.name.toLowerCase().includes(query.toLowerCase())
      )
    : exampleData;

  return (
    <>
      <BsCommand
        size={20}
        onClick={() => setOpen(!open)}
        className="cursor-pointer text-neutral-300 hover:text-neutral-100"
      />
      <Command
        open={open}
        onClose={() => setOpen(false)}
        afterLeave={() => {
          setQuery("");
        }}
        commandFunction={(fruit) => {
          setOpen(false);
        }}
      >
        <CommandInput
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <CommandList>
          {filteredData.map((example) => (
            <CommandOption key={example.id} value={example.slug}>
              <div className="flex items-center py-2 space-x-1">
                <div className="mr-2">{example.icon}</div>
                <h1 className="text-gray-100">{example.name}</h1>
              </div>
            </CommandOption>
          ))}
        </CommandList>
      </Command>
    </>
  );
};

export default CommandExample;
