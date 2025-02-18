import { tm } from '@/utils/tw-merge';
import type { MemoItem } from '../lib/supabase-client';
import { EditOne, TrashOne } from '@mynaui/icons-react';

interface SearchedListProps {
  items: MemoItem[];
  search: string;
}

function SearchedList({ items, search }: SearchedListProps) {
  const searchedItems = items.filter((item) => {
    const query = search.toLowerCase();

    return (
      item.title.toLowerCase().includes(query) ||
      item.content.toLowerCase().includes(query)
    );
  });

  return (
    <section className="flex flex-col gap-2">
      <h2 className="font-semibold text-xl">메모 리스트</h2>
      <ul className={tm('grid xs:grid-cols-2 sm:grid-cols-3 gap-2')}>
        {searchedItems.map((item) => (
          <li
            key={item.id}
            className="flex flex-col gap-1.5 p-4 bg-react text-white rounded-sm"
          >
            <h3 className="font-light tracking-wide text-xl text-sky-500">
              {item.title}
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              {item.content}
            </p>
            <div role="group" className="flex gap-1">
              <button
                type="button"
                aria-label="수정"
                title="수정"
                className={tm(
                  'cursor-pointer',
                  'size-5 opacity-75 hover:opacity-100'
                )}
              >
                <EditOne size={20} />
                {/* <EditOneSolid size={20} /> */}
              </button>
              <button
                type="button"
                aria-label="삭제"
                className={tm(
                  'cursor-pointer',
                  'size-5 opacity-75 hover:opacity-100'
                )}
              >
                <TrashOne size={20} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default SearchedList;
