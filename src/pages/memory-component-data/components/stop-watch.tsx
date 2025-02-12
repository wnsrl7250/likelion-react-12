import { useEffect, useState } from 'react';
import { tm } from '@/utils/tw-merge';

/*
  // reset time
  const startTime = Date.now();
  let nowTime = Date.now();

  // start
  const clearIntervalId = setInterval(() => {
    // update now time
    nowTime = Date.now();
    console.log((nowTime - startTime) / 1000);
  }, 1000 / 60);

  clearInterval(clearIntervalId);
*/

// Frame Per Seconds
const FPS = 1000 / 60;

// 호출 시점의 현재 시간 값 반환 함수
const getTime = () => Date.now();

// 타임 포멧팅 함수
// recordTime + nowTime - startTime
const formatTime = (time: number) => {
  // 밀리초(milliseconds)
  const milliseconds = parseInt(`${time % 100}`, 10);
  // 초(seconds) = 1000ms
  const seconds = parseInt(`${(time / 1000) % 60}`, 10);
  // 분(minutes) = 60ss
  const minutes = parseInt(`${(time / (1000 * 60)) % 60}`, 10);
  // 시(hours) = 60mm
  const hours = parseInt(`${(time / (1000 * 60 * 60)) % 60}`, 10);

  // 포멧팅
  // (반환 값: "hh:mm:ss:ms")
  const [hh, mm, ss, ms] = [hours, minutes, seconds, milliseconds].map(
    (time) => {
      return time.toLocaleString('ko-KR', {
        minimumIntegerDigits: 2,
      });
    }
  );

  return `${hh}:${mm}:${ss}:${ms}`;
};

// 컴포넌트 --------------------------------------------------------
function StopWatch() {
  // [상태]
  // 시작 시간
  const [startTime, setStartTime] = useState(getTime);

  // 현재 시간
  const [nowTime, setNowTime] = useState(getTime);

  // 기록 시간
  const [recordTime, setRecordTime] = useState(0);

  // 타이머 시작 여부
  const [isStart, setIsStart] = useState(false);

  const resetTime = () => {
    setStartTime(getTime);
    setNowTime(getTime);
  };

  // [이펙트]
  // 외부 시스템인 브라우저 API와 동기화
  useEffect(() => {
    let clearIntervalId: ReturnType<typeof setInterval> | number = 0;

    if (isStart) {
      // console.log('시작');
      resetTime();
      clearIntervalId = setInterval(() => {
        setNowTime(getTime);
      }, FPS);
    } else {
      // console.log('일시정지');
      clearInterval(clearIntervalId);
      // 기록 시간 업데이트
      setRecordTime((recordTime) => recordTime + nowTime - startTime);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isStart]);

  // [이벤트 핸들러]
  const handleStartOrPause = () => {
    setIsStart((s) => !s);
  };

  const handleStop = () => {
    setIsStart(false);
    setRecordTime(0);
    resetTime();
  };

  // [파생된 상태]
  // 타임 포멧팅
  // "hh:mm:ss:ms"
  const time = formatTime(recordTime + nowTime - startTime);

  return (
    <article aria-label="스톱워치" className="flex flex-col gap-2">
      <time
        dateTime={time}
        className="px-4 py-2 bg-black text-white text-lg text-center w-46 font-mono"
      >
        {time}
      </time>
      <div className="flex gap-1">
        <button
          type="button"
          onClick={handleStartOrPause}
          className={tm(
            'cursor-pointer opacity-75',
            'grid place-content-center',
            'bg-react text-white px-7 py-0.5 rounded-full font-semibold',
            'hover:opacity-100'
          )}
        >
          {isStart ? '일시정지' : '시작'}
        </button>
        <button
          type="button"
          onClick={handleStop}
          className={tm(
            'cursor-pointer opacity-90',
            'grid place-content-center',
            'bg-sky-600 text-white px-7 py-0.5 rounded-full font-semibold',
            'hover:opacity-100'
          )}
        >
          정지
        </button>
      </div>
    </article>
  );
}

export default StopWatch;
