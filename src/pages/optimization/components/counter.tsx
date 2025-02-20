import { useState } from 'react';

// const messageElement = createElement(Message, {
//   greeting: '요소 최적화가 필요해요! 😳',
// });

// const messageElement = <Message greeting="요소 최적화가 필요해요! 😳" />;

/* -------------------------------------------------------------------------- */

interface CounterProps {
  messageElement?: React.ReactElement;
}

function Counter({ messageElement }: CounterProps) {
  const [count, setCount] = useState(0);
  const increment = () => setCount((c) => c + 1);

  return (
    <div>
      <button
        type="button"
        className="cursor-pointer bg-react text-white size-8"
        onClick={increment}
      >
        {count}
      </button>
      {messageElement}
    </div>
  );
}

export default Counter;
