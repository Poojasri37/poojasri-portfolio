export const personalInfo = {
  name: 'Poojasri M',
  title: 'AI/ML & Generative AI Engineer',
  subtitle: 'Full-Stack Development • Agentic AI • RAG',
  location: 'India',
  phone: '+91-8056049315',
  email: 'poojasrinirmalamanickam@gmail.com',
  github: 'https://github.com/Poojasri37',
  linkedin: 'https://www.linkedin.com/in/poojasri-nirmalamanickam-413269215/',
  summary:
    'AI/ML and full-stack developer building product features, enterprise integrations, and AI-powered workflows using Go, React, and Python. I focus on delivery from requirements through deployment with a strong emphasis on scalable GenAI systems and real business impact.',
};

export const aboutContent = {
  heading: 'About Me',
  paragraphs: [
    'I am an AI/ML and full-stack developer with experience building production-ready product features, enterprise integrations, and workflow automation systems. My work spans Go, React, and Python across backend services, frontend experiences, and AI-powered business workflows.',
    'My focus lies in Generative AI, LLM-based systems, RAG architectures, and agentic workflows that turn ideas into measurable products. I have contributed to real-world deployments involving LinkedIn and Outlook integrations, go-to-market campaign automation, and AI-assisted retrieval systems.',
    'I also enjoy building end-to-end solutions from requirement analysis through implementation, testing, and release — combining technical depth with practical product thinking and strong delivery discipline.',
  ],
  highlights: [
    'Generative AI & LLMs',
    'RAG & Vector Search',
    'Agentic AI & Multi-Agent Systems',
    'Full-Stack Product Development',
    'MLOps & Cloud Deployment',
  ],
  stats: [
    { value: '2+', label: 'Years building AI products' },
    { value: '300+', label: 'Coding problems solved' },
    { value: '50+', label: 'Hackathons & events' },
  ],
};

export const experience: {
  role: string;
  company: string;
  period?: string;
  achievements: string[];
}[] = [
  {
    role: 'Software Development Intern',
    company: 'Adya AI',
    period: 'May 2026 - Present',
    achievements: [
      'Developed product features across Go, React, and Python from requirement clarification through implementation, testing, and release.',
      'Built the Pricing Module end to end and implemented Super Admin features for operational control and platform-wide administration.',
      'Integrated LinkedIn and Outlook accounts through OAuth 2.0 to support outreach and mailbox workflows directly inside the platform.',
      'Contributed to the RAI Agent for automated go-to-market campaigns across Email, LinkedIn, and WhatsApp.',
      'Supported release quality through requirement analysis, regression testing, debugging, and defect resolution.',
    ],
  },
  {
    role: 'Freelance AI & Full-Stack Developer',
    company: 'Independent',
    achievements: [
      'Deliver client projects end to end, from requirement gathering and scope definition through implementation, deployment, and enhancement cycles.',
      'Partner directly with clients to clarify requirements, communicate progress, and ensure successful delivery.',
    ],
  },
];

export const education = [
  {
    degree: 'B.Tech, Artificial Intelligence & Data Science',
    institution: 'Karpagam College of Engineering',
    period: '2023 - 2027',
    detail: 'CGPA: 9.24',
  },
];

