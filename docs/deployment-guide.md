# 🚀 배포 가이드

보리 사이트 (온라인 명함 웹사이트) 배포 가이드입니다.

## 📋 목차

1. [배포 전 준비사항](#배포-전-준비사항)
2. [배포 방법](#배포-방법)
3. [배포 후 확인사항](#배포-후-확인사항)
4. [문제 해결](#문제-해결)
5. [유지보수](#유지보수)

## 🔧 배포 전 준비사항

### 1. 로컬 테스트 확인
```bash
# 개발 서버 실행
npm run dev

# 브라우저에서 확인
# http://localhost:3000
```

### 2. 빌드 테스트
```bash
# 프로덕션 빌드 생성
npm run build

# 빌드 성공 확인
npm run start
```

### 3. Git 커밋 확인
```bash
# 현재 상태 확인
git status

# 변경사항 커밋
git add .
git commit -m "Ready for deployment"
```

## 🌐 배포 방법

### 방법 1: Vercel 웹 인터페이스 (추천)

가장 간단하고 직관적인 방법입니다.

#### 단계별 가이드:

1. **Vercel 웹사이트 접속**
   - [vercel.com](https://vercel.com) 접속
   - GitHub/Google/이메일 계정으로 회원가입/로그인

2. **프로젝트 배포**
   ```
   1. "Add New..." 버튼 클릭
   2. "Project" 선택
   3. "Browse" 클릭
   4. 프로젝트 폴더 선택: D:\AI_Homapage\ecard\online-business-card
   5. 프로젝트 이름 설정 (예: bori-website)
   6. "Deploy" 클릭
   ```

3. **배포 대기**
   - 약 3-5분 소요
   - 자동으로 빌드 및 배포 진행
   - 배포 완료 시 고유 URL 생성

### 방법 2: GitHub + Vercel 연동

코드 변경 시 자동 배포가 가능합니다.

#### 단계별 가이드:

1. **GitHub 저장소 생성**
   - [github.com](https://github.com)에서 새 저장소 생성
   - 저장소 이름: `bori-website` (예시)

2. **코드 업로드**
   ```bash
   # GitHub 저장소 연결
   git remote add origin https://github.com/your-username/bori-website.git
   
   # 메인 브랜치로 설정
   git branch -M main
   
   # 코드 푸시
   git push -u origin main
   ```

3. **Vercel 연동**
   ```
   1. Vercel 대시보드에서 "Add New..." → "Project"
   2. "Import Git Repository" 선택
   3. GitHub 저장소 선택
   4. 자동 빌드 설정 확인
   5. "Deploy" 클릭
   ```

### 방법 3: Vercel CLI 직접 배포

터미널에서 직접 배포하는 방법입니다.

#### 단계별 가이드:

1. **Vercel CLI 설치 및 로그인**
   ```bash
   # Vercel CLI 설치
   npm install -g vercel
   
   # 로그인
   vercel login
   ```

2. **배포 실행**
   ```bash
   # 프로덕션 배포
   vercel --prod
   
   # 또는 단순 배포
   vercel
   ```

## ✅ 배포 후 확인사항

### 1. 웹사이트 접속 확인
- 배포 완료 후 제공되는 URL 접속
- 예: `https://bori-website.vercel.app`

### 2. 주요 기능 테스트
- [ ] 히어로 섹션 로딩
- [ ] 타이핑 애니메이션 작동
- [ ] 프로필 이미지 표시
- [ ] 네비게이션 스크롤 작동
- [ ] 프로젝트 필터링 작동
- [ ] 연락처 폼 작동
- [ ] 반응형 디자인 확인

### 3. 성능 확인
- 페이지 로딩 속도 확인
- 모바일 최적화 확인
- SEO 메타데이터 확인

## 🔧 문제 해결

### 자주 발생하는 문제들

#### 1. 빌드 오류
```bash
# 에러 확인
npm run build

# 일반적인 해결책
- TypeScript 오류 수정
- ESLint 오류 수정
- 이미지 경로 확인
```

#### 2. 이미지 로딩 문제
```typescript
// 이미지 경로 확인
profileImage: '/images/profile.jpg'  // public/images/profile.jpg

// Fallback 이미지 설정
onError={(e) => {
  (e.target as HTMLImageElement).src = '/images/default-profile.jpg';
}}
```

#### 3. 환경 변수 설정
```bash
# .env.local 파일 생성
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

#### 4. 커스텀 도메인 설정
```
1. Vercel 대시보드 → 프로젝트 선택
2. "Settings" → "Domains"
3. 도메인 추가 및 DNS 설정
```

## 🔄 유지보수

### 1. 자동 배포 설정
- GitHub 연동 시 코드 변경 시 자동 배포
- `main` 브랜치에 푸시 시 자동 배포

### 2. 배포 히스토리 관리
- Vercel 대시보드에서 배포 히스토리 확인
- 문제 발생 시 이전 버전으로 롤백 가능

### 3. 성능 모니터링
- Vercel Analytics 활용
- 페이지 로딩 속도 모니터링
- 사용자 경험 개선

### 4. 정기 업데이트
```bash
# 의존성 업데이트
npm update

# 보안 업데이트
npm audit fix

# 재배포
vercel --prod
```

## 📊 배포 체크리스트

### 배포 전
- [ ] 로컬에서 `npm run dev` 정상 작동
- [ ] `npm run build` 성공
- [ ] 모든 기능 테스트 완료
- [ ] Git 커밋 완료

### 배포 중
- [ ] 배포 방법 선택
- [ ] 프로젝트 설정 확인
- [ ] 빌드 로그 확인

### 배포 후
- [ ] 웹사이트 접속 확인
- [ ] 주요 기능 테스트
- [ ] 모바일 호환성 확인
- [ ] SEO 메타데이터 확인
- [ ] 성능 측정

## 🆘 지원 및 문의

### 공식 문서
- [Vercel 공식 문서](https://vercel.com/docs)
- [Next.js 배포 가이드](https://nextjs.org/docs/deployment)

### 커뮤니티 지원
- [Vercel 커뮤니티](https://github.com/vercel/vercel/discussions)
- [Next.js 커뮤니티](https://github.com/vercel/next.js/discussions)

---

**🎉 축하합니다!** 이제 보리 사이트가 성공적으로 배포되었습니다. 