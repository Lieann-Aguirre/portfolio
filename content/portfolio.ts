/** Edit all personal information and public-facing copy here.
 * Draft projects stay in this source file only. Publish only after checking every claim.
 * Use [ADD ...] for missing values; the UI suppresses incomplete fields.
 */
export interface SkillItem { id: string; name: string; exampleIds?: string[]; featuredExampleId?: string }
export interface SkillCategory { id: string; name: string; shortName: string; description: string; skills: SkillItem[]; featuredExampleId?: string }
export interface WorkExample {
  id: string; tool: string; title: string; caption: string; alt: string;
  categories: string[]; skillIds: string[]; image: string; width: number; height: number;
  status: "draft" | "published";
}
export interface Experience { id: string; role: string; company: string; employment?: string; dates: string; location?: string; description?: string; responsibilities?: string[]; technologies?: string[] }
export interface Service { title: string; description: string; icon: string }
export interface Education { institution: string; program: string; completionDate?: string; description: string; training: { label: string; tools: string[] }[] }
export interface Certification { title: string; issuer: string; date?: string; url?: string; verified: boolean }
export interface Platform { name: string; icon: string }
export interface ClientReview {
  id: string; contract: string; dates: string; rating: number; quote?: string;
  excerpt?: boolean; endorsements?: string[]; sourceUrl?: string;
}
export interface Project {
  slug: string; title: string; status: "draft" | "published"; summary: string;
  categories: string[]; technologies: string[]; role?: string;
  problem?: string; implementation?: string[]; results?: string[];
  metrics?: { label: string; value: string; verified: boolean }[];
  screenshots?: { src: string; alt: string }[]; githubUrl?: string; demoUrl?: string;
}
export const portfolio = {
  // Supplied logos, cleaned to transparent local PNGs. Use the dark variant for sharing images.
  brand: { dark: "/images/brand/ja-dark.png", light: "/images/brand/ja-light.png", alt: "Julie Ann Aguirre JA technology logo", favicon: "/images/brand/favicon-32.png", appleIcon: "/images/brand/apple-touch-icon.png" },
  profile: {
    name: "Julie Ann Aguirre", givenNames: "Julie Ann", familyName: "Aguirre", initials: "JA", location: "Manila, Philippines",
    title: "IT Systems Administrator & Business Automation Specialist",
    headline: "Microsoft 365 Administrator | IT Systems Administrator | Business Automation Specialist | Google Workspace Administrator | Technical Support",
    value: "Helping businesses run smarter through reliable IT systems, cloud administration, CRM management, and intelligent workflow automation.",
    description: "With 6+ years of experience in IT administration and technical support, I specialize in Microsoft 365, Google Workspace, Dynamics 365, GoHighLevel, email marketing systems, and business automation. I support organizations through dependable technical solutions and streamlined operations.",
    availability: "Open to remote roles & client projects", availabilityDetail: "Available for remote employment, freelance engagements, and contract-based technical projects.",
    // Shared by the homepage and About page. Files in public/ use root-relative URLs.
    resumeUrl: "/julie-ann-aguirre-resume.pdf", photo: "/images/julie-ann-aguirre.webp", photoAlt: "Julie Ann Aguirre wearing a beige blazer in a technology workspace",
    photoPlaceholder: "IT systems. Human connections.",
    biography: [
      "I'm Julie Ann Aguirre, an IT Systems Administrator and Business Automation Specialist with over six years of experience supporting businesses through technology.",
      "My expertise includes Microsoft 365 administration, Google Workspace management, identity and access management, email infrastructure, technical troubleshooting, and business process automation.",
      "I have experience working with enterprise platforms such as Microsoft Entra ID, Exchange Online, Intune, SharePoint, Microsoft Teams, Dynamics 365, and Power Automate.",
      "Beyond traditional IT support, I work with CRM systems, email marketing platforms, lead generation tools, recruitment software, and workflow automation platforms such as GoHighLevel, Zapier, and Make.com.",
      "I enjoy connecting technology with real business needs, whether that means resolving technical issues, improving workflows, managing business systems, or reducing repetitive manual tasks.",
    ],
  },
  contact: {
    email: "hello@lieannaguirre.com",
    booking: {
      url: "https://bookings.cloud.microsoft/book/JAITandAutomation@lieannaguirre.com/?ismsaljsauthenabled",
      heading: "Schedule a conversation",
      description: "Discuss a remote opportunity or the IT and automation support your business needs.",
      action: "Schedule an appointment",
      externalAction: "Open Microsoft Bookings in a new tab",
      notice: "The calendar loads from Microsoft only when you choose to schedule. If it does not appear, use the link to open Microsoft Bookings in a new tab.",
      iframeTitle: "Schedule an appointment with Julie Ann Aguirre using Microsoft Bookings",
    },
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
  platforms: [
    { name: "Microsoft 365", icon: "/images/platforms/microsoft-365.svg" },
    { name: "Google Workspace", icon: "/images/platforms/google-workspace.svg" },
    { name: "Dynamics 365", icon: "/images/platforms/dynamics-365.svg" },
    { name: "GoHighLevel", icon: "/images/platforms/gohighlevel.svg" },
    { name: "Zapier", icon: "/images/platforms/zapier.svg" },
    { name: "Make.com", icon: "/images/platforms/make.svg" },
    { name: "Power Automate", icon: "/images/platforms/power-automate.svg" },
  ] satisfies Platform[],
  // Feedback supplied from Upwork. Add sourceUrl only when you have the actual public link.
  reviews: [
    { id: "gold-2026", contract: "Comm EN M365 Admin Support - Gold", dates: "Mar 27, 2026 - Sep 28, 2026", rating: 5, quote: "Appreciate your commitment and support to the team." },
    { id: "gold-2025-2026", contract: "Comm EN M365 Admin Support - Gold", dates: "Oct 15, 2025 - Apr 1, 2026", rating: 5, quote: "Grateful for your contributions and support to the team." },
    { id: "gold-2025", contract: "Comm EN M365 Admin Support - Gold", dates: "Apr 30, 2025 - Nov 3, 2025", rating: 5, quote: "Excellent work, consistently delivering quality work.", endorsements: ["Committed to Quality", "Reliable"] },
    { id: "silver-2024-2025", contract: "Comm EN M365 Admin Support - Silver", dates: "Nov 13, 2024 - May 13, 2025", rating: 5 },
    { id: "bronze-2024", contract: "Comm EN M365 Admin Support - Bronze", dates: "May 30, 2024 - Nov 19, 2024", rating: 5 },
    { id: "entra-intune-2024", contract: "MSFT380 Entra and Intune User Study -", dates: "Sep 24, 2024 - Oct 2, 2024", rating: 5 },
    { id: "system-admin-2024", contract: "Microsoft365 System admin review", dates: "Feb 18, 2024 - Mar 11, 2024", rating: 5, quote: "Working with Lieann has been a good experience. She's reliable and easy to communicate with. I would highly recommend her and look forward to working with her again in the...", excerpt: true, endorsements: ["Reliable", "Clear Communicator"] },
  ] satisfies ClientReview[],
  feedback: {
    eyebrow: "CLIENT FEEDBACK", title: "Support that makes a difference.",
    description: "Feedback from completed Upwork contracts in Microsoft 365 administration and technical support.",
    attribution: "Upwork client", source: "Upwork", ratingScale: "out of 5", excerpt: "Review excerpt", endorsements: "Endorsed by client", sourceLink: "View on Upwork",
  },
  platformMotion: { pause: "Pause platform animation", play: "Play platform animation", paused: "Animation paused", playing: "Animation playing" },
  // Only published, sanitized examples are passed to the browser. Keep originals outside public/.
  workExamples: [
  {
    "id": "evidence-37",
    "tool": "n8n",
    "title": "n8n: Recruitment Integration Workflow",
    "caption": "Recruitment Integration Workflow in n8n. Identifying details have been removed from this supplied screenshot.",
    "categories": [
      "automation"
    ],
    "status": "published",
    "image": "/work-examples/automation/n8n-recruitment-integration-workflow.webp",
    "alt": "n8n interface showing recruitment integration workflow, with private details redacted.",
    "width": 1864,
    "height": 1041,
    "skillIds": [
      "automation-workflow-design",
      "automation-cross-platform-integrations",
      "automation-n8n"
    ]
  },
  {
    "id": "evidence-38",
    "tool": "GoHighLevel",
    "title": "GoHighLevel: Appointment Confirmation and Reminder Flow",
    "caption": "Appointment Confirmation and Reminder Flow in GoHighLevel. Identifying details have been removed from this supplied screenshot.",
    "categories": [
      "automation"
    ],
    "status": "published",
    "image": "/work-examples/automation/gohighlevel-appointment-confirmation-and-reminder-flow.webp",
    "alt": "GoHighLevel interface showing appointment confirmation and reminder flow, with private details redacted.",
    "width": 1882,
    "height": 1032,
    "skillIds": [
      "automation-gohighlevel-workflows",
      "automation-automated-notifications",
      "automation-automated-follow-ups"
    ]
  },
  {
    "id": "evidence-39",
    "tool": "Make.com",
    "title": "Make.com: Scenario Routing Canvas",
    "caption": "Scenario Routing Canvas in Make.com. Identifying details have been removed from this supplied screenshot.",
    "categories": [
      "automation"
    ],
    "status": "published",
    "image": "/work-examples/automation/make-com-scenario-routing-canvas.webp",
    "alt": "Make.com interface showing scenario routing canvas, with private details redacted.",
    "width": 1897,
    "height": 1042,
    "skillIds": [
      "automation-make-com",
      "automation-workflow-design",
      "automation-cross-platform-integrations"
    ]
  },
  {
    "id": "evidence-01",
    "tool": "Microsoft OneNote",
    "title": "Microsoft OneNote: SharePoint Onboarding Guide",
    "caption": "SharePoint Onboarding Guide in Microsoft OneNote. Identifying details have been removed from this supplied screenshot.",
    "categories": [
      "business"
    ],
    "status": "published",
    "image": "/work-examples/business/microsoft-onenote-sharepoint-onboarding-guide.webp",
    "alt": "Microsoft OneNote interface showing sharepoint onboarding guide, with private details redacted.",
    "width": 1917,
    "height": 1092,
    "skillIds": [
      "support-technical-documentation",
      "business-microsoft-onenote",
      "business-technical-documentation"
    ]
  },
  {
    "id": "evidence-02",
    "tool": "Microsoft OneNote",
    "title": "Microsoft OneNote: Workable Access Guide",
    "caption": "Workable Access Guide in Microsoft OneNote. Identifying details have been removed from this supplied screenshot.",
    "categories": [
      "business"
    ],
    "status": "published",
    "image": "/work-examples/business/microsoft-onenote-workable-access-guide.webp",
    "alt": "Microsoft OneNote interface showing workable access guide, with private details redacted.",
    "width": 1905,
    "height": 1098,
    "skillIds": [
      "support-technical-documentation",
      "business-microsoft-onenote",
      "business-technical-documentation"
    ]
  },
  {
    "id": "evidence-03",
    "tool": "Claude",
    "title": "Claude: AI-Assisted Process Documentation",
    "caption": "AI-Assisted Process Documentation in Claude. Identifying details have been removed from this supplied screenshot.",
    "categories": [
      "ai"
    ],
    "status": "published",
    "image": "/work-examples/ai/claude-ai-assisted-process-documentation.webp",
    "alt": "Claude interface showing ai-assisted process documentation, with private details redacted.",
    "width": 970,
    "height": 1100,
    "skillIds": [
      "ai-claude",
      "ai-ai-assisted-process-optimization"
    ]
  },
  {
    "id": "evidence-04",
    "tool": "Claude",
    "title": "Claude: Workflow Design Notes",
    "caption": "Workflow Design Notes in Claude. Identifying details have been removed from this supplied screenshot.",
    "categories": [
      "ai"
    ],
    "status": "draft",
    "image": "",
    "alt": "Claude interface showing workflow design notes, with private details redacted.",
    "width": 0,
    "height": 0,
    "skillIds": [
      "ai-claude",
      "ai-ai-assisted-workflow-design"
    ]
  },
  {
    "id": "evidence-05",
    "tool": "Microsoft Power Platform",
    "title": "Microsoft Power Platform: Environment Administration",
    "caption": "Environment Administration in Microsoft Power Platform. Identifying details have been removed from this supplied screenshot.",
    "categories": [
      "crm"
    ],
    "status": "published",
    "image": "/work-examples/crm/microsoft-power-platform-environment-administration.webp",
    "alt": "Microsoft Power Platform interface showing environment administration, with private details redacted.",
    "width": 1903,
    "height": 1031,
    "skillIds": [
      "microsoft-microsoft-dynamics-365",
      "crm-microsoft-dynamics-365",
      "crm-crm-integrations"
    ]
  },
  {
    "id": "evidence-06",
    "tool": "GoHighLevel",
    "title": "GoHighLevel: Appointment Calendar",
    "caption": "Appointment Calendar in GoHighLevel. Identifying details have been removed from this supplied screenshot.",
    "categories": [
      "crm"
    ],
    "status": "published",
    "image": "/work-examples/crm/gohighlevel-appointment-calendar.webp",
    "alt": "GoHighLevel interface showing appointment calendar, with private details redacted.",
    "width": 1913,
    "height": 1041,
    "skillIds": [
      "crm-gohighlevel-highlevel"
    ]
  },
  {
    "id": "evidence-07",
    "tool": "Zoho",
    "title": "Zoho: API Applications and Scheduled Automation",
    "caption": "API Applications and Scheduled Automation in Zoho. Identifying details have been removed from this supplied screenshot.",
    "categories": [
      "crm"
    ],
    "status": "published",
    "image": "/work-examples/crm/zoho-api-applications-and-scheduled-automation.webp",
    "alt": "Zoho interface showing api applications and scheduled automation, with private details redacted.",
    "width": 1103,
    "height": 761,
    "skillIds": [
      "crm-crm-integrations"
    ]
  },
  {
    "id": "evidence-08",
    "tool": "ClickUp",
    "title": "ClickUp: Business Process Automation Rules",
    "caption": "Business Process Automation Rules in ClickUp. Identifying details have been removed from this supplied screenshot.",
    "categories": [
      "crm",
      "automation"
    ],
    "status": "published",
    "image": "/work-examples/crm/clickup-business-process-automation-rules.webp",
    "alt": "ClickUp interface showing business process automation rules, with private details redacted.",
    "width": 1901,
    "height": 1088,
    "skillIds": [
      "crm-workflow-and-pipeline-automation",
      "crm-crm-integrations",
      "automation-clickup-automations",
      "automation-business-process-automation"
    ]
  },
  {
    "id": "evidence-09",
    "tool": "Microsoft 365 Admin Center",
    "title": "Microsoft 365 Admin Center: Domain Management",
    "caption": "Domain Management in Microsoft 365 Admin Center. Identifying details have been removed from this supplied screenshot.",
    "categories": [
      "security"
    ],
    "status": "published",
    "image": "/work-examples/security/microsoft-365-admin-center-domain-management.webp",
    "alt": "Microsoft 365 Admin Center interface showing domain management, with private details redacted.",
    "width": 1906,
    "height": 1046,
    "skillIds": [
      "email-domain-health-monitoring",
      "security-domain-management",
      "security-domain-health-monitoring"
    ]
  },
  {
    "id": "evidence-10",
    "tool": "Microsoft Defender",
    "title": "Microsoft Defender: Device Security Inventory",
    "caption": "Device Security Inventory in Microsoft Defender. Identifying details have been removed from this supplied screenshot.",
    "categories": [
      "security"
    ],
    "status": "published",
    "image": "/work-examples/security/microsoft-defender-device-security-inventory.webp",
    "alt": "Microsoft Defender interface showing device security inventory, with private details redacted.",
    "width": 1910,
    "height": 1021,
    "skillIds": [
      "microsoft-microsoft-defender",
      "google-security-policies",
      "security-security-policies",
      "security-microsoft-defender"
    ]
  },
  {
    "id": "evidence-11",
    "tool": "Cloudflare",
    "title": "Cloudflare: Domain Overview",
    "caption": "Domain Overview in Cloudflare. Identifying details have been removed from this supplied screenshot.",
    "categories": [
      "security"
    ],
    "status": "published",
    "image": "/work-examples/security/cloudflare-domain-overview.webp",
    "alt": "Cloudflare interface showing domain overview, with private details redacted.",
    "width": 1909,
    "height": 1050,
    "skillIds": [
      "email-domain-health-monitoring",
      "security-cloudflare",
      "security-domain-management",
      "security-domain-health-monitoring",
      "business-cloudflare"
    ]
  },
  {
    "id": "evidence-12",
    "tool": "Microsoft Defender",
    "title": "Microsoft Defender: Incident Investigation Overview",
    "caption": "Incident Investigation Overview in Microsoft Defender. Identifying details have been removed from this supplied screenshot.",
    "categories": [
      "security"
    ],
    "status": "published",
    "image": "/work-examples/security/microsoft-defender-incident-investigation-overview.webp",
    "alt": "Microsoft Defender interface showing incident investigation overview, with private details redacted.",
    "width": 1899,
    "height": 1016,
    "skillIds": [
      "microsoft-microsoft-defender",
      "security-account-security",
      "security-email-security",
      "security-microsoft-defender"
    ]
  },
  {
    "id": "evidence-13",
    "tool": "Reply.io",
    "title": "Reply.io: Outreach Contact Management",
    "caption": "Outreach Contact Management in Reply.io. Identifying details have been removed from this supplied screenshot.",
    "categories": [
      "email"
    ],
    "status": "published",
    "image": "/work-examples/email/reply-io-outreach-contact-management.webp",
    "alt": "Reply.io interface showing outreach contact management, with private details redacted.",
    "width": 1912,
    "height": 963,
    "skillIds": [
      "email-email-marketing-operations",
      "email-reply-io",
      "email-audience-segmentation",
      "leads-reply-io"
    ]
  },
  {
    "id": "evidence-14",
    "tool": "Reply.io",
    "title": "Reply.io: Outreach Sequence Builder",
    "caption": "Outreach Sequence Builder in Reply.io. Identifying details have been removed from this supplied screenshot.",
    "categories": [
      "email"
    ],
    "status": "published",
    "image": "/work-examples/email/reply-io-outreach-sequence-builder.webp",
    "alt": "Reply.io interface showing outreach sequence builder, with private details redacted.",
    "width": 1902,
    "height": 964,
    "skillIds": [
      "email-email-outreach-automation",
      "email-email-sequence-management",
      "email-email-personalization",
      "email-reply-io",
      "leads-reply-io"
    ]
  },
  {
    "id": "evidence-15",
    "tool": "Google Admin Console",
    "title": "Google Admin Console: User Directory and Organizational Units",
    "caption": "User Directory and Organizational Units in Google Admin Console. Identifying details have been removed from this supplied screenshot.",
    "categories": [
      "google"
    ],
    "status": "published",
    "image": "/work-examples/google/google-admin-console-user-directory-and-organizational-units.webp",
    "alt": "Google Admin Console interface showing user directory and organizational units, with private details redacted.",
    "width": 1914,
    "height": 1108,
    "skillIds": [
      "google-google-workspace-admin-console",
      "google-user-provisioning-and-deprovisioning",
      "google-organizational-units"
    ]
  },
  {
    "id": "evidence-16",
    "tool": "Google Admin Console",
    "title": "Google Admin Console: User Event Investigation",
    "caption": "User Event Investigation in Google Admin Console. Identifying details have been removed from this supplied screenshot.",
    "categories": [
      "google"
    ],
    "status": "published",
    "image": "/work-examples/google/google-admin-console-user-event-investigation.webp",
    "alt": "Google Admin Console interface showing user event investigation, with private details redacted.",
    "width": 1860,
    "height": 1025,
    "skillIds": [
      "google-google-workspace-admin-console",
      "google-security-policies",
      "google-account-recovery-and-troubleshooting",
      "security-security-policies"
    ]
  },
  {
    "id": "evidence-17",
    "tool": "Google Cloud",
    "title": "Google Cloud: Project Console",
    "caption": "Project Console in Google Cloud. Identifying details have been removed from this supplied screenshot.",
    "categories": [
      "google"
    ],
    "status": "published",
    "image": "/work-examples/google/google-cloud-project-console.webp",
    "alt": "Google Cloud interface showing project console, with private details redacted.",
    "width": 1902,
    "height": 637,
    "skillIds": []
  },
  {
    "id": "evidence-18",
    "tool": "Dynamics 365",
    "title": "Dynamics 365: Closed Support Cases",
    "caption": "Closed Support Cases in Dynamics 365. Identifying details have been removed from this supplied screenshot.",
    "categories": [
      "support"
    ],
    "status": "published",
    "image": "/work-examples/support/dynamics-365-closed-support-cases.webp",
    "alt": "Dynamics 365 interface showing closed support cases, with private details redacted.",
    "width": 1714,
    "height": 822,
    "skillIds": [
      "microsoft-microsoft-dynamics-365",
      "crm-microsoft-dynamics-365",
      "support-technical-troubleshooting",
      "support-end-user-support",
      "support-troubleshooting-and-escalation"
    ]
  },
  {
    "id": "evidence-19",
    "tool": "Dynamics 365",
    "title": "Dynamics 365: Support Case Feedback Workspace",
    "caption": "Support Case Feedback Workspace in Dynamics 365. Identifying details have been removed from this supplied screenshot.",
    "categories": [
      "support"
    ],
    "status": "draft",
    "image": "",
    "alt": "Dynamics 365 interface showing support case feedback workspace, with private details redacted.",
    "width": 0,
    "height": 0,
    "skillIds": [
      "microsoft-microsoft-dynamics-365",
      "crm-microsoft-dynamics-365",
      "support-technical-documentation",
      "support-end-user-support",
      "business-technical-documentation"
    ]
  },
  {
    "id": "evidence-20",
    "tool": "Dynamics 365",
    "title": "Dynamics 365: Technical Support Case Workspace",
    "caption": "Technical Support Case Workspace in Dynamics 365. Identifying details have been removed from this supplied screenshot.",
    "categories": [
      "support"
    ],
    "status": "published",
    "image": "/work-examples/support/dynamics-365-technical-support-case-workspace.webp",
    "alt": "Dynamics 365 interface showing technical support case workspace, with private details redacted.",
    "width": 1699,
    "height": 802,
    "skillIds": [
      "microsoft-microsoft-dynamics-365",
      "microsoft-microsoft-365-technical-support",
      "crm-microsoft-dynamics-365",
      "support-technical-troubleshooting"
    ]
  },
  {
    "id": "evidence-21",
    "tool": "Dynamics 365",
    "title": "Dynamics 365: Customer Support Feedback Workspace",
    "caption": "Customer Support Feedback Workspace in Dynamics 365. Identifying details have been removed from this supplied screenshot.",
    "categories": [
      "support"
    ],
    "status": "draft",
    "image": "",
    "alt": "Dynamics 365 interface showing customer support feedback workspace, with private details redacted.",
    "width": 0,
    "height": 0,
    "skillIds": [
      "microsoft-microsoft-dynamics-365",
      "crm-microsoft-dynamics-365",
      "support-end-user-support"
    ]
  },
  {
    "id": "evidence-22",
    "tool": "Apollo.io",
    "title": "Apollo.io: Prospect List Management",
    "caption": "Prospect List Management in Apollo.io. Identifying details have been removed from this supplied screenshot.",
    "categories": [
      "leads"
    ],
    "status": "published",
    "image": "/work-examples/leads/apollo-io-prospect-list-management.webp",
    "alt": "Apollo.io interface showing prospect list management, with private details redacted.",
    "width": 1897,
    "height": 1044,
    "skillIds": [
      "leads-apollo-io",
      "leads-lead-list-building",
      "leads-prospect-research"
    ]
  },
  {
    "id": "evidence-23",
    "tool": "Clay",
    "title": "Clay: Enrichment Table with Apify Imports",
    "caption": "Enrichment Table with Apify Imports in Clay. Identifying details have been removed from this supplied screenshot.",
    "categories": [
      "leads"
    ],
    "status": "published",
    "image": "/work-examples/leads/clay-enrichment-table-with-apify-imports.webp",
    "alt": "Clay interface showing enrichment table with apify imports, with private details redacted.",
    "width": 1859,
    "height": 1025,
    "skillIds": [
      "leads-clay",
      "leads-lead-enrichment",
      "leads-contact-data-management",
      "leads-apify"
    ]
  },
  {
    "id": "evidence-24",
    "tool": "Apify",
    "title": "Apify: Actor Library",
    "caption": "Actor Library in Apify. Identifying details have been removed from this supplied screenshot.",
    "categories": [
      "leads"
    ],
    "status": "published",
    "image": "/work-examples/leads/apify-actor-library.webp",
    "alt": "Apify interface showing actor library, with private details redacted.",
    "width": 1916,
    "height": 1110,
    "skillIds": [
      "leads-lead-generation",
      "leads-prospect-research",
      "leads-apify"
    ]
  },
  {
    "id": "evidence-25",
    "tool": "Microsoft 365 Admin Center",
    "title": "Microsoft 365 Admin Center: User and License Administration",
    "caption": "User and License Administration in Microsoft 365 Admin Center. Identifying details have been removed from this supplied screenshot.",
    "categories": [
      "microsoft"
    ],
    "status": "published",
    "image": "/work-examples/microsoft/microsoft-365-admin-center-user-and-license-administration.webp",
    "alt": "Microsoft 365 Admin Center interface showing user and license administration, with private details redacted.",
    "width": 1909,
    "height": 1156,
    "skillIds": [
      "microsoft-microsoft-365-admin-center",
      "microsoft-microsoft-365-licensing-and-user-management",
      "support-user-account-administration"
    ]
  },
  {
    "id": "evidence-26",
    "tool": "Exchange Admin Center",
    "title": "Exchange Admin Center: Mailbox Management",
    "caption": "Mailbox Management in Exchange Admin Center. Identifying details have been removed from this supplied screenshot.",
    "categories": [
      "microsoft"
    ],
    "status": "published",
    "image": "/work-examples/microsoft/exchange-admin-center-mailbox-management.webp",
    "alt": "Exchange Admin Center interface showing mailbox management, with private details redacted.",
    "width": 1900,
    "height": 1100,
    "skillIds": [
      "microsoft-microsoft-exchange-online",
      "microsoft-mailbox-management-and-permissions",
      "microsoft-microsoft-365-technical-support"
    ]
  },
  {
    "id": "evidence-27",
    "tool": "Microsoft Graph PowerShell",
    "title": "Microsoft Graph PowerShell: Directory User Query",
    "caption": "Directory User Query in Microsoft Graph PowerShell. Identifying details have been removed from this supplied screenshot.",
    "categories": [
      "microsoft"
    ],
    "status": "draft",
    "image": "",
    "alt": "Microsoft Graph PowerShell interface showing directory user query, with private details redacted.",
    "width": 0,
    "height": 0,
    "skillIds": [
      "microsoft-microsoft-365-licensing-and-user-management",
      "microsoft-identity-and-access-management",
      "microsoft-microsoft-graph-powershell"
    ]
  },
  {
    "id": "evidence-28",
    "tool": "Microsoft Defender",
    "title": "Microsoft Defender: Security Administration Dashboard",
    "caption": "Security Administration Dashboard in Microsoft Defender. Identifying details have been removed from this supplied screenshot.",
    "categories": [
      "microsoft"
    ],
    "status": "published",
    "image": "/work-examples/microsoft/microsoft-defender-security-administration-dashboard.webp",
    "alt": "Microsoft Defender interface showing security administration dashboard, with private details redacted.",
    "width": 1894,
    "height": 1029,
    "skillIds": [
      "microsoft-microsoft-365-security-and-access-management",
      "microsoft-microsoft-defender",
      "security-microsoft-defender"
    ]
  },
  {
    "id": "evidence-29",
    "tool": "ClickUp",
    "title": "ClickUp: Task and Workflow Coordination",
    "caption": "Task and Workflow Coordination in ClickUp. Identifying details have been removed from this supplied screenshot.",
    "categories": [
      "collaboration"
    ],
    "status": "published",
    "image": "/work-examples/collaboration/clickup-task-and-workflow-coordination.webp",
    "alt": "ClickUp interface showing task and workflow coordination, with private details redacted.",
    "width": 1911,
    "height": 1107,
    "skillIds": [
      "collaboration-clickup",
      "collaboration-task-management",
      "collaboration-workflow-coordination"
    ]
  },
  {
    "id": "evidence-30",
    "tool": "Dynamics 365",
    "title": "Dynamics 365: Lead Record Collaboration Workspace",
    "caption": "Lead Record Collaboration Workspace in Dynamics 365. Identifying details have been removed from this supplied screenshot.",
    "categories": [
      "collaboration"
    ],
    "status": "draft",
    "image": "",
    "alt": "Dynamics 365 interface showing lead record collaboration workspace, with private details redacted.",
    "width": 0,
    "height": 0,
    "skillIds": [
      "microsoft-microsoft-dynamics-365",
      "crm-microsoft-dynamics-365",
      "collaboration-workflow-coordination"
    ]
  },
  {
    "id": "evidence-31",
    "tool": "monday.com",
    "title": "monday.com: Project Tracking Board",
    "caption": "Project Tracking Board in monday.com. Identifying details have been removed from this supplied screenshot.",
    "categories": [
      "collaboration"
    ],
    "status": "draft",
    "image": "",
    "alt": "monday.com interface showing project tracking board, with private details redacted.",
    "width": 0,
    "height": 0,
    "skillIds": [
      "collaboration-task-management",
      "collaboration-workflow-coordination",
      "collaboration-monday-com"
    ]
  },
  {
    "id": "evidence-32",
    "tool": "Workable",
    "title": "Workable: Applicant Tracking Workspace",
    "caption": "Applicant Tracking Workspace in Workable. Identifying details have been removed from this supplied screenshot.",
    "categories": [
      "recruitment"
    ],
    "status": "draft",
    "image": "",
    "alt": "Workable interface showing applicant tracking workspace, with private details redacted.",
    "width": 0,
    "height": 0,
    "skillIds": [
      "recruitment-workable",
      "recruitment-applicant-tracking-systems",
      "recruitment-candidate-database-management"
    ]
  },
  {
    "id": "evidence-33",
    "tool": "Zoho People",
    "title": "Zoho People: Employee Administration",
    "caption": "Employee Administration in Zoho People. Identifying details have been removed from this supplied screenshot.",
    "categories": [
      "recruitment"
    ],
    "status": "draft",
    "image": "",
    "alt": "Zoho People interface showing employee administration, with private details redacted.",
    "width": 0,
    "height": 0,
    "skillIds": [
      "recruitment-zoho-people",
      "recruitment-hr-systems-administration"
    ]
  },
  {
    "id": "evidence-34",
    "tool": "Zoho Recruit",
    "title": "Zoho Recruit: Recruitment Pipeline Dashboard",
    "caption": "Recruitment Pipeline Dashboard in Zoho Recruit. Identifying details have been removed from this supplied screenshot.",
    "categories": [
      "recruitment"
    ],
    "status": "published",
    "image": "/work-examples/recruitment/zoho-recruit-recruitment-pipeline-dashboard.webp",
    "alt": "Zoho Recruit interface showing recruitment pipeline dashboard, with private details redacted.",
    "width": 1888,
    "height": 1063,
    "skillIds": [
      "recruitment-zoho-recruit",
      "recruitment-applicant-tracking-systems",
      "recruitment-recruitment-pipeline-management"
    ]
  },
  {
    "id": "evidence-36",
    "tool": "n8n",
    "title": "n8n: Workflow Management Overview",
    "caption": "Workflow Management Overview in n8n. Identifying details have been removed from this supplied screenshot.",
    "categories": [
      "automation"
    ],
    "status": "published",
    "image": "/work-examples/automation/n8n-workflow-management-overview.webp",
    "alt": "n8n interface showing workflow management overview, with private details redacted.",
    "width": 1182,
    "height": 884,
    "skillIds": [
      "automation-workflow-design",
      "automation-n8n"
    ]
  },
  {
    "id": "evidence-40",
    "tool": "Zapier",
    "title": "Zapier: Business Integration Automations",
    "caption": "Business Integration Automations in Zapier. Identifying details have been removed from this supplied screenshot.",
    "categories": [
      "automation"
    ],
    "status": "published",
    "image": "/work-examples/automation/zapier-business-integration-automations.webp",
    "alt": "Zapier interface showing business integration automations, with private details redacted.",
    "width": 1913,
    "height": 1022,
    "skillIds": [
      "automation-zapier",
      "automation-business-process-automation",
      "automation-cross-platform-integrations"
    ]
  },
  {
    "id": "evidence-41",
    "tool": "Power Automate",
    "title": "Power Automate: Cloud Flow Administration",
    "caption": "Cloud Flow Administration in Power Automate. Identifying details have been removed from this supplied screenshot.",
    "categories": [
      "automation"
    ],
    "status": "published",
    "image": "/work-examples/automation/power-automate-cloud-flow-administration.webp",
    "alt": "Power Automate interface showing cloud flow administration, with private details redacted.",
    "width": 1895,
    "height": 1036,
    "skillIds": [
      "microsoft-microsoft-power-automate",
      "automation-microsoft-power-automate",
      "automation-workflow-design"
    ]
  },
  {
    "id": "evidence-42",
    "tool": "Exchange Online PowerShell",
    "title": "Exchange Online PowerShell: Application Permission Scope Check",
    "caption": "Application Permission Scope Check in Exchange Online PowerShell. Identifying details have been removed from this supplied screenshot.",
    "categories": [
      "automation"
    ],
    "status": "published",
    "image": "/work-examples/automation/exchange-online-powershell-application-permission-scope-check.webp",
    "alt": "Exchange Online PowerShell interface showing application permission scope check, with private details redacted.",
    "width": 1067,
    "height": 482,
    "skillIds": [
      "microsoft-microsoft-365-security-and-access-management",
      "microsoft-identity-and-access-management"
    ]
  }
] satisfies WorkExample[],
  skillEvidence: {
  "title": "Work example",
  "description": "A selected screenshot showing this capability. Private details have been removed.",
  "viewExamples": "View work example",
  "viewScreenshot": "View screenshot",
  "backToSkills": "Back to skills",
  "openScreenshot": "View full screenshot",
  "closeScreenshot": "Close screenshot",
  "zoomIn": "View at full size",
  "zoomOut": "Fit screenshot to viewer",
  "empty": "A work example will be added here.",
  "categoryExamples": "View category examples",
  "sourceNote": "Screenshot evidence",
  "previewHelp": "Hover over a category card to see its selected screenshot. Use the image control to switch sides with a keyboard or touch. Skills with an expand icon show one work example.",
  "skillPreviewHelp": "Skills with an expand icon show one selected screenshot. Hover, focus, or select a skill to view it.",
  "staticPreviewHelp": "Browse all approved screenshots for this category below the skills. Select any screenshot to enlarge and zoom. Skills with an expand icon also show one work example on hover, focus, or selection."
},

  skills: [
    { id: "microsoft", featuredExampleId: "evidence-25", name: "Microsoft 365 Administration", shortName: "Microsoft 365", description: "Cloud productivity, identity, email, and device administration.", skills: [{"id":"microsoft-microsoft-365-admin-center","name":"Microsoft 365 Admin Center","exampleIds":["evidence-25"]},{"id":"microsoft-microsoft-exchange-online","name":"Microsoft Exchange Online","exampleIds":["evidence-26"]},{"id":"microsoft-microsoft-entra-id-azure-active-directory","name":"Microsoft Entra ID (Azure Active Directory)"},{"id":"microsoft-microsoft-intune","name":"Microsoft Intune"},{"id":"microsoft-microsoft-teams","name":"Microsoft Teams"},{"id":"microsoft-microsoft-sharepoint-online","name":"Microsoft SharePoint Online"},{"id":"microsoft-microsoft-onedrive-for-business","name":"Microsoft OneDrive for Business"},{"id":"microsoft-microsoft-dynamics-365","name":"Microsoft Dynamics 365","featuredExampleId":"evidence-18","exampleIds":["evidence-05","evidence-18","evidence-19","evidence-20","evidence-21","evidence-30"]},{"id":"microsoft-microsoft-power-automate","name":"Microsoft Power Automate","exampleIds":["evidence-41"]},{"id":"microsoft-microsoft-power-apps","name":"Microsoft Power Apps"},{"id":"microsoft-microsoft-azure","name":"Microsoft Azure"},{"id":"microsoft-microsoft-365-licensing-and-user-management","name":"Microsoft 365 Licensing and User Management","exampleIds":["evidence-25","evidence-27"]},{"id":"microsoft-microsoft-365-security-and-access-management","name":"Microsoft 365 Security and Access Management","exampleIds":["evidence-28","evidence-42"]},{"id":"microsoft-multi-factor-authentication-mfa","name":"Multi-Factor Authentication (MFA)"},{"id":"microsoft-conditional-access","name":"Conditional Access"},{"id":"microsoft-mail-flow-troubleshooting","name":"Mail Flow Troubleshooting"},{"id":"microsoft-mailbox-management-and-permissions","name":"Mailbox Management and Permissions","exampleIds":["evidence-26"]},{"id":"microsoft-email-migration-support","name":"Email Migration Support"},{"id":"microsoft-device-enrollment-and-compliance","name":"Device Enrollment and Compliance"},{"id":"microsoft-application-deployment-support","name":"Application Deployment Support"},{"id":"microsoft-identity-and-access-management","name":"Identity and Access Management","exampleIds":["evidence-27","evidence-42"]},{"id":"microsoft-microsoft-365-technical-support","name":"Microsoft 365 Technical Support","exampleIds":["evidence-20","evidence-26"]},{"id":"microsoft-microsoft-defender","name":"Microsoft Defender","exampleIds":["evidence-10","evidence-12","evidence-28"]},{"id":"microsoft-microsoft-graph-powershell","name":"Microsoft Graph PowerShell","exampleIds":["evidence-27"]}] },
    { id: "google", featuredExampleId: "evidence-15", name: "Google Workspace Administration", shortName: "Google Workspace", description: "Secure accounts, organized collaboration, and dependable access.", skills: [{"id":"google-google-workspace-admin-console","name":"Google Workspace Admin Console","exampleIds":["evidence-15","evidence-16"]},{"id":"google-gmail-administration","name":"Gmail Administration"},{"id":"google-google-drive","name":"Google Drive"},{"id":"google-shared-drives","name":"Shared Drives"},{"id":"google-google-groups","name":"Google Groups"},{"id":"google-google-calendar","name":"Google Calendar"},{"id":"google-google-meet","name":"Google Meet"},{"id":"google-user-provisioning-and-deprovisioning","name":"User Provisioning and Deprovisioning","exampleIds":["evidence-15"]},{"id":"google-license-management","name":"License Management"},{"id":"google-organizational-units","name":"Organizational Units","exampleIds":["evidence-15"]},{"id":"google-access-and-permission-management","name":"Access and Permission Management"},{"id":"google-security-policies","name":"Security Policies","exampleIds":["evidence-10","evidence-16"]},{"id":"google-account-recovery-and-troubleshooting","name":"Account Recovery and Troubleshooting","exampleIds":["evidence-16"]}] },
    { id: "crm", featuredExampleId: "evidence-05", name: "CRM and Business Management Platforms", shortName: "CRM & Business", description: "Connected contacts, pipelines, and business operations.", skills: [{"id":"crm-microsoft-dynamics-365","name":"Microsoft Dynamics 365","featuredExampleId":"evidence-18","exampleIds":["evidence-05","evidence-18","evidence-19","evidence-20","evidence-21","evidence-30"]},{"id":"crm-gohighlevel-highlevel","name":"GoHighLevel (HighLevel)","exampleIds":["evidence-06"]},{"id":"crm-hubspot-crm","name":"HubSpot CRM"},{"id":"crm-zoho-crm","name":"Zoho CRM"},{"id":"crm-crm-contact-management","name":"CRM Contact Management"},{"id":"crm-lead-pipeline-management","name":"Lead Pipeline Management"},{"id":"crm-workflow-and-pipeline-automation","name":"Workflow and Pipeline Automation","exampleIds":["evidence-08"]},{"id":"crm-crm-integrations","name":"CRM Integrations","featuredExampleId":"evidence-07","exampleIds":["evidence-05","evidence-07","evidence-08"]},{"id":"crm-contact-segmentation","name":"Contact Segmentation"},{"id":"crm-lead-tracking","name":"Lead Tracking"},{"id":"crm-crm-data-management","name":"CRM Data Management"}] },
    { id: "automation", featuredExampleId: "evidence-37", name: "Workflow Automation and Integrations", shortName: "Automation", description: "Practical workflows that connect platforms and reduce repetitive tasks.", skills: [{"id":"automation-gohighlevel-workflows","name":"GoHighLevel Workflows","exampleIds":["evidence-38"]},{"id":"automation-zapier","name":"Zapier","exampleIds":["evidence-40"]},{"id":"automation-make-com","name":"Make.com","exampleIds":["evidence-39"]},{"id":"automation-microsoft-power-automate","name":"Microsoft Power Automate","exampleIds":["evidence-41"]},{"id":"automation-microsoft-power-apps","name":"Microsoft Power Apps"},{"id":"automation-clickup-automations","name":"ClickUp Automations","exampleIds":["evidence-08"]},{"id":"automation-shopify-automations","name":"Shopify Automations"},{"id":"automation-workflow-design","name":"Workflow Design","exampleIds":["evidence-36","evidence-37","evidence-39","evidence-41"]},{"id":"automation-business-process-automation","name":"Business Process Automation","exampleIds":["evidence-08","evidence-40"]},{"id":"automation-cross-platform-integrations","name":"Cross-Platform Integrations","exampleIds":["evidence-37","evidence-39","evidence-40"]},{"id":"automation-automated-notifications","name":"Automated Notifications","exampleIds":["evidence-38"]},{"id":"automation-lead-routing","name":"Lead Routing"},{"id":"automation-automated-follow-ups","name":"Automated Follow-Ups","exampleIds":["evidence-38"]},{"id":"automation-process-optimization","name":"Process Optimization"},{"id":"automation-n8n","name":"n8n","exampleIds":["evidence-36","evidence-37"]}] },
    { id: "email", featuredExampleId: "evidence-14", name: "Email Marketing and Deliverability", shortName: "Email & Deliverability", description: "Campaign operations backed by reliable email infrastructure.", skills: [{"id":"email-email-marketing-operations","name":"Email Marketing Operations","exampleIds":["evidence-13"]},{"id":"email-email-campaign-management","name":"Email Campaign Management"},{"id":"email-email-outreach-automation","name":"Email Outreach Automation","exampleIds":["evidence-14"]},{"id":"email-email-sequence-management","name":"Email Sequence Management","exampleIds":["evidence-14"]},{"id":"email-email-personalization","name":"Email Personalization","exampleIds":["evidence-14"]},{"id":"email-email-deliverability","name":"Email Deliverability"},{"id":"email-domain-authentication","name":"Domain Authentication"},{"id":"email-spf-configuration","name":"SPF Configuration"},{"id":"email-dkim-configuration","name":"DKIM Configuration"},{"id":"email-dmarc-configuration","name":"DMARC Configuration"},{"id":"email-dns-management","name":"DNS Management"},{"id":"email-mail-flow-troubleshooting","name":"Mail Flow Troubleshooting"},{"id":"email-domain-health-monitoring","name":"Domain Health Monitoring","exampleIds":["evidence-09","evidence-11"]},{"id":"email-sender-reputation-monitoring","name":"Sender Reputation Monitoring"},{"id":"email-cold-email-outreach","name":"Cold Email Outreach"},{"id":"email-reply-io","name":"Reply.io","exampleIds":["evidence-13","evidence-14"]},{"id":"email-instantly","name":"Instantly"},{"id":"email-gohighlevel-email-campaigns","name":"GoHighLevel Email Campaigns"},{"id":"email-audience-segmentation","name":"Audience Segmentation","exampleIds":["evidence-13"]},{"id":"email-lead-nurturing-workflows","name":"Lead Nurturing Workflows"}] },
    { id: "leads", featuredExampleId: "evidence-23", name: "Lead Generation and Sales Operations", shortName: "Lead Generation", description: "Research, enrichment, outreach, and sales pipeline support.", skills: [{"id":"leads-clay","name":"Clay","exampleIds":["evidence-23"]},{"id":"leads-apollo-io","name":"Apollo.io","exampleIds":["evidence-22"]},{"id":"leads-reply-io","name":"Reply.io","exampleIds":["evidence-13","evidence-14"]},{"id":"leads-instantly","name":"Instantly"},{"id":"leads-lead-generation","name":"Lead Generation","exampleIds":["evidence-24"]},{"id":"leads-lead-list-building","name":"Lead List Building","exampleIds":["evidence-22"]},{"id":"leads-lead-enrichment","name":"Lead Enrichment","exampleIds":["evidence-23"]},{"id":"leads-prospect-research","name":"Prospect Research","exampleIds":["evidence-22","evidence-24"]},{"id":"leads-contact-data-management","name":"Contact Data Management","exampleIds":["evidence-23"]},{"id":"leads-outreach-campaign-management","name":"Outreach Campaign Management"},{"id":"leads-sales-pipeline-support","name":"Sales Pipeline Support"},{"id":"leads-automated-follow-up-workflows","name":"Automated Follow-Up Workflows"},{"id":"leads-b2b-outreach-operations","name":"B2B Outreach Operations"},{"id":"leads-apify","name":"Apify","exampleIds":["evidence-23","evidence-24"]}] },
    { id: "support", featuredExampleId: "evidence-18", name: "IT Support and Systems Administration", shortName: "IT Support", description: "Reliable systems and responsive support for remote teams.", skills: [{"id":"support-it-administration","name":"IT Administration"},{"id":"support-technical-troubleshooting","name":"Technical Troubleshooting","exampleIds":["evidence-18","evidence-20"]},{"id":"support-remote-technical-support","name":"Remote Technical Support"},{"id":"support-user-account-administration","name":"User Account Administration","exampleIds":["evidence-25"]},{"id":"support-software-troubleshooting","name":"Software Troubleshooting"},{"id":"support-hardware-troubleshooting","name":"Hardware Troubleshooting"},{"id":"support-it-onboarding-and-offboarding","name":"IT Onboarding and Offboarding"},{"id":"support-access-control","name":"Access Control"},{"id":"support-identity-management","name":"Identity Management"},{"id":"support-device-management","name":"Device Management"},{"id":"support-system-configuration","name":"System Configuration"},{"id":"support-license-management","name":"License Management"},{"id":"support-security-configuration","name":"Security Configuration"},{"id":"support-technical-documentation","name":"Technical Documentation","featuredExampleId":"evidence-02","exampleIds":["evidence-01","evidence-02","evidence-19"]},{"id":"support-end-user-support","name":"End-User Support","exampleIds":["evidence-18","evidence-19","evidence-21"]},{"id":"support-troubleshooting-and-escalation","name":"Troubleshooting and Escalation","exampleIds":["evidence-18"]},{"id":"support-cloud-based-business-systems","name":"Cloud-Based Business Systems"}] },
    { id: "security", featuredExampleId: "evidence-09", name: "DNS and Security", shortName: "DNS & Security", description: "Domain health, account protection, and access controls.", skills: [{"id":"security-dns-configuration","name":"DNS Configuration"},{"id":"security-cloudflare","name":"Cloudflare","exampleIds":["evidence-11"]},{"id":"security-spf-dkim-and-dmarc","name":"SPF, DKIM, and DMARC"},{"id":"security-domain-management","name":"Domain Management","exampleIds":["evidence-09","evidence-11"]},{"id":"security-mfa","name":"MFA"},{"id":"security-conditional-access","name":"Conditional Access"},{"id":"security-security-policies","name":"Security Policies","exampleIds":["evidence-10","evidence-16"]},{"id":"security-account-security","name":"Account Security","exampleIds":["evidence-12"]},{"id":"security-access-permissions","name":"Access Permissions"},{"id":"security-password-management","name":"Password Management"},{"id":"security-lastpass","name":"LastPass"},{"id":"security-email-security","name":"Email Security","exampleIds":["evidence-12"]},{"id":"security-domain-health-monitoring","name":"Domain Health Monitoring","exampleIds":["evidence-09","evidence-11"]},{"id":"security-microsoft-defender","name":"Microsoft Defender","exampleIds":["evidence-10","evidence-12","evidence-28"]}] },
    { id: "recruitment", featuredExampleId: "evidence-34", name: "Recruitment and HR Technology", shortName: "Recruitment & HR", description: "Recruitment platforms and workflows that support hiring operations.", skills: [{"id":"recruitment-workable","name":"Workable","exampleIds":["evidence-32"]},{"id":"recruitment-zoho-recruit","name":"Zoho Recruit","exampleIds":["evidence-34"]},{"id":"recruitment-recruitbot","name":"RecruitBot"},{"id":"recruitment-zoho-people","name":"Zoho People","exampleIds":["evidence-33"]},{"id":"recruitment-zoho-bookings","name":"Zoho Bookings"},{"id":"recruitment-applicant-tracking-systems","name":"Applicant Tracking Systems","exampleIds":["evidence-32","evidence-34"]},{"id":"recruitment-recruitment-pipeline-management","name":"Recruitment Pipeline Management","exampleIds":["evidence-34"]},{"id":"recruitment-candidate-database-management","name":"Candidate Database Management","exampleIds":["evidence-32"]},{"id":"recruitment-recruitment-workflow-automation","name":"Recruitment Workflow Automation"},{"id":"recruitment-interview-scheduling-systems","name":"Interview Scheduling Systems"},{"id":"recruitment-hr-systems-administration","name":"HR Systems Administration","exampleIds":["evidence-33"]}] },
    { id: "collaboration", featuredExampleId: "evidence-29", name: "Project Management and Collaboration", shortName: "Collaboration", description: "Organized work, documentation, and connected remote teams.", skills: [{"id":"collaboration-clickup","name":"ClickUp","exampleIds":["evidence-29"]},{"id":"collaboration-trello","name":"Trello"},{"id":"collaboration-slack","name":"Slack"},{"id":"collaboration-notion","name":"Notion"},{"id":"collaboration-microsoft-teams","name":"Microsoft Teams"},{"id":"collaboration-google-workspace-collaboration","name":"Google Workspace Collaboration"},{"id":"collaboration-task-management","name":"Task Management","exampleIds":["evidence-29","evidence-31"]},{"id":"collaboration-workflow-coordination","name":"Workflow Coordination","exampleIds":["evidence-29","evidence-30","evidence-31"]},{"id":"collaboration-process-documentation","name":"Process Documentation"},{"id":"collaboration-remote-team-collaboration","name":"Remote Team Collaboration"},{"id":"collaboration-monday-com","name":"monday.com","exampleIds":["evidence-31"]}] },
    { id: "ai", featuredExampleId: "evidence-03", name: "AI Tools and AI-Assisted Workflows", shortName: "AI Workflows", description: "AI-assisted research, content, and process design.", skills: [{"id":"ai-chatgpt","name":"ChatGPT"},{"id":"ai-claude","name":"Claude","exampleIds":["evidence-03","evidence-04"]},{"id":"ai-grok","name":"Grok"},{"id":"ai-ai-assisted-research","name":"AI-Assisted Research"},{"id":"ai-ai-assisted-content-creation","name":"AI-Assisted Content Creation"},{"id":"ai-ai-assisted-workflow-design","name":"AI-Assisted Workflow Design","exampleIds":["evidence-04"]},{"id":"ai-ai-assisted-process-optimization","name":"AI-Assisted Process Optimization","exampleIds":["evidence-03"]}] },
    { id: "business", featuredExampleId: "evidence-02", name: "Additional Business and IT Tools", shortName: "Business Tools", description: "Everyday platforms supporting business and IT operations.", skills: [{"id":"business-shopify","name":"Shopify"},{"id":"business-hubstaff","name":"Hubstaff"},{"id":"business-zoiper","name":"Zoiper"},{"id":"business-receptionhq","name":"ReceptionHQ"},{"id":"business-docusign","name":"DocuSign"},{"id":"business-cloudflare","name":"Cloudflare","exampleIds":["evidence-11"]},{"id":"business-lastpass","name":"LastPass"},{"id":"business-hubspot","name":"HubSpot"},{"id":"business-gamma","name":"Gamma"},{"id":"business-replit-agent","name":"Replit Agent"},{"id":"business-intellij-idea","name":"IntelliJ IDEA"},{"id":"business-microsoft-onenote","name":"Microsoft OneNote","exampleIds":["evidence-01","evidence-02"]},{"id":"business-technical-documentation","name":"Technical Documentation","featuredExampleId":"evidence-02","exampleIds":["evidence-01","evidence-02","evidence-19"]}] },
  ] satisfies SkillCategory[],
  // Display order is intentional: current employer, service engineering, then earlier technical support.
  experience: [
  {
    "role": "Information Technology Administrator",
    "company": "Keller Executive Search",
    "employment": "Full-time",
    "dates": "February 2024 to Present",
    "location": "United States, Remote",
    "description": "Manage IT systems, business applications, technical support, and workflow automation across company operations.",
    "responsibilities": [
      "Administer Google Workspace and Microsoft 365 environments.",
      "Manage user accounts, licensing, access permissions, and security policies.",
      "Support Microsoft Entra ID, Exchange Online, Intune, Teams, SharePoint, and Dynamics 365.",
      "Configure email authentication and DNS records.",
      "Provide technical troubleshooting and employee onboarding and offboarding support.",
      "Manage business systems, VoIP applications, and time-tracking platforms.",
      "Build automation workflows using Zapier, Make.com, Power Automate, and GoHighLevel.",
      "Support lead generation through Clay, Apollo.io, and Reply.io.",
      "Maintain recruitment platforms such as Workable, Zoho Recruit, and RecruitBot.",
      "Support HR systems and collaboration tools."
    ],
    "id": "keller"
  },
  {
    "role": "Microsoft 365 Service Engineer",
    "company": "Upwork",
    "employment": "Part-time",
    "dates": "February 2023 to October 2026",
    "location": "United States, Remote",
    "description": "Delivered part-time Microsoft 365 service engineering and administrator support across email, identity, device management, and cloud collaboration services.",
    "responsibilities": [
      "Troubleshot Exchange Online mail flow, mailbox permissions, and delivery issues.",
      "Supported mailbox migration and email authentication.",
      "Resolved Microsoft Entra ID sign-in, MFA, and account access issues.",
      "Assisted with conditional access and license assignment.",
      "Troubleshot Microsoft Intune enrollment, compliance, and device configuration.",
      "Supported Microsoft Teams, SharePoint, and OneDrive.",
      "Documented technical resolutions and escalated complex support cases.",
      "Explained technical solutions to both technical and non-technical users."
    ],
    "id": "upwork",
    "technologies": [
      "Microsoft 365",
      "Exchange Online",
      "Microsoft Entra ID",
      "MFA",
      "Conditional Access",
      "Microsoft Intune",
      "Microsoft Teams",
      "SharePoint Online",
      "OneDrive for Business"
    ]
  },
  {
    "role": "Microsoft 365 Technical Support",
    "company": "Accenture",
    "dates": "September 2020 to February 2023",
    "id": "accenture",
    "location": "Taguig, Philippines",
    "description": "Provided Microsoft 365 technical support, helping users and administrators troubleshoot email, account access, collaboration, and device enrollment issues.",
    "responsibilities": [
      "Troubleshot Exchange Online email delivery and mailbox access issues.",
      "Assisted users with identity, sign-in, MFA, and Microsoft 365 licensing issues.",
      "Resolved collaboration issues in Microsoft Teams, SharePoint, and OneDrive.",
      "Troubleshot Microsoft Intune device enrollment and configuration issues.",
      "Documented support cases and explained troubleshooting steps to users and administrators."
    ],
    "technologies": [
      "Microsoft 365",
      "Exchange Online",
      "Microsoft Entra ID",
      "MFA",
      "Microsoft 365 Licensing",
      "Microsoft Teams",
      "SharePoint Online",
      "OneDrive for Business",
      "Microsoft Intune"
    ]
  }
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
    // Live production origin. Keep any SITE_URL build override aligned with this domain.
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
    contactLabel: "TWO WAYS TO WORK TOGETHER", search: "Search skills and platforms", searchPlaceholder: "Search a tool or capability...", category: "Filter by category", all: "All categories", result: "skills found", noResults: "No matching skills", noResultsDetail: "Try another search or choose a different category.", reset: "Reset filters", expand: "View skills", collapse: "Hide skills", projectFilter: "Filter projects", technologyFilter: "Filter by technology", allTechnologies: "All technologies", allProjects: "All projects", projectEmpty: "Good work deserves a clear story.", projectEmptyDescription: "Case studies are being prepared for publication. In the meantime, explore my experience or get in touch to discuss your needs.", projectNoResults: "No projects match these filters.", readCase: "Read case study", discuss: "Discuss your needs", certifications: "Verified certifications", footer: "Reliable systems. Thoughtful automation.", rights: "All rights reserved.", built: "Based in Manila. Connected globally.", portraitLabel: "PROFILE PHOTO PLACEHOLDER", viewProfile: "Professional profiles", emailLabel: "EMAIL ME DIRECTLY", roleLabel: "My role", problemLabel: "The challenge", implementationLabel: "The approach", resultsLabel: "Verified outcomes", toolsLabel: "Tools & platforms", projectsBack: "Back to projects", notFound: "This page isn't here.", notFoundDetail: "The page may have moved, or it is not available for publication.", home: "Back to home",
  },
};

export function isComplete(value?: string) { return Boolean(value && !value.includes("[ADD")); }
export function publishedProjects(): Project[] { return portfolio.projects.filter((project) => project.status === "published"); }

export function publishedWorkExamples(): WorkExample[] { return portfolio.workExamples.filter(example => example.status === "published" && Boolean(example.image)); }
