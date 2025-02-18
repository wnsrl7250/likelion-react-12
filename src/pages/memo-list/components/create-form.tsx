import { tm } from '@/utils/tw-merge';
import { SendSolid } from '@mynaui/icons-react';
import type { MemoItemInsert } from '../lib/supabase-client';
import { addMemoItem } from '../lib/api';
import { useId } from 'react';

function CreateForm() {
  const handleAddMemo = async (formData: FormData) => {
    console.log(Object.fromEntries(formData));

    return;

    const newMemoItem = {} as MemoItemInsert;

    const { error, data } = await addMemoItem(newMemoItem);
    if (error) {
      throw error;
    }

    if (data) {
      // 화면 업데이트
      console.log(data);
    }
  };

  const titleId = useId();
  const contentId = useId();

  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-xl font-semibold">메모 작성</h2>
      <form
        action={handleAddMemo}
        className="flex flex-col gap-2 border-3 border-react rounded-sm p-3"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor={titleId} className="font-medium">
            제목
          </label>
          <input
            type="text"
            name="title"
            id={titleId}
            placeholder="제목 작성"
            className="bg-react text-white py-1.5 px-2.5 rounded-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor={contentId} className="font-medium">
            내용
          </label>
          <textarea
            rows={3}
            name="content"
            id={contentId}
            placeholder="내용을 작성하세요."
            className="bg-react text-white py-1.5 px-2.5 rounded-sm"
          />
        </div>
        <button
          type="submit"
          aria-label="작성"
          title="작성"
          className={tm(
            'cursor-pointer self-start',
            'p-1 bg-react text-white/80 rounded-sm',
            'hover:text-sky-600'
          )}
        >
          <SendSolid size={20} />
        </button>
      </form>
    </section>
  );
}

export default CreateForm;
