// Portfolio Data - All content centralized for easy updates

export const personalInfo = {
  name: "Poojasri M",
  title: "AI & Data Science Enthusiast",
  subtitle: "GenAI • MLOps • Cloud",
  location: "India",
  email: "poojasrinirmalamanickam@gmail.com",
  github: "https://github.com/Poojasri37",
  linkedin: "https://www.linkedin.com/in/poojasri-nirmalamanickam-413269215/",
  summary: "Passionate about building intelligent systems that solve real-world problems. Specializing in Generative AI, LLM architectures, Multi-Agent Systems, and production-grade MLOps pipelines.",
};

export const aboutContent = {
  heading: "About Me",
  paragraphs: [
    "I'm an AI & Data Science Engineer with deep expertise in building production-ready intelligent systems. My work spans across Generative AI, Large Language Models, and cutting-edge RAG architectures that power modern AI applications.",
    "I specialize in Multi-Agent Systems using frameworks like CrewAI, designing autonomous agents that collaborate to solve complex tasks. My experience includes building multimodal agents capable of processing text, images, and structured data.",
    "On the MLOps front, I focus on deploying scalable AI solutions using cloud platforms, containerization, and CI/CD pipelines. I believe in bridging the gap between research and real-world AI deployments.",
  ],
  highlights: [
    "Generative AI & LLMs",
    "RAG Architectures",
    "Multi-Agent Systems (CrewAI)",
    "MLOps & Cloud Deployments",
  ],
};

export const skills = {
  languages: {
    title: "Languages",
    icon: "code",
    items: ["Python", "Java", "SQL", "HTML", "CSS", "JavaScript"],
  },
  aiMl: {
    title: "AI / ML",
    icon: "brain",
    items: ["LLMs", "LangChain", "LangGraph", "RAG", "TensorFlow", "Keras", "OpenCV", "Transformers", "FAISS", "Chroma"],
  },
  multiAgent: {
    title: "Multi-Agent Systems",
    icon: "users",
    items: ["CrewAI", "Autonomous Agents", "Agent Orchestration", "Multimodal Agents"],
  },
  mlops: {
    title: "MLOps & Data Engineering",
    icon: "server",
    items: ["Apache Kafka", "Hadoop", "Hive", "PostgreSQL", "Snowflake", "Docker", "DVC", "Jenkins", "Git", "GitHub"],
  },
  visualization: {
    title: "Visualization & Cloud",
    icon: "cloud",
    items: ["Power BI", "Tableau", "AWS", "Google Cloud Platform"],
  },
};

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  repos: { label: string; url: string }[];
  featured: boolean;
}

export const featuredProjects: Project[] = [
  {
    id: "virtual-interview",
    title: "Virtual Interview Assistant",
    description: "AI-powered interview preparation platform with real-time feedback, speech analysis, and personalized coaching using advanced NLP techniques.",
    techStack: ["Python", "LangChain", "Speech Recognition", "NLP", "Streamlit"],
    repos: [{ label: "GitHub", url: "https://github.com/Poojasri37/Virtual_interview_assistant" }],
    featured: true,
  },
  {
    id: "ai-contract",
    title: "AI Contract Assistant (Hackathon Winner)",
    description: "Award-winning intelligent contract analysis platform that extracts key clauses, identifies risks, and provides actionable insights using LLMs.",
    techStack: ["LangChain", "RAG", "OpenAI", "Document Processing", "React"],
    repos: [{ label: "GitHub", url: "https://github.com/Poojasri37/ai-contract-platform" }],
    featured: true,
  },
  {
    id: "aquasentry",
    title: "AquaSentry Vision – AI Water Quality Monitoring",
    description: "Computer vision system for real-time water quality assessment using image analysis and IoT sensor integration for environmental monitoring.",
    techStack: ["Computer Vision", "IoT", "Python", "TensorFlow", "Flask"],
    repos: [
      { label: "Portable Assistant", url: "https://github.com/Poojasri37/portable_water_assistant" },
      { label: "AI Assistant", url: "https://github.com/Poojasri37/ai-portable-water-assistant" },
      { label: "Website", url: "https://github.com/Poojasri37/water_assistant_website" },
    ],
    featured: true,
  },
  {
    id: "agritwin",
    title: "AgriTwin AI – Hyperspectral + IoT Agriculture System",
    description: "Digital twin platform for precision agriculture combining hyperspectral image processing with IoT sensors for crop health monitoring.",
    techStack: ["Hyperspectral Imaging", "IoT", "Machine Learning", "Python", "Edge Computing"],
    repos: [{ label: "GitHub", url: "https://github.com/Poojasri37/Agri-Twin-AI---hyperspectral-image-processing-with-IOT-integrated-system" }],
    featured: true,
  },
  {
    id: "multi-agent",
    title: "Multi-Agent AI System (CrewAI / Multimodal Agents)",
    description: "Sophisticated multi-agent framework enabling autonomous collaboration between specialized AI agents for complex task orchestration.",
    techStack: ["CrewAI", "LangChain", "Multimodal AI", "Python", "Agent Orchestration"],
    repos: [
      { label: "Multimodal Agent", url: "https://github.com/Poojasri37/multimodal-agent" },
      { label: "Document Agent", url: "https://github.com/Poojasri37/multimodal-agent-document-" },
    ],
    featured: true,
  },
  {
    id: "resilicode",
    title: "ResiliCode – Autonomous Software Resilience Agent",
    description: "Knowledge-driven autonomous agent for software resilience, capable of detecting issues, analyzing root causes, and implementing fixes.",
    techStack: ["Autonomous Agents", "Knowledge Graphs", "LLMs", "Python", "DevOps"],
    repos: [{ label: "GitHub", url: "https://github.com/Poojasri37/ResiliCode--Knowledge-Driven-Autonomous-Software-Resilience-Agent" }],
    featured: true,
  },
  {
    id: "sentientstream",
    title: "SentientStream – Mood-Aware AI Content Filtering",
    description: "AI system for digital wellbeing that analyzes user mood and filters content recommendations to promote positive mental health.",
    techStack: ["Sentiment Analysis", "Content Filtering", "NLP", "Python", "Machine Learning"],
    repos: [{ label: "GitHub", url: "https://github.com/Poojasri37/SentientStream-Mood-Aware-AI-Content-Filtering-for-Digital-Well-Being" }],
    featured: true,
  },
];

