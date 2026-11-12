// Edit this file to change the content of the portfolio.
// Sample content is marked so you can replace it with your own.

export const profile = {
  name: "Adam Danish",
  fullName: "Muhammad Adam Danish bin Yusni",
  title: "Aspiring SOC Analyst",
  location: "Kuala Lumpur, Malaysia",
  tagline:
    "Google Cybersecurity Professional Certificate graduate focused on alert triage, incident response, and security automation.",
  about: [
    "I'm a Computer Science (Cyber Security) graduate from UNITEN moving into a SOC analyst role. I finished my Bachelor's in June 2026 and completed the Google Cybersecurity Professional Certificate in November 2026 and the Google AI Professional Certificate in September 2026, with hands-on practice in SIEM tools, network traffic analysis, incident response, and Python.",
    "Most recently I worked at Infra Mobile Digital on the support side, handling tickets, escalating issues to the right people, and explaining technical problems to non-technical users. Before that I did internships at JKR Malaysia and Universiti Malaysia Kelantan. Those habits carry straight into SOC work: clear documentation, calm triage, and knowing when to escalate.",
    "I'm looking for an entry-level analyst role where I can monitor alerts, investigate events, and keep learning from an experienced team.",
  ],
  email: "danishadam0549@gmail.com",
  linkedin: "https://www.linkedin.com/in/adam-danish-44a520271/",
  github: "https://github.com/DamDam29",
};

export const education = [
  {
    degree: "Bachelor of Computer Science (Cyber Security) (Honours)",
    school: "Universiti Tenaga Nasional (UNITEN), Putrajaya Campus",
    period: "Graduated June 2026",
    cgpa: "CGPA 3.43",
    notes: [
      "Dean's List, Semester 2 2023/2024",
      "Completed industrial training and a two-part final year project",
    ],
    courses: [
      "Information Security Management",
      "Network Security",
      "Software Security",
      "System Security Defense",
      "Cryptography",
      "Ethical Hacking",
      "Computer Forensics",
      "Critical Infrastructure Security",
    ],
  },
  {
    degree: "Diploma in Computer Science",
    school: "Universiti Tenaga Nasional (UNITEN), Putrajaya Campus",
    period: "Graduated February 2024",
    cgpa: "CGPA 3.02",
    notes: ["Completed industrial training and a diploma project"],
    courses: [
      "Fundamental of Cyber Security",
      "Data Communication & Computer Networks (CCNA1)",
      "Database Systems",
      "System Administration",
      "Object-Oriented Programming",
      "Data Structures & Algorithms",
      "Web Programming",
      "Artificial Intelligence",
    ],
  },
];

export const skillGroups = [
  {
    title: "Detection & Response",
    items: ["SIEM (Splunk, Google SecOps)", "Incident response lifecycle", "Alert triage & escalation", "Log analysis"],
  },
  {
    title: "Network & Systems",
    items: ["Wireshark & tcpdump", "IDS/IPS & Suricata rules", "Linux & SQL", "Network traffic analysis"],
  },
  {
    title: "Frameworks & Risk",
    items: ["NIST CSF", "Vulnerability management", "Threat modeling (PASTA, STRIDE)", "Defense in depth"],
  },
  {
    title: "Automation",
    items: ["Python scripting", "Regular expressions", "File parsing", "Debugging"],
  },
];

export const projects = [
  {
    title: "Log Analysis & Escalation Triage",
    summary:
      "Reviewed a system activity log, flagged the highest-risk entries, and wrote an escalation summary for a supervisor.",
    highlights: [
      "Spotted a sensitive finance file copied to a public share",
      "Linked an external admin login to the same incident window",
      "Ranked guest failed logins as lower priority",
    ],
    tags: ["Log analysis", "Triage", "Escalation"],
  },
  {
    title: "Failed-Login Detector (Python)",
    summary:
      "A script that reads a log file, parses each entry, and flags repeated failed logins and logins at unusual hours.",
    highlights: [
      "Parses entries with split() and regular expressions",
      "Uses loops and conditionals to apply detection rules",
      "Writes flagged entries to a separate list for review",
    ],
    tags: ["Python", "Automation", "Regex"],
  },
  {
    title: "Incident Final Report: Forced Browsing",
    summary:
      "Documented a data breach caused by a forced browsing flaw in an e-commerce app, from timeline to root cause to recommendations.",
    highlights: [
      "Executive summary, timeline, and root cause analysis",
      "Remediation: allowlisting, authentication, routine scans",
      "Lessons learned mapped to the NIST IR lifecycle",
    ],
    tags: ["Incident response", "NIST", "Reporting"],
  },
];

export const experience = [
  {
    role: "IT Support Specialist",
    org: "Infra Mobile Digital",
    period: "Jul 2026 to Oct 2026",
    points: [
      "Handled support tickets and escalated issues to the right team",
      "Explained technical problems to non-technical users",
    ],
  },
  {
    role: "Intern",
    org: "JKR Malaysia, Kota Bharu",
    period: "Jul 2025 to Sep 2025",
    points: ["Industrial training placement as part of my Bachelor's degree"],
  },
  {
    role: "Web Developer Intern",
    org: "Universiti Malaysia Kelantan",
    period: "Jul 2023 to Sep 2023",
    points: ["Industrial training placement as part of my Diploma"],
  },
];

export const certificationGroups = [
  {
    issuer: "Google (Coursera)",
    items: [
      { name: "Google Cybersecurity Professional Certificate (9 courses)", date: "11/11/2026" },
      { name: "Google AI Professional Certificate (8 courses)", date: "02/09/2026" },
    ],
  },
  {
    issuer: "Anthropic",
    items: [
      { name: "AI Fluency: Framework & Foundations", date: "2026" },
      { name: "AI Fluency: AI Capabilities & Limitations", date: "2026" },
      { name: "Claude 101", date: "2026" },
      { name: "Claude Code 101", date: "2026" },
    ],
  },
  {
    issuer: "Ministry of Digital and Intel",
    items: [
      { name: "AI Appreciate, AI Aware, Agentic AI for All, AI Safety", date: "31/07/2026" },
      { name: "Introduction to Generative AI, Blockchain, Cloud, Quantum, CyberSAFE", date: "31/07/2026" },
    ],
  },
  {
    issuer: "Pepper Labs and CGM",
    items: [
      { name: "AI Ready Malaysia: Student Edition (10 hours)", date: "26/08/2026" },
      { name: "CGM Academy for Youth", date: "22/09/2026" },
    ],
  },
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];
