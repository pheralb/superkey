import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { Command, CommandInput, CommandList, CommandOption } from "superkey";

interface fruits {
  id: number;
  name: string;
  description: string;
}

const Home: NextPage = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  function openModal() {
    setOpen(true);
  }

  const fruits = [
    { id: 1, name: "Apple", description: "A red fruit" },
    { id: 2, name: "Banana", description: "A yellow fruit" },
    { id: 3, name: "Orange", description: "A orange fruit" },
    { id: 4, name: "Grapes", description: "A purple fruit" },
    { id: 5, name: "Pineapple", description: "A yellow fruit" },
    { id: 6, name: "Watermelon", description: "A green fruit" },
    { id: 7, name: "Mango", description: "A yellow fruit" },
    { id: 8, name: "Papaya", description: "A orange fruit" },
    { id: 9, name: "Strawberry", description: "A red fruit" },
    { id: 10, name: "Pomegranate", description: "A red fruit" },
    { id: 11, name: "Guava", description: "A green fruit" },
    { id: 12, name: "Kiwi", description: "A green fruit" },
    { id: 13, name: "Lemon", description: "A yellow fruit" },
    { id: 14, name: "Lychee", description: "A red fruit" },
  ];

  const filteredFruits = query
    ? fruits.filter((fruit) =>
        fruit.name.toLowerCase().includes(query.toLowerCase())
      )
    : fruits;

  return (
    <div>
      <h1>Welcome</h1>
      <button type="button" onClick={openModal}>
        Open dialog
      </button>
      <Command
        open={open}
        commandFunction={(fruit) => {
          setOpen(false);
          router.push(`/${fruit}`);
        }}
      >
        <CommandInput
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <CommandList>
          {filteredFruits.map((fruit: fruits) => (
            <CommandOption key={fruit.id} value={fruit.name}>
              <h1>{fruit.name}</h1>
              <p className="text-gray-500">{fruit.description}</p>
            </CommandOption>
          ))}
        </CommandList>
      </Command>
    </div>
  );
};

export default Home;
