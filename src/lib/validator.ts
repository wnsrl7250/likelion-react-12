/* -------------------------------------------------------------------------- */
// 이메일 체크 유틸리티
/* -------------------------------------------------------------------------- */

export const isEmail = (value: string) => {
  const regExp =
    /^[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  return regExp.test(value);
};

/* -------------------------------------------------------------------------- */
// 패스워드 체크 유틸리티
// ▸ [normal 모드] 6 ~ 16자 — 영문, 숫자 조합
// ▸ [strong 모드] 6 ~ 16자 — 영문, 숫자, 특수문자 최소 한가지 조합
/* -------------------------------------------------------------------------- */

export const isPassword = (
  value: string,
  { min = 6, max = 16, isStrong = false } = {}
) => {
  let regExp = null;

  if (!isStrong) {
    regExp = new RegExp(`^(?=.*\\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{${min},${max}}$`);
  } else {
    regExp = new RegExp(
      `^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$\`~!@$!%*#^?&\\(\\)\\-_=+]).{${min},${max}}$`
    );
  }

  return regExp.test(value);
};

const validator = {
  isEmail,
  isPassword,
};

export default validator;
