# Prompt Templates

Use these templates during Day 24 and the capstone week. Learners should adapt them, test them, and document what changed.

## Learning a New Concept

```text
Task: Teach me the concept of [topic] at beginner level.
Context: I am in the MMAUG AI and DevOps Fundamentals Bootcamp. I know [what I know] and I am confused by [what is confusing].
Constraints: Avoid jargon where possible. Define important terms. Do not assume cloud or coding expertise.
Output: Use a short explanation, one analogy, three key terms, and one practice task.
Verification: List three things I should check in official documentation or trusted sources.
```

## README Review

```text
Task: Review this README for a beginner bootcamp capstone.
Context: The project is [project summary]. The target reviewer is a mentor who needs to understand and run or inspect the work.
Constraints: Focus on clarity, missing setup steps, responsible AI notes, DevOps evidence, and security cautions. Do not rewrite everything unless needed.
Output: Return a table with Issue, Why it matters, and Suggested fix.
Verification: Identify any claims that need proof, screenshots, test output, or source links.
```

## Debugging a Simple Error

```text
Task: Help me debug this error.
Context: I ran [command]. I expected [expected result]. I got [actual result]. Here is the error: [error text].
Constraints: Ask for missing information if needed. Give beginner-friendly steps. Do not suggest deleting files or secrets.
Output: Give likely causes, safe checks, and the next command to try.
Verification: Explain how I will know the problem is fixed.
```

## Context Checklist

Before asking an AI assistant for help, decide:

- What is the task?
- What files, notes, or errors are relevant?
- What should not be shared, such as secrets or private data?
- What output format do I need?
- What constraints should the answer follow?
- What sources, tests, or human checks will verify the answer?

## Prompt Test Table

| Test | Input | Expected output | Risk to check |
| --- | --- | --- | --- |
| Beginner explanation | Ask for a simple explanation of tokenization | Clear definition with an example | Overly technical wording |
| README review | Provide a short capstone README | Specific missing sections | Generic advice |
| Debugging | Provide an error message and command | Safe next steps | Unsafe or destructive command |
