import { memo } from 'react';

function CountDisplay() {
  const count = 0;
  return <output className="font-black text-3xl">{count}</output>;
}

export default memo(CountDisplay);
