import { Container } from "./styles";
import python from "../../assets/python.svg"
import java from "../../assets/java.svg"
import nodeIcon from "../../assets/node-icon.svg";
import mysqlIcon from "../../assets/mysql-icon.svg";
import certificateLemmiDetail from "../../assets/certificates/page1-image1.jpg";
import certificateLemmiFront from "../../assets/certificates/page1-image3.jpg";
import certificateHydraulicFront from "../../assets/certificates/page1-image2.jpg";
import certificateCloudDetail from "../../assets/certificates/page2-image1.jpg";
import certificateCloudFront from "../../assets/certificates/page2-image2.jpg";
import certificateDataScientistFront from "../../assets/certificates/page2-image3.jpg";
import certificateDataScientistDetail from "../../assets/certificates/page2-image4.jpg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  const careerTimeline = [
    {
      period: "March 2020 - December 2022",
      role: "Process Engineering Sub Section Head",
      company: "PT Panata Jaya Mandiri",
      location: "Tangerang, Indonesia",
      highlights: [
        "Implemented Lean Manufacturing tools such as Kaizen and 5 Why analysis.",
        "Ensured projects were delivered on schedule and aligned with target objectives.",
        "Reduced material waste by 8% through process optimization and root cause analysis.",
      ],
    },
    {
      period: "January 2022 - February 2023",
      role: "Sales and Marketing Local Customer Assistant Section Head",
      company: "PT Panata Jaya Mandiri",
      location: "Tangerang, Indonesia",
      highlights: [
        "Coordinated production and logistics teams to maintain 100% on-time delivery performance.",
        "Aligned customer needs with internal technical and commercial requirements.",
        "Handled new product development requests from local customers.",
      ],
    },
    {
      period: "January 2023 - Present",
      role: "Project Automation and Improvement Assistant Section Head",
      company: "PT Panata Jaya Mandiri",
      location: "Tangerang, Indonesia",
      highlights: [
        "Increased production line OEE by 12% through real-time machine monitoring systems.",
        "Developed machine-to-database integration using PLC, SQL, and Node-RED.",
        "Led IIoT and Industry 4.0 initiatives for production tracking and downtime analysis.",
      ],
    },
  ];

  const certifications = [
    {
      title: "Lean MONOZUKURI 4.0",
      issuer: "Kemenperin and AOTS Certificate",
      organization: "PIDI 4.0 Kemenperin",
      period: "September 2023 - September 2028",
      proofImages: [
        { src: certificateLemmiFront, alt: "Lean MONOZUKURI 4.0 certificate" },
      ],
    },
    {
      title: "Training Pneumatic and Hydraulic Batch 2",
      issuer: "BNSP Certificate",
      organization: "PIDI 4.0 Kemenperin",
      period: "June 2023 - June 2028",
      proofImages: [
        { src: certificateHydraulicFront, alt: "Hydraulic and Pneumatic certificate" },
        { src: certificateLemmiDetail, alt: "Hydraulic and Pneumatic certificate detail page" },
      ],
    },
    {
      title: "Training Cloud Engineer",
      issuer: "BNSP Certificate",
      organization: "PIDI 4.0 Kemenperin",
      period: "April 2024 - April 2029",
      proofImages: [
        { src: certificateCloudFront, alt: "Cloud Engineer certificate" },
        { src: certificateCloudDetail, alt: "Cloud Engineer certificate detail page" },
      ],
    },
    {
      title: "Data Scientist",
      issuer: "BNSP Certificate",
      organization: "PIDI 4.0 Kemenperin",
      period: "October 2025 - October 2030",
      proofImages: [
        { src: certificateDataScientistFront, alt: "Data Scientist certificate" },
        { src: certificateDataScientistDetail, alt: "Data Scientist certificate detail page" },
      ],
    },
  ];

  const skillGroups = [
    {
      title: "Programming Languages",
      items: [
        { name: "Python", icon: python, alt: "Python" },
        { name: "Java", icon: java, alt: "Java" },
      ],
    },
    {
      title: "Database",
      items: [
        { name: "PostgreSQL", icon: mysqlIcon, alt: "PostgreSQL" },
        { name: "Microsoft SQL Server", icon: mysqlIcon, alt: "Microsoft SQL Server" },
      ],
    },
    {
      title: "PLC & Industrial Platforms",
      items: [
        { name: "CODESYS" },
        { name: "Node-RED", icon: nodeIcon, alt: "Node-RED" },
      ],
    },
  ];

  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            I'm Raihan, an Industrial Automation and IIoT Engineer focused on OEE digitalization, smart factory implementation, and machine-to-database integration.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            Over the last 5+ years in manufacturing, I have improved production efficiency through real-time monitoring, downtime analysis, and data-driven process optimization.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            My core stack includes PLC programming with CODESYS, Node-RED, Python, PostgreSQL, Microsoft SQL Server, and industrial system integration to support Industry 4.0 transformation initiatives.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <div className="education">
            <h3>Education:</h3>
            <h4>Mechatronic Engineering</h4>
            <p>Politeknik Negeri Sriwijaya | September 2014 - September 2018</p>
            <p>GPA 3.35</p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={550}>
          <div className="experience">
            <h3>Career Roadmap:</h3>
            <div className="timeline">
              {careerTimeline.map((item) => (
                <div className="timeline-item" key={`${item.role}-${item.period}`}>
                  <div className="timeline-marker" />
                  <div className="timeline-content">
                    <span className="timeline-period">{item.period}</span>
                    <h4>{item.role}</h4>
                    <p className="timeline-company">{item.company}</p>
                    <p className="timeline-location">{item.location}</p>
                    <ul>
                      {item.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={700}>
          <div className="certifications">
            <h3>Certifications:</h3>
            <div className="certificate-grid">
              {certifications.map((certificate) => (
                <div className="certificate-card" key={certificate.title}>
                  <span className="certificate-period">{certificate.period}</span>
                  <h4>{certificate.title}</h4>
                  <p>{certificate.issuer}</p>
                  <p>{certificate.organization}</p>
                  <div className="certificate-proof">
                    {certificate.proofImages.map((image) => (
                      <figure key={image.alt} className="certificate-figure">
                        <img src={image.src} alt={image.alt} />
                        <figcaption>Certificate proof attached</figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.8 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          {skillGroups.map((group, groupIndex) => (
            <div className="skill-group" key={group.title}>
              <ScrollAnimation animateIn="fadeInUp" delay={(0.1 + groupIndex * 0.08) * 1000}>
                <h4>{group.title}</h4>
              </ScrollAnimation>
              <div className="skill-list">
                {group.items.map((skill, skillIndex) => (
                  <div className="hability" key={skill.name}>
                    <ScrollAnimation
                      animateIn="fadeInUp"
                      delay={(0.14 + groupIndex * 0.08 + skillIndex * 0.03) * 1000}
                    >
                      <div className="skill-card">
                        {skill.icon ? <img src={skill.icon} alt={skill.alt ?? skill.name} /> : <span className="skill-badge">{skill.name}</span>}
                        {skill.icon ? <span>{skill.name}</span> : null}
                      </div>
                    </ScrollAnimation>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}
