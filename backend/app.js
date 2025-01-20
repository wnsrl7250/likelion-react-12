import express from 'express';

// Express {}
const app = express();

// 라우팅(Routing)
app.get('/api/user', (request, response) => {
  response.send('hello express.js app');
});

app.listen(4000, () => {
  console.log('백엔드 프로그램 서버 구동 http://localhost:4000/api/user');
});
