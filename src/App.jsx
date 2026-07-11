import { useEffect, useRef, useState } from 'react'
import './App.css'

/* ─── DATA ─────────────────────────────────────────────────── */
const socialLinks = [
  {
    href: 'https://github.com/sukirtha2004',
    label: 'GitHub',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
        <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 22.3 24 17.8 24 12.5 24 5.87 18.63.5 12 .5z" />
      </svg>
    ),
  },
  {
    href: 'https://www.linkedin.com/in/sukirtha-l/',
    label: 'LinkedIn',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
        <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.28 8.75H4.7V23H.28V8.75zm7.4 0h4.22v1.96h.06c.59-1.12 2.03-2.3 4.18-2.3 4.47 0 5.3 2.94 5.3 6.77V23h-4.43v-7.37c0-1.76-.03-4.02-2.45-4.02-2.45 0-2.82 1.91-2.82 3.89V23H7.68V8.75z" />
      </svg>
    ),
  },
  {
    href: 'https://leetcode.com/u/Sukirthaloganathan/',
    label: 'LeetCode',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
      </svg>
    ),
  },
]

const skillGroups = [
  {
    title: 'Programming Languages',
    items: [
      { name: 'Java', color: '#f97316' },
      { name: 'Python', color: '#a855f7' },
      { name: 'JavaScript', color: '#fbbf24' },
      { name: 'SQL', color: '#facc15' },
    ],
  },
  {
    title: 'AI Technologies',
    items: [
      { name: 'RAG & LLMs', color: '#e2e8f0' },
      { name: 'LangChain', color: '#fb923c' },
      { name: 'Prompt Engineering', color: '#f97316' },
      { name: 'REST APIs', color: '#818cf8' },
      { name: 'LangFlow', color: '#fb923c' },
      { name: 'Deepeval', color: '#fb923c' },
    ],
  },
  {
    title: 'Web Development',
    items: [
      { name: 'React', color: '#38bdf8' },
      { name: 'HTML & CSS', color: '#f43f5e' },
      { name: 'MongoDB', color: '#34d399' },
      { name: 'GitHub & Postman', color: '#60a5fa' },
    ],
  },
  {
    title: 'Core Skills',
    items: [
      { name: 'DBMS', color: '#22c55e' },
      { name: 'OOPs', color: '#8b5cf6' },
      { name: 'DSA', color: '#06b6d4' },
      { name: 'Problem Solving', color: '#facc15' },
    ],
  },
]

const highlightCards = [
  {
    title: 'AI-First Problem Solving',
    text: 'Built GenAI applications using RAG, vector search, LangChain, LangGraph, and LLM evaluation for real-world use cases.',
  },
  {
    title: 'Software Engineering Discipline',
    text: 'Delivered Java-based modules with strong OOP principles, clean coding, debugging, and support across the SDLC.',
  },
  {
    title: 'Full-Stack & Automation Readiness',
    text: 'Developed responsive web solutions and recruitment-focused platforms with React, Node.js, TypeScript, SQL, and MongoDB.',
  },
]

const heroStats = [
  { value: '250+', label: 'LeetCode Problems' },
  { value: '4+', label: 'AI Projects' },
  { value: '8.0', label: 'CGPA' },
]

const experienceList = [
  {
    role: 'Software Developer Trainee',
    company: 'RW Team · JBPB Offshore Pvt. Ltd.',
    period: 'Feb 2026 – Apr 2026',
    description:
      'Strengthened my software engineering foundation through Java-based module development, debugging, and hands-on exposure to the full product lifecycle.',
    bullets: [
      'Developed and debugged Java-based modules using OOP and clean-code practices.',
      'Improved maintainability and code quality through structured problem-solving and debugging.',
      'Gained practical exposure to SDLC, deployment support, and project delivery workflows.',
    ],
    tags: ['Java', 'OOP', 'Debugging', 'SDLC'],
  },
  {
    role: 'Internship Trainee',
    company: 'Testleaf',
    period: 'May 2026',
    description:
      'Completed focused training in Generative AI, LLMs, RAG, prompt engineering, AI agents, and modern AI workflows.',
    bullets: [
      'Built practical GenAI solutions with LangChain, LangGraph, OpenAI APIs, and LLM evaluation techniques.',
      'Applied RAG and vector database concepts to context-aware AI applications and workflow design.',
      'Strengthened my understanding of AI integration with REST APIs and external tools.',
    ],
    tags: ['GenAI', 'LLM', 'RAG', 'LangChain'],
  },
]

