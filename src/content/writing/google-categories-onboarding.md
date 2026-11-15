---
title: Replacing our industry list with Google's
summary: A custom list of 50+ industries was quietly breaking Reserve with Google integrations. Using Google's own categories fixed it and told marketing where to focus.
date: 2026-11-15
role: Solo, from architecture design through implementation to release.
order: 3
stack: [Google Business Profile API, Microservices, React]
---

## Context

In our scheduling product, customers can connect to Reserve with Google, which puts a "Book now" button on their Google listing.

During onboarding, a business picked its industry from our own list of 50+ industries, which we used for tracking and segmentation. When that business later integrated with Reserve with Google, the integration failed because our industry didn't match any Google category.

## Decision

Use Google's categories instead of ours. I proposed integrating the Google Business Profile API to fetch Google's industry categories and using them in onboarding and across the application.

I built a microservice that pulls the categories, caches them internally, and refreshes them with a background job every three months. The frontend reads from that service and lets the user pick a category. There is less friction at signup, and the Reserve with Google integration works because the category is already one Google recognises.

## Outcome

In the first week after release, signups covered about 1,300 distinct industries.

That gave us two things: integrations that went through smoothly, and a list of the industries that sign up most often, which marketing could target with dedicated landing pages.

## What came next

We then rebuilt the onboarding flow so a business can connect its Google Business account. We fetch the details we need and pre-fill them, which shortens onboarding. The flow is built so the native mobile app can load it in a webview too.
