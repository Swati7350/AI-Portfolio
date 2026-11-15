/**
 * src/data/projects.ts
 * 
 * Single source of truth for all portfolio projects.
 * 
 * To add a new project:
 * 1. Add a new object to the projects array
 * 2. Ensure all required fields are populated
 * 3. No code changes needed - pages auto-update
 * 
 * Image Configuration:
 * - heroImage: Displayed in the hero introduction section (top of page)
 * - finalProductImage: Displayed in the Final Product section
 * - If not specified, heroImage defaults to image, finalProductImage defaults to image
 * 
 * Project Story Configuration (Optional):
 * - If projectStory is not defined, the template uses default Document Intelligence content as fallback
 * - projectStory allows customization of Problem/Solution section, Final Product description, and CTA
 * - This enables project-specific case study content while maintaining the shared template
 */
export interface WorkflowStage {
  number: string;
  title: string;
  description: string;
}

export interface ProjectStory {
  sectionHeading?: string;
  sectionDescription?: string;
  challengeTitle?: string;
  challengeDescription?: string;
  challengePoints?: string[];
  solutionTitle?: string;
  solutionDescription?: string;
  solutionPoints?: string[];
  workflowTitle?: string;
  workflowDescription?: string;
  workflowStages?: WorkflowStage[];
  finalProductDescription?: string;
  finalProductExample?: string;
  finalProductCaption?: string;
  ctaHeading?: string;
  ctaDescription?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  problem?: string;
  built?: string;
  categories: string[];
  business_categories: string[];
  tech_stack: string[];
  image: string;
  heroImage?: string;
  finalProductImage?: string;
  projectStory?: ProjectStory;
  live_url?: string;
  github_url?: string;
  featured?: boolean;
  demo_private?: boolean;
}

