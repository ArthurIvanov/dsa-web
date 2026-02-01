---
title: Еще раз привет!
slug: hello-once-again
date: "2025-06-15"
image: /illustration.png
---

После выхода Next.js 9.3 статическая генерация страниц (SSG) стала простой. В этом посте — как строить блог на **getStaticProps** и **getStaticPaths**.

## Зачем SSG

Страницы собираются на этапе сборки. Пользователь получает готовый HTML, без ожидания запросов к API. Это ускоряет загрузку и улучшает SEO.

## Структура проекта

-   `content/` — markdown-файлы постов с front-matter (title, slug, date)
-   `getStaticProps()` — читает файлы и отдаёт данные странице при сборке
-   `getStaticPaths()` — задаёт список путей для динамических маршрутов вроде `blog/[slug]`

## Итог

Собрать блог на Next.js с Markdown и SSG можно за несколько шагов: папка с `.md`, парсинг через gray-matter и рендер через remark или react-markdown.
