import type { NextPage } from 'next'
import { Command } from "superkey";

const Home: NextPage = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <Command />
    </div>
  )
}

export default Home
