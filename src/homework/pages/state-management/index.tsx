import { useState } from 'react';
import { type AccordionItemType } from './components/accordion-item';
// import { AccordionOpenedCount } from './components/accordion-opened-count';
import AccordionList from './components/accordion-list';

const INITIAL_ACCORDION_ITEMS: AccordionItemType[] = [
  {
    id: 'item-1',
    title: '넷플릭스는 무엇인가요?',
    children: (
      <>
        <p>
          넷플릭스는 각종 수상 경력에 빛나는 시리즈, 영화, 애니메이션,
          다큐멘터리 등 다양한 콘텐츠를 인터넷 연결이 가능한 수천 종의
          디바이스에서 시청할 수 있는 스트리밍 서비스입니다.
        </p>
        <p>
          저렴한 월 요금으로 원하는 시간에 원하는 만큼 즐길 수 있습니다.
          무궁무진한 콘텐츠가 준비되어 있으며 매주 새로운 시리즈와 영화가
          제공됩니다.
        </p>
      </>
    ),
    open: false,
  },
  {
    id: 'item-2',
    title: '넷플릭스는 요금은 얼마인가요?',
    children: (
      <>
        <p>
          스마트폰, 태블릿, 스마트 TV, 노트북, 스트리밍 디바이스 등 다양한
          디바이스에서 월정액 요금 하나로 넷플릭스를 시청하세요. 멤버십 요금은
          월 5,500원부터 17,000원까지 다양합니다. 추가 비용이나 약정이 없습니다.
        </p>
      </>
    ),
    open: false,
  },
];

function StateManagement() {
  // [상태]
  const [items, setItems] = useState<AccordionItemType[]>(
    INITIAL_ACCORDION_ITEMS
  );

  // [파생된 상태]
  // const openedItemCount = items.reduce(
  //   (count, item) => count + (item.open ? 1 : 0),
  //   0
  // );

  // [이벤트 핸들러 생성 함수 -> 이벤트 핸들러 반환 -> 상태 업데이트 로직 포함]
  const generateUpdateHandler = (index: number) => () => {
    const nextItems = items.map((item, i) => {
      return index !== i ? item : { ...item, open: !item.open };
    });

    setItems(nextItems);
  };

  return (
    <section className="transform">
      <h2 className="sr-only">상태 관리</h2>
      <AccordionList
        title="넷플릭스 서비스"
        items={items}
        generateUpdateHandler={generateUpdateHandler}
      />
      <DoNotRenderUnnecessary />
    </section>
  );
}

export default StateManagement;

function DoNotRenderUnnecessary() {
  return (
    <article>
      <h3>나는 상태 공유를 원하지 않아요~</h3>
      <p>상태 공유해주지 마세요. 저는 다시 렌더링 되고 싶지 않답니다. 🥲</p>
    </article>
  );
}
