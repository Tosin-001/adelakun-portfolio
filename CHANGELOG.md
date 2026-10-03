# Changelog

## 2026-08-07

- Created the first portfolio website version.
- Added responsive project, services, about, tech stack, and contact sections.
- Added the supplied temporary brand image as a replaceable local asset.
- Added accessible navigation and SEO metadata.
- Reworked the site into a monochrome visual system, including the contact section and project cards.
- Updated typography to Plus Jakarta Sans with Instrument Serif accents.
- Added scroll-reveal motion, hover motion, reduced-motion support, and an animated hamburger navigation button.
- Restored the original warm off-white page background.
- Restored the complete stylesheet after a failed background-color update caused the browser to render unstyled HTML.
- Added a dedicated all-projects page and a home-page button linking to it.
- Restored the uploaded logo's original colour in the header and about section.
- Added the VerifyNG screenshot as a local project asset and displayed it on both project pages.
- Refined project card typography with near-black titles and graphite descriptions.
- Updated project media containers to a responsive 16:9 aspect ratio for consistent 1920x1080 screenshots.
- Replaced Unicode arrow glyphs with CSS-drawn icons for consistent desktop and mobile rendering.
- Replaced the project-card arrow treatment with consistently aligned View labels.
- Replaced remaining CSS arrows with an SVG external-link icon for cross-device alignment.
- Restored the original warm off-white page background.

## 2026-09-29

- **Files added:** `index.new.html`, `projects.new.html`, `styles.new.css`, `docs/redesign-notes.md`, `PROJECT_STATUS.md`.
- **Backup:** originals copied to `backups/2026-09-29-pre-redesign/` before any work.
- **What changed:** built a redesign preview alongside the live files: dark gradient hero with a browser-frame project preview, violet/cyan accent system, card-based projects, services, and stack sections, gradient about and contact sections.
- **Why:** requested redesign (more professional, modern, better colour and imagery). All copy is unchanged. Existing files were not modified; the live site is unaffected until the redesign is approved and swapped in.

## 2026-09-29 (revision 2)

- **Files changed:** `styles.new.css`, `index.new.html` (preview files only; live files untouched).
- **Backup:** `backups/2026-09-29-hero-blue-mesh/` (copies of the preview files before this revision).
- **What changed:** replaced the purple/cyan accents with a blue palette (`#1f4fd8`, `#4c9bff`, `#0a1a4a`), removed the green availability dot, rebuilt the hero with a live animated blue mesh-gradient background (pure CSS, no libraries), taller hero, and a second overlapping project screenshot frame.
- **Why:** requested a better accent colour (no purple or green), a stronger hero, and the moving blue gradient from 21st.dev. The original is a React/Tailwind component, and this site is plain HTML/CSS, so the effect was recreated in CSS.
