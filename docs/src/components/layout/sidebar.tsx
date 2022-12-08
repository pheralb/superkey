import { ReactNode, useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import SidebarContent from "../sidebar/content";

interface SidebarProps {
  children: ReactNode;
}

const Sidebar = (props: SidebarProps) => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  return (
    <div className="container mx-auto">
      <div className="h-full px-5 pb-3 overflow-x-hidden overflow-y-auto md:pb-10 md:px-0 md:w-64 md:fixed bg-backgroundLight dark:bg-backgroundDark">
        <div className="md:hidden">
          <button
            className="flex items-center justify-center w-full h-10 mt-2 border border-gray-300 rounded-md dark:border-neutral-700 md:hidden hover:bg-gray-100 dark:hover:bg-neutral-800"
            onClick={() => setOpenSidebar(!openSidebar)}
          >
            {openSidebar ? (
              <>
                <BiX size={20} className="mr-2" />
                Close
              </>
            ) : (
              <>
                <BiMenu size={20} className="mr-2" />
                Menu
              </>
            )}
          </button>
          {openSidebar && <SidebarContent />}
        </div>
        <div className="hidden md:block">
          <SidebarContent />
        </div>
      </div>
      <div className="transition-all duration-300 md:ml-64">
        {props.children}
      </div>
    </div>
  );
};

export default Sidebar;
