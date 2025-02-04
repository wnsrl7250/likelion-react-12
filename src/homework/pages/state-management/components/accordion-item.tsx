import { useState } from 'react';
import { tm } from '@/utils/tw-merge';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

function AccordionItem({ title, children }: AccordionItemProps) {
  const [isVisible, setIsVisible] = useState(false);
  const handleToggle = () => setIsVisible((v) => !v);

  return (
    <div className={tm('flex flex-col space-y-2 w-full', 'mt-2 mb-4')}>
      <button
        type="button"
        className={tm(
          'cursor-pointer',
          'text-xl font-medium text-slate-800',
          'hover:text-primary-500'
        )}
        onClick={handleToggle}
      >
        {title}
      </button>
      <div
        className={tm(
          { hidden: !isVisible },
          'text-sm text-slate-800 leading-[1.5]',
          '*:mb-2',
          // [from]
          'opacity-0 -translate-y-2 h-0',
          // @staring-style
          'starting:opacity-0 starting:-translate-y-2 starting:h-0',
          // 전환(transition)
          'transition-all transition-discrete duration-700 delay-100',
          // [to]
          { 'opacity-100 translate-y-0 h-30': isVisible }
        )}
      >
        {children}
      </div>
    </div>
  );
}

export default AccordionItem;
