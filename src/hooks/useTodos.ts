import { useState, useEffect } from 'react';
import type { Todo } from '@/types/todo';

function loadFromStorage(): Todo[] {
  try {
    const raw = localStorage.getItem('todos');
    if (!raw) return [];
    const parsed = JSON.parse(raw) as Array<Omit<Todo, 'createdAt'> & { createdAt: string }>;
    return parsed.map((t) => ({ ...t, createdAt: new Date(t.createdAt) }));
  } catch {
    return [];
  }
}

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>(loadFromStorage);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function addTodo(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;
    setTodos((prev) => [
      ...prev,
      { id: crypto.randomUUID(), text: trimmed, completed: false, createdAt: new Date() },
    ]);
  }

  function toggleTodo(id: string) {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }

  function deleteTodo(id: string) {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }

  function clearCompleted() {
    setTodos((prev) => prev.filter((t) => !t.completed));
  }

  return { todos, addTodo, toggleTodo, deleteTodo, clearCompleted };
}
