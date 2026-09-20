# Avanti

Фронтенд на **Vue 3** + **Vite** + **TypeScript**.

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

## Структура `src/`

```
src/
  components/   # UI-компоненты, avanti_<назначение>.vue
  views/        # Страницы-агрегаторы (avanti_home_page.vue)
  mocks/        # Предметные данные экранов (home.ts)
  constants/    # Статические справочники (nav.ts)
  assets/       # icons / images / styles (tokens.css — базовый модуль 8px)
  types.ts      # Общие TS-типы проекта
```

## UI-кит

Токены: `assets/styles/tokens.css` — базовый модуль `--avanti-modul: 8px`, все spacing/размеры через `calc(var(--avanti-modul) * N)`.