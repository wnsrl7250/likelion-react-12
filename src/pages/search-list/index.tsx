import { useState } from 'react';
import { tm } from '@/utils/tw-merge';
import { getQueryParam } from './utils/query-param';
import SearchedList from './components/searched-list';
import SearchForm from './components/search-form';
import colorMoodList from './data/color-mood-list';
import { type ColorMoodItem } from './types';

function SearchListPage() {
  const [list, setList] = useState<ColorMoodItem[]>(colorMoodList);

  // 지연된 초기화(lazy initializer)
  // useState() 훅에 설정된 함수
  const [query, setQuery] = useState(() => getQueryParam() ?? '');

  const handleUpdateList = (item: ColorMoodItem, isFavorited: boolean) => {
    setList(
      list.map((it) => (it.id === item.id ? { ...it, isFavorited } : it))
    );
  };

  return (
    <section className={tm('flex flex-col gap-5 items-center')}>
      <h2 className="text-2xl font-medium text-react">카드 검색 리스트</h2>
      <SearchForm query={query} setQuery={setQuery} />
      <SearchedList list={list} query={query} onUpdate={handleUpdateList} />
    </section>
  );
}

export default SearchListPage;
