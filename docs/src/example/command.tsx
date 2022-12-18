import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsCommand } from "react-icons/bs";
import { Command, CommandInput, CommandList, CommandOption } from "superkey";

// Your json data =>
import { exampleData } from "./data";

const CommandExample = () => {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const router = useRouter();

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
      <button
        className="p-2 transition-colors duration-100 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800"
        onClick={() => setOpen(!open)}
      >
        <BsCommand size={20} />
      </button>
      <Command
        open={open}
        onClose={() => setOpen(false)}
        afterLeave={() => {
          setQuery("");
        }}
        commandFunction={(data) => {
          router.push(`${data}`);
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
            <CommandOption
              key={example.id}
              value={example.slug}
              activeClassName="bg-gray-100 dark:bg-zinc-700/25"
            >
              <div className="flex items-center py-2 space-x-1">
                <div className="mr-2">{example.icon}</div>
                <h1>{example.name}</h1>
              </div>
            </CommandOption>
          ))}
        </CommandList>
      </Command>
    </>
  );
};

export default CommandExample;
