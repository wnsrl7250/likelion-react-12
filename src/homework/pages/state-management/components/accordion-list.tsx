import { tm } from '@/utils/tw-merge';
import AccordionItem, { type AccordionItemType } from './accordion-item';

interface AccordionListProps {
  title: string;
  items: AccordionItemType[];
  generateUpdateHandler?: (index: number) => () => void;
}

function AccordionList({
  title,
  items,
  generateUpdateHandler,
}: AccordionListProps) {
  return (
    <article className={tm('flex flex-col space-y-4 items-center', 'mt-10')}>
      <h3 className="sr-only">{title}</h3>
      {items.map((item, index) => (
        <AccordionItem
          key={item.id}
          title={item.title}
          open={item.open}
          onUpdate={generateUpdateHandler?.(index)}
        >
          {item.children}
        </AccordionItem>
      ))}
    </article>
  );
}

export default AccordionList;
