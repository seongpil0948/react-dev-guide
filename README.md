# React Dev Guide
- Typescript, React 기반 개발을 위해 사용을 위한 주요 가이드 모음


# 프레임 워크 기반 프로젝트 진행 계획
[vue-dev-guide](https://github.com/socketbear/vue-dev-guide)를 이용한 프로세스 기반으로 진행. 
1. (프론트엔드) 고객 산출물에 해당하는 기능 POC, 저장소 설정등 프로젝트 세팅
2. (프론트엔드) 저장소를 퍼블리셔에게 전달
3. [퍼블리싱](#퍼블리싱-절차)
4. (All) 퍼블리싱 결과물 리뷰
5. (All) 퍼블리셔 수정사항 반영, 개발팀 기능 구현

## 퍼블리싱 절차
1. 디자인, 화면설계서 기반 UI 구성(컴포넌트(페이지) 추가, css 및 테마 적용)
2. 원격 저장소를 통해 코드 전달

## 퍼블리셔들의 필요하다 생각되는 내용
- 마크다운 페이지 생성 기능 필요
- 전역 스타일 적용하는 가이드 필요
- 리액트 파일 작성 가이드.

## 리액트 파일 작성
1. 레이아웃 선정: [예시파일](src/layouts/dashboard/layout.js)
2. 페이지 선정: 파일기반 자동 라우팅
3. 코드 작성: 리액트 파일 작성 가이드에 따라 작성
## css 및 테마 적용
###  전역 scss 를 적용하는 방법
최상위 페이지에서 scss 파일을 import 하여 적용 할 수 있습니다.
[예제 파일](/src/pages/_app.js)


### 디자인을 반영하는 절차
1. scss 를 통해 스타일 정의
2. 정의된 scss 변수를 UI 프레임 워크(전역스타일, 테마)에 반영
   1. [scss변수를 자바스크립트에서 사용하기](https://frontdev.tistory.com/entry/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%97%90%EC%84%9C-CSS%EC%99%80-SASS%EC%9D%98-%EB%B3%80%EC%88%98-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0)
3. 커스텀 컴포넌트 제작시 scss 스타일 반영

## 리액트 프로젝트 진행을 위해 해야 할 일
1. 마크다운 페이지 생성 기능 추가
2. [논의된 기능 추가](#기능-추가-진행-사항)
3. 스타일적용, 리액트 가이드 문서 작성
4. [프레임 워크 기반 프로젝트 진행 계획](#프레임-워크-기반-프로젝트-진행-계획) 가능여부 확인


## 추가로 퍼블리셔의 생산성을 높힐 수 있는 방법(Optional)
목적: 퍼블리셔는 최대한 적은 인원으로 많은 프로젝트에 기여 할 수 있다.
퍼블리셔의 상태: 
- UI 생성과 수정과정 대부분에 포함 되어있다.
- scss 는 사용하나 테마적용은 한 적없다.
  
As-is 
- 매번 새로운 컴포넌트를 생성할 때마다 퍼블리셔에게 UI를 요청하는 상태.
- class 할당까지도 담당하고 있어 커뮤니케이션에 소요되는 시간이 많다.
To-be: UI프레임워크에 사전 스타일을 확장하여 개발자가 퍼블리셔에게 요청하는 횟수를 최소화 하는 것

### 퍼블리셔에게 UI 요청하는 방법
As-is: border-color 는 red, background-color는 blue인 경고 Modal창을 만들어주세요
To-be: UI 프레임워크의 경고타입 Modal은 border-color 는 red, background-color는 blue 가 되도록 해주세요.
UI 프레임워크는 퍼블리셔가 설정한 스타일에 맞춰 모든 컴포넌트를 렌더링하여 요청을 최소화 할 수 있습니다.

### 결론
퍼블리셔는 스타일을 정의하고, UI 프레임워크에 적용한다.
개발자는 어떤 타입의 어떤 컴포넌트를 사용할지 명시하면 추가 컴포넌트를 요청 할 필요가 없다.

#### 퍼블리셔 예제
- 예제의 `lightColors` 객체는 scss 변수
- 
```ts
export const lightThemeOver: GlobalThemeOverrides = {
  common: {
    primaryColor: lightColors.primary,
    primaryColorHover: lightColors.white,
    primaryColorPressed: lightColors.primary,
    primaryColorSuppl: lightColors.primary,
    baseColor: lightColors.primary,
    iconColor: lightColors.text,
    bodyColor: lightColors.background,
    fontWeightStrong: "700",
    borderRadius: "10px",
    textColorBase: lightColors.text,
    textColor1: lightColors.text,
    textColor2: lightColors.text,
    textColor3: lightColors.text,
    successColor: lightColors.primary,
    successColorHover: lightColors.primary,
    successColorPressed: lightColors.primary,
  },
  Button: {
    colorHover: lightColors.primary,
    colorPressed: lightColors.primary,
    textColorPrimary: lightColors.text,
    textColorSuccess: lightColors.text,
    borderPressed: "1px solid #f0c755",
    borderFocus: "1px solid #f0c755",
    textColorFocus: lightColors.text,
    textColor: lightColors.text,
    textColorTextSuccess: lightColors.text,
    textColorFocusSuccess: lightColors.text,
    textColorError: lightColors.white,
    // border: "1px solid #f0c755",
  },
  Card: {
	borderColor: lightColors.primary,
  },
  Typography: {
    textColor: lightColors.text,
	Info: {
		textColor: lightColors.blue
	}
  },
}
```
#### 개발자 예제
```html
<!-- 주로 사용되는 버튼 -->
<n-button type="primary" @click="forgetPassword" />
<!-- 강조하기 위한 텍스트 -->
<n-text type="info" />
<!-- 구별이 필요한 버튼 -->
<n-button strong secondary round @click="() => (step = 'showInputEmail')"/>
```

### 참고 문서
- [CssVarsProvider를 통한 Scss 포팅](https://mui.com/material-ui/experimental-api/css-theme-variables/usage/)
- [MUI Theme](https://mui.com/material-ui/customization/theme-components/)
- 


## POC 기반 컴포넌트(페이지) 추가
사전 간단한 설명과 예제 제공이 필요합니다.
- 리액트기반 UI 구성
- UI 프레임워크 레이아웃에 대한 설명(Grid or row col 시스템)

1. 페이지별 파일 생성 (Nextjs 파일기반 Pages Router)
2. POC, UI프레임워크 기반 기본 UI 생성






## 기능 추가 진행 사항
- [x] typescript 적용
- [ ] playwright 적용
- [ ] 상태관리 라이브러리 논의
- [ ] i18n 적용
- [ ] tailwind 적용 여부 결정
- [x] Scss 적용
- [ ] 필요하지 않은 패키지 제거
- [ ] [vue-dev-guide](https://github.com/socketbear/vue-dev-guide) 팔로우
- [ ] 타 스타트킷 논의
  - [ ] https://reactjs-kr.firebaseapp.com/community/starter-kits.html
  - [ ] 스타트킷 중 next, tailwind, playwright, scss, 18n, typescript, theme, auto import 모두 만족하는 패키지도 없으며
  일부 만족하되 불필요한 세팅이 많은 템플릿이 많아 직접 제작하는 방향으로 가야 할 것 같습니다.

### 스타트킷 관련 문서 목록
- https://github.com/dunky11/react-saas-template
- https://reactjs-kr.firebaseapp.com/community/starter-kits.html
- https://github.com/cruip/open-react-template/tree/master

## 프레임워크의 추가 될 기본 기능들

- ⚡️ [React](https://react.dev/), [pnpm](https://pnpm.io/), [Vite 3](https://github.com/vitejs/vite)

- 🗂 [File based routing](./src/pages)

- 📦 [Components auto importing](./src/components)

- 🍍 [State Management via Next](https://nextjs.org/docs/getting-started/installation)

- 📑 [Layout system](./src/layouts)

<!-- - 📲 [PWA](https://github.com/antfu/vite-plugin-pwa) -->

- 🎨 [UnoCSS](https://github.com/antfu/unocss) - the instant on-demand atomic CSS engine

- 😃 [Use icons from any icon sets with classes](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

- 🌍 [I18n ready](./locales)

<!-- - 🗒 [Markdown Support](https://github.com/antfu/vite-plugin-vue-markdown) -->

<!-- - 📥 [APIs auto importing](https://github.com/antfu/unplugin-auto-import) - use Composition API and others directly -->

- 🖨 Static-site generation (SSG) via [vite-ssg](https://github.com/antfu/vite-ssg)

- 🦔 Critical CSS via [critters](https://github.com/GoogleChromeLabs/critters)

- 🦾 TypeScript, of course

- ⚙️ Testing with [Playwright](https://playwright.dev/) on [GitHub Actions](https://github.com/features/actions)

## Free Figma Community File

- [Duplicate File](https://www.figma.com/community/file/1039837897183395483/Devias-Dashboard-Design-Library-Kit)

## Quick start
- [Download from Github](https://github.com/devias-io/material-kit-react/archive/master.zip)
  or [Download from Devias](https://devias.io/products/material-kit-react) or clone the
  repo: `git clone https://github.com/devias-io/material-kit-react.git`

- Make sure your Node.js and npm versions are up to date for `React 18`

- Install dependencies: `npm install` or `yarn`

- Start the server: `npm run dev` or `yarn dev`

- Views are on: `localhost:3000`

## File Structure

Within the download you'll find the following directories and files:

```
material-kit-react

┌── .eslintrc.json
├── .gitignore
├── CHANGELOG.md
├── LICENSE.md
├── next.config.js
├── package.json
├── README.md
├── public
└── src
	├── components
	├── contexts
	├── guards
	├── hocs
	├── hooks
	├── layouts
	├── sections
	├── theme
	├── utils
	└── pages
		├── 404.js
		├── _app.js
		├── _document.js
		├── account.js
		├── companies.js
		├── customers.js
		├── index.js
		├── products.js
		└── settings.js
		└──  auth
			├── login.js
			└── register.js
```

## License
- Licensed under MIT (https://github.com/devias-io/react-material-dashboard/blob/master/LICENSE.md)

## Contact Us

- Email Us: seongpil0948@gmail.com
