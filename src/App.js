/* eslint-disable */

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // state 변수 대신 사용하는 데이터 저장공간 => 항상 두개의 데이터가 들어간 array를 만든다
  // 자주 바뀌는, 중요한 데이터들은 state이용하기
  
  // es6 destructuring : 변수에 useState(생성된 array)값을 받아오기
  let [title,nextTitle] = useState(['HTML','CSS','JavaScript','React']); // title:글제목, nextTitle:글제목변경
  let [good,goodUp] = useState(0);

  // state 데이터 변경하기(직접 건들지 말고, 복사본을 만들어 그 데이터를 수정해야함.중요!!)
  function ChangeTitle(){ // 변수 하나 생성
    var newArray = [...title]; // 복사본 새로 생성하기(!!중요!!)
    newArray[0] = 'HTML심화'; // 본사본에 수정사항 반영하기
    nextTitle(newArray); // 변경함수()에 집어넣기
  }

  return (
    <div className="App">
      <div className="nav">
        <h1><a href="/">개발 BLOG</a></h1>
        <button className="btn-menu">menu</button>
      </div>
      <button className="btn-change-title" onClick={ ChangeTitle }>ChangeTitle</button>
      <div className="list first">
        <strong>{ title[0] }</strong> 
        <span onClick={ ()=>{ goodUp(good+1) } }>👍 {good}</span>
        <p>20년 1월 5일 작성</p>
        <hr />
      </div>
      <div className="list">
        <strong>{ title[1] }</strong> 
        <span onClick={ ()=>{ goodUp(good+1) } }>👍 {good}</span>
        <p>20년 1월 5일 작성</p>
        <hr />
      </div>
      <div className="list">
        <strong>{ title[2] }</strong> 
        <span onClick={ ()=>{ goodUp(good+1) } }>👍 {good}</span>
        <p>20년 1월 5일 작성</p>
        <hr />
      </div>
      <div className="list">
        <strong>{ title[3] }</strong> 
        <span onClick={ ()=>{ goodUp(good+1) } }>👍 {good}</span>
        <p>20년 1월 5일 작성</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
