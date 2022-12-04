<div align="center">

<a href="#">
<img src="./web/public/images/banner_gh.jpg" />
</a>

<p></p>

<a href="https://superkey.vercel.app/docs/getting-started">Getting Started</a>
<span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
<a href="https://github.com/pheralb/superkey/tree/main/examples">Examples</a>
<span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
<a href="#-getting-started">Contribute</a>

![GitHub releases](https://img.shields.io/github/release/pheralb/superkey)
![GitHub stars](https://img.shields.io/github/stars/pheralb/superkey)
![GitHub issues](https://img.shields.io/github/issues/pheralb/superkey)
![GitHub license](https://img.shields.io/github/license/pheralb/superkey)

</div>

## 👋 Introduction

[**Superkey**](https://superkey.vercel.app/) is a stylized command palette component built with [React](https://reactjs.org/), [Tailwind CSS](https://tailwindcss.com/) & [HeadlessUI](https://headlessui.com/) ready to be used in your next project.

## 🤝 Contributing

### 1. [Fork](https://github.com/pheralb/superkey/fork) and clone the repository:

```bash
git clone git@github.com:your-username/superkey.git
```

### 2. Install dependencies:

```bash
npm install
# or
yarn install
# or
ultra install
# or
pnpm install
```

### 3. Run monorepo:

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

## 📦 Monorepo structure:

### Examples:

- A list with examples of how to use Superkey.

### Packages:

- `component` : The Superkey component. Using [Tailwind CSS](https://tailwindcss.com/) & [HeadlessUI](https://headlessui.com/).

- `eslint-config-custom` : Shared ESLint configuration for Superkey.

- `tailwind-config` : Shared Tailwind CSS configuration for Superkey.

- `tsconfig` : Shared TypeScript configuration for Superkey.

### Web

- `Superkey website + docs` : Built with Nextjs & next-mdx-remote.

## 📚 Props

### Command

| -   | Prop               | Description                                              | Required     |
| --- | ------------------ | -------------------------------------------------------- | ------------ |
| ⚙️  | `children`         | Inside it uses the input, list and options components.   | **Required** |
| ⚙️  | `open`             | Open or close the command palette.                       | **Required** |
| ⚙️  | `commandFunction`  | Function to be executed when click an option.            | Optional     |
| ⚙️  | `onClose`          | Function to be executed when close the command palette.  | Optional     |
| ⚙️  | `afterLeave`       | Function to be executed after close the command palette. | Optional     |
| 🎨  | `className`        | Class to be added to the command palette.                | Optional     |
| 🎨  | `overlayClassName` | Class to be added to the overlay.                        | Optional     |

### CommandInput

| -   | Prop             | Description                                          | Type         |
| --- | ---------------- | ---------------------------------------------------- | ------------ |
| ⚙️  | `onChange`       | Action when the user types in the search field.      | **Required** |
| ⚙️  | `placeholder`    | The placeholder of the search text field.            | Optional     |
| 🎨  | `searchIcon`     | Adds an icon to the search field.                    | Optional     |
| 🎨  | `className`      | Class to be added to the all component.              | Optional     |
| 🎨  | `inputClassName` | Class to be added to the input text field component. | Optional     |

### CommandList

| -   | Prop       | Description                    | Type         |
| --- | ---------- | ------------------------------ | ------------ |
| ⚙️  | `children` | Inside imports CommandOptions. | **Required** |

### CommandOption

| -   | Prop        | Description                                       | Type         |
| --- | ----------- | ------------------------------------------------- | ------------ |
| ⚙️  | `value`     | Value of each option.                             | **Required** |
| ⚙️  | `children`  | Inside, the option information will be displayed. | **Required** |
| 🎨  | `className` | Modifies the styles of the option component.      | Optional     |

## 🔑 License

- [MIT](https://github.com/pheralb/superkey/blob/main/LICENSE).
