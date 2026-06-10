# IP & Legal

## Patent Filings

| Filing | Date | Status | Notes |
|---|---|---|---|
| Provisional Patent Application | **May 28, 2025** | Filed ✅ | Original provisional covering all four device embodiments |
| PCT International Application | **May 26, 2026** | Filed ✅ | PCT filed within the 12-month provisional window |
| 30-Month National Phase Deadline | **~November 26, 2027** | Upcoming ⚠️ | ~30 months from provisional; national-phase entries must be filed by this date |
| Patent Issue | TBD | Pending 🕐 | Patent is filed, not yet issued; claims not yet granted |

> **Note:** An issued patent (not just filed) is a significant value milestone — it moves the valuation from ~$150K–$1.5M toward ~$2M–$5M+.

---

## Attorney Contact

**Shem Lachhman**
Menlo Park Patents (DBA of Neventus, LLC)
Email: [slachhman@menopp.com](mailto:slachhman@menopp.com)

---

## Claims — Plain Language Summary

The Root View patent covers an automated system for measuring runoff water chemistry per grow zone in a hydroponic facility. The core method:

1. Multiple drain lines — one per grow zone/table — each controlled by a normally-closed motorized ball valve.
2. The master device opens valves **one at a time**, capturing a clean, isolated sample from a single zone before moving to the next.
3. The sample is measured for **EC (electrical conductivity)**, **pH**, and **volume**.
4. Data is logged and optionally synced to a cloud/app backend.
5. Between samples, the sensor chamber can be flushed with fresh water or pH storage solution to prevent cross-contamination.

**What this protects:** the sequential, per-zone isolation method. Competitors like AROYA's Drip and Drain measure a blended combined drain stream — no per-zone isolation, and no pH (as of early 2026). This is the documented method-and-apparatus gap.

**Four embodiments are filed**, covering both:
- **Embodiment A** — trough-integrated (device sits in the floor-drain trough)
- **Embodiment B** — manifold/plumbing-inline (device connects to drain lines directly)
- Additional variants covering individual plant-level sampling and other configurations

---

## Prior Art

Based on the official patent search (Melle Newman-Adjiri and Seyed Robert Brubaker search reports on file), no prior art was found that directly anticipates Root View's claims. Search reports are on file in `Docs/Official/`.

**Sequential sampler prior art — on file, not invalidating:**

| Patent | Title | Why It Doesn't Anticipate |
|---|---|---|
| US 8,302,464 | Sequential stormwater/runoff sampler | Surface water runoff, not hydroponic substrate; no EC/pH measurement |
| US 8,596,149 | Composite water sampler with sequential collection | Water quality sampling, not grow-zone leachate; no valve-per-zone isolation of substrate drain |
| US 4,092,995 | Irrigation sequence valve control | Field irrigation sequencing, not substrate drain chemistry; no sample-and-measure cycle |

None of these cover **hydroponic per-zone substrate leachate measurement**. Claims should distinguish on: (1) substrate/growing-medium application, (2) normally-closed motorized valve per drain zone, (3) pH + EC + volume measurement of isolated leachate, (4) sequential isolation flush cycle between zones.

**No AROYA/Addium patent on drain monitoring found** (as of research cutoff). AROYA Drip and Drain is a product, not a patent filing. Root View's method patent has no direct filed-patent competitor.

**Ridder DrainChecker** (Netherlands commercial greenhouse product) is a device a patent examiner may cite as prior art. Key distinction: Ridder uses **physical separate sensors** placed per zone — it does not use a centralized sequential valve-isolation architecture. Root View's patent covers the *method* of opening normally-closed valves one at a time so a single sensor chamber samples each zone sequentially with flush cycles between. These are architecturally distinct approaches.

Additional distinction points for claim drafting:
- Ridder targets Dutch-model commercial greenhouse (tomato, pepper); not designed for US cannabis drain-trough retrofit
- No cannabis platform (AROYA) integration
- No sequential isolation flush cycle claim

---

## Action Items

> **⚠️ No formal partnership or IP agreement between Brian and Rob exists yet.**
> The current arrangement is verbal — a 60/40 split (Rob 60% / Brian 40%). A written co-inventor and partnership agreement should be drafted before any meaningful licensing or acquisition conversations begin.

- [ ] Draft and execute a co-inventor/partnership agreement covering IP ownership, equity split, decision rights, and exit proceeds
- [ ] Discuss national-phase filing strategy with Shem Lachhman — which jurisdictions to enter and at what cost
- [ ] Decide on CIP (continuation-in-part) necessity for any V.2 design elements not covered in the provisional
- [ ] Research AROYA conversation protocol: NDA + evaluation/option agreement before any technical disclosure

---

## Key Risk: Pitching to a Competitor

AROYA/Addium has a competing product (Drip and Drain). **Before any substantive conversation with AROYA:**
1. Execute a mutual NDA.
2. Add an evaluation/option agreement with a defined diligence window.
3. Disclose claims and benchmark results only — not enabling build detail.
4. Lean on PCT filing as priority date protection.
