import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { Command, CommandInput, CommandList, CommandOption } from "superkey";

import { BiArchive, BiRocket } from "react-icons/bi";
import { BsCommand, BsGithub, BsTwitter } from "react-icons/bs";
import { GiPartyPopper } from "react-icons/gi";

import confetti from "canvas-confetti";

const CommandExample = () => {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const router = useRouter();

  // Actions =>
  const actions = [
    {
      id: 1,
      name: "Getting Started",
      icon: <BiRocket size={18} />,
      shortcut: ["G", "E"],
      action: () => router.push("/docs/getting-started"),
    },
    {
      id: 2,
      name: "Examples",
      icon: <BiArchive size={18} />,
      shortcut: ["E", "X"],
      action: () =>
        router.push("https://github.com/pheralb/superkey/tree/main/examples"),
    },
    {
      id: 3,
      name: "Twitter",
      icon: <BsTwitter size={18} />,
      shortcut: ["T", "W"],
      action: () => router.push("https://twitter.com/pheralb_"),
    },
    {
      id: 4,
      name: "Repository",
      icon: <BsGithub size={18} />,
      shortcut: ["R", "E"],
      action: () => router.push("https://github.com/pheralb/superkey"),
    },
    {
      id: 5,
      name: "Confetti",
      icon: <GiPartyPopper size={18} />,
      shortcut: ["C", "O"],
      action: () => runConfetti(),
    },
  ];

  // Confetti action =>
  const runConfetti = () => {
    confetti({
      particleCount: 200,
      startVelocity: 30,
      spread: 300,
      gravity: 1.2,
      origin: { y: 0 },
    });
  };

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
    ? actions.filter((action) =>
        action.name.toLowerCase().includes(query.toLowerCase())
      )
    : actions;

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
        commandFunction={() => {
          setOpen(false);
        }}
      >
        <CommandInput
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setQuery(e.target.value);
          }}
        />
        <CommandList>
          {filteredData.map((example) => (
            <CommandOption
              key={example.id}
              value={example.action}
              activeClassName="bg-gray-100 dark:bg-zinc-700/25"
            >
              <div className="flex items-center justify-between py-1 space-x-1">
                <div className="flex items-center space-x-1">
                  <div className="mr-2">{example.icon}</div>
                  <h1>{example.name}</h1>
                </div>
                <div className="flex items-center space-x-1">
                  {example.shortcut.map((shortcut) => (
                    <span
                      key={shortcut}
                      className="p-2 text-xs lowercase border rounded-md dark:text-gray-200 dark:bg-zinc-900 bg-zinc-100 dark:border-zinc-800 border-zinc-300"
                    >
                      {shortcut}
                    </span>
                  ))}
                </div>
              </div>
            </CommandOption>
          ))}
        </CommandList>
      </Command>
    </>
  );
};

export default CommandExample;
