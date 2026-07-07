# 30-Day AI and DevOps Fundamentals Bootcamp Guide

## Program Purpose

The MMAUG AI and DevOps Fundamentals Bootcamp gives beginners the prerequisite skills they need before moving deeper into AI engineering, cloud engineering, DevOps, automation, and Microsoft ecosystem learning paths.

The bootcamp intentionally keeps the level beginner-friendly while still being rich. Participants learn concepts, practice tools, and produce small artifacts every day. The focus is on confidence, repetition, and connecting ideas across AI and DevOps. AI learning is aligned to AI-901/AI-103-style fundamentals and broadened with current practical topics such as LLMs, prompt engineering, context engineering, agentic engineering, tokenization, model parameters, model/provider selection, evaluation, and responsible AI.

## Target Learner

This bootcamp is for learners who may be able to use a computer comfortably but do not yet feel confident with developer tools or technical project workflows.

Good-fit participants include:

- Complete beginners exploring AI or DevOps
- Students preparing for hackathons
- Career switchers entering cloud or software roles
- Non-developer professionals who want stronger technical foundations
- Community members preparing for Microsoft Learn, GitHub, Azure, or AI projects

## Beginner-Friendly Outcomes

By the end of 30 days, participants should be able to:

- Explain AI, machine learning, generative AI, and responsible AI in simple language.
- Explain LLMs, context windows, tokens, temperature, system prompts, user prompts, and retrieval at a beginner level.
- Compare common AI provider families such as OpenAI/ChatGPT, Anthropic Claude, Google Gemini, Microsoft Foundry/Azure OpenAI, and open-source/local model options at a high level.
- Design stronger prompts using task, context, constraints, examples, output format, and verification steps.
- Explain context engineering as the discipline of selecting, organizing, limiting, retrieving, and validating the information supplied to an AI system.
- Use the terminal for basic navigation and project commands.
- Use Git and GitHub to track work and collaborate.
- Read and write beginner Python scripts.
- Explain cloud computing and core Azure service categories.
- Understand what DevOps means and why automation matters.
- Explain agentic DevOps as AI-assisted planning, coding, testing, security review, incident summary, and operations support under human supervision.
- Explain beginner DevSecOps ideas such as secure coding habits, secret handling, dependency awareness, and shifting security earlier.
- Explain beginner AIOps ideas such as monitoring, logs, alerts, anomaly detection, and using AI to support operations.
- Create a basic CI workflow with GitHub Actions.
- Build a small AI-assisted project and document it clearly.
- Present a beginner portfolio project with confidence.

## Weekly Themes

| Week | Theme | Main Outcome |
| --- | --- | --- |
| Week 1 | Digital, Developer, and AI Readiness | Set up tools, learn core vocabulary, and begin daily practice |
| Week 2 | Python, Data, and AI Fundamentals | Build small scripts and understand how AI systems use data, prompts, context, and model behavior |
| Week 3 | Cloud, DevOps, DevSecOps, AIOps, and Agentic DevOps Foundations | Learn Azure concepts, GitHub workflows, testing, security habits, monitoring, automation, and AI-assisted operations |
| Week 4 | AI-Assisted Delivery and Capstone | Build, automate, document, and present a final project |
| Day 29 | DevOps, DevSecOps, and AIOps Capstone Hardening | Add automation, security checks, and operations notes |
| Day 30 | Documentation, Showcase, and Reflection | Submit the capstone and plan the next learning path |

## Daily Time Commitment

Recommended daily structure:

- **15 minutes**: Review the concept of the day
- **30 to 60 minutes**: Complete the hands-on task
- **15 minutes**: Write notes and reflection
- **Optional 30 minutes**: Stretch activity or peer discussion

## Required Tools

Participants should have:

- A computer with internet access
- A GitHub account
- Visual Studio Code
- Git
- Python 3
- A modern browser
- Optional: Microsoft account for Microsoft Learn and Azure exploration

Mentors should provide setup support during the first week so beginners do not get stuck before the learning begins.

## Capstone Project

Participants will build a small project that combines AI and DevOps fundamentals.

Participants should choose one of the three capstone scenario tracks below. This mirrors the scenario-based learning pattern used in Microsoft Foundry hackathon materials, but keeps the implementation beginner-friendly.

