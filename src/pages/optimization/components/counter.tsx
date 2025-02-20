import { useState } from 'react';
import Message from './message';

// const messageElement = createElement(Message, {
//   greeting: '요소 최적화가 필요해요! 😳',
// });

const messageElement = <Message greeting="요소 최적화가 필요해요! 😳" />;

function Counter() {
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
      {/* <Message greeting="요소 최적화가 필요해요! 😳" /> */}
      {messageElement}
    </div>
  );
}

export default Counter;
