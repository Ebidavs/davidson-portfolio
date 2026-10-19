import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  X,
  Code2,
  FlaskConical,
  Network,
  GraduationCap,
  ExternalLink,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import "./style.css";

const projects = [
  {
    n: "01",
    type: "FULL-STACK · TEAM CAPSTONE",
    name: "Multi-Vendor Marketplace",
    description:
      "A collaborative commerce platform with dedicated vendor and admin experiences. Built responsive dashboards for products, orders, customers, analytics, reviews, and store management; coordinated GitHub workflows as repository administrator.",
    tags: ["React", "JavaScript", "CSS", "GitHub"],
    repo: "https://github.com/Ebidavs/multi-vendor-marketplace",
    live: "https://multi-vendor-marketplace-lac.vercel.app/",
    tone: "mint",
  },
  {
    n: "02",
    type: "BACKEND · FINTECH",
    name: "Digital Banking System",
    description:
      "REST API for customer onboarding, identity verification, account management, and banking workflows, with authentication and third-party banking-provider integrations.",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    repo: "https://github.com/Ebidavs/digital-banking",
    tone: "blue",
  },
  {
    n: "03",
    type: "BACKEND · OPERATIONS",
    name: "Inventory Management System",
    description:
      "Inventory API with user authentication, role-aware access, product CRUD, image uploads through Cloudinary, and automated email functionality.",
    tags: ["Node.js", "Express", "MongoDB", "Cloudinary"],
    repo: "https://github.com/Ebidavs/Inventory-Management-System",
    tone: "violet",
  },
];
const skills = [
  {
    title: "Web Development",
    items: [
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "HTML & CSS",
      "REST APIs",
      "MongoDB",
      "Git & GitHub",
      "Python (foundational)",
    ],
  },
  {
    title: "Blockchain & Web3",
    items: [
      "Ethereum fundamentals",
      "Consensus mechanisms",
      "Blockchain architecture",
      "DeFi & NFTs",
      "Smart-contract concepts",
      "Layer 2 ecosystems",
    ],
  },
  {
    title: "Scientific & Analytical",
    items: [
      "Analytical chemistry",
      "Experimental design",
      "Sample preparation",
      "Research & data interpretation",
      "Technical documentation",
    ],
  },
  {
    title: "Professional",
    items: [
      "Team collaboration",
      "Leadership",
      "Meeting coordination",
      "Written communication",
      "Project organisation",
      "Problem solving",
    ],
  },
];
function App() {
  const [menu, setMenu] = React.useState(false);
  return (
    <>
      <header className="site-header">
        <div className="nav shell">
          <a href="#home" className="brand">
            <span className="brand-mark">
              DE<span>.</span>
            </span>
            <span className="brand-label">
              DAVIDSON
              <br />
              EBUTE-METTA
            </span>
          </a>
          <nav className={menu ? "navlinks open" : "navlinks"}>
            {[
              ["About", "#about"],
              ["Work", "#projects"],
              ["Skills", "#skills"],
              ["Journey", "#journey"],
            ].map(([t, l]) => (
              <a key={t} href={l} onClick={() => setMenu(false)}>
                {t}
              </a>
            ))}
            <a className="nav-contact" href="#contact" onClick={() => setMenu(false)}>
              Let's connect <ArrowUpRight size={15} />
            </a>
          </nav>
          <button
            className="mobile-menu"
            aria-label="Toggle menu"
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      <main>
        <section className="hero shell" id="home">
          <div className="hero-left">
            <div className="eyebrow">
              <span className="status-dot" /> OPEN TO OPPORTUNITIES{" "}
              <span className="eyebrow-line" />
            </div>
            <p className="hello">Hello, I'm</p>
            <h1>
              Davidson
              <br />
              <span>
                Ebute-metta<span className="period">.</span>
              </span>
            </h1>
            <p className="hero-role">
              SOFTWARE DEVELOPER <span>×</span> CHEMISTRY GRADUATE{" "}
              <span>×</span> PROBLEM SOLVER
            </p>
            <p className="hero-copy">
              I connect technology, science, and people to solve meaningful
              problems. From building digital products to exploring the science
              behind everyday challenges, I bring curiosity and discipline to
              everything I do.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                Explore my work <ArrowUpRight size={18} />
              </a>
              <a
                className="btn btn-ghost"
                href="/documents/Davidson_Ebute-metta_Resume.pdf"
                download
              >
                Download resume <Download size={17} />
              </a>
            </div>
            <div className="social-links">
              <a
                href="https://github.com/Ebidavs"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={19} /> GitHub <ArrowUpRight size={14} />
              </a>
              <a
                href="https://www.linkedin.com/in/davidson-ebute-metta-a715951ba"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={19} /> LinkedIn <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
          <div className="hero-right">
            <div className="orbit orbit-1" />
            <div className="orbit orbit-2" />
            <div className="orbit orbit-3" />
            <div className="center-art">
              <span className="art-small">MULTIDISCIPLINARY BY DESIGN</span>
              <div className="art-initials">
                D<span>E</span>
              </div>
              <span className="art-bottom">CODE / SCIENCE / IMPACT</span>
            </div>
            <div className="floating-card card-one">
              <Code2 size={18} />
              <span>Build with purpose</span>
            </div>
            <div className="floating-card card-two">
              <FlaskConical size={18} />
              <span>Think scientifically</span>
            </div>
            <div className="art-coordinate">05° N / NIGERIA</div>
          </div>
        </section>
        <div className="ticker">
          <div className="ticker-inner">
            SOFTWARE ENGINEERING <span>✳</span> CHEMISTRY <span>✳</span>{" "}
            BLOCKCHAIN <span>✳</span> RESEARCH <span>✳</span> LEADERSHIP{" "}
            <span>✳</span> SOFTWARE ENGINEERING <span>✳</span> CHEMISTRY{" "}
            <span>✳</span> BLOCKCHAIN <span>✳</span> RESEARCH <span>✳</span>
          </div>
        </div>
        <section className="section about shell" id="about">
          <div className="section-top">
            <span className="section-index">01 / ABOUT ME</span>
            <span className="line" />
          </div>
          <div className="about-grid">
            <div>
              <h2>
                More than
                <br />
                one <em>discipline.</em>
              </h2>
            </div>
            <div className="about-text">
              <p>
                I'm a <strong>First Class Chemistry graduate</strong> from the
                University of Benin (CGPA: 4.53/5.00), with practical experience
                developing web applications and backend systems.
              </p>
              <p>
                My work spans{" "}
                <strong>
                  Web2 development, foundational Web3 knowledge, scientific
                  research, and student leadership
                </strong>
                . I enjoy learning how complex systems work—whether that's an
                API, a blockchain network, or a chemical process—and translating
                that understanding into useful outcomes.
              </p>
              <div className="facts">
                <div>
                  <strong>2025</strong>
                  <span>B.Sc. Chemistry</span>
                </div>
                <div>
                  <strong>
                    4.53<span>/5.00</span>
                  </strong>
                  <span>First Class CGPA</span>
                </div>
                <div>
                  <strong>3</strong>
                  <span>Featured projects</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section projects-section" id="projects">
          <div className="shell">
            <div className="section-top">
              <span className="section-index">02 / SELECTED WORK</span>
              <span className="line" />
            </div>
            <div className="section-title-row">
              <h2>
                Things I've <em>built.</em>
              </h2>
              <p>
                A selection of projects where I've turned ideas into working
                software.
              </p>
            </div>
            <div className="project-grid">
              {projects.map((p) => (
                <article className={"project-card " + p.tone} key={p.n}>
                  <div className="project-art">
                    <div className="project-art-top">
                      <span>{p.n} / PROJECT</span>
                      <ArrowUpRight size={20} />
                    </div>
                    <div className="project-visual">
                      <div className="visual-window">
                        <div className="window-dots">
                          <i />
                          <i />
                          <i />
                        </div>
                        <div className="visual-lines">
                          <b />
                          <b />
                          <b />
                          <b />
                        </div>
                      </div>
                    </div>
                    <span className="project-art-type">{p.type}</span>
                  </div>
                  <div className="project-body">
                    <h3>{p.name}</h3>
                    <p>{p.description}</p>
                    <div className="tags">
                      {p.tags.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      <a href={p.repo} target="_blank" rel="noreferrer">
                        Source code <Github size={15} />
                      </a>
                      {p.live && (
                        <a href={p.live} target="_blank" rel="noreferrer">
                          Live website <ExternalLink size={15} />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <a
              href="https://github.com/Ebidavs"
              className="all-work"
              target="_blank"
              rel="noreferrer"
            >
              More projects on GitHub <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
        <section className="section skills-section shell" id="skills">
          <div className="section-top">
            <span className="section-index">03 / CAPABILITIES</span>
            <span className="line" />
          </div>
          <div className="section-title-row">
            <h2>
              My <em>toolkit.</em>
            </h2>
            <p>
              A blend of technical expertise, analytical thinking, and people
              skills.
            </p>
          </div>
          <div className="skills-grid">
            {skills.map((s, i) => (
              <div className="skill-group" key={s.title}>
                <div className="skill-head">
                  <span>0{i + 1}</span>
                  <h3>{s.title}</h3>
                </div>
                <div className="skill-pills">
                  {s.items.map((x) => (
                    <span key={x}>{x}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="section journey-section" id="journey">
          <div className="shell">
            <div className="section-top">
              <span className="section-index">04 / MY JOURNEY</span>
              <span className="line" />
            </div>
            <div className="section-title-row">
              <h2>
                Built on <em>curiosity.</em>
              </h2>
              <p>
                Milestones across education, technology, research, and
                leadership.
              </p>
            </div>
            <div className="timeline">
              <div className="timeline-item">
                <span className="timeline-year">2026</span>
                <div>
                  <span className="timeline-kicker">SOFTWARE ENGINEERING</span>
                  <h3>Full-Stack Development Training</h3>
                  <p>
                    TechSphere Academy · React, Node.js, Express, MongoDB,
                    collaborative development and capstone delivery.
                  </p>
                </div>
                <Code2 size={22} />
              </div>
              <div className="timeline-item">
                <span className="timeline-year">2025</span>
                <div>
                  <span className="timeline-kicker">ACADEMICS & RESEARCH</span>
                  <h3>B.Sc. Chemistry · First Class Honours</h3>
                  <p>
                    University of Benin · Investigated iron(III) adsorption
                    using Aseni clay, earning an A grade for undergraduate
                    research.
                  </p>
                </div>
                <GraduationCap size={22} />
              </div>
              <div className="timeline-item">
                <span className="timeline-year">2025</span>
                <div>
                  <span className="timeline-kicker">BLOCKCHAIN</span>
                  <h3>Web3 & Blockchain Learning</h3>
                  <p>
                    Cyfrin Updraft and Norbit Academy · Ethereum, consensus,
                    cryptography, DeFi, and blockchain ecosystems.
                  </p>
                </div>
                <Network size={22} />
              </div>
              <div className="timeline-item">
                <span className="timeline-year">2024–25</span>
                <div>
                  <span className="timeline-kicker">LABORATORY EXPERIENCE</span>
                  <h3>Forensic Science Industrial Training</h3>
                  <p>
                    Centre for Forensic Programming and DNA Studies, University
                    of Benin · Biological sample preparation, cell lysis and
                    micropipetting.
                  </p>
                </div>
                <FlaskConical size={22} />
              </div>
              <div className="timeline-item">
                <span className="timeline-year">2023–NOW</span>
                <div>
                  <span className="timeline-kicker">LEADERSHIP</span>
                  <h3>Student & Regional Leadership</h3>
                  <p>
                    Secretary General, Student Chemical Society of Nigeria
                    (university and South-South regional levels), alongside
                    other student leadership roles and community initiatives.
                  </p>
                </div>
                <CheckCircle2 size={22} />
              </div>
            </div>
          </div>
        </section>
        <section className="contact-section" id="contact">
          <div className="shell contact-content">
            <div className="section-top">
              <span className="section-index">05 / GET IN TOUCH</span>
              <span className="line" />
            </div>
            <span className="contact-overline">
              HAVE AN OPPORTUNITY IN MIND?
            </span>
            <h2>
              Let's make
              <br />
              <em>something happen.</em>
            </h2>
            <p>
              I'm interested in meaningful opportunities across software,
              technology, science, research, and collaborative projects.
            </p>
            <a className="contact-button" href="mailto:ebidavs@gmail.com">
              Start a conversation <ArrowUpRight size={22} />
            </a>
            <div className="contact-meta">
              <span>
                <Mail size={16} /> ebidavs@gmail.com
              </span>
              <span>
                <MapPin size={16} /> Yenagoa, Bayelsa, Nigeria
              </span>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="shell footer-inner">
          <span>© {new Date().getFullYear()} Davidson Ebute-metta</span>
          <span>Made with curiosity and purpose.</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
createRoot(document.getElementById("root")).render(<App />);
