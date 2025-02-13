import { useEffect, useState } from 'react';

interface ResponseData {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
}

function DataFetchingPage() {
  // 레시피 1개 가져오기
  // 서버(리액트의 외부 시스템)
  // 이펙트를 사용해 서버에 요청

  // 화면 업데이트를 위해 관리할 상태 2가지
  const [data, setData] = useState<null | ResponseData>(null);
  const [error, setError] = useState<null | Error>(null);

  useEffect(() => {
    // 마운트 이후 1회 서버에 요청 (반복 X)
    // Strict Mode에서는 2회 렌더링 하므로 데이터 요청 2회!!
    // Fetch API or Axios

    // Promise를 처리하려면?
    fetch('https://dummyjson.com/recipes/1')
      .then((response) => response.json())
      .then((data) => {
        setData(data as ResponseData);
        setError(null);
      })
      .catch((error) => {
        setError(error as Error);
        setData(null);
      });

    // 서버에서 응답받은 데이터를 화면에 렌더링하고 싶어요!
    // 여러분은 어떻게 해야 할까요?

    // 리액트 사용 중...
    // 데이터 [    ] => 화면 업데이트
    // 데이터 (상태로 선언)
    // 데이터 변경 (화면 업데이트)
  }, []);

  return (
    <section className="flex flex-col gap-5 my-5">
      <h2 className="text-2xl font-medium">데이터 가져오기</h2>

      <h3 className="text-xl font-medium">Data</h3>
      <pre className="rounded p-6 overflow-auto bg-react text-blue-500 text-sm">
        {JSON.stringify(data, null, 2)}
      </pre>

      <h3 className="text-xl font-medium">Error</h3>
      <pre className="rounded p-6 overflow-auto bg-react text-red-500 text-sm">
        {JSON.stringify(error, null, 2)}
      </pre>
    </section>
  );
}

export default DataFetchingPage;
