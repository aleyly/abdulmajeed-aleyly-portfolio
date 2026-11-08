# Portfolio polish — validation and owner tasks

Source: static GitHub Pages site, reviewed from baseline 74f90d9. No framework, build step or production dependency added. Arabic lang/RTL, existing Thmanyah type and navy/peach palette retained. Tests ran on 5 November 2026.

## Delivered changes

1. Removed visitor-facing activation and map-verification notes, including the same messages inside project dialogs and submission feedback. The map section is a compact selection of logo shortcuts. Unknown project facts stay absent rather than becoming invented values. Removed the unused competing portfolio-data.js module and its unused placeholder artwork.
2. Kept the recipient a.8668@hotmail.com. Preserved the honeypot and subject, made captcha=true explicit, and added an absolute same-site thank-you.html redirect. The optional Saudi phone field accepts local/international formats and Arabic digits. Explicit field labels, autocomplete and 16px input text are in place. AJAX success/failure and timeout retain an appropriate WhatsApp alternative; errors preserve the entered fields. Native submission without JavaScript remains available.
2b. Retained supplied team titles, added owner wording comments and renamed portrait files. Following the owner's later instruction the complete dedicated team section is now hidden; its content is retained in source.
3. The owner-supplied 39/4/10 numbers each live once in the marked data-stat HTML elements and remain visible without JavaScript. There are 14 selected portfolio records; these are not presented as the full 39-project record. The genuine residential testimonial is retained; two empty hospitality slots are hidden.
4. Added a short scope clarification with an owner approval comment. Kept the fee statement once, beside the primary contact CTA; no fee or free-call claim invented.
5. External web links use target=_blank and rel=noopener noreferrer. The existing Perfecto generic Maps search remains, with a direct-pin task in source.
6. Updated local SEO title/description. Retained the verified ProfessionalService JSON-LD with the existing phone, four cities and social profiles; canonical, robots.txt, sitemap.xml and favicon were already present and were verified. Open Graph and Twitter image metadata use the existing image's actual 1000 × 1200 dimensions. Its published URL returned HTTP 200 (179,529 bytes).
7. Added complete mobile menu state/focus management, Escape/outside closing, scroll lock, an accessible eight-link scrolling menu and a visible booking CTA even at 320 × 568. Floating WhatsApp respects the safe area and hides near contact/footer content and while the menu is open. Filters scroll/snap horizontally without wrapping; pressed states update. Tool tabs work by keyboard and all four quiz steps retain equal heights at every tested width. Both modal close controls are named إغلاق and work by touch. Decorative arrows are hidden from assistive technology. Added responsive image candidates where existing variants were available.
8. Reviewed focus, motion, contrast and performance. Existing focus styles and reduced-motion support were retained; no palette change was needed. The test artifacts stay outside the published source.

Later owner feedback: six original brand marks now appear as small, arranged logo tiles; Sanousha uses only the green application in both the identity gallery and project details; the team section is hidden; social links use local SVG icons with accessible names and focus/hover labels. Social icon sources and CC0 attribution are recorded under assets/icons/.

## Lighthouse mobile: before and after

Same homepage URL on the same local static server, same Chrome 131/Lighthouse 13.6 setup and default mobile simulated throttling. These are measured lab scores, not a production-speed guarantee.

| Category | Before | Final |
| --- | ---: | ---: |
| Performance | 96 | 96 |
| Accessibility | 100 | 100 |
| SEO | 100 | 100 |
| Best Practices | 100 | 100 |

Final CLS: 0.0262. No measured horizontal page overflow at the tested widths. Lighthouse full reports are local in ../audit/polish-before.report.* and ../audit/polish-final.report.*; they are not shipped.

## Browser and accessibility verification

- Puppeteer, kept outside the production repository, tested 320, 360, 390, 430 and 768px widths across index, library, privacy and thank-you pages. Additional checks covered 320 × 568 and desktop 1440px.
- No page errors or horizontal document overflow found. No overflow-x:hidden was introduced to mask layout defects. The small-screen form uses a single-column field layout, the social shortcuts wrap, and chips scroll within their own container.
- Touch: menu, project details, roadmap phase dialog, filters and quiz completion. Keyboard: focus containment and restoration in the menu, Escape closing, tool-tab navigation. Both close buttons function.
- Quiz step heights remained equal within each viewport: 826px at 320/360/390, 802px at 430, 804px at 768 in the measured test configuration.
- Floating shortcut was hidden while the contact form was visible; all text-entry controls measured at least 16px.
- Mocked mail success, rejection and malformed phone paths ran locally. No real mail or visitor data was sent. Native no-JS POST was intercepted locally and redirected to thank-you.html, verifying hidden fields and the fallback flow.
- Axe WCAG 2 A/AA and WCAG 2.1 AA checks found no violations in the initial pages, menu, project dialog, phase dialog or completed quiz. Body text/primary button contrast pairs measured 5.95:1 (muted/paper), 6.07:1 (brown/paper) and 8.70:1 (navy/peach). Original logo artwork is preserved.
- All static image tags have alt and dimensions. Decorative logos inside already labelled map/social links intentionally use empty alt. Below-fold content is lazy loaded; the featured image keeps fetchpriority=high. Viewport metadata permits zoom; theme-color remains navy.
- Screenshots are in qa-screenshots/, ignored by Git and not committed.

