import type { PortalConfig } from '@forklaunch/healthcare-leadgen-ui';

/**
 * ⚠️ FORK CUSTOMIZATION POINT — this file is the entire per-customer diff.
 *
 * 1. Set organization.slug to the tenant slug registered in the backend
 *    (healthcare-leadgen repo: src/modules/innovations/domain/organizations.ts).
 * 2. Set the branding copy and (optionally) the theme colors.
 * 3. Update <title> in index.html and the dev port in vite.config.ts.
 *
 * Everything else — the submit flow, AI evaluation, NDA gate, encryption
 * demo — comes sealed from @forklaunch/healthcare-leadgen-ui.
 */
export const config: PortalConfig = {
  apiUrl: import.meta.env.VITE_API_URL ?? 'http://localhost:9101',
  organization: {
    slug: 'your-org-slug',
    displayName: 'Your Health System'
  },
  branding: {
    institution: 'Your Health System',
    portalName: 'Ideas Portal',
    tagline:
      'A confidential waitlist for clinical innovation ideas · HIPAA simulation — a demonstration of PHI-grade data handling',
    heroEyebrow: 'Your Health System · Clinical Innovation Program',
    emailPlaceholder: 'you@hospital.org'
  }
  // Optional theme (defaults to maroon + gold). Example:
  // theme: {
  //   brand: '#00305e',
  //   brandDark: '#001f40',
  //   brandDeep: '#00152b',
  //   accent: '#8ea9c9',
  //   accentBright: '#b8cbe4',
  //   accentSoft: '#dfe8f4',
  //   paper: '#f4f6f9',
  //   card: '#fdfdfe'
  // }
};