export const skills = {
  languages: {
    title: 'Languages',
    icon: 'code',
    items: ['Go', 'Python', 'Java', 'SQL', 'JavaScript', 'HTML/CSS'],
  },
  backend: {
    title: 'Backend & Web',
    icon: 'server',
    items: ['Node.js', 'Express.js', 'Flask', 'Spring Boot', 'REST APIs', 'React', 'Vite'],
  },
  integrations: {
    title: 'Integrations',
    icon: 'cloud',
    items: ['LinkedIn API', 'Microsoft Outlook / Graph API', 'OAuth 2.0', 'Email', 'WhatsApp campaign workflows'],
  },
  aiMl: {
    title: 'AI / ML & GenAI',
    icon: 'brain',
    items: ['LLMs', 'RAG', 'LangChain', 'LangGraph', 'Agentic AI', 'Multi-Agent Systems', 'FAISS', 'Chroma', 'Transformers', 'TensorFlow', 'Keras', 'OpenCV'],
  },
  delivery: {
    title: 'Quality & Delivery',
    icon: 'users',
    items: ['Requirement analysis', 'Test planning', 'Regression testing', 'Debugging', 'Agile collaboration'],
  },
  mlops: {
    title: 'MLOps & Cloud',
    icon: 'cloud',
    items: ['Docker', 'Apache Kafka', 'Snowflake', 'DVC', 'Jenkins', 'Git', 'AWS', 'AWS Bedrock', 'Google Cloud Platform'],
  },
  data: {
    title: 'Data & Analytics',
    icon: 'server',
    items: ['MongoDB', 'PostgreSQL', 'DynamoDB', 'Hadoop', 'Hive', 'Tableau', 'Power BI'],
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
    id: 'rai-agent',
    title: 'RAI Agent - Go-to-Market Campaign Automation',
    description: 'Built a unified agent-driven workflow for inbound and outbound go-to-market campaigns across Email, LinkedIn, and WhatsApp, coordinating outreach through a single operating flow.',
    techStack: ['Go', 'Python', 'React', 'LLMs', 'OAuth 2.0'],
    repos: [{ label: 'Project', url: 'https://github.com/Poojasri37' }],
    featured: true,
  },
  {
    id: 'ai-contract-assistant',
    title: 'AI Contract Assistant - Legal Intelligence System',
    description: 'Built a retrieval-augmented assistant that analyzes legal contracts, surfaces clauses, risks, and obligations, and retrieves contextual evidence using semantic search.',
    techStack: ['Python', 'LLMs', 'RAG', 'Vector DB', 'NLP'],
    repos: [{ label: 'GitHub', url: 'https://github.com/Poojasri37/ai-contract-platform' }],
    featured: true,
  },
  {
    id: 'recruitment-tool',
    title: 'AI-Powered Recruitment Tool',
    description: 'Developed a full-stack recruitment platform with resume extraction, candidate-to-role semantic matching, and interview evaluation support for consistent, role-based screening.',
    techStack: ['MERN Stack', 'Python', 'RAG', 'NLP', 'LangChain', 'Multi-Agent AI'],
    repos: [{ label: 'GitHub', url: 'https://github.com/Poojasri37' }],
    featured: true,
  },
  {
    id: 'aquasentry-vision',
    title: 'AquaSentry Vision - AI Water Quality Monitoring',
    description: 'Designed an IoT-enabled monitoring system combining sensor readings with machine learning inference to detect and classify water contamination levels in near real time.',
    techStack: ['Python', 'ML', 'IoT', 'Edge Computing', 'TensorFlow'],
    repos: [
      { label: 'Portable Assistant', url: 'https://github.com/Poojasri37/portable_water_assistant' },
      { label: 'AI Assistant', url: 'https://github.com/Poojasri37/ai-portable-water-assistant' },
    ],
    featured: true,
  },
  {
    id: 'sentientstream',
    title: 'SentientStream - Mood-Aware AI Content Filtering',
    description: 'Developed a content-filtering system that infers user mood and adapts recommendations using sentiment analysis and contextual NLP to encourage healthier digital consumption.',
    techStack: ['Python', 'NLP', 'ML', 'Sentiment Analysis', 'AWS'],
    repos: [{ label: 'GitHub', url: 'https://github.com/Poojasri37/SentientStream-Mood-Aware-AI-Content-Filtering-for-Digital-Well-Being' }],
    featured: true,
  },
  {
    id: 'women-empowerment-dashboard',
    title: 'Women Empowerment Insights Dashboard',
    description: 'Built an interactive Power BI dashboard analyzing literacy, labour participation, maternal health, and the gender pay gap across 2015-2024.',
    techStack: ['Power BI', 'Data Analytics', 'Visualization', 'DAX'],
    repos: [],
    featured: true,
  },
];

