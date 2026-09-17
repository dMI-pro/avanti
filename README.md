# Avanti

Фронтенд на **Vue 3** + **Vite** + **TypeScript**.

## Требования

- Node.js `^22.18.0` или `>=24.12.0`
- npm (идёт вместе с Node)

## Установка

```sh
npm install
```

## Скрипты

| Команда | Описание |
| --- | --- |
| `npm run dev` | Dev-сервер с HMR |
| `npm run build` | Type-check + production-сборка в `dist/` |
| `npm run preview` | Локальный просмотр production-сборки |
| `npm run type-check` | Проверка типов (`vue-tsc`) |
| `npm run build-only` | Сборка без type-check |

## Стек

- Vue 3.5
- Vite 8
- TypeScript 6
- `@vitejs/plugin-vue`
- `vite-plugin-vue-devtools`

Алиас `@` → `src/`.

## IDE

Рекомендуется [VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (Vetur отключить).

Для отладки в браузере — [Vue.js DevTools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd).
