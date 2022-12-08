import { frameworkGuides } from "@/data/routes";
import Link from "next/link";

const FrameworkGuide = () => {
  return (
    <div className="flex flex-row space-x-3">
      {frameworkGuides.map((framework) => (
        <Link href={framework.path} className="no-underline">
          <div
            className="flex flex-col items-center justify-center p-3 transition-all duration-200 border rounded-md bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 border-neutral-300 dark:border-neutral-800"
          >
            <p className="text-lg">{framework.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default FrameworkGuide;
