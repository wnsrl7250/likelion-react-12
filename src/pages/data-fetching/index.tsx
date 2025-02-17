import { useEffect, useState } from 'react';
import { getRecipeById } from './lib/recipes';
import type { Recipe } from './types';
import { ChevronLeft, ChevronRight } from '@mynaui/icons-react';

interface State<T> {
  loading: boolean;
  error: null | Error;
  data: null | T;
}

function DataFetchingPage() {
  const [dataId, setDataId] = useState(1);
  const [state, setState] = useState<State<Recipe>>({
    loading: false,
    error: null,
    data: null,
  });

  useEffect(() => {
    let ignore = false;

    setState((s) => ({ ...s, loading: true }));

    getRecipeById(dataId)
      .then((recipe) => {
        if (!ignore) {
          setState({
            loading: false,
            data: recipe,
            error: null,
          });
        }
      })
      .catch((error: Error) => {
        if (!ignore) {
          setState({
            loading: false,
            data: null,
            error,
          });
        }
      });

    return () => {
      ignore = true;
    };
  }, [dataId]);

  const { error } = state;

  return (
    <section className="flex flex-col gap-5 my-5">
      <h2 className="text-2xl font-medium">데이터 가져오기</h2>

      <div className="flex gap-1">
        <button
          type="button"
          className="cursor-pointer bg-react text-white p-2"
          aria-label="이전 레시피"
          onClick={() => setDataId((i) => i - 1)}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          type="button"
          className="cursor-pointer bg-react text-white p-2"
          aria-label="다음 레시피"
          onClick={() => setDataId((i) => i + 1)}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-medium">Loading</h3>
        <p>로딩 상태(loading)</p>
        <pre className="rounded p-6 overflow-auto bg-react text-[#22d045] text-sm">
          {state.loading.toString()}
        </pre>
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-medium">Data</h3>
        <p>성취(fulfilled)</p>
        <pre className="rounded p-6 overflow-auto bg-react text-[#27a0cc] text-sm">
          {JSON.stringify(state.data, null, 2) ?? 'DATA'}
        </pre>
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-medium">Error</h3>
        <p>거부(rejected)</p>
        <pre className="rounded p-6 overflow-auto bg-react text-[#f0439f] text-sm">
          {error ? error.message : 'ERROR'}
        </pre>
      </div>
    </section>
  );
}

export default DataFetchingPage;
