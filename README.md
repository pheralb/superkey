> 🚧 **Superkey is under development and is not ready for production**. If you have any bugs or problems please [create an issue](https://github.com/pheralb/superkey/issues/new). 🚧

<div align="center">

<a href="https://superkey.vercel.app/">
<img src="./web/public/images/banner_gh.jpg" />
</a>

<p></p>

<a href="https://superkey.vercel.app/">Website</a>
<span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
<a href="https://github.com/pheralb/superkey/tree/main/examples">Examples</a>
<span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
<a href="#install">Install</a>
<span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
<a href="#-contributing">Contribute</a>

![GitHub releases](https://img.shields.io/github/release/pheralb/superkey)
![GitHub stars](https://img.shields.io/github/stars/pheralb/superkey)
![GitHub issues](https://img.shields.io/github/issues/pheralb/superkey)
![GitHub license](https://img.shields.io/github/license/pheralb/superkey)

</div>

## 👋 Introduction

**Superkey** is a stylized command palette component built with [React](https://reactjs.org/), [Tailwind CSS](https://tailwindcss.com/) & [HeadlessUI](https://headlessui.com/) ready to be used in your next project.

## 🚀 Getting Started

- 🚧 **Superkey is only compatible with React 18.**

### Install

```bash
npm install superkey
```

### Usage

```tsx
import { Command, CommandInput, CommandList, CommandOption } from "superkey";

const App = () => {
  return (
    <Command open={true}>
      <CommandInput />
      <CommandList>
        <CommandOption value="Option 1">
          <h1>Option 1</h1>
          <p>Description</p>
        </CommandOption>
        <CommandOption value="Option 2">
          <h1>Option 1</h1>
          <p>Description</p>
        </CommandOption>
      </CommandList>
    </Command>
  );
};
```

## 📚 Props

### Command

| Prop            | Description                                            | Required     |
| --------------- | ------------------------------------------------------ | ------------ |
| children        | Inside it uses the input, list and options components. | **Required** |
| open            | Open or close the command palette.                     | **Required** |
| commandFunction | Function to be executed when click an option.          | Optional     |

### CommandInput

| Prop        | Description                                     | Required     |
| ----------- | ----------------------------------------------- | ------------ |
| placeholder | The placeholder of the search text field.       | Optional     |
| onChange    | Action when the user types in the search field. | **Required** |
| searchIcon  | Adds an icon to the search field.               | Optional     |
| className   | Modifies the styles of the text field.          | Optional     |

### CommandList

| Prop     | Description                    | Required     |
| -------- | ------------------------------ | ------------ |
| children | Inside imports CommandOptions. | **Required** |

### CommandOption

| Prop      | Description                                       | Required     |
| --------- | ------------------------------------------------- | ------------ |
| value     | Value of each option.                             | **Required** |
| className | Modifies the styles of the option component.      | Optional     |
| children  | Inside, the option information will be displayed. | **Required** |

## 📦 Examples

- [**Nextjs 13 + Typescript + Tailwind CSS**](https://github.com/pheralb/superkey/blob/main/web/src/example/command.tsx).

## 🤝 Contributing

1. [Fork](https://github.com/pheralb/superkey/fork) & clone the project:

```bash
git clone git@github.com:[your-user]/superkey.git
```

2. Install dependencies:

```bash
cd superkey
npm install
```

3. Make your changes, create commits and push to your fork:

```bash
git add .
git commit -m "My super changes"
git push origin [your-branch]
```

4. Open a pull request 🚀.

## 🔑 License

- [MIT](https://github.com/pheralb/superkey/blob/main/LICENSE).
