import type { ReactNode } from 'react'
import photo from './assets/photo.jpeg'
import profile from './assets/profile-circle.png'
import {
  awards,
  education,
  experiences,
  links,
  navItems,
  projects,
  skills,
  work,
} from './data'
import './App.css'

function Section({
  id,
  icon,
  title,
  className = 'section',
  children,
}: {
  id: string
  icon: string
  title: string
  className?: string
  children: ReactNode
}) {
  return (
    <section id={id} className={className}>
      <div className="section-header">
        <span className="section-icon">{icon}</span>
        <h2 className="section-title">{title}</h2>
      </div>
      {children}
    </section>
  )
}

function App() {
  return (
    <div className="page">
      <nav className="nav">
        <div className="nav-inner">
          <span className="nav-name">
            김건 <span className="nav-name-en">Geon Kim</span>
          </span>
          <div className="nav-links">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <div className="cover">
        <img src={photo} alt="" />
      </div>

      <main className="container">
        <header className="profile">
          <img className="avatar" src={profile} alt="김건" />
          <h1 className="name">김건</h1>
          <p className="intro">
            ML SW Engineer at <strong>Samsung Research</strong> · KAIST 전산학부(인공지능 중점)
            졸업. 검색·NLP 연구부터 풀스택 제품 개발, MLOps까지 — 만들고 싶은 걸 끝까지 만들어 본
            사람입니다.
          </p>
          <div className="pills">
            {links.map((link) => (
              <a
                key={link.label}
                className="pill"
                href={link.href}
                {...(link.href.startsWith('mailto:')
                  ? {}
                  : { target: '_blank', rel: 'noreferrer' })}
              >
                {link.label} <span className="pill-handle">{link.handle}</span>
              </a>
            ))}
          </div>
        </header>

        <Section id="work" icon="💼" title="WORK EXPERIENCES" className="section section-first">
          {work.map((job) => (
            <div key={job.period} className="row row-work">
              <div className="row-date">{job.period}</div>
              <div className="row-body">
                <div className="row-title">
                  {job.company} <span className="slash">/</span> {job.team}
                </div>
                <div className="work-meta">
                  <span className="role-badge">{job.role}</span>
                  <span className="work-summary">{job.summary}</span>
                </div>
              </div>
            </div>
          ))}
        </Section>

        <Section id="education" icon="🎓" title="EDUCATION">
          {education.map((edu) => (
            <div key={edu.period} className="row row-education">
              <div className="row-date">{edu.period}</div>
              <div className="row-body">
                <div className="row-title">{edu.school}</div>
                <div className="row-detail">{edu.detail}</div>
              </div>
            </div>
          ))}
        </Section>

        <Section id="skills" icon="💻" title="TECHNICAL SKILLS">
          {skills.map((group) => (
            <div key={group.category} className="skill-row">
              <div className="row-date">{group.category}</div>
              <div className="chips">
                {group.items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Section>

        <Section id="projects" icon="🚀" title="PROJECTS">
          <div className="project-grid">
            {projects.map((project) => (
              <div key={project.title} className="card project-card">
                <div className="project-head">
                  <span className="project-tag">{project.tag}</span>
                  <span className="project-period">{project.period}</span>
                </div>
                <div className="project-title">{project.title}</div>
                <div className="project-desc">{project.description}</div>
                {project.role && <div className="project-role">{project.role}</div>}
              </div>
            ))}
          </div>
        </Section>

        <Section id="awards" icon="🏆" title="AWARDS">
          {awards.map((award) => (
            <div key={`${award.year}-${award.prize}`} className="row row-award">
              <div className="row-date award-year">{award.year}</div>
              <div className="row-body">
                <div className="award-title">
                  <strong>{award.prize}</strong>
                  {award.contest && ` — ${award.contest}`}
                </div>
                {award.detail && (
                  <div className="award-detail">
                    {award.detail.text}
                    {award.detail.team && <span className="mono">{award.detail.team}</span>}
                    {award.detail.suffix}
                  </div>
                )}
                {award.scoreboards && (
                  <div className="award-links">
                    <a href={award.scoreboards.preliminary} target="_blank" rel="noreferrer">
                      scoreboard · preliminary ↗
                    </a>
                    <a href={award.scoreboards.regional} target="_blank" rel="noreferrer">
                      scoreboard · regional ↗
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </Section>

        <Section id="experiences" icon="📚" title="EXPERIENCES">
          {experiences.map((exp) => (
            <div key={exp.period} className="row row-experience">
              <div className="row-date">{exp.period}</div>
              <div className="experience-body">
                {exp.note ? `${exp.title} ` : exp.title}
                {exp.note && <span className="experience-note">{`· ${exp.note}`}</span>}
              </div>
            </div>
          ))}
        </Section>

        <Section id="contact" icon="📞" title="CONTACT">
          <div className="contact-grid">
            {links.map((link) => (
              <a
                key={link.label}
                className="card contact-card"
                href={link.href}
                {...(link.href.startsWith('mailto:')
                  ? {}
                  : { target: '_blank', rel: 'noreferrer' })}
              >
                <div className="contact-label">{link.label.toUpperCase()}</div>
                <div className="contact-value">{link.handle}</div>
              </a>
            ))}
          </div>
          <p className="footer-note">Last updated 2026.09 · 김건 Geon Kim</p>
        </Section>
      </main>
    </div>
  )
}

export default App
