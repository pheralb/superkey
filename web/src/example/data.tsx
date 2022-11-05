import {
  BiSearch,
  BiPlus,
  BiGroup,
  BiBookOpen,
  BiMessageSquare,
  BiMailSend,
  BiMoon,
  BiBookmarkAlt,
} from "react-icons/bi";
import { BsBox, BsGithub, BsTwitter } from "react-icons/bs";

export const exampleData = [
  {
    id: 1,
    name: "Getting Started",
    icon: <BiBookOpen size={18} />,
    command: "docs",
    slug: "/docs/getting-started",
  },
  {
    id: 2,
    name: "Examples",
    icon: <BiBookmarkAlt size={18} />,
    command: "examples",
    slug: "/examples",
  },
  {
    id: 3,
    name: "Github",
    icon: <BsGithub size={18} />,
    command: "github",
    slug: "https://github.com/pheralb/superkey",
  },
  {
    id: 4,
    name: "Twitter",
    icon: <BsTwitter size={18} />,
    command: "twitter",
    slug: "https://twitter.com/pheralb_",
  },
];
