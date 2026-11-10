# Painel SIVI — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the starter page with a responsive, modular SIVI industrial monitoring dashboard aligned to the Front-End Aulas 13 e 14 briefing and the TCC MVP scope.

**Architecture:** Keep the existing React + Vite app. `App.jsx` imports and orchestrates every reusable component, owns demo metadata/dashboard data, and passes data via props. `Container` and `GridContainer` receive content through `children`; focused dashboard sections show simulated marketplace and order tracking information.

**Tech Stack:** Existing React 19, Vite, CSS, and Oxlint; no added dependencies.

**Spec:** `docs/superpowers/specs/2026-11-10-painel-sivi-design.md`

## Global Constraints

- Continue using React + Vite and the existing dependency set.
- Organize reusable components in `src/components/` with PascalCase filenames and named function exports.
- `App.jsx` imports every created component, orchestrates the layout, and passes institutional/project metadata to the header and footer using props.
- At least one wrapper/grid component receives and renders `children`.
- Dashboard values and records are simulated and visibly labeled as demonstration data.
- Preserve SIVI's role as an intermediary; do not imply it manufactures, stores, sells, or delivers products.
- Dashboard content reflects the MVP path: demand → match → proposals → comparison/acceptance → order → stock/production → inspection/lot/QR → delivery → evaluation.
- No backend, authentication, persistent state, real integrations, payment processing, or AI claims.
- Use the existing visual direction: restrained graphite and orange, clear hierarchy, light dividers, and responsive CSS Grid/Flexbox.
- Save local delivery screenshots in `evidencias/`: desktop dashboard, mobile dashboard, and the `src/components/` tree in VS Code.
- Validate with `npm run dev`, desktop/mobile views, browser console, `npm run build`, and `npm run lint`.

## Review Focus

- At 360–390 px, the dashboard must not create page-level horizontal overflow; verify with the mobile viewport in Task 2.
- Long organization names and metric labels must wrap without colliding with controls; verify with an extended demo label in Task 2.
- A zero or empty operational count must remain understandable and must not look like an error; verify empty/zero demo states in Task 2.
- Status meaning must remain clear without color alone; inspect text/icon labels for pending, delayed, and released states in Task 2.
- The “demonstration data” disclosure must remain visible on desktop and mobile, and no metric may read as a real SIVI result; verify both screenshots and visible copy in Task 3.

---

### Task 1: Build the React component shell

**Files:**
- Create: `src/components/Container.jsx`
- Create: `src/components/Header.jsx`
- Create: `src/components/Sidebar.jsx`
- Create: `src/components/GridContainer.jsx`
- Create: `src/components/Footer.jsx`
- Modify: `src/App.jsx`
- Modify: `index.html`
- Modify: `src/index.css`
- Create: `tests/sivi-dashboard.test.mjs`
- Modify: `package.json`
- Delete: `src/assets/hero.png`, `src/assets/react.svg`, `src/assets/vite.svg`, `public/favicon.svg`, `public/icons.svg` (only after confirming no remaining imports/references)

**Interfaces:**
- `App.jsx` provides a `projectInfo` object with `systemName`, `contextLabel`, `dataMode`, and `version` strings plus arrays for dashboard data.
- `Header({ systemName, contextLabel, dataMode })` renders brand/context and the demonstration disclosure.
- `Sidebar({ items, activeItem })` renders the navigation labels for dashboard areas.
- `GridContainer({ children, className })` provides the responsive main content grid and renders `children`.
- `Footer({ systemName, version, year })` renders the provided project metadata.
- `Container({ children })` provides the outer app wrapper. `App.jsx` directly composes `Header`, `Sidebar`, `GridContainer`, and `Footer` inside it.

- [ ] **Step 1: Create `tests/sivi-dashboard.test.mjs` using Node `node:test` and Vite SSR**; assert that `App` renders the SIVI title, demonstration disclosure, and navigation. Run `node --test tests/sivi-dashboard.test.mjs` and confirm it fails against the Vite starter for the expected missing SIVI content.
- [ ] **Step 2: Replace the starter composition in `src/App.jsx` with a small metadata/data model and imports for all five required components**; render child content through `Container` and `GridContainer`.
- [ ] **Step 3: Implement named PascalCase React components in `src/components/`** with destructured props and semantic landmarks (`header`, `nav`, `main`, `footer`). Keep components focused on layout.
- [ ] **Step 4: Run the render test**; expected result: PASS for the rendered SIVI shell, project context, navigation, and metadata passed to the footer.
- [ ] **Step 5: Update `index.html` and global CSS** to remove template page defaults, set `lang="pt-BR"`, set a descriptive SIVI title, and establish reset/tokens and the app shell baseline.
- [ ] **Step 6: Remove starter-only image/icon assets after checking references** and confirm the source tree contains the five requested components.
- [ ] **Step 7: Run `node --test tests/sivi-dashboard.test.mjs`, `npm run build`, and `npm run lint`**; expected result: successful build and no lint errors from the new shell.

