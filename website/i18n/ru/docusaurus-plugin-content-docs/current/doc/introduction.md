---
sidebar_position: 1
slug: /
---

# Введение

**react-append-styles** - небольшая библиотека по работе с css in js.

[![npm size](https://img.shields.io/bundlephobia/min/react-append-styles)](https://www.npmjs.com/package/react-append-styles)
[![npm size](https://img.shields.io/bundlejs/size/react-append-styles)](https://www.npmjs.com/package/react-append-styles)
[![npm](https://img.shields.io/npm/v/react-append-styles)](https://www.npmjs.com/package/react-append-styles)
![react version](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2FAnn2827%2Freact-append-styles%2Fmain%2Fpackage.json&query=%24.peerDependencies.react&label=react)


## Функционал
- генерация стилей на основе css объекта;
- добавление к сгенерированным классам уникального постфикса;
- добавление/обновление в head полученных стилей и удаление их при размонтировании компонента;
- создание тем и использование их при генерации стилей;
- поддержка `cssVar`, `@media` и динамических `props`.


## Рекомендации

Может использоваться в качестве вспомогательной библиотеки, если:
- в качестве основного подхода к стилизации выбран css;
- есть необходимость переопределить несколько стилей из js через классы.

:::warning

Библиотека имеет базовый функционал для темизации, но в дальнейшем он расширяться не будет.
Если вам требуется расширенная темизации, то вы можете воспользоваться более мощными (и тяжелыми) библиотеками. Например:
- [emotion](https://emotion.sh/docs/introduction)
- [styled-components](https://styled-components.com/)

:::
