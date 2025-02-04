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
    <div className="flex flex-col space-y-0.5">
      <button type="button" onClick={handleToggle}>
        {title}
      </button>
      <div className={tm({ hidden: !isVisible })}>{children}</div>
    </div>
  );
}

export default AccordionItem;
