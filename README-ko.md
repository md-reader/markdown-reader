# Markdown Reader

<img src="./src/images/logo-stroke.svg" align="right" width="120">

[English](./README.md) | [中文](./README-cn.md) | 한국어

[![](https://badgen.net/chrome-web-store/v/medapdbncneneejhbgcjceippjlfkmkg?icon=chrome&color=607cd2)](https://chromewebstore.google.com/detail/md-reader/medapdbncneneejhbgcjceippjlfkmkg) [![](https://badgen.net/chrome-web-store/stars/medapdbncneneejhbgcjceippjlfkmkg?icon=chrome&color=607cd2)](https://chromewebstore.google.com/detail/md-reader/medapdbncneneejhbgcjceippjlfkmkg) [![](https://badgen.net/chrome-web-store/users/medapdbncneneejhbgcjceippjlfkmkg?icon=chrome&color=607cd2)](https://chromewebstore.google.com/detail/md-reader/medapdbncneneejhbgcjceippjlfkmkg)

크롬을 위한 마크다운 리더 확장 프로그램.

> `file://` `http://` `https://` URL 및 `*.md` `*.mkd` `*.markdown` 확장 파일을 지원합니다.

예시:

- `https://example.com/example.md`
- `file:///Users/my-project/readme.markdown`

![배너1](./example/example-1.png)

![배너2](./example/example-2.png)

## Features

- HTML 로 markdown 을 렌더링합니다
- 내용 사이드바 테이블입니다
- 원시 미리 보기
- 이미지 미리 보기
- 코드를 강조하는
- 라이트/다크/자동 테마
- 바로 가기 키
- 자동 새로고침
- 중간에서
- 플러그인:
  - 이모지
  - 위 첨자
  - 아래 첨자
  - 삽입
  - 카테고리
  - 강조
  - 공식
  - 다이어 그램
  - 약어
  - 정의
  - 각주
  - 작업 목록
  - 정보/성공/경고/위험 경보
- 지원 OS:
  - Windows
  - macOS
  - Linux
  - Ubuntu
  - ChromeOS

## 설치

### A. 온라인

[![Chrome Web Store](./src/images/chrome-web-store.png)](https://chromewebstore.google.com/detail/md-reader/medapdbncneneejhbgcjceippjlfkmkg)

### B. 로컬

1. 이 저장소를 Clone한 후 빌드하세요:

   ```bash
   # 복제 저장소
   git clone https://github.com/md-reader/markdown-reader.git && cd markdown-reader

   # 종속성 설치
   pnpm install

   # 건물 확장 우편번호
   pnpm build
   ```

2. 빌드가 성공하면 `markdown-reader/dist` 폴더가 `markdown-reader-xxx.zip` 확장 패키지를 생성합니다.

3. Chrome 의 확장 프로그램 관리 페이지로 이동하여 확장 프로그램을 브라우저에 끌어다 놓습니다.

## 사용법

설치 후 로컬 파일을 미리 보려면 먼저 로컬 파일 액세스 권한을 설정해야 합니다.

`세부정보`를 클릭한 후, `Markdown Reader` 확장 프로그램 페이지에서 enabled `파일 URL에 대한 액세스 허용`을 활성화 합니다.

<br/>

다 되었습니다!

[example.md](https://raw.githubusercontent.com/md-reader/markdown-reader/main/example/example.md) 페이지에서 잘 실행되는지 테스트 해보세요, 아니면 직접 markdown 파일을 Chrome창에 드래그 앤 드롭 해보세요!

## 빌드

```bash
# 복제 저장소
git clone https://github.com/md-reader/markdown-reader.git && cd markdown-reader

# 종속성 설치
pnpm install

# 개발 서비스 시작
pnpm dev
```

이후, Chrome 확장 프로그램 관리 페이지에서 '압축이 풀린 확장 프로그램 불러오기'를 클릭한 후 `markdown-reader/extension` 디렉터리를 선택하면 됩니다.

## 라이선스

License [MIT](https://github.com/md-reader/markdown-reader/blob/main/LICENSE)

© 2018-present, [Bener](https://github.com/Heroor)
