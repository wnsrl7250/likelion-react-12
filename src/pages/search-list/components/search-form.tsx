import { useId, useState } from 'react';
import { tm } from '@/utils/tw-merge';
import { deleteQueryParam, setQueryParam } from '../utils/query-param';

// 브라우저에서 쿼리 스트링(문자값) 디코딩하여 가져오는 함수
const getQueryString = () => decodeURIComponent(location.search);

interface SearchFormProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

function SearchForm({ query, setQuery }: SearchFormProps) {
  const searchInputId = useId();
  const nextQuery = query.trim();

  const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value);
  };

  const handleSearch = () => {
    if (nextQuery.length > 0) {
      setQueryParam(nextQuery);
      setQueryString(getQueryString);
    } else {
      deleteQueryParam();
    }
  };

  const [queryString, setQueryString] = useState(getQueryString);

  return (
    <>
      <output className="bg-react text-white px-4 py-2 rounded-full text-xs font-mono">
        {queryString}
      </output>
      <form className={tm('mb-10')} action={handleSearch}>
        <label htmlFor={searchInputId} className="sr-only">
          카드 검색
        </label>
        <div className={tm('flex gap-1')}>
          <input
            type="search"
            name="query"
            id={searchInputId}
            value={query}
            onChange={handleQuery}
            className={tm(
              'rounded-sm px-2.5 py-1',
              'bg-white text-react font-medium'
            )}
          />
          <button
            type="submit"
            className={tm(
              'cursor-pointer opacity-90',
              'grid place-content-center',
              'bg-react text-white',
              'px-4 py-2 rounded-sm',
              'hover:opacity-100'
            )}
          >
            검색
          </button>
        </div>
      </form>
    </>
  );
}

export default SearchForm;
