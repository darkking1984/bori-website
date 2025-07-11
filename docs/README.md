# 보리 사이트 - 온라인 명함 웹사이트

AI 기반 1인 창업자 보리의 전문적인 온라인 명함 웹사이트입니다.

## 🌟 프로젝트 개요

### 주요 기능
- **히어로 섹션**: 프로필 이미지, 타이핑 애니메이션, 그라데이션 배경
- **어바웃 섹션**: 프로필 정보, 경험 타임라인, 기술 스킬
- **프로젝트 섹션**: 포트폴리오, 카테고리 필터링, 기술 스택 표시
- **비디오 섹션**: YouTube 임베드, 소개 영상
- **연락처 섹션**: 연락 정보, 메시지 폼, 추천서

### 기술 스택
- **프론트엔드**: Next.js 15, React 18, TypeScript
- **스타일링**: Tailwind CSS, Framer Motion
- **아이콘**: Lucide React
- **배포**: Vercel
- **개발 도구**: ESLint, TypeScript, Git

## 🚀 빠른 시작

### 1. 프로젝트 클론
```bash
git clone <repository-url>
cd online-business-card
```

### 2. 의존성 설치
```bash
npm install
```

### 3. 개발 서버 실행
```bash
npm run dev
```

### 4. 브라우저에서 확인
[http://localhost:3000](http://localhost:3000)

## 📁 프로젝트 구조

```
online-business-card/
├── docs/                    # 문서 폴더
│   ├── README.md           # 프로젝트 개요
│   └── deployment-guide.md # 배포 가이드
├── public/                 # 정적 파일
│   ├── images/            # 이미지 파일
│   └── *.svg              # 아이콘 파일
├── src/                   # 소스 코드
│   ├── app/               # Next.js App Router
│   │   ├── layout.tsx     # 레이아웃
│   │   ├── page.tsx       # 메인 페이지
│   │   └── globals.css    # 전역 스타일
│   ├── components/        # 컴포넌트
│   │   ├── sections/      # 섹션 컴포넌트
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   ├── VideoSection.tsx
│   │   │   └── ContactSection.tsx
│   │   └── ui/            # UI 컴포넌트
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Badge.tsx
│   │       └── SocialLinks.tsx
│   ├── data/              # 데이터 파일
│   │   ├── profile.ts     # 프로필 데이터
│   │   ├── projects.ts    # 프로젝트 데이터
│   │   └── social.ts      # 소셜 링크 데이터
│   ├── lib/               # 유틸리티
│   │   ├── utils.ts       # 유틸리티 함수
│   │   └── constants.ts   # 상수 정의
│   └── types/             # TypeScript 타입 정의
│       └── index.ts       # 타입 정의
├── package.json           # 프로젝트 설정
├── tailwind.config.ts     # Tailwind 설정
├── tsconfig.json          # TypeScript 설정
└── next.config.ts         # Next.js 설정
```

## 🎨 커스터마이징

### 1. 프로필 정보 수정
`src/data/profile.ts` 파일을 수정하여 개인 정보를 변경할 수 있습니다.

```typescript
export const profileData: Profile = {
  name: '보리',
  title: 'AI 기반 1인 창업자',
  description: '자신만의 소개글...',
  email: 'contact@bori.ai',
  location: 'Seoul, South Korea',
  profileImage: '이미지 URL 또는 경로',
  resumeUrl: '/resume.pdf'
};
```

### 2. 프로젝트 포트폴리오 수정
`src/data/projects.ts` 파일을 수정하여 프로젝트를 추가/수정할 수 있습니다.

### 3. 소셜 링크 수정
`src/data/social.ts` 파일을 수정하여 소셜 미디어 링크를 변경할 수 있습니다.

### 4. 색상 및 스타일 수정
`tailwind.config.ts` 파일을 수정하여 색상 테마를 변경할 수 있습니다.

## 🔧 개발 명령어

```bash
# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm run start

# 코드 린팅
npm run lint

# TypeScript 타입 체크
npm run type-check
```

## 📦 배포

자세한 배포 가이드는 [`docs/deployment-guide.md`](./deployment-guide.md)를 참고하세요.

### 빠른 배포 (Vercel)
1. [vercel.com](https://vercel.com) 접속
2. GitHub/Google 계정으로 로그인
3. 프로젝트 폴더 업로드
4. 자동 빌드 및 배포

## 🐛 문제 해결

### 자주 발생하는 문제
1. **이미지 로딩 실패**: `public/images/` 폴더에 이미지 파일 확인
2. **빌드 오류**: TypeScript 오류 및 ESLint 오류 수정
3. **포트 충돌**: 다른 포트 사용 또는 기존 프로세스 종료

### 지원
- 이슈 발생 시 GitHub Issues 활용
- 문서 참조: [배포 가이드](./deployment-guide.md)

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 🙏 감사의 말

이 프로젝트는 다음 기술들을 활용하여 만들어졌습니다:
- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/)
- [Vercel](https://vercel.com/)

---

**🎉 보리 사이트에 오신 것을 환영합니다!** 