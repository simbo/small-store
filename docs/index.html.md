---
title: Small Store

language_tabs:
  - typescript
  - javascript

toc_footers:
  - <a href='https://github.com/simbo/small-store' target='_blank'>small-store on GitHub</a>
  - <a href='https://www.npmjs.com/package/small-store' target='_blank'>small-store on npm</a>

includes:
  - 01_getting-started
  - 02_payloads
  - 03_selectors
  - 04_actions-stream
  - 05_effects
  - 06_react-integration
  - 07_angular-integration
  - 08_feedback

search: false

code_clipboard: true
---

# Introduction

> Install using npm:

```sh
npm install --save small-store rxjs
```

> Install using yarn:

```sh
yarn add small-store rxjs
```

<p style="font-size: 1.15em; margin-bottom: 2em;">Welcome to the documentation
for <strong>small-store</strong>, a simple but powerful state store for
javascript projects.</p>

[![npm Package Version](https://img.shields.io/npm/v/small-store?)](https://www.npmjs.com/package/small-store)
[![Package Dependencies](https://img.shields.io/david/simbo/small-store?label=deps)](https://www.npmjs.com/package/small-store?activeTab=dependencies)
[![Coveralls github](https://img.shields.io/coveralls/github/simbo/small-store)](https://coveralls.io/github/simbo/small-store)
[![GitHub Repo](https://img.shields.io/badge/repo-public-87ceeb)](https://github.com/simbo/small-store)
[![License MIT](https://img.shields.io/badge/license-MIT-4cc552)](http://simbo.mit-license.org/)

<p style="font-size: 1.15em; margin-top: 2em; font-weight: bold">Features:</p>

⭐️  **small in size**  
under 2KB in production build, under 1KB gzipped

⭐️  **uses well-known store practices like actions and effects**

⭐️  **immutable**  
by using [immer](https://immerjs.github.io/immer/docs/introduction)

⭐️  **reactive**  
by using [rxjs](https://rxjs-dev.firebaseapp.com/) (as peerDependency to avoid
version conflicts and keep your bundles small)

⭐️  **plattform agnostic**  
can be used anywhere: browser, server, mobile or on the moon

⭐️  **framework agnostic**  
can be used with anything: vanilla, react, preact, angular, vue or whatever you prefer

⭐️  **native typescript support**

⭐️  **open source and free for everybody**  
licensed under MIT
