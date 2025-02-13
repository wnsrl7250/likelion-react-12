import { tm } from '@/utils/tw-merge';
import { motion } from 'motion/react';
import { useState } from 'react';
import AnimationForm from './animation-form';

function MotionComponent() {
  // [상태 선언] 애니메이션 속성 객체
  const [options, setOptions] = useState({
    scale: 1,
    rotate: 0,
    x: 0,
    y: 0,
  });

  const handleChangeOptions = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    setOptions((options) => ({
      ...options,
      [name]: Number(value),
    }));
  };

  return (
    <div lang="en" className="flex gap-10 p-2">
      <motion.div
        animate={options}
        transition={{ duration: 0.6, type: 'spring' }}
        className={tm(
          'order-1',
          'w-42 h-24.5 p-4',
          ' bg-react text-white font-thin tracking-wide text-2xl'
        )}
      >
        Motion for React
      </motion.div>

      <AnimationForm options={options} onChangeOptions={handleChangeOptions} />
    </div>
  );
}

export default MotionComponent;
