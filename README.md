# BitCreations Website

A responsive, multi-page static company website. No build tools or dependencies are required.

## Preview
Open `index.html` directly, or run a local server:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Edit
- Page copy: edit the matching `.html` file.
- Global design: edit `assets/styles.css` variables at the top.
- Navigation/footer: currently repeated in each HTML file for zero-dependency hosting. Use search-and-replace to change them everywhere.
- Interactions: edit `assets/site.js`.
- Contact form: replace the `mailto:` behavior in `assets/site.js` with Formspree, Netlify Forms, your CRM, or your own API.

## Publish
Upload the folder to any static host (Netlify, Cloudflare Pages, GitHub Pages, cPanel, S3) and point `bitcreations.in` to that host.

## Before production
1. Add a real contact email/form endpoint.
2. Replace starter portfolio examples with approved projects.
3. Have legal counsel approve Privacy and Terms pages.
4. Add analytics and a cookie notice if required.
5. Run Lighthouse and test all forms on the production domain.
