---
Title: "You Own the Output. But Who Owns the Risk?"
date: "2026-07-26"
url: "/2026/you-own-the-output-but-who-owns-the-risk/"
Tags:
    - "AI"
    - "Leadership"
    - "AI Organizations"
    - "OrganizationalDesign"
    - "Management"
ShowTableOfContent: true
---

![Editorial illustration reading Ownership Is Not Clearance, with hands passing a document through a copper frame while a tether leads to a tangled rights-and-liability knot.](/media/2026/2026-07-26-Ownership-Is-Not-Clearance.jpg)

*Training, infringement, ownership, and indemnity are different questions. Most companies still negotiate them as one.*

A company can publish an AI-generated asset it cannot copyright. The same asset can still infringe someone else's copyright.

The model provider may even have said, “You own the output.”

That promise answers one narrow question: whether the provider will claim the output against the customer. It does not prove that the output is copyrightable, original, or cleared. It says nothing about how the training data was acquired. And it may not tell the company who pays if someone sues.

*Is this model copyright-safe?* sounds like one question. It is four.

## One concern, four different questions

Every enterprise use of generative AI sits inside four copyright layers:

1. **Training:** Was copyrighted material lawfully acquired and used to develop the model?
2. **Output:** Does this particular result reproduce protected expression or create an infringing derivative work?
3. **Ownership:** Is there sufficient human authorship for copyright to exist, and has that copyright been assigned to or vested in the company?
4. **Defense:** If somebody makes a claim, who has contractually agreed to defend it and pay?

These questions can produce different answers for the same asset.

The provider's training might qualify as fair use while a particular output still infringes. An output might not infringe copyright yet contain too little human authorship for the company to own the AI-generated expression exclusively. The company might have a strong defense but no vendor indemnity. Or the vendor might indemnify a narrow claim even though the lawsuit itself disrupts the product launch.

Most enterprise discussions blur all four into a single word: *ownership*.

But “May we use this?”, “Can we stop others from copying it?”, and “Who pays if we are wrong?” are not variations of the same question. They are different questions with different evidence and different owners.

## The weak-asset, real-liability paradox

