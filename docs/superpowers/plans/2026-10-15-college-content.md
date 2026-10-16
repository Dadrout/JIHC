# JIHC College Content Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [x]`) syntax for tracking.

**Goal:** Help prospective students and parents understand JIHC, compare its two main majors, and take a clear next step toward applying.

**Architecture:** Rewrite the six existing HTML pages in place. Programs establishes the terminology used elsewhere; Admissions establishes the preparation sequence used on Home. Preserve the existing CSS, JavaScript, structure, images, links and native interactions unless a specific text-fit problem requires a small adjustment.

**Tech Stack:** Static HTML, shared and page-specific CSS, vanilla JavaScript, local fonts and photographs.

**Spec:** The user-approved in-chat content sample and audience brief, approved on 2026-10-15. Existing visual constraints: [JIHC design master](../../../design-system/jihc/MASTER.md).

## Global Constraints

- Audience: prospective students and parents choosing a college. Keep the current English language.
- The user confirmed IT and Accounting and Audit as the two current main majors.
- Use direct language, replace repeated caveats with one useful information note, and avoid invented outcomes, deadlines, or promises.
- Keep the home hero as an edge-to-edge, full-height video with the original headline and overlay navigation.
- Do not add a video play/pause button.
- Keep desktop layouts; do not introduce responsive breakpoints or mobile navigation.
- Do not use `ch` units.
- Leave the separate `video-output` project unchanged.
- Do not add unsupported statistics, guaranteed jobs, current intake dates, fees, entry grades, accreditation claims, or admission requirements.
- Treat Web/Mobile/Design as directions and technician/technician-programmer as qualifications. Do not equate these categories.
- Management and Marketing appear in the published specialty list; their relationship to the current Accounting and Audit intake remains unconfirmed. Do not present that relationship as established.
- Keep contact details consistent: `+7 (707) 802-00-88`, `info@jihc.edu.kz`, Alexander Pushkin Street, 154, Taraz.
- Do not create tests that match exact marketing prose. Use editorial review, link validation and browser checks for this content change.
- This folder is not a Git repository. Make a dated backup outside the project before implementation; do not run commits or initialize Git as part of this work.

## Source Decisions

Sources inspected on 2026-10-15:

- https://jihc.edupage.org/ supports the official contact details and college location.
- https://jihc.edupage.org/a/-12 lists multiple specialties and qualifications, including IT-related qualifications, Accounting and Audit, Management and Marketing. It does not independently establish the user-confirmed two-major structure or a current intake.
- https://jihc.edupage.org/register/ is labelled Admissions 2025 and displayed a closed application form. Do not use its year as a current deadline or label it as an open application route.
- https://jihc.edupage.org/a/-15 contains placeholder text. Do not derive accommodation availability, prices, capacity or application conditions from it.
- Individual Instagram posts already linked in the project may support dated activity examples. Verify specific award/event claims before retaining them; if inaccessible, remove the unsupported detail rather than making it stronger.

## Review Focus

1. A student comparing directions and qualifications must see the distinction; check Programs and About side by side in Task 1.
2. A parent looking for current fees or dates must not mistake old or unconfirmed information for policy; check every Admissions answer in Task 2.
3. A visitor using the contact form must understand the email-app handoff; preserve its actual behavior and verify labels and native validation in Task 2.
4. A reader viewing college posts must not mistake old examples for upcoming events; check source support and time-related wording in Task 3.
5. A longer headline or link must remain readable in the existing desktop grids; inspect all pages at 1280, 1440 and 1920 pixels in Task 4.

## File Map

| File | Responsibility |
| --- | --- |
| `programs/index.html` | Authoritative on-site explanation of the two majors, directions and qualifications |
| `about/index.html` | College identity, location and supported context, with a short study overview |
| `admissions/index.html` | Preparation sequence, honest answers to applicant questions and official contact route |
| `contact/index.html` | Contact methods, visit information and accurate email-draft instructions |
| `student-life/index.html` | Specific club/activity examples and how to find participation information |
| `home/index.html` | Concise introduction and summaries pointing into the five detail pages |

Update page-specific meta descriptions alongside the copy. Shared navigation and footer terminology must stay consistent across all six files.

### Task 1: Establish Programs and College Identity

**Files:** Modify `programs/index.html` and `about/index.html`.

**Interfaces:** Consumes the confirmed two-major structure and source decisions above. Produces the terminology and study descriptions reused by Home and Admissions. Preserve `#program-comparison-title` and all existing page routes.

- [x] Back up the six HTML files outside the project before editing.
- [x] Rewrite Programs around the approved introduction: “Explore IT or Accounting and Audit at Jambyl Innovation High College in Taraz.” Keep the two major explanations specific and concise; distinguish directions from qualifications.
- [x] Keep one intake-information note, with the official phone number and relevant source link. Remove repetitions of the same note elsewhere on the page.
- [x] Rewrite About to answer what JIHC is, where it is, and what students can study. Remove unsupported status claims. Keep its study overview shorter than Programs and link to the full comparison.
- [x] Update both meta descriptions to describe the actual page, not a generic list of all site topics.
- [x] Review both pages side by side: no disagreement on majors, directions, qualifications or Management/Marketing. Open each primary link and the program-comparison anchor in a browser.

