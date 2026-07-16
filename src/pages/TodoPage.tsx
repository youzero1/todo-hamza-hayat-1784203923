import { useState } from 'react';
import { useTodos } from '@/hooks/useTodos';
import type { Filter } from '@/types/todo';
import TodoInput from '@/components/TodoInput';
import TodoList from '@/components/TodoList';
import TodoFooter from '@/components/TodoFooter';

export default function TodoPage() {
  const { todos, addTodo, toggleTodo, deleteTodo, clearCompleted } = useTodos();
  const [filter, setFilter] = useState<Filter>('all');

  const filtered = todos.filter((t) => {
    if (filter === 'active') return !t.completed;
    if (filter === 'completed') return t.completed;
    return true;
  });

  const remaining = todos.filter((t) => !t.completed).length;
  const hasCompleted = todos.some((t) => t.completed);

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-indigo-50 flex items-start justify-center pt-20 px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-violet-600 tracking-tight">My Todos</h1>
          <p className="text-gray-400 text-sm mt-1">Stay on top of your day</p>
        </div>

        {/* Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white p-6">
          <TodoInput onAdd={addTodo} />
          <TodoList todos={filtered} onToggle={toggleTodo} onDelete={deleteTodo} />
          {todos.length > 0 && (
            <TodoFooter
              remaining={remaining}
              hasCompleted={hasCompleted}
              filter={filter}
              onFilterChange={setFilter}
              onClearCompleted={clearCompleted}
            />
          )}
        </div>
      </div>
    </div>
  );
}
