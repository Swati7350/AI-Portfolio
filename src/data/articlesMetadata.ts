/**
 * src/data/articlesMetadata.ts
 * 
 * Blog articles metadata (structure without full content)
 */

export type ArticleCategory = 
  | 'AI & Machine Learning'
  | 'AI Agents & Automation'
  | 'Conversational AI & Voice Technology'
  | 'Document Intelligence & RAG'
  | 'Data Annotation & AI Training'
  | 'Software & SaaS Development'
  | 'Business Automation'
  | 'Technology & Industry Insights';

export interface Article {
  id: string;
  title: string;
  slug: string;
  category: ArticleCategory;
  excerpt: string;
  description: string;
  content: string;
  publishedDate: string;
  readingTime: number;
  author: string;
  featuredImage: string;
  imageAlt: string;
  featured: boolean;
  seoTitle: string;
  seoDescription: string;
  relatedArticles: string[];
}

// Simplified metadata for articles
export const articleMetadata: Omit<Article, 'content'>[] = [
  {
    id: 'multi-agent-ai-systems',
    title: 'Understanding Multi-Agent AI Systems: How Intelligent Agents Work Together',
    slug: 'understanding-multi-agent-ai-systems',
    category: 'AI Agents & Automation',
    excerpt: 'Discover how multiple specialised AI agents collaborate, coordinate tasks and solve complex business problems through intelligent orchestration.',
    description: 'Explore multi-agent architectures, orchestration patterns, specialised agent roles and real-world business applications that drive operational efficiency.',
    publishedDate: '2024-11-15',
    readingTime: 12,
    author: 'Paras AI Innovations',
    featuredImage: '/assets/AI-Agents-Architecture.png',
    imageAlt: 'Multi-Agent AI System Architecture with Orchestrator and Specialist Agents',
    featured: true,
    seoTitle: 'Multi-Agent AI Systems: How Intelligent Agents Work Together | Paras AI',
    seoDescription: 'Learn how multi-agent architectures enable AI systems to collaborate and solve complex business problems through intelligent orchestration and specialization.',
    relatedArticles: ['rag-business-documents', 'ai-voice-agents', 'business-automation-ai'],
  },
  {
    id: 'rag-business-documents',
    title: 'What Is RAG? Making Business Documents Searchable with AI',
    slug: 'rag-retrieval-augmented-generation-business-documents',
    category: 'Document Intelligence & RAG',
    excerpt: 'Understand how retrieval-augmented generation enables AI systems to retrieve relevant information from business documents and provide contextual answers.',
    description: 'Explore how RAG technology enhances AI with access to your document knowledge base, enabling accurate, contextual responses grounded in real data.',
    publishedDate: '2024-11-10',
    readingTime: 10,
    author: 'Paras AI Innovations',
    featuredImage: '/assets/RAG-Retrieval-Augmented-Generation.png',
    imageAlt: 'RAG System Architecture showing document retrieval and generation pipeline',
    featured: false,
    seoTitle: 'RAG Technology: Retrieval-Augmented Generation for Business Documents | Paras AI',
    seoDescription: 'Explore how RAG enables AI systems to search and synthesize information from your business documents with accuracy and transparency.',
    relatedArticles: ['multi-agent-ai-systems', 'data-annotation-foundation', 'llm-finetuning-vs-rag'],
  },
  {
    id: 'ai-voice-agents',
    title: 'AI Voice Agents: Transforming Customer Conversations',
    slug: 'ai-voice-agents-transforming-customer-conversations',
    category: 'Conversational AI & Voice Technology',
    excerpt: 'Explore how AI voice agents can answer calls, handle customer queries, collect information and manage appointment workflows.',
    description: 'Discover the technology behind AI-powered voice agents, their business applications, and how they enhance customer experience while reducing operational costs.',
    publishedDate: '2024-11-05',
    readingTime: 11,
    author: 'Paras AI Innovations',
    featuredImage: '/assets/AI-Voice-Agents.png',
    imageAlt: 'AI Voice Agent handling customer conversations and call routing',
    featured: false,
    seoTitle: 'AI Voice Agents: Intelligent Voice Technology for Customer Service | Paras AI',
    seoDescription: 'Learn how AI voice agents transform customer interactions through intelligent call handling, appointment scheduling and 24/7 support automation.',
    relatedArticles: ['multi-agent-ai-systems', 'business-automation-ai', 'ai-customer-support-automation'],
  },
  {
    id: 'data-annotation-foundation',
    title: 'Data Annotation: The Foundation of Reliable AI Models',
    slug: 'data-annotation-foundation-reliable-ai-models',
    category: 'Data Annotation & AI Training',
    excerpt: 'Understand image, video, audio and text annotation, dataset preparation and the importance of data quality in AI development.',
    description: 'Explore why data annotation is critical for AI success, annotation methodologies, quality assurance and best practices for building training datasets.',
    publishedDate: '2024-10-28',
    readingTime: 13,
    author: 'Paras AI Innovations',
    featuredImage: '/assets/Data-Annotation-AI-Training.png',
    imageAlt: 'Data annotation process with various labeling techniques for AI training',
    featured: false,
    seoTitle: 'Data Annotation: Building High-Quality AI Training Datasets | Paras AI',
    seoDescription: 'Explore data annotation methodologies, quality assurance and best practices for creating reliable training datasets for AI models.',
    relatedArticles: ['llm-finetuning-vs-rag', 'rag-business-documents', 'multi-agent-ai-systems'],
  },
  {
    id: 'saas-development',
    title: 'Building a SaaS Product: From Idea to Scalable Application',
    slug: 'building-saas-product-idea-to-scalable-application',
    category: 'Software & SaaS Development',
    excerpt: 'Explore the key stages of developing a SaaS platform, from product planning and MVP development to architecture and scaling.',
    description: 'Learn the complete journey of SaaS development: validation, MVP strategy, technology choices, architecture patterns and scaling for growth.',
    publishedDate: '2024-10-20',
    readingTime: 14,
    author: 'Paras AI Innovations',
    featuredImage: '/assets/SaaS-Development.png',
    imageAlt: 'SaaS product development lifecycle from MVP to scalable platform',
    featured: false,
    seoTitle: 'Building SaaS Products: Complete Guide from Idea to Scale | Paras AI',
    seoDescription: 'Learn the complete SaaS development journey: validation, MVP strategy, product-market fit, architecture decisions and scaling for growth.',
    relatedArticles: ['business-automation-ai', 'software-development-practices', 'ai-customer-support-automation'],
  },
  {
    id: 'business-automation-ai',
    title: 'How AI Is Transforming Business Process Automation',
    slug: 'ai-transforming-business-process-automation',
    category: 'Business Automation',
    excerpt: 'Discover how AI-powered workflows, intelligent agents and third-party integrations can simplify complex business operations.',
    description: 'Explore how AI enhances business automation beyond rule-based systems, enabling adaptive workflows that learn and improve over time.',
    publishedDate: '2024-10-12',
    readingTime: 12,
    author: 'Paras AI Innovations',
    featuredImage: '/assets/Business-Automation-AI.png',
    imageAlt: 'AI-powered business process automation workflow diagram',
    featured: false,
    seoTitle: 'AI-Powered Business Process Automation: Transforming Operations | Paras AI',
    seoDescription: 'Explore how AI transforms business automation beyond rules, enabling adaptive workflows that learn and scale across your organization.',
    relatedArticles: ['multi-agent-ai-systems', 'ai-voice-agents', 'ai-customer-support-automation'],
  },
  {
    id: 'llm-finetuning-vs-rag',
    title: 'LLM Fine-Tuning vs RAG: Choosing the Right Approach',
    slug: 'llm-finetuning-vs-rag-choosing-right-approach',
    category: 'AI & Machine Learning',
    excerpt: 'Understand the differences between fine-tuning and retrieval-augmented generation, including when each approach makes sense.',
    description: 'Compare fine-tuning and RAG approaches for customizing language models with your data, including tradeoffs and decision framework.',
    publishedDate: '2024-10-05',
    readingTime: 11,
    author: 'Paras AI Innovations',
    featuredImage: '/assets/LLM-Finetuning-RAG.png',
    imageAlt: 'Comparison of fine-tuning and RAG approaches for customizing language models',
    featured: false,
    seoTitle: 'Fine-Tuning vs RAG: Choosing the Right Approach for Your LLM | Paras AI',
    seoDescription: 'Compare fine-tuning and retrieval-augmented generation for customizing language models, with decision framework and cost analysis.',
    relatedArticles: ['rag-business-documents', 'multi-agent-ai-systems', 'data-annotation-foundation'],
  },
  {
    id: 'ai-customer-support-automation',
    title: 'Beyond Chatbots: Building Intelligent AI Assistants for Businesses',
    slug: 'beyond-chatbots-intelligent-ai-assistants-businesses',
    category: 'AI Agents & Automation',
    excerpt: 'Explore how modern AI assistants can move beyond answering questions to reasoning, interacting with business systems and completing tasks.',
    description: 'Learn how to build AI assistants that go beyond chatbot limitations, integrating with your business systems and autonomously handling complex workflows.',
    publishedDate: '2024-09-28',
    readingTime: 12,
    author: 'Paras AI Innovations',
    featuredImage: '/assets/Intelligent-AI-Assistants.png',
    imageAlt: 'Intelligent AI Assistant architecture with business system integration',
    featured: false,
    seoTitle: 'Intelligent AI Assistants: Beyond Chatbots to Autonomous Problem-Solving | Paras AI',
    seoDescription: 'Build AI assistants that reason, take action and integrate with business systems, beyond traditional chatbot limitations.',
    relatedArticles: ['multi-agent-ai-systems', 'ai-voice-agents', 'business-automation-ai'],
  },
];

export const articleCategories: ArticleCategory[] = [
  'AI & Machine Learning',
  'AI Agents & Automation',
  'Conversational AI & Voice Technology',
  'Document Intelligence & RAG',
  'Data Annotation & AI Training',
  'Software & SaaS Development',
  'Business Automation',
  'Technology & Industry Insights',
];

/**
 * Get featured articles
 */
export const getFeaturedArticles = (articles: Article[]) => 
  articles.filter((a) => a.featured);

/**
 * Get article by ID
 */
export const getArticleById = (articles: Article[], id: string) => 
  articles.find((a) => a.id === id);

/**
 * Get articles by category
 */
export const getArticlesByCategory = (articles: Article[], category: ArticleCategory) => 
  articles.filter((a) => a.category === category);

/**
 * Get related articles
 */
export const getRelatedArticles = (articles: Article[], articleId: string, limit: number = 3) => {
  const article = getArticleById(articles, articleId);
  if (!article) return [];
  
  return article.relatedArticles
    .map(id => getArticleById(articles, id))
    .filter(Boolean)
    .slice(0, limit) as Article[];
};
