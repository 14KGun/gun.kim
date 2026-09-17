export type Link = { label: string; handle: string; href: string }

export const links: Link[] = [
  { label: 'Github', handle: '14KGun', href: 'https://github.com/14KGun' },
  {
    label: 'LinkedIn',
    handle: '@geon-kim-daejeon',
    href: 'https://www.linkedin.com/in/geon-kim-daejeon',
  },
  { label: 'Email', handle: 'geon6757@naver.com', href: 'mailto:geon6757@naver.com' },
  { label: 'Instagram', handle: '@geon_kim67', href: 'https://instagram.com/geon_kim67' },
]

export const navItems = [
  { id: 'work', label: 'WORK' },
  { id: 'education', label: 'EDUCATION' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'experiences', label: 'EXPERIENCES' },
  { id: 'awards', label: 'AWARDS' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'contact', label: 'CONTACT' },
]

export const work = [
  {
    period: '2024.10 — 현재',
    company: '삼성전자 DX',
    team: 'Samsung Research',
    role: 'ML SW Engineer',
    summary: 'MLOps Engineer',
  },
  {
    period: '2024.02 — 2024.06',
    company: '팀스파르타',
    team: '스튜디오팀',
    role: 'Full-stack Developer',
    summary: 'QAing Product 개발 및 유지보수',
  },
  {
    period: '2022.09 — 2023.02',
    company: 'NC소프트',
    team: 'NLP Center 검색기술실 내러티브팀',
    role: '인턴 / 팀원',
    summary: '키워드 기반 인과 관계 검색 서비스 연구 및 개발',
  },
  {
    period: '2022.02 — 2024.02',
    company: 'SPARCS',
    team: 'Taxi팀',
    role: 'Project Manager',
    summary: 'KAIST 학부 총학생회 산하 특별기구',
  },
]

export const education = [
  {
    period: '2019.03 — 2024.08',
    school: '카이스트 (KAIST)',
    detail: '전산학부 학사 · 인공지능 분야 중점 이수',
  },
  { period: '2016.03 — 2019.02', school: '수원고등학교', detail: '이과 / 일반고' },
]

export const skills = [
  { category: 'Languages', items: ['Python', 'C++', 'TypeScript'] },
  {
    category: 'Frameworks',
    items: ['PyTorch', 'NestJS', 'Node.js (Express)', 'React', 'Next.js', 'FastAPI'],
  },
]

export const projects: {
  tag: string
  period: string
  title: string
  description: string
  role?: string
}[] = [
  {
    tag: '🔍 RESEARCH',
    period: '2022.09—2023.02',
    title: '키워드 기반 인과 관계 검색 서비스',
    description: '엔씨소프트 NLP센터 검색기술실 내러티브팀',
    role: 'Research Developer',
  },
  {
    tag: '🚕 SERVICE',
    period: '2022.11—2023.11',
    title: '한가위 송편 이벤트',
    description: 'SPARCS Taxi팀 (카이스트 웹 개발 기구)',
    role: 'Project Manager',
  },
  {
    tag: '🛠 PRODUCT',
    period: '2024.02—2024.06',
    title: 'QAing',
    description: '오류 재연이 필요없는 원클릭 QA 툴 · 팀스파르타 스튜디오팀',
    role: 'Full-stack Developer',
  },
  {
    tag: '🏆 HACKATHON',
    period: '2024.07—2024.08',
    title: '마이리틀닥터',
    description: 'SPARCS 2024 AI STARTUP HACKATHON · 우수상',
    role: 'Front-end Developer',
  },
  {
    tag: '🩺 SOCIAL IMPACT',
    period: '2023.08—2023.12',
    title: 'DAYSCOUT',
    description: '카카오임팩트 / 한국 1형 당뇨병 환우회 · KAIST CS492 Tech For Impact',
    role: 'Back-end Developer',
  },
  {
    tag: '🚕 SERVICE',
    period: '2022.02—2022.11',
    title: 'Taxi 베타 서비스',
    description: 'SPARCS Taxi팀 (카이스트 웹 개발 기구)',
    role: 'Project Manager',
  },
  {
    tag: '🎓 COURSEWORK',
    period: '2022.02—2022.06',
    title: 'Classification of online post categories based on community tendencies',
    description: 'KAIST CS372 Natural Language Processing with Python',
  },
  {
    tag: '🤖 COURSEWORK',
    period: '2022.02—2022.06',
    title: 'Halli Galli Auto-play Robot',
    description: 'KAIST CS270 Intelligent Robot Design and Programming',
  },
  {
    tag: '⚙️ SIDE PROJECT',
    period: '2020.08',
    title: '오일러OJ',
    description: '오일러학원 온라인 저지',
    role: 'Developer',
  },
]

