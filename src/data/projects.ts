import electricityDashboard from "../assets/projects/page1-image1.jpg";
import electricityArchitecture from "../assets/projects/page1-image2.jpg";
import electricityPanelMachine from "../assets/projects/page1-image3.jpg";
import electricityIndustrialPc from "../assets/projects/page1-image4.jpg";
import electricityPanelDistribution from "../assets/projects/page1-image5.jpg";
import oeeDashboardLine from "../assets/projects/page2-image1.jpg";
import oeeDashboardSummary from "../assets/projects/page2-image2.jpg";
import oeeMonitoringTable from "../assets/projects/page2-image3.jpg";
import oeeArchitecture from "../assets/projects/page2-image4.jpg";

type ProjectVisual = {
  src: string;
  title: string;
  caption: string;
};

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
  heroVisuals: ProjectVisual[];
  architectureVisual: ProjectVisual;
  implementationVisuals: ProjectVisual[];
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
      "I designed the electricity monitoring system using Schneider PM2200 power meters installed across 30 critical high-consumption machines. Energy data collected through Modbus RTU was converted into Modbus TCP, processed with Telegraf, then forwarded into SQL Database and TSDB for structured storage, historical analysis, and dashboard visualization.",
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
          "I mapped the meter locations, defined the communication architecture, converted Modbus RTU into Modbus TCP for stable network integration, and used Telegraf as the ETL layer. After the acquisition path was stable, I connected the data to SQL Database and TSDB so the dashboard could show real-time values and historical trends.",
      },
      {
        title: "Why It Matters",
        body:
          "With a centralized monitoring view, the team can evaluate energy behavior more quickly, detect abnormal usage, and support discussions around efficiency improvement using actual production data.",
      },
    ],
    heroVisuals: [
      {
        src: electricityDashboard,
        title: "Dashboard Preview",
        caption: "Main dashboard page summary for real-time electricity monitoring and trend analysis.",
      },
      {
        src: electricityArchitecture,
        title: "Architecture / Device Network",
        caption: "Network and device architecture from PM2200 meters to edge device, database, and dashboard layer.",
      },
    ],
    architectureVisual: {
      src: electricityArchitecture,
      title: "Architecture Network and Device",
      caption: "Communication flow using PM2200 power meters, Modbus network, industrial PC, and dashboard environment.",
    },
    implementationVisuals: [
      {
        src: electricityPanelMachine,
        title: "PM 2220 in Panel Machine",
        caption: "Power meter installation on machine panel for electrical data acquisition.",
      },
      {
        src: electricityPanelDistribution,
        title: "USR-W610 in Panel Distribution",
        caption: "Panel distribution setup for device communication and network conversion.",
      },
      {
        src: electricityIndustrialPc,
        title: "PC Industrial in Production Plant Office",
        caption: "Industrial PC acting as the edge device within the plant network.",
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
      "I developed the OEE monitoring system by integrating shopfloor-level PLCs with a centralized MES-oriented data architecture. Machine signals were transmitted to a background application built in C# using socket communication, then processed and stored in SQL Server for real-time dashboard visualization across 52 production machines.",
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
          "I connected PLC data into a socket-based C# background application that processed machine logic, executed stored procedures, and managed SQL Server transactions. After the data foundation was stable, I organized the dashboard views to highlight downtime, quantity, cycle time, and speed clearly for management use.",
      },
      {
        title: "Why It Matters",
        body:
          "The system reduced the gap between production events and management visibility. That makes problem response faster and provides a stronger basis for continuous improvement activity.",
      },
    ],
    heroVisuals: [
      {
        src: oeeDashboardSummary,
        title: "OEE Dashboard Preview",
        caption: "Live summary dashboard showing OEE, target, cycle time, speed, and output information.",
      },
      {
        src: oeeDashboardLine,
        title: "Production Timeline Chart",
        caption: "Operational dashboard view for line-level monitoring and production timeline tracking.",
      },
    ],
    architectureVisual: {
      src: oeeArchitecture,
      title: "System Architecture",
      caption: "Architecture flow between PLC, C# background panel, stored procedures, SQL Server, and dashboard layer.",
    },
    implementationVisuals: [
      {
        src: oeeMonitoringTable,
        title: "Monitoring Status Machine",
        caption: "Detailed performance table used to monitor each line against plan, target, and achievement.",
      },
      {
        src: oeeDashboardLine,
        title: "Production Timeline Chart",
        caption: "Dashboard used by supervisors to observe machine and production status in real time.",
      },
      {
        src: oeeDashboardSummary,
        title: "Dashboard OEE For Operators",
        caption: "Executive-style OEE dashboard used for fast daily performance review.and input parameters",
      },
    ],
  },
];

export function getProjectBySlug(slug?: string) {
  return projects.find((project) => project.slug === slug);
}
