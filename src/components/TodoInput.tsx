import { useState } from 'react';

type Props = {
  onAdd: (text: string) => void;
};

export default function TodoInput({ onAdd }: Props) {
  const [value, setValue] = useState('');

  function handleSubmit() {
    if (!value.trim()) return;
    onAdd(value);
    setValue('');
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') handleSubmit();
  }

  return (
    <div className="flex gap-2 mb-6">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="What needs to be done?"
        className="flex-1 px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-800 placeholder-gray-400 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent transition"
      />
      <button
        onClick={handleSubmit}
        className="px-5 py-3 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 text-white text-sm font-semibold rounded-xl shadow-sm transition cursor-pointer"
      >
        Add
      </button>
    </div>
  );
}
