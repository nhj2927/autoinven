// 1) DB 모델들 가져오기
const db = require('./models');
// 2) express 모듈 가져와 객체 생성
const express = require('express');
const app = express();
// 4) env파일 사용
require('dotenv').config();
// 5) EJS Module 불러오기
const ejs = require('ejs');
// 6) fs core moduel 불러오기
const fs = require('fs').promises;
// 7) 다국어 지원 Module 불러오기
const i18n = require('./config/i18n');
// 8) cookieParser Module 불러오기
const cookieParser = require('cookie-parser');

// 9) mysql2 Module 불러오기
const mysql2 = require('mysql2/promise');

// // 10) PORT
 const PORT = process.env.PORT || 5000;

const sequelize = require('./config/sequelize');
sequelize.sync().then((response) => {
  console.log('DB sync is completed.');
});

// 1. 설정
// 1) View 경로 설정
app.set('views', __dirname + '/views');
// 2) 화면 Engine을 ejs로 설정
app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);
// 3) Session 설정(생성)
const session = require('express-session');
const { info } = require('./config/db');
const MySQLStore = require('express-mysql-session')(session);
const connection = mysql2.createPool(info);
const sessionStore = new MySQLStore({}, connection);
// 5) cookie 데이터 받기
app.use(cookieParser());
// 6) 'Public' Directory에 정적 파일(사진, 이미지)을 위치시키기
app.use(express.static('public'));
// 7) CORS 허용
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  next();
});
// 8) 세션을 적용
app.use(
  session({
    // 8-1) 세션 암호화
    secret: process.env.SESSION_SECRET,
    // 8-2) 수정사항이 생기지 않은 세션 요청이 왔을 때 다시 저장할지
    resave: false,
    // 8-3) 세션에 저장할 내역이 없더라도, 세션 저장할지
    saveUninitialized: true,
    // 8-4) 서버가 재시작되어도 세션 유지
    store: sessionStore,
  })
);

// 9) i18n - 다국어 모듈 설정
app.use(i18n);

app.use('/', require('./routes/main')());

// TEST
app.get('*', (req, res) => {
  res.send('<h1>Autoinven Server is running now.</h1');
  // 서버 실행
});

app.listen(PORT, (req, res) => {
  console.log(`connected on Server [PORT : ${PORT}]`);
});