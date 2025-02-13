import { useEffect, useRef, useState } from 'react';
import { tm } from '@/utils/tw-merge';
import { getQueryParam } from './utils/query-param';
import SearchedList from './components/searched-list';
import SearchForm from './components/search-form';
import colorMoodList from './data/color-mood-list';
import { type ColorMoodItem } from './types';

const getQueryState = () => getQueryParam() ?? '';

function SearchListPage() {
  const [list, setList] = useState<ColorMoodItem[]>(colorMoodList);

  const handleUpdateList = (item: ColorMoodItem, isFavorited: boolean) => {
    setList(
      list.map((it) => (it.id === item.id ? { ...it, isFavorited } : it))
    );
  };

  const [query, setQuery] = useState(getQueryState);

  useEffect(() => {
    const handlePopState = () => {
      setQuery(getQueryState);
    };

    globalThis.addEventListener('popstate', handlePopState);

    return () => {
      globalThis.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // --------------------------------------------------------------------------

  // 참조 객체
  const sharedImperativeHandlesRef = useRef<{
    focus: () => void;
    select: () => void;
    remove: () => void;
  }>(null);

  useEffect(() => {
    const clearId = setTimeout(() => {
      const handles = sharedImperativeHandlesRef.current;
      if (handles) {
        handles.select();

        // [문제 상황]
        // 자식이 모든 권한을 부여했으므로
        // 자식 내부에 있는 감춰진 요소에 무슨 짓을 해도 된다.
        // 문제가 발생할 수 있다. 누군가에 의해....
        // 그 코드를 디버깅하기가 쉽지 않다.

        // [문제 해결]
        // 이런 어처구니 없는 상황이 누군가에 의해 발생하지 않도록
        // 컴포넌트 DOM을 전면 공개할 것이 아니라, 일부 명령형 기능(함수)만
        // 상위 컴포넌트에 공유하겠노라!!!
        // sharedImperativeHandlesRef.current.remove();
      }
    }, 900);

    return () => {
      clearTimeout(clearId);
    };
  });

  return (
    <section className={tm('flex flex-col gap-5 items-center')}>
      <h2 className="text-2xl font-medium text-react">카드 검색 리스트</h2>
      <SearchForm
        ref={sharedImperativeHandlesRef}
        query={query}
        setQuery={setQuery}
      />
      <SearchedList list={list} query={query} onUpdate={handleUpdateList} />
    </section>
  );
}

export default SearchListPage;
