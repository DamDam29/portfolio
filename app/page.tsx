import {
  certificationGroups,
  experience,
  education,
  navLinks,
  profile,
  projects,
  skillGroups,
} from "./data";

function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-10">
      <p className="font-mono text-sm text-accent">{label}</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/90 backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6"
      >
        <a
          href="#home"
          className="hidden font-mono text-sm font-semibold text-accent sm:block"
        >
          adam.danish
        </a>
        <ul className="flex w-full items-center justify-between text-sm text-muted sm:w-auto sm:justify-start sm:gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function Home() {
  return (
    <section
      id="home"
      className="mx-auto flex max-w-5xl flex-col justify-center px-4 py-20 sm:px-6 sm:py-28"
    >
      <p className="font-mono text-sm text-accent">Hi, I&apos;m</p>
      <h1 className="mt-3 text-5xl font-semibold tracking-tight sm:text-7xl">
        {profile.name}
      </h1>
      <p className="mt-3 text-2xl text-muted sm:text-3xl">{profile.title}</p>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
        {profile.tagline}
      </p>
      <p className="mt-4 font-mono text-sm text-muted">{profile.location}</p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <a
          href="#projects"
          className="rounded-lg bg-accent px-6 py-3 text-center font-medium text-background transition-opacity hover:opacity-90"
        >
          View projects
        </a>
        <a
          href="#contact"
          className="rounded-lg border border-border px-6 py-3 text-center font-medium transition-colors hover:border-accent hover:text-accent"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20"
    >
      <SectionHeading label="01 / about" title="About me" />
      <div className="grid gap-12 lg:grid-cols-5">
        <div className="space-y-5 text-lg leading-8 text-muted lg:col-span-3">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="lg:col-span-2">
          <h3 className="font-mono text-sm text-accent">Certifications</h3>
          <div className="mt-4 space-y-4">
            {certificationGroups.map((group) => (
              <div
                key={group.issuer}
                className="rounded-lg border border-border bg-surface p-4"
              >
                <p className="font-medium">{group.issuer}</p>
                <ul className="mt-2 space-y-2 text-sm text-muted">
                  {group.items.map((cert) => (
                    <li key={cert.name} className="flex justify-between gap-3">
                      <span>{cert.name}</span>
                      <span className="shrink-0 font-mono text-xs">{cert.date}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <h3 className="mt-16 font-mono text-sm text-accent">Skills</h3>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-lg border border-border bg-surface p-5"
          >
            <h4 className="font-medium">{group.title}</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {group.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden className="text-accent">
                    ›
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20"
    >
      <SectionHeading label="02 / experience" title="Experience" />
      <ol className="space-y-6">
        {experience.map((job) => (
          <li
            key={job.role + job.org}
            className="rounded-xl border border-border bg-surface p-6"
          >
            <p className="font-mono text-sm text-accent">{job.period}</p>
            <h3 className="mt-2 text-xl font-semibold">{job.role}</h3>
            <p className="text-muted">{job.org}</p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {job.points.map((point) => (
                <li key={point} className="flex gap-2">
                  <span aria-hidden className="text-accent">›</span>
                  {point}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Education() {
  return (
    <section
      id="education"
      className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20"
    >
      <SectionHeading label="03 / education" title="Education" />
      <div className="grid gap-6 lg:grid-cols-2">
        {education.map((item) => (
          <article
            key={item.degree}
            className="rounded-xl border border-border bg-surface p-6"
          >
            <p className="font-mono text-sm text-accent">
              {item.period} · {item.cgpa}
            </p>
            <h3 className="mt-2 text-xl font-semibold">{item.degree}</h3>
            <p className="mt-1 text-muted">{item.school}</p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {item.notes.map((note) => (
                <li key={note} className="flex gap-2">
                  <span aria-hidden className="text-accent">
                    ›
                  </span>
                  {note}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm font-medium">Relevant coursework</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {item.courses.map((course) => (
                <li
                  key={course}
                  className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                >
                  {course}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20"
    >
      <SectionHeading label="04 / projects" title="Projects" />
      <p className="-mt-6 mb-10 text-sm text-muted">
        Sample content based on certificate coursework. Replace with your own
        projects and links in <code className="font-mono">app/data.ts</code>.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent"
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="mt-3 text-muted">{project.summary}</p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {project.highlights.map((point) => (
                <li key={point} className="flex gap-2">
                  <span aria-hidden className="text-accent">
                    ›
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <ul className="mt-auto flex flex-wrap gap-2 pt-6">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-border px-3 py-1 font-mono text-xs text-accent"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const links = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { label: "LinkedIn", value: "linkedin.com/in/adam-danish-44a520271", href: profile.linkedin },
    { label: "GitHub", value: "github.com/DamDam29", href: profile.github },
  ];
  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20"
    >
      <SectionHeading label="05 / contact" title="Let's talk" />
      <p className="max-w-2xl text-lg leading-8 text-muted">
        I&apos;m open to entry-level SOC analyst and security operations roles.
        The fastest way to reach me is by email or LinkedIn.
      </p>
      <ul className="mt-8 grid gap-4 sm:grid-cols-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="block rounded-lg border border-border bg-surface p-5 transition-colors hover:border-accent"
            >
              <span className="font-mono text-sm text-accent">{link.label}</span>
              <span className="mt-2 block break-all text-muted">
                {link.value}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-10 border-t border-border">
      <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-muted sm:px-6">
        © 2026 {profile.name}. Built with Next.js and Tailwind CSS.
      </div>
    </footer>
  );
}

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
