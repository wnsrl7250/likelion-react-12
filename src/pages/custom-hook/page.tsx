import { tm } from '@/utils/tw-merge';
import useDocumentTitle from '@/hooks/use-document-title';
import Loading from '../memo-list/components/loading';

function CustomHookPage() {
  useDocumentTitle('커스텀 훅');

  return (
    <section className="flex flex-col gap-2">
      <h2 className="font-medium text-2xl mb-6">
        사용자 정의 훅 함수(Custom Hook) 활용
      </h2>

      <figure
        className={tm(
          'flex gap-5 justify-center',
          'border-4 border-black/10',
          'rounded-full p-6',
          'hover:border-black',
          'transition-colors duration-250 ease-in-out'
        )}
      >
        <Loading size={48} className="text-black/50" />
      </figure>
    </section>
  );
}

export default CustomHookPage;
