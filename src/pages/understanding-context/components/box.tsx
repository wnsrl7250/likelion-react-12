// import { use } from 'react';
import { tm } from '@/utils/tw-merge';
import { BoxLevelContext, useBoxLevel } from '../context/box-level';

function Box({ children }: { children?: React.ReactNode }) {
  // const boxLevel = use(BoxLevelContext);
  const boxLevel = useBoxLevel();
  const nextBoxLevel = boxLevel + 1;

  if (nextBoxLevel > 4) {
    throw new Error('box level은 4까지만 가능합니다.');
  }

  return (
    <BoxLevelContext value={nextBoxLevel}>
      <div
        className={tm(
          'flex flex-col justify-center items-center',
          'size-60 bg-black/20 text-white p-5'
        )}
      >
        <span className="p-5">{nextBoxLevel}</span>
        {children}
      </div>
    </BoxLevelContext>
  );
}

export default Box;
