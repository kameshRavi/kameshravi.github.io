---
title: Micro-frontends so one shell could sell every product
summary: We didn't move to micro-frontends because of monolith pain. We moved so a single shell could plug in whichever products a customer needed.
date: 2026-11-15
role: Designed the architecture, took it through architecture review, and wrote about 70% of the implementation.
order: 4
stack: [Module Federation, React, TypeScript, Sentry]
---

## Context

The company sells a receptionist and answering service, plus separate products for live chat, scheduling and time tracking. Each product had its own portal and its own codebase.

We saw a cross-selling opportunity. Scheduling customers often needed the receptionist service, and receptionist customers often needed live chat. With separate portals, offering one product inside another meant rebuilding it.

So the trigger was not the usual one. The monolith wasn't hurting us. We wanted composition.

## Why micro-frontends

The requirement was that one shell could load only the products a given customer and brand needed, without each product knowing about the others. Micro-frontends composed at runtime fit that directly: the shell decides what to load when the page opens, and each product ships on its own.

## Decision

Each brand's micro-frontend details live in a microservice as metadata. The shell fetches that metadata, then loads and starts each micro-frontend with the details it needs.

Because composition happens at runtime, a remote is just a versioned bundle at a URL.

## Outcome

Today the platform runs more than 10 micro-frontends across more than 10 brands, for about 10,000 daily active users.

What we got right:

1. **Independent releases.** Each team deploys its micro-frontend on its own, because nothing is composed at build time.
2. **Web and mobile from one bundle.** The same micro-frontends load inside the native mobile app's webview, so we reuse them across both.

What we learned:

1. **Cross-communication needs a contract.** I built a custom event bus so micro-frontends can talk to each other without depending on each other directly.
2. **Error tracking wasn't ready for this.** When we started, Sentry didn't support micro-frontends, so we wrote a wrapper to attribute errors to the right one. Sentry has since added its own support for this.
3. **Local development needs a stand-in shell.** A micro-frontend can't run alone, so developers need a way to simulate the shell on their machine.