export type Award = {
  year: string
  prize: string
  contest?: string
  detail?: { text: string; team?: string; suffix?: string }
  scoreboards?: { preliminary: string; regional: string }
}

export const awards: Award[] = [
  { year: '2024', prize: '우수상 (NAVER Cloud 대표이사상)', detail: { text: 'SPARCS 2024 AI STARTUP HACKATHON' } },
  {
    year: '2021',
    prize: '동상 (9th)',
    contest: 'ACM-ICPC 2021 Seoul Regional',
    detail: { text: '과학기술정보통신부 주최 · team ', team: 'clopa' },
    scoreboards: {
      preliminary: 'http://static.icpckorea.net/2021/scoreboard_preliminary/',
      regional: 'http://static.icpckorea.net/2021/scoreboard_regional/',
    },
  },
  {
    year: '2021',
    prize: '5등상',
    contest: 'SCPC (Samsung Collegiate Programming Cup)',
    detail: { text: '삼성전자 주최' },
  },
  { year: '2021', prize: '7th', contest: 'ACM-ICPC 2021 Seoul Regional First Round' },
  {
    year: '2020',
    prize: '21st',
    contest: 'ACM-ICPC 2020 Seoul Regional',
    detail: { text: 'team ', team: 'clopa', suffix: ' · 15th at First Round' },
    scoreboards: {
      preliminary: 'http://icpckorea.org/2020/preliminary/scoreboard/dbda78f0e4/',
      regional: 'http://static.icpckorea.net/2020/scoreboard_terpin/',
    },
  },
  { year: '2017', prize: '금상 (3rd)', contest: 'KOI 한국정보올림피아드' },
  { year: '2016', prize: '금상 (5th)', contest: 'KOI 한국정보올림피아드' },
  { year: '2016', prize: '동상', contest: 'NYPC (Nexon Youth Programming Challenge)' },
]

export const experiences: { period: string; title: string; note?: string }[] = [
  { period: '2023.07 — 2023.08', title: '2023 삼성전자 하계 대학생 S/W 양성교육', note: '코치' },
  { period: '2023.01 — 2023.02', title: '2023 삼성전자 동계 대학생 S/W 양성교육', note: '코치' },
  {
    period: '2022.11 — 2022.12',
    title: '카이스트 하나은행 비학위과정 전산학 프로젝트',
    note: '강의조교',
  },
  { period: '2022.07 — 2022.08', title: '2022 삼성전자 하계 대학생 S/W 양성교육', note: '코치' },
  { period: '2022.04 — 2022.05', title: '삼성전자 Pro 알고리즘 멘토링', note: '멘토' },
  { period: '2022.01 — 2022.02', title: '2022 삼성전자 동계 대학생 S/W 양성교육', note: '코치' },
  { period: '2021.11 — 2024.02', title: 'Samsung Software Membership' },
  { period: '2021.03 — 2022.02', title: 'SPARCS Taxi팀', note: 'Front-end Developer' },
  { period: '2019.02 — 2019.06', title: 'RUN', note: '카이스트 문제 해결 동아리' },
  {
    period: '2015.08 — 2017.01',
    title: '한국정보과학회 국제정보올림피아드 계절학교',
    note: '처음반, 계속반 이수',
  },
  {
    period: '2015.01 — 2016.01',
    title: '아주대학교 과학영재교육원 중등정보과학분야',
    note: '심화반, 사사반 수료',
  },
]
