---
title: She asked for a mannequin. I built one.
summary: My wife needed captions and a mannequin for her boutique's Instagram page. I built a phone app that writes the first and generates the second.
date: 2026-11-15
role: Solo, from the idea to the deployed app.
order: 0
personal: true
stack: [Cloudflare Workers, Claude API, Gemini API, JavaScript]
---

## Context

My wife runs a boutique for custom blouses with aari embroidery, and she sells through her Instagram page, [@sruthiaaridesigns](https://www.instagram.com/sruthiaaridesigns/). For every post she depended on me to get the caption and the positioning right. That made me a bottleneck in someone else's business.

Then she asked to buy a mannequin, so her blouses could be photographed properly.

## Options considered

1. **Buy a mannequin.** This was her request, and a fair one. A mannequin shows a blouse well. It also has to live somewhere in the house, and it does not write captions.
2. **Build one.** I am an engineer, so I heard "buy a mannequin" and proposed software. An app could put her blouse on a mannequin in a picture, and take the caption work off me in the same go.

## Decision

I built the second option as a phone web app, in three phases.

1. **Captions.** She uploads photos of a blouse or saree, or a Reel, and gets three captions in different styles, hashtags for the first comment, and song ideas. The app describes only what is visible in the photos or written in her notes, and her notes win when the two disagree. It also shows a short summary of what it thinks the garment is, so she can catch a misread before posting.
2. **A mannequin test before a mannequin feature.** I wrote a standalone script that ran five of her real photos through the image model and laid the results side by side, so we could judge it on her work before it went into the app.
3. **The mannequin in the app.** She marks each photo as front or back and can add a placement note, such as where the ties sit. The original is shown beside the result so she can check that no detail has moved. It handles blouses and sarees, and outputs sizes for posts and Reels.

The app is plain HTML, CSS and JavaScript with no build step, on Cloudflare Workers. It sits behind a PIN and has a daily limit on captions and on mannequin images, so a mistake cannot run up a bill.

## Outcome

All three phases are built and deployed, and the app is installed on her phone.

She writes her posts herself now. No mannequin has been bought.
