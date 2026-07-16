---
status: pending
title: Todo App
---

1. Create `/app/src/styles/global.css` — import Tailwind CSS v4 with `@import "tailwindcss";` and add any base styles needed for a clean background and font.

2. Create `/app/src/types/todo.ts` — define a `Todo` TypeScript type with fields: `id` (string), `text` (string), `completed` (boolean), and `createdAt` (Date).

3. Create `/app/src/hooks/useTodos.ts` — a custom hook that manages todo state using `useState` and `localStorage` for persistence. Expose: `todos`, `addTodo`, `toggleTodo`, `deleteTodo`, and `clearCompleted`.

4. Create `/app/src/components/TodoInput.tsx` — a text input with an "Add" button. Calls `addTodo` on submit (Enter key or button click). Clears input after adding. Shows placeholder text like "What needs to be done?".

5. Create `/app/src/components/TodoItem.tsx` — renders a single todo row with a checkbox to toggle completion, the todo text (strikethrough when completed), and a delete (✕) button that appears on hover.

6. Create `/app/src/components/TodoList.tsx` — renders the list of `TodoItem` components. Shows an empty state message ("No tasks yet — add one above!") when the list is empty.

7. Create `/app/src/components/TodoFooter.tsx` — displays the count of remaining incomplete tasks, a filter bar (All / Active / Completed), and a "Clear completed" button that only appears when there are completed todos.

8. Create `/app/src/pages/TodoPage.tsx` — the main page that composes `TodoInput`, `TodoList`, and `TodoFooter`. Holds the active filter state and passes the filtered todo list to `TodoList`. Styled with a centered card layout.

9. Update `/app/src/main.tsx` — import `global.css` and render `TodoPage` as the root component, wrapped in `StrictMode`.

Expected outcome: A fully functional, visually polished todo app where users can add tasks, check them off, delete them, filter by status, and see their list persist across page reloads.
