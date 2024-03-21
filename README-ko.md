# Markdown Reader

<img src="./src/images/logo-stroke.svg" align="right" width="120">

[English](./README.md) | [中文](./README-cn.md) | 한국어

[![](https://badgen.net/chrome-web-store/v/medapdbncneneejhbgcjceippjlfkmkg?icon=chrome&color=607cd2)](https://chromewebstore.google.com/detail/md-reader/medapdbncneneejhbgcjceippjlfkmkg) [![](https://badgen.net/chrome-web-store/stars/medapdbncneneejhbgcjceippjlfkmkg?icon=chrome&color=607cd2)](https://chromewebstore.google.com/detail/md-reader/medapdbncneneejhbgcjceippjlfkmkg) [![](https://badgen.net/chrome-web-store/users/medapdbncneneejhbgcjceippjlfkmkg?icon=chrome&color=607cd2)](https://chromewebstore.google.com/detail/md-reader/medapdbncneneejhbgcjceippjlfkmkg)

마크다운 리더는 Chrome에서 마크다운 문서를 빠르게 미리 볼 수 있는 강력한 크롬 확장 프로그램입니다.

- `file://` `http://` `https://` 프로토콜을 통한 링크 미리 보기 지원 및 다음과 같은 확장자(`*.md` `*.mkd` `*.mdx` `*.markdown`)를 가진 문서 미리 보기 지원:
  - `https://example.com/example.md` (온라인 마크다운 URL)
  - `file:///Users/my-project/readme.markdown` (로컬 마크다운 파일, \*[특정 권한 필요](#파일-액세스-권한-허용))
- 이모지 이모티콘, 위 첨자/아래 첨자, 체크박스, 수학 공식, 플로우차트, 간트 차트, 목차, 삽입, 마크다운, 약어, 패러프레이즈, 주석, 메시지/성공/경고/위험 알림 등 여러 구문 플러그인 내장 지원.
- 코드 강조 및 조심스럽게 정리된 라이트/다크 테마 스타일 지원.
- 문서 핫 리로딩 지원으로 실시간 문서 변경 내용 미리 보기; 문서 중심 표시 지원으로 읽기에 더 적합.
- 문서 디렉토리 자동 정리 및 사이드바로 이동하여 원본 파일 콘텐츠 미리 보기 지원; 이미지 미디어 자원 미리 보기 지원.
- 크롬 확장 프로그램 바로 가기 지원으로 빠른 기능 호출 가능.

![banner](./example/example-1.png)

## 설치

### A. Chrome 웹 스토어에서 설치하기

<a href="https://chromewebstore.google.com/detail/md-reader/medapdbncneneejhbgcjceippjlfkmkg" target="_blank"><img src="./src/images/chrome-web-store.svg" alt="Chrome Web Store" style="width:247px"/></a>

### B. 빌드 설치

1. `markdown-reader` 저장소를 복제하고 빌드하세요:

   ```bash
   # 이 저장소를 복제합니다
   git clone https://github.com/md-reader/markdown-reader.git && cd markdown-reader

   # 의존성을 설치합니다
   pnpm install

   # 확장 프로그램을 빌드합니다
   pnpm build
   ```

2. 빌드가 성공적으로 완료되면 `markdown-reader/dist` 폴더에 `markdown-reader-xxx.zip` 확장 프로그램 패키지가 생성됩니다.

3. Chrome의 확장 프로그램 관리 페이지로 이동하여 확장 프로그램을 브라우저에 드래그하여 설치하세요.

## 사용법

설치 후에는 Chrome에서 온라인 마크다운 문서를 미리 볼 수 있습니다. 그러나 Chrome은 기본적으로 로컬 마크다운 문서를 미리 볼 수 없으며 Chrome 확장 프로그램에 대한 파일 액세스 권한을 활성화해야 합니다.

### 파일 액세스 권한 허용

> 보안상의 이유로 Chrome은 기본적으로 로컬 파일에 대한 확장 프로그램 액세스를 비활성화합니다. 따라서 플러그인을 설치한 후 로컬 마크다운 파일을 미리 보려면 권한을 수동으로 활성화해야 합니다.

Chrome 확장 프로그램 관리 페이지에서 설치한 "Markdown Reader" 확장 프로그램을 찾아 "상세정보"를 클릭하고 "파일 URL에 대한 액세스 허용" 옵션을 찾으세요. 세부 정보 페이지에서 이를 활성 상태로 전환하세요 ("Markdown Reader"는 마크다운 파일에 대해 읽기 및 표시 작업만 수행하며 사용자 파일 데이터를 수정하거나 업로드하지 않음을 안심하셔도 됩니다).

<br/>

이제 모든 작업이 완료되었습니다~! ヾ(◍°∇°◍)ﾉ

이 온라인 문서를 열어 효과를 확인해보세요: [예시 문서](https://raw.githubusercontent.com/md-reader/markdown-reader/main/example/example.md); 또한 마크다운 문서를 브라우저로 직접 드래그하여 시도해볼 수도 있습니다!

질문이나 제안이 있으면 언제든지 말씀해주세요.

지원을 나타내기 위해 별을 주시는 것도 저에게 큰 격려입니다~!

## 라이선스

라이선스 [MIT](https://github.com/md-reader/markdown-reader/blob/main/LICENSE)

© 2018-present, [Bener](https://github.com/Heroor)
