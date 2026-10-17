# Platform icon provenance

The platform strip uses local Lucide capability symbols, paired with explicit platform names. These are illustrative icons, not official product logos. This avoids depending on third-party image hosts or unclear permissions for brand artwork.

All seven SVGs were rendered from the existing `lucide-react` 0.468.0 package. Source: [Lucide](https://lucide.dev/) and [Lucide repository](https://github.com/lucide-icons/lucide). License: ISC, with the package's Lucide/Feather notices preserved in `lucide-license.txt` alongside this file and in `public/images/platforms/LICENSE.txt` for distribution with the deployed SVGs. No new package was added.

| Platform | SVG in `public/images/platforms/` | Lucide symbol |
| --- | --- | --- |
| Microsoft 365 | microsoft-365.svg | Cloud |
| Google Workspace | google-workspace.svg | PanelsTopLeft |
| Dynamics 365 | dynamics-365.svg | ChartNoAxesCombined |
| GoHighLevel | gohighlevel.svg | Workflow |
| Zapier | zapier.svg | Zap |
| Make.com | make.svg | GitBranch |
| Power Automate | power-automate.svg | Workflow |

Platform names and icon paths are editable in `content/portfolio.ts`. Images are served as static assets; the browser animates the surrounding strip with CSS. There are no external requests, brand-asset packages, or runtime image processing.
