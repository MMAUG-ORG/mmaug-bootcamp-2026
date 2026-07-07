# MMAUG Bootcamp Repository Guide

This guide defines a beginner-friendly repository structure for participants and organizers. It mirrors common Microsoft learning-event and hackathon repository patterns: a clear README, FAQ, project guidance, issue-based planning, templates, and a final submission format.

## Organizer Repository Structure

Recommended structure for the official MMAUG bootcamp repository:

```text
MMAUG-Bootcamp-2026/
├── README.md
├── BOOTCAMP-GUIDE.md
├── CAPSTONE-EXPECTATIONS.md
├── FAQ.md
├── PRIZES.md
├── REPOSITORY-GUIDE.md
├── days/
│   ├── day-01-welcome-and-learning-mindset.md
│   ├── day-02-computer-internet-developer-basics.md
│   └── ...
├── resources/
│   ├── ai-module-catalog.md
│   ├── learning-links.md
│   └── prompt-templates.md
└── templates/
    ├── daily-reflection.md
    ├── learner-profile.md
    └── project-submission.md
```

Optional additions:

```text
├── slides/
├── recordings/
├── mentor-notes/
├── sample-projects/
├── office-hours/
└── submissions/
```

## Participant Repository Structure

Each learner should create a personal bootcamp repository using this structure:

```text
ai-devops-fundamentals-bootcamp/
├── README.md
├── learner-profile.md
├── notes/
│   ├── day-01.md
│   ├── day-02.md
│   └── final-reflection.md
├── labs/
│   ├── day-08/
│   ├── day-09/
│   └── day-20/
├── resources/
│   └── prompt-templates.md
├── project/
│   ├── README.md
│   ├── project-plan.md
│   └── demo-outline.md
└── .github/
    └── workflows/
        └── ci.yml
```

## README Requirements

The participant README should include:

- Bootcamp title
- Learner name or GitHub handle
- Goal for the bootcamp
- Daily progress table
- Favorite resources
- Capstone project link
- Final reflection link
- Prompt templates or AI module notes, where relevant

Example progress table:

```markdown
| Day | Topic | Status | Notes |
| --- | --- | --- | --- |
| 1 | Welcome and goals | Done | [Notes](notes/day-01.md) |
| 2 | Developer basics | In progress | [Notes](notes/day-02.md) |
```

## Issue Structure

Use GitHub issues to plan the capstone. Suggested labels:

- `bootcamp`
- `documentation`
- `python`
- `ai`
- `prompt-engineering`
- `context-engineering`
- `devops`
- `agentic-devops`
- `capstone`
- `help wanted`
- `blocked`

Suggested issue format:

```markdown
## Goal

What needs to be completed?

## Acceptance Criteria

- [ ] Clear task 1
- [ ] Clear task 2
- [ ] Clear task 3

## Notes

Any links, blockers, or mentor feedback.
```

## Pull Request Structure

If learners work in teams, use pull requests for changes.

Suggested pull request format:

```markdown
## Summary

What changed?

## Type of Change

- [ ] Notes
- [ ] Lab
- [ ] Project feature
- [ ] Documentation
- [ ] Fix

## Checklist

- [ ] I tested or reviewed my changes
- [ ] I updated documentation if needed
- [ ] I can explain the change
```

## Commit Message Examples

Good beginner commit messages:

```text
Add Day 1 learner profile
Add Python study checklist script
Update README progress table
Add GitHub Actions workflow
Document responsible AI limitations
```

Avoid vague messages:

```text
update
stuff
changes
final final
```

## Branching Guidance

Beginners can start with simple commits to `main`. For team projects or mentor-led practice, use branches:

```text
notes/day-10
lab/python-files
project/capstone-readme
fix/ci-workflow
```

## GitHub Actions Starter Workflow

Participants can use this starter workflow for Python validation:

```yaml
name: Bootcamp CI

on:
  push:
  pull_request:

jobs:
  validate:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Set up Python
        uses: actions/setup-python@v5
        with:
          python-version: '3.12'

      - name: Check Python version
        run: python --version

      - name: Compile Python files
        run: python -m compileall .
```

## Submission Checklist

Before the final showcase, each participant should confirm:

- [ ] Repository is public or shared with mentors
- [ ] README explains the bootcamp work
- [ ] Daily notes or weekly summaries are present
- [ ] Labs are committed
- [ ] Capstone project has a project README
- [ ] GitHub Actions workflow or validation checklist is included
- [ ] Responsible AI note is included
- [ ] Demo outline is ready
- [ ] Final reflection is written

## Organizer Maintenance Guidance

Organizers should:

- Keep links current.
- Avoid adding advanced requirements to beginner days.
- Separate required work from stretch tasks.
- Review participant feedback weekly.
- Add examples when several learners get stuck on the same concept.
- Use issues to track curriculum improvements.
