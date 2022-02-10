// 1) DB 모델들 가져오기
const db = require('./models');
// 2) express 모듈 가져와 객체 생성
const express = require('express');
const app = express();
// 4) env파일 사용
require('dotenv').config();
// 5) 절대경로 설정
require('better-module-alias')(__dirname);
// 6) EJS Module 불러오기
const ejs = require('ejs');
// 7) fs core moduel 불러오기
const fs = require('fs').promises;
// 8) 다국어 지원 Module 불러오기
const i18n = require('./config/i18n');
// 9) cookieParser Module 불러오기
const cookieParser = require('cookie-parser');

// 10) mysql2 Module 불러오기
const mysql2 = require('mysql2/promise');
// 11) PORT
const PORT = process.env.PORT || 5000;
// 12) DB 테이블 생성(없으면 생성해줌)
db.sequelize.sync().then((response) => {
  console.log('DB sync is completed.');
});

/*
// 창고번호 한달 마다 초기화
let warehouseId = 0;
global.wdId = warehouseId;
const warehouseIdSchedule = require('./utils/warehouseIdSchedule');
warehouseIdSchedule.job();

console.log(new Date());
const job = schedule.scheduleJob('0 0 0 1 * *', () => {
  console.log(`before warehouse id : ${wdId}`);
  wdId += 1;
  console.log(`after warehouse id : ${wdId}`);
});
*/

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
// 4) body에 데이터 담기
app.use(express.json());
// 5) cookie 데이터 받기
app.use(cookieParser());
// 6) 'Public' Directory에 정적 파일(사진, 이미지)을 위치시키기
app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));
// 7) CORS 허용
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
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

// 10) 각 라우터에 인자값을 넘겨주는 것
app.use('/', require('./routes')(db));
app.use('/api', require('./routes/api')(db));

// 11) 다국어 지원
app.get('/en', (req, res) => {
  res.cookie('lang', 'en');
  res.redirect('back');
});
app.get('/ko', (req, res) => {
  res.cookie('lang', 'ko');
  res.redirect('back');
});

app.use((err, req, res, next) => {
  console.log(err);
  res.statusCode = err.statusCode || 500;
  res.json({
    message: err.message,
  });
});

// 없는페이지 에러메세지
app.get('*', (req, res) => {
  console.log(`${req.path}: not found`);
  res.render('error/cannotAccess');
});

app.listen(PORT, (req, res) => {
  console.log(`connected on Server [PORT : ${PORT}]`);
});
