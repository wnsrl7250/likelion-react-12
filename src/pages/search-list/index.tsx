import { useState } from 'react';
import SearchForm from './components/search-form';
import SearchedList from './components/searched-list';
import colorMoodList from './data/color-mood-list';
import { type ColorMoodItem } from './types';

function SearchListPage() {
  const [list, setList] = useState<ColorMoodItem[]>(colorMoodList);

  // list = [{ id, title, description, tags, isFavorited }, { id, title, description, tags, isFavorited }]

  const handleUpdateList = (item: ColorMoodItem, nextIsFavorited: boolean) => {
    // item = { id, title, description, tags, isFavorited }
    // isFavorited = 다음 번 렌더링에서 화면에 표시될 즐겨찾기 상태 값

    console.log('before\n', list);

    // 다음 렌더링에서 list 상태 스냅샷
    const nextList = list.map((it /* listItem */) => {
      // 원본 아이템 id === 사용자 클릭한 아이템
      // id가 같지 않을 경우, 원본 아이템 반환
      // id가 같을 경우, 객체 합성({ ...원본아이템, isFavorited: nextIsFavorited })
      return it.id === item.id ? { ...it, isFavorited: nextIsFavorited } : it;
    });

    console.log('before\n', nextList);

    // React에 다음 렌더링에서 list 상태 스냅샷 전달하면
    // 다시 렌더링 될 때, list 상태 값으로 nextList가 사용 됨
    setList(nextList);
  };

  return (
    <section>
      <h2 className="text-2xl font-medium text-react">카드 검색 리스트</h2>
      <SearchForm />
      <SearchedList list={list} onUpdate={handleUpdateList} />
    </section>
  );
}

export default SearchListPage;
