/**
 * src/data/caseStudies.ts
 * 
 * Case studies data and configuration
 */

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  keyCapabilities: string[];
  problem: string;
  solution: string;
  architecture: string;
  techStack: string[];
  implementation: string;
  relatedCapabilities: string[];
  visualDirection: string;
  projectType: "client" | "internal";
  featured: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "ai-invoice-reconciliation",
    title: "AI-Powered Invoice Reconciliation",
    category: "Document Intelligence | Business Automation",
    shortDescription:
      "An intelligent invoice reconciliation solution designed to process financial documents, extract relevant information, compare records and identify discrepancies.",
    description:
      "This project demonstrates how AI-powered document intelligence can automate complex financial workflows. The system ingests invoices from multiple sources, extracts structured data using machine learning, compares records intelligently and flags discrepancies for review.",
    problem:
      "Organizations receive invoices from multiple vendors and channels, making manual reconciliation labor-intensive, error-prone and slow. Discrepancies often go undetected until months later, creating accounting complexities and cash flow issues.",
    solution:
      "We designed an intelligent document processing system that automatically extracts invoice data (vendor, amount, date, line items), matches records across systems and identifies anomalies using rule-based and ML-driven comparison logic. Human reviewers focus only on flagged exceptions.",
    architecture:
      "The system combines document intake, OCR/AI data extraction, structured parsing, multi-source record matching and anomaly detection. Results are stored in a structured database with audit trails for compliance.",
    keyCapabilities: [
      "Automated invoice data extraction",
      "Intelligent document processing",
      "Data comparison and reconciliation",
      "Discrepancy identification",
      "Structured reconciliation results",
    ],
    techStack: [
      "Document AI",
      "OCR / ML",
      "Business Logic Automation",
      "Data Integration",
      "Audit Logging",
    ],
    implementation:
      "The implementation involved designing extraction rules for diverse invoice formats, building matching algorithms for multi-source comparison and creating audit-ready result exports. The system is designed to handle invoice volumes from hundreds to thousands monthly.",
    relatedCapabilities: [
      "Document Intelligence",
      "Business Automation",
      "AI-Powered Data Extraction",
    ],
    visualDirection:
      "Professional financial dashboard visual with invoice documents, extracted data and reconciliation results.",
    projectType: "internal",
    featured: true,
  },
  {
    id: "intelligent-document-rag-platform",
    title: "Intelligent Document & RAG Platform",
    category: "AI Engineering | Knowledge Management",
    shortDescription:
      "A document intelligence platform that allows users to upload documents, process their content and retrieve contextual answers using retrieval-augmented generation.",
    description:
      "This platform showcases advanced AI patterns for document understanding and knowledge retrieval. Users upload PDFs, documents or text; the system processes content, builds a semantic index and enables AI-powered Q&A with source citation.",
    problem:
      "Organizations struggle to extract insights from large document repositories. Employees spend hours searching for information across scattered documents. Existing document search tools return raw results without context or answers.",
    solution:
      "We built a RAG (Retrieval-Augmented Generation) platform that chunks documents into semantic passages, indexes them in a vector database and retrieves relevant context when users ask questions. An LLM generates contextual answers with proper source attribution.",
    architecture:
      "Document upload → Text extraction → Semantic chunking → Vector embeddings → Vector database storage → Query semantic search → LLM context generation → Answer with citations.",
    keyCapabilities: [
      "PDF and document processing",
      "Text extraction and chunking",
      "Vector-based semantic search",
      "Context-aware AI responses",
      "Source references and document citations",
    ],
    techStack: [
      "LLMs (GPT, Claude)",
      "Vector Databases",
      "PDF Processing",
      "Semantic Search",
      "Text Embeddings",
    ],
    implementation:
      "The platform provides a clean web interface for document upload, a backend processing pipeline for indexing and a conversational interface for queries. It maintains source attribution and citation for compliance and trust.",
    relatedCapabilities: [
      "Intelligent Document Systems",
      "Knowledge Management",
      "AI-Powered Search",
    ],
    visualDirection:
      "Show documents flowing into an AI knowledge system, followed by search, retrieval and contextual answers.",
    projectType: "internal",
    featured: true,
  },
  {
    id: "ai-voice-receptionist",
    title: "AI Voice Receptionist",
    category: "Conversational AI | AI Agents",
    shortDescription:
      "An AI-powered receptionist designed to handle incoming calls, answer business-related questions, collect customer information and assist with appointment scheduling.",
    description:
      "This voice AI system handles incoming calls with natural language understanding, answers FAQs, collects information and can book appointments in real-time. It reduces the need for human receptionists while improving call availability.",
    problem:
      "Small and mid-market businesses lack 24/7 reception coverage. Missed calls result in lost leads. Hiring dedicated reception staff is expensive. Existing IVR systems are rigid and frustrating for callers.",
    solution:
      "We deployed a conversational AI receptionist that answers calls naturally, understands caller intent, provides relevant business information and seamlessly transfers or schedules appointments. The system learns from interactions and improves over time.",
    architecture:
      "Voice call intake → Speech-to-text → NLU intent detection → Response generation (FAQ, appointment booking, transfer) → Text-to-speech → Integration with business systems.",
    keyCapabilities: [
      "Natural voice conversations",
      "Business information and FAQ handling",
      "Customer information collection",
      "Live appointment availability",
      "Appointment booking workflows",
      "Multilingual conversation support",
    ],
    techStack: [
      "Voice AI",
      "Speech Recognition",
      "Natural Language Understanding",
      "Appointment APIs",
      "CRM Integration",
    ],
    implementation:
      "The receptionist integrates with existing CRM and scheduling systems, handles call queuing and transfers intelligently. It logs interactions for compliance and coaching.",
    relatedCapabilities: [
      "Conversational AI",
      "Voice Agents",
      "Customer Interaction Automation",
    ],
    visualDirection:
      "Modern voice interface with conversational waveform, AI assistant and appointment booking panel.",
    projectType: "internal",
    featured: true,
  },
  {
    id: "multi-agent-ai-workflow",
    title: "Multi-Agent AI Workflow System",
    category: "Agentic AI | Intelligent Automation",
    shortDescription:
      "A coordinated AI system in which specialised agents collaborate to research information, process tasks, analyse results and execute multi-step workflows.",
    description:
      "This system demonstrates enterprise-grade multi-agent orchestration. Specialized AI agents work together under a central orchestrator, sharing context and coordinating tasks to solve complex business problems that require multiple steps and perspectives.",
    problem:
      "Complex business workflows require multiple steps, different expertise and coordination. Manual workflows are slow. Existing automation tools can't handle multi-step reasoning or inter-agent collaboration.",
    solution:
      "We designed a multi-agent system where a central orchestrator coordinates specialized agents (research, analysis, execution). Each agent handles its domain expertly while sharing context and results with others.",
    architecture:
      "Central orchestrator receives task → Decomposes into sub-tasks → Routes to specialized agents → Agents process independently → Share results in shared context → Orchestrator coordinates final output.",
    keyCapabilities: [
      "Central AI orchestrator",
      "Specialised AI agents",
      "Task distribution and coordination",
      "Shared context and information exchange",
      "Multi-step workflow execution",
    ],
    techStack: [
      "Multi-Agent LLMs",
      "Task Orchestration",
      "Context Management",
      "API Integration",
      "Message Queuing",
    ],
    implementation:
      "The system uses a framework for agent communication, context passing and workflow coordination. Agents are specialized via system prompts and tool access. The orchestrator monitors progress and handles failures gracefully.",
    relatedCapabilities: [
      "Multi-Agent Systems",
      "Agentic AI",
      "Workflow Automation",
    ],
    visualDirection:
      "Central orchestrator connected to multiple specialised agents working together.",
    projectType: "internal",
    featured: true,
  },
  {
    id: "ai-customer-support-automation",
    title: "AI-Powered Customer Support Automation",
    category: "Conversational AI | Business Automation",
    shortDescription:
      "An intelligent customer support workflow that combines AI-powered conversations, knowledge retrieval and automated task handling to improve customer interactions.",
    description:
      "This system demonstrates how AI can enhance customer support operations. It handles initial queries through conversational AI, retrieves relevant knowledge, automates routine tasks and escalates complex issues appropriately.",
    problem:
      "Customer support teams are overwhelmed with repetitive questions. Response times are slow. Customers often can't find answers themselves. Support agents spend time on simple queries instead of complex issues.",
    solution:
      "We implemented an AI-powered support workflow that handles initial customer inquiries, retrieves relevant knowledge, classifies issues automatically and escalates to human agents only when needed. This reduces response time and frees agents for complex work.",
    architecture:
      "Customer inquiry → AI conversation → Knowledge retrieval → Automated resolution or escalation → CRM update → Human handoff if needed.",
    keyCapabilities: [
      "AI-powered customer query handling",
      "Knowledge-base integration",
      "Context-aware responses",
      "Automated ticket classification",
      "Escalation to human support",
      "CRM and business application integrations",
    ],
    techStack: [
      "Conversational AI",
      "Knowledge Management",
      "NLP",
      "CRM APIs",
      "Ticket Systems",
    ],
    implementation:
      "The system connects to existing support ticketing and CRM systems, handles knowledge base queries and routes complex issues appropriately.",
    relatedCapabilities: [
      "Conversational AI",
      "Business Automation",
      "Customer Support",
    ],
    visualDirection:
      "Customer conversations flowing through an AI support system, knowledge retrieval and automated resolution workflows.",
    projectType: "internal",
    featured: false,
  },
  {
    id: "custom-saas-development",
    title: "Custom SaaS & Digital Product Development",
    category: "Custom Software | Digital Product Engineering",
    shortDescription:
      "A custom digital platform designed around business requirements, combining modern application architecture, intuitive user experiences and scalable software components.",
    description:
      "This project demonstrates full-stack product engineering. We design and build custom SaaS platforms that combine modern web architecture, delightful UX and scalable infrastructure to meet specific business needs.",
    problem:
      "Off-the-shelf software doesn't fit unique business processes. Generic solutions require expensive customization. Building custom software in-house strains engineering teams.",
    solution:
      "We engineer custom digital products using modern architecture patterns, cloud infrastructure and user-centered design. The result is software tailored to your exact needs, scalable and maintainable.",
    architecture:
      "Cloud-native architecture with microservices, API-first design, modern frontend frameworks, real-time capabilities and scalable database infrastructure.",
    keyCapabilities: [
      "Custom web application development",
      "SaaS platform architecture",
      "API and third-party integrations",
      "Authentication and user management",
      "Interactive dashboards",
      "Scalable application architecture",
    ],
    techStack: [
      "React / Next.js",
      "Node.js / Python",
      "PostgreSQL / MongoDB",
      "Cloud Infrastructure (AWS/GCP)",
      "API Integration",
    ],
    implementation:
      "We work closely with product teams to define requirements, design intuitive interfaces, build robust backends and deploy scalable infrastructure.",
    relatedCapabilities: [
      "Custom Software Development",
      "SaaS Engineering",
      "Digital Product Development",
    ],
    visualDirection:
      "Polished web application interface with dashboard, analytics and connected application components.",
    projectType: "internal",
    featured: false,
  },
];

export const getFeaturedStudies = () => caseStudies.filter((s) => s.featured);
export const getStudyById = (id: string) => caseStudies.find((s) => s.id === id);
