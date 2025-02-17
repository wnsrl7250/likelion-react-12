import delay from '@/utils/delay';
import { useEffect, useState } from 'react';

interface State {
  loading: boolean;
  error: null | Error;
  data: null;
}

const ENDPOINT = 'https://dummyjson.com/recipes/9';

function DataFetchingPage() {
  // 화면 업데이트를 위해 필요한 상태 선언
  // - loading: boolean / status: 'idle' | 'pending' | 'loading' | 'fulfilled' | 'rejected'
  // - error: null | Error
  // - data: null | T

  const [state, setState] = useState<State>({
    loading: false,
    error: null,
    data: null,
  });

  // 이펙트 (외부 시스템과 동기화)
  // - API : 서버(server) 데이터베이스에서 데이터 가져오기 (비동기)
  // - 데이터 가져오기 이후, 상태 업데이트 요청 -> 화면 업데이트 (동기화)
  useEffect(
    () => {
      // 데이터 쿼리(data query)
      // Fetch API 사용

      // 이펙트 함수 내부에 상태 업데이트 제외 설정을 위한
      // 지역 변수 선언
      let ignore = false;

      // 로딩 상태로 전환
      setState((s) => ({ ...s, loading: true }));

      const fetchData = async () => {
        try {
          await delay(2000);
          const response = await fetch(ENDPOINT);
          const jsonData = await response.json();

          // ignore 값이 false일 때만 상태 업데이트
          if (!ignore) {
            console.log('fulfilled:: update state');
            setState({
              loading: false,
              data: jsonData,
              error: null,
            });
          }
        } catch (error) {
          // ignore 값이 false일 때만 상태 업데이트
          if (!ignore) {
            console.log('rejected:: update state');
            setState({
              loading: false,
              data: null,
              error: error as Error,
            });
          }
        }
      };

      fetchData();

      // 클린업(정리) 함수
      return () => {
        // 지역 변수 변경
        ignore = true;
      };
    },
    // 서버에 데이터 요청하는 것은 최초 1회
    // 종속성 배열을 비워두면 마운트 이후 1회 실행
    []
  );

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
