import type { MemoItem } from '../lib/supabase-client';
import CreateForm from './create-form';
import SearchForm from './search-form';
import SearchedList from './searched-list';

interface MemoListProps {
  items: MemoItem[];
}

function MemoList({ items }: MemoListProps) {
  return (
    <div>
      <CreateForm />
      <SearchForm />
      <SearchedList />
    </div>
  );
}

export default MemoList;
