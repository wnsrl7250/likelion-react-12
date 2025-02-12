import { useEffect, useRef, useState } from 'react';
import { Search } from '@mynaui/icons-react';
import VanillaTilt, { type TiltOptions } from 'vanilla-tilt';
import { tm } from '@/utils/tw-merge';

const VANILLA_TILT_OPTIONS: TiltOptions = {
  // 기울이는 방향을 반대로 변경
  reverse: false,
  // 최대 기울기 회전(도°)
  max: 15,
  // X축의 시작 기울기(도°)
  startX: 0,
  // Y축의 시작 기울기(도°)
  startY: 0,
  // 관점(perspective) 값이 낮을수록 기울기가 더 커짐
  perspective: 1000,
  // 스케일 ( 2 = 200%, 1.5 = 150% )
  scale: 1.2,
  // Enter/Exit 전환 속도
  speed: 600,
  // Enter/Exit 시 전환 설정
  transition: true,
  // "x" 또는 "y" 축 활성화 설정 (`null`일 경우 양쪽 모두 활성화)
  axis: null,
  // 종료 시, 기울기 효과를 재설정
  reset: true,
  // 종료 재설정이 [0,0](기본값) 또는 [startX, startY]로 이동하는지 여부
  'reset-to-start': true,
  // Enter/Exit 시 사용되는 이징 함수
  easing: 'cubic-bezier(.03,.98,.52,.99)',
  // "글레어(섬광)" 효과 설정
  glare: false,
  // 최대 "글레이" 불투명도 설정 (1 = 100%, 0.5 = 50%)
  'max-glare': 0.65,
  // false = VanillaTilt가 글레어 요소를 생성함
  // true = .js-tilt-glare > .js-tilt-glare-inner를 사용자가 직접 추가해야 함.
  'glare-prerender': false,
  // CSS 선택자 또는 HTML 요소 링크 마우스 이벤트 수신
  'mouse-event-element': undefined,
  // 장치 방향 감지 활성/비활성화
  gyroscope: true,
  // 장치 X축 각도 하한(bottom limit) → 이 각도로 회전된 장치는 마치 마우스가 요소의 왼쪽 테두리에 있는 것처럼 요소를 기울임
  gyroscopeMinAngleX: -45,
  // 장치 X축 각도 상한(top limit) → 이 각도로 회전된 장치는 마치 마우스가 요소의 오른쪽 테두리에 있는 것처럼 요소를 기울임
  gyroscopeMaxAngleX: 45,
  // 장치 Y축 각도 하한(bottom limit) → 이 각도로 회전된 장치는 마치 마우스가 요소의 위쪽 테두리에 있는 것처럼 요소를 기울임
  gyroscopeMinAngleY: -45,
  // 장치 Y축 각도 상한(top limit) → 이 각도로 회전된 장치는 마치 마우스가 요소의 아래쪽 테두리에 있는 것처럼 요소를 기울임
  gyroscopeMaxAngleY: 45,
};

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

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const formElement = formRef.current;
    if (formElement) {
      VanillaTilt.init(formElement, {
        ...VANILLA_TILT_OPTIONS,
        glare: true,
        'max-glare': 1,
      });
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (searchInputRef.current) {
        searchInputRef.current.focus();
      }
    }, 1000);
  }, []);

  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const boxElement = boxRef.current;
    if (boxElement) {
      VanillaTilt.init(boxElement, {
        ...VANILLA_TILT_OPTIONS,
        glare: true,
        'max-glare': 0.45,
      });
    }
  }, []);

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

      <form ref={formRef} className="my-10 flex">
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

      <div ref={boxRef} className="size-40 bg-zinc-900" />
    </section>
  );
}

export default AccessDOMPage;
