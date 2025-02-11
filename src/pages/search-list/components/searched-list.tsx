import { tm } from '@/utils/tw-merge';
import { type ColorMoodItem } from '../types';
import Card from './card';

interface SearchedListProps {
  query: string;
  list: ColorMoodItem[];
  onUpdate: (item: ColorMoodItem, isFavorited: boolean) => void;
}

function SearchedList({ list, query, onUpdate }: SearchedListProps) {
  // 사용자가 입력한 검색어(query) 소문자화
  const word = query.toLowerCase();

  // [상태 -> 속성(읽기전용) ] list
  // [파생된 상태] filteredList = query를 기반으로 하여 list를 순환한 후, 새 리스트를 반환
  const filteredList = list.filter(
    (item) =>
      item.title.includes(word) ||
      item.description.includes(word) ||
      item.tags.includes(word)
  );

  return (
    <section>
      <h3 className="sr-only">검색된 리스트</h3>
      <ul className={tm('flex flex-col gap-12')}>
        {filteredList.map((item) => (
          <Card key={item.id} item={item} onUpdate={onUpdate} />
        ))}
      </ul>
    </section>
  );
}

export default SearchedList;
