# Day 13: AI Fundamentals

## Objective

Understand core AI concepts in plain language and connect certification-style AI fundamentals to the tools learners see in modern projects.

## Core Topics

- Artificial intelligence
- Machine learning
- Deep learning
- Generative AI
- Large language models
- Chat models, completion models, embeddings, and multimodal models
- Tokens and tokenization
- Context windows
- Model temperature, max tokens, and output controls
- Prompt engineering
- Context engineering
- Retrieval augmented generation
- Agents and tools at a beginner level
- Provider landscape: Microsoft Foundry/Azure OpenAI, OpenAI/ChatGPT, Anthropic Claude, Google Gemini, open-source models, and local models
- Responsible AI and human review
- Prompting

## Lesson Content

AI is a broad field. Machine learning is one way systems learn patterns from data. Deep learning uses layered neural networks to learn patterns from large amounts of data. Generative AI creates text, images, code, audio, or other content based on patterns learned from training data.

Large language models work with tokens, which are pieces of text such as words, parts of words, punctuation, or symbols. A model has a context window, which is the amount of input and conversation history it can consider at once. If the context is too long, important details may be ignored or removed. This is why AI builders care about context engineering: choosing the right instructions, files, retrieved passages, tool results, examples, and constraints for the model.

Model behavior can be adjusted. Temperature controls how varied or creative the output may be. Lower temperature is useful for more predictable answers. Higher temperature may help brainstorming, but can increase inconsistency. Max output tokens limit how long the answer can be.

Modern AI systems often use providers and model families such as Microsoft Foundry and Azure OpenAI, OpenAI/ChatGPT, Anthropic Claude, Google Gemini, open-source models, and local models. Learners do not need to memorize every model. They should understand the tradeoffs: capability, cost, latency, privacy, safety controls, integration options, and whether the model supports text, images, audio, tools, or structured output.

AI output must be reviewed. Models can be wrong, incomplete, biased, outdated, or overconfident. A good AI practitioner asks: what context did I provide, what should I verify, what data did I expose, and where is human judgment required?

## Hands-On Lab

1. Write beginner definitions for the core topics.
2. Create a simple comparison table for Microsoft Foundry/Azure OpenAI, OpenAI/ChatGPT, Claude, Gemini, and one open-source model family.
3. Create five prompts that help you learn a technical topic.
4. For each prompt, add context, constraints, desired output format, and what you would need to verify.
5. Write one paragraph explaining tokens, context windows, and temperature in your own words.

## Deliverable

- `notes/day-13-ai-fundamentals.md`

## Mentor Notes

Keep hype low. Focus on capability, limitation, verification, and safe use. If learners ask whether one model is always best, steer them toward use-case fit instead of brand loyalty.
