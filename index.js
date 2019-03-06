import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

// 옛날 js버전. 바벨이 설치안되면 아래처럼 작성.
// const express = require("express");

const app = express();

const handleListening = () => console.log("http://localhost:4000");

// 연결될 페이지에는 항상 req, res인자값으로 응답을 받고 줘야한다.
const handleHome = (req, res) => {
    console.log("hi from home!!");
    res.send("Hello!") // res => 응답하기
}

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());
app.use(morgan("dev"));

// 라우터. 컨트롤러 개념. 페이지와 연결해줌.
app.get("/", handleHome); // "/"를 연결하면 handleHome 실행.


// PORT주고 콜백함수. http://localhost:4000
app.listen(4000, handleListening);