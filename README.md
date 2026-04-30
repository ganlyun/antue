<p align="center"><a href="https://zzuu666.github.io/antue" target="_blank"><img src="./icon.svg" height="120"></a></p>


<p align="center">
  <a href="https://github.com/zzuu666/antue/actions/workflows/ci.yml"><img src="https://github.com/zzuu666/antue/actions/workflows/ci.yml/badge.svg?branch=master" alt="CI"></a>
  <a href="https://codecov.io/gh/zzuu666/antue"><img src="https://codecov.io/gh/zzuu666/antue/branch/master/graph/badge.svg" alt="Codecov" /></a>
  <a href="https://badge.fury.io/js/antue"><img src="https://badge.fury.io/js/antue.svg" alt="npm version" height="18"></a>
</p>

# Ant Design Vue Implementation

A set of enterprise-class UI components for Vue 3, following the [Ant Design](https://ant.design/index-cn) specification.

## ⚡ Tech Stack

- **Vue 3** - Progressive JavaScript framework
- **Vite 8** - Next generation frontend tooling
- **pnpm** - Fast, disk space efficient package manager
- **Node.js 24** - JavaScript runtime

## 📦 Installation

```bash
pnpm install
```

## 🚀 Development

Start the development server:

```bash
pnpm dev
```

The application will be available at `http://localhost:8080/`

## 🔍 Code Quality

Lint code for errors and warnings:

```bash
pnpm lint
```

Auto-fix linting issues:

```bash
pnpm lint:fix
```

## 🧪 Testing

Run tests in watch mode (development):

```bash
pnpm test
```

Run tests once (CI/CD):

```bash
pnpm test:run
```

Run tests with coverage report:

```bash
pnpm test:coverage
```

**Test Framework:** Vitest + Vue Test Utils v2
- Fast, Vite-native test runner
- Vue 3 component testing support
- JSDOM environment for DOM simulation

## 🏗️ Build

Build for production:

```bash
pnpm build
```

## 📝 Project Structure

```
antue/
├── components/          # UI component library
│   ├── style/          # Global styles and themes
│   ├── _mixin/         # Shared mixins
│   └── ...             # Individual components
├── examples/           # Demo and documentation
├── site/               # Documentation site
└── scripts/            # Build and utility scripts
```

## ✨ Features

- 🎨 Enterprise-class UI components
- 📱 Responsive design
- ♿ Accessibility support
- 🌍 Internationalization ready
- 🎯 TypeScript support (planned)

## 🔄 Migration Notes

This project has been migrated from Vue 2 to Vue 3. Key changes include:

- Updated to Vue 3 Composition API and Options API compatibility
- Migrated from Webpack to Vite for faster development experience
- Updated lifecycle hooks (`beforeDestroy` → `beforeUnmount`, etc.)
- Converted JSX render functions to Vue 3 `h()` function
- Removed deprecated Vue 2 APIs (`Vue.extend()`, `new Vue()`)
- Updated third-party dependencies for ES module compatibility

## 🤝 Contributing

We welcome contributions! Please feel free to submit issues and pull requests.

## 📄 License

MIT License

## 👥 Join Us

We welcome you to join in the development of Antue. Visit our [documentation site](https://zzuu666.github.io/antue/) to get started.

---

**Note:** If you're looking for a more mature Ant Design Vue implementation, we recommend [Ant Design Vue](https://www.antdv.com/). This project serves as a learning resource and experimental implementation.