export const otherProjects: Project[] = [
  {
    id: "powerbi-dashboards",
    title: "Power BI Dashboards",
    description: "Interactive dashboards for Women Empowerment Insights with comprehensive data visualization and analytics.",
    techStack: ["Power BI", "Data Visualization", "DAX", "Data Modeling"],
    repos: [],
    featured: false,
  },
  {
    id: "tableau-analytics",
    title: "Tableau Business Analytics Dashboards",
    description: "Business intelligence dashboards built with Tableau for data-driven decision making.",
    techStack: ["Tableau", "Business Analytics", "Data Visualization"],
    repos: [],
    featured: false,
  },
  {
    id: "kafka-weather",
    title: "Kafka Weather Data Streaming Pipeline",
    description: "Real-time weather data streaming pipeline using Apache Kafka with PostgreSQL storage.",
    techStack: ["Apache Kafka", "PostgreSQL", "Python", "Data Streaming"],
    repos: [{ label: "GitHub", url: "https://github.com/Poojasri37/Real-Time-Weather-Data-Streaming-Pipeline-using-Kafka-and-PostgreSQL" }],
    featured: false,
  },
  {
    id: "github-snowflake",
    title: "GitHub Analytics using Snowflake",
    description: "Real-time GitHub API streaming and analytics platform powered by Snowflake data warehouse.",
    techStack: ["Snowflake", "GitHub API", "Data Engineering", "Python"],
    repos: [{ label: "GitHub", url: "https://github.com/Poojasri37/Real-time-github-api-streaming-using-snowflake" }],
    featured: false,
  },
  {
    id: "credit-platform",
    title: "National Trust-Based Credit Intelligence Platform",
    description: "Intelligent credit scoring platform using trust-based algorithms for financial inclusion.",
    techStack: ["Machine Learning", "Python", "Data Analysis", "Financial Modeling"],
    repos: [{ label: "GitHub", url: "https://github.com/Poojasri37/National-trust-based-credit-intelligence-platform" }],
    featured: false,
  },
  {
    id: "fansphere",
    title: "FanSphere – Women's Sports Fan Engagement",
    description: "Platform designed to enhance fan engagement in women's sports through community features.",
    techStack: ["Full Stack", "Community Platform", "Sports Analytics"],
    repos: [{ label: "GitHub", url: "https://github.com/Poojasri37/FanSphere---Women-s-Sports-Fan-Engagement-Platform" }],
    featured: false,
  },
  {
    id: "datacast",
    title: "DataCast – AI Podcast Generator",
    description: "AI-powered podcast generation platform that creates audio content from text using advanced TTS.",
    techStack: ["Text-to-Speech", "AI", "Audio Processing", "Python"],
    repos: [],
    featured: false,
  },
];

export const achievements = [
  { icon: "trophy", title: "Winner – Code 0 Clock Hackathon", description: "1st Prize" },
  { icon: "award", title: "Finalist – AI By Her Impact Summit", description: "Top performer" },
  { icon: "medal", title: "Finalist – Smart India Hackathon", description: "Internal rounds" },
  { icon: "star", title: "Top 10 – Hackceler8 SRM Hackathon", description: "Competitive placement" },
  { icon: "code", title: "200+ Problems Solved", description: "LeetCode & HackerRank" },
  { icon: "zap", title: "50+ Hackathons", description: "Participated in AI challenges" },
  { icon: "github", title: "GitHub Achievement", description: "Pull Shark" },
];

export const certifications = [
  { title: "NPTEL Elite Silver – Internet of Things", issuer: "NPTEL" },
  { title: "NPTEL Elite Silver – Python for Data Science", issuer: "NPTEL" },
  { title: "Generative AI with LLMs", issuer: "DeepLearning.AI & AWS" },
  { title: "AWS Cloud Practitioner", issuer: "GeeksforGeeks" },
  { title: "Salesforce Innovator Certification", issuer: "Salesforce" },
  { title: "Qlik Business Analyst Certification", issuer: "Qlik" },
];
