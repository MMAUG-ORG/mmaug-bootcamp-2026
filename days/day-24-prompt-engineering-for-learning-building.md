# Day 24: Prompt Engineering for Learning and Building

## Objective

Use AI tools more effectively for learning, building, review, and safe iteration.

## Core Topics

- Task prompts
- Context
- Constraints
- Examples
- Output format
- Few-shot prompting
- Prompt chaining
- Context engineering
- Context window budgeting
- Temperature and creativity settings
- Verification and evaluation
- Iteration
- Verification

## Lesson Content

Good prompts describe the task, provide context, state constraints, include useful examples, and ask for a specific output format. Prompting is not magic. It is a communication and evaluation skill. AI output should be reviewed, tested, and improved.

Prompt engineering focuses on the instruction and wording. Context engineering focuses on the information environment around the prompt: which files, notes, examples, retrieved passages, tool outputs, policies, and previous decisions the model should use. Strong AI work needs both.

A useful beginner prompt pattern is:

```text
Task: What should the model do?
Context: What facts, files, user needs, or background matter?
Constraints: What should the model avoid or obey?
Examples: What does a good answer look like?
Output: What format should the answer use?
Verification: What should I check before trusting it?
```

## Hands-On Lab

1. Create a prompt template for learning a new concept.
2. Create a prompt template for reviewing a README.
3. Create a prompt template for debugging a simple error.
4. Add verification questions to each template.
5. Create a context checklist for an AI-assisted coding task.
6. Create a prompt test table with 3 sample inputs, expected outputs, and risks.

## Deliverable

- `resources/prompt-templates.md`

## Mentor Notes

Make learners show how they verified an answer, not only the answer itself. Encourage concise context, clear output formats, and explicit safety boundaries.
