# Capstone Expectations

The capstone project is the final portfolio outcome for the MMAUG AI and DevOps Fundamentals Bootcamp. It should be beginner-friendly, practical, and clearly documented.

The project does not need to be complex. It does need to be complete enough for mentors to review, run, or understand from the repository.

## Scenario Tracks

Participants must choose one of the following scenario tracks.

| Track | Scenario | What to build | Microsoft AI focus |
| --- | --- | --- | --- |
| 1 | Learning Assistant | A tool that answers questions about bootcamp notes, summarizes learning logs, or recommends study actions | Microsoft Foundry, Azure OpenAI in Azure AI Foundry, Azure AI Search |
| 2 | Community FAQ Assistant | A simple assistant that answers questions from MMAUG, event, or bootcamp FAQ content | Microsoft Foundry, Azure AI Language, Azure AI Search |
| 3 | Operations Helper | A beginner AIOps-style helper that classifies logs, summarizes incidents, or suggests troubleshooting steps | Microsoft Foundry, Azure AI Language, Azure OpenAI in Azure AI Foundry |

These tracks are inspired by the scenario-based structure used in Microsoft Foundry hackathon materials, where participants choose from defined AI app scenarios and work through common build, monitor, evaluate, and workflow stages.

Reference: https://martaldsantos.github.io/foundry-hackathon/

## Required Project Elements

Every final submission must include:

- A GitHub repository link
- A clear project README
- A selected capstone scenario track
- Source files, scripts, prompts, or configuration files
- Use of, or a clear beginner-level design for, Microsoft Foundry or Azure AI Services
- A short explanation of the selected model or AI service
- A description of the input data and expected output
- A responsible AI note
- Basic DevOps evidence
- Basic DevSecOps evidence
- Basic AIOps evidence
- Prompt engineering or context engineering evidence
- A final reflection
- A 3-minute demo outline

## Microsoft AI Expectations

Participants should demonstrate at least one of the following:

- Use Microsoft Foundry to build or design the AI workflow.
- Use Azure OpenAI in Azure AI Foundry for a prompt-based assistant.
- Use Azure AI Search for retrieval over notes, FAQs, or sample documents.
- Use Azure AI Language for classification, extraction, or summarization.
- Use Azure AI Speech for speech-to-text or text-to-speech.
- Use Azure AI Vision for image analysis.

If a participant cannot access Azure resources, they may submit a local prototype plus a clear architecture note showing where Microsoft Foundry or Azure AI Services would fit.

## DevOps Expectations

The submission should show beginner DevOps discipline:

- GitHub repository with visible commits
- Issues or task list for planning
- Clear README instructions
- Basic GitHub Actions workflow or documented validation checklist
- Manual or automated test evidence
- Optional agentic DevOps note describing where AI helped planning, testing, release notes, or troubleshooting

## Prompt and Context Expectations

The submission should show that AI output was guided and reviewed:

- At least one structured prompt or prompt template
- Explanation of what context was provided to the model
- Notes on model settings where relevant, such as temperature or max output tokens
- Verification steps showing how the participant checked AI output
- Clear boundary between AI-generated suggestions and human decisions

## DevSecOps Expectations

The submission should show beginner security awareness:

- No secrets, API keys, tokens, private keys, or passwords committed
- `.gitignore` used where appropriate
- Short note explaining how secrets should be stored safely
- Basic dependency awareness
- Clear statement of any sensitive data risks

## AIOps Expectations

The submission should show beginner operations awareness:

- Troubleshooting notes or known issues
- Example logs, error messages, or workflow output where relevant
- Explanation of how failures would be detected
- Optional: prompt examples for summarizing logs or incidents

## Responsible AI Expectations

Every submission must include a responsible AI note covering:

- Intended use
- Known limitations
- Possible incorrect outputs
- Privacy or data concerns
- Human review expectations
- What the project should not be used for

## Suggested Challenge Structure

Participants can use this simple five-part structure:

| Challenge | Outcome |
| --- | --- |
| 0. Setup | Repository, tools, selected scenario, project plan |
| 1. Build | First working AI-assisted flow or prototype |
| 2. Monitor | Logs, errors, troubleshooting notes, or workflow output |
| 3. Evaluate | Test cases, sample inputs, expected outputs, and quality notes |
| 4. Workflow | GitHub Actions, validation checklist, final README, and demo |

## Minimum Acceptance Criteria

A project meets the minimum capstone criteria when:

- The repository is accessible to reviewers.
- The README explains what the project does and how to review it.
- The selected scenario track is clear.
- Microsoft Foundry or Azure AI Services are used or clearly mapped in the design.
- The project includes at least one working technical artifact.
- The submission includes DevOps, DevSecOps, AIOps, and responsible AI notes.
- The participant can explain the project in a short demo.

## Strong Submission Signals

Stronger submissions usually include:

- Clear problem and target user
- Small but working implementation
- Good README and setup instructions
- Meaningful sample data
- Simple test cases
- Passing GitHub Actions workflow
- Clear responsible AI limitations
- Evidence of iteration through commits or issues
- A demo that is easy to follow
