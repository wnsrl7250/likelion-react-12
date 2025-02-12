import { useEffect, useRef, useState } from 'react';
import { Search } from '@mynaui/icons-react';
import { tm } from '@/utils/tw-merge';
import TiltBox from './components/tilt-box';

function AccessDOMPage() {
  // 컴포넌트 바디(body)
  // 렌더링 프로세스
  // 순수성(purity)
  // 상태 선언, 업데이트
  // 리액트 자동 화면 변경

  // useRef 훅 함수 DOM 노드 접근 참조 객체 생성
  const abbrRef = useRef<HTMLElement>(null); // { current: null }
  console.log(0, { 'abbrRef.current': abbrRef.current });

  // 이펙트
  useEffect(() => {
    // 컴포넌트 DOM 노드 접근/조작
    if (abbrRef.current) {
      console.log(1, { 'abbrRef.current': abbrRef.current });
    }
  }, []);

  const [isParse, setIsParse] = useState(false);

  // 사이드 이펙트 처리
  // 리액트 돔의 노드가 아닌, 실제 DOM 노드에 접근
  // - 이벤트 핸들러 (No 1.)
  // - 이펙트 함수 (No 2.)
  // - ref 콜백 함수 (No 3.)

  // const sectionRefCallback = () => {
  //   // 사이드 이펙트 처리
  //   const clearId = setInterval(() => console.log(Date.now()), 1000 / 60);

  //   return () => {
  //     clearInterval(clearId);
  //     console.log('정리');
  //   };
  // };

  const searchInputRef = useRef<HTMLInputElement>(null);

  // const formRef = useRef<HTMLFormElement>(null);

  // useEffect(() => {
  //   const formElement = formRef.current;
  //   if (formElement) {
  //     VanillaTilt.init(formElement, {
  //       ...VANILLA_TILT_OPTIONS,
  //       glare: true,
  //       'max-glare': 1,
  //     });
  //   }
  // }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (searchInputRef.current) {
  //       searchInputRef.current.focus();
  //     }
  //   }, 1000);
  // }, []);

  // 마크업(markup) 생성
  return (
    <section
    // ref={sectionRefCallback}
    >
      <h2 className="text-2xl text-react font-medium">
        <abbr
          ref={abbrRef}
          title="Document Object Model"
          className="cursor-help no-underline"
        >
          {isParse ? 'Document Object Model' : 'DOM'}
        </abbr>{' '}
        접근/조작
      </h2>
      <button
        type="button"
        onClick={() => {
          setIsParse((p) => !p);
        }}
      >
        DOM 용어 풀이
      </button>

      <form
        // ref={formRef}
        className="my-10 flex"
      >
        <div>
          <label htmlFor="like-a-book" className="sr-only">
            선호 도서
          </label>
          <input
            ref={searchInputRef}
            id="like-a-book"
            type="search"
            placeholder="좋아하는 도서는?"
            className="bg-react text-white px-3 py-2"
          />
        </div>
        <button
          type="submit"
          aria-label="검색"
          className={tm(
            'cursor-pointer',
            'py-2 w-20 grid place-items-center',
            'bg-cyan-700 text-white '
          )}
        >
          <Search />
        </button>
      </form>

      <div className="flex flex-wrap">
        {Array(12)
          .fill(null)
          .map((_, index) => (
            <TiltBox key={index}>{index}</TiltBox>
          ))}
      </div>
    </section>
  );
}

export default AccessDOMPage;
