# React Component Composer

![npm (scoped)](https://img.shields.io/npm/v/react-component-composer)
[![devDependencies Status](https://status.david-dm.org/gh/huynhducduy/react-component-composer.svg)](https://david-dm.org/huynhducduy/react-component-composer?type=dev)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/react-component-composer)
![npm](https://img.shields.io/npm/dm/react-component-composer)
![Dependent repos (via libraries.io), scoped npm package](https://img.shields.io/librariesio/dependent-repos/npm/react-component-composer)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fhuynhducduy%2Freact-component-composer.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fhuynhducduy%2Freact-component-composer?ref=badge_shield)

> A utility that help compose a bunch of components into a single one to avoid cases like provider hell.

Install with [npm](https://www.npmjs.com/)

```sh
npm i react-component-composer --save
```

Install with [yarn](https://yarnpkg.com/)

```sh
yarn add react-component-composer
```

## Table of Contents

<!-- toc -->

- [React Component Composer](#react-component-composer)
  - [Table of Contents](#table-of-contents)
  - [Usage](#usage)
  - [API](#api)
    - [default export](#default-export)
  - [Development](#development)
    - [Install dependencies](#install-dependencies)
    - [Watch mode](#watch-mode)
    - [Running tests](#running-tests)
    - [Build](#build)
  - [Contributing](#contributing)

## Usage

```js
import composeComponents from 'react-component-composer';

const Providers = composeComponents(
  SomeProvider
  [SomeProvider1, {someProps: 'SomeThing'}]
  [SomeProvider2]
  SomeProvider3
  SomeProvider4
  ['div', {className: 'main'}]
)

function App() {
  return (
    <Providers>
      <Main />
    </Providers>
  )
}
```

Is a replacement for

```js
function App() {
  return (
    <SomeProvider>
      <SomeProvider1 someProps="someThing">
        <SomeProvider2>
          <SomeProvider3>
            <SomeProvider4>
              <div className="main">
                <Main />
              </div>
            </SomeProvider4>
          </SomeProvider3>
        </SomeProvider2>
      </SomeProvider1>
    </SomeProvider>
  )
}
```

## API

### [default export](/src/index.tsx#L12)

This package has only one default export

**Params**

- `...args[]` **{React.ElementType | [React.ElementType, Record<string, unknown>]}**: List of components and props to compose

Return: **{JSX.Element}**: The composed component

## Development

### Install dependencies

```sh
yarn
```

### Watch mode

```sh
yarn
```

### Running tests

```sh
yarn test
```

### Build

```sh
yarn build
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/huynhducduy/react-component-composer/issues/new)
