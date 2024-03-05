# CSS as String Plugin for esbuild

Transform your CSS files into string exports effortlessly with the `esbuild-css-as-string` plugin for esbuild. Designed to streamline the development of web components and widgets, this plugin is a must-have for developers working with Shadow DOM or seeking to encapsulate their styles within JavaScript modules. By enabling CSS imports directly as strings, it offers an elegant solution for styling isolation, enhancing both the scalability and maintainability of your projects.

## Features

- **CSS Import as String**: Easily import CSS files as strings, perfect for injecting styles into Shadow DOM.
- **Easy Integration**: Seamlessly integrates with your esbuild setup, making it straightforward to add to your project.
- **Improved Style Encapsulation**: Achieve style encapsulation within web components, avoiding global style leaks.
- **Shadow DOM Support**: Ideal for projects utilizing Shadow DOM for component-based architectures.

## Installation

To get started with the `esbuild-css-as-string` plugin, first ensure you have esbuild installed in your project. If not, you can add it along with the `esbuild-css-as-string` plugin by running:

```sh
npm install esbuild --save-dev
npm install esbuild-css-as-string --save-dev
```

## Setup

Integrating the esbuild-css-as-string plugin into your esbuild configuration is straightforward. Here's a quick guide:

```js
// esbuild.config.js
import * as esbuild from 'esbuild'
import cssAsStringPlugin from 'esbuild-css-as-string';

esbuild.build({
  entryPoints: ['src/index.js'],
  bundle: true,
  outfile: 'dist/bundle.js',
  plugins: [cssAsStringPlugin],
}).catch(() => process.exit(1));
```

## Usage

Once installed and configured, you can import CSS files as strings within your JavaScript modules. This feature is especially useful for applying styles within Shadow DOM. Here’s an example of how to use it:

```js
import styles from './styles.css';

const initWidget = () => {
  const rootElement = document.createElement("div");
  const shadowRoot = rootElement.attachShadow({ mode: "open" });
  const styleElement = document.createElement("style");
  
  styleElement.textContent = styles;
  shadowRoot.appendChild(styleElement);
  document.body.appendChild(rootElement);
};

initWidget();
```

This setup ensures that your styles are encapsulated within the Shadow DOM, preventing any style leakage and maintaining the integrity of your component's visual presentation.

## Contributing

We welcome contributions! If you have suggestions for improvements or encounter any issues, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
