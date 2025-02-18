import { useEffect, useState } from 'react';
import type { PostgrestError } from '@supabase/supabase-js';
import type { MemoItem } from './lib/supabase-client';
import MemoList from './components/memo-list';
import Loading from './components/loading';
import { getMemoList } from './lib/api';

function MemoListPage() {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<null | MemoItem[]>(null);
  const [error, setError] = useState<null | PostgrestError>(null);

  useEffect(() => {
    let ignore = false;

    getMemoList()
      .then(({ error, data }) => {
        if (error) {
          throw error;
        }

        if (data && !ignore) {
          setData(data);
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
      <h1 className="sr-only">메모 리스트 (with Supabase)</h1>
      {loading && <Loading />}
      {error && <div role="alert">{error.message}</div>}
      {data && <MemoList items={data} />}
    </section>
  );
}

export default MemoListPage;