| Scenario | What the participant builds | Suggested Microsoft AI tools |
| --- | --- | --- |
| Learning Assistant | An assistant that answers questions, summarizes bootcamp notes, or recommends study actions | Microsoft Foundry, Azure OpenAI in Azure AI Foundry, Azure AI Search |
| Community FAQ Assistant | A simple assistant that answers questions from MMAUG or bootcamp FAQ content | Microsoft Foundry, Azure AI Language, Azure AI Search |
| Operations Helper | A beginner AIOps-style helper that classifies simple logs, summarizes incidents, or suggests troubleshooting steps | Microsoft Foundry, Azure AI Language, Azure OpenAI in Azure AI Foundry |

Minimum capstone requirements:

- Source code stored in GitHub
- Clear README
- Use or clearly design for Microsoft Foundry or Azure AI Services
- At least one script, workflow, structured prompt, or automation file
- Basic testing or validation
- Basic DevOps evidence, such as GitHub issues, commits, and a GitHub Actions workflow or validation checklist
- Basic DevSecOps evidence, such as secret handling notes and no secrets committed to the repository
- Basic AIOps evidence, such as troubleshooting notes, logs, error summaries, or monitoring considerations
- Short reflection on what was learned
- Responsible AI note explaining limits, risks, or assumptions

Full capstone expectations are available in [CAPSTONE-EXPECTATIONS.md](CAPSTONE-EXPECTATIONS.md). Prize eligibility and voucher conditions are available in [PRIZES.md](PRIZES.md).

## AI Fundamentals Module Catalog

The AI track is organized as a beginner module catalog. Facilitators can teach these modules during Day 13, Day 14, Day 24, Day 25, and the capstone week, or expand them into separate workshops.

| Module | Beginner outcome |
| --- | --- |
| AI, ML, and Deep Learning | Explain the difference between rule-based software, AI, machine learning, deep learning, and generative AI |
| Data and Training Basics | Understand datasets, labels, features, training, inference, validation, overfitting, and bias at a high level |
| LLM Foundations | Explain language models, transformers at a conceptual level, prompts, completions, chat messages, embeddings, and multimodal models |
| Tokens and Context Windows | Explain tokenization, input/output tokens, context limits, cost impact, truncation, and why concise context matters |
| Model Behavior Controls | Explain temperature, top-p, max output tokens, stop sequences, deterministic vs creative output, and model selection tradeoffs |
| Prompt Engineering | Use task, role, context, constraints, examples, output format, and evaluation criteria to improve model responses |
| Context Engineering | Choose, compress, retrieve, rank, and validate the information sent to the model, including RAG and memory boundaries |
| Provider and Model Landscape | Compare Microsoft Foundry/Azure OpenAI, OpenAI/ChatGPT, Anthropic Claude, Google Gemini, open-source models, and local inference options |
| Agentic Engineering | Explain tools, actions, planning loops, memory, guardrails, human approval, evaluation, and failure modes for AI agents |
| Responsible AI and Safety | Identify hallucination, bias, privacy, copyright, security, harmful use, and human review requirements |
| AI Evaluation | Create simple test prompts, expected behavior, quality checks, red-team questions, and regression checks |

More detail is available in [resources/ai-module-catalog.md](resources/ai-module-catalog.md).

## Day-by-Day Curriculum

The summary below gives the full 30-day path. Each day also has a dedicated facilitator-ready lesson file in [days/](days/).

### Day 1: Welcome, Goals, and Learning Mindset

**Goal**: Understand the bootcamp purpose and create a personal learning plan.

**Topics**

- What AI and DevOps mean at a beginner level
- How the bootcamp works
- Learning in public and building a portfolio
- The difference between memorizing and practicing

**Hands-on**

- Create a GitHub account if needed.
- Create a bootcamp folder on your computer.
- Fill in the learner profile template.

**Deliverable**

- `learner-profile.md`

**Reflection**

- Why do I want to learn AI or DevOps?
- What would success look like after 30 days?

### Day 2: Computer, Internet, and Developer Basics

**Goal**: Build shared vocabulary for how modern software works.

**Topics**

- Files, folders, extensions, paths, and permissions
- Clients, servers, APIs, and databases
- What developers mean by local, remote, environment, and dependency

**Hands-on**

- Create a simple folder structure for the bootcamp.
- Save a Markdown notes file.
- Practice opening files in VS Code.

**Deliverable**

- `notes/day-02.md`

### Day 3: Command Line Fundamentals

**Goal**: Use the terminal for basic navigation and file operations.

**Topics**

