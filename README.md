# 목차

1. [프로젝트 개요](#프로젝트-개요)
2. [배포 사이트 주소](#배포-사이트-주소)
3. [기술 스택](#기술-스택)
4. [폴더 구조](#폴더-구조)
5. [데모 영상](#데모-영상)
6. [상세 기능](#상세-기능)
7. [개발 과정](#개발-과정)
8. [트러블 슈팅](#트러블-슈팅)
9. [개선 예정 사항](#개선-예정-사항)

<br>

# 프로젝트 개요
- LoaKin: LostArk Kindergarten (로스트아크 유치원 - 로아킨)
- 로스트아크 레이드 스케쥴 관리 및 캐릭터 상세 열람 웹 애플리케이션.
- 로스트아크라는 온라인 MMORPG 게임을 플레이하는 친구 및 지인들의 요청으로 제작.
- 실제 소규모 유저들을 대상으로 서비스 예정.
- 개인프로젝트이며 대략 2주정도 소요.

<br>

# 프로젝트의 실행 방법

> npm install<br>npm start

<br>

# 배포 사이트 주소

https://loakin.vercel.app/

<br>

# 기술 스택

<div align=left>
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">
  <img src="https://img.shields.io/badge/createreactapp-09D3AC?style=for-the-badge&logo=createreactapp&logoColor=black">
  <br>
  <img src="https://img.shields.io/badge/RTK-764ABC?style=for-the-badge&logo=Redux&logoColor=white">
  <img src="https://img.shields.io/badge/reactrouter-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white">
  <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">
  <br>
  <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white">
  <img src="https://img.shields.io/badge/express-339933?style=for-the-badge&logo=express&logoColor=white">
  <img src="https://img.shields.io/badge/mongodb-47A248?style=for-the-badge&logo=mongodb&logoColor=white">
</div>

<br>

# 폴더 구조
```bash
📦src
 ┣ 📂components
 ┃ ┣ 📂calendar
 ┃ ┃ ┗ 📜DatePicker.tsx
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📜Button.tsx
 ┃ ┃ ┣ 📜CharacterText.tsx
 ┃ ┃ ┣ 📜CrewCharacterWrapper.tsx
 ┃ ┃ ┣ 📜Empty.tsx
 ┃ ┃ ┣ 📜Header.tsx
 ┃ ┃ ┣ 📜Input.tsx
 ┃ ┃ ┣ 📜Modal.tsx
 ┃ ┃ ┗ 📜SelectBox.tsx
 ┃ ┣ 📂crew
 ┃ ┃ ┣ 📜CrewCharacterDetail.tsx
 ┃ ┃ ┣ 📜CrewGrid.tsx
 ┃ ┃ ┣ 📜CrewItem.tsx
 ┃ ┃ ┗ 📜CrewList.tsx
 ┃ ┣ 📂raid
 ┃ ┃ ┣ 📜RaidCrew.tsx
 ┃ ┃ ┣ 📜RaidCrewInfo.tsx
 ┃ ┃ ┣ 📜RaidDetail.tsx
 ┃ ┃ ┣ 📜RaidForm.tsx
 ┃ ┃ ┣ 📜RaidFormType.tsx
 ┃ ┃ ┣ 📜RaidInfoItem.tsx
 ┃ ┃ ┣ 📜RaidInfoList.tsx
 ┃ ┃ ┗ 📜RaidScheduleForm.tsx
 ┃ ┗ 📜.DS_Store
 ┣ 📂constants
 ┃ ┗ 📜index.ts
 ┣ 📂hooks
 ┃ ┣ 📜useCache.ts
 ┃ ┣ 📜useCalendar.ts
 ┃ ┣ 📜useCrew.ts
 ┃ ┗ 📜useDB.ts
 ┣ 📂pages
 ┃ ┣ 📜Calendar.tsx
 ┃ ┣ 📜Crew.tsx
 ┃ ┗ 📜Raid.tsx
 ┣ 📂store
 ┃ ┣ 📜calendar.ts
 ┃ ┣ 📜crew.ts
 ┃ ┣ 📜data.ts
 ┃ ┣ 📜form.ts
 ┃ ┣ 📜index.ts
 ┃ ┣ 📜modal.ts
 ┃ ┣ 📜raid.ts
 ┃ ┗ 📜ui.ts
 ┣ 📂style
 ┃ ┗ 📜global-style.ts
 ┣ 📂types
 ┃ ┣ 📂calendar
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂common
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂crew
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂raid
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📜fetch-types.ts
 ┃ ┗ 📜render-type.ts
 ┣ 📂utils
 ┃ ┣ 📜RTKhooks.ts
 ┃ ┗ 📜request-Http.ts
 ┣ 📜App.tsx
 ┗ 📜index.tsx
```
<br>

# 데모 영상

![](https://github.com/liketiger/loakin/assets/50165633/62baee03-a0d8-40ff-becb-4f49e9934158)

<br>

# 상세 기능
- 스케쥴 페이지의 달력에 레이드 일정 표시
- 특정 날짜 클릭 시 해당 날짜에 있는 레이드와 참여 캐릭터 확인, 등록, 수정 및 삭제 가능 (CRUD)
- 게임사 API를 통해 불러온 각 멤버별 캐릭터를 선택 가능
- 캐릭터 클릭시 캐릭터 상세 장비 및 능력치 등 스펙을 모달로 확인 가능 (추가 예정)
- 레이드 추가시 달력에 표시
- 조직도 페이지에서 게임사 API를 통해 불러온 멤버별 캐릭터 리스트 제공
- 캐릭터 클릭시 모달로 상세 정보 확인 가능 및 검색 기능 (추가 예정)

<br>

# 개발 과정

**💡 기술 스택 선정 과정**

- UX 향상을 위해 SPA로 제작하기로 결정
- 생산성 증가를 위해 프레임워크 및 라이브러리 사용 결정
- 프로젝트 사이즈, 서포트 기업, 커뮤니티 크기, 러닝 커브 등을 고려해 React로 선정
- 러닝 커브를 고려해 기존 사용해본 Context API + useReducer 조합과 유사한 Redux 사용하여 전역 상태 관리
    - 코드량과 패키지 의존성 감소를 위해 RTK 사용
- 안정성, 가독성 및 성능 향상의 목적으로 TypeScript 적용
- 생산성 증가를 위해 FullCalendar 라이브러리가 사용

**💡 배포**

- 클라이언트는 Vercel, 서버는 Heroku 이용
- 서버의 경우 생산성과 안정성을 고려하여 Heroku 이용

**💡 로컬 캐싱 적용**

- 게임사 API 호출 횟수 제한으로 인해 로컬 캐싱의 필요성을 인지
- Storage 방식과 in-memory 방식 중 새로고침시 데이터 유지 목적에 알맞은 Storage 방식 이용
    - Storage 방식
        - CacheStorage: 저장 가능 용량도 크고 비동기로 작동하여 메인 스레드에 영향을 주지 않아 채택

<br>

# 트러블 슈팅

**💡 클라이언트 서버 분리 문제**

- 고민
    - 기존에는 한 프로젝트에 클라이언트와 서버를 같이 관리
- 선택한 방법
    - 서버 코드는 변함이 없고 클라이언트 코드만 자주 변경되는 것을 파악하여 크기를 줄이기 위해 프로젝트 분리
- [서버 코드 Github 링크](https://github.com/liketiger/Loakin_Server)

**💡 데이터 fetching 문제**

- 유저들의 대표 캐릭터명이 들어있는 배열을 순회하여 api 호출하여 동료 캐릭터 fetch
- 리렌더링 문제
    - 매번 fetch시 마다 dispatch 할 경우 수십 번 리렌더링 되는 문제 발생
- 해결방법
    - Promise.All을 사용하여 배열내의 모든 비동기 함수가 응답이 온 후에 리렌더링을 하도록 로직 설계

<br>

# Github commit convention

* feat : implement new features
* settings : set initial state or change style (formatter, ...)
* fix : fix bugs
* markup: adjust markup and css
* refactor : code refactoring
* docs : add or modify documentations
* chore : minor fixes that doesn't include above

<br>

# 개선 예정 사항

💡 **관심사 분리: Presentational-Container VS Custom Hook**
- 관심사를 분리하는 방법 중 Presentational-Container와 Custom Hook 중 Custom Hook을 적용해 분리할 예정
- 커스텀 훅 방식이 더 함수형 방식에 적합하고 모던하고 굳이 컴포넌트를 추가로 분리할 필요가 없어 보임.

💡 **axios 적용 및 api 추상화**
- 프로젝트 시작 당시에는 axios 사용 경험이 없고 굳이 사용할 필요가 없는 규모라 느껴 fetch를 사용했다 
- 부트캠프 하면서 axios 사용해봤는데 규모와 상관 없이 매우 간편하고 .json()으로 풀어줄 필요가 없고 코드수를 줄일 수 있어 채택 예정.
- 현재 request-http와 useDB로 추출하여 중복 코드 제거와 추상화가 되어 있으나 axios를 적용하면서 한 단계 더 api 추상화 예정.
 
💡 **MongoDB 용량 관리**
- 간단한 문자열인 스케쥴 데이터만 쌓이는 거지만 무료 제공 용량이 512MB이고 언젠가는 초과할 수 도 있다.
- MongoDB에서 일정 시기마다 정해진 코드를 시행하는 기능이 있다면 오래된 데이터 삭제하는 방법 사용 예정

💡 **로딩 스피너 추가 및 skeleton UI 추가**
- UX 개선을 위해 api 통신 중일 때 로딩 스피너 및 스켈레톤 UI 적용 예정

💡 **버그 수정 및 전역 상태 개선**
- 간혹 가다 DB상으로는 문제 없는데 클라이언트 쪽에서 레이드 크루 삭제시 다른 크루까지 사라지거나 사라진 레이드가 나타나는 현상 발생
- 예상원인으로 초기에 전역 상태관리에서 전체 데이터 형식으로 스케쥴 상태외에 레이드 용 전역 상태를 따로 만들어 관리했다.
- 클라이언트 쪽에서 유니크 ID를 DB에서 붙여주는 ID로 사용하다보니 CRUD 작업 중 CUD 작업 일부는 해당 ID가 필요하다.
- 작업 수행 후 다시 서버와 통신하여 적용된 ID를 받아오는 방식을 채택하였는데 그에 맞게 전역 상태가 변경이 안되있어 발생하는 것으로 추정하여 개선 예정
- 레이드 수정 기능 UI 또한 자잘한 이슈가 있어 모달 형식으로 변경 예정

💡 **에러 핸들링 개선**
- 초기에는 에러 핸들링을 어떻게 할지 몰라 대략적으로 alert()만 띄워놓았다.
- 추후에는 상황에 맞게 status code를 전송하고 이에 맞게 에러를 핸들링을 개선할 예정.

💡 **UX 개선을 위해 조직도 검색 기능 추가**
- 인원이 많아지면 조직도 페이지의 멤버 및 멤버별 캐릭터 수가 증가하여 스크롤로만 살펴보기 불편한 면이 있을거라 예정
- UX 개선을 위해 멤버 및 캐릭터 검색 기능 추가 예정
