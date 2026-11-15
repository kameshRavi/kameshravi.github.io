---
title: Cache the data, not the page
summary: How we chose a caching strategy for a server-rendered landing page that pulls from more than 10 upstream services and has to paint in under 500 ms.
date: 2026-11-15
role: A shared effort. I was part of both the architecture design and the implementation team.
order: 2
stack: [Next.js, GraphQL, Node.js, Redis]
---

## Context

We had a legacy landing page serving millions of requests a day. It took 2 to 3 seconds to load. The page is highly dynamic and needs data from more than 10 upstream services, and some of those can't be called in parallel because one needs the result of another.

We decided to rebuild it with three requirements:

1. Search engines must be able to index the dynamic content.
2. The visible part of the page must render fully in under 500 ms.
3. It must scale, with millions of requests already and more on the way.

That led us to Next.js server rendering with a GraphQL BFF that consolidates the upstream services. The open question was the caching strategy.

## Options considered

1. **Cache the HTML with Incremental Static Regeneration.** Generate static HTML, serve it from the CDN, and revalidate on demand to keep it fresh. Loading is excellent. But every background regeneration re-fetches from all the upstream services, and many pages overlap in the data they use, so the same data is fetched again and again. Vercel also bills for the whole time a server function runs, so we would pay for waiting on upstream latency.

2. **Cache the data in a key-value store and render HTML on the fly.** Cache each upstream service's response in a shared store, then render the page at request time. Upstream services are called only when a cache entry is empty, stale or explicitly invalidated.

## Decision

We went with the second option. Each upstream response is stored under a unique key with a TTL that moves through three states: fresh, stale and expired.

Pages that share data share cache entries, so one upstream call serves many pages, and rendering stays cheap because it rarely waits on an upstream service.

## Outcome

Caching at the data level gave us the better result on both speed and cost.
