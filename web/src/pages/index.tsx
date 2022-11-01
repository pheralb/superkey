import type { NextPage } from "next";
import CommandExample from "../example/command";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-16">
      {/* <h1 className="text-5xl font-medium">A stylized command menu for React</h1> */}
      <CommandExample />
    </div>
  );
};

export default Home;