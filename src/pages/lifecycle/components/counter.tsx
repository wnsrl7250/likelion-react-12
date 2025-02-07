// --------------------------------------------------------------------------
// 클래스 컴포넌트 라이프사이클 메서드
import { tm } from '@/utils/tw-merge';
import { Component } from 'react';

// 속성(props)
interface Props {
  count?: number;
  step?: number;
  min?: number;
  max?: number;
}

type RequiredProps = Required<Props>;

// 상태(state)
interface State {
  count: number;
}

class Counter extends Component<Props, State> {
  // 기본 속성 값 설정
  static defaultProps: RequiredProps = {
    count: 9,
    step: 1,
    min: 0,
    max: 10,
  };

  // [라이프사이클 메서드] ---------------------------------------------
  // 생성(constructor) 시점
  constructor(props: Props) {
    // 반드시 호출되어야 함!
    // React.Component 클래스를 슈퍼 클래스로 사용할 때 props를 전달해야 함!
    super(props);

    // 컴포넌트 상태 선언
    // 클래스 인스턴스 멤버
    // this.state = {
    //   count: props.count ?? Counter.defaultProps.count,
    // };

    // this 바인딩
    // this.handleDecrease = this.handleDecrease.bind(this);
    // this.handleIncrease = this.handleIncrease.bind(this);
  }

  // <클래스 필드>
  state = {
    count: this.props.count ?? Counter.defaultProps.count,
  };

  // [라이프사이클 메서드] ---------------------------------------------
  // 렌더(render) 시점
  render() {
    // 컴포넌트 데이터(속성, 상태) 접근 가능
    // console.log(this.props);
    // console.log(this.state);

    return (
      <div className={tm('flex flex-col gap-3 items-start')}>
        <h2>카운터</h2>
        <output>{this.state.count}</output>
        <div className={tm('flex gap-2')}>
          <button type="button" onClick={this.handleDecrease}>
            -{this.props.step}
          </button>
          <button type="button" onClick={this.handleIncrease}>
            +{this.props.step}
          </button>
        </div>
      </div>
    );
  }

  // [라이프사이클 메서드] ---------------------------------------------
  // 컴포넌트 마운트(component did mount) 이후 시점
  componentDidMount() {
    // 리액트 렌더링 프로세스와 상관없는 이펙트 실행 (사이드 이펙트 처리)
    // const clearId = setTimeout(() => {
    //   alert('타이머(사이드 이펙트) 처리');
    //   clearTimeout(clearId);
    //   console.log('타이머 클리어!');
    // }, 2000);
  }

  // 컴포넌트 업데이트(component did update) 이후 시점
  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>
  ): void {
    console.group('이전 상태 값');
    console.log({ prevProps });
    console.log({ prevState });
    console.groupEnd();

    console.group('현재 상태 값');
    console.log(this.state);
    console.groupEnd();
  }

  // <클래스 필드>
  // 이벤트 핸들러 ---------------------------------------------------
  handleDecrease = () => {
    const { step } = this.props;

    if (step) {
      this.setState({
        count: this.state.count - step,
      });
    }
  };

  handleIncrease = () => {
    const { step } = this.props;

    if (step) {
      this.setState({
        count: this.state.count + step,
      });
    }
  };
}

export default Counter;
