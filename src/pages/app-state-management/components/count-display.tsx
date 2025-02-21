import { useCountStore } from '@/stores/count';
import { memo } from 'react';

function CountDisplay() {
  const count = useCountStore((s) => s.count);

  return <output className="font-black text-3xl">{count}</output>;
}

export default memo(CountDisplay);