const projectList = [
  {
    title: 'AI Resume Screening Assistant',
    tech: 'Node.js · TypeScript · RAG · Vector DB',
    description:
      'Built a recruitment assistant that converts resumes into embeddings, stores them in a vector database, and retrieves the most relevant candidates using semantic similarity.',
    highlights: [
      'Used LLMs to generate candidate summaries and highlight skill gaps.',
      'Improved hiring workflow efficiency with context-aware candidate matching.',
    ],
    accent: '#3b82f6',
  },
  {
    title: 'AI-Powered Smart Candidate Skill Evaluation',
    tech: 'MERN Stack · LLMs · RAG · JSearch API',
    description:
      'Developed an AI-driven platform that analyzes resumes, extracts core skills, generates assessments, and recommends learning paths and job matches.',
    highlights: [
      'Combined resume intelligence with career guidance and personalized feedback.',
      'Used MongoDB Atlas Vector Search to deliver smarter candidate insights.',
    ],
    accent: '#8b5cf6',
  },
  {
    title: 'QA Bot',
    tech: 'Node.js · TypeScript · RAG · Semantic Search',
    description:
      'Designed a document-powered assistant that processes PDFs, DOCX, and TXT files to answer user questions through semantic retrieval and LLM-generated responses.',
    highlights: [
      'Implemented retrieval-based QA over structured and unstructured documents.',
      'Focused on accurate, context-aware responses for real business scenarios.',
    ],
    accent: '#ec4899',
  },
  {
    title: 'Smart Candidate Skill Assessment Platform',
    tech: 'React · SQL · MERN Stack',
    description:
      'Developed a full-stack assessment platform for conducting coding and aptitude tests with automatic scoring and recruiter-friendly reporting.',
    highlights: [
      'Built a dashboard to manage candidate data and view assessment results.',
      'Created a robust workflow for evaluating technical skills efficiently.',
    ],
    accent: '#14b8a6',
  },
]

const achievementList = [
  'Solved 250+ LeetCode problems with strong problem-solving consistency',
  'Hackerrank SQL Certification',
  'Hackerrank Java Certification',
  'LeetCode 50 Days Badge',
  'Strong foundation in modern AI tools, APIs, and software development workflows',
]

const educationList = [
  {
    title: 'Bachelor of Engineering',
    year: '2022 – 2026',
    score: '8.0 CGPA',
    institution: 'Bannari Amman Institute of Technology',
    icon: '🎓',
  },
  {
    title: 'Higher Secondary School',
    year: '2022',
    score: '90.17%',
    institution: 'Sri Krishna Matric Hr. Sec School',
    icon: '📚',
  },
  {
    title: 'Secondary School',
    year: '2020',
    score: '85.40%',
    institution: 'Sri Krishna Matric Hr. Sec School',
    icon: '🏫',
  },
]

/* ─── HOOK: scroll-flip observer ───────────────────────────── */
function useFlipObserver() {
  const refs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('flip-visible')
          }
        })
      },
      { threshold: 0.12 },
    )
    refs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const setRef = (i) => (el) => {
    refs.current[i] = el
  }
  return setRef
}

/* ─── NAVBAR ────────────────────────────────────────────────── */
function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { label: 'About Me', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
  ]

  const handleNav = (href) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="navbar">
      <div className="brand">
        <span className="brand-dot" />
        Sukirtha L
      </div>

      {/* Desktop nav */}
      <nav className="nav-links" aria-label="Main navigation">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            onClick={(e) => { e.preventDefault(); handleNav(l.href) }}
          >
            {l.label}
          </a>
        ))}
      </nav>

      {/* Hamburger */}
      <button
        className={`hamburger ${open ? 'open' : ''}`}
        aria-label="Toggle menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span /><span /><span />
      </button>

      {/* Mobile drawer */}
      <nav className={`mobile-nav ${open ? 'mobile-nav--open' : ''}`} aria-label="Mobile navigation">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            onClick={(e) => { e.preventDefault(); handleNav(l.href) }}
          >
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