- Terminal vs graphical interface
- `pwd`, `ls`, `cd`, `mkdir`, `touch`, `cat`
- Relative and absolute paths

**Hands-on**

- Navigate to your bootcamp folder.
- Create folders for `notes`, `labs`, and `project`.
- Create a Day 3 notes file from the terminal.

**Deliverable**

- Screenshot or copied command history in `notes/day-03.md`

### Day 4: Git and Version Control

**Goal**: Understand why version control is central to DevOps and collaboration.

**Topics**

- Repository, commit, branch, remote
- Why Git matters for software, AI, and documentation
- Good commit messages

**Hands-on**

- Initialize a Git repository.
- Commit your notes so far.
- View your Git history.

**Deliverable**

- Local repo with at least one commit

### Day 5: GitHub Foundations

**Goal**: Publish work to GitHub and understand basic collaboration.

**Topics**

- GitHub repositories
- README files
- Issues, pull requests, and discussions
- Public portfolio basics

**Hands-on**

- Create a GitHub repository for the bootcamp.
- Push your local repo to GitHub.
- Improve the README with your bootcamp goals.

**Deliverable**

- GitHub repo URL

### Day 6: Markdown and Technical Notes

**Goal**: Write clear beginner technical documentation.

**Topics**

- Headings, lists, links, code blocks, tables
- Writing what you tried, what worked, and what failed
- Documentation as a DevOps habit

**Hands-on**

- Format all previous notes with Markdown.
- Add a table of daily progress to your README.

**Deliverable**

- Updated `README.md`

### Day 7: Week 1 Review and Mini Challenge

**Goal**: Consolidate setup and developer workflow basics.

**Topics**

- Review terminal, Git, GitHub, and Markdown
- Troubleshooting mindset
- Asking useful technical questions

**Hands-on**

- Create a new branch.
- Add a Week 1 summary.
- Merge it back into your main branch.

**Deliverable**

- `notes/week-01-summary.md`

### Day 8: Python Setup and First Script

**Goal**: Run Python locally and understand scripts.

**Topics**

- What Python is used for
- Interpreter, script, variable, print statement
- Running Python from the terminal

**Hands-on**

- Install or verify Python.
- Write `hello_bootcamp.py`.
- Commit the script.

**Deliverable**

- `labs/day-08/hello_bootcamp.py`

### Day 9: Python Variables, Types, and Input

**Goal**: Store and use simple data in a Python program.

**Topics**

- Strings, numbers, booleans
- Input and output
- Naming variables clearly

**Hands-on**

- Build a learning goal questionnaire script.
- Save answers to the terminal output.

**Deliverable**

- `labs/day-09/learning_goal.py`

### Day 10: Conditions and Decisions

**Goal**: Make simple programs respond to different inputs.

**Topics**

- `if`, `elif`, `else`
- Comparison operators
- Basic validation

**Hands-on**

- Build a study recommendation script that suggests AI or DevOps practice based on user input.

**Deliverable**

- `labs/day-10/study_recommender.py`

### Day 11: Loops and Lists

**Goal**: Work with repeated items and simple collections.

**Topics**

- Lists
- `for` loops
- Repetition and automation thinking

**Hands-on**

- Create a script that prints a 7-day study checklist.

**Deliverable**

- `labs/day-11/study_checklist.py`

### Day 12: Files and Data

**Goal**: Read and write simple files with Python.

**Topics**

- Text files
- Reading data
- Writing output
- Why AI and DevOps both depend on data quality

**Hands-on**

- Save daily learning notes to a text file using Python.

**Deliverable**

- `labs/day-12/note_writer.py`

### Day 13: AI Fundamentals

**Goal**: Understand AI concepts without hype.

**Topics**

- Artificial intelligence
- Machine learning
- Deep learning
- Generative AI
- Large language models
- Chat models and completion models
- Tokens and tokenization
- Context windows
- Model temperature and output controls
- Model and provider landscape
- Prompting
- Context engineering
- Retrieval augmented generation at a high level

**Hands-on**

- Write plain-language definitions for each concept.
- Compare 3 AI assistants or provider families at a high level.
- Create 5 prompts that help you learn a technical topic.
- Add context, constraints, and verification steps to each prompt.

**Deliverable**

- `notes/day-13-ai-fundamentals.md`

### Day 14: Responsible AI and Week 2 Review

**Goal**: Learn the human and practical risks of AI systems.

**Topics**

