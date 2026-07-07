# Day 22: GitHub Actions Introduction

## Objective

Understand CI automation and create a first GitHub Actions workflow.

## Core Topics

- Workflow
- Trigger
- Job
- Step
- Runner
- YAML
- CI basics

## Lesson Content

GitHub Actions can run checks automatically when code changes. This is a beginner-friendly way to experience DevOps automation. A workflow can check Python syntax, run tests, or validate project files.

## Hands-On Lab

1. Create `.github/workflows/ci.yml`.
2. Add a workflow that runs on push.
3. Set up Python.
4. Run `python -m compileall .`.
5. Commit and push the workflow.

## Deliverable

- `.github/workflows/ci.yml`

## Mentor Notes

YAML indentation will cause errors. Use those errors as learning moments.

