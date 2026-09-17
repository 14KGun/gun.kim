# gun.kim

김건 (Geon Kim) 개인 CV 사이트. React + TypeScript + Vite.

## 개발

```sh
pnpm install
pnpm dev      # 개발 서버
pnpm build    # 프로덕션 빌드 (dist/)
pnpm lint     # oxlint
```

## 구조

- `src/data.ts` — 경력, 학력, 기술, 프로젝트, 수상, 활동, 연락처 데이터
- `src/App.tsx` — 페이지 레이아웃
- `src/App.css`, `src/index.css` — 스타일 (색상 토큰은 `index.css`의 `:root`)
- `src/assets/` — 커버 사진, 프로필 이미지