export const projects: Project[] = [
  {
    id: 'document-intelligence',
    name: 'Document Intelligence System',
    description: 'Transform business documents into searchable, actionable knowledge with AI. Upload documents, extract key information and get contextual answers from your files through an intelligent document interface.',
    problem: 'Information buried in business documents\n\nBusinesses deal with large volumes of PDFs, reports, contracts and records. Finding specific information, extracting key details and locating relevant answers manually can be time-consuming and inefficient.\n\nChallenge points:\n• Information spread across multiple documents\n• Time-consuming manual searches\n• Difficulty retrieving specific details',
    built: 'An AI-powered document intelligence system\n\nWe built an intelligent platform that processes business documents, creates searchable knowledge bases and enables users to retrieve relevant information through natural-language queries.\n\nSolution points:\n• Automated document processing\n• Semantic search across documents\n• Contextual AI answers with source references',
    categories: ['Document Processing', 'RAG', 'Semantic Search', 'Knowledge Extraction'],
    business_categories: ['Documents & Knowledge', 'Custom AI'],
    tech_stack: ['Pinecone', 'Claude', 'LangChain'],
    image: '/assets/doc intelligent.png',
    heroImage: '/assets/doc intelligent.png',
    finalProductImage: '/assets/chatbot ui.png',
    live_url: 'https://livedemo-document-intelligence.parasaiinnovations.com/',
    featured: true,
  },
  {
    id: 'invoice-reconciliation',
    name: 'Invoice Reconciliation',
    description: 'An AI-powered reconciliation system that processes invoices and receipts, matches financial information, and highlights discrepancies. Reduce manual verification and make invoice reconciliation faster and more accurate.',
    problem: 'Matching invoices and receipts manually takes time.',
    built: 'AI-powered matching to identify and reconcile related documents.',
    categories: ['Invoice Processing', 'Receipt Matching', 'AI Reconciliation', 'Discrepancy Detection'],
    business_categories: ['Documents & Knowledge', 'Business Automation'],
    tech_stack: ['OCR', 'LangChain'],
    image: '/assets/3wm.png',
    heroImage: '/assets/AI Invoice and Receipt Matching.png',
    finalProductImage: '/assets/invoice 3wm.png',
    projectStory: {
      sectionHeading: 'From manual invoice checking to intelligent reconciliation.',
      sectionDescription: 'Businesses process invoices and receipts from multiple sources. Manually comparing amounts, quantities and transaction details takes time and makes discrepancies harder to identify. We engineered an AI-powered system to streamline this reconciliation process.',
      challengeTitle: 'Manual invoice and receipt reconciliation',
      challengeDescription: 'Businesses handle invoices and receipts from multiple sources. Comparing financial information manually is time-consuming and increases the possibility of overlooking discrepancies.',
      challengePoints: [
        'Invoice information spread across multiple documents.',
        'Time-consuming manual data verification.',
        'Difficulty identifying mismatched amounts and details.',
        'Delays in reviewing and approving transactions.',
      ],
      solutionTitle: 'An AI-powered invoice reconciliation system',
      solutionDescription: 'We developed an intelligent system that extracts financial information from invoices and receipts, compares corresponding records and highlights discrepancies for easier verification.',
      solutionPoints: [
        'Automated extraction of invoice and receipt information.',
        'Matching of corresponding financial records.',
        'Identification of mismatches and discrepancies.',
        'Faster reconciliation with clearer verification results.',
      ],
      finalProductDescription: 'An AI-powered application that extracts invoice and receipt information, compares financial records and presents matching results and discrepancies through a streamlined interface.',
      ctaHeading: 'Still spending hours reconciling invoices manually?',
      ctaDescription: 'Let\'s build intelligent financial workflows that reduce manual verification, identify discrepancies and streamline your business operations.',
    },
    live_url: 'https://automated-invoice-reconcillation-frontend.onrender.com/',
    featured: false,
  },
  {
    id: 'healthcare-ai-assistant',
    name: 'AI Healthcare Assistant',
    description: 'Automating patient engagement and appointment scheduling through intelligent AI voice conversations.',
    categories: ['Healthcare AI', 'AI Voice Agents'],
    business_categories: ['Healthcare & Life Sciences', 'Custom AI'],
    tech_stack: ['Retell AI', 'AI Voice Agents', 'Calendar APIs', 'Workflow Automation', 'API Integrations'],
    image: '/assets/AI Voice Agent.png',
    heroImage: '/assets/AI Voice Agent.png',
    finalProductImage: '/assets/AI Voice Agent.png',
    projectStory: {
      sectionHeading: 'From Patient Communication to Automated Clinic Operations.',
      sectionDescription: 'Healthcare clinics handle a continuous flow of patient calls, appointment requests and routine inquiries. Managing these interactions manually can create administrative overhead, delayed responses and missed appointment opportunities.\n\nWe developed an AI-powered voice assistant that helps clinics manage patient conversations, answer routine questions and coordinate appointment scheduling through natural voice interactions.',
      challengeTitle: 'Managing Patient Communication and Appointments Manually',
      challengeDescription: 'Clinic staff often spend significant time handling repetitive calls and coordinating appointments.',
      challengePoints: [
        'Managing incoming patient calls during busy clinic hours.',
        'Responding to repetitive questions about clinic services and availability.',
        'Checking appointment availability manually.',
        'Coordinating appointment bookings and patient information.',
        'Handling rescheduling and cancellation requests.',
        'Maintaining consistent patient communication outside business hours.',
      ],
      solutionTitle: 'An AI-Powered Healthcare Voice Assistant',
      solutionDescription: 'We designed an intelligent voice-based assistant that automates routine patient interactions and connects conversations with appointment management workflows.',
      solutionPoints: [
        '24/7 Inbound Call Handling: Answers incoming patient calls and handles routine inquiries.',
        'Natural Voice Conversations: Understands patient requests and responds conversationally.',
        'Patient Information Collection: Collects relevant information during calls.',
        'Appointment Scheduling: Checks calendar availability and facilitates appointment bookings.',
        'Clinic Knowledge Assistant: Answers questions using clinic information and FAQs.',
        'Appointment Management: Supports rescheduling and cancellations as configured.',
        'Workflow Integration: Connects patient interactions with calendar and business workflows.',
      ],
      finalProductDescription: 'Experience how an AI-powered voice assistant handles patient inquiries, provides clinic information and facilitates appointment scheduling through natural conversations.',
      ctaHeading: 'Make Patient Communication Smarter with AI.',
      ctaDescription: 'Build intelligent healthcare experiences that simplify patient interactions, streamline appointment management and reduce repetitive administrative work.',
    },
    featured: false,
    demo_private: true,
  },
  {
    id: 'whatsapp-ai-agent',
    name: 'Intelligent WhatsApp Conversations',
    description: 'Deploy AI-powered agents that understand customer inquiries, retrieve business information, generate responses and automate everyday business processes — directly through WhatsApp.',
    categories: ['AI Agents', 'WhatsApp Automation'],
    business_categories: ['Customer & Sales', 'Custom AI'],
    tech_stack: ['Twilio', 'WhatsApp', 'Workflow Automation'],
    image: '/assets/whatsapp.png',
    heroImage: '/assets/whatsapp.png',
    finalProductImage: '/assets/Send Your Chat to WhatsApp.png',
    projectStory: {
      sectionHeading: 'From Customer Conversations to Automated Business Operations.',
      sectionDescription: 'Customer interactions often involve more than answering questions. Businesses spend time understanding requirements, checking product information, preparing quotations and coordinating follow-ups.\n\nWe engineered an AI-powered WhatsApp agent that understands customer intent, retrieves relevant business information and helps automate these interactions through intelligent workflows.',
      challengeTitle: 'Customer Conversations Were Entirely Manual',
      challengeDescription: 'Handling business inquiries through WhatsApp required constant manual involvement.',
      challengePoints: [
        'Repeated questions about products, pricing and availability.',
        'Manually checking product specifications and business information.',
        'Preparing quotations for individual customer requirements.',
        'Delayed responses during busy business hours.',
        'Follow-ups and order inquiries requiring manual coordination.',
      ],
      solutionTitle: 'An AI-Powered WhatsApp Business Agent',
      solutionDescription: 'We developed an intelligent conversational system that connects WhatsApp interactions with business information and automated workflows.',
      solutionPoints: [
        'Understands customer questions and conversational intent.',
        'Retrieves relevant product information and pricing.',
        'Handles quotation-related inquiries automatically.',
        'Collects customer requirements through conversations.',
        'Triggers business workflows based on customer interactions.',
        'Escalates conversations when human intervention is required.',
      ],
      finalProductDescription: 'See how an AI-powered agent handles a real business inquiry, retrieves product information and assists customers with quotation requests.',
      finalProductExample: 'A customer requests a quotation for 20 lawn mowers.\n\nThe AI agent:\n• Understands the requested product and quantity.\n• Retrieves the relevant model and specifications.\n• Provides unit pricing and minimum order quantity.\n• Shares estimated delivery information.\n• Asks the customer whether they would like to proceed.\n\nThe result is a more responsive customer experience with less manual coordination.',
      finalProductCaption: 'WhatsApp AI Agent — Automated Product Inquiry & Quotation Workflow.',
      ctaHeading: 'Turn Customer Conversations Into Intelligent Workflows.',
      ctaDescription: 'Build AI-powered WhatsApp experiences that handle inquiries, connect business information and automate the processes behind your customer interactions.',
    },
    featured: false,
    demo_private: true,
  },
];

/**
 * Get all unique categories (for filtering)
 */
export function getCategories(): string[] {
  const cats = new Set<string>();
  projects.forEach(p => p.categories.forEach(c => cats.add(c)));
  return Array.from(cats).sort();
}

/**
 * Get all unique business categories
 */
export function getBusinessCategories(): string[] {
  const cats = new Set<string>();
  projects.forEach(p => p.business_categories.forEach(c => cats.add(c)));
  return Array.from(cats).sort();
}

/**
 * Filter projects by category
 */
export function filterByCategory(category: string): Project[] {
  if (category === 'All') return projects;
  return projects.filter(p => p.categories.includes(category));
}

/**
 * Filter projects by business category
 */
export function filterByBusinessCategory(category: string): Project[] {
  if (category === 'All') return projects;
  return projects.filter(p => p.business_categories.includes(category));
}

/**
 * Get featured projects
 */
export function getFeaturedProjects(): Project[] {
  return projects.filter(p => p.featured === true);
}

/**
 * Get all projects by ID (for individual project pages if needed)
 */
export function getProjectById(id: string): Project | undefined {
  return projects.find(p => p.id === id);
}
