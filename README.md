<div align="center">

<a href="https://superkey.vercel.app/">
<img src="./docs/public/img/banner_gh.png" />
</a>

<p></p>

<a href="https://superkey.vercel.app/docs/getting-started">Getting Started</a>
<span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
<a href="https://github.com/pheralb/superkey/tree/main/examples">Examples</a>
<span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
<a href="#-contributing">Contribute</a>

![Superkey Minzip Package Size](https://img.shields.io/bundlephobia/minzip/superkey)
![GitHub releases](https://img.shields.io/github/release/pheralb/superkey)
![GitHub stars](https://img.shields.io/github/stars/pheralb/superkey)
![GitHub issues](https://img.shields.io/github/issues/pheralb/superkey)
![GitHub license](https://img.shields.io/github/license/pheralb/superkey)

</div>

## 👋 Introduction

[**Superkey**](https://superkey.vercel.app/) is a stylized command palette component built with [React](https://reactjs.org/), [Tailwind CSS](https://tailwindcss.com/) & [HeadlessUI](https://headlessui.com/) ready to be used in your next project.

## ✨ Features

- ✅ **Easy to install**.
- ✅ **Support for keyboard navigation**.
- ✅ **Fully customizable**.
- ✅ **Fully tested, typed and reliable**.

## 👨‍🚀 Getting Started

1. **Install Superkey:**

```bash
# with npm:
npm install superkey @headlessui/react

# with yarn:
yarn add superkey @headlessui/react

# with pnpm:
pnpm install superkey @headlessui/react

# with ultra:
ultra install superkey @headlessui/react
```

2. **Add styles:**

```jsx
import "superkey/styles.css";
```

3. Create your first command palette component:

```jsx
import { useState } from "react";
import { Command, CommandInput, CommandList, CommandOption } from "superkey";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <Command
      open={open}
      onClose={() => {
        setOpen(false);
      }}
    >
      <CommandInput
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
      <CommandList>
        <CommandOption value="Option 1">
          <h1>Option 1</h1>
          <p>Description</p>
        </CommandOption>
        <CommandOption value="Option 2">
          <h1>Option 2</h1>
          <p>Description</p>
        </CommandOption>
      </CommandList>
    </Command>
  );
}
```

- 📚 [All docs here](https://superkey.vercel.app/docs/getting-started).

## 🤝 Contributing

1. [Fork](https://github.com/pheralb/superkey/fork) and clone the repository:

```bash
git clone git@github.com:your-username/superkey.git
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
ultra install
# or
pnpm install
```

3. Run [turborepo](https://turbo.build/repo):

```bash
npm run dev
# or
yarn dev
# or
ultra dev
# or
pnpm dev
```

- Open [http://localhost:3000](http://localhost:3000) with your browser to see app.

## 🔧 Stack

- [Tailwind CSS](https://tailwindcss.com/) - Rapidly build modern websites without ever leaving your HTML.
- [Headless UI](https://headlessui.com/) - Completely unstyled, fully accessible UI components.
- [Next.js + Contentlayer](https://www.contentlayer.dev/) - Content made easy for developers.
- [SWC](https://swc.rs/) - Rust-based platform for the Web.

## 🔑 License

- [MIT](https://github.com/pheralb/superkey/blob/main/LICENSE).
