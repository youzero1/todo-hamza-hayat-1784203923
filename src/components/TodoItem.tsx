import type { Todo } from '@/types/todo';

type Props = {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export default function TodoItem({ todo, onToggle, onDelete }: Props) {
  return (
    <li className="group flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      {/* Checkbox */}
      <button
        onClick={() => onToggle(todo.id)}
        aria-label={todo.completed ? 'Mark incomplete' : 'Mark complete'}
        className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition cursor-pointer ${
          todo.completed
            ? 'bg-violet-500 border-violet-500'
            : 'border-gray-300 hover:border-violet-400'
        }`}
      >
        {todo.completed && (
          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </button>

      {/* Text */}
      <span
        className={`flex-1 text-sm transition-colors ${
          todo.completed ? 'line-through text-gray-400' : 'text-gray-700'
        }`}
      >
        {todo.text}
      </span>

      {/* Delete button */}
      <button
        onClick={() => onDelete(todo.id)}
        aria-label="Delete task"
        className="opacity-0 group-hover:opacity-100 w-6 h-6 flex items-center justify-center rounded-md text-gray-400 hover:text-red-500 hover:bg-red-50 transition cursor-pointer"
      >
        ✕
      </button>
    </li>
  );
}
