# Symphony-one

현재 저장소는 단일 Node.js HTTP 서버로 구성된 매우 작은 웹 애플리케이션이다.
브라우저 요청을 받아 정적인 HTML 문서를 반환하며, 아직 프론트엔드 빌드 도구나
별도 애플리케이션 계층은 없다.

## 프로젝트 개요

- 목적: 최소한의 웹 서버 구성을 통해 브라우저에서 HTML 페이지를 제공한다.
- 현재 동작: `GET /` 요청에 대해 `hello world`가 포함된 HTML 문서를 반환한다.
- 실행 방식: `npm start`로 `server.js`를 직접 실행한다.

## 기술 스택

- Runtime: Node.js
- Server API: Node.js 내장 `http` 모듈
- Package Manager: npm
- Language: JavaScript (CommonJS)
- Dependencies: 외부 런타임 의존성 없음

## 아키텍처

애플리케이션은 단일 프로세스, 단일 엔트리포인트 구조다.

1. `npm start`가 실행되면 `node server.js`가 시작된다.
2. `server.js`가 Node.js 내장 `http` 서버를 생성한다.
3. 서버는 `127.0.0.1:${PORT}` 에 바인딩된다.
   기본 포트는 `3000`이고, `PORT` 환경 변수가 있으면 그 값을 사용한다.
4. 요청이 들어오면 서버는 미리 정의된 HTML 문자열을 `text/html` 응답으로 반환한다.

### 요청 처리 흐름

```text
Browser
  -> HTTP request
  -> server.js
  -> http.createServer handler
  -> HTML response (hello world)
```

## 코드 구조

### `server.js`

- 애플리케이션의 유일한 서버 엔트리포인트
- `http.createServer(...)` 로 HTTP 서버 생성
- `host`, `port`, `html` 을 파일 상단에서 정의
- 모든 요청에 대해 상태 코드 `200`과 HTML 응답 반환
- 서버 시작 후 콘솔에 접근 URL 출력

### `package.json`

- 프로젝트 메타데이터 정의
- `start` 스크립트만 포함
- 별도 빌드, 테스트, 린트 스크립트는 아직 없음

### `README.md`

- 프로젝트 실행 방법과 현재 아키텍처를 설명하는 문서

## 패키지 구조

현재 저장소 루트 기준 구조는 아래와 같다.

```text
.
├── README.md
├── package.json
└── server.js
```

별도의 `src/`, `public/`, `routes/`, `components/` 디렉터리는 아직 없다.
즉, 서버 로직과 응답 템플릿이 모두 `server.js` 한 파일에 모여 있다.

## 실행 방법

```bash
npm start
```

기본 접속 주소:

```text
http://127.0.0.1:3000
```

포트를 변경하려면 환경 변수를 사용한다.

```bash
PORT=4000 npm start
```

## 현재 설계 특징

- 구조가 단순해서 빠르게 실행하고 확인하기 쉽다.
- 외부 의존성이 없어 설치 부담이 낮다.
- 반면 라우팅, 템플릿 분리, 정적 자산 관리, 테스트 구조는 아직 없다.

즉, 현재 상태는 "프로젝트 전체 아키텍처"라기보다 최소 서버 스캐폴드에 가깝고,
향후 기능이 늘어나면 `src/` 분리, 라우트 계층화, 테스트 스크립트 추가가 필요한 구조다.