- Hallucination
- Bias
- Privacy
- Security
- Human review
- Clear disclaimers and limits

**Hands-on**

- Review an AI-generated answer and identify what should be checked.
- Add a responsible AI section to your README.

**Deliverable**

- `notes/week-02-summary.md`

### Day 15: Cloud Computing Fundamentals

**Goal**: Understand why cloud platforms exist.

**Topics**

- Servers, storage, networking, databases
- Public cloud
- Infrastructure as a service, platform as a service, software as a service
- Regions and availability

**Hands-on**

- Draw or describe a simple web application architecture.

**Deliverable**

- `notes/day-15-cloud-basics.md`

### Day 16: Azure Fundamentals for Beginners

**Goal**: Learn core Azure categories and how they relate to AI and DevOps.

**Topics**

- Resource groups
- Compute
- Storage
- Networking
- Identity
- Monitoring
- Azure AI services

**Hands-on**

- Map a simple AI app to possible Azure services.

**Deliverable**

- `notes/day-16-azure-map.md`

### Day 17: DevOps Fundamentals

**Goal**: Understand DevOps as culture, process, and automation.

**Topics**

- Plan, code, build, test, release, deploy, operate, monitor
- Collaboration between development and operations
- Why small repeatable changes reduce risk
- Where DevSecOps and AIOps extend DevOps
- Where agentic DevOps can assist planning, coding, testing, review, incident summary, and release notes

**Hands-on**

- Write a simple delivery checklist for your bootcamp repo.
- Add one safe AI-assistance point and one human-approval point.

**Deliverable**

- `notes/day-17-devops-checklist.md`

### Day 18: Testing and Quality Basics

**Goal**: Learn why tests support confidence.

**Topics**

- Manual testing
- Automated testing
- Basic assertions
- Testing documentation and scripts

**Hands-on**

- Add simple checks to one Python script.
- Document test steps in Markdown.

**Deliverable**

- `labs/day-18/test-notes.md`

### Day 19: GitHub Issues and Project Planning

**Goal**: Use GitHub to plan work transparently.

**Topics**

- Issues
- Labels
- Tasks
- Acceptance criteria
- Small work items

**Hands-on**

- Create 3 GitHub issues for your capstone project.
- Add acceptance criteria to each issue.

**Deliverable**

- Links to 3 issues in `notes/day-19-project-plan.md`

### Day 20: DevSecOps Fundamentals

**Goal**: Understand how security becomes part of everyday delivery work.

**Topics**

- Secure coding habits
- Secret handling
- Dependency awareness
- Code review
- Shift-left security

**Hands-on**

- Create a beginner security checklist for your repository.
- Check your repo for accidental secrets or sensitive data.

**Deliverable**

- `notes/day-20-devsecops-checklist.md`

### Day 21: AIOps Fundamentals

**Goal**: Understand how AI can support operations, monitoring, and incident response.

**Topics**

- Logs, metrics, traces, and alerts
- Incidents and root cause analysis
- Anomaly detection at a beginner level
- AI-assisted troubleshooting
- Human review and operational safety

**Hands-on**

- Read a sample error log and write a plain-language incident summary.
- Draft 3 prompts that could help investigate an operational issue.

**Deliverable**

- `notes/day-21-aiops-summary.md`

### Day 22: GitHub Actions Introduction

**Goal**: Understand CI automation at a beginner level.

**Topics**

- Workflow
- Trigger
- Job
- Step
- Runner
- YAML

**Hands-on**

- Add a basic GitHub Actions workflow that checks repository files or runs a simple Python command.

**Deliverable**

- `.github/workflows/ci.yml`

### Day 23: Week 3 Review and Automation Challenge

**Goal**: Connect cloud, DevOps, DevSecOps, AIOps, GitHub, testing, and automation.

**Topics**

- Review cloud and DevOps concepts
- Review security and operations fundamentals
- Common CI failures
- Reading error logs calmly

**Hands-on**

- Make a small change that intentionally fails your workflow.
- Fix it and document what happened.

**Deliverable**

- `notes/week-03-summary.md`

### Day 24: Prompt Engineering for Learning and Building

**Goal**: Use AI tools more effectively and responsibly.

**Topics**

- Clear task prompts
- Context
- Constraints
- Examples
- Output format
- Prompt patterns
- Context window budgeting
- Prompt evaluation
- Verification
- Prompt iteration

**Hands-on**

