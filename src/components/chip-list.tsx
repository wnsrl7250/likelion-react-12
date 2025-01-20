import Chip from './chip';
import type { ChipList as ChipListType } from '@/types/chip';

interface ChipListProps {
  items: ChipListType;
}

function ChipList({ items }: ChipListProps) {
  return (
    <ul className="ChipList">
      {items.map((item) => (
        <li key={item.id}>
          <Chip item={item} />
        </li>
      ))}
    </ul>
  );
}

export default ChipList;
