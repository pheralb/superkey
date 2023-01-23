import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";

interface SidebarLinkProps {
  path: string;
  title: string;
}

const SidebarLink = (props: SidebarLinkProps) => {
  const router = useRouter();
  const query = router.query;
  const slug = query.slug;
  return (
    <Link
      href={props.path}
      key={props.path}
      className={clsx(
        "pl-5 py-1 text-sm font-medium border-l  hover:text-gray-900 dark:hover:text-white duration-100 transition-all",
        `/docs/${slug}` === props.path
          ? "text-gray-900 dark:text-white border-neutral-500 dark:border-neutral-300 border-l-2"
          : "text-gray-500 dark:text-gray-400 border-neutral-300 dark:border-neutral-800"
      )}
    >
      {props.title}
    </Link>
  );
};

export default SidebarLink;