- Create a prompt template for learning a new technical concept.
- Create a prompt template for reviewing your own README.
- Create a context checklist for an AI-assisted coding task.
- Create a small prompt test table with expected outputs and risks.

**Deliverable**

- `resources/prompt-templates.md`

### Day 25: AI-Assisted Coding Workflow

**Goal**: Learn how to use AI as a helper while keeping ownership of the work.

**Topics**

- Asking for explanations
- Asking for test ideas
- Reviewing AI-generated code
- Avoiding blind copy-paste
- Security and privacy caution

**Hands-on**

- Use an AI assistant to improve one Python script.
- Document what you accepted, changed, or rejected.

**Deliverable**

- `notes/day-25-ai-assisted-coding.md`

### Day 26: Capstone Design

**Goal**: Choose a small project and define its scope.

**Topics**

- Problem statement
- User
- Inputs and outputs
- Minimum viable project
- Risks and assumptions

**Hands-on**

- Fill in the project submission template draft.
- Create a simple file or folder structure for the project.

**Deliverable**

- `project/project-plan.md`

### Day 27: Capstone Build Day 1

**Goal**: Build the first working version.

**Topics**

- Start small
- Keep commits frequent
- Prefer working basics over complex unfinished features

**Hands-on**

- Implement the core project flow.
- Commit the working baseline.

**Deliverable**

- First working capstone version

### Day 28: Capstone Build Day 2

**Goal**: Improve usability and reliability.

**Topics**

- Error messages
- Input validation
- Clear output
- README improvement

**Hands-on**

- Add validation or helpful output to the project.
- Update the README with usage steps.

**Deliverable**

- Improved capstone project

### Day 29: Add DevOps, DevSecOps, and AIOps Discipline

**Goal**: Add automation, security thinking, and operations thinking.

**Topics**

- CI workflow
- Repeatable commands
- Simple tests or validation scripts
- Release readiness
- Secret checks and dependency awareness
- Logs, troubleshooting notes, and supportability

**Hands-on**

- Make sure your GitHub Actions workflow runs for the capstone.
- Add manual test steps if automated tests are not yet realistic.
- Add a security and operations section to the capstone README.

**Deliverable**

- Passing workflow or documented validation result

### Day 30: Documentation, Showcase, and Next Steps

**Goal**: Make the project understandable, present it, and choose the next learning path.

**Topics**

- README quality
- Screenshots or examples
- Responsible AI notes
- Known limitations
- Future improvements
- Explaining the problem
- Showing the project
- Describing what you learned
- Mentioning what you would improve next
- Portfolio confidence
- Feedback
- Continued learning
- Choosing AI, DevOps, cloud, data, or software development next

**Hands-on**

- Finalize README.
- Add responsible AI and limitations sections.
- Prepare and practice a 3-minute demo outline.
- Submit the project.
- Write a final reflection.
- Identify 3 next steps.

**Deliverable**

- Final capstone submission
- `notes/final-reflection.md`

## Mentor Guidance

Mentors should keep the experience beginner-safe and practical:

- Explain acronyms the first time they appear.
- Use live examples instead of only slides.
- Normalize errors as part of the workflow.
- Encourage daily commits and small progress.
- Help learners debug, but ask them to explain what they understand first.
- Keep optional stretch tasks clearly separate from required tasks.

## Assessment Rubric

| Area | Beginner Evidence |
| --- | --- |
| GitHub usage | Repo exists, commits are visible, README explains the work |
| Notes | Daily or near-daily notes show learning progress |
| Python | At least 3 beginner scripts are present |
| AI understanding | Learner can explain AI concepts and responsible AI limits |
| DevOps understanding | Learner can explain CI and has a basic workflow or checklist |
| DevSecOps understanding | Learner can explain secret handling, secure review habits, and dependency awareness |
| AIOps understanding | Learner can explain logs, metrics, alerts, and AI-assisted troubleshooting at a beginner level |
| Capstone | Project runs or is clearly demonstrated with documentation |
| Reflection | Learner can describe challenges, fixes, and next steps |

## Suggested Next Paths After the Bootcamp

Participants can continue into:

- Microsoft Azure Fundamentals
- GitHub Foundations
- AI-900: Microsoft Azure AI Fundamentals
- AZ-900: Microsoft Azure Fundamentals
- Beginner Python projects
- Azure AI Foundry exploration
- DevOps with GitHub Actions
- MMAUG community article writing or demo nights