### Task 2: Implement the SIVI industrial monitoring dashboard

**Files:**
- Modify: `src/App.jsx`
- Modify: `src/App.css`
- Modify: `src/components/Sidebar.jsx`
- Modify: `src/components/GridContainer.jsx`
- Modify: `tests/sivi-dashboard.test.mjs`
- Create: `src/components/MetricCard.jsx`
- Create: `src/components/OrderPipeline.jsx`
- Create: `src/components/ActivityList.jsx`

**Interfaces:**
- `MetricCard({ label, value, detail, status })` renders one accessible summary metric.
- `OrderPipeline({ orders })` renders sample orders and their current flow stage, with text labels for each status.
- `ActivityList({ activities })` renders alerts for demand, proposal, quality, and delivery follow-up, plus a clear empty state when there are no activities.
- `App.jsx` passes only demo records; each order includes `code`, `buyer`, `supplier`, `stage`, and `updatedAt`; each activity includes `title`, `detail`, `status`, and `date`.

- [ ] **Step 1: Extend `tests/sivi-dashboard.test.mjs` to require the planned metric, order-stage, inspection, and activity content**; run it and confirm the dashboard assertions fail before implementing these sections.
- [ ] **Step 2: Replace the temporary grid child with dashboard sections** for demand/proposal/order indicators, order stages, pending inspections, and operational alerts grounded in the SIVI MVP.
- [ ] **Step 3: Add realistic but explicitly fictional Brazilian industrial sample content**; show data period/source or demonstration labeling and avoid unsupported claims like achieved savings, real conversion, or predictive AI.
- [ ] **Step 4: Style the dashboard in `App.css`** using graphite and orange accents, CSS Grid/Flexbox, clear hierarchy, lightweight separators, focus states, and text/icon labels for statuses.
- [ ] **Step 5: Add responsive behavior for desktop, tablet, and mobile**; collapse or reorganize navigation and cards without page-level horizontal overflow.
- [ ] **Step 6: Check zero values, empty activity list, long labels, and status semantics** at 360 px and desktop width; expected result: empty states are clear, content remains legible, controls do not overlap, and status meaning is not conveyed by color alone.
- [ ] **Step 7: Run `node --test tests/sivi-dashboard.test.mjs`, `npm run build`, and `npm run lint`**; expected result: successful build and no lint errors.

### Task 3: Run the app and prepare the requested evidence

**Files:**
- Modify: `README.md`
- Create: `evidencias/dashboard-desktop.png`
- Create: `evidencias/dashboard-mobile.png`
- Create: `evidencias/arvore-src-components.png`

**Interfaces:**
- README documents the project purpose, simulated-data limitation, and `npm install` / `npm run dev` startup commands.
- Evidence screenshots show the final desktop dashboard, the same dashboard in a mobile viewport, and the VS Code Explorer tree with `src/components/` expanded.

- [ ] **Step 1: Update `README.md`** with a concise project description, feature overview, data limitations, and local run commands.
- [ ] **Step 2: Start Vite with `npm run dev` and inspect the dashboard in a desktop browser viewport**; confirm no runtime errors and no browser-console errors.
- [ ] **Step 3: Inspect the same page at a 390 px mobile viewport and one tablet width**; confirm layout adapts and the page has no unintended horizontal overflow.
- [ ] **Step 4: Save the required screenshots under `evidencias/`**: desktop, mobile, and VS Code Explorer showing `src/components/`.
- [ ] **Step 5: Re-run `npm run build` and `npm run lint`** after final edits; expected result: both commands exit successfully.
- [ ] **Step 6: Review the project tree and README**; expected result: the component organization is clear, the default Vite/React starter presentation is gone, and the screenshots are present for the group to attach to the Classroom form.

---

## Scope notes for submission

The PDF also requests group/member names and a repository link for a Google Classroom form. Those details are not available in the provided files, so the local project will be prepared for submission but those fields must be supplied by the group. No external upload or form submission is part of this implementation plan.





