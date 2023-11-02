# food-order
원하는 음식메뉴를 장바구니에 담아 주문하기

## 기능 목록
* 원하는 메뉴와 수량을 선택하고 장바구니에 추가, 삭제
* context api, useReduce 를 이용해 장바구니 관련 state와 action 관리
* modal, input 등 공통 ui 컴퍼넌트 사용
* Forward Refs를 이용해 input의 수량을 가져와 장바구니에 추가
* useEffect와 setTimeout을 이용해 버튼 애니메이션을 추가하고 클린업 함수를 이용해 타이머 리셋

## 프로젝트 구성
├── src<br/>
├─── assets : 프로젝트에 사용된 이미지<br/>
├─── components<br/>
├──── Cart: 장바구니 관련 컴퍼넌트<br/>
├──── Layout: 헤더 레이아웃 컴퍼넌트<br/>
├──── Meals: 음식 메뉴 관련 컴퍼넌트<br/>
├──── UI: 공통으로 사용되는 컴퍼넌트<br/>
├─── store : state 관리<br/> 
├─ App.js<br/>
├─ index.css<br/>
├─ index.js<br/>
└─ README.md<br/>

## 사용한 기술 스택 및 라이브러리
* Javascript, React

## 설치 
* $ npm install 로 설치 후 $ npm start 로 실행