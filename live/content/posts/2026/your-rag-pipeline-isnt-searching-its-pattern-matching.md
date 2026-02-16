---
Title: "Your RAG Pipeline Isn't Searching. It's Pattern Matching."
date: "2026-02-11"
Tags:
- "AI"
- "RAG"
- "Search"
- "AgenticAI"
- "MachineLearning"
- "SoftwareEngineering"
- "AI Organizations"
ShowTableOfContent: true
---

![A dark library split in two — left side shows a single flashlight beam labeled RAG scanning book spines, right side shows multiple flashlights labeled Agentic Search moving independently through the stacks](/media/2026/2026-02-11-RAG-vs-Agentic-Search.png)

I've been building retrieval systems for a while now. First it was keyword search. Then vector embeddings. Then hybrid. And now I keep hearing "agentic search" thrown around like it's just another buzzword on top of the pile. It's not. It's a genuinely different way of thinking about how an AI system finds information. But to see why, you need to understand what came before it and where each approach actually falls apart.

## RAG: the beautiful, dumb pipeline

Retrieval-Augmented Generation changed things when it showed up. The idea is simple: instead of stuffing everything into an LLM's context window (expensive, impossible for large corpora), you store your documents as vector embeddings in a database. When a user asks a question, you embed the query too, find the closest vectors, pull back the top-k chunks, and feed them to the LLM for generation. That's RAG.

It works. I'm not here to trash it. For a well-defined knowledge base where the questions are predictable and the documents are clean, RAG does exactly what you need. You index your company's product docs, someone asks "what's the return policy for enterprise licenses," the vector search finds the right chunk, the LLM generates a nice answer. Done.

But here's the thing people don't talk about enough. The retrieval step is blind. It has no idea if what it found is actually useful. It doesn't know if it missed something critical that was worded differently. It can't look at the results and think "hmm, this doesn't fully answer the question, let me try a different angle." It fires one query, gets back a ranked list, and that's it. One shot.

Think about how you actually search for something when it matters. You don't type one query into Google and call it a day. You scan the results, reformulate, try different keywords, open a few links, cross-reference, go back and search again with what you learned. RAG doesn't do any of that. It's a retrieval pipeline, not a retrieval process.

And the failure modes are quiet. When vector search returns the wrong chunks, you don't get an error. You get a confident-sounding wrong answer. The LLM happily generates based on whatever garbage the retriever handed it. The user has no idea that the system missed the actually relevant document sitting three pages deeper in the index because the embedding similarity score was 0.01 too low.

There's also the chunking problem. You have to split your documents into pieces small enough to embed meaningfully but large enough to preserve context. Get this wrong and your retrieval is broken from the start. I've seen teams spend weeks tuning chunk sizes and overlap windows, and still end up with a system that misses obvious answers because the relevant information was split across two chunks that never got retrieved together.

## Hybrid search helps. Up to a point.

This is where hybrid search comes in. Instead of relying only on vector similarity, you combine it with traditional keyword matching. BM25 for exact term matching, vector search for semantic similarity, and then a reranker (usually a cross-encoder model like Cohere Rerank or a fine-tuned BERT) that looks at both result sets and re-scores them.

The improvement is real. BM25 catches the cases where the user's exact terminology matters. Someone searches for "error code E-4012" and vector search might return vaguely related error documentation because the embeddings are close in semantic space. BM25 nails it because it's matching the literal string. The reranker then looks at both candidate sets and picks the best overall results.

Systems like Elasticsearch, OpenSearch, and Weaviate all support hybrid search now. Pinecone added it. It's becoming table stakes for production RAG systems, and for good reason. Recall goes up. Precision goes up. Fewer bad answers.

But it's still single-shot retrieval. You fire a query. You get results. Done. The system still can't reason about whether those results actually answer the question. It can't decide that it needs to search a different index. It can't break a complex question into sub-queries. If the user asks "compare our Q3 and Q4 revenue and explain the difference in the context of the product launches from those quarters," hybrid search will return some chunks about Q3 revenue, some about Q4, maybe something about product launches if you're lucky, and hope the LLM can piece it all together from whatever showed up in the top-k.

The retrieval is better. The retrieval is still not thinking.

## When the search itself starts reasoning

