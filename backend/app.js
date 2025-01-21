import express from 'express';
import { createUser } from './lib/user.js';

const app = express();
app.use(express.urlencoded({ extended: false }));

app.post('/api/signup', async (request, response) => {
  // 클라이언트 요청 데이터
  /* request.body = {
      username: '지훈',
      useremail: 'yamoo9@naver.com',
      userpassword: '12345'
    } */

  const { username, useremail, userpassword } = request.body;

  if (!username || !useremail || !userpassword) {
    return response.status(400).send(`
      <p style="color: red">회원가입에 필요한 이름, 이메일, 패스워드 모두 입력이 필요합니다.</p>
    `);
  }

  try {
    // 새 사용자 생성 (백엔드 스토리지)
    const newUser = await createUser({
      name: username,
      email: useremail,
      password: userpassword,
    });

    if (newUser) {
      response
        .status(201)
        .send(`${newUser.name}님! 회원가입에 성공했습니다. 😊`);
    } else {
      response
        .status(400)
        .send(`${username}님은 회원 가입을 이미 하셨습니다. 😥`);
    }
  } catch (error) {
    response.status(500).send('회원가입에 문제가 발생했습니다.');
  }
});

app.get('/api/hello', (request, response) => {
  const { username, useremail } = request.query;
  if (username && useremail) {
    response.status(200).send(`
      <h1>hello ${username}!</h1>
      <p>your email address is ${useremail}</p>
    `);
  } else {
    response
      .status(400)
      .send('<p>사용자 이름과 이메일이 전송되지 않았습니다. 😥</p>');
  }
});

app.listen(4000, () => {
  console.log('백엔드 프로그램 서버 구동 http://localhost:4000/api/hello');
});
