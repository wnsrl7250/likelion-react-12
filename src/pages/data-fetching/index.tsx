import delay from '@/utils/delay';
import { useEffect, useState } from 'react';

interface State {
  loading: boolean;
  error: null | Error;
  data: null;
}

const ENDPOINT = 'https://dummyjson.com/recipes/9';

function DataFetchingPage() {
  const [state, setState] = useState<State>({
    loading: false,
    error: null,
    data: null,
  });

  useEffect(() => {
    // let ignore = false;

    // AbortController 인스턴스 생성
    const controller = new AbortController();

    setState((s) => ({ ...s, loading: true }));

    const fetchData = async () => {
      try {
        await delay(500);
        // AbortController 인스턴스의 시그널을 fetch() 함수에 옵션으로 설정
        const response = await fetch(ENDPOINT, { signal: controller.signal });
        const jsonData = await response.json();

        // if (!ignore) {
        console.log('fulfilled:: update state');
        setState({
          loading: false,
          data: jsonData,
          error: null,
        });
        // }
      } catch (error) {
        // 요청 중단한 경우, 오류가 아니므로 함수 중단
        if ((error as Error).name.includes('AbortError')) {
          return;
        }

        // if (!ignore) {
        console.log('rejected:: update state');
        setState({
          loading: false,
          data: null,
          error: error as Error,
        });
        // }
      }
    };

    fetchData();

    return () => {
      // ignore = true;

      // 리액트의 스트릭트 모드에 의해 2회 이펙트 함수가 실행됨에 따라
      // 불필요해진 이전 요청 AbortController 중단(취소)
      controller.abort();
    };
  }, []);

  const { error } = state;

  return (
    <section className="flex flex-col gap-5 my-5">
      <h2 className="text-2xl font-medium">데이터 가져오기</h2>

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