## Whole-repository internal-copy search

Searched tracked source for owner-note phrases, activation phrases, TODO and placeholder. The visitor-facing owner-verification/activation sentences have been removed. Remaining owner tasks are HTML comments, listed below. Standard input placeholder attributes and CSS ::placeholder selectors are normal field hints, not editorial placeholder content. An obsolete placeholder-image selector was removed. README/configuration comments are developer documentation and are not rendered in the website.

## Every remaining owner task

Team wording tasks are dormant while the team section remains hidden. Fill approved content only; do not expose empty testimonial slots.

| HTML location | Owner task |
| --- | --- |
| [index.html:95](https://github.com/aleyly/abdulmajeed-aleyly-portfolio/blob/main/index.html#L95) | Resolve the hospitality practitioner description here versus the institutional development consultant team title; approve one consistent positioning. |
| [index.html:174](https://github.com/aleyly/abdulmajeed-aleyly-portfolio/blob/main/index.html#L174) | Provide client-facing wording for Abdulmajeed Aleyly: what this member does for a cafe, restaurant or bakery owner. Retain the supplied title until approved. |
| [index.html:190](https://github.com/aleyly/abdulmajeed-aleyly-portfolio/blob/main/index.html#L190) | Provide client-facing wording for Mohammed Ali Ibrahim: what this member does for a cafe, restaurant or bakery owner. Retain the supplied title until approved. |
| [index.html:206](https://github.com/aleyly/abdulmajeed-aleyly-portfolio/blob/main/index.html#L206) | Provide client-facing wording for Mohammed El Sayed Farag: what this member does for a cafe, restaurant or bakery owner. Retain the supplied title until approved. |
| [index.html:349](https://github.com/aleyly/abdulmajeed-aleyly-portfolio/blob/main/index.html#L349) | Approve this scope sentence balancing the hospitality focus with salon and residential services. |
| [index.html:358](https://github.com/aleyly/abdulmajeed-aleyly-portfolio/blob/main/index.html#L358) | Supply approved city/activity, area and execution duration for incomplete project records in project-data.js; absent values stay hidden. |
| [index.html:359](https://github.com/aleyly/abdulmajeed-aleyly-portfolio/blob/main/index.html#L359) | Supply approved photos and service scope for Sub Art and residential projects; no substitute images or unconfirmed scope are shown. |
| [index.html:387](https://github.com/aleyly/abdulmajeed-aleyly-portfolio/blob/main/index.html#L387) | Approve wording clarifying that the portfolio shows selected projects from the 39-project record, rather than all completed work. |
| [index.html:414](https://github.com/aleyly/abdulmajeed-aleyly-portfolio/blob/main/index.html#L414) | Supply a second genuine hospitality-client testimonial, approved quotation, client name, project and permission to publish; fill this slot and remove hidden only when complete. |
| [index.html:451](https://github.com/aleyly/abdulmajeed-aleyly-portfolio/blob/main/index.html#L451) | Replace the Perfecto King Faisal Medical Complex generic Maps search with a direct project pin URL. |
| [index.html:590](https://github.com/aleyly/abdulmajeed-aleyly-portfolio/blob/main/index.html#L590) | State the approved first-session fee or confirm whether the first call is free; until then fees are determined on contact. |
| [index.html:601](https://github.com/aleyly/abdulmajeed-aleyly-portfolio/blob/main/index.html#L601) | Confirm FormSubmit activation for the existing recipient and test actual inbox delivery before relying on email. |

## Commits

One commit for each requested numbered section, including 2b, plus separate commits for original logo assets and the owner's later design instructions. The section-8 validation report is the commit containing this document.

| Commit | Purpose |
| --- | --- |
| [555ce9c](https://github.com/aleyly/abdulmajeed-aleyly-portfolio/commit/555ce9c0cfdc5a1b89a988e91209511836b2799d) | Show original brand logos in the identity gallery |
| [7d87152](https://github.com/aleyly/abdulmajeed-aleyly-portfolio/commit/7d87152d8127cc4425cfebbe3c4e493c344ee915) | 1: Remove visitor-facing internal notes and simplify map shortcuts |
| [1b5d4aa](https://github.com/aleyly/abdulmajeed-aleyly-portfolio/commit/1b5d4aaeff71d73c695f00b9b949a854ce71338f) | 2: Complete accessible FormSubmit feedback and thank-you fallback |
| [da7ac5f](https://github.com/aleyly/abdulmajeed-aleyly-portfolio/commit/da7ac5f6b85b0be32da54935a1a1fcbcbc655580) | 2b: Document team wording decisions and name portrait files clearly |
| [b50d546](https://github.com/aleyly/abdulmajeed-aleyly-portfolio/commit/b50d546d894c9a17d7c95dd3c676eae3a93dbc97) | 3: Centralize editable stats and prepare hidden testimonial slots |
| [a410abc](https://github.com/aleyly/abdulmajeed-aleyly-portfolio/commit/a410abcc65a10aa457f6dc731ea9b17e09b71d1f) | 4: Clarify project scope and consolidate consultation fee wording |
| [a9fa942](https://github.com/aleyly/abdulmajeed-aleyly-portfolio/commit/a9fa942426ce2e7e42301006b4cb0c1f7ad1c13c) | 5: Secure external links and flag the remaining generic map search |
| [333c768](https://github.com/aleyly/abdulmajeed-aleyly-portfolio/commit/333c7683502eedf4ca5927a1d28615d17428631c) | 6: Add local search wording and complete social image metadata |
| [6a24a06](https://github.com/aleyly/abdulmajeed-aleyly-portfolio/commit/6a24a065b6d02486a97591fccdbc3583ed16d441) | 7: Fix mobile navigation, touch interactions, responsive media and RTL layout |
| [aabea08](https://github.com/aleyly/abdulmajeed-aleyly-portfolio/commit/aabea0899b114f61375b29aeb617fd84b51633e6) | Apply owner feedback: compact logos, green Sanousha, hidden team and social icons |

## Remaining limits

- Actual inbox delivery and FormSubmit activation require the owner's confirmation. Browser tests simulated service replies; they do not establish real delivery.
- Missing project city/activity/area/duration, approved photos/scope and hospitality testimonials remain unfilled. No new project count, testimonial, price, email or location was invented.
- Perfecto still uses the requested generic Maps search until a direct pin is provided. External business opening status was not re-audited.
- Lighthouse was measured on the local homepage. GitHub Pages network/cache behavior and individual devices can produce different results; the other pages received responsive and axe checks, not separate before/after Lighthouse runs.


## Update — 8 November 2026

Added the owner-supplied project/budget and consultant videos as two separate lessons with summaries, original SVG covers/infographics, timed text and local checklists. Both sources are silent 1080×1920 H.264 videos (35s and 40s). The streams were copied without re-encoding and placed in fast-start MP4 containers. Published Amjad Alghamdi’s approved Kebeesat testimonial in the first hospitality slot; one empty slot remains hidden. Replaced Unicode arrows with currentColor SVGs so iOS does not render emoji. Prior Lighthouse figures above refer to the 5 November audit, not a new measurement of this update.

Added lesson 05, Brand Personality. The owner explicitly approved removing the leading black section. The original file is preserved outside the repository; the published H.264 clip runs 29s after trimming its first 11s. The lesson summarizes the four visible points only (traits, voice, visual personality and consistency); no missing first-step content was invented.

## Library update — corrected source and two new lessons

Replaced the Brand Personality lesson with the complete corrected 40-second source. Its missing introduction and first step are restored; the existing lesson URL is retained and the video/summary/cover/infographic/caption files are versioned to avoid stale 29-second media caches. Existing checklist keys are preserved. Added the Pricing and Taste vs Market lessons from the owner-supplied 40-second silent H.264 videos. The library now contains seven unique lessons. No price amounts or margin percentages were invented.

Moved the educational library to a standalone homepage section before the portfolio, and moved the featured Perfecto card into the portfolio. Navigation and primary section numbering now follow that order. The featured image is lazy-loaded in its new below-fold position.

Completed the icon correction across homepage, library, privacy, thank-you and dynamic UI states: library play badges, menu, modal closes, service/roadmap symbols and decorative separators now use inline currentColor SVGs. Unicode arrow correction alone did not cover the library play badge; this update closes that omission.