export const otherProjects: Project[] = [
  {
    id: 'agritwin',
    title: 'AgriTwin AI - Hyperspectral + IoT Agriculture System',
    description: 'Digital twin platform for precision agriculture combining hyperspectral imaging and IoT sensors for crop health monitoring.',
    techStack: ['Hyperspectral Imaging', 'IoT', 'Machine Learning', 'Python', 'Edge Computing'],
    repos: [{ label: 'GitHub', url: 'https://github.com/Poojasri37/Agri-Twin-AI---hyperspectral-image-processing-with-IOT-integrated-system' }],
    featured: false,
  },
  {
    id: 'kafka-weather',
    title: 'Kafka Weather Data Streaming Pipeline',
    description: 'Real-time weather data streaming pipeline using Apache Kafka with PostgreSQL storage for analytical workflows.',
    techStack: ['Apache Kafka', 'PostgreSQL', 'Python', 'Data Streaming'],
    repos: [{ label: 'GitHub', url: 'https://github.com/Poojasri37/Real-Time-Weather-Data-Streaming-Pipeline-using-Kafka-and-PostgreSQL' }],
    featured: false,
  },
  {
    id: 'snowflake-analytics',
    title: 'GitHub Analytics using Snowflake',
    description: 'Real-time GitHub API analytics platform built with Snowflake and Python for pipeline-driven insights.',
    techStack: ['Snowflake', 'GitHub API', 'Data Engineering', 'Python'],
    repos: [{ label: 'GitHub', url: 'https://github.com/Poojasri37/Real-time-github-api-streaming-using-snowflake' }],
    featured: false,
  },
  {
    id: 'credit-intelligence',
    title: 'National Trust-Based Credit Intelligence Platform',
    description: 'Intelligent credit-scoring platform using trust-based algorithms for financial inclusion and decision support.',
    techStack: ['Machine Learning', 'Python', 'Data Analysis', 'Financial Modeling'],
    repos: [{ label: 'GitHub', url: 'https://github.com/Poojasri37/National-trust-based-credit-intelligence-platform' }],
    featured: false,
  },
  {
    id: 'fansphere',
    title: "FanSphere - Women's Sports Fan Engagement Platform",
    description: 'Community-led sports engagement platform designed to strengthen interaction and participation around women\'s sports.',
    techStack: ['Full Stack', 'Community Platform', 'Sports Analytics'],
    repos: [{ label: 'GitHub', url: 'https://github.com/Poojasri37/FanSphere---Women-s-Sports-Fan-Engagement-Platform' }],
    featured: false,
  },
  {
    id: 'datacast',
    title: 'DataCast - AI Podcast Generator',
    description: 'AI-powered podcast generation platform that converts text into audio content with advanced speech synthesis workflows.',
    techStack: ['Text-to-Speech', 'AI', 'Audio Processing', 'Python'],
    repos: [],
    featured: false,
  },
];

export const achievements = [
  { icon: 'trophy', title: '1st Prize – Code 0 Clock Hackathon', description: 'Hackathon winner' },
  { icon: 'award', title: 'AI By Her Impact Summit', description: 'Shortlisted among the top 1.5% of teams globally' },
  { icon: 'medal', title: 'Top 10 – Hackceler8 SRM Hackathon', description: 'Competitive placement' },
  { icon: 'star', title: 'Finalist – Hacknation (OpenAI)', description: 'OpenAI hackathon finalist' },
  { icon: 'code', title: '300+ Problems Solved', description: 'LeetCode & HackerRank' },
  { icon: 'zap', title: '50+ Hackathons', description: 'Led problem analysis and technical execution across AI challenges' },
  { icon: 'github', title: 'GitHub Contribution', description: 'Pull Shark achievement' },
];

export const certifications = [
  { title: 'NPTEL Elite Silver – Internet of Things', issuer: 'NPTEL' },
  { title: 'NPTEL Elite Silver – Python for Data Science', issuer: 'NPTEL' },
  { title: 'Generative AI with LLMs', issuer: 'DeepLearning.AI & AWS' },
  { title: 'AWS Cloud Practitioner', issuer: 'GeeksforGeeks' },
  { title: 'Salesforce Innovator', issuer: 'Salesforce' },
  { title: 'Qlik Business Analyst', issuer: 'Qlik' },
];
