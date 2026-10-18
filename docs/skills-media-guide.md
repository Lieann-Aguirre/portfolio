# Skills screenshot media guide

## Scope and storage

The supplied Portfolio folders are the primary source. All 42 screenshots were inspected. They contain 41 unique images; the ClickUp automation screenshot is shared between CRM and Automation. There are 33 sanitized public copies and eight private draft records. Originals remain in Downloads, outside this repository and deployment output.

Public copies are flattened RGB WebP files under `public/work-examples/<category>/`. Redactions replace source pixels with an opaque fill before encoding; they are not overlays or reversible browser effects. Original resolution is retained where useful. A cropped Claude document retains its visible artifact rather than the surrounding conversation. No image metadata is copied. Some interfaces are heavily redacted to protect business records.

All labels, captions, alternative text, category associations, skill IDs, asset paths, and publication status are edited in `content/portfolio.ts`. Only published examples with an image path are passed to browser components. Draft references are removed from client skill data. No draft image is placed in public assets. Screenshot evidence does not publish the existing case-study drafts.

## Folder mapping

| Supplied folder | Public category |
|---|---|
| Additional Business and IT Tools | Additional Business and IT Tools |
| AI Tools and Assisted Workflows | AI Tools and AI-Assisted Workflows |
| CRM and Busines Management | CRM and Business Management |
| DNS and Security | DNS and Security |
| Email marketing and Deliverability | Email Marketing and Deliverability |
| Google Workspace Administration | Google Workspace Administration |
| IT Support and Systems Administration | IT Support and Systems Administration |
| Lead Generation and Sales Operations | Lead Generation and Sales Operations |
| Microsft 365 Administration | Microsoft 365 Administration |
| Project Management and Collaboration | Project Management and Collaboration |
| Recruitment and HR Technology | Recruitment and HR Technology |
| Workflow Automation and Integration | Workflow Automation and Integrations |

## Screenshot inventory

Titles describe visible interfaces only, without inferred project results. Related skills below use exact central-content labels. Each source row is recorded, including the duplicate.