### Task 2: Make Admissions and Contact Useful

**Files:** Modify `admissions/index.html` and `contact/index.html`.

**Interfaces:** Consumes Task 1 terminology. Produces the preparation sequence reused by Home. Preserve `.faq-item` disclosures and the contact form's field names, validation attributes and `mailto:` destination.

- [x] Order the five preparation steps: choose a field; confirm eligibility and intake availability; request the official document checklist; prepare the requested documents; follow the college's submission instructions. Give each step one concrete action without inventing a requirement.
- [x] Rewrite each FAQ to answer what is actually known first, then state exactly what the applicant should ask and how to contact JIHC. Do not present an unanswered question as an established policy.
- [x] Consolidate the general intake caveat into one clearly located note. Keep short, question-specific uncertainty where needed; avoid “ask the college” as the entire answer.
- [x] Use the Contact page to distinguish calling, emailing and visiting. Keep the address consistent and remove repeated visit instructions.
- [x] Describe the form as an email-app handoff, not website delivery. Do not claim a response time, successful submission or supported attachments. Preserve the existing form behavior; any functional defect becomes a separate scoped issue.
- [x] Update both meta descriptions and action labels.
- [x] Check FAQ opening/closing with keyboard Enter; check form labels and native required/email/minimum-length validation. Check `tel:`, `mailto:` and map URLs and confirm no copy promises direct website submission.

### Task 3: Give Student Life and Home Specific Content

**Files:** Modify `student-life/index.html` and `home/index.html`.

**Interfaces:** Consumes the terminology from Task 1 and preparation sequence from Task 2. Produces short summaries that link to their detail pages. Preserve the home hero headline, video markup and overlay navigation.

- [x] Rewrite Student Life around specific examples already documented: club interests, reading and college celebrations. Avoid invented schedules, universal participation promises or “upcoming” labels for old posts.
- [x] Verify named event/award claims against the linked individual posts. If support cannot be read, omit the unverified detail while retaining supported photographs and accurately labelled links.
- [x] Give each activity story a distinct point and one clear action. Remove repeated descriptions of the same Club Fair list.
- [x] Rewrite Home summaries after the detail pages are settled. Introduce the college briefly, explain the two majors without duplicating Programs, mirror the Admissions sequence and select concrete community examples.
- [x] Replace ambiguous duplicate action labels with destination-specific text where useful, such as “Explore IT” and “Explore Accounting and Audit.” Do not add new sections or alter the hero headline.
- [x] Update both meta descriptions. Review Home against all five detail pages for contradictions and repeated paragraphs.

### Task 4: Cross-Page Editorial and Browser Verification

**Files:** Review the six modified HTML files. CSS adjustments are allowed only to resolve demonstrated text-fit issues, while retaining the agreed design and constraints.

**Interfaces:** Consumes the six completed pages. Produces a consistent, verified content revision and a short completion report.

- [x] Read the site as a prospective student, then as a parent: locate study choices, application preparation, cost/date questions, contact methods and student-life examples without relying on prior conversation context.
- [x] Parse all six pages and check unique IDs, local `href`/`src`/`poster`/`srcset` targets, fragment anchors, one H1 per page and distinct meta descriptions. Expected: no broken local references, duplicate IDs or missing H1s.
- [x] Run JavaScript syntax verification: `node --check animations.js`. Expected: exit 0.
- [x] Open all six pages at 1280, 1440 and 1920 pixels. Expected: no desktop horizontal overflow, overlapping prose, clipped links, broken images or unreadable headings. This does not authorize adding mobile breakpoints.
- [x] Confirm the home video still fills the hero, the original headline remains, no playback control was introduced and reduced-motion behavior is preserved.
- [x] Recheck keyboard FAQ behavior, contact-form validation, active navigation and visible focus. Run automated accessibility checks if the existing local browser tools remain available; distinguish those checks from full accessibility certification.
- [x] Inspect the final changes: only approved content and any necessary text-fit adjustments; no changes under `video-output`, no `ch` units, no responsive breakpoint rules, no fabricated current intake facts.
- [x] Report the revised content, verification results and any remaining information that requires the college's confirmation.

## Execution Result — 2026-10-15

Completed using three GPT-6 Luna drafting agents, three task reviewers and one independent final reviewer. Six HTML pages were revised; CSS, JavaScript, images and the separate video project stayed unchanged. Static integrity, real local navigation, 18 desktop page/viewport checks, native FAQ/form behavior and automated accessibility checks passed. Detailed social-post claims that could not be verified were removed. The saved pre-edit archive and review reports are at `/tmp/projectfair-content-luna/`.
