import { tm } from '@/utils/tw-merge';
import { EditOne, TrashOne } from '@mynaui/icons-react';
import type { MemoItem as MemoItemType } from '../lib/supabase-client';

interface MemoItemProps {
  item: MemoItemType;
}

function MemoItem({ item }: MemoItemProps) {
  return (
    <li className="flex flex-col gap-1.5 p-4 bg-react text-white rounded-sm">
      <h3 className="font-light tracking-wide text-xl text-sky-500">
        {item.title}
      </h3>
      <p className="text-sm text-slate-400 leading-relaxed">{item.content}</p>
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
  );
}

export default MemoItem;
