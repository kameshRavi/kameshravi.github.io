---
title: From a Jira ticket to a pull request, without the handoffs
summary: A reusable skill that takes a Jira ticket, confirms the bug with an exploratory test, fixes it test-first and opens a pull request, with two human reviews on the way.
date: 2026-11-15
role: Designed and built the workflow.
order: 1
stack: [Claude Code, Claude API, Node.js, GitHub API]
---

## Context

Between a bug being triaged and a fix being delivered there were several manual handoffs.

The main purpose was to resolve issues faster, so we could meet our SLA and SLO targets.

## Decision

I created a reusable skill. Once a ticket is passed to it, the skill works through four steps:

1. It gathers the details of the issue from Jira.
2. It writes an exploratory test to confirm the ticket is a valid bug.
3. It fixes the bug using the TDD skill, writing the failing test before the change.
4. It creates the pull request.

A human stays in the loop at two points. Once the failing test is written, the skill requests a review. Before it creates the pull request, it requests a review again.

## Outcome

It removed the manual handoff between issue triage and code delivery.

It cut the time to a pull request from 30 to 40 minutes down to about 10 minutes. Triage got faster and our SLA and SLO results improved.
