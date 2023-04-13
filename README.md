# 벌써 12시 쇼핑몰 리팩토링
> 개인 프로젝트

## 소개
- 서비스명 : 벌써 12시 쇼핑몰 리팩토링
- 개발기간 : 2023.03.10 ~
- 주제: 아이들 선물 단체 구매 쇼핑몰
- 목표: 아이들의 선물을 카테고리 별로 조회하여 다량으로 구매할 수 있는 쇼핑몰

## 개발 계획
- 처음부터 끝까지 코드와 구조를 다시 짜보며 복습 및 백엔드 API 통신 공부
- Git 분산 관리를 통하여 Git을 통한 협업 능력 향상
- 부족했던 부분들을 보충 하여 더욱 나아진 서비스로 개발

## 개발 내용 기록
- 2023.03.10 : Repo 생성 및 구조 완성
- 2023.03.11 : 기본 페이지 및 Router 구성
- 2023.03.13 : 로그인 회원가입 Page
- 2023.03.15 : Route 따로 컴포넌트화 완료
- 2023.04.02 : 프로젝트 이후 첫 리팩토링 // Cart , Favorite 추가 및 styled-component 분리 후 import
- 2023.04.03 : Login , Register 등 추가 및 styled-component 분리 후 import
- 2023.04.05 : backend MySql 연동
- 2023.04.12 : UserMain Feat

## 리팩토링한 기능

1. 2023.03.15
ROUTE를 기존에 Route태그를 연속으로 사용하여 유지보수 또는 가독성이 떨어졌던 부분을 ROUTE 컴포넌트를 따로 만들어 가독성 있고 간편하게 관리 기능 추가
- ROUTE 컴포넌트 내부에 path, link, element 속성을 넣어 객체 리터럴 방식으로 저장하여 사용
- ROUTE의 내부 속성들을 넣은 배열(ROUTE_ARR)을 생성하여 다양한 메소드를 활용 할 수 있도록 export
- Main.js에서 ROUTE_ARR을 IMPORT하여 속성에 따라 한번에 Route생성

2. 2023.04.02
Styled-Component 분리
- 컴포넌트 내부에 적어 놓은 Styled-Component를 분리 후 import하여 사용
- 분리하여 사용함으로서 코드 가독성을 높히고 CSS의 변경을 편리하게 할 수 있게 변경

3. 2023.04.05
기존 mongoDB로 연결한 DB를 MySQL로 변경하여 연동

## 기술 스택

### 프론트엔드
<div> 
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
</div>

### 백엔드
<div> 
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
  <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">
  <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white">
</div>
