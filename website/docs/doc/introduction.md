---
sidebar_position: 1
slug: /
---

# Introduction

**react-append-styles** - a small library for working with css in js.

[![npm size](https://img.shields.io/bundlephobia/min/react-append-styles)](https://www.npmjs.com/package/react-append-styles)
[![npm size](https://img.shields.io/bundlejs/size/react-append-styles)](https://www.npmjs.com/package/react-append-styles)
[![npm](https://img.shields.io/npm/v/react-append-styles)](https://www.npmjs.com/package/react-append-styles)
![react version](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2FAnn2827%2Freact-append-styles%2Fmain%2Fpackage.json&query=%24.peerDependencies.react&label=react)

## Functional
- generating styles based on a css object;
- adding a unique postfix to the generated classes;
- adding/updating the received styles to the head and deleting them when unmounting the component;
- creating themes and using them when generating styles;
- support for `cssVar`, `@media` and dynamic `props`.


## Recommendations

It can be used as an auxiliary library if:
- css is chosen as the main approach to styling;
- there is a need to redefine several styles from js through classes.

:::warning

The library has basic functionality for creating themes, but this functionality will not be expanded in the future.
If you need advanced theme creation capabilities, then you can use more powerful (and heavy) libraries. For example:
- [emotion](https://emotion.sh/docs/introduction)
- [styled-components](https://styled-components.com/)

:::
