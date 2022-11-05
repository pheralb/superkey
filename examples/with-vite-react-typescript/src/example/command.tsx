import { useEffect, useState } from "react";
import { Command, CommandInput, CommandList, CommandOption } from "superkey";

// Import Command Styles =>
import "superkey/styles.css";

// Your json data =>
import { fruits } from "./data";

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

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  // Filter fruits =>
  const filteredFruits = query
    ? fruits.filter((fruit) =>
        fruit.name.toLowerCase().includes(query.toLowerCase())
      )
    : fruits;

  return (
    <Command
      open={open}
      afterLeave={() => {
        setQuery("");
      }}
      commandFunction={(fruit) => {
        setOpen(false);
        alert(`You selected ${fruit}`);
      }}
    >
      <CommandInput
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <CommandList>
        {filteredFruits.map((fruit) => (
          <CommandOption key={fruit.id} value={fruit.name}>
            <h5>{fruit.name}</h5>
            <p className="text-gray-500">{fruit.description}</p>
          </CommandOption>
        ))}
      </CommandList>
    </Command>
  );
};

export default CommandExample;