Agentic search is what happens when you let the LLM drive the retrieval. Instead of the LLM sitting at the end of a pipeline waiting to receive chunks, it's the one deciding what to search for, where to search, and whether it needs to search again.

Here's what that looks like concretely. A user asks that same question about Q3 vs Q4 revenue and product launches. An agentic system might first search the financial index for "Q3 2025 revenue," look at the results, then search for "Q4 2025 revenue," then realize it needs product launch dates, search a different index or data source for that, compare the timelines, notice a gap, search again for a specific product name it found in the earlier results, and only then synthesize an answer. Five or six retrieval steps instead of one. Each one informed by what came before.

The LLM is the orchestrator. It has tools available, like a search function, a database query, a web lookup, an API call. It decides which tools to use and in what order. It looks at intermediate results and decides if it has enough information or needs more. It can verify claims by cross-referencing sources. It can reformulate a failed query and try again.

This isn't theoretical. Anthropic's Claude Code is probably the most public example. Boris Cherny, one of the developers, talked about this on the Latent Space podcast in May 2025. Early versions of Claude Code used a traditional RAG setup with a local vector database to help the model understand codebases. They dropped it. The agentic approach, where the model uses grep, glob, find, and file reading iteratively, outperformed everything. His words: "It outperformed everything. By a lot."

The reasons make sense when you think about it. A vector index of a codebase goes stale every time someone commits. Keeping it in sync means re-chunking, re-embedding, managing diffs. With agentic search, the model just reads the actual files as they exist right now. No index to maintain. No staleness. No security concerns about embedding sensitive code into a database. The model searches, reads, reasons, searches again. Like a developer would.

And this isn't limited to code. I think the same pattern applies to any domain where questions are complex, where the answer might span multiple sources, where the retrieval needs change based on what you find along the way. Legal research. Medical literature review. Competitive analysis across market reports. Anything where "search, read, think, search again" is the natural human workflow.

So why isn't everyone doing agentic search? Cost and latency. That's the honest answer.

Every time the LLM decides to search again, that's another inference call. A complex question might trigger five, eight, twelve retrieval-and-reasoning loops. Each one costs tokens. Each one takes time. For a customer-facing chatbot answering simple product questions, that's absurd. You don't need an agent to find the return policy. You need a fast, cheap vector lookup.

Hybrid RAG on a well-curated knowledge base can return results in under a second for pennies. An agentic search loop doing multiple LLM calls might take 15-30 seconds and cost 10-50x more. For high-volume, straightforward Q&A, the math doesn't work.

There's also reliability. More LLM calls means more chances for the model to go off track, hallucinate a search query, or get stuck in a loop. You need good guardrails. Timeouts. Maximum iteration limits. Structured tool definitions. It's more engineering than "just wire up a vector DB."

I think the right mental model is this: RAG and hybrid search are for when you know your data, you know the question patterns, and you need speed. Agentic search is for when the questions are unpredictable, the data is messy or distributed, and accuracy matters more than latency.

And honestly, I think where this is all headed is convergence. Not picking one or the other, but building agentic systems that have RAG and hybrid search as tools in their toolkit. The agent decides: "This looks like a straightforward factual lookup, let me hit the vector index." Or: "This is a complex multi-part question, I'm going to need to do several targeted searches and reason through the results." The retrieval strategy becomes dynamic, chosen by the model based on the situation.

Some teams are already building this way. You set up your hybrid search as an API the agent can call. You set up structured database queries as another tool. Web search as another. The agent plans, picks its tools, executes, evaluates, and iterates. RAG isn't dead. It just stops being the whole system and becomes one tool among several.

If you're building a new retrieval system right now, my advice is simple. Start with hybrid search. Get your BM25 + vector + reranker pipeline working. That's your baseline and it's a good one. Then ask yourself: are the questions my users ask simple enough that single-shot retrieval handles them? If yes, you're done. Ship it. If no, if you're seeing failures on complex queries, if users need answers that span multiple documents or require reasoning, that's when you start adding agentic capabilities on top.

Don't rip out your RAG pipeline to go full agent. And don't ignore agentic search because your current setup works fine for easy questions. The right answer, like most right answers in engineering, is boring. It depends on what you're building.
