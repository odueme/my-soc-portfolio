export const personalInfo = {
  name: "Odueme Uzoezi Francis",
  location: "Edinburgh, UK",
  email: "uodueme@gmail.com",
  github: "https://github.com/odueme",
  linkedin: "https://www.linkedin.com/in/uzoezi-odueme-27aa98222/",
  profilePicture: "/ChatGPT Image May 1, 2026, 02_11_04 PM.png",
  heroDescription: "I am an aspiring Security Operations Center (SOC) analyst with practical experience in detection engineering and threat investigation. I have built a hands-on lab environment where I simulate real-world attack techniques including LSASS credential dumping, scheduled task persistence, and service-based persistence and developed behavioral detection rules using Sysmon and Splunk."
};

export const workExperience = [
  {
    company: "Chronos Capital",
    location: "Lagos, Nigeria",
    position: "Full-Stack Developer  ",
    period: "Sep 2024 - Dec 2024",
    achievements: [
      "Designed and implemented token-based authentication and middleware access controls for fintech platforms such as Kar2Kash  where I was able to authenticate over a thousand users.",
      "ntegrated secure APIs for merchant and asset management, reducing exposure to unauthorized requests .",
      "Created a backend filtering logic to ensure hundreds of Chronos field officers were able to filter Loans based on due date, name of loanee, loan amount and many other criteria ensuring a reliable loan tracking system. ",
      "Participated in quarterly meetings where I contributed ideas such as implementing loan tracking on collateral items which lead to field officers inputting details of each loaner’s collateral into the web app ensuring collateral items are tracked efficiently. ",
    ],
  },
  {
    company: "Agora Solutions",
    location: " Lagos, Nigeria",
    position: "Mobile Application Developer ",
    period: "Jan 2024 - Sep 2024",
    achievements: [
      "Built cross-platform insurance applications serving 10,000+ users",
      "Implemented secure authentication using Firebase Authentication with encrypted session handling that ensured security on the insurance application.",
      "Identified and remediated API vulnerabilities through testing and validation leading to no reports of security breaches or security incidents.",
      "Applied data protection principles to secure sensitive financial and personal data which lead to the protection of customer’s trust, upholding company’s reputation and avoiding legal penalties.",
    ],
  },

];

export const education = [
  {
    institution: "Edinburgh Napier University",
    location: "Edinburgh City",
    degree: "Msc Cybersecurity",
    period: "Jan 2025 - Jul 2025",
    achievements: [
      "Incident Response & Malware Analysis - Learned the fundamentals of incidence response",
      "Applied Cryptography and Trust - Learned the fundamentals of symmetric keys",
      "Represented university in national competitions.",
      "Computer Penetration Testing.",
    ],
  },
];
export const skills = {
  programmingLanguages: [
    "SIEM(Microsoft Sentinel, Splunk)",
    "Wireshark",
    "Sysmon",
    "Process Monitor",
    " MITRE ATT&CK ",
    "Threat Detection",
    "Phython",
    "GDPR fundamentals",
    "SOC Automation",
    "Networking",
    
  ],
  frontendDevelopment: [
    "LoremJS",
    "IpsumJS",
    "Dolor Native",
    "Sit UI",
    "Amet CSS",
    "HTML",
    "CSS",
  ],
  backendDevelopment: ["LoremNode", "IpsumExpress"],
  databaseAndStorage: ["LoremDB", "IpsumORM"],
  cloudAndDevOps: ["LoremCloud"],
  toolsAndServices: [
    "LoremAuth",
    "IpsumCMS",
    "DolorAnalytics",
    "SitValidator",
    "AmetMonitor",
    "ConsecteturPanel",
    "AdipiscingTrigger",
  ],
};

export const projects = [
  {
    title: "Endpoint Detection Engineering | Splunk, Sysmon, MITRE ATT&CK",
    github: "https://github.com/odueme/Advanced-Threat-Detection-Incident-Response-Lab-Using-Splunk-Sysmon",
    description: [
      "Built a SOC home lab using Splunk Enterprise and Sysmon to simulate, detect,and investigate Windows persistence attacks mapped to MITRE ATT&CK techniques including Registry Run Keys (T1547.001) and Windows Service Creation (T1543.003).",
    ],
  },
    {
    title: "T1047-WMI-Detection",
    github: "https://assorted-ginger-a33.notion.site/Detecting-WMI-Process-Creation-MITRE-ATT-CK-T1047-Using-Microsoft-Defender-XDR-37c898cedd7780c0b203f6a390890ae8?pvs=73",
    description: [
      "Built a Microsoft Defender XDR home lab using Windows 11, Atomic Red Team, and Microsoft Defender for Endpoint to simulate, detect, and investigate Windows Management Instrumentation (WMI) execution activity. Developed and validated custom KQL detections for ATT&CK T1047 (Windows Management Instrumentation), correlated process execution telemetry, analyzed parent-child process relationships, and documented detection logic, false positives, blind spots, and investigation findings through Atomic Red Team adversary emulation.",
    ],
  },

];


