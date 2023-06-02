# 목차

1. [프로젝트 개요](#프로젝트-개요)
2. [배포 사이트 주소](#배포-사이트-주소)
3. [기술 스택](#기술-스택)
4. [폴더 구조](#폴더-구조)
5. [데모 영상](#데모-영상)
6. [상세 기능](#상세-기능)
7. [트러블 슈팅](#트러블-슈팅)
8. [회고 및 개선사항](#회고-및-개선사항)

<br>

# 프로젝트 개요
- LoaKin: LostArk Kindergarten (로스트아크 유치원 - 로아킨)
- 로스트아크 레이드 스케쥴 관리 및 캐릭터 상세 열람 웹 애플리케이션.
- 로스트아크라는 온라인 MMORPG 게임을 플레이하는 친구 및 지인들의 요청으로 제작.
- 20여명 가량의 같은 길드인 친구 및 지인들이 레이드(보스 몬스터 사냥)를 가기위해 각자의 스케쥴을 편리하게 맞추기 위해 사용.
- 추가로 각 멤버들의 캐릭터 상세 스펙 등을 게임 접속 없이 확인 할 수 있음.
- 개인프로젝트이며 대략 2주정도 소요.
- 현재 미완성 상태이며 계속 제작중에 있다.

<br>

# 프로젝트의 실행 방법

> npm install<br>npm start

<br>

# 배포 사이트 주소

https://loakin-igkctklu7-liketiger.vercel.app/

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

# 트러블 슈팅

💡 기술 스택 선정 과정
- 최대한 빠른 시일내에 제작을 완성하는게 목적이기에 새로 학습하지 않고 기존에 지식이 있는 기술 스택인 React 사용
- 전역 상태관리의 경우 전에 해보았던 Context API + useReducer 조합과 비슷한 Redux 사용
- Redux의 개선 버전인 RTK 사용하여 코드량 감소
- 같은 이유로 MongoDB와 express 선택
- FullCalendar라는 달력 라이브러리가 있어 시간 절약을 위해 사용

💡 배포 문제
- 클라이언트는 Vercel, 서버는 Heroku 이용
- Netlify, Vercel은 서버 배포시 Serverless Function에 알맞게 코드를 수정하고 추가 세팅에 손이 많이가서 제외
- AWS와 Heroku 중 비용은 둘 다 나오나 세팅이 간편한 Heroku를 서버 배포에 사용

💡 클라이언트 서버 분리 문제
- 기존에는 한 프로젝트에 클라이언트와 서버를 같이 담으려고 했으나 주로 서버쪽 코드는 변함이 없고 클라이언트 쪽 코드만 자주 변경될 것 같아 프로젝트를 가볍게 하기 위해 프로젝트 분리
- [서버 코드 Github 링크](https://github.com/liketiger/Loakin_Server)

💡 스타일 관련 문제
- 기존에 경험이 있고 props의 조건에 따라 다르게 렌더링 하는 방식이 매력적이라 styled-component 선택
- 추가로 컴포넌트 페이지에 같이 작성 가능하여 파일 개수 줄이는 효과도 있음
- 문제는 다른 사람들의 코드를 보니 styled-component도 css 파일을 분리해서 작성하는 사람이 많음
- 개인적으로 파일 분리시 파일 내 코드 길이가 줄어들긴 하나 파일 수가 줄어드는 이점이 사라진다고 생각하여 한 파일에 css 코드 유지
- 컴포넌트 파일에는 컴포넌트와 UI 관련 로직 및 css만 남기고 타입 및 다른 로직을 커스텀 훅 함수 등으로 추출하여 파일 내 코드 수를 줄일 예정

💡 로스트아크 API 호출 제한 문제
- 게임사에서 제공해주는 API의 경우에는 분당 100회라는 횟수 제한이 있다.
- 최대 이용자가 20명 가량 된다고 가정하고 한 번 접속시 마다 각 멤버의 캐릭터 스펙을 불러와야 하기에 20명의 데이터를 불러온다고 가정했을 떄 5명이 동시 접속하면 100회가 초과해 버린다.
- 호출 맥시멈을 늘리는 요청 양식이 있길래 게임사에게 호출 제한을 늘려달라 양식을 제출했지만 답변이 없다.
- 자주 변하지 않는 데이터고 성능적인 측면에서도 좋아 호출 제한이 풀리더라도 로컬 캐싱은 유지할 방침.
- 제한이 풀리면 추가 기능을 도입할 예정이다.

💡 로컬 캐싱 적용
- 게임사 호출 API 횟수 제한으로 인해 로컬 캐싱을 적용할 필요가 생겼다.
- 로컬 캐싱에는 크게 두 가지 방법이 있고 각 방법 마다 여러가지의 방식으로 또 나뉜다.
  - Storage 방식
    - WebStorage : 저장 가능 용량도 적고 동기로 작동하여 메인 스레드 중단 위험이 있어 제외
    - CacheStorage, IndexedDB: 저장 가능 용량도 크고 비동기로 작동하여 메인 스레드에 영향을 주지 않아 현 프로젝트에서 채택 (CacheStorage)
  - in-memory 방식
    - useRef: useRef를 일반 변수 처럼 활용하여 캐시될 데이터를 저장하는 것이다.
    - useState: useState로 캐시 데이터를 관리하는데 캐시데이터가 변할 때 리렌더링이 필요치는 않아서 useRef가 더 나아보인다.
    - JSObject: 일반 객체 리터럴에 캐시 데이터를 저장하는 것이다. 다른 모듈로 만들어 import해서 사용하는 방식을 취해야해서 useRef가 나아보인다.
- 브라우저 새로고침 및 재실행시에도 캐시 데이터가 유지되어야 하므로 CacheStorage 사용.

💡 상태 관리
- useState로 props-drilling하여 관리하면 추후 유지보수 하기 힘든 면이 있어 2개 이상 drilling시 최대한 전역 상태를 통하는 방식으로 설계
- 다만 전역 상태의 수가 많아져 이를 다시 정리할 필요가 있어 보임.

💡 데이터 설계와 데이터 fetching 문제
- 각 멤버별로 소유한 여러 캐릭터를 불러와야 한다.
- 각 멤버별로 대표 캐릭터를 하나 제공하여 게임사에서 제공하는 api에 요청을 보내면 sibling 캐릭터들을 전부 보내준다.
- 데이터 설계시 멤버 별로 멤버 이름 + 대표 캐릭터 + 나머지 캐릭터 이런식으로 하나의 객체에 전부 담으면 데이터 구조가 너무 복잡해진다.
- 멤버 이름과 멤버별 대표 캐릭터를 각 배열에 담아 순서에 맞춰 나열하면 배열 함수로 fetching 해오기 편리해진다.
- 하지만 반복문으로 api를 순차적으로 호출한 후 리렌더링을 할 경우 비동기로 작동하기에 리렌더링 이전에 호출이 보장되지 않는다.
- 이를 해결하기 위해 Promise.All을 사용하여 배열내의 모든 비동기 함수가 다 응답이 온 후에 리렌더링을 하도록 로직 설계

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

# 회고 및 개선사항

투두리스트 다음으로 두 번째로 해보는 React 프로젝트이자 TypeScript는 처음 써보는 프로젝트여서 미숙하고 제대로 안된 부분이 많았다.
실제 제작 요청가 있어 제작을 시작한거라 기간에 대한 압박 때문에 구현 가능 여부에만 너무 중점을 둔 것 같다.
실 사용자가 있다고 생각하니 어떠한 피드백이 들어올지 두렵다.
발주가 들어오긴 했어도 요구사항 명세서 등은 없이 스스로 기획하고 설계하다 보니 중간에 내 입맛 대로 구조가 많이 바뀌어 중구난방이 된 것 같다.
다음에는 기획, 설계 및 디자인까지 피그마 등 여러 툴을 이용해 꼼꼼하게 제작하고 테스트 코드도 작성해 TDD로 해보면 좋을 것 같다.
물론 기간 압박이 없는 연습용 프로젝트에서 말이다.

중간에 1주 정도 제작하다가 원티드 프리 온보딩에 참여해서 1달 간 중단 후 다시 1주 정도 제작을 하여 마쳤다.
해당 부트캠프에서 배운 내용들을 적용해 리팩토링할 예정이다.

💡 관심사 분리: Presentational-Container VS Custom Hook
- 관심사를 분리하는 방법 중 Presentational-Container와 Custom Hook 중 Custom Hook을 적용해 분리할 예정
- 커스텀 훅 방식이 더 함수형 방식에 적합하고 모던하고 굳이 컴포넌트를 추가로 분리할 필요가 없어 보임.

💡 axios 적용 및 api 추상화
- 프로젝트 시작 당시에는 axios 사용 경험이 없고 굳이 사용할 필요가 없는 규모라 느껴 fetch를 사용했다 
- 부트캠프 하면서 axios 사용해봤는데 규모와 상관 없이 매우 간편하고 .json()으로 풀어줄 필요가 없고 코드수를 줄일 수 있어 채택 예정.
- 현재 request-http와 useDB로 추출하여 중복 코드 제거와 추상화가 되어 있으나 axios를 적용하면서 한 단계 더 api 추상화 예정.
 
💡 MongoDB 용량 관리
- 간단한 문자열인 스케쥴 데이터만 쌓이는 거지만 무료 제공 용량이 512MB이고 언젠가는 초과할 수 도 있다.
- MongoDB에서 일정 시기마다 정해진 코드를 시행하는 기능이 있다면 오래된 데이터 삭제하는 방법 사용 예정

💡 로딩 스피너 추가 및 skeleton UI 추가
- UX 개선을 위해 api 통신 중일 때 로딩 스피너 및 스켈레톤 UI 적용 예정

💡 버그 수정 및 전역 상태 개선
- 간혹 가다 DB상으로는 문제 없는데 클라이언트 쪽에서 레이드 크루 삭제시 다른 크루까지 사라지거나 사라진 레이드가 나타나는 현상 발생
- 예상원인으로 초기에 전역 상태관리에서 전체 데이터 형식으로 스케쥴 상태외에 레이드 용 전역 상태를 따로 만들어 관리했다.
- 클라이언트 쪽에서 유니크 ID를 DB에서 붙여주는 ID로 사용하다보니 CRUD 작업 중 CUD 작업 일부는 해당 ID가 필요하다.
- 작업 수행 후 다시 서버와 통신하여 적용된 ID를 받아오는 방식을 채택하였는데 그에 맞게 전역 상태가 변경이 안되있어 발생하는 것으로 추정하여 개선 예정
- 레이드 수정 기능 UI 또한 자잘한 이슈가 있어 모달 형식으로 변경 예정

💡 에러 핸들링 개선
- 초기에는 에러 핸들링을 어떻게 할지 몰라 대략적으로 alert()만 띄워놓았다.
- 추후에는 상황에 맞게 status code를 전송하고 이에 맞게 에러를 핸들링을 개선할 예정.

💡 UX 개선을 위해 조직도 검색 기능 추가
- 인원이 많아지면 조직도 페이지의 멤버 및 멤버별 캐릭터 수가 증가하여 스크롤로만 살펴보기 불편한 면이 있을거라 예정
- UX 개선을 위해 멤버 및 캐릭터 검색 기능 추가 예정
