export type ProjectDetail = {
  slug: string;
  title: string;
  shortDescription: string;
  subtitle: string;
  overview: string;
  challenge: string;
  solution: string;
  impact: string[];
  technologies: string[];
  keyPoints: string[];
  buildProcess: string[];
  architectureFlow: string[];
  storyBlocks: {
    title: string;
    body: string;
  }[];
  visualCaptions: {
    title: string;
    caption: string;
  }[];
};

export const projects: ProjectDetail[] = [
  {
    slug: "electricity-monitoring-dashboard",
    title: "Electricity Monitoring Dashboard",
    subtitle: "Industrial energy monitoring and machine-level consumption analysis",
    shortDescription:
      "Developed an electricity monitoring dashboard for one production plant covering 30 critical high-consumption machines to support real-time monitoring and energy efficiency improvement.",
    overview:
      "This project focused on giving the production team better visibility into electricity usage at machine level. The dashboard collected and centralized power data from critical equipment so the team could monitor consumption trends, compare machine performance, and identify unusual usage patterns earlier.",
    challenge:
      "Before this implementation, electricity usage was not visible in a way that operations and engineering teams could use quickly for decision-making. Data existed in separate devices, making it difficult to analyze consumption by machine, detect abnormalities, and prioritize efficiency actions.",
    solution:
      "I designed a data flow from field devices into a centralized monitoring dashboard using industrial communication protocols and time-series data handling. The dashboard was structured to present real-time values, historical trends, and machine-level views so users could evaluate consumption behavior with less manual effort.",
    impact: [
      "Improved visibility of machine-level electricity consumption across 30 critical assets.",
      "Supported faster identification of high-consumption patterns and abnormal usage behavior.",
      "Created a stronger data foundation for future energy efficiency initiatives and reporting.",
    ],
    technologies: ["Modbus RTU/TCP", "Telegraf", "SQL Database", "TSDB"],
    keyPoints: [
      "Integrated machine data from multiple electrical monitoring points.",
      "Built a dashboard structure for real-time and historical analysis.",
      "Prepared the system to support energy optimization discussions with production teams.",
    ],
    buildProcess: [
      "Defined the list of critical machines and the energy parameters that had to be monitored.",
      "Connected power meter data using Modbus RTU/TCP and prepared the communication layer.",
      "Processed and forwarded the collected data into a centralized database and time-series environment.",
      "Designed the dashboard views for real-time monitoring, trends, and machine-level comparison.",
    ],
    architectureFlow: [
      "Power meter on machine panel",
      "Industrial network and protocol conversion",
      "Data collection service",
      "Central database and time-series storage",
      "Dashboard for monitoring and analysis",
    ],
    storyBlocks: [
      {
        title: "Project Overview",
        body:
          "The main objective of this project was to make electricity usage visible at machine level so production and engineering teams could identify where improvement opportunities existed. The dashboard was designed as an operational tool, not only as a reporting interface.",
      },
      {
        title: "How I Built It",
        body:
          "I mapped the data sources, defined the communication path, and structured the data so it could be processed consistently. After the acquisition layer was stable, I focused on dashboard organization to make the information easy to read by plant users.",
      },
      {
        title: "Why It Matters",
        body:
          "With a centralized monitoring view, the team can evaluate energy behavior more quickly, detect abnormal usage, and support discussions around efficiency improvement using actual production data.",
      },
    ],
    visualCaptions: [
      {
        title: "Dashboard Preview",
        caption: "Use this area for the main dashboard screenshot that shows real-time energy monitoring.",
      },
      {
        title: "Architecture / Device Network",
        caption: "Use this block for the communication architecture, device topology, or data flow diagram.",
      },
      {
        title: "Field Implementation",
        caption: "Use this area for panel, meter, or industrial PC photos from the actual project installation.",
      },
    ],
  },
  {
    slug: "oee-monitoring-dashboard",
    title: "OEE Monitoring Dashboard",
    subtitle: "Real-time production performance visibility across the shopfloor",
    shortDescription:
      "Designed and implemented a real-time OEE monitoring system for 52 production machines to track downtime history, production quantity, cycle time, and machine speed across the shopfloor.",
    overview:
      "This project was built to improve production transparency by digitalizing OEE monitoring across the shopfloor. The system gave supervisors and engineering teams a live view of machine status, downtime events, production quantity, and operating speed, helping them respond faster and improve overall equipment effectiveness.",
    challenge:
      "The production floor needed a reliable way to monitor performance from many machines in one place. Manual tracking limited response speed, made downtime analysis slower, and reduced confidence in daily performance reporting.",
    solution:
      "I implemented a real-time monitoring solution that collected machine signals, processed production information, and sent the data to a centralized database and dashboard environment. The system connected machine-level events with reporting needs so users could analyze losses, review history, and monitor operational performance continuously.",
    impact: [
      "Enabled real-time monitoring for 52 production machines in one system.",
      "Improved downtime tracking and production visibility for operations teams.",
      "Strengthened the basis for OEE improvement and performance review routines.",
    ],
    technologies: ["PLC", "C# Socket", "SQL Server", "MES Integration"],
    keyPoints: [
      "Tracked downtime history, quantity, cycle time, and machine speed.",
      "Connected machine signals with centralized reporting logic.",
      "Supported data-driven production improvement with live operational insight.",
    ],
    buildProcess: [
      "Collected the machine signals and production data required for OEE calculation.",
      "Built the communication logic between the machine layer and the central system.",
      "Stored production and downtime data in SQL Server for structured reporting.",
      "Designed dashboard views for supervisors and engineering teams to review live performance.",
    ],
    architectureFlow: [
      "PLC or machine signal source",
      "Communication service and socket handling",
      "Central SQL Server database",
      "OEE dashboard and reporting layer",
      "Operations and improvement analysis",
    ],
    storyBlocks: [
      {
        title: "Project Overview",
        body:
          "This project digitalized OEE monitoring so the factory could move from fragmented tracking into one centralized system. The goal was to let users understand machine status, losses, and production performance in real time.",
      },
      {
        title: "How I Built It",
        body:
          "I designed the data path from the machine layer into the reporting system, structured the event handling for downtime and quantity tracking, and helped shape the dashboard so users could navigate the data more effectively.",
      },
      {
        title: "Why It Matters",
        body:
          "The system reduced the gap between production events and management visibility. That makes problem response faster and provides a stronger basis for continuous improvement activity.",
      },
    ],
    visualCaptions: [
      {
        title: "OEE Dashboard Preview",
        caption: "Use this area for the live dashboard screenshot showing OEE, downtime, and production performance.",
      },
      {
        title: "System Architecture",
        caption: "Use this block for the relationship between PLC, communication service, database, and dashboard.",
      },
      {
        title: "Shopfloor Implementation",
        caption: "Use this area for photos of the machine connection, control panel, or local operator display.",
      },
    ],
  },
];

export function getProjectBySlug(slug?: string) {
  return projects.find((project) => project.slug === slug);
}
