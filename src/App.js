import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // state 변수 대신 사용하는 데이터 저장공간 => 항상 두개의 데이터가 들어간 array를 만든다
  // 자주 바뀌는, 중요한 데이터들은 state이용하기
  
  // es6 destructuring : 변수에 useState(생성된 array)값을 받아오기
  let [title,nextTitle] = useState(['HTML','CSS','JavaScript','React']); // title:글제목, nextTitle:글제목변경
  let [good,goodUp] = useState(0);
  let [modal,modalSwitch] = useState(false);
  let [menu,menuSwitch] = useState(false);
  let [nowNumber,changeNumber] = useState(0);

  // state 데이터 변경하기(직접 건들지 말고, 복사본을 만들어 그 데이터를 수정해야함.중요!!)
  function changeTitle(){ // 변수 하나 생성
    var newArray = [...title]; // 복사본 새로 생성하기(등호로 복사하면 값 공유되어버림)
    newArray[0] = 'HTML심화'; // 본사본에 수정사항 반영하기
    nextTitle(newArray); // 변경함수()에 집어넣기
  }

  // list abc순으로 정렬하는 기능
  function listSort(){
    var listArray = [...title];
    listArray.sort();
    nextTitle(listArray);
  }

  // for 반복문으로 배열 순회하여 list 생성하기
  function makeList(){
    var newlist = [];
    for(var i=0; i<title.length; i++){
      newlist.push(
        <div className="list">
          <strong>{ title[i] }</strong> 
          <span onClick={ ()=>{ goodUp(good+1) } }>👍 {good}</span>
          <p>20년 1월 5일 작성</p>
          <hr />
        </div>        
      );
    }
    return newlist
  }


  return (
    <div className="App">
      <div className="nav">
        <h1><a href="/">개발 BLOG</a></h1>
        <button className="btn-menu" onClick={ ()=>{ menuSwitch(!menu) } }>menu</button>
      </div>
      <button className="btn-change-title" onClick={ changeTitle }>changeTitle</button>
      <button className="btn-list-sort" onClick={ listSort }>listSort</button>
      <button onClick={ ()=>{ modalSwitch(!modal) } } >modalToggle</button>

      {
        title.map(function(arrData,i){ // map으로 title 배열을 순회하여 list생성하기
          return (
            <div className="list">
              <strong onClick={ ()=>{ changeNumber(i) } }>{ arrData }</strong> 
              <span onClick={ ()=>{ goodUp(good+1) } }>👍 {good}</span>
              <p>20년 1월 5일 작성</p>
              <hr />
            </div>
          )
        })
      }
      { // if문이 들어갈 수 없다 = > 삼항연산자를 사용
        modal === true
        ? <Modal title={ title } nowNumber={nowNumber} />
        : null
      }

      {
        menu === true
        ? <Menu/>
        : null
      }

    </div>
  );
}

// component 만드는 방법(긴 html을 분리하여 <Modal/>로 간결하게 나타냄 )
// 반복적으로 출현하는 HTML 덩어리들, 자주 바뀌는 HTML UI에서 성능적으로 이점이 있다.
// 다른 페이지를 만들때도 사용.
// conponent명은 대문자로 시작, 내용물은 하나의 큰 덩어리 형태로만 들어갈 수 있다.
// <></> 하나로 묶을때 쓰는 의미없는 div대신 쓸만한 태그
function Modal(props){
  return (
    <div className="modal">
      <strong>{ props.title[ props.nowNumber ] }</strong>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}
// 부모의 state를 자식이 사용하는 법(중요!)
// 1.<자식 컴포넌트 작명={state명}/>
// 2.자식 컴포턴트에서 props파라미터 입력 후 사용

// 글 제목과 모달창 제목 일치하게 만들기 - UI 만드는법
// 1.UI관련된 중요 정보들을 state에 저장
// 2.state에 따라서 UI가 변경되게 설정


function Menu(){
  return(
    <div className="menu">
      <ul>
        <li><a href="">home</a></li>
        <li><a href="">profile</a></li>
        <li><a href="">portfolio</a></li>
        <li><a href="">contactMe</a></li>
      </ul>
      <button className="menu-close" onClick={ ()=>{ } }>X</button>
    </div>
  )
}
export default App;
