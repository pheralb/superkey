import { useEffect, useState } from "react";
import { Command, CommandInput, CommandList, CommandOption } from "superkey";
import toast from "react-hot-toast";

// Your json data =>
import { exampleData } from "./data";
import { useRouter } from "next/router";

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
    <Command
      open={open}
      onClose={() => setOpen(false)}
      afterLeave={() => {
        setQuery("");
      }}
      commandFunction={(fruit) => {
        setOpen(false);
        router.push(`${fruit}`);
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
            activeClassName="bg-gray-100 dark:bg-zinc-800"
          >
            <div className="flex items-center justify-between p-2">
              <div className="mr-2 icon-size-8">{example.icon}</div>
              <h1 className="text-gray-100">{example.name}</h1>
            </div>
          </CommandOption>
        ))}
      </CommandList>
    </Command>
  );
};

export default CommandExample;
