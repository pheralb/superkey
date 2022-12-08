import Link from "next/link";
import { useRouter } from "next/router";

interface SidebarLinkProps {
  path: string;
  title: string;
}

const SidebarLink = (props: SidebarLinkProps) => {
  const router = useRouter();
  const query = router.query;
  const slug = query.slug;

  console.log(slug);
  return (
    <Link
      href={props.path}
      key={props.path}
      className={`pl-5 py-1 text-sm font-medium border-l border-gray-700 dark:border-neutral-800 text-gray-400 hover:text-gray-900 dark:hover:text-white duration-150 transition-all ${
        `/docs/${slug}` === props.path ? "text-gray-900 dark:text-white border-gray-700 dark:border-neutral-500" : ""
      }`}
    >
      {props.title}
    </Link>
  );
};

export default SidebarLink;
