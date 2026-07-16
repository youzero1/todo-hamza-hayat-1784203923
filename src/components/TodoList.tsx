import type { Todo } from '@/types/todo';
import TodoItem from '@/components/TodoItem';

type Props = {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export default function TodoList({ todos, onToggle, onDelete }: Props) {
  if (todos.length === 0) {
    return (
      <div className="py-12 text-center text-gray-400 text-sm">
        <span className="text-3xl block mb-3">🎉</span>
        No tasks yet — add one above!
      </div>
    );
  }

  return (
    <ul className="flex flex-col gap-2">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
}