Under the [current US Copyright Office position](https://www.copyright.gov/ai/Copyright-and-Artificial-Intelligence-Part-2-Copyrightability-Report.pdf), purely AI-generated expression is not copyrightable. Human-authored expression can still be protected, as can sufficiently creative human modifications, selection, coordination, or arrangement. But prompts alone ordinarily do not give the user enough control over the resulting expression to establish authorship.

The determination is case-specific, but the business implication is already clear.

Imagine a marketing team generates hundreds of images, selects one, and makes only minor changes before using it as the center of a campaign. The company may be legally permitted to use the image. Yet it may have difficulty claiming exclusive copyright in the AI-generated expression if a competitor copies it.

Now reverse the direction. If the same image reproduces protected elements from someone else's work, the company may still face an infringement claim for publishing it.

The company may be unable to stop a competitor from copying the asset and still be liable for publishing it.

That is what many “you own the output” clauses leave unstated. In the standard provider terms reviewed for this article, the vendor is usually saying only that, as between the parties, it will not claim the output against the customer and will assign whatever rights it has. The clause does not create human authorship, guarantee originality, clear third-party rights, or promise that a court will recognize an enforceable copyright.

For enterprises, copyrightability is not a philosophical side issue. It determines whether a generated asset can become exclusive intellectual property, support a licensing strategy, survive diligence in an acquisition, or be defended against a copycat.

A useful review therefore asks two questions, not one:

- Are we allowed to use this?
- If it becomes valuable, can we stop somebody else from using it?

## Models are neither photocopiers nor clean rooms

Generative models ordinarily synthesize outputs from learned statistical relationships rather than retrieving complete stored works like a conventional document database. Treating every output as a reproduction of a training work is technically unsupported.

Calling copying impossible is equally wrong.

[Researchers have extracted verbatim text](https://www.usenix.org/conference/usenixsecurity21/presentation/carlini-extracting) from language models and [near-identical images](https://www.usenix.org/conference/usenixsecurity23/presentation/carlini) from diffusion models. The probability is not evenly distributed. Material that is duplicated, distinctive, heavily represented, supplied in the prompt, or targeted through continuation and adversarial techniques is more likely to reappear. [One study](https://proceedings.mlr.press/v162/kandpal22a.html) found that a sequence appearing ten times in training was generated roughly 1,000 times more often than a sequence appearing once.

That establishes a measurable tail risk. It does not establish that models normally reproduce their training data, and it does not give us a universal reproduction rate for today's frontier systems. Providers do not publish comparable evaluations, models change constantly, and inference-time filters can alter what users see.

The use case matters. Internal summarization of company-owned material sits far from asking for the next page of a novel. A code suggestion becomes a different problem when it ships and closely matches a public repository. Music, lyrics, voices, branded images, and video add overlapping rights.

This is why refusal behavior is such a poor copyright metric. A model with fewer refusals may expose a company to more questionable material in a particular workflow. But the refusal rate does not tell us whether the training corpus was lawfully assembled, how often the model memorizes, whether an output is substantially similar, or whether the customer is contractually protected.

Permissiveness is a product behavior. Copyright exposure is a legal and operational system.

## Training law is unsettled, not nonexistent

The loudest public arguments about AI training tend to arrive as absolutes. One side says training is theft. The other says training is obviously fair use because machines learn like people.

Current US law supports neither statement as a universal rule.

The [Copyright Office has emphasized](https://www.copyright.gov/ai/Copyright-and-Artificial-Intelligence-Part-3-Generative-AI-Training-Report-Pre-Publication-Version.pdf) that training involves several potentially relevant acts and that fair use depends on facts such as purpose, source acquisition, market substitution, and the kinds of outputs a system produces. Research or analytical uses may present a stronger fair-use case. Commercial use of vast copyrighted corpora to generate competing expressive material can present a weaker one, particularly where the source copies were obtained unlawfully.

The court decisions reflect that dependence on facts.

In [*Bartz v. Anthropic*](https://cases.justia.com/federal/district-courts/california/candce/3%3A2024cv05417/434709/231/0.pdf), a federal district court held that using books to train a model was fair use on the record before it. But it treated the acquisition and retention of a permanent central library built with pirated books differently. On July 20, 2026, the court approved a [$1.5 billion settlement](https://assets-us-01.kc-usercontent.com/1eeb16db-4934-006e-40a6-38fa91285ebb/36cce252-a32c-4cbb-a624-31dd8ac9574c/2026-07-20%20Order%20Granting%20Final%20_dckt%20680_0_.pdf) resolving the class's past pirated-library claims. The settlement was not a ruling that Claude's outputs infringe, and it did not erase the court's training-fair-use holding.

Other cases point in different directions. Meta won [partial summary judgment in *Kadrey v. Meta*](https://law.justia.com/cases/federal/district-courts/california/candce/3%3A2023cv03417/415175/598/) in June 2025 on the thirteen named plaintiffs' direct-infringement training claim because they did not establish sufficient market harm on that record. The judge stressed that the ruling was narrow, and the [case docket remained active](https://cand.uscourts.gov/cases-e-filing/cases/323-cv-03417-vc/kadrey-et-al-v-meta-platforms-inc). In [*Thomson Reuters v. ROSS*](https://www.ded.uscourts.gov/sites/ded/files/opinions/20-613_5.pdf), a district court rejected fair use for a competing, non-generative legal-research product trained using material derived from Westlaw headnotes. The Third Circuit [heard oral argument](https://www2.ca3.uscourts.gov/oralarg/25-2153ThomsonReutersetalv.RossIntelligenceInc.mp3) on June 11, 2026, and no decision had issued as of July 26, 2026. *The New York Times* litigation against OpenAI and Microsoft remains active without a final merits rule that resolves frontier training generally.

As of July 26, 2026, there was still no binding US appellate rule declaring frontier-model training categorically fair use or categorically infringing.

That uncertainty does not mean every customer inherits the provider's historical training acts. A company using a hosted API ordinarily did not itself make the provider's historical training copies, so it does not automatically inherit direct liability for that act. Its more immediate exposure arises from its own conduct: supplying fine-tuning or retrieval material without the necessary rights or another legal basis, modifying or distributing challenged weights, deliberately eliciting close copies, and publishing or distributing the result.

The provider's provenance problem and the customer's publication problem are connected. They are not identical.

## Indemnity is not permission

Frontier providers increasingly compete on copyright indemnity. That development matters. A meaningful contractual defense can prevent a covered claim from becoming an existential expense.

But indemnity is a promise to handle certain consequences under certain conditions. It is not permission from the copyright owner.

Among the public standard terms reviewed through July 26, 2026, named paid offerings from leading closed US providers supplied the clearest provider-backed indemnities:

- [**Anthropic's commercial terms**](https://www.anthropic.com/legal/commercial-terms) expressly address covered allegations involving both data Anthropic used to train its models and covered customer outputs.
- [**OpenAI**](https://openai.com/policies/service-terms/) provides output protection for its direct API and eligible business products, but not the equivalent commercial protection for ordinary consumer ChatGPT use.
- [**Google Cloud**](https://cloud.google.com/terms/generative-ai-indemnified-services) separates protection for its training-data use from protection for unmodified output and limits it to paid services on its covered list.
- [**Microsoft**](https://learn.microsoft.com/en-us/azure/foundry/responsible-ai/openai/customer-copyright-commitment?view=foundry-classic) provides its Customer Copyright Commitment for qualifying paid commercial Copilots and Azure OpenAI uses when required safeguards remain in place.
- [**AWS**](https://aws.amazon.com/service-terms/) covers output claims for a named group of its own generally available generative services, not automatically for every third-party model accessible through the same platform.

The contracting route can change the answer without changing the underlying model. Claude Pro is not the same legal product as commercial Claude. The standalone Gemini API and Google AI Studio route was not listed under Google Cloud's public indemnified-services list at the research cutoff and should not be assumed to carry the protection available through the Gemini Enterprise Agent Platform API, formerly the Vertex AI API. A third-party model in a cloud marketplace does not automatically inherit every protection associated with the cloud provider's own models. Open weights add another trade: greater operational control usually arrives with less provider-backed defense.

Common exclusions include customer-supplied content, retrieval and fine-tuning data, modifications, combinations with other systems, trademark use, known infringement, disabled filters or citations, free and preview services, third-party offerings, and continued use after notice.

Customization shifts the risk boundary. Retrieval, fine-tuning, tools, post-processing, and customer-supplied material may improve the system. Provider terms often exclude those same customer-supplied elements from the defense.

Indemnity may pay for a covered fight. It does not prevent the fight, prove provenance, create copyright, clear the output, preserve product availability, or repair reputational damage.

## The geography trap

It is tempting to reduce this market to a geopolitical comparison: American models are governed and constrained; Chinese models are unrestricted and legally risky.

The evidence does not support that binary.

[China's rules for public generative-AI services](https://www.cac.gov.cn/2023-07/13/c_1690898327029107.htm) require providers serving the mainland public to use lawfully sourced training data and avoid infringing intellectual-property rights. Recommended standards [GB/T 45652-2025](https://openstd.samr.gov.cn/bzgk/std/newGbInfo?hcno=82710B59110419C285BDC48AB4D7D1F3) and [GB/T 45654-2025](https://openstd.samr.gov.cn/bzgk/std/newGbInfo?hcno=F67D3F376E0A0A0FF5317FB36B32A30A) add expectations around provenance, authorization records, pre-training IP review, known-infringing material, and complaint channels. [AI-content labeling rules](https://www.cac.gov.cn/2025-03/14/c_1743654684782215.htm), effective September 1, 2025, add another layer of provider and publisher obligation. These regulatory duties do not prove that a particular corpus is clean or give customers a civil indemnity.

Chinese courts have also begun testing both sides of the issue. The [Beijing Internet Court](https://english.bjinternetcourt.gov.cn/2024-02/28/c_695.htm) recognized copyright in an AI-assisted image where it found meaningful human contribution through prompting, parameter adjustment, iteration, and selection. Other lower courts have found direct or contributory provider liability in fact-specific cases involving generated images of protected characters, as summarized in this [Supreme People's Court IP survey](https://ipc.court.gov.cn/zh-cn/news/view-4513.html). These are early and sometimes divergent lower-court developments, not a settled national answer. But they are enough to disprove the idea that Chinese AI operates outside copyright law.

Where a current difference becomes visible is in public standard service terms, enterprise agreements, and open-weight model licenses.

Across the public routes reviewed for [Kimi OpenPlatform](https://platform.kimi.ai/docs/agreement/modeluse), [DeepSeek's hosted platform](https://cdn.deepseek.com/policies/en-US/deepseek-open-platform-terms-of-service.html) and [V3.2 open-weight license](https://huggingface.co/deepseek-ai/DeepSeek-V3.2/blob/main/LICENSE), [Alibaba Cloud Model Studio/Qwen](https://www.alibabacloud.com/help/en/legal/latest/alibaba-cloud-international-website-product-terms-of-service-v-3-8-0), [Baidu Qianfan](https://intl.cloud.baidu.com/en/doc/qianfan/s/Cmn5zc5tn), and [Z.ai/GLM](https://docs.z.ai/legal-agreement/terms-of-use), the public standard terms generally left more output responsibility with the customer than did the named, paid US enterprise offerings discussed above. Negotiated agreements may differ. [BytePlus](https://docs.byteplus.com/en/docs/legal/docs-service-specific-terms) is a meaningful exception: its current international enterprise model-service terms provide a conditional output-IP defense in available territories, although the service is unavailable in the United States and separate product-specific terms may differ.

The American side has its own exceptions. [Meta's Llama 4 open-weight license](https://github.com/meta-llama/llama-models/blob/main/models/llama4/LICENSE) supplies no provider output defense and disclaims non-infringement. [xAI's enterprise terms](https://x.ai/legal/terms-of-service-enterprise) provide general service-level IP protection while expressly excluding claims arising from customer Input, Output, or training data.

Nationality is a weak proxy. A US open-weight model can leave a company less protected than a covered Chinese enterprise service. A Chinese provider may face domestic IP obligations while offering the customer little contractual defense. A qualifying non-European provider placing a general-purpose AI model on the EU market can also face [EU requirements](https://digital-strategy.ec.europa.eu/en/factpages/general-purpose-ai-obligations-under-ai-act) for a copyright-compliance policy and a sufficiently detailed public summary of training content.

The better predictor is the route: the product, tier, contract, customization, and jurisdiction through which the model reaches the company. The provider's passport tells you less than the agreement you actually signed.

## The industry is building a copyright stack

The market is not waiting for a single court decision to settle everything. It is assembling several layers of risk reduction.

[Adobe Firefly](https://www.adobe.com/ai/overview/firefly/gen-ai-approach.html), [Getty Images](https://www.gettyimages.co.uk/ai), and Shutterstock's [data-licensing](https://www.shutterstock.com/data-licensing) and [license](https://www.shutterstock.com/license) programs illustrate a shift toward products built around licensed or rights-cleared sources. Each provider combines a different mix of contributor compensation, output controls, and scoped commercial protection, and the exact coverage depends on the plan and use. These products offer a narrower provenance story, not a guarantee that every output is unique, copyrightable, or free from every third-party claim.

Code assistants are adding another layer. [GitHub Copilot](https://docs.github.com/en/copilot/concepts/completions/code-referencing), [Amazon Q Developer](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/code-reference.html), and [Gemini Code Assist](https://docs.cloud.google.com/gemini/docs/codeassist/code-overview) can identify or suppress some suggestions that closely match indexed public code and can surface source or license information. These are useful controls. They are not complete copyright, patent, confidential-code, or open-source compliance scanners.

Content provenance systems such as [C2PA Content Credentials](https://spec.c2pa.org/specifications/) record signed claims about where an asset came from and how it was modified. Licensing markets are expanding through direct publisher agreements, collective licenses, and specialist rights-cleared datasets. [AI-specific insurance](https://www.munichre.com/en/solutions/for-industry-clients/insure-ai/faq.item-63b78dc6572d54d4c380b34189b6c273.html) is beginning to appear as an additional financial backstop.

Together, the market is assembling a practical stack:

> Permissioned data → output and match controls → human review → provenance → contractual indemnity → insurance

Each layer reduces a different risk. None proves human authorship or non-infringement. There is still no single “copyright-safe” switch.

None of this supports a blanket ban. Companies already manage licensed media, open-source code, employee work, and third-party claims. Generative AI changes the speed and volume: thousands of plausible assets can exist before anyone has decided who reviews them or what evidence survives.

The response is to make responsibility explicit before creation becomes distribution.

## Copyright governance is an operating chain

The provider controls several links:

- how it acquires and documents its training corpus;
- how it deduplicates data and tests for regurgitation;
- which filters, citations, and similarity controls it supplies;
- what its contract promises to defend.

The deploying company controls others:

- what employees upload or retrieve;
- whether it has rights to its RAG and fine-tuning corpora;
- which prompts and tools it encourages;
- how outputs are modified, reviewed, and combined;
- what ultimately gets shipped, published, or left online after notice.

Neither party can substitute for the other.

Customer governance cannot retroactively clean the provider's corpus. Provider indemnity cannot validate the customer's inputs, establish human authorship, or supervise every publication decision.

For enterprises, that means model approval cannot stop at the vendor's name. The inventory must identify the legal entity, product, model version, endpoint, tier, region, beta or general-availability status, contract version, covered claims, exclusions, required safeguards, and downstream use.

Retrieval and fine-tuning data should be managed like software dependencies: source, owner, license, permitted purpose, territory, duration, attribution, and deletion obligations. High-risk code and media need similarity or license scanning. Valuable assets need evidence of meaningful human contribution: drafts, edits, selections, layers, and reviewer decisions. Organizations also need a complaint, takedown, quarantine, and evidence-preservation process before the first claim arrives.

This is not bureaucracy added around AI. It is the operating system that makes delegated creation governable.

## Three questions before an output ships

Executives do not need to become copyright lawyers. They do need to insist that their organizations can answer three questions:

1. **Can we document the rights and provenance of what went in, and lawfully distribute what came out?**
2. **Did humans contribute enough authorship for this to become an asset we can protect?**
3. **Under this exact product, tier, endpoint, and contract, who handles a claim and what is excluded?**

If those answers come from three different teams, that is normal. If nobody can assemble them before publication, the chain is broken.

Generative AI did not eliminate copyright. It separated creation from accountability.

The real enterprise divide is visible risk allocation versus hidden risk transfer.

Before the next AI-generated asset ships, ask one question: if a claim arrives tomorrow, can we show what source material went in, which model route produced the output, who reviewed it, what rights we own, and who agreed to defend us?

---

*This article provides general decision-support information, not legal advice. Law, provider terms, model availability, and litigation change quickly. The provider comparison reflects public standard terms reviewed through July 26, 2026; negotiated agreements may differ. Verify the exact product, tier, endpoint, contracting entity, jurisdiction, and current documents with qualified counsel before relying on them.*

*Selected legal sources: [US Copyright Office: Copyrightability](https://www.copyright.gov/ai/Copyright-and-Artificial-Intelligence-Part-2-Copyrightability-Report.pdf) · [US Copyright Office: Generative AI Training](https://www.copyright.gov/ai/Copyright-and-Artificial-Intelligence-Part-3-Generative-AI-Training-Report-Pre-Publication-Version.pdf) · [Bartz v. Anthropic fair-use opinion](https://cases.justia.com/federal/district-courts/california/candce/3%3A2024cv05417/434709/231/0.pdf) · [Bartz final settlement approval](https://assets-us-01.kc-usercontent.com/1eeb16db-4934-006e-40a6-38fa91285ebb/36cce252-a32c-4cbb-a624-31dd8ac9574c/2026-07-20%20Order%20Granting%20Final%20_dckt%20680_0_.pdf) · [PRC Interim Measures](https://www.cac.gov.cn/2023-07/13/c_1690898327029107.htm) · [EU GPAI obligations](https://digital-strategy.ec.europa.eu/en/factpages/general-purpose-ai-obligations-under-ai-act).*
