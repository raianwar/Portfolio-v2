import { Container } from "./styles";
import python from "../../assets/python.svg"
import java from "../../assets/java.svg"
import nodeIcon from "../../assets/node-icon.svg";
import mysqlIcon from "../../assets/mysql-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
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
            <h3>Experience:</h3>
            <h4>Project Automation and Improvement Assistant Section Head</h4>
            <p>PT Panata Jaya Mandiri | January 2023 - Present</p>
            <p>Tangerang, Indonesia</p>
            <p>Improved production line OEE by 12% through real-time machine monitoring and IIoT implementation.</p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
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
