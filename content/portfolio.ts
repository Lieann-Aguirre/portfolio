/** Edit all personal information and public-facing copy here.
 * Draft projects stay in this source file only. Publish only after checking every claim.
 * Use [ADD ...] for missing values; the UI suppresses incomplete fields.
 */
export interface SkillCategory { id: string; name: string; shortName: string; description: string; skills: string[] }
export interface Experience { role: string; company: string; employment: string; dates: string; location: string; description: string; responsibilities: string[] }
export interface Service { title: string; description: string; icon: string }
export interface Education { institution: string; program: string; completionDate?: string; description: string; training: { label: string; tools: string[] }[] }
export interface Certification { title: string; issuer: string; date?: string; url?: string; verified: boolean }
export interface Project {
  slug: string; title: string; status: "draft" | "published"; summary: string;
  categories: string[]; technologies: string[]; role?: string;
  problem?: string; implementation?: string[]; results?: string[];
  metrics?: { label: string; value: string; verified: boolean }[];
  screenshots?: { src: string; alt: string }[]; githubUrl?: string; demoUrl?: string;
}
export const portfolio = {
  profile: {
    name: "Julie Ann Aguirre", givenNames: "Julie Ann", familyName: "Aguirre", initials: "JA", location: "Manila, Philippines",
    title: "IT Systems Administrator & Business Automation Specialist",
    headline: "Microsoft 365 Administrator | IT Systems Administrator | Business Automation Specialist | Google Workspace Administrator | Technical Support",
    value: "Helping businesses run smarter through reliable IT systems, cloud administration, CRM management, and intelligent workflow automation.",
    description: "With 6+ years of experience in IT administration and technical support, I specialize in Microsoft 365, Google Workspace, Dynamics 365, GoHighLevel, email marketing systems, and business automation. I support organizations through dependable technical solutions and streamlined operations.",
    availability: "Open to remote roles & client projects", availabilityDetail: "Available for remote employment, freelance engagements, and contract-based technical projects.",
    resumeUrl: "/julie-ann-aguirre-resume.pdf", photo: "", photoAlt: "Professional portrait of Julie Ann Aguirre",
    photoPlaceholder: "IT systems. Human connections.",
    biography: [
      "I'm Julie Ann Aguirre, an IT Systems Administrator and Business Automation Specialist with over six years of experience supporting businesses through technology.",
      "My expertise includes Microsoft 365 administration, Google Workspace management, identity and access management, email infrastructure, technical troubleshooting, and business process automation.",
      "I have experience working with enterprise platforms such as Microsoft Entra ID, Exchange Online, Intune, SharePoint, Microsoft Teams, Dynamics 365, and Power Automate.",
      "Beyond traditional IT support, I work with CRM systems, email marketing platforms, lead generation tools, recruitment software, and workflow automation platforms such as GoHighLevel, Zapier, and Make.com.",
      "I enjoy connecting technology with real business needs, whether that means resolving technical issues, improving workflows, managing business systems, or reducing repetitive manual tasks.",
      "My background also includes full-stack web development training through Zuitt, which supports my understanding of web technologies and system integrations.",
    ],
  },
  contact: {
    email: "lieannaguirre@gmail.com",
    social: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/julie-ann-aguirre-764919440/" },
      { label: "GitHub", url: "https://github.com/Lieann-Aguirre" },
    ],
    title: "Let's Work Together.",
    description: "Whether you're hiring an IT and automation professional for your team or looking for technical support and workflow solutions for your business, I'd love to connect.",
    cards: [
      { title: "Hiring for Your Team?", description: "Looking for an experienced IT Systems Administrator, Microsoft 365 specialist, or automation professional?", action: "View My Resume", kind: "resume" },
      { title: "Need Technical or Automation Support?", description: "Need help managing your business systems, integrating platforms, improving email operations, or automating repetitive tasks?", action: "Discuss Your Project", kind: "email" },
    ],
    emailSubject: "IT and automation enquiry",
  },
  navigation: [
    { label: "Home", href: "/" }, { label: "About", href: "/about/" },
    { label: "Skills", href: "/skills/" }, { label: "Experience", href: "/experience/" },
    { label: "Projects", href: "/projects/" }, { label: "Services", href: "/services/" }, { label: "Contact", href: "/contact/" },
  ],
  highlights: [
    { value: "6+", label: "Years in IT administration & support", icon: "experience" },
    { value: "Cloud", label: "Microsoft 365 & Google Workspace", icon: "cloud" },
    { value: "Connected", label: "Business processes & workflow automation", icon: "automation" },
    { value: "Organized", label: "CRM, lead generation & recruitment systems", icon: "crm" },
  ],
  platforms: ["Microsoft 365", "Google Workspace", "Dynamics 365", "GoHighLevel", "Zapier", "Make.com", "Power Automate"],
  skills: [
    { id: "microsoft", name: "Microsoft 365 Administration", shortName: "Microsoft 365", description: "Cloud productivity, identity, email, and device administration.", skills: ["Microsoft 365 Admin Center", "Microsoft Exchange Online", "Microsoft Entra ID (Azure Active Directory)", "Microsoft Intune", "Microsoft Teams", "Microsoft SharePoint Online", "Microsoft OneDrive for Business", "Microsoft Dynamics 365", "Microsoft Power Automate", "Microsoft Power Apps", "Microsoft Azure", "Microsoft 365 Licensing and User Management", "Microsoft 365 Security and Access Management", "Multi-Factor Authentication (MFA)", "Conditional Access", "Mail Flow Troubleshooting", "Mailbox Management and Permissions", "Email Migration Support", "Device Enrollment and Compliance", "Application Deployment Support", "Identity and Access Management", "Microsoft 365 Technical Support"] },
    { id: "google", name: "Google Workspace Administration", shortName: "Google Workspace", description: "Secure accounts, organized collaboration, and dependable access.", skills: ["Google Workspace Admin Console", "Gmail Administration", "Google Drive", "Shared Drives", "Google Groups", "Google Calendar", "Google Meet", "User Provisioning and Deprovisioning", "License Management", "Organizational Units", "Access and Permission Management", "Security Policies", "Account Recovery and Troubleshooting"] },
    { id: "crm", name: "CRM and Business Management Platforms", shortName: "CRM & Business", description: "Connected contacts, pipelines, and business operations.", skills: ["Microsoft Dynamics 365", "GoHighLevel (HighLevel)", "HubSpot CRM", "Zoho CRM", "CRM Contact Management", "Lead Pipeline Management", "Workflow and Pipeline Automation", "CRM Integrations", "Contact Segmentation", "Lead Tracking", "CRM Data Management"] },
    { id: "automation", name: "Workflow Automation and Integrations", shortName: "Automation", description: "Practical workflows that connect platforms and reduce repetitive tasks.", skills: ["GoHighLevel Workflows", "Zapier", "Make.com", "Microsoft Power Automate", "Microsoft Power Apps", "ClickUp Automations", "Shopify Automations", "Workflow Design", "Business Process Automation", "Cross-Platform Integrations", "Automated Notifications", "Lead Routing", "Automated Follow-Ups", "Process Optimization"] },
    { id: "email", name: "Email Marketing and Deliverability", shortName: "Email & Deliverability", description: "Campaign operations backed by reliable email infrastructure.", skills: ["Email Marketing Operations", "Email Campaign Management", "Email Outreach Automation", "Email Sequence Management", "Email Personalization", "Email Deliverability", "Domain Authentication", "SPF Configuration", "DKIM Configuration", "DMARC Configuration", "DNS Management", "Mail Flow Troubleshooting", "Domain Health Monitoring", "Sender Reputation Monitoring", "Cold Email Outreach", "Reply.io", "Instantly", "GoHighLevel Email Campaigns", "Audience Segmentation", "Lead Nurturing Workflows"] },
    { id: "leads", name: "Lead Generation and Sales Operations", shortName: "Lead Generation", description: "Research, enrichment, outreach, and sales pipeline support.", skills: ["Clay", "Apollo.io", "Reply.io", "Instantly", "Lead Generation", "Lead List Building", "Lead Enrichment", "Prospect Research", "Contact Data Management", "Outreach Campaign Management", "Sales Pipeline Support", "Automated Follow-Up Workflows", "B2B Outreach Operations"] },
    { id: "support", name: "IT Support and Systems Administration", shortName: "IT Support", description: "Reliable systems and responsive support for remote teams.", skills: ["IT Administration", "Technical Troubleshooting", "Remote Technical Support", "User Account Administration", "Software Troubleshooting", "Hardware Troubleshooting", "IT Onboarding and Offboarding", "Access Control", "Identity Management", "Device Management", "System Configuration", "License Management", "Security Configuration", "Technical Documentation", "End-User Support", "Troubleshooting and Escalation", "VPN Administration", "Cloud-Based Business Systems"] },
    { id: "security", name: "Networking, DNS, and Security", shortName: "DNS & Security", description: "Domain health, account protection, and access controls.", skills: ["DNS Configuration", "Cloudflare", "SPF, DKIM, and DMARC", "Domain Management", "VPN Management", "NordVPN", "MFA", "Conditional Access", "Security Policies", "Account Security", "Access Permissions", "Password Management", "LastPass", "Email Security", "Domain Health Monitoring"] },
    { id: "recruitment", name: "Recruitment and HR Technology", shortName: "Recruitment & HR", description: "Recruitment platforms and workflows that support hiring operations.", skills: ["Workable", "Zoho Recruit", "RecruitBot", "Zoho People", "Zoho Bookings", "Applicant Tracking Systems", "Recruitment Pipeline Management", "Candidate Database Management", "Recruitment Workflow Automation", "Interview Scheduling Systems", "HR Systems Administration"] },
    { id: "collaboration", name: "Project Management and Collaboration", shortName: "Collaboration", description: "Organized work, documentation, and connected remote teams.", skills: ["ClickUp", "Trello", "Slack", "Notion", "Microsoft Teams", "Google Workspace Collaboration", "Task Management", "Workflow Coordination", "Process Documentation", "Remote Team Collaboration"] },
    { id: "ai", name: "AI Tools and AI-Assisted Workflows", shortName: "AI Workflows", description: "AI-assisted research, content, and process design.", skills: ["ChatGPT", "Claude", "Grok", "AI-Assisted Research", "AI-Assisted Content Creation", "AI-Assisted Workflow Design", "AI-Assisted Process Optimization"] },
    { id: "business", name: "Additional Business and IT Tools", shortName: "Business Tools", description: "Everyday platforms supporting business and IT operations.", skills: ["Shopify", "Hubstaff", "Zoiper", "ReceptionHQ", "DocuSign", "Cloudflare", "NordVPN", "LastPass", "HubSpot", "Gamma", "Replit Agent", "IntelliJ IDEA"] },
  ] satisfies SkillCategory[],
  experience: [
    { role: "Information Technology Administrator", company: "Keller Executive Search", employment: "Full-time", dates: "February 2024 to Present", location: "United States, Remote", description: "Manage IT systems, business applications, technical support, and workflow automation across company operations.", responsibilities: ["Administer Google Workspace and Microsoft 365 environments.", "Manage user accounts, licensing, access permissions, and security policies.", "Support Microsoft Entra ID, Exchange Online, Intune, Teams, SharePoint, and Dynamics 365.", "Configure email authentication and DNS records.", "Provide technical troubleshooting and employee onboarding and offboarding support.", "Manage business systems, VPNs, VoIP applications, and time-tracking platforms.", "Build automation workflows using Zapier, Make.com, Power Automate, and GoHighLevel.", "Support lead generation through Clay, Apollo.io, and Reply.io.", "Maintain recruitment platforms such as Workable, Zoho Recruit, and RecruitBot.", "Support HR systems and collaboration tools."] },
    { role: "Microsoft 365 Technical Support", company: "Microsoft", employment: "Part-time", dates: "September 2021 to May 2025", location: "United States, Remote", description: "Provided technical support for Microsoft 365 customers and administrators, resolving issues across cloud productivity, identity, email, and device management services.", responsibilities: ["Troubleshot Exchange Online mail flow, mailbox permissions, and delivery issues.", "Supported mailbox migration and email authentication.", "Resolved Microsoft Entra ID sign-in, MFA, and account access issues.", "Assisted with conditional access and license assignment.", "Troubleshot Microsoft Intune enrollment, compliance, and device configuration.", "Supported Microsoft Teams, SharePoint, and OneDrive.", "Documented technical resolutions and escalated complex support cases.", "Explained technical solutions to both technical and non-technical users."] },
  ] satisfies Experience[],
  services: [
    { title: "Microsoft 365 Administration", description: "Account management, email systems, identity and access, device management, and technical support.", icon: "cloud" },
    { title: "Google Workspace Administration", description: "User management, security configuration, permissions, licensing, and collaboration tools.", icon: "workspace" },
    { title: "Business Automation", description: "Workflow design and automation using GoHighLevel, Zapier, Make.com, and Power Automate.", icon: "automation" },
    { title: "CRM Administration and Operations", description: "CRM organization, pipeline management, contact data, and automation support.", icon: "crm" },
    { title: "Email Marketing and Deliverability", description: "Email campaign operations, outreach workflows, domain authentication, and deliverability troubleshooting.", icon: "email" },
    { title: "Lead Generation Operations", description: "Prospect research, lead enrichment, outreach platforms, and campaign support.", icon: "leads" },
    { title: "IT Systems and Technical Support", description: "Cloud business applications, access management, onboarding, troubleshooting, and systems administration.", icon: "support" },
    { title: "Recruitment Technology Support", description: "Recruitment software administration, candidate pipeline tools, and workflow automation.", icon: "recruitment" },
  ] satisfies Service[],
  education: [{ institution: "Zuitt Coding Bootcamp", program: "Full Stack Web Development", completionDate: "[ADD DATE]", description: "Completed full-stack web development training, building foundational knowledge of web technologies, application development, and technical problem-solving.", training: [
    { label: "Programming languages", tools: ["PHP", "JavaScript"] },
    { label: "Frontend training", tools: ["React.js"] },
    { label: "Backend training", tools: ["PHP", "JavaScript", "Laravel"] },
    { label: "Database training", tools: ["MySQL", "NoSQL"] },
  ] }] satisfies Education[],
  certifications: [] as Certification[],
  // Private templates. Confirm implementations and results before setting status to published.
  projects: [
    { slug: "microsoft-365-user-lifecycle", title: "Microsoft 365 Administration and User Lifecycle Management", status: "draft", summary: "Identity, licensing, security, and administrative processes.", categories: ["Microsoft 365", "IT Administration"], technologies: ["Microsoft 365 Admin Center", "Microsoft Entra ID", "Dynamics 365", "Exchange Online", "Teams", "SharePoint", "PowerShell", "Microsoft Defender for Office 365"], role: "Microsoft 365 Technical Administrator", problem: "User onboarding, offboarding, licensing, and account security required consistent administrative processes.", implementation: ["Managed tenant administration and user accounts.", "Configured provisioning, licensing, and deprovisioning.", "Implemented MFA and conditional access.", "Managed mailboxes, shared mailboxes, and distribution groups.", "Supported Teams, SharePoint, and Dynamics 365 access.", "Monitored tenant health and documented procedures."], results: ["More consistent user lifecycle administration.", "Improved security controls and access management."], metrics: [] },
    { slug: "business-workflow-optimization", title: "Business Process Automation and Workflow Optimization", status: "draft", summary: "Cross-platform workflows and repetitive process automation.", categories: ["Automation"], technologies: ["Power Automate", "Zapier", "Make.com", "GoHighLevel", "Microsoft 365"], role: "Automation Specialist / Technical Administrator", problem: "Manual data entry and delayed follow-ups created operational inefficiencies.", implementation: ["Built workflows between business systems.", "Automated lead distribution and notifications.", "Created approval and escalation flows.", "Integrated CRM and communication platforms."], results: ["Faster process execution and improved response consistency."], metrics: [] },
    { slug: "workspace-migration", title: "Google Workspace Administration and Microsoft 365 Migration", status: "draft", summary: "Workspace administration and migration planning.", categories: ["Google Workspace", "Microsoft 365"], technologies: ["Google Workspace", "Microsoft 365", "Exchange Online", "Microsoft Migration Manager", "PowerShell"], role: "Google Workspace & Microsoft 365 Migration Specialist", problem: "Secure Workspace administration and Microsoft 365 migration required careful planning.", implementation: ["Managed users, groups, licensing, organizational units, and shared drives.", "Planned mailbox, contact, calendar, and data migrations.", "Validated migrated data and supported users."], results: ["Improved access administration and collaboration."], metrics: [] },
    { slug: "crm-lead-automation", title: "CRM Pipeline Management and Lead Generation Automation", status: "draft", summary: "Pipeline visibility and consistent lead follow-up.", categories: ["CRM", "Lead Generation", "Automation"], technologies: ["GoHighLevel", "Dynamics 365", "Zapier", "Make.com"], role: "CRM Administrator & Lead Generation Specialist", problem: "Lead tracking and inconsistent follow-ups limited pipeline visibility.", implementation: ["Built pipeline stages and opportunity tracking.", "Automated lead assignment and nurturing.", "Managed contact segmentation and follow-up campaigns."], results: ["Improved pipeline visibility and sales-process consistency."], metrics: [] },
    { slug: "email-infrastructure-deliverability", title: "Email Infrastructure Management and Deliverability Optimization", status: "draft", summary: "Email authentication and campaign infrastructure.", categories: ["Email Marketing", "IT Administration"], technologies: ["Exchange Online", "Google Workspace", "DNS", "GoHighLevel"], role: "Email Deliverability Specialist", problem: "Domain authentication and sender reputation affected communication reliability.", implementation: ["Configured SPF, DKIM, and DMARC.", "Troubleshot delivery and reputation issues.", "Built segmentation and outreach workflows.", "Monitored deliverability and engagement."], results: ["Stronger domain authentication and consistent sending practices."], metrics: [] },
  ] as Project[],
  projectCategories: ["Microsoft 365", "Google Workspace", "IT Administration", "Automation", "CRM", "Email Marketing", "Lead Generation", "Recruitment Systems"],
  seo: {
    // Set your real https://custom-domain or https://project.pages.dev before production builds.
    siteUrl: "https://lieannaguirre.com", title: "Julie Ann Aguirre | Microsoft 365 Administrator & Automation Specialist",
    description: "Explore the professional portfolio of Julie Ann Aguirre, an IT Systems Administrator specializing in Microsoft 365, Google Workspace, Dynamics 365, GoHighLevel, technical support, and business automation.",
  },
  pages: {
    home: { eyebrow: "IT ADMINISTRATION + BUSINESS AUTOMATION", title: "Technology that works. Operations that flow.", description: "Reliable systems. Connected platforms. Better ways of working." },
    about: { eyebrow: "THE PERSON BEHIND THE SYSTEMS", title: "Technical expertise. Business understanding.", description: "Connecting dependable technology with the people and operations that rely on it." },
    skills: { eyebrow: "MY TECHNICAL TOOLKIT", title: "The right tools. Connected thinking.", description: "Explore the platforms and practical capabilities I bring to IT administration and business operations." },
    experience: { eyebrow: "PROFESSIONAL EXPERIENCE", title: "Hands-on support. Enterprise perspective.", description: "Experience supporting cloud environments, business systems, and the people who use them." },
    projects: { eyebrow: "PROJECTS & CASE STUDIES", title: "A closer look at the work.", description: "Approved case studies will explore the context, approach, and outcomes behind my work." },
    services: { eyebrow: "HOW I CAN HELP", title: "Your technology. Working together.", description: "Practical IT administration and automation support for businesses, agencies, and remote teams." },
    contact: { eyebrow: "START A CONVERSATION", title: "Let's Work Together.", description: "Remote opportunities. Technical projects. Better business operations." },
  },
  ui: {
    resume: "Download Resume", experience: "View My Experience", services: "Explore My Services", contact: "Contact Me", expertise: "Explore My Expertise", about: "More About Me", allSkills: "Explore All Skills", allExperience: "View Full Experience", allServices: "Explore All Services",
    skip: "Skip to content", theme: "Toggle color theme", menu: "Toggle navigation menu", backTop: "Back to top", copy: "Copy email address", copied: "Email copied", copyFailed: "Copy unavailable. Please use the email link.", mainNavigation: "Main", mobileNavigation: "Mobile", visualLabel: "IT + AUTOMATION",
    coreLabel: "BUILT AROUND YOUR BUSINESS", coreTitle: "Enterprise IT meets everyday efficiency.", coreDescription: "From secure accounts to connected workflows, I help keep the technical side of your business running smoothly.",
    aboutLabel: "A LITTLE ABOUT ME", aboutTitle: "Systems thinking. People-first support.",
    skillLabel: "PLATFORMS & CAPABILITIES", skillTitle: "A connected technical toolkit.", skillDescription: "Cloud administration, business platforms, and automation tools, brought together with practical experience.",
    experienceLabel: "WHERE I'VE CONTRIBUTED", experienceTitle: "Experience that connects the dots.",
    serviceLabel: "PRACTICAL SUPPORT FOR YOUR BUSINESS", serviceTitle: "One partner. Connected expertise.",
    contactLabel: "TWO WAYS TO WORK TOGETHER", search: "Search skills and platforms", searchPlaceholder: "Search a tool or capability...", category: "Filter by category", all: "All categories", result: "skills found", noResults: "No matching skills", noResultsDetail: "Try another search or choose a different category.", reset: "Reset filters", expand: "View skills", collapse: "Hide skills", projectFilter: "Filter projects", technologyFilter: "Filter by technology", allTechnologies: "All technologies", allProjects: "All projects", projectEmpty: "Good work deserves a clear story.", projectEmptyDescription: "Case studies are being prepared for publication. In the meantime, explore my experience or get in touch to discuss your needs.", projectNoResults: "No projects match these filters.", readCase: "Read case study", discuss: "Discuss your needs", training: "WEB DEVELOPMENT TRAINING", trainingTitle: "A foundation in how the web works.", trainingNote: "Training background, complementing my IT administration and automation work.", certifications: "Verified certifications", footer: "Reliable systems. Thoughtful automation.", rights: "All rights reserved.", built: "Based in Manila. Connected globally.", portraitLabel: "PROFILE PHOTO PLACEHOLDER", viewProfile: "Professional profiles", emailLabel: "EMAIL ME DIRECTLY", roleLabel: "My role", problemLabel: "The challenge", implementationLabel: "The approach", resultsLabel: "Verified outcomes", toolsLabel: "Tools & platforms", projectsBack: "Back to projects", notFound: "This page isn't here.", notFoundDetail: "The page may have moved, or it is not available for publication.", home: "Back to home",
  },
};

export function isComplete(value?: string) { return Boolean(value && !value.includes("[ADD")); }
export function publishedProjects(): Project[] { return portfolio.projects.filter((project) => project.status === "published"); }
