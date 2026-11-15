/**
 * src/data/industries.ts
 * 
 * Industry-specific data configuration for Industries landing page and individual pages
 */

export interface Industry {
  id: string;
  name: string;
  headline: string;
  description: string;
  route: string;
  icon: string;
  heroImage?: string;
  challenges: Challenge[];
  solutions: Solution[];
  capabilities: Capability[];
  workflow: WorkflowStep[];
  faqs: FAQ[];
}

export interface Challenge {
  title: string;
  description: string;
}

export interface Solution {
  title: string;
  description: string;
  benefit: string;
}

export interface Capability {
  name: string;
  description?: string;
}

export interface WorkflowStep {
  title: string;
  description?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export const industries: Industry[] = [
  {
    id: "healthcare",
    name: "Healthcare & Life Sciences",
    headline: "Transforming Healthcare Through Intelligent Technology",
    description: "Build smarter healthcare experiences with AI-powered patient engagement, appointment management, document intelligence and connected healthcare workflows.",
    route: "/industries/healthcare/",
    icon: "🏥",
    challenges: [
      {
        title: "Manual Appointment Scheduling",
        description: "Administrative staff spend hours managing appointment requests, dealing with missed calls and scheduling conflicts.",
      },
      {
        title: "Missed Calls and Delayed Responses",
        description: "Patients cannot reach the practice during business hours, leading to frustration and lost appointments.",
      },
      {
        title: "Repetitive Patient Enquiries",
        description: "Staff answer the same questions repeatedly about hours, services, policies, and available appointment slots.",
      },
      {
        title: "Administrative Paperwork Overload",
        description: "Patient intake forms, consent documents, and medical records are processed manually and scattered across systems.",
      },
      {
        title: "Disconnected Information Systems",
        description: "Patient data exists in separate systems, making it difficult to retrieve complete medical histories and coordinate care.",
      },
    ],
    solutions: [
      {
        title: "AI Healthcare Receptionists",
        description: "AI agents that answer calls, screen enquiries, check availability and book appointments automatically.",
        benefit: "Reduce administrative time, eliminate missed calls, improve patient satisfaction.",
      },
      {
        title: "Patient Engagement Automation",
        description: "Automated reminders, follow-ups, and patient communication across SMS, WhatsApp and email.",
        benefit: "Improve appointment attendance, reduce no-shows, enhance patient experience.",
      },
      {
        title: "Healthcare Document Intelligence",
        description: "AI-powered extraction and processing of patient intake forms, consent documents and medical records.",
        benefit: "Eliminate manual data entry, reduce errors, improve data accuracy and compliance.",
      },
      {
        title: "Custom Healthcare Applications",
        description: "Custom software for patient portals, appointment management and integrated EHR systems.",
        benefit: "Streamline operations, improve efficiency, enable connected care delivery.",
      },
    ],
    capabilities: [
      { name: "AI Voice Agents" },
      { name: "Document Intelligence" },
      { name: "Workflow Automation" },
      { name: "CRM Integration" },
      { name: "Custom Web Applications" },
      { name: "API Development" },
    ],
    workflow: [
      { title: "Patient Enquiry", description: "Patient calls or contacts the practice" },
      { title: "AI Receptionist", description: "AI agent answers and handles initial screening" },
      { title: "Appointment Availability", description: "System checks availability in real-time" },
      { title: "Booking Confirmation", description: "Appointment booked and confirmation sent" },
      { title: "Follow-up", description: "Automated reminders sent before appointment" },
    ],
    faqs: [
      {
        question: "Can AI receptionists handle complex patient enquiries?",
        answer: "Yes. AI receptionists can handle routine enquiries like appointment booking, office hours, and common questions. For complex medical questions, they seamlessly transfer calls to staff or take messages for follow-up.",
      },
      {
        question: "What patient data is processed by the AI system?",
        answer: "The AI system processes appointment availability, patient contact information, and healthcare workflows. Sensitive medical records are handled securely and only accessed when authorized for specific workflows.",
      },
      {
        question: "How does the system integrate with existing healthcare software?",
        answer: "We integrate with major healthcare software systems via secure APIs. Integration scope depends on your existing systems—from basic appointment syncing to full EHR integration.",
      },
      {
        question: "Is the system HIPAA compliant?",
        answer: "Our infrastructure supports HIPAA-compliant deployments with encryption, secure data handling, and audit trails. Implementation details depend on your specific requirements and existing compliance framework.",
      },
      {
        question: "How long does implementation take?",
        answer: "Implementation timelines vary. Basic AI receptionist setup typically takes 2-4 weeks. Full healthcare workflow integration can take 6-12 weeks depending on system complexity and customization requirements.",
      },
    ],
  },
  {
    id: "ecommerce",
    name: "Ecommerce & Retail",
    headline: "Creating Smarter Digital Commerce Experiences",
    description: "Improve customer experiences, streamline ecommerce operations and optimize business workflows through AI, automation, integrations and custom digital platforms.",
    route: "/industries/ecommerce-retail/",
    icon: "🛍️",
    challenges: [
      {
        title: "High Customer Support Volumes",
        description: "Support teams are overwhelmed with repetitive questions about orders, shipping, returns, and product information.",
      },
      {
        title: "Manual Order Processing",
        description: "Orders require manual verification, fulfillment coordination, and status updates across multiple channels.",
      },
      {
        title: "Inventory Inconsistencies",
        description: "Inventory data becomes out-of-sync between online and physical stores, leading to overselling and customer disappointment.",
      },
      {
        title: "Cart Abandonment and Poor Engagement",
        description: "High cart abandonment rates and limited personalization lead to lost sales and reduced customer lifetime value.",
      },
      {
        title: "Disconnected Sales Channels",
        description: "Data silos between Shopify, marketplaces, social channels and payment systems make it hard to track customer journeys.",
      },
    ],
    solutions: [
      {
        title: "AI-Powered Customer Support",
        description: "AI agents handle product enquiries, order tracking, returns and refunds across chat, email and social media.",
        benefit: "Reduce support costs, improve response times, handle support 24/7 automatically.",
      },
      {
        title: "Ecommerce Workflow Automation",
        description: "Automate order processing, fulfillment workflows, status updates and customer notifications.",
        benefit: "Reduce manual work, speed up fulfillment, improve operational accuracy.",
      },
      {
        title: "Inventory & Order Management Integration",
        description: "Connect inventory systems, order management and fulfillment across all channels.",
        benefit: "Prevent overselling, improve stock visibility, streamline fulfillment.",
      },
      {
        title: "Custom Commerce Applications",
        description: "Custom storefronts, recommendation engines, personalization systems and loyalty platforms.",
        benefit: "Increase conversion rates, improve customer engagement, boost repeat purchases.",
      },
    ],
    capabilities: [
      { name: "Shopify Integration" },
      { name: "AI Customer Support" },
      { name: "Workflow Automation" },
      { name: "Inventory Synchronization" },
      { name: "Custom Web Platforms" },
      { name: "API Development" },
      { name: "Marketplace Integration" },
    ],
    workflow: [
      { title: "Customer Order", description: "Order placed on Shopify or sales channel" },
      { title: "Order Processing", description: "Order automatically routed and verified" },
      { title: "Inventory Synchronization", description: "Stock levels updated across all channels" },
      { title: "Fulfillment", description: "Items picked and prepared for shipment" },
      { title: "Customer Notification", description: "Shipping confirmation and tracking sent automatically" },
    ],
    faqs: [
      {
        question: "Can the AI handle product-specific customer questions?",
        answer: "Yes. The AI is trained on your product catalog, policies, and FAQs. For product recommendations and comparisons, it can provide accurate information based on your product data.",
      },
      {
        question: "How does inventory synchronization work across channels?",
        answer: "We connect your inventory system to Shopify and other sales channels via APIs. Real-time updates prevent overselling and keep stock levels consistent across all platforms.",
      },
      {
        question: "Can we integrate with multiple marketplaces at once?",
        answer: "Yes. We integrate with multiple marketplaces including Shopify, Amazon, WooCommerce, and others. Multi-channel management can be centralized through custom dashboards.",
      },
      {
        question: "What's the impact on order fulfillment time?",
        answer: "Automated order processing typically reduces fulfillment time by 20-40%. Impact varies based on your current processes and workflow complexity.",
      },
      {
        question: "How do you handle returns and refunds through automation?",
        answer: "The AI can process straightforward returns through automated workflows, generate return labels, and initiate refunds for eligible returns. Complex disputes are escalated to human staff.",
      },
    ],
  },
  {
    id: "manufacturing",
    name: "Manufacturing & Industrial",
    headline: "Modernizing Industrial Operations",
    description: "Improve operational efficiency through intelligent automation, connected business systems, document processing, inventory workflows and custom industrial software.",
    route: "/industries/manufacturing/",
    icon: "🏭",
    challenges: [
      {
        title: "Manual Data Entry",
        description: "Production, procurement and inventory data is entered manually, leading to delays, errors and operational blind spots.",
      },
      {
        title: "Procurement Delays",
        description: "Manual purchase order creation, vendor communication and approval workflows slow down material sourcing.",
      },
      {
        title: "Disconnected Operational Systems",
        description: "ERP, inventory, production and quality systems don't communicate effectively, creating information silos.",
      },
      {
        title: "Document-Heavy Processes",
        description: "Quotations, invoices, purchase orders and compliance documents require manual handling and filing.",
      },
      {
        title: "Limited Operational Visibility",
        description: "Production managers lack real-time visibility into inventory, production status and operational KPIs.",
      },
    ],
    solutions: [
      {
        title: "Intelligent Procurement Automation",
        description: "Automate purchase order creation, vendor communication, approval workflows and payment processing.",
        benefit: "Reduce procurement time, improve supplier relationships, ensure timely material delivery.",
      },
      {
        title: "Document Processing Systems",
        description: "Extract data from invoices, quotations, purchase orders and compliance documents automatically.",
        benefit: "Eliminate data entry errors, reduce processing time, improve document accuracy.",
      },
      {
        title: "Inventory & Operations Management",
        description: "Connect inventory, production and quality systems for real-time operational visibility.",
        benefit: "Reduce inventory costs, improve production efficiency, optimize resource allocation.",
      },
      {
        title: "Custom Industrial Software",
        description: "Build custom applications for production planning, inventory management, quality control and reporting.",
        benefit: "Streamline operations, improve visibility, enable data-driven decisions.",
      },
    ],
    capabilities: [
      { name: "Document Intelligence" },
      { name: "Workflow Automation" },
      { name: "ERP Integration" },
      { name: "Inventory Management" },
      { name: "Custom Industrial Software" },
      { name: "API Development" },
      { name: "Analytics & Dashboards" },
    ],
    workflow: [
      { title: "Purchase Request", description: "Material request submitted by production team" },
      { title: "Document Processing", description: "System processes request and creates PO automatically" },
      { title: "Approval Workflow", description: "PO routed through approval process automatically" },
      { title: "Inventory Update", description: "Received materials automatically updated in inventory" },
      { title: "Operational Reporting", description: "Production and inventory metrics updated in dashboards" },
    ],
    faqs: [
      {
        question: "How does the system integrate with existing ERP systems?",
        answer: "We integrate with major ERP platforms like SAP, Oracle, and Microsoft Dynamics via secure APIs. Integration approach depends on your current ERP system and data requirements.",
      },
      {
        question: "Can document processing handle different supplier formats?",
        answer: "Yes. The system learns to recognize and process documents from different suppliers with varying formats. Initial training typically covers your main suppliers, with continuous learning as new formats are encountered.",
      },
      {
        question: "What kind of operational visibility can we expect?",
        answer: "You get real-time dashboards showing inventory levels, production status, order status, and key operational KPIs. Custom dashboards can be built for specific departments or use cases.",
      },
      {
        question: "How quickly can procurement workflows be automated?",
        answer: "Simple procurement automation can be implemented in 4-6 weeks. Complex multi-stage workflows with approvals and vendor coordination typically take 8-12 weeks.",
      },
      {
        question: "Does the system support multi-location inventory management?",
        answer: "Yes. The system can manage inventory across multiple locations, warehouses and facilities with centralized visibility and automated transfers between locations.",
      },
    ],
  },
  {
    id: "finance-accounting",
    name: "Banking, Finance & Accounting",
    headline: "Making Financial Operations More Intelligent",
    description: "Simplify financial workflows with intelligent document processing, invoice reconciliation, reporting automation, data extraction and integrated business systems.",
    route: "/industries/finance-accounting/",
    icon: "💰",
    challenges: [
      {
        title: "High-Volume Invoice Processing",
        description: "Finance teams process hundreds of invoices daily, requiring manual data entry and validation.",
      },
      {
        title: "Manual Reconciliation",
        description: "Invoice-to-PO matching and bank reconciliation are done manually, taking weeks to complete.",
      },
      {
        title: "Data Inconsistencies",
        description: "Data entry errors, duplicate invoices and inconsistent formatting create reconciliation problems.",
      },
      {
        title: "Repetitive Reporting",
        description: "Financial reports are compiled manually from multiple systems, taking days to prepare.",
      },
      {
        title: "Document Management Complexity",
        description: "Invoices, receipts, contracts and compliance documents are scattered across email, drives and filing systems.",
      },
    ],
    solutions: [
      {
        title: "AI Invoice Processing & Reconciliation",
        description: "Automatically extract invoice data, validate against POs and perform invoice-to-payment matching.",
        benefit: "Reduce processing time from days to hours, eliminate data entry errors, improve cash flow visibility.",
      },
      {
        title: "Financial Document Intelligence",
        description: "Extract and structure data from invoices, receipts, contracts and financial documents automatically.",
        benefit: "Reduce manual data entry by 80-90%, improve data accuracy, enable faster processing.",
      },
      {
        title: "Automated Reporting & Validation",
        description: "Generate financial reports automatically from integrated data sources with built-in validation.",
        benefit: "Prepare reports in hours instead of days, improve accuracy, enable faster decision-making.",
      },
      {
        title: "Intelligent Approval Workflows",
        description: "Automate approval routing based on amounts, vendors and policy rules with audit trails.",
        benefit: "Speed up approvals, ensure policy compliance, create audit-ready documentation.",
      },
    ],
    capabilities: [
      { name: "Document Intelligence" },
      { name: "Workflow Automation" },
      { name: "API Integration" },
      { name: "Accounting Software Integration" },
      { name: "Data Extraction" },
      { name: "Reporting Automation" },
      { name: "Compliance & Audit" },
    ],
    workflow: [
      { title: "Invoice Upload", description: "Invoices uploaded or received via email" },
      { title: "Data Extraction", description: "AI extracts vendor, amount, PO and line item data" },
      { title: "Validation", description: "System validates invoice against PO and policies" },
      { title: "Reconciliation", description: "Invoice matched to PO and payment terms processed" },
      { title: "Approval", description: "Invoice routed for approval or payment processing" },
    ],
    faqs: [
      {
        question: "Can the system handle invoices from different vendors in different formats?",
        answer: "Yes. The AI is trained to recognize and extract data from invoices in various formats, layouts and languages. It learns from your vendor base and improves accuracy over time.",
      },
      {
        question: "How does the system ensure compliance with financial regulations?",
        answer: "The system maintains audit trails for all processing steps, tracks data changes, and can generate compliance reports. Implementation includes validation rules to ensure financial accuracy.",
      },
      {
        question: "Can it integrate with accounting software like QuickBooks or Xero?",
        answer: "Yes. We integrate with major accounting platforms via APIs. Data can be automatically posted to your accounting system after approval, eliminating manual entry.",
      },
      {
        question: "What about three-way matching (PO, receipt, invoice)?",
        answer: "The system supports multi-way matching including PO, goods receipt and invoice. Discrepancies are flagged for review and resolution before payment.",
      },
      {
        question: "How quickly does the system process invoices?",
        answer: "Typical processing time is 30-60 seconds per invoice for data extraction and validation. End-to-end processing (including approvals) depends on your approval workflow.",
      },
    ],
  },
  {
    id: "logistics-supply-chain",
    name: "Logistics & Supply Chain",
    headline: "Connecting and Optimizing Supply Chain Operations",
    description: "Build connected operational workflows through shipment tracking, inventory synchronization, order processing, vendor coordination and intelligent analytics.",
    route: "/industries/logistics-supply-chain/",
    icon: "🚚",
    challenges: [
      {
        title: "Fragmented Tracking Systems",
        description: "Shipment data is scattered across multiple carrier systems, making it difficult to provide customers with accurate tracking information.",
      },
      {
        title: "Manual Shipment Updates",
        description: "Status updates between carriers, warehouses and customers are communicated manually via email or phone calls.",
      },
      {
        title: "Inventory Visibility Issues",
        description: "Real-time inventory visibility across warehouses, in-transit shipments and distribution centers is limited.",
      },
      {
        title: "Vendor Coordination Delays",
        description: "Manual communication with vendors, suppliers and partners slows down order fulfillment and issue resolution.",
      },
      {
        title: "Repetitive Administrative Tasks",
        description: "Picking, packing confirmation, shipment label generation and status updates require manual work.",
      },
    ],
    solutions: [
      {
        title: "Shipment & Order Automation",
        description: "Automate order processing, shipment label generation, carrier selection and status tracking.",
        benefit: "Reduce fulfillment time, improve shipping accuracy, streamline warehouse operations.",
      },
      {
        title: "Inventory Synchronization",
        description: "Connect warehouse management, order management and carrier systems for real-time inventory visibility.",
        benefit: "Prevent stockouts, optimize inventory levels, reduce carrying costs.",
      },
      {
        title: "Vendor Communication Automation",
        description: "Automate status updates, exception notifications and coordination messages to vendors and carriers.",
        benefit: "Improve communication, resolve issues faster, strengthen vendor relationships.",
      },
      {
        title: "Supply Chain Intelligence Dashboards",
        description: "Build dashboards showing order status, shipment tracking, inventory levels and operational KPIs.",
        benefit: "Improve visibility, enable proactive issue management, support data-driven decisions.",
      },
    ],
    capabilities: [
      { name: "Workflow Automation" },
      { name: "Carrier Integration" },
      { name: "Warehouse System Integration" },
      { name: "API Development" },
      { name: "Real-time Tracking" },
      { name: "Vendor Portal Development" },
      { name: "Analytics Dashboards" },
    ],
    workflow: [
      { title: "Order Received", description: "Order received from customer or marketplace" },
      { title: "Shipment Processing", description: "System generates labels and routes shipment automatically" },
      { title: "Tracking Updates", description: "Real-time tracking updates synced from carriers" },
      { title: "Delivery Confirmation", description: "Delivery confirmation received and recorded" },
      { title: "Reporting", description: "Fulfillment metrics and KPIs updated in dashboards" },
    ],
    faqs: [
      {
        question: "How does the system connect to multiple carriers?",
        answer: "We integrate with major carriers via APIs including UPS, FedEx, DHL and regional carriers. Each carrier's tracking data is normalized and unified in your system.",
      },
      {
        question: "Can customers see real-time tracking updates?",
        answer: "Yes. Customers can be provided tracking links with real-time updates. Updates can be pushed via email, SMS or WhatsApp automatically at key milestones.",
      },
      {
        question: "How is inventory visibility maintained across multiple warehouses?",
        answer: "The system connects to warehouse management systems at each location via APIs. Inventory is updated in real-time as orders are placed, picked and shipped.",
      },
      {
        question: "Can the system automate carrier selection?",
        answer: "Yes. Rules-based logic can automate carrier selection based on shipment weight, destination, service level and cost. Machine learning can optimize carrier selection over time based on performance metrics.",
      },
      {
        question: "What's included in the supply chain dashboard?",
        answer: "Dashboards can include order status, shipment tracking, inventory levels, carrier performance, delivery confirmation rates, and custom KPIs specific to your business.",
      },
    ],
  },
  {
    id: "professional-services",
    name: "Professional Services & Consulting",
    headline: "Empowering Service Businesses with Intelligent Systems",
    description: "Improve client management, automate repetitive workflows and streamline business operations through AI assistants, CRM integrations, knowledge systems and custom applications.",
    route: "/industries/professional-services/",
    icon: "💼",
    challenges: [
      {
        title: "Repetitive Administrative Work",
        description: "Teams spend hours on data entry, scheduling, follow-ups and document management instead of client work.",
      },
      {
        title: "Manual Lead Management",
        description: "Lead qualification, nurturing and routing is done manually, leading to slow response times and missed opportunities.",
      },
      {
        title: "Scattered Client Information",
        description: "Client data is spread across email, spreadsheets and multiple systems, making it hard to get a complete client view.",
      },
      {
        title: "Slow Proposal Preparation",
        description: "Proposals require manual assembly from templates, making it difficult to respond quickly to client requests.",
      },
      {
        title: "Inefficient Client Onboarding",
        description: "New client onboarding involves manual steps, document collection and repeated information requests.",
      },
    ],
    solutions: [
      {
        title: "AI Knowledge Assistants",
        description: "AI assistants that answer client questions, help with initial enquiries and provide service information automatically.",
        benefit: "Improve response times, provide 24/7 support, free up staff for high-value client work.",
      },
      {
        title: "Intelligent CRM Automation",
        description: "Automate lead qualification, client follow-ups, meeting scheduling and communication across email and calendars.",
        benefit: "Improve lead conversion, reduce manual work, provide better client experience.",
      },
      {
        title: "Proposal & Document Automation",
        description: "Generate proposals, contracts and engagement letters automatically from templates and client data.",
        benefit: "Reduce proposal turnaround time from days to hours, improve consistency, win more clients.",
      },
      {
        title: "Client Onboarding Systems",
        description: "Automate client data collection, document uploads, form processing and welcome communications.",
        benefit: "Reduce onboarding time, improve client experience, ensure consistent processes.",
      },
    ],
    capabilities: [
      { name: "AI Assistants" },
      { name: "CRM Integration" },
      { name: "Workflow Automation" },
      { name: "Document Intelligence" },
      { name: "Custom Web Applications" },
      { name: "Knowledge Management" },
      { name: "Email & Calendar Integration" },
    ],
    workflow: [
      { title: "New Enquiry", description: "Potential client submits enquiry through website or email" },
      { title: "Lead Qualification", description: "AI qualifies lead based on predefined criteria" },
      { title: "CRM Entry", description: "Qualified lead added to CRM with contact details" },
      { title: "Proposal Preparation", description: "Proposal generated automatically from templates and data" },
      { title: "Client Follow-up", description: "Automated follow-up sent at appropriate intervals" },
    ],
    faqs: [
      {
        question: "How does the AI assistant integrate with our CRM?",
        answer: "The AI assistant connects to your CRM via APIs. Conversations are logged as activities, and client data is synchronized automatically.",
      },
      {
        question: "Can the system handle service-specific questions?",
        answer: "Yes. The AI is trained on your service offerings, pricing, team expertise and policies. It can answer service questions and route complex enquiries to the right team member.",
      },
      {
        question: "How does proposal automation work?",
        answer: "Templates are created with variable fields. The system pulls client information from your CRM and generates personalized proposals automatically. Customization is easy through a simple interface.",
      },
      {
        question: "What if a lead doesn't fit your ideal client profile?",
        answer: "Leads can be scored and categorized by fit. Poor-fit leads can be replied to automatically or routed to a waitlist. Your team can override automatic scoring.",
      },
      {
        question: "How long does it take to set up?",
        answer: "Basic setup including AI assistant, CRM integration and workflow automation typically takes 3-6 weeks. Custom proposal templates and more complex workflows may take longer.",
      },
    ],
  },
];

// Card data for the Industries landing page
export const industryCards = industries.map((industry) => ({
  name: industry.name,
  headline: industry.headline,
  description: industry.description,
  route: industry.route,
}));
