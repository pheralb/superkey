import { BiSearch, BiPlus, BiGroup, BiBookOpen, BiMessageSquare, BiMailSend, BiMoon } from "react-icons/bi";

export const exampleData = [
  {
    id: 1,
    name: "Search Projects",
    icon: <BiSearch size={18} />,
    command: "search",
  },
  {
    id: 2,
    name: "Create New Project",
    icon: <BiPlus size={18} />,
    command: "create",
  },
  {
    id: 3,
    name: "Search Teams",
    icon: <BiGroup size={18} />,
    command: "teams",
  },
  {
    id: 4,
    name: "Docs",
    icon: <BiBookOpen size={18} />,
    command: "docs",
  },
  {
    id: 5,
    name: "Send feedback",
    icon: <BiMessageSquare size={18} />,
    command: "feedback",
  },
  {
    id: 6,
    name: "Contact support",
    icon: <BiMailSend size={18} />,
    command: "support",
  },
  {
    id: 7,
    name: "Change theme",
    icon: <BiMoon size={18} />,
    command: "theme",
  }
];
