# Healthcare Leadgen — Portal Frontend Template

Forkable template for a per-customer Ideas Portal frontend. The entire
portal — submit flow, AI evaluation and refinement, mutual NDA gate, live
encryption demo — comes sealed from
[`@forklaunch/healthcare-leadgen-ui`](https://github.com/forklaunch/healthcare-leadgen/tree/main/packages/portal-ui),
published from the [healthcare-leadgen](https://github.com/forklaunch/healthcare-leadgen)
repo. A fork customizes **one file**.

## Spinning up a new customer

1. **Fork this repo** as `<customer>-healthcare-leadgen` (see
   `uchicago-healthcare-leadgen` and `mcg-healthcare-leadgen` for examples).
2. **Register the tenant** in the backend registry
   (`healthcare-leadgen` repo → `src/modules/innovations/domain/organizations.ts`)
   and set its `PORTAL_URL_<SLUG>` env var to this frontend's URL.
3. **Edit `src/config.ts`** — organization slug, branding copy, theme colors.
   Optionally update `<title>` in `index.html` and the dev port in
   `vite.config.ts`.
4. Done. `pnpm install && pnpm dev`.

## Local development

```bash
pnpm install
pnpm dev          # http://localhost:5173
```

Requires the innovations backend on port 9101 (see the healthcare-leadgen
repo). Set `VITE_API_URL` to point elsewhere (`.env.example`).

## Deploying (Vercel)

Import the fork into Vercel — `vercel.json` configures the Vite build and
SPA rewrite. Set `VITE_API_URL` to the deployed backend. Backend must allow
this origin via CORS and have the org's `PORTAL_URL_<SLUG>` pointed at the
deployed URL so emailed magic links resolve here.

## The sealed package

`vendor/forklaunch-healthcare-leadgen-ui-<version>.tgz` is the packed npm
package, committed so forks are self-contained. To upgrade, run
`pnpm pack:template` in `healthcare-leadgen/packages/portal-ui`, commit the
new tarball here, bump the `file:` spec in `package.json`, and
`pnpm install`. Once the package is published to the npm registry
(`pnpm publish` — it is publish-ready with public access), replace the
`file:` spec with a semver range and delete `vendor/`.
