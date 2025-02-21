import { useState, memo } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => setCount((c) => c + 1);

  return (
    <div className="flex gap-2 items-center">
      <button
        type="button"
        className="cursor-pointer bg-react text-white size-10 font-black rounded-full"
        onClick={increment}
      >
        {count}
      </button>
    </div>
  );
}

export default memo(Counter);
