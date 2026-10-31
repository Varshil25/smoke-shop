# Tacony Smoke website (React)

The Tacony Smoke website built with **React 19**, **React Router 7** and **Vite**, matching the Tacony Smoke Figma design.

## Run it

You need [Node.js](https://nodejs.org) 20 or newer.

```bash
npm install        # once, installs React, React Router and Vite
npm run dev        # local site with live reload at http://localhost:5173
npm run build      # production build into the dist/ folder
npm run preview    # check the production build at http://localhost:4173
```

## Edit the content

**Almost everything you'd change lives in one file: `src/data/site.js`.**

| What | Where in `site.js` |
|---|---|
| Store names, addresses, phone numbers | `stores` |
| Store hours | `stores[].hours` (24-hour numbers; they drive the printed hours **and** the live "Open now / Closed now" status, in Philadelphia time) |
| Store photos | `stores[].photo` |
| Product categories, descriptions, photos | `categories` |
| Shop filter buttons | `filters` |
| Brand logos on the Shop page | `brands` (empty = placeholder boxes) |
| Deals | `deals` |
| Rewards steps | `rewardSteps` |
| "Why people come back", "Before you visit", "What we stand for" | `whyPoints`, `visitPoints`, `values` |
| FAQs | `rewardsFaq`, `contactFaq` |
| Email, social links, opening years | `site` |
| Form addresses | `site.forms` |
| Menu links | `nav` |

### Photos

Put images in `public/images/` and point to them with a path starting at `/images/`:

```js
image: "/images/glass-display.jpg",
```

Any photo left as `null` shows a labeled grey placeholder.

## Connect the forms

The contact form and the text club sign-up post to the addresses in `site.forms`. While they're empty, the forms show a "not connected yet" note instead of sending.

- **Contact form:** create a free form at a service such as Formspree, then paste its address into `contactEndpoint`, for example `"https://formspree.io/f/abcdwxyz"`. The form sends JSON and shows a thank-you message when it goes through.
- **Text club:** use your SMS marketing provider. If it gives you an endpoint that accepts a `phone` field, put it in `textClubEndpoint`. If it gives you a hosted sign-up page instead, change the form in `src/components/TextClub.jsx` to a link to that page. SMS marketing needs customer consent and STOP/HELP handling, which these providers manage.

## Put it online

Run `npm run build`, then host the `dist/` folder.

The site uses normal page addresses like `/shop` and `/locations`, so the host must send every address to `index.html`. The project already includes the setup for the common hosts:

- **GitHub Pages:** already set up. The workflow in `.github/workflows/deploy.yml` builds and publishes the site every time you push to `main`. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions** (one time). The site appears at `https://<your-username>.github.io/<repo-name>/`. If you later add a custom domain, change `BASE_PATH` in the workflow to `/`.
- **Netlify:** build command `npm run build`, publish directory `dist`. The included `public/_redirects` handles page links.
- **Vercel:** import the project and accept the defaults. The included `vercel.json` handles page links.
- **Cloudflare Pages:** build command `npm run build`, output directory `dist`.
- **Traditional host (cPanel/Apache, e.g. GoDaddy, Bluehost):** upload the contents of `dist/` to `public_html`, and add this `.htaccess` file next to `index.html`:
  ```
  RewriteEngine On
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
  ```

## Project layout

```
src/
  data/site.js          all store details and page content
  lib/hours.js          hours formatting and open/closed logic
  hooks/                useStoreStatus, useFormSubmit, usePageTitle
  components/           Header, Footer, AgeGate, StoreCard, RewardsBand, TextClub, Photo, Arch, ...
  pages/                Home, Shop, Locations, Deals, About, Contact, Legal, NotFound
  styles/global.css     all styles; colors and fonts match the Figma design system
  assets/fonts/         Big Shoulders Display + Instrument Sans (SIL Open Font License, licenses included)
public/                 favicon, _redirects, images/
```

## Before you go live

All content in `src/data/site.js` is sample content. Replace:

1. Addresses, phone numbers and hours for both stores.
2. Email, social links and the opening years (`20XX`).
3. Deals. Check Pennsylvania and Philadelphia rules on tobacco and vape promotions before publishing real ones.
4. Store policies: the 7-day device exchange, rewards point rules and return rules.
5. Photos and brand logos.
6. The Privacy policy and Terms of use pages (`src/pages/Legal.jsx`) need your real text before you collect phone numbers or messages.

## Notes

- **Age check.** The 21+ pop-up shows on a visitor's first visit and is remembered in their browser. It's a confirmation screen, not ID verification, so keep checking ID in store.
- **Map.** The map on the Locations page is an illustration. To show a live map, replace `StoreMap` in `src/pages/Locations.jsx` with a Google Maps embed `<iframe>` (Google Maps → Share → Embed a map).
- **Search engines.** Each page sets its own browser title. This is a single-page app, so if search ranking becomes a priority later, adding pre-rendering is the usual next step.
