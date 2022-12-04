import { NavLink, Outlet, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import { routes, iData } from "src/data";
import {
  BiBox,
  BiExpandAlt,
  BiExtension,
  BiLinkExternal,
  BiRightTopArrowCircle,
} from "react-icons/bi";

export const loader: LoaderFunction = async () => {
  return json(routes);
};

const Docs = () => {
  const data = useLoaderData();
  return (
    <>
      <nav className="fixed z-40 h-full overflow-x-hidden overflow-y-auto border-r w-60 border-neutral-800">
        <div className="p-7">
          <div className="text-base font-medium text-neutral-300">
            <div className="flex items-center mb-3 space-x-2">
              <BiExtension size={18} />
              <h4>Introduction</h4>
            </div>
            <div className="pl-4 ml-2 space-y-2 border-l border-neutral-800">
              {data
                .filter((item: iData) => item.category === "intro")
                .map((item: iData) => (
                  <NavLink
                    to={`/docs/${item.slug}`}
                    key={item.slug}
                    className="flex w-full text-sm hover:text-white"
                  >
                    {item.title}
                  </NavLink>
                ))}
            </div>
          </div>
          <div className="mt-8 text-base font-medium text-neutral-300">
            <div className="flex items-center mb-3 space-x-2">
              <BiBox size={18} />
              <h4>Components</h4>
            </div>
            <div className="pl-4 ml-2 space-y-2 border-l border-neutral-800">
              {data
                .filter((item: iData) => item.category === "components")
                .map((item: iData) => (
                  <NavLink
                    to={`/docs/${item.slug}`}
                    key={item.slug}
                    className="flex w-full text-sm hover:text-white"
                  >
                    {item.title}
                  </NavLink>
                ))}
            </div>
          </div>
          <div className="mt-8 text-base font-medium text-neutral-300">
            <div className="flex items-center mb-3 space-x-2">
              <BiExpandAlt size={18} />
              <h4>Examples</h4>
            </div>
            <div className="pl-4 ml-2 space-y-2 border-l border-neutral-800">
              {data
                .filter((item: iData) => item.category === "examples")
                .map((item: iData) => (
                  <a
                    key={item.slug}
                    href={item.slug}
                    className="flex items-center w-full text-sm hover:text-white"
                    rel="noreferrer"
                  >
                    {item.title}
                    <BiLinkExternal size={13} className="ml-2" />
                  </a>
                ))}
            </div>
          </div>
        </div>
      </nav>
      <div className="transition-all duration-100">
        <article className="pb-8 mx-auto prose mt-9 prose-invert">
          <Outlet />
        </article>
      </div>
    </>
  );
};

export default Docs;
