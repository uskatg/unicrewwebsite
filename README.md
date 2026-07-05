# unicrew Website

Static website for **unicrew GmbH** — Ihr Spezialist für Eventpersonal im Großraum Hamburg.
Redesign based on the [uniworks.gmbh](https://www.uniworks.gmbh) design language, keeping the original content of [unicrew.gmbh](https://www.unicrew.gmbh).

## Stack

- Hand-authored static HTML + CSS + vanilla JS — no build step, no framework.
- Typography: IBM Plex Sans, self-hosted in `/fonts`.
- Icons: Tabler Icons webfont (CDN).
- Hosting: Vercel (`vercel.json` enables clean URLs, e.g. `/unternehmen` → `unternehmen.html`).

## Structure

```
index.html                 Landing page (hero, Branchen, photo carousel, audience split, CTA)
unternehmen.html           B2B: services, references, stats, contact (Moritz Lange)
studierende.html           B2C: 1:1 port of uniworks /studierende (phone hero, shift wall,
                           16 € banner, app carousel, how-it-works, FAQ, partners)
vorteile.html              unicrew Member vs. unicrew Plus benefits
faq.html                   FAQ pointer to uniworks + WhatsApp/e-mail contact
impressum.html             Legal notice
datenschutz.html           Privacy policy
nutzungsbedingungen.html   App terms of use
404.html                   Not-found page
css/style.css              Shared design system (brand green #28B54A)
js/main.js                 Nav shadow, mobile menu, active links, fade-up, carousel arrows
app-banner.js              Smart-app-banner (ported from uniworks)
images/                    Brand assets, work photos, app screenshots, icons
fonts/                     IBM Plex Sans woff2 + @font-face CSS
```

## Local preview

Open any `.html` file directly in a browser, or run a local server:

```sh
python3 -m http.server 8000
```

(Root-absolute paths like `/css/style.css` require the server variant.)

## Deployment

Connected to Vercel. Every push to `main` deploys automatically once the
GitHub repo (`uskatg/unicrewwebsite`) is imported in the Vercel dashboard.
