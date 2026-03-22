---
Title: "Your Best User Will Pay $500. Their Boss Won't Pay $50."
date: "2026-03-21"
Tags:
- "AI"
- "B2B"
- "Enterprise Sales"
- "Software"
ShowTableOfContent: false
---

![A minimalist receipt floating in white space with one visible line reading Cost of waiting](/media/2026/2026-03-21-best-user-500-boss-wont-pay-50.png)

In the spring of 2016, Hertz, the second-largest car rental company in the United States, hired Accenture, one of the most prestigious consulting firms in the world, to redesign its website. The project had a clear scope: a responsive website, a suite of mobile apps, a common library of code that could be shared across Hertz's family of brands. The timeline was eighteen months. The budget, generous. Hertz had every reason to believe this would go smoothly. They had picked one of the biggest names in the business. They had a $6 million CIO leading the charge. They had a plan.

Two years and $32 million later, Hertz sued Accenture, claiming the firm had never delivered a functional website or mobile app [1]. Among the allegations in the lawsuit: Accenture hadn't implemented responsive design, a standard web practice for years at that point, and then demanded hundreds of thousands of dollars in additional fees to add tablet support. They'd recommended that Hertz purchase licenses for software that Accenture's own team didn't know how to use [2]. The go-live date slipped from December 2017 to January 2018, then to April 2018, then to never.

I want you to hold the Hertz story in your mind, because I'm going to come back to it. But first, I need to tell you about a procurement analyst.

---

A few months ago, a small startup (three co-founders, no outside funding, product built in five months) showed their AI tool to an analyst at a mid-sized firm. The tool did something specific: it automated the slow, tedious process of supplier risk assessment. The analyst, who had been doing this work manually for years, tried it. Then he tried it again. Then he started using it every day.

When the founders asked him what he'd pay for the product, he didn't hesitate. Five hundred dollars a month. He wasn't being generous. He was doing the math in his head: hours saved, errors avoided, analyses that used to take a full day now done before lunch.

His boss said no.

Not because the product didn't work. Not because $500 was too much. The boss said no because he'd spent thirty minutes with Claude one weekend, wired together a rough agent that pulled some supplier data and spat out a summary, and concluded, with the particular confidence of someone who has just learned a new trick, that he could build this himself.

Now, if you've spent any time in B2B software, you've heard this objection before. "We can build it in-house." It's the oldest line in enterprise sales, and for two decades there was an easy answer: go ahead. Try. It'll take nine months. You'll burn through three project managers. And you'll come back to me when it's over, having spent ten times what my product costs, with something half as good.

That answer worked because it was usually true. The Standish Group has tracked software projects globally since the 1990s. Over fifty thousand of them. Their finding, consistent across twenty years: 66% of technology projects end in partial or total failure. Large projects succeed less than 10% of the time [3]. McKinsey put a finer point on it: 17% of large IT projects go so badly that they threaten the existence of the company [4].

This is the world that created the entire SaaS industry. Building software is hard. Buying it is easier. That was the pitch, and the data backed it up.

But something shifted.

---

When AI coding tools arrived (Claude Code, Cursor, GitHub Copilot, and the rest), they didn't just make developers faster. They did something more subtle and, for the software industry, more destabilizing: they made non-developers feel like developers.

I want to be precise about this, because the distinction matters. The VP of Operations who sat down with Claude Code on a Saturday afternoon and built a working supplier risk agent in thirty minutes did not, in fact, build what that startup built. What he built was a demo. It pulled data, generated a summary, and looked impressive on screen. It didn't handle edge cases. It didn't validate its outputs against known benchmarks. It didn't have error handling, or logging, or a way to trace where a particular number came from when someone questions it three months later. It would, at some point, hallucinate a data point in a critical evaluation, and someone would make a sourcing decision based on that hallucinated data point, and things would get very expensive.

I can already hear the objection. "You're describing today's limitations. Give it six months. Give it a year. AI will handle the edge cases, the validation, the error handling, all of it." And maybe it will. I'm not arguing about the future. I don't know what the future looks like, and neither does anyone else, including the people building these models. What I'm arguing about is today. Right now. The decisions being made this quarter, with this quarter's tools, affecting this quarter's revenue. The VP didn't build a production system on Saturday. He could not have built one. Not because he's not smart enough; because the tools aren't there yet. And the business decisions being frozen by his Saturday confidence are being frozen today, not in some future where AI can do everything. The cost of that freeze is real, it's accumulating, and no amount of future capability makes it retroactively free.

But it *felt* like the real thing. And that feeling, that thirty-minute high of "I built this," is enough to freeze a procurement decision.

This is where the Hertz story becomes important.

Hertz is a company with billions in revenue. They hired one of the most experienced technology consultancies on the planet. They spent $32 million and two years. And they got nothing. They couldn't even get responsive design, a feature that was standard practice for every web agency in America charging one-hundredth of Accenture's fee.

And that was for a *website*. Deterministic software. Code that does exactly what you tell it to do.

AI systems are non-deterministic. You don't fully control what they'll output. The gap between "it works in a demo" and "it works reliably in production" is not a gap; it's a chasm, and the chasm is wider for AI than for any software category that came before it. MIT published a study in 2025 examining enterprise generative AI pilot projects. The failure rate, defined as projects that didn't produce measurable financial returns within six months, was 95% [5].

Ninety-five percent.

So here's the situation: the person deciding whether to buy your product just built a demo in thirty minutes and thinks he doesn't need you. Meanwhile, the historical failure rate for what he's attempting, scaling an AI prototype into a production system, is somewhere between catastrophic and nearly certain.

His confidence is inversely proportional to his experience. And you have to sell to him anyway.

