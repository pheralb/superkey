import Link from "next/link";
import { useEffect, useState } from "react";
import { BiCheck, BiCopy, BiRocket } from "react-icons/bi";

export default function Home() {
  const [copy, setCopy] = useState(false);

  const copyToClipboard = async (txt: string) => {
    try {
      const clipboardItem = new ClipboardItem({
        "text/plain": new Blob([txt], { type: "text/plain" }),
      });
      await navigator.clipboard.write([clipboardItem]);
    } catch (error) {
      await navigator.clipboard.writeText(txt);
    }
    setCopy(true);
  };

  useEffect(() => {
    if (copy) {
      setTimeout(() => {
        setCopy(false);
      }, 1000);
    }
  }, [copy]);

  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center pt-16">
          <div className="flex flex-col mb-12 space-y-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 md:text-5xl dark:text-gray-200">
              A stylized command menu for React
            </h2>
            <h3 className="text-center text-gray-600 text-md dark:text-gray-400">
              ✨ Press <span className="font-bold">Ctrl + k</span>
            </h3>
          </div>
          <div className="flex items-center mb-8 space-x-8">
            <img src="/img/headlessui.svg" alt="Logo" className="h-10" />
            <img src="/img/tailwindcss.svg" alt="Logo" className="h-10" />
          </div>
          <div className="p-3 mb-5 border rounded-lg border-neutral-300 dark:border-neutral-800">
            <div className="flex items-center space-x-3">
              <button
                onClick={() =>
                  copyToClipboard("npm i superkey @headlessui/react")
                }
              >
                {copy ? <BiCheck size={18} /> : <BiCopy size={18} />}
              </button>
              <p className="font-mono">npm i superkey @headlessui/react</p>
            </div>
          </div>
          <Link
            href="/docs/getting-started"
            className="flex items-center text-gray-800 dark:text-gray-200 dark:hover:text-white"
          >
            <BiRocket size={20} className="mr-3" />
            Explore docs
          </Link>
        </div>
      </div>
    </>
  );
}