| # | Source folder / original filename | Tool and final headline | Related skills | Publication decision / asset |
|---|---|---|---|---|
| 1 | Additional Business and IT Tools / `v2_Screenshot 2026-10-17 215859.jpg` | **Microsoft OneNote**: Microsoft OneNote: SharePoint Onboarding Guide | Technical Documentation, Microsoft OneNote | Published: `public/work-examples/business/microsoft-onenote-sharepoint-onboarding-guide.webp` |
| 2 | Additional Business and IT Tools / `v2_Screenshot 2026-10-17 215911.jpg` | **Microsoft OneNote**: Microsoft OneNote: Workable Access Guide | Technical Documentation, Microsoft OneNote | Published: `public/work-examples/business/microsoft-onenote-workable-access-guide.webp` |
| 3 | AI Tools and Assisted Workflows / `v2_Screenshot 2026-10-17 215348.jpg` | **Claude**: Claude: AI-Assisted Process Documentation | Claude, AI-Assisted Process Optimization | Published: `public/work-examples/ai/claude-ai-assisted-process-documentation.webp` |
| 4 | AI Tools and Assisted Workflows / `v2_Screenshot 2026-10-17 215445.jpg` | **Claude**: Claude: Workflow Design Notes | Claude, AI-Assisted Workflow Design | Private draft. Private workflow notes and code; useful content cannot be safely separated. |
| 5 | CRM and Busines Management / `v2_creenshot 2026-10-17 204603.jpg` | **Microsoft Power Platform**: Microsoft Power Platform: Environment Administration | Microsoft Dynamics 365, CRM Integrations | Published: `public/work-examples/crm/microsoft-power-platform-environment-administration.webp` |
| 6 | CRM and Busines Management / `v2_Screenshot 2026-10-17 204732.jpg` | **GoHighLevel**: GoHighLevel: Appointment Calendar | GoHighLevel (HighLevel) | Published: `public/work-examples/crm/gohighlevel-appointment-calendar.webp` |
| 7 | CRM and Busines Management / `v2_Screenshot 2026-10-17 205100.jpg` | **Zoho**: Zoho: API Applications and Scheduled Automation | CRM Integrations | Published: `public/work-examples/crm/zoho-api-applications-and-scheduled-automation.webp` |
| 8 | CRM and Busines Management / `v2_Screenshot 2026-10-17 205300.jpg` | **ClickUp**: ClickUp: Business Process Automation Rules | Workflow and Pipeline Automation, CRM Integrations, ClickUp Automations, Business Process Automation | Published: `public/work-examples/crm/clickup-business-process-automation-rules.webp` |
| 9 | DNS and Security / `v2_Screenshot 2026-10-17 213648.jpg` | **Microsoft 365 Admin Center**: Microsoft 365 Admin Center: Domain Management | Domain Health Monitoring, Domain Management | Published: `public/work-examples/security/microsoft-365-admin-center-domain-management.webp` |
| 10 | DNS and Security / `v2_Screenshot 2026-10-17 213824.jpg` | **Microsoft Defender**: Microsoft Defender: Device Security Inventory | Microsoft Defender, Security Policies | Published: `public/work-examples/security/microsoft-defender-device-security-inventory.webp` |
| 11 | DNS and Security / `v2_Screenshot 2026-10-17 214058.jpg` | **Cloudflare**: Cloudflare: Domain Overview | Domain Health Monitoring, Cloudflare, Domain Management | Published: `public/work-examples/security/cloudflare-domain-overview.webp` |
| 12 | DNS and Security / `v2_Screenshot 2026-10-17 214143.jpg` | **Microsoft Defender**: Microsoft Defender: Incident Investigation Overview | Microsoft Defender, Account Security, Email Security | Published: `public/work-examples/security/microsoft-defender-incident-investigation-overview.webp` |
| 13 | Email marketing and Deliverability / `v2_Screenshot 2026-10-17 211417.jpg` | **Reply.io**: Reply.io: Outreach Contact Management | Email Marketing Operations, Reply.io, Audience Segmentation | Published: `public/work-examples/email/reply-io-outreach-contact-management.webp` |
| 14 | Email marketing and Deliverability / `v2_Screenshot 2026-10-17 211424.jpg` | **Reply.io**: Reply.io: Outreach Sequence Builder | Email Outreach Automation, Email Sequence Management, Email Personalization, Reply.io | Published: `public/work-examples/email/reply-io-outreach-sequence-builder.webp` |
| 15 | Google Workspace Administration / `v2_Screenshot 2026-10-17 204111.jpg` | **Google Admin Console**: Google Admin Console: User Directory and Organizational Units | Google Workspace Admin Console, User Provisioning and Deprovisioning, Organizational Units | Published: `public/work-examples/google/google-admin-console-user-directory-and-organizational-units.webp` |
| 16 | Google Workspace Administration / `v2_Screenshot 2026-10-17 204211.jpg` | **Google Admin Console**: Google Admin Console: User Event Investigation | Google Workspace Admin Console, Security Policies, Account Recovery and Troubleshooting | Published: `public/work-examples/google/google-admin-console-user-event-investigation.webp` |
| 17 | Google Workspace Administration / `v2_Screenshot 2026-10-17 204341.jpg` | **Google Cloud**: Google Cloud: Project Console | Category example only | Published: `public/work-examples/google/google-cloud-project-console.webp` |
| 18 | IT Support and Systems Administration / `d365_1.png` | **Dynamics 365**: Dynamics 365: Closed Support Cases | Microsoft Dynamics 365, Technical Troubleshooting, End-User Support, Troubleshooting and Escalation | Published: `public/work-examples/support/dynamics-365-closed-support-cases.webp` |
| 19 | IT Support and Systems Administration / `d365_2.png` | **Dynamics 365**: Dynamics 365: Support Case Feedback Workspace | Microsoft Dynamics 365, Technical Documentation, End-User Support | Private draft. Customer support feedback and case details. |
| 20 | IT Support and Systems Administration / `d365_3.png` | **Dynamics 365**: Dynamics 365: Technical Support Case Workspace | Microsoft Dynamics 365, Microsoft 365 Technical Support, Technical Troubleshooting | Published: `public/work-examples/support/dynamics-365-technical-support-case-workspace.webp` |
| 21 | IT Support and Systems Administration / `d365_4.png` | **Dynamics 365**: Dynamics 365: Customer Support Feedback Workspace | Microsoft Dynamics 365, End-User Support | Private draft. Customer feedback and identifying support records. |
| 22 | Lead Generation and Sales Operations / `v2_Screenshot 2026-10-17 211703.jpg` | **Apollo.io**: Apollo.io: Prospect List Management | Apollo.io, Lead List Building, Prospect Research | Published: `public/work-examples/leads/apollo-io-prospect-list-management.webp` |
| 23 | Lead Generation and Sales Operations / `v2_Screenshot 2026-10-17 211846.jpg` | **Clay**: Clay: Enrichment Table with Apify Imports | Clay, Lead Enrichment, Contact Data Management, Apify | Published: `public/work-examples/leads/clay-enrichment-table-with-apify-imports.webp` |
| 24 | Lead Generation and Sales Operations / `v2_Screenshot 2026-10-17 212446.jpg` | **Apify**: Apify: Actor Library | Lead Generation, Prospect Research, Apify | Published: `public/work-examples/leads/apify-actor-library.webp` |
| 25 | Microsft 365 Administration / `v2_Screenshot 2026-10-17 203403.jpg` | **Microsoft 365 Admin Center**: Microsoft 365 Admin Center: User and License Administration | Microsoft 365 Admin Center, Microsoft 365 Licensing and User Management, User Account Administration | Published: `public/work-examples/microsoft/microsoft-365-admin-center-user-and-license-administration.webp` |
| 26 | Microsft 365 Administration / `v2_Screenshot 2026-10-17 203528.jpg` | **Exchange Admin Center**: Exchange Admin Center: Mailbox Management | Microsoft Exchange Online, Mailbox Management and Permissions, Microsoft 365 Technical Support | Published: `public/work-examples/microsoft/exchange-admin-center-mailbox-management.webp` |
| 27 | Microsft 365 Administration / `v2_Screenshot 2026-10-17 203717.jpg` | **Microsoft Graph PowerShell**: Microsoft Graph PowerShell: Directory User Query | Microsoft 365 Licensing and User Management, Identity and Access Management, Microsoft Graph PowerShell | Private draft. Directory results and connection details; redaction leaves insufficient evidence. |
| 28 | Microsft 365 Administration / `v2_Screenshot 2026-10-17 203808.jpg` | **Microsoft Defender**: Microsoft Defender: Security Administration Dashboard | Microsoft 365 Security and Access Management, Microsoft Defender | Published: `public/work-examples/microsoft/microsoft-defender-security-administration-dashboard.webp` |
| 29 | Project Management and Collaboration / `v2_Screenshot 2026-10-17 214712.jpg` | **ClickUp**: ClickUp: Task and Workflow Coordination | ClickUp, Task Management, Workflow Coordination | Published: `public/work-examples/collaboration/clickup-task-and-workflow-coordination.webp` |
| 30 | Project Management and Collaboration / `v2_Screenshot 2026-10-17 214943.jpg` | **Dynamics 365**: Dynamics 365: Lead Record Collaboration Workspace | Microsoft Dynamics 365, Workflow Coordination | Private draft. Customer lead and contact record. |
| 31 | Project Management and Collaboration / `v2_Screenshot 2026-10-17 215201.jpg` | **monday.com**: monday.com: Project Tracking Board | Task Management, Workflow Coordination, monday.com | Private draft. Project, customer and account details. |
| 32 | Recruitment and HR Technology / `v2_Screenshot 2026-10-17 214436.jpg` | **Workable**: Workable: Applicant Tracking Workspace | Workable, Applicant Tracking Systems, Candidate Database Management | Private draft. Candidate and job details; redaction leaves insufficient evidence. |
| 33 | Recruitment and HR Technology / `v2_Screenshot 2026-10-17 214502.jpg` | **Zoho People**: Zoho People: Employee Administration | Zoho People, HR Systems Administration | Private draft. Employee records and HR details. |
| 34 | Recruitment and HR Technology / `v2_Screenshot 2026-10-17 214536.jpg` | **Zoho Recruit**: Zoho Recruit: Recruitment Pipeline Dashboard | Zoho Recruit, Applicant Tracking Systems, Recruitment Pipeline Management | Published: `public/work-examples/recruitment/zoho-recruit-recruitment-pipeline-dashboard.webp` |
| 35 | Workflow Automation and Integration / `v2_Screenshot 2026-10-17 205300.jpg` | **ClickUp**: ClickUp: Business Process Automation Rules | Workflow and Pipeline Automation, CRM Integrations, ClickUp Automations, Business Process Automation | Shared asset (same exact SHA-256 as #8). Published: `public/work-examples/crm/clickup-business-process-automation-rules.webp` |
| 36 | Workflow Automation and Integration / `v2_Screenshot 2026-10-17 205628.jpg` | **n8n**: n8n: Workflow Management Overview | Workflow Design, n8n | Published: `public/work-examples/automation/n8n-workflow-management-overview.webp` |
| 37 | Workflow Automation and Integration / `v2_Screenshot 2026-10-17 205655.jpg` | **n8n**: n8n: Recruitment Integration Workflow | Workflow Design, Cross-Platform Integrations, n8n | Published: `public/work-examples/automation/n8n-recruitment-integration-workflow.webp` |
| 38 | Workflow Automation and Integration / `v2_Screenshot 2026-10-17 205914.jpg` | **GoHighLevel**: GoHighLevel: Appointment Confirmation and Reminder Flow | GoHighLevel Workflows, Automated Notifications, Automated Follow-Ups | Published: `public/work-examples/automation/gohighlevel-appointment-confirmation-and-reminder-flow.webp` |
| 39 | Workflow Automation and Integration / `v2_Screenshot 2026-10-17 210308.jpg` | **Make.com**: Make.com: Scenario Routing Canvas | Make.com, Workflow Design, Cross-Platform Integrations | Published: `public/work-examples/automation/make-com-scenario-routing-canvas.webp` |
| 40 | Workflow Automation and Integration / `v2_Screenshot 2026-10-17 210342.jpg` | **Zapier**: Zapier: Business Integration Automations | Zapier, Business Process Automation, Cross-Platform Integrations | Published: `public/work-examples/automation/zapier-business-integration-automations.webp` |
| 41 | Workflow Automation and Integration / `v2_Screenshot 2026-10-17 210355.jpg` | **Power Automate**: Power Automate: Cloud Flow Administration | Microsoft Power Automate, Workflow Design | Published: `public/work-examples/automation/power-automate-cloud-flow-administration.webp` |
| 42 | Workflow Automation and Integration / `v2_Screenshot 2026-10-17 210553.jpg` | **Exchange Online PowerShell**: Exchange Online PowerShell: Application Permission Scope Check | Microsoft 365 Security and Access Management, Identity and Access Management | Published: `public/work-examples/automation/exchange-online-powershell-application-permission-scope-check.webp` |

## Editing and publication

1. Inspect the actual screenshot to identify its platform. Preserve the source folder as its primary category, even when another tool is displayed. Do not infer expertise or outcomes from the folder name.
2. Permanently remove people, contact details, customer names, private domains, case IDs, account identifiers, credentials, internal URLs, and confidential records from a separate copy. Keep the original outside the repository.
3. Export a flattened optimized image into the corresponding public folder only when suitable for publication. Reinspect the saved image at full size. Never place draft originals in public.
4. Add or update a `workExamples` record. Use stable IDs, a tool name, a factual headline, caption, alt text, dimensions, source category IDs, and matching skill IDs. Connect each related skill using its optional `exampleIds`. Reuse one example ID for shared evidence.
5. Set status to published only after the copy is reviewed. Leave unresolved records as draft with an empty image path. A published screenshot and a published project are independent approvals.
6. Rebuild, run the export checks, and redeploy the `out/` directory. Static Cloudflare Pages has no runtime upload or content database.

## Current presentation: overview flips and category collections

The original compact category cards and their six-item preview, expand controls, search, and category filters are preserved. Hovering a category card flips it to one approved representative screenshot. The small image control toggles the face for keyboard and touch users. The All Categories filter button itself does not flip. Back faces show only one image, its tool badge, and its descriptive title; card height does not increase for a full hidden tools list.

Flips apply only to All Categories. Selecting an individual category shows a static skills card followed by every published screenshot associated with that category in a responsive two-column collection (one column on mobile). Skill search does not filter the collection. Each screenshot has a tool badge, descriptive title, and caption. Shared assets appear once in each associated category.

Individual skill labels still use one selected screenshot. `featuredExampleId` selects an override; otherwise the first approved referenced example is used. Skill previews remain dismissible and hoverable. Clicking a collection image or skill preview opens a full-size single-image viewer with zoom, Close, Escape, focus containment, and opener restoration. There are no carousels or Previous/Next controls inside the viewer.

The All Categories overview retains seven reviews while cards flip. Selecting a category or opening a full-size screenshot hides feedback; closing restores it only on the overview. Reduced motion switches card faces instantly. Unsupported skills stay ordinary labels and unresolved private images remain excluded.

### Representative category selections

Selections use only already sanitized, approved copies. Identifying records remain permanently removed, even when that limits the visible portion of an interface. Exact platform screenshots are preferred over indirect evidence. The complete source inventory above remains available for future central-content edits; it does not create an image collection in the interface.

| Category | Selected example | Headline |
|---|---|---|
| Microsoft 365 Administration | `evidence-25` | Microsoft 365 Admin Center: User and License Administration |
| Google Workspace Administration | `evidence-15` | Google Admin Console: User Directory and Organizational Units |
| CRM and Business Management Platforms | `evidence-05` | Microsoft Power Platform: Environment Administration |
| Workflow Automation and Integrations | `evidence-37` | n8n: Recruitment Integration Workflow |
| Email Marketing and Deliverability | `evidence-14` | Reply.io: Outreach Sequence Builder |
| Lead Generation and Sales Operations | `evidence-23` | Clay: Enrichment Table with Apify Imports |
| IT Support and Systems Administration | `evidence-18` | Dynamics 365: Closed Support Cases |
| DNS and Security | `evidence-09` | Microsoft 365 Admin Center: Domain Management |
| Recruitment and HR Technology | `evidence-34` | Zoho Recruit: Recruitment Pipeline Dashboard |
| Project Management and Collaboration | `evidence-29` | ClickUp: Task and Workflow Coordination |
| AI Tools and AI-Assisted Workflows | `evidence-03` | Claude: AI-Assisted Process Documentation |
| Additional Business and IT Tools | `evidence-02` | Microsoft OneNote: Workable Access Guide |

The Dynamics 365 skill explicitly selects the Dynamics closed-cases screenshot. CRM Integrations selects the Zoho API/scheduler interface, and Technical Documentation selects the clearer OneNote Workable guide. Other individual skills retain their first approved reference.

## Preparation audit

`docs/assets/work-example-manifest.json` records source hashes and public-copy hashes for deduplication and integrity checks. It contains no source image bytes. Private draft filenames and audit records are repository documentation, not exported website content.
