# Khalil Mustafa Portfolio

Interactive portfolio built with Next.js, TypeScript, Tailwind CSS, and a retro terminal visual style. The site combines a dark neon UI with custom animated scenes for the home, experience, and education sections.

## Live Site

Visit the portfolio at [khalils.codes](https://khalils.codes).

## Overview

This portfolio includes:

- Terminal-style sidebar navigation
- Animated home walking scene
- Experience page with framed idle character animation
- Education page with study animation and custom background art
- Compact certifications gallery with modal preview
- Responsive layout for desktop and mobile

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Lucide React

## Run Locally

To run the project on your machine:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Project Structure

```text
app/                App router entry, global styles
components/         UI sections, tab content, animation components
data/               Portfolio content and navigation data
public/             Images, backgrounds, certificates, animation frames
```

## Main Content Files

If you want to edit portfolio content, these are the main files:

- `data/portfolio.ts`
  Profile text, projects, skills, education, experience, certifications, contact info, and sidebar labels.

- `components/PortfolioTabs.tsx`
  Main tab content for Home, Experience, Education, Skills, Projects, Certifications, and Contact.

- `components/WalkingScene.tsx`
  Home page running scene logic.

- `components/AboutGuy.tsx`
  Experience page idle character visual.

- `components/FrameAnimation.tsx`
  Reusable frame-by-frame animation component used by multiple sections.

- `app/globals.css`
  Visual styling, layout tuning, background layers, and animation presentation.

## Animation Assets

Frame-based animations are stored in:

```text
public/animations/Idle/
public/animations/Run/
public/animations/running with goal visible/
public/animations/study_idle/
```

Background assets are stored in:

```text
public/backgrounds/
```

## Customization Notes

- Sidebar order and labels are controlled in `data/portfolio.ts`
- Header labels and command lines are controlled in `app/page.tsx`
- Most text content lives in `data/portfolio.ts`
- Section layout tuning is mostly handled in `components/PortfolioTabs.tsx` and `app/globals.css`
- Animation speed, frame count, and frame paths are controlled in the animation components

## Deployment

This project is ready to deploy on Vercel.

Basic flow:

1. Push the repository to GitHub
2. Import it into Vercel
3. Keep the default Next.js settings
4. Deploy

## Notes

- Certificate previews are shown in a modal instead of rendering full-size in the grid
- Portfolio animations use real frame sequences from image folders rather than CSS sprite-sheet stepping
- The repository contains visual assets in `public/` that drive backgrounds, logos, and section-specific scenes
