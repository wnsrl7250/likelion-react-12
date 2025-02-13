import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import SearchInput from './components/search-input';
import TiltBox from './components/tilt-box';

function AccessDOMPage() {
  const [isParse, setIsParse] = useState(false);

  const searchInputRef = useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {
    console.log('layout effect');
  });

  useEffect(() => {
    console.log('effect');
  });

  useEffect(() => {
    const searchInput = searchInputRef.current;

    if (searchInput) {
      // searchInput 조작
      // 하위 컴포넌트의 DOM에 접근/조작
      // console.log(searchInput);

      setTimeout(() => {
        if (searchInputRef.current) {
          searchInputRef.current.focus();
        }
      }, 1000);
    }
  }, []);

  return (
    <section>
      <h2 className="text-2xl text-react font-medium mb-4">
        <abbr
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

      <form className="my-10 flex">
        {/* React 18 - React.forwardRef() 😥 */}
        {/* React 19+ - ref 😀 */}
        <SearchInput ref={searchInputRef} />
      </form>

      <div className="flex flex-wrap">
        {Array(12)
          .fill(null)
          .map((_, index) => (
            <TiltBox key={index}>{index + 1}</TiltBox>
          ))}
      </div>
    </section>
  );
}

export default AccessDOMPage;