/* ─── APP ───────────────────────────────────────────────────── */
export default function App() {
  const setRef = useFlipObserver()

  return (
    <div className="portfolio-shell">
      <Navbar />

      <main className="page-content">

        {/* ── HERO / HOME ── */}
        <section id="home" ref={setRef(0)} className="section hero-section">
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-body">
            <span className="eyebrow">Hello, I'm</span>
            <h1 className="hero-name">Sukirtha Loganathan</h1>
            <p className="hero-role">
              Software Developer &nbsp;·&nbsp; GenAI Engineer &nbsp;·&nbsp; Java &amp; React &nbsp;·&nbsp; LLMs &amp; RAG
              <br />
              Building AI-powered products with strong engineering fundamentals and business impact.
            </p>
            <p className="hero-bio">
              I create intelligent software solutions that combine strong backend discipline, modern web development, and practical Generative AI implementation for real-world problems.
            </p>
            <p className="hero-highlight">
              250+ LeetCode problems solved with strong problem-solving and coding consistency.
            </p>

            <div className="hero-actions">
              <a
                className="btn-primary"
                href="https://drive.google.com/file/d/1Ul-P78Yb4mDbbJXAogMcGIlJyxvCOFJK/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                View Resume
              </a>
              <div className="social-row">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="social-btn"
                    aria-label={s.label}
                  >
                    {s.icon}
                    <span>{s.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section id="about" ref={setRef(1)} className="section about-section">
          <SectionHead eyebrow="About Me" title="Professional Introduction" />
          <div className="about-body">
            <p>
              I am a results-driven Software Developer and GenAI-focused engineer with hands-on experience in Java, React, REST APIs, SQL, and modern AI application development. I enjoy turning complex requirements into scalable, reliable solutions that create measurable value.
            </p>
            <p>
              My work sits at the intersection of software engineering and AI: building recruitment and document-intelligence systems, developing full-stack applications, and applying practical LLM, RAG, and vector search concepts to solve real business problems.
            </p>
            <div className="highlights-grid">
              {highlightCards.map((item) => (
                <div key={item.title} className="highlight-card">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
            <div className="about-social">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="about-social-btn"
                  aria-label={s.label}
                >
                  {s.icon}
                  <span>{s.label}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section id="skills" ref={setRef(2)} className="section skills-section">
          <SectionHead eyebrow="Skills" title="Technical Skillset" />
          <div className="skills-groups">
            {skillGroups.map((group) => (
              <div key={group.title} className="skill-group-card">
                <h3>{group.title}</h3>
                <div className="skills-grid">
                  {group.items.map((sk) => (
                    <div
                      key={sk.name}
                      className="skill-card"
                      style={{ '--accent': sk.color }}
                    >
                      <span className="skill-dot" style={{ background: sk.color }} />
                      {sk.name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── EXPERIENCE ── */}
        <section id="experience" ref={setRef(3)} className="section experience-section">
          <SectionHead eyebrow="Experience" title="Work & Training" />
          <div className="experience-list">
            {experienceList.map((exp) => (
              <article key={exp.role} className="exp-card">
                <div className="exp-header">
                  <div className="exp-icon">💼</div>
                  <div>
                    <h3 className="exp-title">{exp.role}</h3>
                    <div className="exp-company">{exp.company}</div>
                    <span className="exp-tag">{exp.period}</span>
                  </div>
                </div>
                <p className="exp-desc">{exp.description}</p>
                <ul className="exp-bullets">
                  {exp.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <div className="exp-tech-row">
                  {exp.tags.map((t) => (
                    <span key={t} className="exp-tech-badge">{t}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section id="projects" ref={setRef(4)} className="section projects-section">
          <SectionHead eyebrow="Projects" title="Featured Work" />
          <div className="projects-grid">
            {projectList.map((p) => (
              <article
                key={p.title}
                className="project-card"
                style={{ '--accent': p.accent }}
              >
                <div className="project-accent-bar" />
                <h3 className="project-title">{p.title}</h3>
                <p className="project-tech">
                  <span className="tech-label">Technologies:</span> {p.tech}
                </p>
                <p className="project-desc">{p.description}</p>
                <ul className="project-highlights">
                  {p.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* ── ACHIEVEMENTS ── */}
        <section ref={setRef(5)} className="section achievements-section">
          <SectionHead eyebrow="Achievements" title="Recognitions & Strengths" />
          <div className="achievement-list">
            {achievementList.map((item) => (
              <div key={item} className="achievement-item">✓ {item}</div>
            ))}
          </div>
        </section>

        {/* ── EDUCATION ── */}
        <section id="education" ref={setRef(6)} className="section education-section">
          <SectionHead eyebrow="Education" title="Academic Background" />
          <div className="education-grid">
            {educationList.map((e) => (
              <div key={e.title} className="education-card">
                <div className="edu-icon">{e.icon}</div>
                <div className="edu-title">{e.title}</div>
                <div className="edu-year">{e.year}</div>
                <div className="edu-score">{e.score}</div>
                <div className="edu-venue">{e.institution}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" ref={setRef(7)} className="section contact-section">
          <div className="contact-shell">
            <div className="contact-intro">
              <span className="eyebrow">Contact</span>
              <h2>Let’s build something impactful together.</h2>
              <p>
                Currently open for new opportunities. My inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you.
              </p>
              <div className="contact-link-row">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sukirthalogu@gmail.com" target="_blank" rel="noreferrer">Transcribe Msg</a>
                <a href="https://linkedin.com/in/sukirtha-l" target="_blank" rel="noreferrer">Connect Network</a>
                <a href="https://github.com/sukirtha2004" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://leetcode.com/u/Sukirthaloganathan/" target="_blank" rel="noreferrer">LeetCode</a>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="site-footer">
        <p>© 2026 Sukirtha Loganathan · Built with React &amp; Vite</p>
        <div className="footer-links">
          {socialLinks
            .filter((link) => link.label === 'GitHub' || link.label === 'LinkedIn')
            .map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="footer-link"
                aria-label={link.label}
              >
                {link.icon}
                <span>{link.label}</span>
              </a>
            ))}
        </div>
      </footer>
    </div>
  )
}

/* ─── SMALL COMPONENTS ──────────────────────────────────────── */
function SectionHead({ eyebrow, title }) {
  return (
    <div className="section-head">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <div className="section-divider" />
    </div>
  )
}

function ContactCard({ icon, label, value }) {
  return (
    <div className="contact-card">
      <span className="contact-icon">{icon}</span>
      <span className="contact-label">{label}</span>
      <div className="contact-value">{value}</div>
    </div>
  )
}
