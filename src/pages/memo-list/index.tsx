import type { PostgrestError } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import MemoList from './components/memo-list';
import { getMemoItemById } from './lib/memo-list';
import type { MemoItem } from './types';

function MemoListPage() {
  const [loading, setLoading] = useState<boolean>(true);
  const [data] = useState<null | MemoItem[]>(null);
  const [error, setError] = useState<null | PostgrestError>(null);

  useEffect(() => {
    let ignore = false;

    // getMemoList({ from: 0, to: 1 })
    getMemoItemById(1)
      .then(({ error, data }) => {
        if (error) {
          throw error;
        }

        if (data && !ignore) {
          console.log(data);
          // setData(data);
          setLoading(false);
        }
      })
      .catch((error: PostgrestError) => {
        setError(error);
        setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <section>
      <h1>Memo List</h1>
      {loading && <div role="alert">로딩 중...</div>}
      {error && <div role="alert">{error.message}</div>}
      {data && <MemoList items={data} />}
    </section>
  );
}

export default MemoListPage;
