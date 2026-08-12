# shahidnaveed-seo-and-guest-posting

This repository hosts a simple website template and SEO assets for AllNewJobsPakistan. The site files include structured data and best-practice metadata for improved discoverability.

Repo: https://github.com/shahidnaveed96/shahidnaveed-seo-and-guest-posting

---

## What I added for SEO
- SEO-friendly title and meta description tailored to allnewjobspakistan.com
- Keywords meta tag (supplemental; modern search engines rely less on keywords meta)
- Canonical link set to https://allnewjobspakistan.com/
- Open Graph & Twitter Card metadata for rich social sharing
- robots meta tag allowing indexing
- JSON‑LD Structured Data:
  - WebSite and Organization graph entries
  - Template example for JobPosting schema (commented) to be generated per job page
- meta-tags.html: standalone snippet you can include in other pages
- sitemap.xml (see file) and robots.txt for crawler guidance

## Files added/updated
- index.html — main landing page with SEO & JSON-LD
- meta-tags.html — head snippet for all pages
- README.md — this file
- sitemap.xml — sitemap template (update automatically or regenerate when you publish new jobs)
- robots.txt — crawler directives

## Next steps (recommended)
1. Replace placeholder assets and URLs (logo, og-image, social links) with your actual assets.
2. Implement server-side generation of JobPosting JSON-LD for each job details page using the provided template.
3. Generate a dynamic sitemap.xml (or re-run a sitemap generator) each time you add/remove job postings and point robots.txt to it.
4. Enable GitHub Pages for the repo or deploy these files to your production host at https://allnewjobspakistan.com/

If you want, I can now:
- Replace placeholders (logo URL, og-image, social links) if you provide them.
- Add a script or GitHub Action to auto-generate sitemap.xml when the site updates.
- Generate JobPosting JSON-LD for a sample job if you give a job post.

