import type { Filter } from '@/types/todo';

type Props = {
  remaining: number;
  hasCompleted: boolean;
  filter: Filter;
  onFilterChange: (f: Filter) => void;
  onClearCompleted: () => void;
};

const FILTERS: { label: string; value: Filter }[] = [
  { label: 'All', value: 'all' },
  { label: 'Active', value: 'active' },
  { label: 'Completed', value: 'completed' },
];

export default function TodoFooter({
  remaining,
  hasCompleted,
  filter,
  onFilterChange,
  onClearCompleted,
}: Props) {
  return (
    <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
      {/* Remaining count */}
      <span className="min-w-[80px]">
        {remaining} {remaining === 1 ? 'item' : 'items'} left
      </span>

      {/* Filter buttons */}
      <div className="flex gap-1">
        {FILTERS.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => onFilterChange(value)}
            className={`px-3 py-1.5 rounded-lg font-medium transition cursor-pointer ${
              filter === value
                ? 'bg-violet-100 text-violet-600'
                : 'text-gray-500 hover:bg-gray-100'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Clear completed */}
      <div className="min-w-[80px] text-right">
        {hasCompleted && (
          <button
            onClick={onClearCompleted}
            className="text-gray-400 hover:text-red-500 transition cursor-pointer"
          >
            Clear completed
          </button>
        )}
      </div>
    </div>
  );
}
