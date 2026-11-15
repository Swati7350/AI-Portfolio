/**
 * src/data/projects.ts
 * 
 * Single source of truth for all portfolio projects.
 * 
 * To add a new project:
 * 1. Add a new object to the projects array
 * 2. Ensure all required fields are populated
 * 3. No code changes needed - pages auto-update
 */

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
    image: '/assets/Document Intelligence AI Workflow.png',
    live_url: 'https://livedemo-document-intelligence.parasaiinnovations.com/',
    featured: true,
  },
  {
    id: 'invoice-reconciliation',
    name: 'AI Invoice Reconciliation',
    description: 'AI that matches invoices and receipts to reduce manual reconciliation.',
    problem: 'Matching invoices and receipts manually takes time.',
    built: 'AI-powered matching to identify and reconcile related documents.',
    categories: ['Document Intelligence', 'Automation'],
    business_categories: ['Documents & Knowledge', 'Business Automation'],
    tech_stack: ['OCR', 'LangChain'],
    image: '/assets/AI Invoice and Receipt Matching.png',
    live_url: 'https://automated-invoice-reconcillation-frontend.onrender.com/',
    featured: false,
  },
  {
    id: 'whatsapp-ai-agent',
    name: 'AI Agent Platform with WhatsApp',
    description: 'AI agents that automate WhatsApp conversations and business tasks.',
    problem: 'Businesses spend time handling repetitive customer conversations manually.',
    built: 'AI agents that handle conversations and trigger business actions.',
    categories: ['AI Agents', 'Automation'],
    business_categories: ['Customer & Sales', 'Custom AI'],
    tech_stack: ['Twilio', 'WhatsApp', 'Workflow Automation'],
    image: '/assets/Send Your Chat to WhatsApp.png',
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