---

There's a second problem layered on top of this one, and in some ways it's the harder one to sit across from at a table.

I was on a call with a founding team recently when they told me something that stopped me. They'd been having sales conversations (good ones, with decision-makers at real companies) and multiple buyers, independently, across different organizations, had all said some version of the same thing:

"Why would I invest in any AI tool right now? In six months, Claude or GPT will just do this natively."

They're not entirely wrong. The frontier model providers (Anthropic, OpenAI) are moving up the application stack at startling speed. Anthropic launched Cowork. OpenAI is building desktop agents. These companies are not content to sell APIs. They're building the products themselves. The electricity company is now selling the fridge.

But when I started pulling apart the logic of "let's wait," I realized the math doesn't work the way most decision-makers assume.

Here's when waiting actually makes sense. You're looking at a large upfront procurement cost: an enterprise license, a six-figure implementation, an eighteen-month contract. You believe a comparable solution will exist at a fraction of the cost in six months. In that scenario, waiting is rational. You're avoiding a sunk cost that you can't recover if the market shifts beneath you.

But that's not what most AI tools cost. Most of them are monthly subscriptions. Two hundred dollars a seat. Five hundred dollars a seat. Cancel anytime.

When the procurement cost is a monthly subscription with no lock-in, the entire logic of waiting collapses. You're not committing to a multi-year contract. You're not deploying six-figure infrastructure. You're paying for thirty days of productivity gains, and if something better arrives in June, you cancel in June and switch. The switching cost is close to zero. The risk of trying is negligible.

But the cost of *not* trying is real, and it accumulates silently. If a tool saves an analyst ten hours a week, that's forty hours a month. At a senior analyst's fully loaded cost, the money you're leaving on the table by waiting adds up fast. And here's the part that never shows up in the calculus: productivity you didn't capture while waiting for a cheaper solution doesn't magically reappear when the cheaper solution arrives. Those months are gone.

The equation is much more complex than "someone will fix this cheaper eventually." Maybe they will. But the tool costs $500 a month, it saves forty hours a month, and you can cancel it tomorrow. That's not a bet. That's arithmetic.

Nobody frames it this way, though. And I think I understand why.

The cost of inaction is invisible. It doesn't show up as a line item on anyone's budget. Nobody gets fired for waiting. People get fired for buying the wrong tool. So the rational career move for the decision-maker is to do nothing and let someone else take the risk.

But "rational" and "correct" aren't the same thing. And the founders who learn to make this math visible, to put a dollar figure on the cost of waiting, are the ones who close deals while everyone else is stuck in the purgatory of "great call, let's circle back."

---

So what does a founder actually do with all of this?

The instinct, when you hear "I can build this myself" and "I'll just wait for Claude," is to go back to the workshop. Rethink the product. Redesign the positioning. Maybe pivot. And sometimes that's right. But more often, I think the instinct is a trap, because what the founder heard as a product problem is actually a sales problem. The product works. The analyst is using it every day. The objections aren't about quality. They're about perception and risk aversion.

That means the fix isn't building something different. It's selling what you have differently.

First: stop arguing about capability and start arguing about the gap. Don't get into a feature comparison with Claude or ChatGPT. You lose that fight by default, because those products improve weekly and you can't match their velocity. Instead, put numbers on the quality difference in your specific domain. If a general-purpose model misses critical risk factors 20% of the time and your product catches them at 98%, that gap has a dollar value. Quantify it. Show the buyer what 20% inaccuracy costs their firm annually. If you can't put a number on the gap, you're selling on trust, and trust doesn't beat "I'll just wait."

Second: show the Saturday prototype breaking. The executive who built an agent in thirty minutes is going to deploy it to his team. It will hallucinate something. Someone will make a decision based on that hallucination. Run a side-by-side comparison: the executive's prototype and your product, same dataset, live. Show where the prototype breaks. Don't describe the gap. Demonstrate it.

Third: make the waiting math explicit. Walk the buyer through it. Your tool costs $500 a month. It saves your analyst forty hours a month. You can cancel anytime. What is the cost of not having this for the next six months while you wait for a platform that may, or may not, do this natively? Put the number on the table. Make the invisible visible.

None of this is glamorous work. It doesn't feel like innovation. It feels like sales. But that's because it *is* sales, and the founders who recognize that the problem has moved from the product to the pitch are the ones who stop spinning their wheels and start generating revenue.

The analyst will pay $500 because the product saves him time today. His boss won't pay because he thinks the future will fix this for free. The founder's job is to make one thing clear to that boss: the future isn't free. The future has a cost, and it's been on his books every month he's been waiting. He just hasn't been reading that line.

---

## References

[1] The Register (2019). "Accenture sued over website redesign so bad it Hertz: Car hire biz demands $32m+ for 'defective' cyber-revamp." *The Register*. https://www.theregister.com/2019/04/23/hertz_accenture_lawsuit/

[2] CIO (2023). "4 lessons from the Hertz vs. Accenture IT disaster." *CIO*. https://www.cio.com/article/201936/4-lessons-from-the-hertz-vs-accenture-it-disaster.html

[3] The Standish Group (2020). "CHAOS 2020 Report." *The Standish Group*. https://faethcoaching.com/it-project-failure-rates-facts-and-reasons/

[4] McKinsey & Company (2020). "Delivering large-scale IT projects on time, on budget, and on value." *McKinsey & Company*. https://www.3pillarglobal.com/insights/blog/why-software-development-projects-fail/

[5] MIT Sloan Management Review (2025). "The GenAI Divide: State of AI in Business 2025." *MIT Sloan Management Review*. https://www.cio.com/article/4077457/why-it-projects-still-fail-2.html
