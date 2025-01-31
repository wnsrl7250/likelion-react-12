import ActionButton from '../components/action-button';
import FormInput from '../components/form-input';

// CSS Modules
// import S from './sign-in.module.css';

// Sass
import './sign-in.scss';

// Sass Modules
import S from './sign-in.module.scss';

function HomeworkSignIn() {
  return (
    <section>
      <h3 className="sr-only">로그인 폼</h3>
      <form className={S.signInForm}>
        {/* <form className="signInForm"> */}
        <FormInput
          type="email"
          label="이메일"
          name="usermail"
          placeholder="user@company.io"
        />
        <FormInput
          type="password"
          label="패스워드"
          name="userpassword"
          placeholder="숫자, 영문 조합 6자리 이상 입력"
          hasToggleButton
        />
        <ActionButton>로그인</ActionButton>
      </form>
    </section>
  );
}

export default HomeworkSignIn;
