/* eslint-disable */

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {


  let [title, setTitle] = useState([
    '유진이랑 캠핑가자',
    'FC서울 직관 후기',
    '바버 레인부츠 후기, 추천!!',
    '오늘의 일기']);

  let [like, setLike] = useState(0);

  function changeTitle() {
    var newArray = [...title]; /*deep copy*/ 
    newArray[0] = '현종이랑 캠핑가자';
    setTitle( newArray );
  }
  

  return (
    <div className="App">
      <div className="black-nav">
        <div>유종 커플 Blog 🥰</div>
      </div>
      <div className="list">
        <h3> { title[0] } <span onClick={ ()=>{ setLike(like + 1)} }>👍</span> { like } </h3>
        <p>7월 13일 발행</p>
      <hr/>
      </div>
      <div className="list">
        <h3> { title[1] } </h3>
        <p>7월 13일 발행</p>
      <hr/>
      </div>
      <div className="list">
        <h3> { title[2] } </h3>
        <p>7월 13일 발행</p>
      <hr/>
      </div>
      <div className="list">
        <h3> { title[3] } </h3>
        <p>7월 13일 발행</p>
      <hr/>
      <button onClick={ changeTitle }>버튼</button>
      </div>
      <Modal></Modal> 
    </div>
  );
}

function Modal() { 
  return (
      <div className='modal'>
          <h2>제목</h2>
          <p>날짜</p>
          <p>상세내용</p>
        </div>
    
  )
}
/* 컴포넌트를 만드는 법
1. 컴포넌트 명칭은 대문자로 시작한다
2. return()안에 있는건 태그하나로 묶어야함; div든 p든 태그는 하나만 사용!
3. 의미없는 <div>쓰기 싫으면 <></> fragment문법 활용

컴포넌트는 HTML 덩어리들이라고 볼 수 있다

컴포넌트 만드는 기준
1. 반복적으로 출현하는 것들 (리스트)
2. 사이트에서 자주 바뀌는 HTML UI들 (재랜더링이 자주 일어나는 경우)
3. 다른 페이지 만들때도 컴포넌트로 만듦

컴포넌트 단점
1. state를 쓸때 복잡해짐 (변수의 범위가 제한되기 때문이다)
2. 상위 컴포넌트에서 만든 state를 쓰려면 props라는 문법을 이용해야함(안쓰는게 안헷갈릴거같다)
*/

export default App;
