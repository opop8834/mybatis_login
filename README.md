Maven <br/>
spring boot 2.7.8<br/>
java 8<br/>

실행방법

백엔드
<br/>
main/resources/application.properties 에서 driverClassName, url, username, password 수정
<br/>
mysql Table 구축할 때 table쿼리.txt 참고
<br/>

프론트엔드<br/>
cd frontend<br/>
npm i<br/>
React, Spring 실행<br/>


### 메인화면
<img src ="https://velog.velcdn.com/images/opop8834/post/6e85ac50-3939-47ca-b89c-98de2b83936f/image.png">

### 회원가입창
<img src ="https://velog.velcdn.com/images/opop8834/post/2bc175ef-94dd-45c7-a168-f38ce1da4baf/image.png">
><img src ="https://velog.velcdn.com/images/opop8834/post/b2b572b0-683f-498a-8b46-85288ecfa83c/image.png">

test유저 등록
<br/>
<img src="https://velog.velcdn.com/images/opop8834/post/55b53d8b-a625-4e59-b726-8c165e9af343/image.png">

먼저 DB에 같은 id가 있는지 파악한 다음, 만약 없으면 

<img src ="https://velog.velcdn.com/images/opop8834/post/fc65b737-972c-4723-a8ab-4997be6e7ddd/image.png">

insert문 실행

test 유저 추가
<br/>
<img src ="https://velog.velcdn.com/images/opop8834/post/cb7f5fd8-5e79-4f98-bef9-6044789d52fb/image.png">

Test 유저 로그인
<br/>
<img src ="https://velog.velcdn.com/images/opop8834/post/e83a33e3-a9c1-4f1b-adbd-d38e2584d754/image.png">
<br/>
<img src ="https://velog.velcdn.com/images/opop8834/post/d932af02-5d87-434a-897b-0d65ab9b2dc1/image.png">
<br/>
select문으로 조회해보고 DB에 없으면 로그인 불가 
만약 존재하면 로그인 성공

### 로그인 성공 화면
<img src ="https://velog.velcdn.com/images/opop8834/post/4d11e9a8-25cd-4221-b01b-134c56b4a4c8/image.png">
<img src ="https://velog.velcdn.com/images/opop8834/post/8b302330-9ea3-48f2-830f-123d342bfb31/image.png">

현재 로그인상태와 id를 localstorage에 저장하여 새로고침 해도 로그인 상태 유지
<br/>

<img src ="https://velog.velcdn.com/images/opop8834/post/288e79c8-6e34-4950-a791-095dcc84afad/image.png">
<br/>
물론 로그아웃 하면 다 삭제됨

### 프로필 수정 화면
<img src ="https://velog.velcdn.com/images/opop8834/post/4e3f2e94-ac3f-43be-bfc0-741c2cf9b8a6/image.png">

비밀번호는 길이에 따라 *로 표시
<br/>
<img src ="https://velog.velcdn.com/images/opop8834/post/8f316a59-3285-4784-92a1-0bab9d80b269/image.png">

유저 ID를 백엔드로 통신하면 해당 ID에 따른 추가적인 정보들을 프론트엔드로 가져오고 프로필에 표시

### 비밀번호 수정 화면
<img src ="https://velog.velcdn.com/images/opop8834/post/91021dd9-2e32-4066-bc31-b6a005623ab0/image.png">

현재 비밀번호를 입력하는 인증절차 추가

<br/>
<img src ="https://velog.velcdn.com/images/opop8834/post/76b19a1b-5347-4013-a4c0-0f28372be656/image.png">

현재 비밀번호 입력하면

<br/>
<img src ="https://velog.velcdn.com/images/opop8834/post/e5b6436b-295a-4755-8f3a-2e79d4aa165f/image.png">
<img src ="https://velog.velcdn.com/images/opop8834/post/fd5f8ff3-2963-4c1b-8799-0986c556df4f/image.png">

수정 권한 얻고 변경가능
ex) 임의의 12자리 비밀번호로 변경하면
<img src ="https://velog.velcdn.com/images/opop8834/post/f7832577-3ff5-4df9-9899-0b184ab6714d/image.png">

update문이 실행된다.

그리고 프로필 화면으로 이동되고 

<img src ="https://velog.velcdn.com/images/opop8834/post/dbddcac3-fc81-4250-82cc-30623d8f6aa0/image.png">

비밀번호도 즉시 길이에 따라서 랜더링된다.

수정된 모습

<img src ="https://velog.velcdn.com/images/opop8834/post/22c35240-23da-4fbf-b980-6190a38cdaf7/image.png">

### 탈퇴창
<img src ="https://velog.velcdn.com/images/opop8834/post/9fb6fac4-b6e1-4fdc-83d9-c2bf0c8f5343/image.png">
탈퇴도 마찬가지로 현재 비밀번호로 인증해야 탈퇴 권한을 얻게됨
<br/>
<img src ="https://velog.velcdn.com/images/opop8834/post/dd19f7d9-0626-44d5-9ca5-1f0a4bd77f11/image.png">
<br/>
Alert로 탈퇴 유무 확인 후 삭제
<br/>
<img src ="https://velog.velcdn.com/images/opop8834/post/bbdf3372-26de-4221-b34a-5825f2017fe4/image.png">

DELETE문 실행

삭제된 모습

<img src="https://velog.velcdn.com/images/opop8834/post/fb5fbb68-fb84-4765-bbf9-be144820b942/image.png">

### 프로젝트 성과 일지
1월 26일 : my batis 적용해서 db 테이블 user들 출력  <br/>
    // proxy설정 잊지말자<br/>
1월 27일 : 회원가입 버튼 눌러서 user추가<br/>
1월 30일 : 로그인하면 기존의 db 데이터와 비교 후 실행<br/>
1월 31일 : localstorage이용하여 자동 로그인 기능추가, 똑같은 id가 db에 있으면 회원가입 안됨, 프로필 수정화면 구현, 비밀번호 변경 기능, 유저탈퇴 기능<br/>
// 비밀번호 변경하면 바로바로 랜더링 최신화<br/>
// 비밀번호 변경하려면 비밀번호를 인증하고 수정권한을 얻어야 된다.<br/>
// 수정할때는 기존의 비밀번호와 같거나 null이면 안된다.<br/>
2월 1일 : 수정 탈퇴, 회원가입 할때 자연스럽게 현재 창 나가기, 유저 탈퇴할때도 비밀번호 인증하기<br/>

### 보완할 점
데이터베이스에 유저의 암호가 그대로 저장되기 때문에 보안쪽에 치명적 약점이 생길 수도 있을 것이다.
다음에는 암호화를 적용해서 프로젝트를 진행해보자
