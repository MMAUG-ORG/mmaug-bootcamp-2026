# MMAUG AI and DevOps Fundamentals Bootcamp 2026

Welcome to the **Malta Microsoft AI User Group (MMAUG) 30-Day AI and DevOps Fundamentals Bootcamp**.

This is an expert-led, beginner-friendly community programme built from sessions contributed by speakers across AI, cloud, software development, Git and GitHub, responsible AI, security, Microsoft Foundry, AI agents, Copilot, DevOps, CI/CD, governance, automation and related technology domains. The live programme is intentionally multidisciplinary: it is not structured around the syllabus of a single Microsoft certification exam.

Participants learn directly from practitioners, complete speaker-supported labs and finish with practical capstone projects. The goal is not to turn participants into experts in one month. It is to build vocabulary, sound technical habits, tooling confidence and enough hands-on experience to continue into projects, hackathons, internships and deeper specialist learning.

Microsoft AI-900 and AI-103 resources are included only as **optional self-paced follow-on learning**. They supplement the speaker-led programme and do not define its session order, curriculum or certificate requirements.

## Bootcamp Snapshot

- **Audience**: Beginners, students, career switchers, early-career technologists, and community members new to AI or DevOps
- **Programme dates**: 1–31 October 2026, with published live sessions, rest days and capstone workshops
- **Recommended pace**: 60 to 120 minutes per day
- **Format**: Live expert sessions, practical labs, guided independent study, reflection and final capstone projects
- **Focus areas**: AI concepts, responsible AI, AI security, Azure, Microsoft Foundry, LLMs, agents, Copilot, prompt design, Git and GitHub, DevOps, CI/CD, governance, automation and project delivery
- **Primary platforms**: GitHub, Microsoft Azure and Foundry tooling, Microsoft 365 Copilot, GitHub Copilot, Microsoft Learn and speaker-selected lab platforms

## Repository Structure

```text
MMAUG-Bootcamp-2026/
├── README.md
├── BOOTCAMP-GUIDE.md
├── CAPSTONE-EXPECTATIONS.md
├── FAQ.md
├── PRIZES.md
├── REPOSITORY-GUIDE.md
├── PROGRAMME-SCHEDULE.md
├── days/
│   ├── README.md
│   ├── day-01.md
│   └── day-31.md
├── resources/
│   ├── ai-module-catalog.md
│   ├── learning-links.md
│   ├── prompt-templates.md
│   └── session-labs.json
├── scripts/
│   └── sync-live-programme.mjs
└── templates/
    ├── daily-reflection.md
    ├── learner-profile.md
    └── project-submission.md
```

## What Participants Will Build

By the end of the bootcamp, each participant should have:

- A GitHub profile with a bootcamp repository
- Daily notes showing learning progress
- Basic command-line and Git confidence
- Small Python scripts
- A simple AI-assisted app, prompt library, or agentic workflow design
- A beginner DevOps workflow using GitHub Actions
- A final capstone project that demonstrates AI and DevOps fundamentals together

## How the Curriculum Is Organized

The curriculum follows the [published live programme](PROGRAMME-SCHEDULE.md), not an exam blueprint. Sessions are arranged to help beginners establish core concepts first and then explore applied topics delivered by specialist community speakers.

The programme brings together several connected domains:

- AI concepts, responsible AI, security, LLMs, prompting and model behaviour;
- Azure, Microsoft Foundry, AI agents, governance and Microsoft 365 Copilot;
- Git, GitHub, collaborative development and AI-assisted coding;
- DevOps, CI/CD, cloud architecture, automation and delivery practices; and
- practical capstone scenarios that require documentation, responsible design and evidence of implementation.

Each dated page under [`days/`](days/) identifies the actual speaker, session overview and approved public lab repository. The website calendar remains the source of truth for schedule changes.

## Optional Microsoft Self-Paced Learning

Participants who want additional structured study can use the Microsoft Learn resources collected in [`resources/learning-links.md`](resources/learning-links.md#microsoft-self-paced-certification-learning-paths).

- **AI-900 foundations** are retained as optional foundational reading. AI-900 was retired on 30 June 2026, so learners should check Microsoft Learn for the current replacement certification before planning an exam.
- **AI-103** is an intermediate self-paced path for developing AI apps and agents on Azure. Learners should treat it as follow-on study after building sufficient fundamentals and practical experience.

Neither path replaces attendance, speaker labs, capstone work or the MMAUG certificate-completion requirements.

## Capstone and Prizes

Participants should read [CAPSTONE-EXPECTATIONS.md](CAPSTONE-EXPECTATIONS.md) before choosing a final project.

MMAUG is working to secure sponsorship or support for Microsoft Certification exam vouchers or other prizes. Final prize availability will be confirmed before the capstone submission deadline. The provisional prize criteria are documented in [PRIZES.md](PRIZES.md).

## How to Use This Repository

1. Start with [BOOTCAMP-GUIDE.md](BOOTCAMP-GUIDE.md).
2. Check the [live programme and speaker lab repositories](PROGRAMME-SCHEDULE.md) for the actual session timetable and hands-on resources.
3. Use the daily lesson files in [days/](days/) during delivery.
4. Use the [optional Microsoft self-paced learning paths](resources/learning-links.md#microsoft-self-paced-certification-learning-paths) for further study beyond the live curriculum.
5. Review [CAPSTONE-EXPECTATIONS.md](CAPSTONE-EXPECTATIONS.md) before starting the capstone.
6. Read [FAQ.md](FAQ.md) before registration or onboarding.
7. Use [REPOSITORY-GUIDE.md](REPOSITORY-GUIDE.md) to understand how the bootcamp repo should be organized.
8. Copy the templates in [templates/](templates/) into your personal bootcamp repository.
9. Track your learning daily and submit your capstone at the end.

## Keeping the Live Programme in Sync

The files under [`days/`](days/) are generated from the public MMAUG programme. After an administrator changes the website calendar, run:

```bash
node scripts/sync-live-programme.mjs
```

Reviewed speaker lab URLs belong in [`resources/session-labs.json`](resources/session-labs.json). The generator preserves them and publishes them into the daily pages and [programme schedule](PROGRAMME-SCHEDULE.md).

## Community Expectations

All participants, mentors, speakers, and volunteers are expected to follow the MMAUG [Community Standard and Governance](https://mmaug-org.github.io/community-articles/governance/) as well as our [Code of Conduct](https://mmaug-org.github.io/community-articles/code-of-conduct/). You are advised to approach other learners, organizers, and speakers with respect, patience, and curiosity. This is a beginner-friendly space. Asking basic questions is not only allowed; it is part of the design.
