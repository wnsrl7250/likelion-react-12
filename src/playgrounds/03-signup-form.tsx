const ENDPOINT = 'http://localhost:4000/api/signup';

const createRequestOption = (formData: FormData) => ({
  method: 'POST',
  body: formData,
});

function SignUpForm() {
  const handleSubmitAsync = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    try {
      const response = await fetch(ENDPOINT, createRequestOption(formData));

      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmitPromise = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    console.log(formData); // FormData
    console.log(formData instanceof FormData); // true

    // POST ENDPOINT Request.body (FormData)
    // fetch() 전역 함수 활용
    fetch(ENDPOINT, createRequestOption(formData))
      .then((response) => response.json())
      .then((responseData) => console.log(responseData))
      .catch((error) => console.error(error));
  };

  return (
    <section style={{ marginInline: 48 }}>
      <h2>회원가입 폼 (POST 메서드)</h2>
      <form
        // onSubmit={handleSubmitAsync}
        onSubmit={handleSubmitPromise}
        // action="http://localhost:4000/api/signup"
        // encType="multipart/form-data"
        // method="POST"
      >
        <div style={{ marginBlockEnd: 8 }}>
          <label htmlFor="usernameSignUp">이름</label>
          <input type="text" name="username" id="usernameSignUp" />
        </div>
        <div style={{ marginBlockEnd: 8 }}>
          <label htmlFor="userEmailSignUp">이메일</label>
          <input type="email" name="useremail" id="userEmailSignUp" />
        </div>
        <div style={{ marginBlockEnd: 8 }}>
          <label htmlFor="userPasswordSignUp">패스워드</label>
          <input type="password" name="userpassword" id="userPasswordSignUp" />
        </div>
        <div style={{ marginBlockEnd: 8 }}>
          <label htmlFor="userProfileSignUp">프로필 이미지</label>
          <input
            type="file"
            name="userprofile"
            id="userProfileSignUp"
            accept=".jpg,.jpeg,.png,.svg,.webp"
          />
        </div>
        <button type="submit">회원가입</button>
      </form>
    </section>
  );
}

export default SignUpForm;
